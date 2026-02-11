import React from 'react';
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
import { ScaledSlide, PresentationContainer } from '@/src/lib/presentation';

const RadialBackground = dynamic(() => import('@/src/lib/presentation/RadialBackground'), { ssr: false });

const App: React.FC = () => {
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

  return (
    <PresentationContainer 
      slides={SlideComponents}
      RadialComponent={RadialBackground}
    />
  );
};

export default App;