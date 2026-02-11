'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { ScaledSlide } from './ScaledSlide';
import { Maximize, Minimize, X } from 'lucide-react';

interface PresentationContainerProps {
  slides: React.ComponentType<{ isActive: boolean }>[];
  backgroundColor?: string;
  transitionDuration?: number;
  scrollThreshold?: number;
  swipeThreshold?: number;
  showRadialProgress?: boolean;
  aspectRatio?: string;
  margin?: number;
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
 * @param aspectRatio - Aspect ratio string (default: '4/3')
 * @param margin - Margin in pixels (default: 40, results in 80px total padding)
 * @param RadialComponent - Custom radial progress component
 */
export const PresentationContainer: React.FC<PresentationContainerProps> = ({
  slides,
  backgroundColor = 'bg-green-100',
  transitionDuration = 1000,
  scrollThreshold = 30,
  swipeThreshold = 50,
  showRadialProgress = true,
  aspectRatio = '4/3',
  margin = 40,
  RadialComponent,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const touchStartY = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  // Calculate aspect ratio dimensions
  const [ratioW, ratioH] = aspectRatio.split('/').map(Number);
  const totalMargin = margin * 2;

  // Fullscreen handlers
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  }, []);

  const exitPresentation = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    router.push('/presentations');
  }, [router]);

  // Listen for fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFs = !!document.fullscreenElement;
      setIsFullscreen(isFs);
      if (!isFs) {
        setShowControls(true);
      } else {
        setShowControls(false);
      }
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Show controls temporarily in fullscreen
  const showControlsTemporarily = useCallback(() => {
    if (!isFullscreen) return;
    
    setShowControls(true);
    
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    
    controlsTimeoutRef.current = setTimeout(() => {
      setShowControls(false);
    }, 3000);
  }, [isFullscreen]);

  // Handle double click and Esc key
  useEffect(() => {
    const handleDoubleClick = () => {
      if (isFullscreen) {
        showControlsTemporarily();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        showControlsTemporarily();
      }
    };

    window.addEventListener('dblclick', handleDoubleClick);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('dblclick', handleDoubleClick);
      window.removeEventListener('keydown', handleKeyDown);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isFullscreen, showControlsTemporarily]);

  const navigate = useCallback((direction: number) => {
    if (isScrolling) return;

    const nextIndex = currentSlide + direction;

    if (nextIndex >= 0 && nextIndex < slides.length) {
      setIsScrolling(true);
      setCurrentSlide(nextIndex);
    }
  }, [currentSlide, isScrolling, slides.length]);

  // Cleanup timeout for isScrolling
  useEffect(() => {
    if (!isScrolling) return;
    
    const timerId = setTimeout(() => {
      setIsScrolling(false);
    }, transitionDuration);

    return () => clearTimeout(timerId);
  }, [isScrolling, transitionDuration]);

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
      ref={containerRef}
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

      {/* Control Buttons */}
      <div className={`fixed top-6 right-6 z-50 flex gap-3 transition-opacity duration-300 ${showControls ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <button
          onClick={toggleFullscreen}
          className="p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          title={isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        >
          {isFullscreen ? (
            <Minimize className="w-6 h-6 text-gray-700" />
          ) : (
            <Maximize className="w-6 h-6 text-gray-700" />
          )}
        </button>
        <button
          onClick={exitPresentation}
          className="p-3 bg-red-500/90 hover:bg-red-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          title="Exit Presentation"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="w-full h-full" style={{ padding: `${margin}px` }}>
        <div className="w-full h-full flex items-center justify-center">
          <div style={{ 
            aspectRatio,
            width: `min(100%, calc((100vh - ${totalMargin}px) * ${ratioW} / ${ratioH}))`,
            height: `min(100%, calc((100vw - ${totalMargin}px) * ${ratioH} / ${ratioW}))`
          }} className="relative overflow-hidden rounded-3xl shadow-2xl bg-white">
            {slides.map((SlideComponent, index) => (
              <div
                key={index}
                className="absolute inset-0 w-full h-full"
                style={{
                  pointerEvents: currentSlide === index ? 'auto' : 'none',
                  zIndex: currentSlide === index ? 10 : 0
                }}
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
