'use client';

import React, { useRef, useEffect, useState } from 'react';

interface ScaledSlideProps {
  children: React.ReactNode;
  refWidth?: number;
  refHeight?: number;
}

/**
 * ScaledSlide - Handles responsive scaling of fixed coordinate system
 * Maintains aspect ratio and scales content to fit any screen size
 * 
 * @param refWidth - Reference width for design (default: 1280)
 * @param refHeight - Reference height for design (default: 960, 4:3 ratio)
 */
export const ScaledSlide: React.FC<ScaledSlideProps> = ({ 
  children, 
  refWidth = 1280, 
  refHeight = 960 
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        const scaleX = clientWidth / refWidth;
        const scaleY = clientHeight / refHeight;
        setScale(Math.min(scaleX, scaleY));
      }
    };

    handleResize();
    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [refWidth, refHeight]);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden flex items-center justify-center">
      <div 
        style={{ 
          width: refWidth, 
          height: refHeight, 
          transform: `scale(${scale})`,
        }}
        className="flex-shrink-0 origin-center overflow-hidden"
      >
        {children}
      </div>
    </div>
  );
};
