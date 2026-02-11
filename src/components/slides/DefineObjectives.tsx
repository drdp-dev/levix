import React from 'react';
import { SlideProps } from '../../types';
import { Target, Ruler, Mountain, Link2, Clock, AlertTriangle } from 'lucide-react';

const DefineObjectives: React.FC<SlideProps> = ({ isActive }) => {
  const smart = [
    { letter: 'S', word: 'Specific', icon: Target, color: 'text-amber-700', bg: 'bg-amber-100', border: 'border-amber-300' },
    { letter: 'M', word: 'Measurable', icon: Ruler, color: 'text-green-700', bg: 'bg-green-100', border: 'border-green-300' },
    { letter: 'A', word: 'Achievable', icon: Mountain, color: 'text-lime-700', bg: 'bg-lime-100', border: 'border-lime-300' },
    { letter: 'R', word: 'Relevant', icon: Link2, color: 'text-orange-700', bg: 'bg-orange-100', border: 'border-orange-300' },
    { letter: 'T', word: 'Time-bound', icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
  ];

  return (
    <div className={`w-full h-full flex flex-col p-10 relative bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Header */}
      <div className="flex-none mb-6 text-center">
        <h2 className={`text-5xl font-bold text-lime-950 mb-3 transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          Step 1: Define Clear & Measurable Objectives
        </h2>
        <p className={`text-3xl text-lime-700 font-medium transition-all duration-1000 delay-200 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          Evaluation begins <span className="text-amber-700 font-semibold">before</span> implementation.
        </p>
      </div>

      {/* Main Content - SMART Cards */}
      <div className="flex-1 flex items-stretch justify-center gap-4 px-4 pb-4">
        {smart.map((item, index) => (
          <div
            key={index}
            className={`group flex-1 flex flex-col items-center justify-center p-4 rounded-2xl border-2 ${item.border} ${item.bg} shadow-sm transition-all duration-500 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'} hover:-translate-y-4 hover:shadow-xl hover:flex-[1.2] cursor-default`}
            style={{ transitionDelay: `${400 + (index * 150)}ms` }}
          >
            <div className={`mb-6 p-4 bg-white rounded-full shadow-sm ${item.color} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
              <item.icon className="w-10 h-10" strokeWidth={2.5} />
            </div>
            <h3 className={`text-6xl font-black ${item.color} mb-2 leading-none transition-transform duration-300 group-hover:scale-110`}>{item.letter}</h3>
            <span className="text-2xl font-bold text-lime-900">{item.word}</span>
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