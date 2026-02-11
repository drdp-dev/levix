import React, { useState } from 'react';
import { SlideProps } from '../../types';
import { FileText, Mic, Users, Eye, FolderSearch, BrainCircuit, Check, X, ArrowRight, MousePointerClick } from 'lucide-react';

interface ToolData {
  id: string;
  title: string;
  icon: React.ElementType;
  theme: 'blue' | 'copper' | 'forest' | 'olive' | 'clay';
  points: string[];
}

const DataCollectionTools: React.FC<SlideProps> = ({ isActive }) => {
  const [selectedTool, setSelectedTool] = useState<ToolData | null>(null);

  const tools: ToolData[] = [
    {
      id: 'quant',
      title: "Structured Questionnaires",
      icon: FileText,
      theme: 'blue',
      points: [
        "Standardized data allows for easy comparison.",
        "High reliability quantitative analysis.",
        "Low cost per participant to administer.",
        "Limited by literacy levels of respondents.",
        "Risk of social desirability bias (self-reporting)."
      ]
    },
    {
      id: 'qual-idi',
      title: "In-Depth Interviews (IDI)",
      icon: Mic,
      theme: 'copper',
      points: [
        "Explores the 'why' and 'how' behind behaviors.",
        "Flexible probing allows deeper understanding.",
        "Ideal for sensitive or complex topics.",
        "Time-consuming to conduct and transcribe.",
        "Susceptible to interviewer bias."
      ]
    },
    {
      id: 'qual-fgd',
      title: "Focus Group Discussions",
      icon: Users,
      theme: 'forest',
      points: [
        "Captures group norms and social dynamics.",
        "Cost-effective qualitative method.",
        "Stimulates new ideas through group interaction.",
        "Risk of dominant voices overpowering others.",
        "Not suitable for highly personal topics."
      ]
    },
    {
      id: 'obs',
      title: "Observation Checklists",
      icon: Eye,
      theme: 'olive',
      points: [
        "Objectively verifies behavior (vs. what they say).",
        "Bypasses recall error and self-report bias.",
        "Excellent for skill assessment (e.g., handwashing).",
        "Risk of 'Hawthorne Effect' (acting differently when watched).",
        "Captures physical context and environment."
      ]
    },
    {
      id: 'record',
      title: "Record Review",
      icon: FolderSearch,
      theme: 'clay',
      points: [
        "Utilizes existing secondary data (Low cost).",
        "No additional burden on participants.",
        "Allows for historical trend analysis.",
        "Dependent on the quality/accuracy of records.",
        "Missing data is a frequent limitation."
      ]
    }
  ];

  // Helper for theme styles
  const getThemeStyles = (theme: string) => {
    switch(theme) {
      case 'blue': return { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', icon: 'text-blue-600', iconBg: 'bg-blue-100', hover: 'hover:border-blue-400' };
      case 'copper': return { bg: 'bg-amber-100', border: 'border-amber-300', text: 'text-amber-900', icon: 'text-amber-700', iconBg: 'bg-amber-200', hover: 'hover:border-amber-500' };
      case 'forest': return { bg: 'bg-teal-100', border: 'border-teal-300', text: 'text-teal-900', icon: 'text-teal-700', iconBg: 'bg-teal-200', hover: 'hover:border-teal-500' };
      case 'olive': return { bg: 'bg-lime-100', border: 'border-lime-300', text: 'text-lime-900', icon: 'text-lime-700', iconBg: 'bg-lime-200', hover: 'hover:border-lime-500' };
      case 'clay': return { bg: 'bg-orange-100', border: 'border-orange-300', text: 'text-orange-900', icon: 'text-orange-700', iconBg: 'bg-orange-200', hover: 'hover:border-orange-500' };
      default: return { bg: 'bg-gray-50', border: 'border-gray-200', text: 'text-gray-800', icon: 'text-gray-600', iconBg: 'bg-gray-100', hover: 'hover:border-gray-400' };
    }
  };

  return (
    <div className={`w-full h-full flex flex-col p-8 relative bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Header */}
      <div className={`flex-none mb-6 text-center transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <h2 className="text-5xl font-bold text-slate-900 mb-4">
          Step 5: Data Collection Tools
        </h2>
        
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-emerald-100 rounded-full border border-emerald-200 text-emerald-700 animate-pulse">
            <MousePointerClick className="w-5 h-5" />
            <span className="font-bold uppercase tracking-wider text-sm">Click cards for details</span>
        </div>
      </div>

      {/* Main Grid Content */}
      <div className="flex-1 px-4 pb-4">
        <div className="h-full grid grid-cols-6 grid-rows-2 gap-6">
            
            {/* Top Row: 3 Items */}
            {tools.slice(0, 3).map((tool, idx) => {
               const styles = getThemeStyles(tool.theme);
               return (
                <div 
                    key={tool.id}
                    onClick={() => setSelectedTool(tool)}
                    className={`col-span-2 relative group cursor-pointer rounded-3xl border-2 ${styles.bg} ${styles.border} ${styles.hover} transition-all duration-500 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} hover:-translate-y-2 hover:shadow-xl flex flex-col items-center justify-center p-6`}
                    style={{ transitionDelay: `${300 + (idx * 150)}ms` }}
                >
                    <div className={`p-5 rounded-full mb-4 shadow-sm ${styles.iconBg} ${styles.icon} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                        <tool.icon className="w-12 h-12" strokeWidth={1.5} />
                    </div>
                    <h3 className={`text-2xl font-bold text-center ${styles.text}`}>{tool.title}</h3>
                    <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-teal-500">
                        View Details <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
               );
            })}

            {/* Bottom Row: 2 Items centered */}
            <div className="col-span-6 grid grid-cols-2 gap-6 px-32">
                 {tools.slice(3, 5).map((tool, idx) => {
                   const styles = getThemeStyles(tool.theme);
                   return (
                    <div 
                        key={tool.id}
                        onClick={() => setSelectedTool(tool)}
                        className={`relative group cursor-pointer rounded-3xl border-2 ${styles.bg} ${styles.border} ${styles.hover} transition-all duration-500 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} hover:-translate-y-2 hover:shadow-xl flex flex-col items-center justify-center p-6`}
                        style={{ transitionDelay: `${750 + (idx * 150)}ms` }}
                    >
                        <div className={`p-5 rounded-full mb-4 shadow-sm ${styles.iconBg} ${styles.icon} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                            <tool.icon className="w-12 h-12" strokeWidth={1.5} />
                        </div>
                        <h3 className={`text-2xl font-bold text-center ${styles.text}`}>{tool.title}</h3>
                        <div className="absolute bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-teal-500">
                            View Details <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>
                   );
                })}
            </div>
        </div>
      </div>

      {/* Footer Insight */}
      <div className={`flex-none mx-auto max-w-4xl bg-white border border-emerald-300 rounded-full px-8 py-3 flex items-center gap-6 shadow-sm transition-all duration-1000 delay-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <BrainCircuit className="w-8 h-8 text-slate-900" />
        <p className="text-xl font-medium text-slate-700">
             Insight: "Behavior is often better <span className="font-bold text-emerald-700 underline decoration-emerald-400">observed</span> than self-reported."
        </p>
      </div>

      {/* MODAL OVERLAY */}
      {selectedTool && (
        <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-10 animate-in fade-in duration-300">
            <div 
                className="bg-white w-full max-w-5xl rounded-[3rem] shadow-2xl p-10 relative animate-in zoom-in-95 duration-300 flex gap-10 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedTool(null)}
                    className="absolute top-6 right-6 p-3 bg-gray-100 rounded-full hover:bg-gray-200 hover:rotate-90 transition-all duration-300 z-10"
                >
                    <X className="w-8 h-8 text-gray-600" />
                </button>

                {/* Left Side: Identity */}
                <div className={`w-1/3 flex flex-col items-center justify-center p-8 rounded-3xl ${getThemeStyles(selectedTool.theme).bg}`}>
                    <div className={`p-8 bg-white rounded-full shadow-md mb-6 ${getThemeStyles(selectedTool.theme).icon}`}>
                        <selectedTool.icon className="w-24 h-24" strokeWidth={1} />
                    </div>
                    <h3 className={`text-4xl font-bold text-center leading-tight ${getThemeStyles(selectedTool.theme).text}`}>
                        {selectedTool.title}
                    </h3>
                </div>

                {/* Right Side: 5 Points */}
                <div className="w-2/3 flex flex-col justify-center">
                    <h4 className="text-2xl font-bold text-gray-400 uppercase tracking-widest mb-6">Key Characteristics</h4>
                    <ul className="space-y-6">
                        {selectedTool.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div className={`mt-1 p-1 rounded-full ${getThemeStyles(selectedTool.theme).bg} ${getThemeStyles(selectedTool.theme).icon}`}>
                                    <Check className="w-5 h-5" strokeWidth={3} />
                                </div>
                                <span className="text-2xl font-medium text-slate-900 leading-snug">
                                    {point}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            {/* Click outside to close */}
            <div className="absolute inset-0 -z-10" onClick={() => setSelectedTool(null)}></div>
        </div>
      )}

    </div>
  );
};

export default DataCollectionTools;