import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
  outline?: boolean;
  small?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  primary,
  secondary,
  outline,
  small,
  children,
  className = '',
  ...props
}) => {
  let buttonClasses = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2
    ${small ? 'px-4 py-2 text-sm' : 'px-6 py-3'}
    ${props.disabled ? 'opacity-70 cursor-not-allowed' : 'hover:transform hover:translate-y-[-2px]'}
  `;

  if (primary) {
    buttonClasses += outline
      ? ' border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white focus:ring-blue-500'
      : ' bg-blue-500 hover:bg-blue-600 text-white focus:ring-blue-500';
  } else if (secondary) {
    buttonClasses += outline
      ? ' border-2 border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-500 hover:text-white focus:ring-gray-500'
      : ' bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 focus:ring-gray-500';
  } else {
    buttonClasses += outline
      ? ' border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-gray-500'
      : ' bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-800 dark:text-gray-200 shadow-sm focus:ring-gray-500';
  }

  return (
    <button className={`${buttonClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;