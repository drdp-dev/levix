import React from 'react';
import { SlideProps } from '@/src/types';
import { Settings, UserCheck, HeartPulse, Layers } from 'lucide-react';

const EvaluationTypes: React.FC<SlideProps> = ({ isActive }) => {
  const types = [
    {
      title: "Process Evaluation",
      question: "Was the program implemented as planned?",
      points: [
        "Focus: Program fidelity & reach",
        "Metrics: Participation rates & quality",
        "Timing: During implementation",
        "Utility: Optimize operations"
      ],
      icon: Settings,
      color: "text-orange-900",
      iconColor: "text-orange-700",
      bg: "bg-orange-100",
      border: "border-orange-400",
      bulletColor: "bg-orange-600",
      delay: 300
    },
    {
      title: "Outcome Evaluation",
      question: "Did knowledge, attitudes, or behaviors change?",
      points: [
        "Focus: Direct short-term effects",
        "Metrics: Changes in KAP & Risk",
        "Timing: Immediately post-program",
        "Utility: Assess effectiveness"
      ],
      icon: UserCheck,
      color: "text-amber-900",
      iconColor: "text-amber-700",
      bg: "bg-amber-100",
      border: "border-amber-400",
      bulletColor: "bg-amber-600",
      delay: 500
    },
    {
      title: "Impact Evaluation",
      question: "Did long-term health indicators improve?",
      points: [
        "Focus: Ultimate health status",
        "Metrics: Morbidity & Mortality rates",
        "Timing: Years after program",
        "Utility: Inform policy & funding"
      ],
      icon: HeartPulse,
      color: "text-lime-900",
      iconColor: "text-lime-700",
      bg: "bg-lime-100",
      border: "border-lime-400",
      bulletColor: "bg-lime-600",
      delay: 700
    }
  ];

  return (
    <div className={`w-full h-full flex flex-col p-10 relative bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Header */}
      <div className="flex-none mb-6 text-center">
        <h2 className={`text-6xl font-black text-slate-900 mb-4 transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          Step 2: Decide the Type of Evaluation
        </h2>
        <div className={`h-2 w-48 bg-teal-400 mx-auto rounded-full transition-all duration-1000 delay-200 transform ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
      </div>

      {/* Main Content - 3 Cards */}
      <div className="flex-1 grid grid-cols-3 gap-8 px-4 pb-4">
        {types.map((item, index) => (
          <div
            key={index}
            className={`group flex flex-col items-center text-center p-8 rounded-[3rem] border-[5px] ${item.border} ${item.bg} shadow-md transition-all duration-500 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'} hover:-translate-y-4 hover:shadow-2xl hover:bg-white cursor-default h-full`}
            style={{ transitionDelay: `${item.delay}ms` }}
          >
            <div className={`mb-8 p-6 bg-white rounded-[2rem] shadow-lg ${item.iconColor} relative overflow-hidden transition-transform duration-500 group-hover:scale-110 flex-none ring-4 ring-white/50`}>
               <div className={`absolute inset-0 opacity-20 ${item.bg} rounded-full transform scale-0 group-hover:scale-150 transition-transform duration-500`}></div>
              <item.icon className="w-20 h-20 relative z-10" strokeWidth={2} />
            </div>
            
            <h3 className={`text-3xl font-black ${item.color} mb-4 uppercase tracking-wide leading-none flex-none`}>{item.title}</h3>
            
            <div className="mb-8 min-h-[4rem] flex items-center justify-center flex-none px-2">
                 <p className="text-2xl text-slate-900 font-extrabold leading-tight">
                    "{item.question}"
                </p>
            </div>

            {/* Bullet Points - Expanded to fill space */}
            <ul className="w-full text-left space-y-5 px-6 py-6 bg-white/80 rounded-[2rem] flex-1 flex flex-col justify-center border-2 border-white/60 shadow-inner">
              {item.points.map((point, i) => {
                const [label, value] = point.split(':');
                return (
                  <li key={i} className="flex items-start gap-4">
                    <div className={`w-3 h-3 mt-2.5 rounded-full flex-shrink-0 ${item.bulletColor}`}></div>
                    <span className="text-xl text-slate-700 leading-snug font-medium">
                      {value ? (
                        <>
                          <span className="font-black text-slate-900 uppercase text-sm tracking-widest block mb-0.5">{label}</span>
                          {value}
                        </>
                      ) : (
                        label
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className={`flex-none mt-4 flex items-center justify-center gap-4 transition-all duration-1000 delay-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <Layers className="w-8 h-8 text-teal-500 animate-bounce" strokeWidth={2.5} style={{ animationDuration: '3s' }} />
        <p className="text-2xl text-teal-700 font-bold tracking-widest uppercase">
          Different levels for different needs
        </p>
        <Layers className="w-8 h-8 text-teal-500 animate-bounce" strokeWidth={2.5} style={{ animationDuration: '3s', animationDelay: '1.5s' }} />
      </div>

    </div>
  );
};

export default EvaluationTypes;