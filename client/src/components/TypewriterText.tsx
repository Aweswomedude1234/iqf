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
  speed = 120 
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isUntyping, setIsUntyping] = useState(false);

  useEffect(() => {
    if (cyclingWords.length === 0) {
      // Simple typing without cycling words
      let index = 0;
      const timer = setInterval(() => {
        if (index <= text.length) {
          setDisplayedText(text.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, speed);
      return () => clearInterval(timer);
    }

    if (!isTypingComplete) {
      // Type the full sentence once including the first cycling word
      const fullText = text + cyclingWords[0];
      let index = 0;
      
      const timer = setInterval(() => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          setIsTypingComplete(true);
          
          // Wait then start cycling
          setTimeout(() => {
            setIsUntyping(true);
          }, 2000);
        }
      }, speed);
      return () => clearInterval(timer);
    }

    // Handle cycling after initial typing is complete
    if (isUntyping) {
      // Remove the current word letter by letter
      const currentWord = cyclingWords[currentWordIndex];
      const baseLength = text.length;
      let currentLength = baseLength + currentWord.length;
      
      const timer = setInterval(() => {
        if (currentLength > baseLength) {
          setDisplayedText(displayedText.slice(0, currentLength));
          currentLength--;
        } else {
          clearInterval(timer);
          setIsUntyping(false);
          
          // Move to next word
          const nextIndex = (currentWordIndex + 1) % cyclingWords.length;
          setCurrentWordIndex(nextIndex);
        }
      }, speed / 2);
      return () => clearInterval(timer);
    } else {
      // Type the new word
      const newWord = cyclingWords[currentWordIndex];
      const baseText = text;
      let index = 0;
      
      const timer = setInterval(() => {
        if (index <= newWord.length) {
          setDisplayedText(baseText + newWord.slice(0, index));
          index++;
        } else {
          clearInterval(timer);
          
          // Wait then start untyping
          setTimeout(() => {
            setIsUntyping(true);
          }, 2000);
        }
      }, speed);
      return () => clearInterval(timer);
    }
  }, [text, cyclingWords, currentWordIndex, isTypingComplete, isUntyping, displayedText, speed]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse text-green-500">|</span>
    </span>
  );
}
