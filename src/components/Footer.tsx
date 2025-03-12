
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Shield, Mail, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative bg-cyberblack-100 border-t border-white/10 overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(rgba(0,242,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] z-[1]"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-neonblue rounded-md rotate-45 animate-pulse-neon"></div>
                <Shield className="text-neonblue w-6 h-6 z-10" />
              </div>
              <div className="font-[Space_Mono] font-bold text-xl tracking-tight">
                <span className="text-white">Cyber</span>
                <span className="neon-text-blue">Intel</span>
              </div>
            </Link>
            <p className="text-white/70 mb-4 text-sm">
              A community of ethical hackers and cybersecurity enthusiasts dedicated to advancing cyber intelligence.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4 mb-6">
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-sm bg-white/5 text-white/80 hover:bg-neonblue/20 hover:text-neonblue transition-all duration-300">
                <Github size={16} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-sm bg-white/5 text-white/80 hover:bg-neonblue/20 hover:text-neonblue transition-all duration-300">
                <Twitter size={16} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-sm bg-white/5 text-white/80 hover:bg-neonblue/20 hover:text-neonblue transition-all duration-300">
                <Linkedin size={16} />
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center rounded-sm bg-white/5 text-white/80 hover:bg-neonblue/20 hover:text-neonblue transition-all duration-300">
                <Mail size={16} />
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div className="md:col-span-1">
            <h4 className="font-[Space_Mono] text-sm text-neonblue mb-4 uppercase tracking-wide">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Mentors', 'Core Members', 'Workshops', 'Events'].map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-white/70 hover:text-neonblue transition-colors text-sm flex items-center"
                  >
                    <span>{item}</span>
                    <ArrowUpRight size={12} className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Resources */}
          <div className="md:col-span-1">
            <h4 className="font-[Space_Mono] text-sm text-neonblue mb-4 uppercase tracking-wide">Resources</h4>
            <ul className="space-y-2">
              {['Cybersecurity Guide', 'Ethical Hacking 101', 'Security Tools', 'CVE Database', 'Research Papers'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/70 hover:text-neonblue transition-colors text-sm flex items-center"
                  >
                    <span>{item}</span>
                    <ArrowUpRight size={12} className="ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="md:col-span-1">
            <h4 className="font-[Space_Mono] text-sm text-neonblue mb-4 uppercase tracking-wide">Stay Updated</h4>
            <p className="text-white/70 mb-4 text-sm">
              Subscribe to our newsletter for the latest cybersecurity insights and community updates.
            </p>
            
            <form className="mb-4 flex">
              <input 
                type="email" 
                placeholder="your@email.com" 
                className="cyber-input flex-grow text-sm py-1.5"
              />
              <button 
                type="submit" 
                className="bg-neonblue hover:bg-neonblue/90 text-black font-[Space_Mono] px-3 py-1.5 text-sm"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-white/50 text-xs">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/50 text-sm mb-4 md:mb-0">
            &copy; {currentYear} CyberIntel Community. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-white/50 hover:text-white/80 text-xs">Terms of Service</a>
            <a href="#" className="text-white/50 hover:text-white/80 text-xs">Privacy Policy</a>
            <a href="#" className="text-white/50 hover:text-white/80 text-xs">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
