import React from 'react';
import Section from './ui/Section';
import { BookOpen, Code2, Award } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

const About: React.FC<AboutProps> = ({ darkMode }) => {
  const stats = [
    { 
      icon: <BookOpen size={24} className="text-blue-500" />,
      value: 'B.Tech', 
      label: 'MNNIT Allahabad (2022-2026)' 
    },
    { 
      icon: <Code2 size={24} className="text-orange-500" />,
      value: '500+', 
      label: 'Problems Solved on LeetCode' 
    },
    { 
      icon: <Award size={24} className="text-purple-500" />,
      value: '4-Star', 
      label: 'Coder on CodeChef' 
    },
  ];

  return (
    <Section 
      id="about"
      title="About Me"
      subtitle="Get to know me better"
      darkMode={darkMode}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        <div className="lg:col-span-2">
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            I'm Subrat Shakya, a passionate software developer and a B.Tech student at MNNIT Allahabad (2022–2026). 
            My journey in technology is driven by curiosity and a desire to create impactful solutions.
          </p>
          
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            I specialize in full-stack web development using the MERN stack and have a strong grasp of modern API 
            technologies like GraphQL and WebSockets. My technical expertise extends to competitive programming, 
            where I've achieved a 4-star rating on CodeChef, a Knight rating on Leetcode and Pupil status on Codeforces.
          </p>
          
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            As a member of the Web Team at Enactus MNNIT, I've contributed to their official website and led a full-stack 
            project presented at AVISHKAR 2024. I also took charge of an alumni outreach campaign at MNNIT, demonstrating 
            my leadership capabilities.
          </p>
          
          <p className="text-lg text-gray-700 dark:text-gray-300">
            I'm constantly exploring new technologies and refining my skills to stay at the forefront of software development. 
            My goal is to leverage technology to solve real-world problems and make a positive impact.
          </p>
        </div>
        
        <div className="lg:col-span-1">
          <div className={`
            rounded-2xl overflow-hidden 
            ${darkMode ? 'bg-gray-800' : 'bg-white shadow-xl'}
            transition-all duration-300 transform hover:translate-y-[-8px]
          `}>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Highlights</h3>
              
              <div className="space-y-8">
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`
                      mr-4 p-3 rounded-full
                      ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}
                    `}>
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;