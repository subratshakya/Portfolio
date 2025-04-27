import React from 'react';
import Section from './ui/Section';
import { skillsData } from '../utils/constants';

interface SkillsProps {
  darkMode: boolean;
}

const Skills: React.FC<SkillsProps> = ({ darkMode }) => {
  return (
    <Section
      id="skills"
      title="Skills"
      subtitle="My technical expertise"
      darkMode={darkMode}
      className={darkMode ? 'bg-gray-800' : 'bg-gray-50'}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillsData.map((category, index) => (
          <div 
            key={index}
            className={`
              rounded-xl p-6 transition-all duration-300 transform hover:translate-y-[-8px]
              ${darkMode ? 'bg-gray-900' : 'bg-white shadow-lg'}
            `}
          >
            <div className="flex items-center mb-6">
              <div className={`
                p-3 rounded-lg mr-4
                ${darkMode ? 'bg-gray-800' : 'bg-blue-50'}
              `}>
                <category.icon 
                  size={24} 
                  className={`${category.color}`} 
                />
              </div>
              <h3 className="text-xl font-bold">{category.name}</h3>
            </div>
            
            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className={`
                    px-3 py-2 rounded-lg text-sm font-medium
                    ${darkMode 
                      ? 'bg-gray-800 text-gray-300' 
                      : 'bg-gray-100 text-gray-800'}
                  `}
                >
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold mb-8 text-center">Other Tools & Technologies</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {['Git', 'GitHub', 'Postman', 'VS Code', 'MongoDB', 'Express', 'React', 'Node.js', 'Socket.io', 'GraphQL', 'Tailwind CSS', 'SQL', 'REST API', 'JWT', 'Data Structures', 'OOP'].map((skill, index) => (
            <div
              key={index}
              className={`
                px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300
                ${darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-gray-200 hover:bg-gray-300'}
              `}
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Skills;