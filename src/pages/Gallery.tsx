import { Camera, Users, Music, Trophy } from 'lucide-react';
import schoolCelebration from '@/assets/school-celebration.jpg';

const Gallery = () => {
  const galleryImages = [
    {
      title: "Flag Hoisting Ceremony",
      description: "Students and faculty gathered for the national flag hoisting ceremony",
      icon: Camera,
      image: schoolCelebration
    },
    {
      title: "Student Parade",
      description: "Students marching in formation wearing national colors",
      icon: Users,
      image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&h=600&fit=crop"
    },
    {
      title: "Cultural Performances",
      description: "Traditional dances and patriotic songs performed by students",
      icon: Music,
      image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&h=600&fit=crop"
    },
    {
      title: "Speech Competition",
      description: "Students delivering speeches about Pakistan's independence",
      icon: Trophy,
      image: "https://images.unsplash.com/photo-1492321936769-b49830bc1d1e?w=800&h=600&fit=crop"
    },
    {
      title: "Art Exhibition",
      description: "Student artwork celebrating Pakistan's culture and heritage",
      icon: Camera,
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop"
    },
    {
      title: "Group Photography",
      description: "Class photos in front of the decorated school building",
      icon: Users,
      image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?w=800&h=600&fit=crop"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Celebration Gallery
        </h1>
        <p className="text-xl text-muted-foreground">
          Capturing moments from our Independence Day celebrations
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {galleryImages.map((item, index) => (
          <div key={index} className="card-pakistan group cursor-pointer">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <item.icon className="h-8 w-8 text-white" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2 text-foreground">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>

      {/* Additional Info */}
      <div className="card-pakistan text-center">
        <h2 className="text-2xl font-bold mb-4 text-gradient">
          Creating Memories Together
        </h2>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Every year, LUBNA GBSS LANDHI 2-C celebrates Pakistan's Independence Day with great enthusiasm. 
          Our celebrations include flag hoisting ceremonies, cultural performances, student parades, 
          and various competitions that help students connect with their national heritage.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-secondary/50 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">500+</div>
            <div className="text-sm text-muted-foreground">Students</div>
          </div>
          <div className="bg-secondary/50 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Teachers</div>
          </div>
          <div className="bg-secondary/50 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">10+</div>
            <div className="text-sm text-muted-foreground">Events</div>
          </div>
          <div className="bg-secondary/50 rounded-lg p-4">
            <div className="text-2xl font-bold text-primary">1</div>
            <div className="text-sm text-muted-foreground">Nation</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;