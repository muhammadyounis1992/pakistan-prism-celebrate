import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Upload, Image, FileText, Plus } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const ContentManager = () => {
  const [uploading, setUploading] = useState(false);
  const [contentType, setContentType] = useState<'image' | 'document'>('image');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const uploadContent = async () => {
    if (!file || !title) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Please provide a title and select a file",
      });
      return;
    }

    setUploading(true);

    try {
      // Create storage bucket if it doesn't exist
      const bucketName = contentType === 'image' ? 'gallery' : 'documents';
      
      // Upload file to storage
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(2)}.${fileExt}`;
      const filePath = `${category || 'general'}/${fileName}`;

      const { error: uploadError } = await supabase.storage
        .from(bucketName)
        .upload(filePath, file);

      if (uploadError) {
        throw uploadError;
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from(bucketName)
        .getPublicUrl(filePath);

      // Save metadata to database (you can create a content table for this)
      const contentData = {
        title,
        description,
        category: category || 'general',
        file_url: publicUrl,
        file_path: filePath,
        file_type: contentType,
        file_size: file.size,
        created_at: new Date().toISOString()
      };

      toast({
        title: "Success",
        description: `${contentType === 'image' ? 'Image' : 'Document'} uploaded successfully!`,
      });

      // Reset form
      setTitle('');
      setDescription('');
      setCategory('');
      setFile(null);
      
      // Clear file input
      const fileInput = document.getElementById('file-upload') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }

      console.log('Content uploaded:', contentData);

    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Upload Failed",
        description: error.message || "Failed to upload content",
      });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Upload className="h-5 w-5" />
            <span>Upload Content</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Content Type Selection */}
          <div className="space-y-2">
            <Label>Content Type</Label>
            <Select value={contentType} onValueChange={(value: 'image' | 'document') => setContentType(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="image">
                  <div className="flex items-center space-x-2">
                    <Image className="h-4 w-4" />
                    <span>Image/Photo</span>
                  </div>
                </SelectItem>
                <SelectItem value="document">
                  <div className="flex items-center space-x-2">
                    <FileText className="h-4 w-4" />
                    <span>Document/File</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Title */}
          <div className="space-y-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              placeholder="Enter content title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          {/* Description */}
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter content description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
            />
          </div>

          {/* Category */}
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="independence-day">Independence Day</SelectItem>
                <SelectItem value="heroes">National Heroes</SelectItem>
                <SelectItem value="symbols">National Symbols</SelectItem>
                <SelectItem value="history">History</SelectItem>
                <SelectItem value="culture">Culture</SelectItem>
                <SelectItem value="events">Events</SelectItem>
                <SelectItem value="general">General</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* File Upload */}
          <div className="space-y-2">
            <Label htmlFor="file-upload">
              {contentType === 'image' ? 'Select Image' : 'Select File'} *
            </Label>
            <Input
              id="file-upload"
              type="file"
              onChange={handleFileChange}
              accept={contentType === 'image' ? 'image/*' : '*/*'}
              required
            />
            {file && (
              <div className="text-sm text-muted-foreground">
                Selected: {file.name} ({(file.size / 1024 / 1024).toFixed(2)} MB)
              </div>
            )}
          </div>

          {/* Upload Button */}
          <Button 
            onClick={uploadContent} 
            disabled={uploading || !file || !title}
            className="w-full"
          >
            {uploading ? (
              <>
                <Upload className="h-4 w-4 mr-2 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <Plus className="h-4 w-4 mr-2" />
                Upload {contentType === 'image' ? 'Image' : 'File'}
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Quick Info Card */}
      <Card>
        <CardHeader>
          <CardTitle>Upload Guidelines</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-muted-foreground">
          <p>• <strong>Images:</strong> Upload photos for the gallery, hero banners, or visual content</p>
          <p>• <strong>Documents:</strong> Upload PDFs, presentations, or other files</p>
          <p>• <strong>Categories:</strong> Help organize content for easy management</p>
          <p>• <strong>File Size:</strong> Maximum 10MB per file recommended</p>
          <p>• <strong>Formats:</strong> Images (JPG, PNG, GIF, WebP), Documents (PDF, DOC, PPT, etc.)</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentManager;