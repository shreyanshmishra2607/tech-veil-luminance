
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Shield, Terminal } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Mentors', path: '/mentors' },
    { name: 'Core Members', path: '/core-members' },
    { name: 'Workshops', path: '/workshops' },
    { name: 'Events', path: '/events' },
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-cyberblack-100/90 backdrop-blur-md shadow-lg' : 'py-4 bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-neonblue rounded-md rotate-45 animate-pulse-neon"></div>
              <Shield className="text-neonblue w-6 h-6 z-10" />
            </div>
            <div className="font-[Space_Mono] font-bold text-xl tracking-tight">
              <span className="text-white">Cyber</span>
              <span className="neon-text-blue">Intel</span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 mx-1 rounded-sm font-[Space_Mono] text-sm transition-all relative overflow-hidden
                  ${isActive(item.path) 
                    ? 'text-neonblue border-b border-neonblue' 
                    : 'text-white hover:text-neonblue'
                  }`}
              >
                <span className="relative z-10">{item.name}</span>
                {isActive(item.path) && (
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-neonblue"></span>
                )}
              </Link>
            ))}
            <Link
              to="#contact"
              className="cyber-btn ml-4 text-sm"
            >
              <span>Contact Us</span>
              <ChevronRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-cyberblack-100/95 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ marginTop: '60px' }}
      >
        <div className="flex flex-col p-4">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`py-3 px-4 font-[Space_Mono] text-sm border-b border-white/10 transition-colors
                ${isActive(item.path) 
                  ? 'text-neonblue bg-neonblue/10' 
                  : 'text-white hover:bg-white/5'
                }`}
            >
              {isActive(item.path) && <Terminal className="inline-block mr-2 w-4 h-4" />}
              {item.name}
            </Link>
          ))}
          <Link
            to="#contact"
            className="cyber-btn mt-4 text-sm self-start"
          >
            <span>Contact Us</span>
            <ChevronRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
      
      {/* Overlay for mobile menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navigation;
