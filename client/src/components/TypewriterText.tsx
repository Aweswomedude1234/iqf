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
  const [phase, setPhase] = useState('initial-typing'); // 'initial-typing' | 'cycling-untype' | 'cycling-type' | 'complete'
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    if (cyclingWords.length === 0) {
      // Simple behavior without cycling
      let index = 0;
      const timer = setInterval(() => {
        setDisplayText(text.slice(0, index));
        index++;
        if (index > text.length) {
          clearInterval(timer);
          setPhase('complete');
        }
      }, speed);
      return () => clearInterval(timer);
    }

    if (phase === 'initial-typing') {
      // Type the complete sentence with first word
      let index = 0;
      const firstWord = cyclingWords[0];
      const fullText = text + firstWord;
      
      const timer = setInterval(() => {
        setDisplayText(fullText.slice(0, index));
        index++;
        if (index > fullText.length) {
          clearInterval(timer);
          setCurrentWord(firstWord);
          // Pause then start cycling
          setTimeout(() => {
            setPhase('cycling-untype');
          }, 2000);
        }
      }, speed);
      return () => clearInterval(timer);
      
    } else if (phase === 'cycling-untype') {
      // Untype current word
      let index = currentWord.length;
      const timer = setInterval(() => {
        setCurrentWord(currentWord.slice(0, index));
        index--;
        if (index < 0) {
          clearInterval(timer);
          // Move to next word and start typing
          const nextIndex = (currentWordIndex + 1) % cyclingWords.length;
          setCurrentWordIndex(nextIndex);
          setPhase('cycling-type');
        }
      }, speed / 2);
      return () => clearInterval(timer);
      
    } else if (phase === 'cycling-type') {
      // Type new word
      const newWord = cyclingWords[currentWordIndex];
      let index = 0;
      const timer = setInterval(() => {
        setCurrentWord(newWord.slice(0, index));
        index++;
        if (index > newWord.length) {
          clearInterval(timer);
          // Pause then untype again
          setTimeout(() => {
            setPhase('cycling-untype');
          }, 2000);
        }
      }, speed);
      return () => clearInterval(timer);
    }
    
  }, [text, cyclingWords, currentWordIndex, phase, currentWord, speed]);

  if (cyclingWords.length === 0) {
    return (
      <span className={className}>
        {displayText}
        {phase !== 'complete' && <span className="animate-pulse text-green-500">|</span>}
      </span>
    );
  }

  return (
    <span className={className}>
      {phase === 'initial-typing' ? (
        <>
          {displayText}
          <span className="animate-pulse text-green-500">|</span>
        </>
      ) : (
        <>
          {text}
          <span className="text-green-500">{currentWord}</span>
          <span className="animate-pulse text-green-500">|</span>
        </>
      )}
    </span>
  );
}
