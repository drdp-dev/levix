import React, { useState } from 'react';
import { SlideProps } from '../../types';
import { Database, Target, Megaphone, EyeOff, FileText, AlertTriangle, Scale, X, ArrowRight, MousePointerClick, AlertOctagon } from 'lucide-react';

interface PitfallData {
  id: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  theme: 'red' | 'amber' | 'orange' | 'clay' | 'gray';
  points: string[];
}

const CommonPitfalls: React.FC<SlideProps> = ({ isActive }) => {
  const [selectedPitfall, setSelectedPitfall] = useState<PitfallData | null>(null);

  const pitfalls: PitfallData[] = [
    { 
      id: 'baseline',
      title: "No Baseline Data", 
      desc: "Cannot measure change without a starting point.",
      icon: Database, 
      theme: "red",
      points: [
        "Impossible to calculate the 'delta' or true magnitude of change.",
        "Forces reliance on participant 'recall', which is notoriously unreliable.",
        "Cannot distinguish program effect from pre-existing positive trends.",
        "Weakens the study design to the lowest level of evidence.",
        "Stakeholders often dismiss results as merely 'anecdotal'."
      ]
    },
    { 
      id: 'objectives',
      title: "Vague Objectives", 
      desc: "Unclear goals lead to unmeasurable results.",
      icon: Target, 
      theme: "amber",
      points: [
        "Terms like 'Empower' or 'Sensitize' are abstract and hard to quantify.",
        "Leads to 'indicator mismatch' (measuring activities instead of outcomes).",
        "Prevents accurate sample size calculation during planning.",
        "Field staff lack clarity on what 'success' actually looks like.",
        "Evaluation becomes a subjective interpretation rather than evidence-based."
      ]
    },
    { 
      id: 'claims',
      title: "Over-claiming Impact", 
      desc: "Attributing all change to the program alone.",
      icon: Megaphone, 
      theme: "orange",
      points: [
        "Confuses basic 'Correlation' with 'Causation'.",
        "Ignores 'Secular Trends' (natural improvement over time without intervention).",
        "Neglects concurrent programs or government schemes (confounding factors).",
        "Damages long-term credibility when external factors are revealed.",
        "Should claim 'contribution' to the result rather than sole 'attribution'."
      ]
    },
    { 
      id: 'context',
      title: "Ignoring Context", 
      desc: "Overlooking external influences or barriers.",
      icon: EyeOff, 
      theme: "clay",
      points: [
        "Misses infrastructure gaps (e.g., knowledge exists, but no access).",
        "Fails to account for deep-seated cultural resistance or social norms.",
        "External shocks (e.g., pandemic, economic shift) skew data interpretation.",
        "One-size-fits-all tools fail in diverse or marginalized populations.",
        "Unintended negative consequences (backlash) go unnoticed."
      ]
    },
    { 
      id: 'reporting',
      title: "Evaluation only for Reporting", 
      desc: "Treating it as a compliance task rather than learning.",
      icon: FileText, 
      theme: "gray",
      points: [
        "Data is collected and filed but never analyzed for improvement.",
        "Field staff view collection as a burden, leading to poor data quality.",
        "Missed opportunities for mid-course corrections during implementation.",
        "Findings are buried in donor reports, not shared with the community.",
        "Wastes scarce resources (time & money) without adding programmatic value."
      ]
    },
  ];

  const getThemeStyles = (theme: string) => {
    switch(theme) {
      case 'red': return { bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', icon: 'text-red-600', iconBg: 'bg-red-100', hover: 'hover:border-red-400', bullet: 'bg-red-500' };
      case 'amber': return { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-800', icon: 'text-amber-600', iconBg: 'bg-amber-100', hover: 'hover:border-amber-400', bullet: 'bg-amber-500' };
      case 'orange': return { bg: 'bg-orange-50', border: 'border-orange-200', text: 'text-orange-800', icon: 'text-orange-600', iconBg: 'bg-orange-100', hover: 'hover:border-orange-400', bullet: 'bg-orange-500' };
      case 'clay': return { bg: 'bg-clay-50', border: 'border-clay-200', text: 'text-clay-800', icon: 'text-clay-600', iconBg: 'bg-clay-100', hover: 'hover:border-clay-400', bullet: 'bg-clay-500' };
      default: return { bg: 'bg-gray-50', border: 'border-gray-300', text: 'text-gray-800', icon: 'text-gray-600', iconBg: 'bg-gray-200', hover: 'hover:border-gray-500', bullet: 'bg-gray-600' };
    }
  };

  return (
    <div className={`w-full h-full flex flex-col p-10 relative overflow-hidden bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-40 pointer-events-none animate-pulse"></div>

      {/* Header */}
      <div className={`flex-none mb-6 flex items-center justify-between transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
        <div className="flex items-center gap-6">
            <div className={`p-4 bg-red-100 rounded-2xl animate-bounce`}>
                <AlertTriangle className="w-12 h-12 text-red-600" strokeWidth={2.5} />
            </div>
            <div>
                <h2 className="text-4xl font-bold text-olive-900">
                Common Pitfalls
                </h2>
                <h3 className="text-2xl text-red-500 font-medium">
                in Health Education Evaluation
                </h3>
            </div>
        </div>
        <div className="inline-flex items-center gap-2 px-6 py-2 bg-red-50 rounded-full border border-red-100 text-red-600 animate-pulse">
            <MousePointerClick className="w-5 h-5" />
            <span className="font-bold uppercase tracking-wider text-sm">Click for deep dive</span>
        </div>
      </div>

      {/* Pitfalls List */}
      <div className="flex-1 flex flex-col justify-center gap-4 px-4 relative z-10">
        {pitfalls.map((item, index) => {
           const styles = getThemeStyles(item.theme);
           return (
              <div 
                key={index}
                onClick={() => setSelectedPitfall(item)}
                className={`group cursor-pointer flex items-center p-4 bg-white border-l-[12px] ${styles.border} rounded-r-2xl shadow-sm transition-all duration-500 transform origin-left ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'} hover:scale-[1.02] hover:shadow-xl hover:bg-gray-50`}
                style={{ transitionDelay: `${index * 150 + 300}ms` }}
              >
                <div className={`p-3 rounded-full mr-6 ${styles.iconBg} ${styles.icon} flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <item.icon className="w-8 h-8" strokeWidth={2.5} />
                </div>
                
                <div className="flex-1">
                    <h3 className="text-2xl font-bold text-olive-900 leading-tight group-hover:text-black transition-colors">
                    {item.title}
                    </h3>
                    <p className="text-lg text-olive-600 font-medium mt-1 group-hover:text-olive-800 transition-colors">
                        {item.desc}
                    </p>
                </div>

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-4">
                     <ArrowRight className={`w-8 h-8 ${styles.icon}`} />
                </div>
              </div>
           );
        })}
      </div>

      {/* Footer Insight */}
      <div className={`flex-none mt-6 bg-olive-900 rounded-2xl p-6 flex items-center justify-center gap-6 shadow-xl transition-all duration-1000 delay-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:scale-[1.01]`}>
        <div className="p-3 bg-olive-800 rounded-full border border-olive-700">
            <Scale className="w-10 h-10 text-cornsilk-500" />
        </div>
        <p className="text-3xl font-bold text-cornsilk-50 tracking-wide">
            Methodological rigor must match <span className="text-cornsilk-500 underline decoration-wavy underline-offset-4">program ambition</span>.
        </p>
      </div>

      {/* MODAL OVERLAY */}
      {selectedPitfall && (
        <div className="absolute inset-0 z-50 flex items-center justify-center backdrop-blur-sm p-10 animate-in fade-in duration-300">
            <div 
                className="bg-white w-full max-w-5xl rounded-[3rem] shadow-2xl p-10 relative animate-in zoom-in-95 duration-300 flex gap-10 overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Button */}
                <button 
                    onClick={() => setSelectedPitfall(null)}
                    className="absolute top-6 right-6 p-3 bg-gray-100 rounded-full hover:bg-gray-200 hover:rotate-90 transition-all duration-300 z-10"
                >
                    <X className="w-8 h-8 text-gray-600" />
                </button>

                {/* Left Side: Identity */}
                <div className={`w-1/3 flex flex-col items-center justify-center p-8 rounded-3xl ${getThemeStyles(selectedPitfall.theme).bg}`}>
                    <div className={`p-8 bg-white rounded-full shadow-md mb-6 ${getThemeStyles(selectedPitfall.theme).icon}`}>
                        <selectedPitfall.icon className="w-24 h-24" strokeWidth={1} />
                    </div>
                    <h3 className={`text-4xl font-bold text-center leading-tight ${getThemeStyles(selectedPitfall.theme).text}`}>
                        {selectedPitfall.title}
                    </h3>
                </div>

                {/* Right Side: 5 Points */}
                <div className="w-2/3 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-6">
                        <AlertOctagon className={`w-8 h-8 ${getThemeStyles(selectedPitfall.theme).icon}`} />
                        <h4 className="text-2xl font-bold text-gray-400 uppercase tracking-widest">Why is this a problem?</h4>
                    </div>
                    
                    <ul className="space-y-6">
                        {selectedPitfall.points.map((point, i) => (
                            <li key={i} className="flex items-start gap-4">
                                <div className={`mt-2 p-1.5 rounded-full ${getThemeStyles(selectedPitfall.theme).bullet}`}></div>
                                <span className="text-2xl font-medium text-olive-900 leading-snug">
                                    {point}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            {/* Click outside to close */}
            <div className="absolute inset-0 -z-10" onClick={() => setSelectedPitfall(null)}></div>
        </div>
      )}

    </div>
  );
};

export default CommonPitfalls;