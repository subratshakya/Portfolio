import React, { useState } from 'react';
import Section from './ui/Section';
import { projectsData } from '../utils/constants';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectsProps {
  darkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ darkMode }) => {
  const [activeProject, setActiveProject] = useState(projectsData[0]);

  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="My recent work"
      darkMode={darkMode}
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className={`
            rounded-xl overflow-hidden sticky top-24
            ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}
          `}>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-4">All Projects</h3>
              <div className="space-y-2">
                {projectsData.map((project, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveProject(project)}
                    className={`
                      w-full text-left p-4 rounded-lg transition-colors duration-300
                      ${activeProject.id === project.id
                        ? darkMode
                          ? 'bg-blue-500/20 text-blue-400'
                          : 'bg-blue-500/10 text-blue-600'
                        : darkMode
                          ? 'hover:bg-gray-700'
                          : 'hover:bg-gray-100'
                      }
                    `}
                  >
                    <p className="font-medium">{project.title}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {project.tags.join(' • ')}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div 
            className={`
              rounded-xl overflow-hidden 
              ${darkMode ? 'bg-gray-800' : 'bg-white shadow-lg'}
            `}
          >
            <div className="relative h-64 overflow-hidden">
              <div className={`
                absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-90
              `}/>
              <div className="absolute inset-0 bg-black opacity-60" />
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <span className="bg-blue-500 text-white text-xs font-medium px-2.5 py-0.5 rounded mb-3 inline-block">
                  {activeProject.tags[0]}
                </span>
                <h3 className="text-3xl font-bold text-white mb-2">{activeProject.title}</h3>
                <p className="text-gray-200 mb-4">{activeProject.shortDescription}</p>
                <div className="flex space-x-3">
                  {activeProject.githubUrl && (
                    <a
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-gray-900 text-white rounded-lg flex items-center space-x-2 hover:bg-gray-800 transition-colors duration-300"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                  {activeProject.liveUrl && (
                    <a
                      href={activeProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="p-6">
              <h4 className="text-xl font-bold mb-4">Project Overview</h4>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                {activeProject.description}
              </p>
              
              <h4 className="text-xl font-bold mb-4">Tech Stack</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className={`
                      px-3 py-1 rounded-full text-sm
                      ${darkMode 
                        ? 'bg-gray-700 text-gray-200' 
                        : 'bg-gray-200 text-gray-800'}
                    `}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <h4 className="text-xl font-bold mb-4">Key Features</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                {activeProject.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Projects;