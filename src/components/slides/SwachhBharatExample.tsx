import React from 'react';
import { SlideProps } from '../../types';
import { GraduationCap, Footprints, Hammer, Repeat, TrendingDown, Info } from 'lucide-react';

const SwachhBharatExample: React.FC<SlideProps> = ({ isActive }) => {
  const steps = [
    {
      type: "Input",
      text: "Number of IEC workers trained",
      icon: GraduationCap,
      color: "text-amber-700",
      bg: "bg-yellow-200",
      border: "border-yellow-500",
      delay: 300
    },
    {
      type: "Process",
      text: "Household visits conducted",
      icon: Footprints,
      color: "text-orange-800",
      bg: "bg-orange-200",
      border: "border-orange-500",
      delay: 500
    },
    {
      type: "Output",
      text: "Toilets constructed and demonstrated",
      icon: Hammer,
      color: "text-amber-800",
      bg: "bg-amber-200",
      border: "border-amber-500",
      delay: 700
    },
    {
      type: "Outcome",
      text: "Percentage of households regularly using toilets",
      icon: Repeat,
      color: "text-olive-700",
      bg: "bg-olive-100",
      border: "border-olive-400",
      delay: 900
    },
    {
      type: "Impact",
      text: "Reduction in diarrhoeal disease incidence",
      icon: TrendingDown,
      color: "text-green-800",
      bg: "bg-green-200",
      border: "border-green-500",
      delay: 1100
    }
  ];

  return (
    <div className={`w-full h-full flex flex-col p-10 relative overflow-hidden bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background Decor */}
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 -z-10"></div>

      {/* Header */}
      <div className="flex-none mb-8 relative z-10">
         <div className="flex items-center gap-4">
            <div className="w-2 h-16 bg-blue-500 rounded-full"></div>
            <div>
                <h2 className={`text-4xl font-bold text-olive-900 transition-all duration-1000 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                Example: Swachh Bharat IEC Campaign
                </h2>
                <h3 className={`text-2xl text-blue-600 font-medium transition-all duration-1000 delay-200 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                Mapping Indicators
                </h3>
            </div>
         </div>
      </div>

      {/* Main Flow Content */}
      <div className="flex-1 flex flex-col justify-center gap-3 relative z-10 px-8">
        {/* Vertical connecting line */}
        <div className={`absolute left-[68px] top-6 bottom-6 w-1 bg-gray-200 -z-10 transition-all duration-1000 delay-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}></div>

        {steps.map((step, index) => (
          <div 
            key={index}
            className={`flex items-center gap-6 p-3 rounded-2xl bg-white/80 backdrop-blur-sm border-2 ${step.border} shadow-sm transition-all duration-700 transform ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}
            style={{ transitionDelay: `${step.delay}ms`, marginLeft: `${index * 20}px` }}
          >
            {/* Icon Box */}
            <div className={`w-20 h-20 flex-shrink-0 rounded-2xl ${step.bg} flex items-center justify-center shadow-inner`}>
                <step.icon className={`w-10 h-10 ${step.color}`} strokeWidth={2} />
            </div>

            {/* Text Content */}
            <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                    <span className={`text-sm font-bold uppercase tracking-widest px-2 py-0.5 rounded ${step.bg} ${step.color}`}>
                        {step.type}
                    </span>
                    <div className="h-px flex-1 bg-gray-200"></div>
                </div>
                <p className="text-2xl font-bold text-olive-900 leading-tight">
                    {step.text}
                </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className={`flex-none mt-6 flex items-center justify-center gap-3 text-olive-600 transition-all duration-1000 delay-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <Info className="w-6 h-6" />
        <p className="text-xl font-medium tracking-wide">
          Different indicators answer different questions.
        </p>
      </div>

    </div>
  );
};

export default SwachhBharatExample;