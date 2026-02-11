import React from 'react';
import { SlideProps } from '../../types';
import { TrendingUp, Users, Coins, Leaf, AlertTriangle, FileSearch } from 'lucide-react';

const AnalysisInterpretation: React.FC<SlideProps> = ({ isActive }) => {
  const factors = [
    { label: "Magnitude of change", icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200", delay: 400 },
    { label: "Practical significance", icon: Users, color: "text-amber-700", bg: "bg-amber-100", border: "border-amber-300", delay: 550 },
    { label: "Cost involved", icon: Coins, color: "text-orange-700", bg: "bg-orange-100", border: "border-orange-300", delay: 700 },
    { label: "Sustainability", icon: Leaf, color: "text-green-700", bg: "bg-green-100", border: "border-green-300", delay: 850 },
  ];

  return (
    <div className={`w-full h-full flex flex-col p-10 relative bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-yellow-100 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none"></div>

      {/* Header */}
      <div className="flex-none mb-8 text-center">
        <h2 className={`text-5xl font-bold text-green-950 mb-4 transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          Step 6: Analysis and Interpretation
        </h2>
        <div className={`h-1.5 w-32 bg-green-300 mx-auto rounded-full transition-all duration-1000 delay-200 transform ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
      </div>

      {/* Key Insight - Warning Box */}
      <div className={`flex-none mb-8 mx-auto max-w-5xl bg-red-50 border-l-[10px] border-red-400 rounded-r-2xl p-6 shadow-sm flex items-center gap-6 transition-all duration-1000 delay-300 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
         <div className="p-4 bg-white rounded-full shadow-sm text-red-500">
            <AlertTriangle className="w-10 h-10" />
         </div>
         <div>
            <h3 className="text-xl font-bold text-red-800 uppercase tracking-widest mb-1">Crucial Distinction</h3>
            <p className="text-3xl font-medium text-green-950">
                "Statistical significance <span className="text-red-600 font-bold px-2 bg-red-100 rounded">does not equal</span> program relevance."
            </p>
         </div>
      </div>

      {/* Factors Grid */}
      <div className="flex-1 grid grid-cols-2 gap-6 px-12">
        {factors.map((factor, idx) => (
            <div 
                key={idx}
                className={`flex items-center p-6 bg-white border-2 ${factor.border} rounded-2xl shadow-sm transition-all duration-700 transform hover:scale-105 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{ transitionDelay: `${factor.delay}ms` }}
            >
                <div className={`p-4 ${factor.bg} rounded-full mr-6 ${factor.color}`}>
                    <factor.icon className="w-10 h-10" strokeWidth={2} />
                </div>
                <span className="text-2xl font-bold text-green-900">{factor.label}</span>
            </div>
        ))}
      </div>

      {/* Footer Context */}
      <div className={`flex-none mt-8 flex items-center justify-center gap-3 text-green-700 transition-all duration-1000 delay-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <FileSearch className="w-8 h-8 text-green-950" />
        <p className="text-2xl font-medium tracking-wide">
          Always interpret results in the <span className="font-bold text-green-900 border-b-2 border-green-400">program context</span>.
        </p>
      </div>

    </div>
  );
};

export default AnalysisInterpretation;