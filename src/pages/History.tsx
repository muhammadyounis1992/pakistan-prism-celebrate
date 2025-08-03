import { Calendar, MapPin, Users, Flag } from 'lucide-react';

const History = () => {
  const timelineEvents = [
    {
      year: "1940",
      title: "Lahore Resolution",
      description: "The All-India Muslim League passed the Lahore Resolution, demanding separate states for Muslims in the Indian subcontinent.",
      icon: Users,
      color: "text-blue-400"
    },
    {
      year: "1946",
      title: "Direct Action Day",
      description: "The Muslim League called for Direct Action Day to press for the creation of Pakistan, leading to widespread communal violence.",
      icon: Calendar,
      color: "text-red-400"
    },
    {
      year: "1947",
      title: "Indian Independence Act",
      description: "The British Parliament passed the Indian Independence Act, partitioning British India into India and Pakistan.",
      icon: MapPin,
      color: "text-purple-400"
    },
    {
      year: "1947",
      title: "Independence Day",
      description: "Pakistan gained independence on August 14, 1947, with Muhammad Ali Jinnah as its first Governor-General.",
      icon: Flag,
      color: "text-green-400"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8 fade-in">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
          Journey to Independence
        </h1>
        <p className="text-xl text-muted-foreground">
          Discover the key events that led to Pakistan's creation
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="card-pakistan ml-8">
                <div className="flex items-start space-x-4">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="bg-primary/20 p-3 rounded-full">
                      <event.icon className={`h-6 w-6 ${event.color}`} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
                        {event.year}
                      </span>
                      <h3 className="text-xl font-bold text-foreground">
                        {event.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-16 card-pakistan text-center">
        <h2 className="text-2xl font-bold mb-4 text-gradient">
          The Birth of a Nation
        </h2>
        <p className="text-muted-foreground leading-relaxed">
          Pakistan's independence was the result of years of struggle, sacrifice, and determination. 
          Under the leadership of Muhammad Ali Jinnah, the All-India Muslim League fought for the 
          rights of Muslims in the Indian subcontinent. The vision of a separate homeland became 
          reality on August 14, 1947, when Pakistan emerged as an independent nation.
        </p>
        <div className="mt-6 flex justify-center space-x-8 text-sm text-muted-foreground">
          <div>
            <div className="text-2xl font-bold text-primary">200+</div>
            <div>Million Citizens</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">77</div>
            <div>Years of Freedom</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">4</div>
            <div>Provinces</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;