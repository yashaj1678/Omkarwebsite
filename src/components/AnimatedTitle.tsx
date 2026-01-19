import { useEffect, useRef, useState } from 'react';

interface AnimatedTitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedTitle({ children, className = '' }: AnimatedTitleProps) {
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={titleRef}
      className={`title-fade-in ${isVisible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
}