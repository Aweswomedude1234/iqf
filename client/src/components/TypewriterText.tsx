import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export default function TypewriterText({ 
  text, 
  className = '', 
  speed = 100 
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayText(text.slice(0, index));
      index++;
      if (index > text.length) {
        clearInterval(timer);
        // Blinking cursor
        const cursorTimer = setInterval(() => {
          setShowCursor(prev => !prev);
        }, 750);
        return () => clearInterval(cursorTimer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={`${className} ${showCursor ? 'typewriter' : ''}`}>
      {displayText}
    </span>
  );
}
