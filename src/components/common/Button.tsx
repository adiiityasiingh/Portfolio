import React from 'react';
import { FileText } from 'lucide-react';

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

const Button = ({ href, children, icon }: ButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-2 px-6 py-3 
        bg-blue-600 hover:bg-blue-700 
        text-white font-semibold rounded-lg
        transform transition-all duration-300
        hover:scale-105 hover:shadow-lg
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        active:scale-95"
    >
      {icon}
      {children}
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
        →
      </span>
    </a>
  );
};

export default Button;