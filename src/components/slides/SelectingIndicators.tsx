import React from 'react';
import { SlideProps } from '../../types';
import { Package, Settings, Users, BrainCircuit, HeartPulse, AlertTriangle, ArrowDown } from 'lucide-react';

const SelectingIndicators: React.FC<SlideProps> = ({ isActive }) => {
  const indicators = [
    {
      type: "Input",
      desc: "Manpower, funds, materials",
      icon: Package,
      textColor: "text-amber-800",
      borderColor: "border-amber-400",
      bgColor: "bg-yellow-100",
      iconBg: "bg-yellow-200",
      delay: 200
    },
    {
      type: "Process",
      desc: "Activities conducted (Training, Sessions)",
      icon: Settings,
      textColor: "text-orange-900",
      borderColor: "border-orange-500",
      bgColor: "bg-orange-100",
      iconBg: "bg-orange-200",
      delay: 400
    },
    {
      type: "Output",
      desc: "Services delivered & People reached",
      icon: Users,
      textColor: "text-amber-900",
      borderColor: "border-amber-500",
      bgColor: "bg-amber-100",
      iconBg: "bg-amber-200",
      delay: 600
    },
    {
      type: "Outcome",
      desc: "Behavior or attitude change",
      icon: BrainCircuit,
      textColor: "text-teal-900",
      borderColor: "border-teal-500",
      bgColor: "bg-teal-100",
      iconBg: "bg-teal-200",
      delay: 800
    },
    {
      type: "Impact",
      desc: "Morbidity & Mortality reduction",
      icon: HeartPulse,
      textColor: "text-lime-900",
      borderColor: "border-lime-500",
      bgColor: "bg-lime-100",
      iconBg: "bg-lime-200",
      delay: 1000
    }
  ];

  return (
    <div className={`w-full h-full flex flex-col p-8 relative bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Header */}
      <div className="flex-none mb-4 flex items-center justify-between z-10">
        <div>
            <h2 className={`text-4xl font-black text-slate-900 mb-2 transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
            Step 3: Selecting Indicators
            </h2>
            <div className={`h-1.5 w-32 bg-emerald-400 rounded-full transition-all duration-1000 delay-200 transform ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
        </div>
      </div>

      {/* Main Content - Vertical Pipeline */}
      <div className="flex-1 relative z-10 pl-4 pr-2 flex flex-col justify-center">
        
        {/* Continuous Vertical Line */}
        <div className={`absolute left-[3.25rem] top-10 bottom-10 w-1 bg-gray-200 -z-10 transition-all duration-1000 delay-500 ${isActive ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 origin-top'}`}></div>

        <div className="flex flex-col gap-4 h-full justify-center">
            {indicators.map((item, index) => (
                <div 
                key={index}
                className={`flex items-center gap-8 p-6 rounded-[2rem] border-l-[16px] ${item.borderColor} ${item.bgColor} shadow-sm transition-all duration-700 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'} hover:scale-[1.01] hover:shadow-lg`}
                style={{ transitionDelay: `${item.delay}ms` }}
                >
                {/* Icon Container */}
                <div className={`w-20 h-20 flex-shrink-0 rounded-2xl ${item.iconBg} flex items-center justify-center shadow-inner border-2 border-white relative z-10`}>
                    <item.icon className={`w-10 h-10 ${item.textColor}`} strokeWidth={2.5} />
                </div>

                {/* Content */}
                <div className="flex-1 flex items-center justify-between">
                    <div className="w-1/4">
                        <h3 className={`text-2xl font-black uppercase tracking-widest ${item.textColor}`}>
                            {item.type}
                        </h3>
                    </div>
                    
                    <div className="w-px h-12 bg-gray-300/50 mx-4"></div>

                    <div className="flex-1">
                        <p className="text-2xl text-slate-900 font-bold leading-tight">
                            {item.desc}
                        </p>
                    </div>
                </div>

                {/* Connector Arrow (Visual only, on the card) */}
                <div className="opacity-0 xl:opacity-20 text-gray-500">
                    <ArrowDown className="w-8 h-8 -rotate-90 xl:rotate-0" />
                </div>
                </div>
            ))}
        </div>
      </div>

      {/* Footer Warning - Full Width Banner */}
      <div className={`flex-none mt-4 bg-white border-2 border-red-100 rounded-3xl p-4 flex items-center justify-center gap-6 shadow-md transition-all duration-1000 delay-[1200ms] transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:border-red-300`}>
        <div className="p-3 bg-red-50 rounded-full text-red-500 shadow-sm animate-pulse">
            <AlertTriangle className="w-8 h-8" strokeWidth={2.5} />
        </div>
        <p className="text-2xl text-slate-900">
            <span className="font-bold text-red-700 uppercase tracking-wide mr-2">Pitfall:</span> 
            Don't jump straight to <span className="text-red-600 font-bold underline decoration-wavy decoration-red-300">Impact</span>. Measure the full journey.
        </p>
      </div>


    </div>
  );
};

export default SelectingIndicators;