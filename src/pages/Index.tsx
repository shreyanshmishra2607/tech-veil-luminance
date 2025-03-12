
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ThreeScene from '../components/ThreeScene';
import MentorCard from '../components/MentorCard';
import EventCard from '../components/EventCard';

const Index = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);
  
  // Sample featured mentors
  const featuredMentors = [
    {
      name: 'Alex Morgan',
      title: 'Security Researcher',
      specialty: 'Penetration Testing',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=800&auto=format&fit=crop&q=80',
      github: '#',
      linkedin: '#',
      bio: 'Alex specializes in penetration testing with 10+ years of experience identifying vulnerabilities in enterprise systems.'
    },
    {
      name: 'Sarah Chen',
      title: 'Cryptography Expert',
      specialty: 'Encryption',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&auto=format&fit=crop&q=80',
      github: '#',
      linkedin: '#',
      bio: 'Sarah is a researcher focusing on quantum-resistant encryption algorithms and secure communications protocols.'
    }
  ];
  
  // Sample upcoming events
  const upcomingEvents = [
    {
      title: 'Annual Cyber Intelligence Summit',
      date: 'Dec 15, 2023',
      time: '09:00 AM - 05:00 PM',
      location: 'Tech Convention Center',
      image: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&auto=format&fit=crop&q=80',
      description: 'Join us for our annual summit featuring keynote speakers, panel discussions, and networking opportunities.',
      link: '/events/summit'
    },
    {
      title: 'Ethical Hacking Webinar',
      date: 'Nov 25, 2023',
      time: '02:00 PM - 04:00 PM',
      location: 'Online',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&auto=format&fit=crop&q=80',
      description: 'Learn ethical hacking techniques and methodologies in this intensive online session with live demonstrations.',
      link: '/events/webinar',
      virtual: true
    }
  ];
  
  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        
        {/* Featured Mentors Section */}
        <section className="py-20 relative overflow-hidden">
          <ThreeScene type="wireframe" color="#00f2ff" speed={0.0003} />
          <div className="container mx-auto px-4 z-10 relative">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  Our <span className="neon-text-blue">Expert</span> Mentors
                </h2>
                <p className="text-white/70 max-w-2xl">
                  Learn from industry professionals with years of experience in various cybersecurity domains.
                </p>
              </div>
              <Link to="/mentors" className="cyber-btn text-sm hidden md:flex">
                <span>View All Mentors</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredMentors.map((mentor, index) => (
                <MentorCard key={index} {...mentor} />
              ))}
              
              <div className="cyber-card border-dashed border-neonblue/30 flex items-center justify-center p-6 h-full">
                <div className="text-center">
                  <p className="text-white/70 mb-4">
                    Interested in joining our community as a mentor?
                  </p>
                  <Link to="/mentors" className="cyber-btn text-sm">
                    <span>Apply to Join</span>
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Link to="/mentors" className="cyber-btn text-sm">
                <span>View All Mentors</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Events Preview Section */}
        <section className="py-20 relative overflow-hidden bg-cyberblack-100">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,242,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-bold mb-2">
                  Upcoming <span className="neon-text-blue">Events</span>
                </h2>
                <p className="text-white/70 max-w-2xl">
                  Join our workshops, hackathons, and conferences to enhance your skills and network with professionals.
                </p>
              </div>
              <Link to="/events" className="cyber-btn text-sm hidden md:flex">
                <span>View All Events</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event, index) => (
                <EventCard key={index} {...event} />
              ))}
            </div>
            
            <div className="mt-8 text-center md:hidden">
              <Link to="/events" className="cyber-btn text-sm">
                <span>View All Events</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: '2,500+', label: 'Community Members' },
                { value: '120+', label: 'Workshops Completed' },
                { value: '45+', label: 'Expert Mentors' },
                { value: '12+', label: 'Countries Represented' }
              ].map((stat, index) => (
                <div key={index} className="text-center cyber-card border-neonblue/30 p-6">
                  <div className="font-[Space_Mono] text-2xl md:text-3xl font-bold text-neonblue mb-2">
                    {stat.value}
                  </div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        <ContactForm />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
