import React from 'react';
import { SlideProps } from '../../types';
import { ClipboardCheck, TrendingUp, Scale, ShieldCheck, Search, Zap } from 'lucide-react';

const WhyEvaluate: React.FC<SlideProps> = ({ isActive }) => {
  const pillars = [
    {
      label: "Process",
      question: "Did we implement as planned?",
      focus: "Fidelity & Quality",
      icon: ClipboardCheck,
      color: "text-blue-600",
      bg: "bg-blue-50",
      border: "border-blue-200",
      accent: "bg-blue-500",
      delay: 200
    },
    {
      label: "Outcome",
      question: "Did it produce measurable change?",
      focus: "Effectiveness",
      icon: TrendingUp,
      color: "text-green-700",
      bg: "bg-green-100",
      border: "border-green-300",
      accent: "bg-green-600",
      delay: 400
    },
    {
      label: "Impact",
      question: "Was it worth the resources?",
      focus: "Efficiency & Value",
      icon: Scale,
      color: "text-amber-700",
      bg: "bg-amber-100",
      border: "border-amber-300",
      accent: "bg-amber-600",
      delay: 600
    }
  ];

  return (
    <div className={`w-full h-full flex flex-col p-10 relative bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        {/* Background blobs */}
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-green-100 rounded-full blur-3xl opacity-60 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-2/3 h-2/3 bg-yellow-100 rounded-full blur-3xl opacity-60 translate-y-1/2 -translate-x-1/2"></div>

        {/* Header */}
        <div className="flex-none mb-10 text-center relative z-10">
            <h2 className={`text-6xl font-bold text-green-950 mb-2 transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                The Purpose of Evaluation
            </h2>
            <div className={`h-1.5 w-32 bg-green-300 mx-auto rounded-full mb-4 transition-all duration-1000 delay-200 transform ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
            <p className={`text-3xl text-green-700 font-medium transition-all duration-1000 delay-300 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                To answer three fundamental questions
            </p>
        </div>

        {/* 3 Columns */}
        <div className="flex-1 grid grid-cols-3 gap-8 px-4 mb-4 relative z-10">
            {pillars.map((item, index) => (
                <div
                    key={index}
                    className={`group relative flex flex-col items-center text-center p-6 rounded-3xl border-2 ${item.border} ${item.bg} shadow-sm transition-all duration-700 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'} hover:-translate-y-4 hover:shadow-xl hover:bg-white cursor-default`}
                    style={{ transitionDelay: `${item.delay}ms` }}
                >
                    {/* Top Accent Bar */}
                    <div className={`absolute top-0 inset-x-8 h-1 rounded-b-full ${item.accent} opacity-50`}></div>
                    
                    <div className={`mb-8 p-6 rounded-full bg-white shadow-md ${item.color} group-hover:scale-110 transition-transform duration-500 ring-4 ring-white`}>
                        <item.icon className="w-14 h-14" strokeWidth={1.5} />
                    </div>

                    <h3 className={`text-lg font-bold uppercase tracking-widest mb-4 ${item.color} opacity-80 bg-white px-5 py-2 rounded-full shadow-sm`}>
                        {item.label}
                    </h3>
                    
                    <p className="text-3xl font-bold text-green-950 leading-tight mb-6 flex-1 flex items-center">
                        "{item.question}"
                    </p>

                    <div className="w-full pt-6 border-t border-gray-200/50">
                        <span className="text-xl text-green-700 font-medium flex items-center justify-center gap-2">
                             <Search className="w-5 h-5 opacity-50" /> Checks <span className={`font-bold ${item.color.replace('600', '800')}`}>{item.focus}</span>
                        </span>
                    </div>
                </div>
            ))}
        </div>

        {/* Bottom Insight Banner */}
        <div className={`flex-none bg-green-950 rounded-3xl p-8 flex items-center justify-between shadow-xl transition-all duration-1000 delay-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:scale-[1.01]`}>
            <div className="flex items-center gap-8">
                 <div className="p-4 bg-green-900 rounded-2xl border border-green-800 shadow-inner">
                    <ShieldCheck className="w-12 h-12 text-yellow-500" />
                 </div>
                 <div>
                    <h4 className="text-lg font-bold text-green-500 uppercase tracking-widest mb-1">Critical Mindset Shift</h4>
                    <p className="text-4xl font-bold text-white leading-none">
                        Evaluation is <span className="text-yellow-500 underline decoration-wavy decoration-2 underline-offset-8">learning</span>, not fault-finding.
                    </p>
                 </div>
            </div>
            <div className="bg-white/10 p-3 rounded-full">
                <Zap className="w-8 h-8 text-yellow-300" fill="currentColor" />
            </div>
        </div>
    </div>
  );
};

export default WhyEvaluate;