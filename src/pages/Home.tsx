import { Flag, Star, Music } from 'lucide-react';
import CountdownTimer from '@/components/CountdownTimer';
import pakistanFlag from '@/assets/pakistan-flag.jpg';

const Home = () => {
  const introCards = [
    {
      icon: Flag,
      title: "National Flag",
      description: "The green and white flag with crescent and star represents our faith, peace, and progress.",
      color: "text-green-400"
    },
    {
      icon: Star,
      title: "Crescent & Star",
      description: "The crescent represents progress and the star represents light and knowledge.",
      color: "text-yellow-400"
    },
    {
      icon: Music,
      title: "National Anthem",
      description: "Qaumi Taranah, written by Hafeez Jalandhari, inspires unity and patriotism.",
      color: "text-blue-400"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="relative mb-8">
          <img 
            src={pakistanFlag} 
            alt="Pakistan Flag" 
            className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black/40 rounded-lg flex items-center justify-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-4">
                Happy Independence Day
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Celebrating Pakistan's Freedom - August 14th
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="mb-12">
        <CountdownTimer />
      </div>

      {/* Introduction Cards */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gradient">
          Discover Pakistan's Heritage
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {introCards.map((card, index) => (
            <div key={index} className="card-pakistan text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-primary/20 p-4 rounded-full">
                  <card.icon className={`h-8 w-8 ${card.color}`} />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">
                {card.title}
              </h3>
              <p className="text-muted-foreground">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Welcome Message */}
      <div className="card-pakistan text-center">
        <h2 className="text-2xl font-bold mb-4 text-gradient">
          Welcome to Our Independence Day Celebration
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Join LUBNA GBSS LANDHI 2-C in celebrating Pakistan's Independence Day! 
          Explore our nation's rich history, learn about our national symbols, 
          discover our heroes, and participate in our special events. 
          Together, let's honor the sacrifices of our forefathers and celebrate our freedom.
        </p>
        <div className="mt-6 text-2xl">
          🇵🇰 Pakistan Zindabad! 🇵🇰
        </div>
      </div>
    </div>
  );
};

export default Home;