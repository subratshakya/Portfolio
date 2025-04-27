import React, { useState } from 'react';
import Section from './ui/Section';
import { Mail, MapPin, Send, Linkedin, Github } from 'lucide-react';
import Button from './ui/Button';

interface ContactProps {
  darkMode: boolean;
}

const Contact: React.FC<ContactProps> = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Get in touch with me"
      darkMode={darkMode}
      className={darkMode ? 'bg-gray-800' : 'bg-gray-50'}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            I'm always open to discussing new projects, opportunities, or partnerships.
            Feel free to reach out using the form or connect with me directly through 
            social platforms.
          </p>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-start">
              <div className={`
                p-3 rounded-full mr-4
                ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}
              `}>
                <Mail size={24} className="text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Email</h4>
                <a 
                  href="mailto:subratshakya@gmail.com"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  subratshakya05@gmail.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className={`
                p-3 rounded-full mr-4
                ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}
              `}>
                <MapPin size={24} className="text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Location</h4>
                <p className="text-gray-600 dark:text-gray-400">MNNIT Allahabad, Prayagraj, India</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className={`
                p-3 rounded-full mr-4
                ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}
              `}>
                <Linkedin size={24} className="text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/subratshakya/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                >
https://linkedin.com/in/subratshakya
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className={`
                p-3 rounded-full mr-4
                ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}
              `}>
                <Github size={24} className="text-blue-500" />
              </div>
              <div>
                <h4 className="font-semibold mb-1">GitHub</h4>
                <a 
                  href="https://github.com/subratshakya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  github.com/subratshakya
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className={`
          rounded-xl overflow-hidden
          ${darkMode ? 'bg-gray-900' : 'bg-white shadow-lg'}
        `}>
          <div className="p-8">
            <h3 className="text-2xl font-bold mb-6">Send Message</h3>
            
            {submitted ? (
              <div className={`
                p-4 rounded-lg mb-6 text-center
                ${darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-800'}
              `}>
                <p>Thank you! Your message has been sent successfully.</p>
              </div>
            ) : null}
            
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`
                      w-full p-3 rounded-lg focus:ring-2 transition-all duration-300
                      ${darkMode 
                        ? 'bg-gray-800 border-gray-700 focus:ring-blue-500 text-white' 
                        : 'bg-gray-50 border-gray-300 focus:ring-blue-500'}
                    `}
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={`
                      w-full p-3 rounded-lg focus:ring-2 transition-all duration-300
                      ${darkMode 
                        ? 'bg-gray-800 border-gray-700 focus:ring-blue-500 text-white' 
                        : 'bg-gray-50 border-gray-300 focus:ring-blue-500'}
                    `}
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`
                    w-full p-3 rounded-lg focus:ring-2 transition-all duration-300
                    ${darkMode 
                      ? 'bg-gray-800 border-gray-700 focus:ring-blue-500 text-white' 
                      : 'bg-gray-50 border-gray-300 focus:ring-blue-500'}
                  `}
                  placeholder="Project Opportunity"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className={`
                    w-full p-3 rounded-lg focus:ring-2 transition-all duration-300
                    ${darkMode 
                      ? 'bg-gray-800 border-gray-700 focus:ring-blue-500 text-white' 
                      : 'bg-gray-50 border-gray-300 focus:ring-blue-500'}
                  `}
                  placeholder="Your message here..."
                />
              </div>
              
              <Button 
                type="submit" 
                primary 
                className="w-full flex items-center justify-center"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center">
                    <Send size={18} className="mr-2" />
                    <span>Send Message</span>
                  </div>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;