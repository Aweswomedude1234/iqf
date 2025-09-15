import { useEffect, useState } from "react";

interface Props {
  text: string;
  cyclingWords: string[];
  speed?: number;
  pause?: number;
  className?: string;
}

export default function TypewriterText({
  text,
  cyclingWords,
  speed = 120, // ⬅️ slightly slower typing
  pause = 1500, // ⬅️ longer pause before deleting
  className = "",
}: Props) {
  const [displayedText, setDisplayedText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentWord = cyclingWords[wordIndex % cyclingWords.length];
    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex <= currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, speed);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayedText(currentWord.substring(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, speed / 2);
    } else if (!deleting && charIndex > currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIndex < 0) {
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % cyclingWords.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, wordIndex, cyclingWords, speed, pause]);

  return (
    <span className={className}>
      {text}
      <span style={{ color: "#16A34A" }}>{displayedText}</span>
      <span className="blinking-cursor">|</span>
    </span>
  );
}
