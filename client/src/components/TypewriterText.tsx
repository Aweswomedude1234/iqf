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
  const [isInitialTypingComplete, setIsInitialTypingComplete] = useState(false);
  const [currentCyclingWord, setCurrentCyclingWord] = useState('');
  const [isTypingWord, setIsTypingWord] = useState(true);

  useEffect(() => {
    if (cyclingWords.length === 0) {
      // Original simple typing behavior
      let index = 0;
      const timer = setInterval(() => {
        setDisplayText(text.slice(0, index));
        index++;
        if (index > text.length) {
          clearInterval(timer);
          setIsInitialTypingComplete(true);
        }
      }, speed);
      return () => clearInterval(timer);
    }

    if (!isInitialTypingComplete) {
      // First time: type the complete sentence including first word
      let index = 0;
      const firstWord = cyclingWords[0];
      const fullText = text + firstWord;
      
      const timer = setInterval(() => {
        setDisplayText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(timer);
          setIsInitialTypingComplete(true);
          setCurrentCyclingWord(firstWord);
          // Start cycling after a pause, starting with the second word
          setTimeout(() => {
            setCurrentWordIndex(1);
            setIsTypingWord(false); // Start by untyping the first word
          }, 2500);
        }
      }, speed);
      return () => clearInterval(timer);
    } else {
      // Cycling behavior: change only the last word
      const currentWord = cyclingWords[currentWordIndex];
      
      if (isTypingWord) {
        // Typing the new word
        let index = 0;
        const timer = setInterval(() => {
          setCurrentCyclingWord(currentWord.slice(0, index));
          index++;
          if (index > currentWord.length) {
            clearInterval(timer);
            // Pause, then start untyping
            setTimeout(() => {
              setIsTypingWord(false);
            }, 2500);
          }
        }, speed);
        return () => clearInterval(timer);
      } else {
        // Untyping the current word
        let index = currentCyclingWord.length;
        const timer = setInterval(() => {
          setCurrentCyclingWord(currentWord.slice(0, index));
          index--;
          if (index < 0) {
            clearInterval(timer);
            // Move to next word and start typing
            setCurrentWordIndex((prev) => (prev + 1) % cyclingWords.length);
            setIsTypingWord(true);
          }
        }, speed / 2);
        return () => clearInterval(timer);
      }
    }
  }, [text, cyclingWords, currentWordIndex, isInitialTypingComplete, isTypingWord, speed]);

  if (cyclingWords.length === 0) {
    return (
      <span className={className}>
        {displayText}
        {!isInitialTypingComplete && <span className="animate-pulse text-green-500">|</span>}
      </span>
    );
  }

  return (
    <span className={className}>
      {isInitialTypingComplete ? (
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
