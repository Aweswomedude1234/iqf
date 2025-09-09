import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  text: string;
  cyclingWords?: string[];
  className?: string;
  speed?: number;
}

export default function TypewriterText({ 
  text, 
  cyclingWords = [],
  className = '', 
  speed = 100 
}: TypewriterTextProps) {
  const [baseText, setBaseText] = useState('');
  const [cyclingWord, setCyclingWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [stage, setStage] = useState<'typing-base' | 'typing-word' | 'pausing' | 'untyping-word'>('typing-base');

  useEffect(() => {
    if (cyclingWords.length === 0) {
      // Simple mode: just type the text
      let i = 0;
      const timer = setInterval(() => {
        if (i <= text.length) {
          setBaseText(text.slice(0, i));
          i++;
        } else {
          clearInterval(timer);
        }
      }, speed);
      return () => clearInterval(timer);
    }

    // Complex mode with cycling words
    if (stage === 'typing-base') {
      // First, type the base text
      let i = 0;
      const timer = setInterval(() => {
        if (i <= text.length) {
          setBaseText(text.slice(0, i));
          i++;
        } else {
          clearInterval(timer);
          setStage('typing-word');
        }
      }, speed);
      return () => clearInterval(timer);
      
    } else if (stage === 'typing-word') {
      // Type the current cycling word
      const currentWord = cyclingWords[wordIndex];
      let i = 0;
      const timer = setInterval(() => {
        if (i <= currentWord.length) {
          setCyclingWord(currentWord.slice(0, i));
          i++;
        } else {
          clearInterval(timer);
          setStage('pausing');
        }
      }, speed);
      return () => clearInterval(timer);
      
    } else if (stage === 'pausing') {
      // Pause before untyping
      const timer = setTimeout(() => {
        setStage('untyping-word');
      }, 2000);
      return () => clearTimeout(timer);
      
    } else if (stage === 'untyping-word') {
      // Untype the current word
      let currentLength = cyclingWord.length;
      const timer = setInterval(() => {
        if (currentLength >= 0) {
          setCyclingWord(cyclingWord.slice(0, currentLength));
          currentLength--;
        } else {
          clearInterval(timer);
          // Move to next word and start typing again
          setWordIndex((prev) => (prev + 1) % cyclingWords.length);
          setStage('typing-word');
        }
      }, speed / 2);
      return () => clearInterval(timer);
    }
  }, [text, cyclingWords, wordIndex, stage, baseText, cyclingWord, speed]);

  if (cyclingWords.length === 0) {
    return (
      <span className={className}>
        {baseText}
        {baseText.length < text.length && <span className="animate-pulse text-green-500">|</span>}
      </span>
    );
  }

  return (
    <span className={className}>
      {baseText}
      <span className="text-green-500">{cyclingWord}</span>
      <span className="animate-pulse text-green-500">|</span>
    </span>
  );
}
