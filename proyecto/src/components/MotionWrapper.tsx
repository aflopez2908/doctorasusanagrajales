import React from 'react';
import { inView } from 'motion';

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight' | 'scaleIn';
  delay?: number;
  duration?: number;
}

const MotionWrapper: React.FC<MotionWrapperProps> = ({ 
  children, 
  className = '',
  animation = 'fadeIn',
  delay = 0,
  duration = 0.8
}) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!ref.current) return;

    const element = ref.current;

    // Set initial state
    element.style.opacity = '0';
    element.style.transition = `all ${duration}s cubic-bezier(0.17, 0.67, 0.83, 0.67)`;
    element.style.transitionDelay = `${delay}s`;

    // Apply initial transform based on animation type
    switch (animation) {
      case 'slideUp':
        element.style.transform = 'translateY(30px)';
        break;
      case 'slideLeft':
        element.style.transform = 'translateX(30px)';
        break;
      case 'slideRight':
        element.style.transform = 'translateX(-30px)';
        break;
      case 'scaleIn':
        element.style.transform = 'scale(0.9)';
        break;
      default:
        break;
    }

    // Create intersection observer using motion's inView
    const stopInView = inView(element, () => {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0px) translateX(0px) scale(1)';
    }, { 
      margin: "-10% 0px -10% 0px"
    });

    return () => {
      stopInView();
    };
  }, [animation, delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default MotionWrapper;