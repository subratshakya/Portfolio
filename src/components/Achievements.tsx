import React from 'react';
import Section from './ui/Section';
import { achievementsData, certificationsData } from '../utils/constants';
import { Trophy, Medal, AlignCenterVertical as Certificate } from 'lucide-react';

interface AchievementsProps {
  darkMode: boolean;
}

const Achievements: React.FC<AchievementsProps> = ({ darkMode }) => {
  return (
    <Section
      id="achievements"
      title="Achievements"
      subtitle="Recognitions and certifications"
      darkMode={darkMode}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <div className="flex items-center mb-8">
            <Trophy size={28} className="text-yellow-500 mr-3" />
            <h3 className="text-2xl font-bold">Competitive Programming</h3>
          </div>
          
          <div className="space-y-6">
            {achievementsData.map((achievement, index) => (
              <div
                key={index}
                className={`
                  p-6 rounded-lg transition-all duration-300 transform hover:translate-y-[-8px]
                  ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}
                `}
              >
                <div className="flex items-start">
                  <div className={`
                    p-3 rounded-full mr-4 flex-shrink-0
                    ${darkMode ? 'bg-gray-700' : 'bg-amber-50'}
                  `}>
                    <Medal size={24} className="text-amber-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{achievement.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{achievement.platform}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{achievement.description}</p>
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium inline-flex items-center"
                      >
                        View Profile
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <div className="flex items-center mb-8">
            <Certificate size={28} className="text-blue-500 mr-3" />
            <h3 className="text-2xl font-bold">Certifications & Awards</h3>
          </div>
          
          <div className="space-y-6">
            {certificationsData.map((certification, index) => (
              <div
                key={index}
                className={`
                  p-6 rounded-lg transition-all duration-300 transform hover:translate-y-[-8px]
                  ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}
                `}
              >
                <div className="flex items-start">
                  <div className={`
                    p-3 rounded-full mr-4 flex-shrink-0
                    ${darkMode ? 'bg-gray-700' : 'bg-blue-50'}
                  `}>
                    <Certificate size={24} className="text-blue-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold mb-1">{certification.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">{certification.issuer}</p>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{certification.description}</p>
                    {certification.link && (
                      <a
                        href={certification.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium inline-flex items-center"
                      >
                        View Certificate
                        <svg
                          className="w-4 h-4 ml-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`
            mt-8 p-6 rounded-lg 
            ${darkMode ? 'bg-blue-500/10' : 'bg-blue-50'} 
            border border-blue-200 dark:border-blue-900
          `}>
            <h4 className="text-lg font-semibold mb-4 text-blue-600 dark:text-blue-400">Other Achievements</h4>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              <li>Qualified Flipkart Grid 6.0</li>
              <li>Qualified Reliance Undergraduate Scholarship exams</li>
              <li>Top 4 at Codigo (DSA Event, AVISHKAR, MNNIT)</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Achievements;