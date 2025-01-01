import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  delay?: number;
  className?: string;
}

const TypewriterText = ({ text, delay = 100, className = '' }: TypewriterTextProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypewriterText;