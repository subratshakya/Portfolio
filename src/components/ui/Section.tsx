import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle: string;
  children: ReactNode;
  darkMode: boolean;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, darkMode, className = '' }) => {
  return (
    <section 
      id={id} 
      className={`py-20 ${className}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
          <div className="h-1.5 w-24 bg-blue-500 rounded-full mx-auto mt-8" />
        </div>
        
        {children}
      </div>
    </section>
  );
};

export default Section;