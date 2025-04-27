import React from 'react';
import Section from './ui/Section';
import { experienceData } from '../utils/constants';
import { Calendar, MapPin } from 'lucide-react';

interface ExperienceProps {
  darkMode: boolean;
}

const Experience: React.FC<ExperienceProps> = ({ darkMode }) => {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="My professional journey"
      darkMode={darkMode}
      className={darkMode ? 'bg-gray-800' : 'bg-gray-50'}
    >
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700 transform md:translate-x-[-0.5px]" />
        
        {experienceData.map((item, index) => (
          <div 
            key={index} 
            className="mb-12 md:mb-0 relative"
          >
            <div className={`
              flex flex-col md:flex-row items-start 
              ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}
            `}>
              {/* Timeline dot */}
              <div className="absolute left-[-8px] md:left-1/2 top-0 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-gray-800 transform md:translate-x-[-8px]" />
              
              {/* Date indicator */}
              <div className={`
                md:w-1/2 pb-8 md:pb-24 flex 
                ${index % 2 === 0 ? 'md:justify-start md:pr-16' : 'md:justify-end md:pl-16'}
              `}>
                <div className={`
                  inline-flex items-center px-4 py-2 rounded-full text-sm font-medium
                  ${darkMode ? 'bg-gray-700 text-blue-400' : 'bg-blue-100 text-blue-800'}
                `}>
                  <Calendar size={16} className="mr-2" />
                  {item.period}
                </div>
              </div>
              
              {/* Content */}
              <div className={`
                md:w-1/2 pl-8 md:pl-0 md:pr-0
                ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}
              `}>
                <div className={`
                  p-6 rounded-lg transition-all duration-300 transform hover:translate-y-[-8px]
                  ${darkMode ? 'bg-gray-900' : 'bg-white shadow-lg'}
                `}>
                  <h3 className="text-xl font-bold mb-2">{item.role}</h3>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                    <MapPin size={16} className="mr-2" />
                    <span>{item.company}</span>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                    {item.description.map((desc, descIndex) => (
                      <li key={descIndex}>{desc}</li>
                    ))}
                  </ul>
                  {item.skills && (
                    <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex flex-wrap gap-2">
                        {item.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className={`
                              px-3 py-1 rounded-full text-xs
                              ${darkMode 
                                ? 'bg-gray-800 text-gray-300' 
                                : 'bg-gray-100 text-gray-800'}
                            `}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="mt-20">
        <h3 className="text-2xl font-bold mb-8 text-center">Education</h3>
        <div className={`
          max-w-2xl mx-auto p-6 rounded-lg
          ${darkMode ? 'bg-gray-900' : 'bg-white shadow-lg'}
        `}>
          <h4 className="text-xl font-bold mb-2">Bachelor of Technology</h4>
          <p className="text-gray-600 dark:text-gray-400 mb-4">MNNIT Allahabad (2022-2026)</p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Pursuing my B.Tech at Motilal Nehru National Institute of Technology, Allahabad, one of India's premier engineering institutions.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className={`
              px-3 py-1 rounded-full text-xs
              ${darkMode 
                ? 'bg-gray-800 text-gray-300' 
                : 'bg-gray-100 text-gray-800'}
            `}>
              Computer Science
            </span>
            <span className={`
              px-3 py-1 rounded-full text-xs
              ${darkMode 
                ? 'bg-gray-800 text-gray-300' 
                : 'bg-gray-100 text-gray-800'}
            `}>
              Data Structures
            </span>
            <span className={`
              px-3 py-1 rounded-full text-xs
              ${darkMode 
                ? 'bg-gray-800 text-gray-300' 
                : 'bg-gray-100 text-gray-800'}
            `}>
              Algorithms
            </span>
            <span className={`
              px-3 py-1 rounded-full text-xs
              ${darkMode 
                ? 'bg-gray-800 text-gray-300' 
                : 'bg-gray-100 text-gray-800'}
            `}>
              Software Engineering
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Experience;