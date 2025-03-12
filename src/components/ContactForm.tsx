
import { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      
      // Reset form after submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="relative py-16 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-cyberblack z-[-1]"></div>
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(0,242,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] z-[-1]"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto cyber-card border-neonblue/40 p-6 sm:p-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">
              <span className="neon-text-blue">Connect</span> With Us
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Have questions or want to join our community? Reach out to us and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-[Space_Mono] mb-2 text-white/80">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="cyber-input w-full"
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-[Space_Mono] mb-2 text-white/80">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="cyber-input w-full"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-[Space_Mono] mb-2 text-white/80">Subject</label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="cyber-input w-full appearance-none"
                required
              >
                <option value="" disabled>Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="membership">Membership</option>
                <option value="workshop">Workshop Information</option>
                <option value="collaboration">Collaboration</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-[Space_Mono] mb-2 text-white/80">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="cyber-input w-full resize-none"
                placeholder="How can we help you?"
                required
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`cyber-btn flex items-center justify-center min-w-[200px] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''} ${isSubmitted ? 'border-neongreen text-neongreen' : ''}`}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-pulse">Processing...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-4 h-4 mr-2" />
                    <span>Message Sent</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="ml-2 w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-4 border border-neonblue/20 rounded-sm hover:border-neonblue/50 transition-all">
              <p className="font-[Space_Mono] text-neonblue mb-2">Email</p>
              <a href="mailto:contact@cyberintel.com" className="text-white/80 hover:text-white">
                contact@cyberintel.com
              </a>
            </div>
            
            <div className="p-4 border border-neonblue/20 rounded-sm hover:border-neonblue/50 transition-all">
              <p className="font-[Space_Mono] text-neonblue mb-2">Location</p>
              <p className="text-white/80">
                Cyber District, Tech Valley<br />Digital City, 10010
              </p>
            </div>
            
            <div className="p-4 border border-neonblue/20 rounded-sm hover:border-neonblue/50 transition-all">
              <p className="font-[Space_Mono] text-neonblue mb-2">Connect</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-white/80 hover:text-neonblue transition-colors">Twitter</a>
                <a href="#" className="text-white/80 hover:text-neonblue transition-colors">LinkedIn</a>
                <a href="#" className="text-white/80 hover:text-neonblue transition-colors">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
