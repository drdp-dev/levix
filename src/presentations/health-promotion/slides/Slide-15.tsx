import React from 'react';
import { SlideProps } from '@/src/types';
import { MessageCircleQuestion, Eye, ClipboardCheck, FlaskConical, X, Check, ShieldAlert } from 'lucide-react';

const ORSExample: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className={`w-full h-full flex flex-col p-10 relative bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-blue-50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 opacity-60 pointer-events-none"></div>

      {/* Header */}
       <div className="flex-none mb-10">
        <div className="flex items-center gap-4 mb-2">
            <div className="p-3 bg-blue-100 rounded-2xl">
                <FlaskConical className="w-10 h-10 text-blue-600" />
            </div>
            <div>
                <h2 className={`text-4xl font-bold text-green-950 transition-all duration-1000 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    Example: ORS Demonstration
                </h2>
                <h3 className={`text-2xl text-blue-600 font-medium transition-all duration-1000 delay-200 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    Evaluating Skill vs Knowledge
                </h3>
            </div>
        </div>
      </div>

      {/* Comparison Grid */}
      <div className="flex-1 grid grid-cols-2 gap-8 items-stretch px-4 relative z-10">

        {/* Incorrect / Weak Method */}
        <div className={`flex flex-col bg-red-50 border-2 border-red-100 rounded-3xl p-8 relative transition-all duration-700 delay-300 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="absolute -top-6 left-8 bg-red-100 text-red-600 px-6 py-2 rounded-full font-bold uppercase tracking-widest border border-red-200 shadow-sm flex items-center gap-2">
                <X className="w-5 h-5" /> Instead of asking
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center text-center mt-4">
                <div className="mb-6 p-6 bg-white rounded-full text-red-400 shadow-sm">
                    <MessageCircleQuestion className="w-16 h-16" strokeWidth={1.5} />
                </div>
                <p className="text-4xl text-red-900 font-serif italic leading-relaxed">
                    "Do you know how to prepare ORS?"
                </p>
                <p className="mt-4 text-xl text-red-700 font-medium">(Self-reported)</p>
            </div>
        </div>

        {/* Correct / Strong Method */}
        <div className={`flex flex-col bg-green-100 border-2 border-green-300 rounded-3xl p-8 relative transition-all duration-700 delay-500 transform ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
             <div className="absolute -top-6 left-8 bg-green-200 text-green-800 px-6 py-2 rounded-full font-bold uppercase tracking-widest border border-green-300 shadow-sm flex items-center gap-2">
                <Check className="w-5 h-5" /> Use Observation
            </div>

            <div className="flex-1 flex flex-col justify-center gap-6 mt-4">
                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-green-200 transition-transform duration-300 hover:scale-105">
                    <div className="p-3 bg-green-200 rounded-full text-green-700">
                        <ClipboardCheck className="w-8 h-8" />
                    </div>
                    <span className="text-2xl font-bold text-green-950">Direct observation checklist</span>
                </div>

                <div className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-green-200 transition-transform duration-300 hover:scale-105">
                    <div className="p-3 bg-green-200 rounded-full text-green-700">
                        <Eye className="w-8 h-8" />
                    </div>
                    <span className="text-2xl font-bold text-green-950">Participant prepares ORS in front of evaluator</span>
                </div>
            </div>
        </div>

      </div>

      {/* Footer Benefit */}
      <div className={`flex-none mt-10 bg-yellow-100 border-l-[10px] border-yellow-500 rounded-r-2xl p-6 flex items-center gap-6 shadow-sm transition-all duration-1000 delay-700 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
         <ShieldAlert className="w-12 h-12 text-yellow-800" strokeWidth={2} />
         <div>
            <h4 className="text-xl font-bold text-yellow-800 uppercase tracking-wide mb-1">Key Benefit</h4>
            <p className="text-3xl font-medium text-green-950">
                Observation reduces <span className="text-green-800 font-bold underline decoration-wavy decoration-green-500 underline-offset-4">social desirability bias</span>.
            </p>
         </div>
      </div>

    </div>
  );
}

export default ORSExample;