
import { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ThreeScene from '../components/ThreeScene';
import { Code, Shield, Server, Users, Lock, Wand2 } from 'lucide-react';

const About = () => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);
  
  const values = [
    {
      icon: <Shield className="w-6 h-6 text-neonblue" />,
      title: 'Ethical Practice',
      description: 'We promote responsible disclosure and ethical approaches to security research.'
    },
    {
      icon: <Users className="w-6 h-6 text-neonblue" />,
      title: 'Community',
      description: 'We believe in the power of collaborative learning and shared expertise.'
    },
    {
      icon: <Wand2 className="w-6 h-6 text-neonblue" />,
      title: 'Innovation',
      description: 'We push the boundaries of cybersecurity through creative problem-solving.'
    },
    {
      icon: <Lock className="w-6 h-6 text-neonblue" />,
      title: 'Privacy',
      description: 'We respect and advocate for digital privacy as a fundamental right.'
    },
    {
      icon: <Code className="w-6 h-6 text-neonblue" />,
      title: 'Education',
      description: 'We commit to continuous learning and knowledge sharing within our community.'
    },
    {
      icon: <Server className="w-6 h-6 text-neonblue" />,
      title: 'Security',
      description: 'We strive to improve cybersecurity standards and practices globally.'
    }
  ];
  
  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <ThreeScene type="particles" density={200} color="#00f2ff" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Our <span className="neon-text-blue">Cyber</span> Community
              </h1>
              <p className="text-white/70 text-lg leading-relaxed mb-8">
                We are a global collective of cybersecurity enthusiasts, professionals, and researchers dedicated to advancing the field of cyber intelligence through collaboration, education, and ethical practice.
              </p>
              
              {/* Mission Statement */}
              <div className="cyber-card border-neonblue/40 p-6 mb-8">
                <h2 className="font-[Space_Mono] text-xl mb-4">Our Mission</h2>
                <p className="text-white/80">
                  To create a collaborative environment where security researchers, ethical hackers, and cybersecurity professionals can share knowledge, develop skills, and contribute to making the digital world more secure.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-20 relative overflow-hidden bg-cyberblack-100">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,242,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                Our <span className="neon-text-blue">Story</span>
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="relative h-full">
                    <img 
                      src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&auto=format&fit=crop&q=80" 
                      alt="Team collaborating" 
                      className="rounded-md h-full w-full object-cover"
                    />
                    
                    {/* Overlay with terminal-like elements */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-cyberblack/70 backdrop-blur-sm border border-neonblue/30 p-4 rounded-sm">
                        <div className="flex items-center font-mono text-xs text-neonblue mb-2">
                          <span className="mr-2">$</span>
                          <span className="terminal-effect">initialize_community.sh</span>
                        </div>
                        <div className="text-white/60 font-mono text-xs">
                          {/* Fixed the syntax error here - replaced > with {'>'} */}
                          {/* Changed from > Building a network... to: */}
                          {">"} Building a network of cyber intelligence experts
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col justify-center">
                  <h3 className="terminal-text text-xl mb-4">How We Started</h3>
                  <p className="text-white/70 mb-4 leading-relaxed">
                    Our community began in 2018 when a small group of cybersecurity professionals recognized the need for a more collaborative, educational approach to cyber intelligence. What started as informal knowledge-sharing sessions quickly grew into a structured community with regular workshops, events, and research collaborations.
                  </p>
                  <p className="text-white/70 leading-relaxed">
                    Today, we've expanded to include members from across the globe, representing various sectors including government, private industry, academia, and independent research. Our growth has been fueled by our commitment to ethical practices, innovative approaches to cybersecurity challenges, and a genuine passion for making the digital world safer for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Our <span className="neon-text-blue">Values</span>
              </h2>
              <p className="text-white/70">
                These core principles guide our community's activities, research, and educational initiatives.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => (
                <div key={index} className="cyber-card border-neonblue/30 p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-sm bg-neonblue/10 border border-neonblue/30">
                    {value.icon}
                  </div>
                  <h3 className="terminal-text text-lg mb-2">{value.title}</h3>
                  <p className="text-white/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* What We Do Section */}
        <section className="py-20 relative overflow-hidden bg-cyberblack-100">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(0,242,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-8 text-center">
                What We <span className="neon-text-blue">Do</span>
              </h2>
              
              <div className="space-y-8">
                <div className="cyber-card border-neonblue/30 p-6">
                  <h3 className="terminal-text text-xl mb-4">Educational Workshops</h3>
                  <p className="text-white/70 mb-4">
                    We host regular workshops covering various cybersecurity topics, from basic security principles to advanced penetration testing techniques. These sessions are designed to be interactive, practical, and accessible to members at different skill levels.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
                    {["Penetration Testing", "Secure Coding", "Threat Intelligence", "Network Security", "Social Engineering", "Digital Forensics"].map((topic, index) => (
                      <div key={index} className="border border-neonblue/20 bg-neonblue/5 rounded-sm p-2 text-center text-sm text-white/80">
                        {topic}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="cyber-card border-neonblue/30 p-6">
                  <h3 className="terminal-text text-xl mb-4">Research Initiatives</h3>
                  <p className="text-white/70 mb-4">
                    Our community conducts collaborative research on emerging threats, security vulnerabilities, and defensive techniques. We share our findings through reports, blog posts, and presentations at cybersecurity conferences.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {["Malware Analysis", "Zero-day Vulnerabilities", "Privacy Technologies", "IoT Security", "AI in Cybersecurity"].map((area, index) => (
                      <div key={index} className="border border-neonblue/30 bg-transparent rounded-full px-3 py-1 text-xs text-neonblue">
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="cyber-card border-neonblue/30 p-6">
                  <h3 className="terminal-text text-xl mb-4">Community Events</h3>
                  <p className="text-white/70 mb-4">
                    We organize hackathons, CTF competitions, and networking events that bring together cybersecurity professionals, researchers, and enthusiasts. These events provide opportunities for learning, collaboration, and professional development.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                    <div className="border border-neonblue/20 bg-neonblue/5 rounded-sm p-4">
                      <h4 className="text-white font-[Space_Mono] text-base mb-2">Annual Cyber Summit</h4>
                      <p className="text-white/70 text-sm">
                        Our flagship event featuring keynote speakers, panel discussions, and hands-on workshops.
                      </p>
                    </div>
                    
                    <div className="border border-neonblue/20 bg-neonblue/5 rounded-sm p-4">
                      <h4 className="text-white font-[Space_Mono] text-base mb-2">Quarterly CTF Competitions</h4>
                      <p className="text-white/70 text-sm">
                        Test your skills in our Capture The Flag events with challenges across various security domains.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
