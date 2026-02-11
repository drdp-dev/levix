import React, { useRef, useEffect, useState, useCallback } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/src/components/slides/Hero';
import Overview from '@/src/components/slides/Overview';
import WhyEvaluate from '@/src/components/slides/WhyEvaluate';
import DefineObjectives from '@/src/components/slides/DefineObjectives';
import RefiningObjectives from '@/src/components/slides/RefiningObjectives';
import TobaccoExample from '@/src/components/slides/TobaccoExample';
import EvaluationTypes from '@/src/components/slides/EvaluationTypes';
import VHNDExample from '@/src/components/slides/VHNDExample';
import SelectingIndicators from '@/src/components/slides/SelectingIndicators';
import SwachhBharatExample from '@/src/components/slides/SwachhBharatExample';
import EvaluationDesign from '@/src/components/slides/EvaluationDesign';
import HandwashingExample from '@/src/components/slides/HandwashingExample';
import DesignCritiqueActivity from '@/src/components/slides/DesignCritiqueActivity';
import DataCollectionTools from '@/src/components/slides/DataCollectionTools';
import ORSExample from '@/src/components/slides/ORSExample';
import AnalysisInterpretation from '@/src/components/slides/AnalysisInterpretation';
import MarginalImprovementExample from '@/src/components/slides/MarginalImprovementExample';
import FeedbackUtilization from '@/src/components/slides/FeedbackUtilization';
import ASHAMeetingExample from '@/src/components/slides/ASHAMeetingExample';
import CommonPitfalls from '@/src/components/slides/CommonPitfalls';
import DiscussionReflection from '@/src/components/slides/DiscussionReflection';
import FinalIntegrativeActivity from '@/src/components/slides/FinalIntegrativeActivity';
import ThankYou from '@/src/components/slides/ThankYou';
import { ChevronDown } from 'lucide-react';

const RadialBackground = dynamic(() => import('@/src/components/RadialBackground'), { ssr: false });

// --- ScaledSlide Component (Handles 4:3 fixed coordinate system scaling) ---
const ScaledSlide: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  // We design for a fixed resolution of 1280x960 (4:3)
  const REF_WIDTH = 1280;
  const REF_HEIGHT = 960;

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const { clientWidth, clientHeight } = containerRef.current;
        // Calculate scale for both dimensions
        const scaleX = clientWidth / REF_WIDTH;
        const scaleY = clientHeight / REF_HEIGHT;
        
        // Use the smaller scale to ensure content always fits entirely within the container
        // This prevents overflow on ultra-wide or ultra-tall screens where the aspect ratio might slightly deviate
        setScale(Math.min(scaleX, scaleY));
      }
    };

    // Initial calculation
    handleResize();

    // Use ResizeObserver for robust size tracking
    const observer = new ResizeObserver(handleResize);
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full relative overflow-hidden flex items-center justify-center">
      <div 
        style={{ 
          width: REF_WIDTH, 
          height: REF_HEIGHT, 
          transform: `scale(${scale})`,
          // transformOrigin 'center' combined with flex centering ensures perfect alignment
        }}
        className="flex-shrink-0 origin-center overflow-hidden"
      >
        {children}
      </div>
    </div>
  );
};

// --- Main App Component ---
const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const touchStartY = useRef<number | null>(null);
  
  // Define slides array
  const SlideComponents = [
    Hero, 
    Overview, 
    WhyEvaluate, 
    DefineObjectives, 
    RefiningObjectives, 
    TobaccoExample,
    EvaluationTypes,
    VHNDExample,
    SelectingIndicators,
    SwachhBharatExample,
    EvaluationDesign,
    HandwashingExample,
    DesignCritiqueActivity,
    DataCollectionTools,
    ORSExample,
    AnalysisInterpretation,
    MarginalImprovementExample,
    FeedbackUtilization,
    ASHAMeetingExample,
    CommonPitfalls,
    DiscussionReflection,
    FinalIntegrativeActivity,
    ThankYou
  ];
  const TOTAL_SLIDES = SlideComponents.length;

  // Function to handle slide navigation
  const navigate = useCallback((direction: number) => {
    if (isScrolling) return;

    const nextIndex = currentSlide + direction;

    // Check bounds
    if (nextIndex >= 0 && nextIndex < TOTAL_SLIDES) {
      setIsScrolling(true);
      setCurrentSlide(nextIndex);
      
      // Lock scrolling for the duration of the animation (1000ms)
      setTimeout(() => {
        setIsScrolling(false);
      }, 1000);
    }
  }, [currentSlide, isScrolling, TOTAL_SLIDES]);

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

  // Wheel/Scroll navigation
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Small threshold to avoid accidental micro-scrolls from sensitive trackpads
      if (Math.abs(e.deltaY) > 30) {
        navigate(e.deltaY > 0 ? 1 : -1);
      }
    };

    // Use passive: true as we don't need to preventDefault (overflow hidden handles that)
    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [navigate]);

  // Touch navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;

    const touchEndY = e.changedTouches[0].clientY;
    const diff = touchStartY.current - touchEndY;

    // Swipe threshold
    if (Math.abs(diff) > 50) {
      navigate(diff > 0 ? 1 : -1);
    }

    touchStartY.current = null;
  };

  return (
    <div 
      className="fixed inset-0 w-full h-full bg-lime-100 overflow-hidden select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Radial Progress */}
      <RadialBackground 
        total={TOTAL_SLIDES} 
        current={currentSlide} 
        onNavigate={handleJumpToSlide}
      />

      {/* Slide Container moving vertically */}
      <div 
        className="w-full h-full transition-transform duration-1000 ease-in-out relative z-10 pointer-events-none"
        style={{ transform: `translateY(-${currentSlide * 100}%)` }}
      >
        {SlideComponents.map((Component, index) => (
          <div key={index} className="w-full h-full flex items-center justify-center p-10">
            {/* The 4:3 Aspect Ratio Box - Enable pointer events here so slide content is interactive */}
            <div className="relative aspect-[4/3] w-full max-h-full max-w-[calc(100vh*1.333)] shadow-2xl rounded-sm overflow-hidden bg-white pointer-events-auto">
              <ScaledSlide>
                <Component isActive={currentSlide === index} />
              </ScaledSlide>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;