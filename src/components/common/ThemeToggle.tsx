import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-6 right-6 p-2 rounded-full 
        bg-white/10 backdrop-blur-sm
        dark:bg-gray-800/10
        hover:bg-white/20 dark:hover:bg-gray-800/20
        transition-all duration-300
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        transform hover:scale-110
        shadow-lg"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <Moon className="w-6 h-6 text-gray-800" />
      ) : (
        <Sun className="w-6 h-6 text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;