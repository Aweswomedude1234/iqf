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
  speed = 80 
}: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [isFirstComplete, setIsFirstComplete] = useState(false);
  const [currentCyclingWord, setCurrentCyclingWord] = useState('');

  useEffect(() => {
    if (cyclingWords.length === 0) {
      // Original simple typing behavior
      let index = 0;
      const timer = setInterval(() => {
        setDisplayText(text.slice(0, index));
        index++;
        if (index > text.length) {
          clearInterval(timer);
          setIsFirstComplete(true);
        }
      }, speed);
      return () => clearInterval(timer);
    }

    // Enhanced behavior with cycling words
    let index = 0;
    let currentWord = cyclingWords[currentWordIndex];
    const fullText = text + currentWord;
    
    if (!isFirstComplete) {
      // First time: type the complete sentence
      const timer = setInterval(() => {
        setDisplayText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(timer);
          setIsFirstComplete(true);
          setCurrentCyclingWord(currentWord);
          setTimeout(() => {
            setIsTyping(false);
          }, 2000); // Pause before starting cycle
        }
      }, speed);
      return () => clearInterval(timer);
    } else {
      // Cycling behavior: only change the last word
      if (isTyping) {
        // Typing the new word
        const timer = setInterval(() => {
          setCurrentCyclingWord(currentWord.slice(0, index));
          index++;
          if (index > currentWord.length) {
            clearInterval(timer);
            setTimeout(() => setIsTyping(false), 2000); // Pause before untyping
          }
        }, speed);
        return () => clearInterval(timer);
      } else {
        // Untyping the current word
        index = currentCyclingWord.length;
        const timer = setInterval(() => {
          setCurrentCyclingWord(currentWord.slice(0, index));
          index--;
          if (index < 0) {
            clearInterval(timer);
            setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length);
            setIsTyping(true);
          }
        }, speed / 2); // Untype faster
        return () => clearInterval(timer);
      }
    }
  }, [text, cyclingWords, currentWordIndex, isTyping, isFirstComplete, speed]);

  if (cyclingWords.length === 0) {
    return (
      <span className={className}>
        {displayText}
        {!isFirstComplete && <span className="animate-pulse text-green-500">|</span>}
      </span>
    );
  }

  return (
    <span className={className}>
      {isFirstComplete ? (
        <>
          {text}
          <span className="text-green-500">{currentCyclingWord}</span>
          <span className="animate-pulse text-green-500">|</span>
        </>
      ) : (
        <>
          {displayText}
          <span className="animate-pulse text-green-500">|</span>
        </>
      )}
    </span>
  );
}
