import React from 'react';
import { SlideProps } from '../../types';
import { Target, Ruler, Mountain, Link2, Clock, AlertTriangle } from 'lucide-react';

const DefineObjectives: React.FC<SlideProps> = ({ isActive }) => {
  const smart = [
    { letter: 'S', word: 'Specific', icon: Target, color: 'text-amber-700', bg: 'bg-amber-100', border: 'border-amber-300' },
    { letter: 'M', word: 'Measurable', icon: Ruler, color: 'text-teal-700', bg: 'bg-teal-100', border: 'border-teal-300' },
    { letter: 'A', word: 'Achievable', icon: Mountain, color: 'text-emerald-700', bg: 'bg-emerald-100', border: 'border-emerald-300' },
    { letter: 'R', word: 'Relevant', icon: Link2, color: 'text-orange-700', bg: 'bg-orange-100', border: 'border-orange-300' },
    { letter: 'T', word: 'Time-bound', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  ];

  return (
    <div className={`w-full h-full flex flex-col p-10 relative bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Header */}
      <div className="flex-none mb-6 text-center">
        <h2 className={`text-5xl font-bold text-slate-900 mb-3 transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          Step 1: Define Clear & Measurable Objectives
        </h2>
        <p className={`text-3xl text-teal-700 font-medium transition-all duration-1000 delay-200 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          Evaluation begins <span className="text-amber-700 font-semibold">before</span> implementation.
        </p>
      </div>

      {/* Main Content - SMART Cards Vertical */}
      <div className="flex-1 flex flex-col items-stretch justify-center gap-3 px-10 pb-4">
        {smart.map((item, index) => (
          <div
            key={index}
            className={`group w-full grid grid-cols-[100px_1fr_2fr] items-center gap-8 p-5 rounded-2xl border-2 ${item.border} ${item.bg} shadow-sm transition-all duration-500 transform ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-24'} hover:translate-x-4 hover:shadow-xl cursor-default`}
            style={{ transitionDelay: `${400 + (index * 150)}ms` }}
          >
            <div className={`flex items-center justify-start p-4 bg-white rounded-full shadow-sm ${item.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 w-fit`}>
              <item.icon className="w-10 h-10" strokeWidth={2.5} />
            </div>
            <h3 className={`text-6xl font-black ${item.color} leading-none transition-transform duration-300 group-hover:scale-110 text-center`}>{item.letter}</h3>
            <span className="text-3xl font-bold text-slate-800 text-right">{item.word}</span>
          </div>
        ))}
      </div>

      {/* Footer - Warning */}
      <div className={`flex-none mt-2 p-5 bg-red-50 rounded-xl border-l-8 border-red-500 flex items-center justify-center gap-5 transition-all duration-1000 delay-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} relative z-10 shadow-sm mx-10 hover:scale-[1.02]`}>
        <AlertTriangle className="w-10 h-10 text-red-500 flex-shrink-0 animate-bounce" strokeWidth={2} />
        <p className="text-3xl font-bold text-red-900 text-center leading-tight">
          Without explicit objectives, meaningful evaluation is impossible.
        </p>
      </div>
    </div>
  );
};

export default DefineObjectives;