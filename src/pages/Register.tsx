import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Calendar, Users, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  fullName: string;
  class: string;
  event: string;
}

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [registeredData, setRegisteredData] = useState<FormData | null>(null);
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm<FormData>();
  const { toast } = useToast();

  const events = [
    { value: 'speech', label: 'Speech Competition', icon: Users },
    { value: 'song', label: 'Patriotic Song Contest', icon: Trophy },
    { value: 'art', label: 'Art Competition', icon: Calendar },
    { value: 'debate', label: 'Debate Competition', icon: Users }
  ];

  const onSubmit = (data: FormData) => {
    setRegisteredData(data);
    setIsModalOpen(true);
    reset();
    toast({
      title: "Registration Successful!",
      description: `Welcome ${data.fullName}! You're registered for ${events.find(e => e.value === data.event)?.label}`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Event Registration
        </h1>
        <p className="text-xl text-muted-foreground">
          Join our Independence Day celebrations at LUBNA GBSS LANDHI 2-C
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Registration Form */}
        <div className="card-pakistan">
          <h2 className="text-2xl font-bold mb-6 text-foreground text-center">
            Register for Events
          </h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Full Name */}
            <div>
              <Label htmlFor="fullName" className="text-foreground">Full Name</Label>
              <Input
                id="fullName"
                {...register('fullName', { required: 'Full name is required' })}
                placeholder="Enter your full name"
                className="mt-1"
              />
              {errors.fullName && (
                <p className="text-destructive text-sm mt-1">{errors.fullName.message}</p>
              )}
            </div>

            {/* Class */}
            <div>
              <Label htmlFor="class" className="text-foreground">Class</Label>
              <Input
                id="class"
                {...register('class', { required: 'Class is required' })}
                placeholder="e.g., 9th Grade, 10th Grade"
                className="mt-1"
              />
              {errors.class && (
                <p className="text-destructive text-sm mt-1">{errors.class.message}</p>
              )}
            </div>

            {/* Event Selection */}
            <div>
              <Label htmlFor="event" className="text-foreground">Select Event</Label>
              <Select onValueChange={(value) => setValue('event', value)} required>
                <SelectTrigger className="mt-1">
                  <SelectValue placeholder="Choose an event to participate in" />
                </SelectTrigger>
                <SelectContent>
                  {events.map((event) => (
                    <SelectItem key={event.value} value={event.value}>
                      <div className="flex items-center space-x-2">
                        <event.icon className="h-4 w-4" />
                        <span>{event.label}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.event && (
                <p className="text-destructive text-sm mt-1">Please select an event</p>
              )}
            </div>

            {/* Submit Button */}
            <Button type="submit" className="w-full btn-pakistan">
              Register Now
            </Button>
          </form>
        </div>

        {/* Events Information */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <div key={index} className="card-pakistan">
              <div className="flex items-center space-x-3 mb-3">
                <div className="bg-primary/20 p-2 rounded-lg">
                  <event.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground">{event.label}</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                {event.value === 'speech' && "Express your love for Pakistan through powerful speeches about independence and patriotism."}
                {event.value === 'song' && "Sing patriotic songs and national anthems to celebrate our freedom and unity."}
                {event.value === 'art' && "Create beautiful artwork depicting Pakistan's culture, heritage, and independence struggle."}
                {event.value === 'debate' && "Engage in thoughtful debates about Pakistan's history, progress, and future."}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Success Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="bg-card border-border">
          <DialogHeader>
            <DialogTitle className="text-center text-gradient text-xl">
              🎉 Registration Successful! 🎉
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            {registeredData && (
              <>
                <p className="text-foreground mb-2">
                  Congratulations, <span className="font-bold text-primary">{registeredData.fullName}</span>!
                </p>
                <p className="text-muted-foreground mb-4">
                  You have successfully registered for the{' '}
                  <span className="font-semibold text-primary">
                    {events.find(e => e.value === registeredData.event)?.label}
                  </span>
                </p>
                <div className="bg-secondary/50 rounded-lg p-4 mb-4">
                  <p className="text-sm text-muted-foreground">
                    Class: <span className="text-foreground">{registeredData.class}</span>
                  </p>
                </div>
                <p className="text-sm text-muted-foreground">
                  We'll contact you soon with more details about the event. 
                  Good luck and Pakistan Zindabad! 🇵🇰
                </p>
              </>
            )}
          </div>
          <Button 
            onClick={() => setIsModalOpen(false)} 
            className="w-full btn-pakistan"
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Register;