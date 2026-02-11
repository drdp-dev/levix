import React, { useState } from 'react';
import { SlideProps } from '../../types';
import { BrainCircuit, Wallet, Scale, Gavel, GitFork, CheckCircle2, XCircle, ArrowRight, X } from 'lucide-react';

const DiscussionReflection: React.FC<SlideProps> = ({ isActive }) => {
  const [activeModal, setActiveModal] = useState<number | null>(null);
  const [selectedOptions, setSelectedOptions] = useState<Record<number, string>>({});
  const [shakeId, setShakeId] = useState<string | null>(null);

  const quizData = [
    {
      id: 1,
      icon: GitFork,
      theme: 'blue',
      title: "Prioritization",
      question: "With a tiny budget (₹50k), which evaluation gives the best ROI?",
      options: [
        { id: 'a', text: "Multi-district Impact Survey", isCorrect: false },
        { id: 'b', text: "Process Evaluation (Monitoring)", isCorrect: true },
        { id: 'c', text: "Randomized Control Trial", isCorrect: false },
        { id: 'd', text: "Cost-Utility Analysis", isCorrect: false },
      ],
      explanation: "Impact surveys and RCTs require large samples and huge budgets. Process evaluation uses existing records (low cost) to provide immediate, actionable feedback on implementation quality."
    },
    {
      id: 2,
      icon: Gavel,
      theme: 'forest',
      title: "Justification",
      question: "Why prefer Process over Impact in short-term projects?",
      options: [
        { id: 'a', text: "It proves the disease was cured.", isCorrect: false },
        { id: 'b', text: "It requires complex software.", isCorrect: false },
        { id: 'c', text: "It explains 'why' it worked/failed.", isCorrect: true },
        { id: 'd', text: "It takes 5 years to show results.", isCorrect: false },
      ],
      explanation: "Impact tells you *if* it worked. Process tells you *why* (fidelity, reach, quality). In short projects, measuring long-term health impact is often biologically impossible, making process data more valid."
    },
    {
      id: 3,
      icon: Scale,
      theme: 'clay',
      title: "Trade-offs",
      question: "Which scientific compromise is acceptable for feasibility?",
      options: [
        { id: 'a', text: "Skipping baseline data.", isCorrect: false },
        { id: 'b', text: "Using Before-After (No Control).", isCorrect: true },
        { id: 'c', text: "Reducing sample size to n=5.", isCorrect: false },
        { id: 'd', text: "Fabricating missing data.", isCorrect: false },
      ],
      explanation: "While a Control group is the gold standard, it often doubles the cost. A 'Before-After' design is a widely accepted quasi-experimental compromise when resources are tight. Skipping baseline makes measurement impossible."
    }
  ];

  const handleOptionClick = (qIndex: number, optIndex: number, isCorrect: boolean) => {
    const qId = quizData[qIndex].id;
    const optId = quizData[qIndex].options[optIndex].id;
    
    setSelectedOptions(prev => ({ ...prev, [qId]: optId }));

    if (isCorrect) {
      setTimeout(() => setActiveModal(qIndex), 600);
    } else {
      setShakeId(`${qId}-${optId}`);
      setTimeout(() => setShakeId(null), 500);
    }
  };

  const getThemeStyles = (theme: string) => {
    switch(theme) {
        case 'blue': return { border: 'border-blue-200', bg: 'bg-blue-50', text: 'text-blue-900', icon: 'text-blue-700', iconBg: 'bg-blue-100', hover: 'hover:border-blue-400', selectedBg: 'bg-blue-100', selectedBorder: 'border-blue-400' };
        case 'forest': return { border: 'border-green-300', bg: 'bg-green-100', text: 'text-green-950', icon: 'text-green-800', iconBg: 'bg-green-200', hover: 'hover:border-green-500', selectedBg: 'bg-green-200', selectedBorder: 'border-green-500' };
        case 'clay': return { border: 'border-orange-300', bg: 'bg-orange-100', text: 'text-orange-950', icon: 'text-orange-800', iconBg: 'bg-orange-200', hover: 'hover:border-orange-500', selectedBg: 'bg-orange-200', selectedBorder: 'border-orange-500' };
        default: return { border: 'border-gray-200', bg: 'bg-gray-50', text: 'text-gray-900', icon: 'text-gray-700', iconBg: 'bg-gray-100', hover: 'hover:border-gray-400', selectedBg: 'bg-gray-100', selectedBorder: 'border-gray-400' };
    }
  };

  return (
    <div className={`w-full h-full flex flex-col p-8 relative bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-2/3 h-2/3 bg-lime-100 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-yellow-100 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-60 pointer-events-none"></div>

      {/* Header */}
      <div className="flex-none mb-4 text-center">
        <div className={`inline-flex items-center gap-3 px-8 py-3 bg-lime-200 rounded-full mb-3 text-lime-950 font-black uppercase tracking-widest text-lg transition-all duration-700 transform ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} shadow-sm`}>
             <BrainCircuit className="w-6 h-6" strokeWidth={3} /> Reflection Activity
        </div>
        <h2 className={`text-5xl font-black text-lime-950 transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          Critical Thinking: Resource Constraints
        </h2>
      </div>

      {/* Constraint Context */}
      <div className={`flex-none mb-8 mx-auto max-w-5xl bg-amber-50 border-l-[12px] border-amber-400 rounded-r-3xl p-6 flex items-center gap-8 shadow-md transition-all duration-1000 delay-200 transform ${isActive ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
        <div className="p-4 bg-white rounded-full text-amber-600 shadow-md flex-shrink-0 border-4 border-amber-100">
            <Wallet className="w-10 h-10" strokeWidth={2.5} />
        </div>
        <div>
            <h3 className="text-lg font-black text-amber-800 uppercase tracking-widest mb-1">The Scenario</h3>
            <p className="text-2xl text-lime-950 font-bold leading-tight">
                You have <span className="underline decoration-amber-500 decoration-wavy decoration-4 underline-offset-4 text-amber-900">limited resources</span>. You must make a hard choice.
            </p>
        </div>
      </div>

      {/* Questions Grid */}
      <div className="flex-1 grid grid-cols-3 gap-8 px-4 pb-4 min-h-0">
        {quizData.map((q, qIndex) => {
           const styles = getThemeStyles(q.theme);
           return (
            <div 
                key={q.id} 
                className={`flex flex-col bg-white border-[3px] ${styles.border} rounded-[2rem] p-6 shadow-md hover:shadow-xl transition-all duration-700 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} h-full group hover:-translate-y-2`}
                style={{ transitionDelay: `${400 + (qIndex * 200)}ms` }}
            >
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-6 pb-4 border-b-2 border-gray-100">
                    <div className={`p-4 ${styles.iconBg} rounded-2xl ${styles.icon} shadow-inner`}>
                        <q.icon className="w-8 h-8" strokeWidth={3} />
                    </div>
                    <h4 className={`text-xl font-black uppercase tracking-widest ${styles.text}`}>{q.title}</h4>
                </div>
                
                {/* Question */}
                <p className="text-2xl font-black text-lime-950 leading-tight mb-8 min-h-[4.5rem]">
                    {q.question}
                </p>

                {/* Options */}
                <div className="flex-1 flex flex-col gap-3 justify-end">
                    {q.options.map((opt, optIndex) => {
                        const isSelected = selectedOptions[q.id] === opt.id;
                        const isShaking = shakeId === `${q.id}-${opt.id}`;
                        
                        let btnClass = `bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:bg-gray-50 shadow-sm`;
                        
                        if (isSelected) {
                            if (opt.isCorrect) btnClass = "bg-green-100 text-green-900 border-green-500 ring-4 ring-green-200 shadow-md";
                            else btnClass = "bg-red-100 text-red-900 border-red-500 ring-4 ring-red-200 shadow-md";
                        } else if (selectedOptions[q.id]) {
                            // Dim other options if one is selected
                            btnClass = "bg-gray-50 text-gray-400 border-gray-100 opacity-50";
                        }

                        return (
                            <button
                                key={opt.id}
                                onClick={() => handleOptionClick(qIndex, optIndex, opt.isCorrect)}
                                className={`w-full text-left px-5 py-4 rounded-xl border-[3px] text-lg font-bold transition-all duration-200 flex items-center justify-between group/btn ${btnClass} ${isShaking ? 'animate-[shake_0.5s_ease-in-out]' : ''}`}
                                disabled={!!selectedOptions[q.id]}
                            >
                                <span className="leading-tight flex-1 mr-2">{opt.text}</span>
                                {isSelected && opt.isCorrect && <CheckCircle2 className="w-8 h-8 text-green-600 flex-shrink-0" strokeWidth={3} />}
                                {isSelected && !opt.isCorrect && <XCircle className="w-8 h-8 text-red-600 flex-shrink-0" strokeWidth={3} />}
                                {!isSelected && !selectedOptions[q.id] && <div className="w-4 h-4 rounded-full border-2 border-gray-300 group-hover/btn:border-gray-500"></div>}
                            </button>
                        );
                    })}
                </div>
            </div>
           );
        })}
      </div>

      {/* Answer Modal */}
      {activeModal !== null && (
        <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-md p-10 animate-in fade-in duration-300" onClick={() => setActiveModal(null)}>
            <div 
                className="bg-white w-full max-w-5xl rounded-[3rem] shadow-2xl p-10 relative animate-in zoom-in-95 duration-300 flex flex-col gap-8 border-[6px] border-white/50"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={() => setActiveModal(null)}
                    className="absolute top-8 right-8 p-3 bg-gray-100 rounded-full hover:bg-red-100 hover:text-red-600 transition-all z-10"
                >
                    <X className="w-8 h-8" strokeWidth={3} />
                </button>

                <div className="flex items-center gap-8 border-b-2 border-gray-100 pb-8">
                     <div className={`p-8 rounded-[2rem] ${getThemeStyles(quizData[activeModal].theme).bg} ${getThemeStyles(quizData[activeModal].theme).text}`}>
                        {React.createElement(quizData[activeModal].icon, { className: "w-20 h-20", strokeWidth: 1.5 })}
                     </div>
                     <div>
                        <h3 className={`text-2xl font-black uppercase tracking-widest mb-2 ${getThemeStyles(quizData[activeModal].theme).text}`}>Correct Answer</h3>
                        <p className="text-4xl font-black text-lime-950 leading-tight">
                            {quizData[activeModal].options.find(o => o.isCorrect)?.text}
                        </p>
                     </div>
                </div>

                <div className="bg-green-50 rounded-[2rem] p-10 border-l-[12px] border-green-500 shadow-inner">
                    <h4 className="flex items-center gap-4 text-xl font-black text-green-800 uppercase tracking-widest mb-6">
                        <CheckCircle2 className="w-8 h-8" strokeWidth={3} /> Why is this correct?
                    </h4>
                    <p className="text-3xl font-medium text-lime-950 leading-relaxed">
                        {quizData[activeModal].explanation}
                    </p>
                </div>

                <div className="text-right mt-2">
                    <button 
                        onClick={() => setActiveModal(null)}
                        className="px-10 py-4 bg-lime-950 text-white text-xl font-bold rounded-2xl hover:bg-lime-900 transition-all hover:scale-105 inline-flex items-center gap-3 shadow-xl"
                    >
                        Continue <ArrowRight className="w-6 h-6" strokeWidth={3} />
                    </button>
                </div>
            </div>
        </div>
      )}

      {/* Shake Animation Style */}
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-8px); }
          75% { transform: translateX(8px); }
        }
      `}</style>

    </div>
  );
};

export default DiscussionReflection;