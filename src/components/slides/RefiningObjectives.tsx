import React, { useState } from 'react';
import { SlideProps } from '../../types';
import { CloudFog, ArrowDown, CheckCircle2, Ruler, Database, Check, X, HelpCircle, AlertCircle, MousePointerClick } from 'lucide-react';

const RefiningObjectives: React.FC<SlideProps> = ({ isActive }) => {
  const [solved, setSolved] = useState<number[]>([]);
  const [wrongAttempts, setWrongAttempts] = useState<string[]>([]);

  const questions = [
    {
      id: 1,
      category: "Indicator Selection",
      icon: Ruler,
      query: "Which indicator directly measures this objective?",
      options: [
        { id: '1a', text: "Average Hemoglobin level of girls", correct: false },
        { id: '1b', text: "% of girls listing ≥3 symptoms", correct: true },
        { id: '1c', text: "Number of education sessions held", correct: false }
      ],
      explanation: "Correct! The objective specifies a change in **knowledge** (listing symptoms). Hemoglobin is an *Impact* indicator, and sessions are a *Process* indicator."
    },
    {
      id: 2,
      category: "Baseline Data",
      icon: Database,
      query: "What baseline data do you need to start?",
      options: [
        { id: '2a', text: "Current knowledge levels (% who know 3+)", correct: true },
        { id: '2b', text: "Total number of adolescent girls", correct: false },
        { id: '2c', text: "Number of pamphlets printed", correct: false }
      ],
      explanation: "Correct! To achieve the target **'from 30% to 70%'**, you must first validate the starting point (the 30%) through a baseline survey."
    }
  ];

  const handleSelect = (qId: number, optId: string, isCorrect: boolean) => {
    if (solved.includes(qId)) return;
    if (isCorrect) {
        setSolved(prev => [...prev, qId]);
    } else {
        if(!wrongAttempts.includes(optId)) {
            setWrongAttempts(prev => [...prev, optId]);
        }
    }
  };

  return (
    <div className={`w-full h-full flex flex-col px-10 py-8 relative overflow-hidden bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Header */}
      <div className="flex-none text-center mb-6">
        <h2 className={`text-5xl font-black text-olive-900 mb-2 transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          Activity: Refining Objectives
        </h2>
      </div>

      {/* Main Transformation Flow */}
      <div className="flex-none flex flex-col items-center justify-start gap-4 mb-6">
        
        {/* Vague Objective Card */}
        <div 
          className={`w-full max-w-5xl bg-gray-50 border-4 border-dashed border-gray-300 rounded-3xl p-6 flex items-center gap-8 transition-all duration-700 delay-200 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="p-4 bg-gray-200 rounded-full flex-shrink-0">
            <CloudFog className="w-10 h-10 text-gray-500" strokeWidth={2} />
          </div>
          <div>
            <h3 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-1">Vague Objective</h3>
            <p className="text-3xl text-gray-600 font-bold italic">
              "Improve awareness about anaemia among adolescent girls."
            </p>
          </div>
        </div>

        {/* Transition Arrow */}
        <div className={`transition-all duration-700 delay-300 transform ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
           <ArrowDown className="w-10 h-10 text-copper-500 animate-bounce" strokeWidth={4} />
        </div>

        {/* Evaluable Objective Card */}
        <div 
          className={`w-full max-w-5xl bg-forest-50 border-l-[16px] border-forest-500 rounded-r-[3rem] p-8 shadow-xl flex items-center gap-8 transition-all duration-700 delay-500 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
        >
          <div className="p-5 bg-white rounded-full flex-shrink-0 shadow-sm border-2 border-forest-100">
            <CheckCircle2 className="w-12 h-12 text-forest-600" strokeWidth={3} />
          </div>
          <div>
            <h3 className="text-lg font-black text-forest-700 uppercase tracking-widest mb-2">Evaluable Objective (SMART)</h3>
            <p className="text-3xl text-olive-900 font-bold leading-snug">
              "Increase proportion of girls who can <span className="text-copper-800 bg-copper-100 px-2 rounded-lg border border-copper-200 shadow-sm">list ≥3 symptoms</span> of anaemia from <span className="text-blue-800 bg-blue-100 px-2 rounded-lg border border-blue-200 shadow-sm">30% to 70%</span> within <span className="text-olive-900 bg-olive-200 px-2 rounded-lg border border-olive-300 shadow-sm">6 months</span>."
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Discussion Footer */}
      <div className={`flex-1 grid grid-cols-2 gap-8 w-full max-w-6xl mx-auto transition-all duration-1000 delay-700 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
         {questions.map((q) => {
             const isSolved = solved.includes(q.id);

             return (
                 <div key={q.id} className="bg-white border-[3px] border-olive-100 rounded-[2.5rem] p-6 shadow-md flex flex-col h-full relative overflow-hidden group hover:border-olive-300 transition-colors">
                     {/* Header */}
                     <div className="flex items-center gap-4 mb-4">
                         <div className="p-3 bg-olive-50 rounded-2xl text-olive-700 group-hover:bg-olive-100 transition-colors">
                             <q.icon className="w-7 h-7" strokeWidth={2.5} />
                         </div>
                         <h4 className="text-xl font-black text-olive-800 uppercase tracking-wide">{q.category}</h4>
                     </div>
                     
                     {/* Question */}
                     <p className="text-2xl font-bold text-olive-900 mb-6 leading-tight min-h-[4rem]">{q.query}</p>

                     {/* Options */}
                     <div className="flex flex-col gap-3 relative z-10">
                         {q.options.map((opt) => {
                             const isWrong = wrongAttempts.includes(opt.id);
                             let btnClass = "bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100 hover:border-gray-300 shadow-sm";
                             
                             if (isSolved) {
                                if (opt.correct) btnClass = "bg-green-100 border-green-500 text-green-900 ring-4 ring-green-200 font-bold shadow-md";
                                else btnClass = "opacity-30 grayscale border-transparent";
                             } else if (isWrong) {
                                btnClass = "bg-red-50 border-red-300 text-red-800 opacity-70 cursor-not-allowed";
                             }

                             return (
                                 <button
                                     key={opt.id}
                                     onClick={() => handleSelect(q.id, opt.id, opt.correct)}
                                     disabled={isSolved || isWrong}
                                     className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group/btn ${btnClass}`}
                                 >
                                     <span className="text-lg font-bold leading-tight">{opt.text}</span>
                                     {isSolved && opt.correct && <Check className="w-8 h-8 text-green-700" strokeWidth={3} />}
                                     {isWrong && <X className="w-8 h-8 text-red-500" strokeWidth={3} />}
                                     {!isSolved && !isWrong && <div className="w-5 h-5 rounded-full border-2 border-gray-300 group-hover/btn:border-gray-500"></div>}
                                 </button>
                             );
                         })}
                     </div>

                     {/* Explanation Overlay */}
                     <div className={`absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center p-8 text-center transition-all duration-500 ${isSolved ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full pointer-events-none'}`}>
                         <div className="p-4 bg-green-100 rounded-full text-green-600 mb-4 animate-bounce">
                             <Check className="w-10 h-10" strokeWidth={4} />
                         </div>
                         <h5 className="text-2xl font-black text-green-800 uppercase tracking-widest mb-3">Excellent!</h5>
                         <p className="text-xl text-olive-900 font-bold leading-relaxed">
                             {q.explanation.split('**').map((part, i) => 
                                i % 2 === 1 ? <span key={i} className="text-green-700 underline decoration-green-300">{part}</span> : part
                             )}
                         </p>
                     </div>
                 </div>
             );
         })}
      </div>
      
    </div>
  );
};

export default RefiningObjectives;