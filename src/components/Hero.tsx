import React from 'react';
import { GitBranch, Code, Terminal } from 'lucide-react';
import { socialLinks } from '../utils/constants';
import Button from './ui/Button';

interface HeroProps {
  darkMode: boolean;
}

const Hero: React.FC<HeroProps> = ({ darkMode }) => {
  return (
    <section 
      id="home" 
      className={`relative min-h-screen flex items-center pt-16 overflow-hidden ${
        darkMode ? 'bg-gray-900' : 'bg-gray-50'
      }`}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <Code className="absolute top-1/4 left-1/4 text-blue-600" size={120} />
        <Terminal className="absolute bottom-1/4 right-1/4 text-orange-600" size={100} />
        <GitBranch className="absolute top-1/2 right-1/3 text-purple-600" size={80} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
          <div className="w-full lg:w-3/5 mt-12 lg:mt-0 animate-fadeIn">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/10 text-blue-500 rounded-full">
              <span>Full-Stack Developer</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-500">Subrat Shakya</span>
            </h1>
            <p className="text-lg sm:text-xl mb-8 text-gray-600 dark:text-gray-300 max-w-2xl">
              A passionate software developer and B.Tech student specializing in full-stack web 
              development with the MERN stack and modern API technologies. Competitive programmer 
              with a strong problem-solving mindset.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <Button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                primary
                className="min-w-[140px]"
              >
                Get in Touch
              </Button>
              <Button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                secondary
                className="min-w-[140px]"
              >
                View Projects
              </Button>
            </div>
            
            <div className="flex items-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
                  aria-label={link.name}
                >
                  {link.logoUrl ? (
                    <img 
                      src={link.logoUrl} 
                      alt={link.name} 
                      className="w-6 h-6 object-contain"
                    />
                  ) : (
                    <link.icon size={24} />
                  )}
                </a>
              ))}
            </div>
          </div>
          
          <div className="w-full lg:w-2/5 flex justify-center">
            <div className={`
              relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden
              border-4 ${darkMode ? 'border-gray-800' : 'border-white'}
              shadow-xl transition-transform duration-500 transform hover:scale-105
            `}>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-90" />
              <div className={`
                absolute inset-0 flex items-center justify-center text-white font-bold text-4xl
                transition-opacity duration-300 hover:opacity-0
              `}>
                SS
              </div>
              <img 
                src="public\images\Screenshot_2025-04-08-12-06-50-71_99c04817c0de5652397fc8b56c3b3817.jpg" 
                alt="Subrat Shakya" 
                className="absolute inset-0 w-full h-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-12 rounded-full border-2 border-blue-500 flex justify-center p-1">
            <div className="w-1.5 h-3 bg-blue-500 rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;