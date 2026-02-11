# Levix Presentation Library

Reusable components for building interactive full-screen presentations.

## Components

### PresentationContainer

Main wrapper that handles navigation and slide management.

```tsx
import { PresentationContainer } from '@/src/lib/presentation';
import RadialBackground from '@/src/lib/presentation/RadialBackground';

const slides = [Slide1, Slide2, Slide3];

<PresentationContainer 
  slides={slides}
  RadialComponent={RadialBackground}
  backgroundColor="bg-blue-100"
  transitionDuration={1000}
  aspectRatio="16/9"
  margin={20}
/>
```

**Props:**
- `slides` - Array of slide components (required)
- `backgroundColor` - Background color class (default: 'bg-green-100')
- `transitionDuration` - Transition duration in ms (default: 1000)
- `scrollThreshold` - Wheel scroll threshold (default: 30)
- `swipeThreshold` - Touch swipe threshold (default: 50)
- `showRadialProgress` - Show radial progress (default: true)
- `aspectRatio` - Aspect ratio string (default: '4/3')
- `margin` - Margin in pixels (default: 40)
- `RadialComponent` - Custom radial progress component

**Navigation:**
- Arrow keys (↑/↓), PageUp/PageDown, Spacebar
- Mouse wheel scroll
- Touch swipe (mobile)
- Radial menu click

### ScaledSlide

Handles responsive scaling of fixed coordinate system (1280x960 by default).

```tsx
import { ScaledSlide } from '@/src/lib/presentation';

<ScaledSlide refWidth={1280} refHeight={960}>
  <YourContent />
</ScaledSlide>
```

**Props:**
- `refWidth` - Reference width (default: 1280)
- `refHeight` - Reference height (default: 960)
- `children` - Content to scale

### RadialBackground

Interactive circular progress indicator with navigation.

```tsx
import RadialBackground from '@/src/lib/presentation/RadialBackground';

<RadialBackground 
  total={23} 
  current={5} 
  onNavigate={(index) => setSlide(index)}
/>
```

**Props:**
- `total` - Total number of slides
- `current` - Current slide index
- `onNavigate` - Callback when sector is clicked

## Usage Example

```tsx
import React from 'react';
import dynamic from 'next/dynamic';
import { PresentationContainer } from '@/src/lib/presentation';
import Slide1 from './slides/Slide1';
import Slide2 from './slides/Slide2';

const RadialBackground = dynamic(
  () => import('@/src/lib/presentation/RadialBackground'), 
  { ssr: false }
);

const App = () => {
  const slides = [Slide1, Slide2];

  return (
    <PresentationContainer 
      slides={slides}
      RadialComponent={RadialBackground}
    />
  );
};

export default App;
```

## Slide Component Structure

Each slide should accept an `isActive` prop for animations:

```tsx
interface SlideProps {
  isActive: boolean;
}

const MySlide: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className={`transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      <h1 className={`transition-all duration-700 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        My Slide Title
      </h1>
    </div>
  );
};
```

## Design Guidelines

- Design slides for 1280x960 (4:3 aspect ratio)
- Use staggered animation delays for visual interest
- Keep content within safe margins to prevent overflow
- Use Tailwind transition utilities for smooth animations
