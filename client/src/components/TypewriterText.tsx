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
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isInitialComplete, setIsInitialComplete] = useState(false);
  const [currentCyclingWord, setCurrentCyclingWord] = useState('');
  const [isUntyping, setIsUntyping] = useState(false);

  useEffect(() => {
    if (cyclingWords.length === 0) {
      // Simple typing without cycling
      let index = 0;
      const timer = setInterval(() => {
        setDisplayText(text.slice(0, index));
        index++;
        if (index > text.length) {
          clearInterval(timer);
        }
      }, speed);
      return () => clearInterval(timer);
    }

    if (!isInitialComplete) {
      // Type the full sentence once with the first word
      let index = 0;
      const fullText = text + cyclingWords[0];
      
      const timer = setInterval(() => {
        setDisplayText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(timer);
          setIsInitialComplete(true);
          setCurrentCyclingWord(cyclingWords[0]);
          
          // Start the cycling after a pause
          setTimeout(() => {
            setIsUntyping(true);
          }, 2500);
        }
      }, speed);
      return () => clearInterval(timer);
    }

    // Handle word cycling after initial typing is complete
    if (isUntyping) {
      // Untype the current word
      let length = currentCyclingWord.length;
      const timer = setInterval(() => {
        setCurrentCyclingWord(currentCyclingWord.slice(0, length));
        length--;
        if (length < 0) {
          clearInterval(timer);
          // Move to next word
          const nextIndex = (currentWordIndex + 1) % cyclingWords.length;
          setCurrentWordIndex(nextIndex);
          setIsUntyping(false);
        }
      }, speed / 3);
      return () => clearInterval(timer);
    } else {
      // Type the new word
      const targetWord = cyclingWords[currentWordIndex];
      let index = 0;
      const timer = setInterval(() => {
        setCurrentCyclingWord(targetWord.slice(0, index));
        index++;
        if (index > targetWord.length) {
          clearInterval(timer);
          // Wait before untyping again
          setTimeout(() => {
            setIsUntyping(true);
          }, 2500);
        }
      }, speed);
      return () => clearInterval(timer);
    }
  }, [text, cyclingWords, currentWordIndex, isInitialComplete, currentCyclingWord, isUntyping, speed]);

  if (cyclingWords.length === 0) {
    return (
      <span className={className}>
        {displayText}
        <span className="animate-pulse text-green-500">|</span>
      </span>
    );
  }

  return (
    <span className={className}>
      {!isInitialComplete ? (
        <>
          {displayText}
          <span className="animate-pulse text-green-500">|</span>
        </>
      ) : (
        <>
          {text}
          <span className="text-green-500">{currentCyclingWord}</span>
          <span className="animate-pulse text-green-500">|</span>
        </>
      )}
    </span>
  );
}
