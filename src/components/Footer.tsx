import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';
import { socialLinks } from '../utils/constants';

interface FooterProps {
  darkMode: boolean;
}

const Footer: React.FC<FooterProps> = ({ darkMode }) => {
  return (
    <footer className={
      darkMode 
        ? 'bg-gray-900 border-t border-gray-800' 
        : 'bg-white border-t border-gray-200'
    }>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Logo & Branding */}
          <div className="flex flex-col items-center md:items-start">
            <div className="font-bold text-2xl mb-3">
              <span className="text-blue-500">S</span>
              <span>ubrat</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
              Full-stack developer specializing in modern web technologies.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#home"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#skills"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Skills
              </a>
              <a
                href="#projects"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h3 className="font-semibold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    p-3 rounded-full transition-colors duration-300
                    ${darkMode
                      ? 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-blue-400'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-blue-500'}
                  `}
                  aria-label={link.name}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Subrat Shakya. All rights reserved.
            </p>
            <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
              <Code size={16} className="mr-2" />
              <span>Made with React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;