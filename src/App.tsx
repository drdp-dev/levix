import React from 'react';
import dynamic from 'next/dynamic';
import Slide01 from '@/src/presentations/health-promotion/slides/Slide-01';
import Slide02 from '@/src/presentations/health-promotion/slides/Slide-02';
import Slide03 from '@/src/presentations/health-promotion/slides/Slide-03';
import Slide04 from '@/src/presentations/health-promotion/slides/Slide-04';
import Slide05 from '@/src/presentations/health-promotion/slides/Slide-05';
import Slide06 from '@/src/presentations/health-promotion/slides/Slide-06';
import Slide07 from '@/src/presentations/health-promotion/slides/Slide-07';
import Slide08 from '@/src/presentations/health-promotion/slides/Slide-08';
import Slide09 from '@/src/presentations/health-promotion/slides/Slide-09';
import Slide10 from '@/src/presentations/health-promotion/slides/Slide-10';
import Slide11 from '@/src/presentations/health-promotion/slides/Slide-11';
import Slide12 from '@/src/presentations/health-promotion/slides/Slide-12';
import Slide13 from '@/src/presentations/health-promotion/slides/Slide-13';
import Slide14 from '@/src/presentations/health-promotion/slides/Slide-14';
import Slide15 from '@/src/presentations/health-promotion/slides/Slide-15';
import Slide16 from '@/src/presentations/health-promotion/slides/Slide-16';
import Slide17 from '@/src/presentations/health-promotion/slides/Slide-17';
import Slide18 from '@/src/presentations/health-promotion/slides/Slide-18';
import Slide19 from '@/src/presentations/health-promotion/slides/Slide-19';
import Slide20 from '@/src/presentations/health-promotion/slides/Slide-20';
import Slide21 from '@/src/presentations/health-promotion/slides/Slide-21';
import Slide22 from '@/src/presentations/health-promotion/slides/Slide-22';
import Slide23 from '@/src/presentations/health-promotion/slides/Slide-23';
import { PresentationContainer } from '@/src/lib/presentation';

const RadialBackground = dynamic(() => import('@/src/lib/presentation/RadialBackground'), { ssr: false });

const App: React.FC = () => {
  const SlideComponents = [
    Slide01, Slide02, Slide03, Slide04, Slide05, Slide06,
    Slide07, Slide08, Slide09, Slide10, Slide11, Slide12,
    Slide13, Slide14, Slide15, Slide16, Slide17, Slide18,
    Slide19, Slide20, Slide21, Slide22, Slide23
  ];

  return (
    <PresentationContainer 
      slides={SlideComponents}
      RadialComponent={RadialBackground}
    />
  );
};

export default App;