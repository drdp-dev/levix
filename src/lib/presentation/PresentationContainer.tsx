'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { ScaledSlide } from './ScaledSlide';

interface PresentationContainerProps {
  slides: React.ComponentType<{ isActive: boolean }>[];
  backgroundColor?: string;
  transitionDuration?: number;
  scrollThreshold?: number;
  swipeThreshold?: number;
  showRadialProgress?: boolean;
  RadialComponent?: React.ComponentType<{
    total: number;
    current: number;
    onNavigate: (index: number) => void;
  }>;
}

/**
 * PresentationContainer - Main presentation wrapper with navigation
 * Handles keyboard, mouse wheel, and touch navigation
 * 
 * @param slides - Array of slide components
 * @param backgroundColor - Background color class (default: 'bg-green-100')
 * @param transitionDuration - Transition duration in ms (default: 1000)
 * @param scrollThreshold - Wheel scroll threshold (default: 30)
 * @param swipeThreshold - Touch swipe threshold (default: 50)
 * @param showRadialProgress - Show radial progress indicator (default: true)
 * @param RadialComponent - Custom radial progress component
 */
export const PresentationContainer: React.FC<PresentationContainerProps> = ({
  slides,
  backgroundColor = 'bg-green-100',
  transitionDuration = 1000,
  scrollThreshold = 30,
  swipeThreshold = 50,
  showRadialProgress = true,
  RadialComponent,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const touchStartY = useRef<number | null>(null);

  const navigate = useCallback((direction: number) => {
    if (isScrolling) return;

    const nextIndex = currentSlide + direction;

    if (nextIndex >= 0 && nextIndex < slides.length) {
      setIsScrolling(true);
      setCurrentSlide(nextIndex);
      
      setTimeout(() => {
        setIsScrolling(false);
      }, transitionDuration);
    }
  }, [currentSlide, isScrolling, slides.length, transitionDuration]);

  const handleJumpToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        navigate(1);
      } else if (['ArrowUp', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        navigate(-1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [navigate]);

  // Wheel navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > scrollThreshold) {
        navigate(e.deltaY > 0 ? 1 : -1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [navigate, scrollThreshold]);

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;

    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;

    if (Math.abs(diff) > swipeThreshold) {
      navigate(diff > 0 ? 1 : -1);
    }

    touchStartY.current = null;
  };

  return (
    <div 
      className={`fixed inset-0 w-full h-full ${backgroundColor} overflow-hidden select-none`}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {showRadialProgress && RadialComponent && (
        <RadialComponent 
          total={slides.length} 
          current={currentSlide} 
          onNavigate={handleJumpToSlide}
        />
      )}

      <div className="w-full h-full p-10">
        <div className="relative w-full h-full">
          <div className="aspect-[4/3] max-w-full max-h-full mx-auto relative overflow-hidden rounded-3xl shadow-2xl bg-white">
            {slides.map((SlideComponent, index) => (
              <div
                key={index}
                className="absolute inset-0 w-full h-full"
              >
                <ScaledSlide>
                  <div
                    style={{
                      opacity: currentSlide === index ? 1 : 0,
                      transition: `opacity ${transitionDuration}ms ease-in-out`,
                      pointerEvents: currentSlide === index ? 'auto' : 'none',
                    }}
                    className="w-full h-full"
                  >
                    <SlideComponent isActive={currentSlide === index} />
                  </div>
                </ScaledSlide>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
