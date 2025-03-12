
import { Github, Linkedin, ExternalLink } from 'lucide-react';

interface MentorCardProps {
  name: string;
  title: string;
  specialty: string;
  image: string;
  github?: string;
  linkedin?: string;
  website?: string;
  bio: string;
}

const MentorCard = ({ 
  name, 
  title, 
  specialty, 
  image, 
  github, 
  linkedin, 
  website, 
  bio 
}: MentorCardProps) => {
  return (
    <div className="cyber-card group transition-all duration-300 h-full flex flex-col">
      {/* Image area with overlay */}
      <div className="relative overflow-hidden h-60">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cyberblack via-cyberblack/70 to-transparent"></div>
        
        {/* Info overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex items-center justify-between">
            <span className="inline-block bg-neonblue/20 border border-neonblue/40 px-2 py-0.5 rounded-sm text-neonblue text-xs font-[Space_Mono]">
              {specialty}
            </span>
            
            <div className="flex space-x-2">
              {github && (
                <a 
                  href={github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-7 h-7 flex items-center justify-center rounded-sm bg-white/10 text-white/80 
                          hover:bg-neonblue/20 hover:text-neonblue transition-all duration-300"
                >
                  <Github size={14} />
                </a>
              )}
              {linkedin && (
                <a 
                  href={linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-7 h-7 flex items-center justify-center rounded-sm bg-white/10 text-white/80 
                          hover:bg-neonblue/20 hover:text-neonblue transition-all duration-300"
                >
                  <Linkedin size={14} />
                </a>
              )}
              {website && (
                <a 
                  href={website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-7 h-7 flex items-center justify-center rounded-sm bg-white/10 text-white/80 
                          hover:bg-neonblue/20 hover:text-neonblue transition-all duration-300"
                >
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="font-[Space_Mono] text-lg font-bold text-white mb-1">{name}</h3>
        <p className="text-neonblue/80 text-sm mb-3">{title}</p>
        <p className="text-white/70 text-sm flex-grow">{bio}</p>
        
        {/* Bottom accent */}
        <div className="h-1 w-16 bg-gradient-to-r from-neonblue to-neonblue/0 mt-4"></div>
      </div>
    </div>
  );
};

export default MentorCard;
