
import { useState } from 'react';
import { Calendar, Clock, UserCheck, Layers, ChevronDown, ChevronUp } from 'lucide-react';

interface WorkshopCardProps {
  title: string;
  date: string;
  time: string;
  instructor: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  topics: string[];
  description: string;
}

const WorkshopCard = ({ 
  title, 
  date, 
  time, 
  instructor, 
  level, 
  topics, 
  description 
}: WorkshopCardProps) => {
  const [expanded, setExpanded] = useState(false);
  
  // Set color based on level
  const getLevelColor = () => {
    switch(level) {
      case 'Beginner':
        return 'bg-green-500/20 border-green-500/40 text-green-500';
      case 'Intermediate':
        return 'bg-yellow-500/20 border-yellow-500/40 text-yellow-500';
      case 'Advanced':
        return 'bg-red-500/20 border-red-500/40 text-red-500';
      default:
        return 'bg-blue-500/20 border-blue-500/40 text-blue-500';
    }
  };
  
  return (
    <div className={`cyber-card border-neonblue/30 overflow-hidden transition-all duration-300 ${expanded ? 'shadow-neon-blue' : ''}`}>
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-[Space_Mono] text-lg font-bold text-white">
            {title}
          </h3>
          
          <div className={`px-2 py-0.5 rounded-sm text-xs font-[Space_Mono] border ${getLevelColor()}`}>
            {level}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="flex items-center text-white/70 text-sm">
            <Calendar className="w-4 h-4 mr-2 text-neonblue/70" />
            {date}
          </div>
          
          <div className="flex items-center text-white/70 text-sm">
            <Clock className="w-4 h-4 mr-2 text-neonblue/70" />
            {time}
          </div>
          
          <div className="flex items-center text-white/70 text-sm">
            <UserCheck className="w-4 h-4 mr-2 text-neonblue/70" />
            {instructor}
          </div>
          
          <div className="flex items-center text-white/70 text-sm">
            <Layers className="w-4 h-4 mr-2 text-neonblue/70" />
            {topics.length} topics
          </div>
        </div>
        
        <p className="text-white/70 text-sm mb-3">
          {expanded ? description : `${description.substring(0, 120)}...`}
        </p>
        
        {expanded && (
          <div className="mt-4">
            <h4 className="font-[Space_Mono] text-sm text-neonblue mb-2">Topics Covered:</h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {topics.map((topic, index) => (
                <li key={index} className="text-white/70 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-neonblue rounded-full mr-2"></span>
                  {topic}
                </li>
              ))}
            </ul>
            
            <div className="mt-4 flex justify-between">
              <button className="cyber-btn text-xs">
                Register Now
              </button>
              
              <button className="text-white/60 hover:text-neonblue text-xs flex items-center">
                Download Syllabus
              </button>
            </div>
          </div>
        )}
        
        <button 
          onClick={() => setExpanded(!expanded)} 
          className="flex items-center justify-center w-full mt-3 text-white/60 hover:text-neonblue text-xs transition-colors"
        >
          {expanded ? (
            <>
              <span>Show Less</span>
              <ChevronUp className="w-4 h-4 ml-1" />
            </>
          ) : (
            <>
              <span>Show More</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default WorkshopCard;
