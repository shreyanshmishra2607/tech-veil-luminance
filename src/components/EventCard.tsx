
import { Calendar, Clock, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  image: string;
  description: string;
  link: string;
  virtual?: boolean;
}

const EventCard = ({ 
  title, 
  date, 
  time, 
  location, 
  image, 
  description, 
  link, 
  virtual = false 
}: EventCardProps) => {
  return (
    <div className="cyber-card border-neonblue/30 overflow-hidden flex flex-col h-full">
      <div className="relative h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyberblack via-cyberblack/60 to-transparent"></div>
        
        {/* Date badge */}
        <div className="absolute top-3 right-3 bg-cyberblack-100/80 backdrop-blur-sm border border-neonblue/40 
                      px-3 py-1.5 rounded-sm text-white font-[Space_Mono] text-sm flex items-center">
          <Calendar className="w-4 h-4 mr-2 text-neonblue" />
          {date}
        </div>
        
        {/* Virtual badge */}
        {virtual && (
          <div className="absolute top-3 left-3 bg-neongreen/20 backdrop-blur-sm border border-neongreen/50 
                        px-3 py-1 rounded-sm text-neongreen font-[Space_Mono] text-xs">
            Virtual Event
          </div>
        )}
      </div>
      
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-[Space_Mono] text-lg font-bold text-white mb-2">
          {title}
        </h3>
        
        <div className="flex flex-col space-y-2 mb-4">
          <div className="flex items-center text-white/70 text-sm">
            <Clock className="w-4 h-4 mr-2 text-neonblue/70" />
            {time}
          </div>
          
          <div className="flex items-center text-white/70 text-sm">
            <MapPin className="w-4 h-4 mr-2 text-neonblue/70" />
            {location}
          </div>
        </div>
        
        <p className="text-white/70 text-sm mb-4 flex-grow">
          {description}
        </p>
        
        <Link 
          to={link} 
          className="cyber-btn text-xs self-start mt-auto"
        >
          <span>View Details</span>
          <ArrowRight className="ml-2 w-3 h-3" />
        </Link>
      </div>
    </div>
  );
};

export default EventCard;
