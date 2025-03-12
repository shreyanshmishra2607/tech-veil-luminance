
import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import ThreeScene from './ThreeScene';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef<HTMLHeadingElement>(null);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);
  
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Three.js scene */}
      <ThreeScene type="grid" color="#00f2ff" speed={0.0005} />
      
      {/* Scan line effect */}
      <div className="scan-line"></div>
      
      <div className="container mx-auto px-4 z-10 pt-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div 
            className={`inline-block mb-6 px-4 py-1.5 bg-neonblue/10 border border-neonblue/30 
                      rounded-full text-neonblue text-xs uppercase tracking-wider font-[Space_Mono]
                      transform transition-all duration-700 ease-out
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}
          >
            Cyber Intelligence Community
          </div>
          
          {/* Headline */}
          <h1 
            ref={textRef}
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight 
                      transform transition-all duration-700 delay-300 ease-out
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span className="block relative">
              <span className="glitch-effect" data-text="Unlocking">Unlocking</span>{" "}
              <span className="neon-text-blue">the Secrets</span>
            </span>
            <span className="block mt-2">of the Cyber World</span>
          </h1>
          
          {/* Description */}
          <p 
            className={`text-white/80 text-lg mb-8 max-w-2xl mx-auto
                      transform transition-all duration-700 delay-500 ease-out
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Join our community of ethical hackers, security researchers, and cybersecurity professionals dedicated to advancing cyber intelligence and securing the digital frontier.
          </p>
          
          {/* CTA Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-8
                      transform transition-all duration-700 delay-700 ease-out
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <Link 
              to="/about" 
              className="cyber-btn text-sm sm:text-base w-full sm:w-auto"
            >
              <span>Learn More</span>
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link 
              to="#contact" 
              className="px-6 py-3 bg-transparent border border-white/30 text-white/90 hover:text-white 
                        rounded-sm transition-all duration-300 hover:border-white/60
                        font-[Space_Mono] text-sm sm:text-base tracking-wide w-full sm:w-auto text-center"
            >
              Join Our Community
            </Link>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce text-white/50 hover:text-neonblue transition-colors">
          <span className="text-xs font-[Space_Mono] mb-2">Scroll Down</span>
          <ChevronDown className="w-5 h-5" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
