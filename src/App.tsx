import React from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/src/presentations/health-promotion/slides/Hero';
import Overview from '@/src/presentations/health-promotion/slides/Overview';
import WhyEvaluate from '@/src/presentations/health-promotion/slides/WhyEvaluate';
import DefineObjectives from '@/src/presentations/health-promotion/slides/DefineObjectives';
import RefiningObjectives from '@/src/presentations/health-promotion/slides/RefiningObjectives';
import TobaccoExample from '@/src/presentations/health-promotion/slides/TobaccoExample';
import EvaluationTypes from '@/src/presentations/health-promotion/slides/EvaluationTypes';
import VHNDExample from '@/src/presentations/health-promotion/slides/VHNDExample';
import SelectingIndicators from '@/src/presentations/health-promotion/slides/SelectingIndicators';
import SwachhBharatExample from '@/src/presentations/health-promotion/slides/SwachhBharatExample';
import EvaluationDesign from '@/src/presentations/health-promotion/slides/EvaluationDesign';
import HandwashingExample from '@/src/presentations/health-promotion/slides/HandwashingExample';
import DesignCritiqueActivity from '@/src/presentations/health-promotion/slides/DesignCritiqueActivity';
import DataCollectionTools from '@/src/presentations/health-promotion/slides/DataCollectionTools';
import ORSExample from '@/src/presentations/health-promotion/slides/ORSExample';
import AnalysisInterpretation from '@/src/presentations/health-promotion/slides/AnalysisInterpretation';
import MarginalImprovementExample from '@/src/presentations/health-promotion/slides/MarginalImprovementExample';
import FeedbackUtilization from '@/src/presentations/health-promotion/slides/FeedbackUtilization';
import ASHAMeetingExample from '@/src/presentations/health-promotion/slides/ASHAMeetingExample';
import CommonPitfalls from '@/src/presentations/health-promotion/slides/CommonPitfalls';
import DiscussionReflection from '@/src/presentations/health-promotion/slides/DiscussionReflection';
import FinalIntegrativeActivity from '@/src/presentations/health-promotion/slides/FinalIntegrativeActivity';
import ThankYou from '@/src/presentations/health-promotion/slides/ThankYou';
import { PresentationContainer } from '@/src/lib/presentation';

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