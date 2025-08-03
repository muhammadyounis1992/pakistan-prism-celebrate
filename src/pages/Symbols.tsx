import { Flag, Mountain, Flower, Shield, Star, Music } from 'lucide-react';
import pakistanFlag from '@/assets/pakistan-flag.jpg';
import markhor from '@/assets/markhor.jpg';

const Symbols = () => {
  const nationalSymbols = [
    {
      title: "National Flag",
      description: "The flag consists of a green field with a white vertical stripe, a white crescent, and a five-pointed star. Green represents Islam and the Muslim majority, white represents peace and minorities.",
      icon: Flag,
      image: pakistanFlag,
      color: "text-green-400"
    },
    {
      title: "National Animal - Markhor",
      description: "The Markhor is a large wild goat found in the mountains of Central Asia, Karakoram, and the Himalayas. It represents the rugged and independent spirit of Pakistan.",
      icon: Mountain,
      image: markhor,
      color: "text-brown-400"
    },
    {
      title: "National Flower - Jasmine",
      description: "Jasmine (Chambeli) is the national flower of Pakistan. Its white color represents peace, while its fragrance symbolizes the love and affection of the people.",
      icon: Flower,
      image: "https://images.unsplash.com/photo-1583160247711-2191776b4b91?w=600&h=400&fit=crop",
      color: "text-white"
    },
    {
      title: "National Emblem",
      description: "Pakistan's coat of arms features a crescent and star crest above a shield, cotton, wheat, tea, and jute around the base, representing the country's agricultural heritage.",
      icon: Shield,
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=600&h=400&fit=crop",
      color: "text-gold-400"
    },
    {
      title: "National Tree - Deodar",
      description: "The Deodar cedar is an evergreen coniferous tree native to the western Himalayas. It represents strength, stability, and the mountainous regions of Pakistan.",
      icon: Mountain,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      color: "text-green-600"
    },
    {
      title: "National Anthem - Qaumi Taranah",
      description: "Written by Hafeez Jalandhari and composed by Ahmad G. Chagla, the national anthem is a melodious expression of Pakistan's unity, faith, and discipline.",
      icon: Music,
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=600&h=400&fit=crop",
      color: "text-blue-400"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          National Symbols
        </h1>
        <p className="text-xl text-muted-foreground">
          Discover the symbols that represent Pakistan's identity and heritage
        </p>
      </div>

      {/* Symbols Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {nationalSymbols.map((symbol, index) => (
          <div key={index} className="card-pakistan">
            <div className="flex flex-col h-full">
              {/* Image */}
              <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                <img 
                  src={symbol.image} 
                  alt={symbol.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm rounded-full p-2">
                  <symbol.icon className={`h-6 w-6 ${symbol.color}`} />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 text-foreground">
                  {symbol.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {symbol.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Additional Information */}
      <div className="card-pakistan text-center">
        <h2 className="text-2xl font-bold mb-4 text-gradient">
          Symbols of Our Heritage
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Pakistan's national symbols reflect the country's rich cultural heritage, natural beauty, 
          and the values upon which the nation was founded. Each symbol carries deep meaning and 
          represents different aspects of Pakistani identity - from the Islamic faith and peace to 
          the country's diverse landscapes and agricultural abundance.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <div className="bg-secondary/50 rounded-lg p-4">
            <Star className="h-8 w-8 text-primary mx-auto mb-2" />
            <h4 className="font-semibold text-foreground">Unity</h4>
            <p className="text-sm text-muted-foreground">One nation, diverse people</p>
          </div>
          <div className="bg-secondary/50 rounded-lg p-4">
            <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
            <h4 className="font-semibold text-foreground">Faith</h4>
            <p className="text-sm text-muted-foreground">Islamic values and principles</p>
          </div>
          <div className="bg-secondary/50 rounded-lg p-4">
            <Mountain className="h-8 w-8 text-primary mx-auto mb-2" />
            <h4 className="font-semibold text-foreground">Discipline</h4>
            <p className="text-sm text-muted-foreground">Order and progress</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Symbols;