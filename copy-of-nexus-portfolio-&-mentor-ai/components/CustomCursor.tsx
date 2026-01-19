import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('button') || 
        target.closest('a')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      <div
        className="fixed top-0 left-0 w-3 h-3 bg-white rounded-full pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          transform: `translate(${position.x - 6}px, ${position.y - 6}px) scale(${isHovering ? 5 : 1})`,
        }}
      />
      <div
        className="fixed top-0 left-0 w-8 h-8 border border-white/30 rounded-full pointer-events-none z-[9998] transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${position.x - 16}px, ${position.y - 16}px) scale(${isHovering ? 1.8 : 1})`,
        }}
      />
    </>
  );
};

export default CustomCursor;