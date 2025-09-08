import { ReactNode } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: 'fade-in' | 'slide-in-left' | 'slide-in-right';
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  animationType = 'fade-in' 
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div 
      ref={ref}
      className={`${animationType} ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}
