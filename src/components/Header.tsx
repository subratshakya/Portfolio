import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Github } from 'lucide-react';
import { navLinks } from '../utils/constants';

interface HeaderProps {
  activeSection: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, darkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? darkMode 
            ? 'bg-gray-900 shadow-lg shadow-gray-800/20' 
            : 'bg-white shadow-lg shadow-gray-300/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl cursor-pointer" onClick={() => scrollToSection('home')}>
            <span className="text-blue-500">S</span>
            <span>ubrat</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={`
                  font-medium transition-colors duration-300 hover:text-blue-500
                  ${activeSection === link.id ? 'text-blue-500' : ''}
                `}
              >
                {link.title}
              </a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <a 
              href="https://github.com/subratshakya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`
          fixed inset-0 bg-white dark:bg-gray-900 z-40 md:hidden transition-transform duration-300 ease-in-out transform
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex flex-col h-full p-8">
          <div className="flex justify-between mb-8">
            <span className="font-bold text-xl">
              <span className="text-blue-500">S</span>
              <span>ubrat</span>
            </span>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col space-y-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.id);
                }}
                className={`
                  text-lg font-medium transition-colors duration-300 hover:text-blue-500
                  ${activeSection === link.id ? 'text-blue-500' : ''}
                `}
              >
                {link.title}
              </a>
            ))}
          </nav>
          <div className="mt-auto flex space-x-6 pt-8">
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <a 
              href="https://github.com/subratshakya" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full transition-colors duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;