
import { useEffect, useRef } from 'react';
import { Lock, ShieldCheck, Code, Database } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));
    
    return () => elements.forEach(el => observer.unobserve(el));
  }, []);
  
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-neonblue" />,
      title: 'Ethical Hacking',
      description: 'We promote responsible vulnerability disclosure and ethical hacking practices to improve security globally.'
    },
    {
      icon: <Lock className="w-6 h-6 text-neonblue" />,
      title: 'Security Research',
      description: 'Our community conducts cutting-edge research in cybersecurity, sharing findings with the wider community.'
    },
    {
      icon: <Code className="w-6 h-6 text-neonblue" />,
      title: 'Skill Development',
      description: 'We help members develop practical skills through workshops, CTF competitions, and hands-on projects.'
    },
    {
      icon: <Database className="w-6 h-6 text-neonblue" />,
      title: 'Knowledge Sharing',
      description: 'Our platform facilitates knowledge exchange between experts and beginners in the cybersecurity field.'
    }
  ];
  
  return (
    <section ref={sectionRef} id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyberblack via-cyberblack-100 to-cyberblack z-[-1]"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-16 text-center animate-on-scroll opacity-0 translate-y-10 transition-all duration-700">
          <h2 className="text-3xl font-bold mb-4">
            About Our <span className="neon-text-blue">Cyber Intelligence</span> Community
          </h2>
          <p className="text-white/70 leading-relaxed">
            We are a collective of cybersecurity professionals, researchers, and enthusiasts dedicated to advancing the field of cyber intelligence through collaboration, education, and ethical practice.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {/* Left column with mission */}
          <div className="cyber-card border-neonblue/20 p-6 animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-100">
            <h3 className="terminal-text text-xl mb-4">Our Mission</h3>
            <p className="text-white/70 mb-4 leading-relaxed">
              The Cyber Intelligence Community aims to create a collaborative environment where security researchers, ethical hackers, and cybersecurity professionals can share knowledge, develop skills, and contribute to making the digital world more secure.
            </p>
            <p className="text-white/70 mb-4 leading-relaxed">
              We believe in the power of community-driven security research and the importance of ethical standards in cybersecurity. Through workshops, events, and knowledge sharing, we help our members stay at the cutting edge of cyber defense.
            </p>
            <div className="border-l-2 border-neonblue pl-4 py-2">
              <p className="italic text-white/80">
                "Security is not just about protecting systems, but empowering people with the knowledge to defend themselves in the digital age."
              </p>
            </div>
          </div>
          
          {/* Right column with image */}
          <div className="relative animate-on-scroll opacity-0 translate-y-10 transition-all duration-700 delay-200 h-[300px] md:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1563770557593-10fdb97ec655?w=800&auto=format&fit=crop&q=80" 
              alt="Cybersecurity professionals working" 
              className="rounded-md h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-cyberblack via-transparent to-transparent"></div>
            
            {/* Overlay with code-like elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-cyberblack-100/80 backdrop-blur-sm border border-neonblue/30 p-4 rounded-sm w-4/5">
                <div className="flex items-center font-mono text-xs text-neonblue mb-2">
                  <span className="mr-2">$</span>
                  <span className="terminal-effect">securing_digital_frontier</span>
                </div>
                <div className="text-white/60 font-mono text-xs">
                  {/* Fixed the syntax error here - replaced > with {'>'} */}
                  {/* Changed from > Enhancing cyber resilience... to: */}
                  {">"} Enhancing cyber resilience through community collaboration
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`cyber-card border-neonblue/20 p-6 text-center
                        animate-on-scroll opacity-0 translate-y-10 transition-all duration-700`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-sm bg-neonblue/10 border border-neonblue/30">
                {feature.icon}
              </div>
              <h4 className="terminal-text text-lg mb-2">{feature.title}</h4>
              <p className="text-white/70 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
