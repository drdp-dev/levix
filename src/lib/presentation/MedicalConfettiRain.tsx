'use client';

import React, { useEffect, useState } from 'react';
import { 
  // Core Medical Icons
  Activity,
  Ambulance,
  BriefcaseMedical,
  Cross,
  Dna,
  Droplet,
  Eye,
  FlaskConical,
  Hospital,
  Microscope,
  Pill,
  PillBottle,
  Pipette,
  Siren,
  Stethoscope,
  Syringe,
  TestTube,
  TestTubes,
  Thermometer,
  // Heart-Related Icons
  Heart,
  HeartCrack,
  HeartHandshake,
  HeartOff,
  HeartPlus,
  HeartMinus,
  HeartPulse,
  HandHeart,
  ScanHeart,
} from 'lucide-react';

interface ConfettiItem {
  id: number;
  icon: any;
  x: number;
  y: number;
  delay: number;
  duration: number;
  size: number;
  color: string;
}

interface MedicalConfettiRainProps {
  isActive: boolean;
  interval?: number;
  maxItems?: number;
  colors?: string[];
}

const MEDICAL_ICONS = [
  // Core Medical Icons
  Activity,
  Ambulance,
  BriefcaseMedical,
  Cross,
  Dna,
  Droplet,
  Eye,
  FlaskConical,
  Hospital,
  Microscope,
  Pill,
  PillBottle,
  Pipette,
  Siren,
  Stethoscope,
  Syringe,
  TestTube,
  TestTubes,
  Thermometer,
  // Heart-Related Icons
  Heart,
  HeartCrack,
  HeartHandshake,
  HeartOff,
  HeartPlus,
  HeartMinus,
  HeartPulse,
  HandHeart,
  ScanHeart,
];

const DEFAULT_COLORS = [
  'text-green-950',
  'text-green-600',
  'text-amber-600',
  'text-yellow-700',
  'text-orange-600',
  'text-blue-500',
  'text-amber-500',
  'text-red-500'
];

/**
 * MedicalConfettiRain - Animated falling medical icons
 * 
 * @param isActive - Whether confetti should be active
 * @param interval - Time between new confetti items in ms (default: 200)
 * @param maxItems - Maximum number of confetti items (default: 50)
 * @param colors - Array of Tailwind color classes (default: medical theme colors)
 */
export const MedicalConfettiRain: React.FC<MedicalConfettiRainProps> = ({
  isActive,
  interval = 200,
  maxItems = 50,
  colors = DEFAULT_COLORS
}) => {
  const [confetti, setConfetti] = useState<ConfettiItem[]>([]);

  useEffect(() => {
    if (isActive) {
      let id = 0;
      const addConfetti = () => {
        const newItem: ConfettiItem = {
          id: Date.now() + id++,
          icon: MEDICAL_ICONS[Math.floor(Math.random() * MEDICAL_ICONS.length)],
          x: Math.random() * 100,
          y: -10,
          delay: 0,
          duration: 3000 + Math.random() * 2000,
          size: 32 + Math.random() * 32,
          color: colors[Math.floor(Math.random() * colors.length)],
        };
        setConfetti(prev => [...prev.slice(-(maxItems - 1)), newItem]);
      };

      const intervalId = setInterval(addConfetti, interval);
      return () => clearInterval(intervalId);
    } else {
      setConfetti([]);
    }
  }, [isActive, interval, maxItems, colors]);

  return (
    <>
      {confetti.map((item) => {
        const Icon = item.icon;
        return (
          <div
            key={item.id}
            className="absolute pointer-events-none animate-confetti-fall z-0"
            style={{
              left: `${item.x}%`,
              top: `${item.y}%`,
              animationDelay: `${item.delay}ms`,
              animationDuration: `${item.duration}ms`,
            }}
          >
            <Icon 
              className={item.color} 
              style={{ width: `${item.size}px`, height: `${item.size}px` }} 
              strokeWidth={2.5} 
            />
          </div>
        );
      })}
    </>
  );
};
