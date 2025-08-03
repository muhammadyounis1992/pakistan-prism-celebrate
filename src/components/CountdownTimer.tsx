import { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isIndependenceDay: false
  });

  useEffect(() => {
    const targetDate = new Date('August 14, 2024 00:00:00').getTime();
    
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds, isIndependenceDay: false });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isIndependenceDay: true });
      }
    };

    const timer = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.isIndependenceDay) {
    return (
      <div className="card-pakistan text-center">
        <div className="flex items-center justify-center mb-4">
          <Clock className="h-8 w-8 text-primary mr-3" />
          <h2 className="text-2xl font-bold text-gradient">Happy Independence Day!</h2>
        </div>
        <p className="text-muted-foreground">🇵🇰 Celebrating 77 years of freedom! 🇵🇰</p>
      </div>
    );
  }

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  return (
    <div className="card-pakistan text-center">
      <div className="flex items-center justify-center mb-6">
        <Clock className="h-8 w-8 text-primary mr-3" />
        <h2 className="text-2xl font-bold text-gradient">Countdown to Independence Day</h2>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {timeUnits.map((unit, index) => (
          <div key={index} className="bg-secondary/50 rounded-lg p-4">
            <div className="text-3xl md:text-4xl font-bold text-primary">
              {unit.value.toString().padStart(2, '0')}
            </div>
            <div className="text-sm text-muted-foreground uppercase tracking-wide">
              {unit.label}
            </div>
          </div>
        ))}
      </div>
      
      <p className="text-muted-foreground mt-4">
        🇵🇰 Get ready to celebrate Pakistan's Independence Day! 🇵🇰
      </p>
    </div>
  );
};

export default CountdownTimer;