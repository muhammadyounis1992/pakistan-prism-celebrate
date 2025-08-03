import { Crown, Book, Users, Heart } from 'lucide-react';
import jinnahPortrait from '@/assets/jinnah-portrait.jpg';

const Heroes = () => {
  const nationalHeroes = [
    {
      name: "Muhammad Ali Jinnah",
      title: "Quaid-i-Azam (Father of the Nation)",
      description: "The founder of Pakistan, a lawyer and politician who led the All-India Muslim League and fought for the creation of a separate homeland for Muslims.",
      contribution: "Led the Pakistan movement and became the first Governor-General of Pakistan",
      image: jinnahPortrait,
      icon: Crown,
      color: "text-gold-400"
    },
    {
      name: "Allama Iqbal",
      title: "Mufakkir-e-Pakistan (Thinker of Pakistan)",
      description: "A philosopher, poet, and politician who is widely credited with inspiring the Pakistan movement through his poetry and political vision.",
      contribution: "Conceived the idea of a separate state for Muslims in his famous Allahabad Address (1930)",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
      icon: Book,
      color: "text-blue-400"
    },
    {
      name: "Liaquat Ali Khan",
      title: "Quaid-i-Millat (Leader of the Nation)",
      description: "Pakistan's first Prime Minister, known as the 'Right Hand of Jinnah' for his crucial role in the independence movement.",
      contribution: "Served as Pakistan's first Prime Minister and helped establish the new nation's government",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
      icon: Users,
      color: "text-green-400"
    },
    {
      name: "Fatima Jinnah",
      title: "Madar-i-Millat (Mother of the Nation)",
      description: "Sister of Muhammad Ali Jinnah, a dental surgeon, biographer, and stateswoman who played a vital role in the Pakistan movement.",
      contribution: "Advocated for women's rights and democracy, known for her political activism and social work",
      image: "https://images.unsplash.com/photo-1494790108755-2616c8e0f8a2?w=400&h=500&fit=crop&crop=face",
      icon: Heart,
      color: "text-pink-400"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Our National Heroes
        </h1>
        <p className="text-xl text-muted-foreground">
          Honoring the leaders who made Pakistan's independence possible
        </p>
      </div>

      {/* Heroes Grid */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {nationalHeroes.map((hero, index) => (
          <div key={index} className="card-pakistan">
            <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6">
              {/* Portrait */}
              <div className="flex-shrink-0 w-full md:w-32">
                <div className="relative">
                  <img 
                    src={hero.image} 
                    alt={hero.name}
                    className="w-full md:w-32 h-40 md:h-32 object-cover rounded-lg"
                  />
                  <div className="absolute top-2 right-2 bg-black/50 backdrop-blur-sm rounded-full p-1">
                    <hero.icon className={`h-4 w-4 ${hero.color}`} />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {hero.name}
                </h3>
                <p className="text-primary font-semibold mb-3 text-sm">
                  {hero.title}
                </p>
                <p className="text-muted-foreground text-sm mb-3">
                  {hero.description}
                </p>
                <div className="bg-secondary/50 rounded-lg p-3">
                  <h4 className="text-sm font-semibold text-foreground mb-1">Key Contribution:</h4>
                  <p className="text-xs text-muted-foreground">
                    {hero.contribution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Legacy Section */}
      <div className="card-pakistan text-center">
        <h2 className="text-2xl font-bold mb-4 text-gradient">
          Their Legacy Lives On
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          These remarkable individuals dedicated their lives to the cause of freedom and justice. 
          Their vision, sacrifice, and determination created the Pakistan we know today. Their 
          teachings and principles continue to guide us as we build a better future for our nation.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-secondary/50 rounded-lg p-4">
            <Crown className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="text-lg font-bold text-primary">Leadership</div>
            <div className="text-xs text-muted-foreground">Guiding the nation</div>
          </div>
          <div className="bg-secondary/50 rounded-lg p-4">
            <Book className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="text-lg font-bold text-primary">Vision</div>
            <div className="text-xs text-muted-foreground">Dreams for freedom</div>
          </div>
          <div className="bg-secondary/50 rounded-lg p-4">
            <Users className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="text-lg font-bold text-primary">Unity</div>
            <div className="text-xs text-muted-foreground">Bringing people together</div>
          </div>
          <div className="bg-secondary/50 rounded-lg p-4">
            <Heart className="h-6 w-6 text-primary mx-auto mb-2" />
            <div className="text-lg font-bold text-primary">Sacrifice</div>
            <div className="text-xs text-muted-foreground">For the nation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heroes;