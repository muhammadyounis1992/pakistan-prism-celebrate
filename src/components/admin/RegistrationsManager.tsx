import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Search, Download, Users, Calendar, Phone, Mail } from 'lucide-react';

interface Registration {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  class_level: string;
  participation_type: string;
  created_at: string;
}

const RegistrationsManager = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [filteredRegistrations, setFilteredRegistrations] = useState<Registration[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchRegistrations();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      const filtered = registrations.filter(reg =>
        reg.full_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.class_level.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reg.participation_type.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredRegistrations(filtered);
    } else {
      setFilteredRegistrations(registrations);
    }
  }, [searchTerm, registrations]);

  const fetchRegistrations = async () => {
    try {
      const { data, error } = await supabase
        .from('registrations')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch registrations",
        });
      } else {
        setRegistrations(data || []);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "An unexpected error occurred",
      });
    } finally {
      setLoading(false);
    }
  };

  const exportToCSV = () => {
    const headers = ['Name', 'Email', 'Phone', 'Class Level', 'Participation Type', 'Registration Date'];
    const csvContent = [
      headers.join(','),
      ...filteredRegistrations.map(reg => [
        reg.full_name,
        reg.email,
        reg.phone,
        reg.class_level,
        reg.participation_type,
        new Date(reg.created_at).toLocaleDateString()
      ].join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `registrations_${new Date().toISOString().split('T')[0]}.csv`;
    link.click();
    window.URL.revokeObjectURL(url);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Registrations</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">{registrations.length}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Recent (Last 7 days)</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">
              {registrations.filter(reg => {
                const regDate = new Date(reg.created_at);
                const sevenDaysAgo = new Date();
                sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
                return regDate >= sevenDaysAgo;
              }).length}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Participants</CardTitle>
            <Badge variant="secondary">
              {registrations.filter(reg => reg.participation_type === 'participant').length}
            </Badge>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">
              Volunteers: {registrations.filter(reg => reg.participation_type === 'volunteer').length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Export */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search registrations..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Button onClick={exportToCSV} variant="outline">
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </div>

      {/* Registrations List */}
      <div className="grid gap-4">
        {filteredRegistrations.map((registration) => (
          <Card key={registration.id}>
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                <div className="space-y-2">
                  <div className="flex items-center space-x-4">
                    <h3 className="text-lg font-semibold">{registration.full_name}</h3>
                    <Badge variant={registration.participation_type === 'participant' ? 'default' : 'secondary'}>
                      {registration.participation_type}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>{registration.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{registration.phone}</span>
                    </div>
                  </div>
                  
                  <div className="text-sm">
                    <span className="font-medium">Class Level:</span> {registration.class_level}
                  </div>
                </div>
                
                <div className="text-sm text-muted-foreground text-right">
                  <div>Registered on</div>
                  <div className="font-medium">
                    {new Date(registration.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredRegistrations.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            {searchTerm ? 'No registrations found matching your search.' : 'No registrations yet.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default RegistrationsManager;