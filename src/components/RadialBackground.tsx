import React, { useMemo, useState, useEffect } from 'react';

interface RadialBackgroundProps {
  total: number;
  current: number;
  onNavigate: (index: number) => void;
}

const RadialBackground: React.FC<RadialBackgroundProps> = ({ total, current, onNavigate }) => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDimensions({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Calculate SVG Sectors
  const sectors = useMemo(() => {
    const items = [];
    const center = { x: 50, y: 50 };
    const radius = 100; // Oversize radius to ensure coverage of corners
    
    // Start at -90 degrees (12 o'clock)
    const startAngleOffset = -90;
    const anglePerSlice = 360 / total;
    const gapAngle = 0.2; 
    
    for (let i = 0; i < total; i++) {
      const startAngle = (i * anglePerSlice) + startAngleOffset + (gapAngle / 2);
      const endAngle = ((i + 1) * anglePerSlice) + startAngleOffset - (gapAngle / 2);

      const toRad = (deg: number) => (deg * Math.PI) / 180;

      const x1 = center.x + radius * Math.cos(toRad(startAngle));
      const y1 = center.y + radius * Math.sin(toRad(startAngle));
      const x2 = center.x + radius * Math.cos(toRad(endAngle));
      const y2 = center.y + radius * Math.sin(toRad(endAngle));

      const d = [
        `M ${center.x} ${center.y}`,
        `L ${x1} ${y1}`,
        `A ${radius} ${radius} 0 0 1 ${x2} ${y2}`,
        'Z'
      ].join(' ');

      items.push({
        id: i,
        d,
        isActive: i <= current
      });
    }
    return items;
  }, [total, current]);

  // Calculate Edge Number Positions
  const edgeNumbers = useMemo(() => {
    if (!mounted) return [];

    const items = [];
    const cx = dimensions.width / 2;
    const cy = dimensions.height / 2;
    // Padding from the edge of the screen - Reduced to place numbers at the very edge
    const padding = 15; 
    const anglePerSlice = 360 / total;
    const startAngleOffset = -90;

    for (let i = 0; i < total; i++) {
        // Calculate angle for the center of the slice
        const angleDeg = (i * anglePerSlice) + (anglePerSlice / 2) + startAngleOffset;
        const angleRad = (angleDeg * Math.PI) / 180;

        // Ray casting to rectangle logic
        
        const wHalf = (dimensions.width / 2) - padding;
        const hHalf = (dimensions.height / 2) - padding;

        const cos = Math.cos(angleRad);
        const sin = Math.sin(angleRad);

        // Distance to vertical edges
        const tx = Math.abs(wHalf / (Math.abs(cos) < 0.0001 ? 0.0001 : cos));
        
        // Distance to horizontal edges
        const ty = Math.abs(hHalf / (Math.abs(sin) < 0.0001 ? 0.0001 : sin));

        // The correct distance is the minimum of hitting x or y boundary
        const t = Math.min(tx, ty);

        const x = cx + t * cos;
        const y = cy + t * sin;

        items.push({
            id: i,
            x,
            y,
            isActive: i === current,
            isPast: i < current,
            label: i + 1
        });
    }
    return items;
  }, [total, current, dimensions, mounted]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
      {/* Background SVG - Sectors are now clickable buttons */}
      <svg 
        viewBox="0 0 100 100" 
        preserveAspectRatio="xMidYMid slice" 
        className="absolute inset-0 w-full h-full opacity-60 transition-all duration-1000 ease-in-out"
      >
        {sectors.map((sector) => (
          <path
            key={sector.id}
            d={sector.d}
            onClick={() => onNavigate(sector.id)}
            className={`cursor-pointer pointer-events-auto transition-all duration-300 ease-out hover:opacity-90 ${
              sector.isActive 
                ? 'fill-olive-300 hover:fill-olive-400' 
                : 'fill-olive-100 hover:fill-olive-200'
            }`}
            stroke="white"
            strokeWidth="0.5"
            aria-label={`Go to slide ${sector.id + 1}`}
            role="button"
          />
        ))}
         <defs>
          <radialGradient id="fadeCenter" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="40%" stopColor="white" stopOpacity="0.8" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
        </defs>
        {/* The overlay circle must not block pointer events */}
        <circle cx="50" cy="50" r="40" fill="url(#fadeCenter)" className="opacity-80 pointer-events-none" />
      </svg>

      {/* Edge Numbers - Visual Indicators Only */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
         {edgeNumbers.map((item) => (
             <div
                key={item.id}
                className={`absolute w-8 h-8 -ml-4 -mt-4 flex items-center justify-center text-sm transition-all duration-500 z-20 select-none ${
                    item.isActive 
                        ? 'text-olive-900 font-extrabold scale-150' 
                        : item.isPast
                            ? 'text-olive-700 font-bold scale-100'
                            : 'text-olive-300 font-normal scale-90'
                }`}
                style={{ 
                    left: item.x, 
                    top: item.y,
                    textShadow: '0 1px 2px rgba(255,255,255,0.8)'
                }}
             >
                {item.label}
             </div>
         ))}
      </div>
    </div>
  );
};

export default RadialBackground;