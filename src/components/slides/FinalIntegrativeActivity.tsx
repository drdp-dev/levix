import React, { useState, useEffect } from 'react';
import { SlideProps } from '../../types';
import { IndianRupee, CalendarClock, Target, ListChecks, LayoutTemplate, ClipboardPen, ShieldAlert, Megaphone, Scissors, ChevronRight, MousePointer2, AlertTriangle, X, Lightbulb, Check, MousePointerClick } from 'lucide-react';

const FinalIntegrativeActivity: React.FC<SlideProps> = ({ isActive }) => {
  const [btnPos, setBtnPos] = useState({ top: '88%', right: '4%' });
  const [isHovered, setIsHovered] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    if(isActive) {
        // Reset position when slide activates
        setBtnPos({ top: '88%', right: '4%' });
        setIsHovered(false);
    }
  }, [isActive]);

  const runAway = () => {
      // Calculate safe boundaries (15% to 85% of screen) to keep button reachable but hard to catch
      const minTop = 15;
      const maxTop = 85;
      const minRight = 5;
      const maxRight = 85;

      const newTop = Math.floor(Math.random() * (maxTop - minTop + 1)) + minTop;
      const newRight = Math.floor(Math.random() * (maxRight - minRight + 1)) + minRight;

      setBtnPos({ top: `${newTop}%`, right: `${newRight}%` });
      setIsHovered(true);
  };

  const modalData: Record<string, { title: string; lines: string[]; icon: any; theme: string }> = {
    "task-0": {
        title: "Objective Strategy",
        icon: Target,
        theme: "blue",
        lines: [
            "Focus strictly on 'Compliance' (behavior) rather than 'Anaemia Prevalence' (health outcome).",
            "Biomarker changes take >12 months; behavior change fits the timeline.",
            "Narrowing the scope avoids expensive clinical testing costs."
        ]
    },
    "task-1": {
        title: "Indicator Selection",
        icon: ListChecks,
        theme: "forest",
        lines: [
            "Limit to 3 high-yield metrics: Supply (Process), Reach (Output), Consumption (Outcome).",
            "Avoid complex 'Impact' indicators that require large-scale surveys.",
            "Ensures data collection remains feasible within the ₹15 Lakh limit."
        ]
    },
    "task-2": {
        title: "Design Choice",
        icon: LayoutTemplate,
        theme: "copper",
        lines: [
            "Use a 'Before-After' design without a control group to save resources.",
            "A full Randomized Control Trial (RCT) is too expensive for this budget.",
            "Accept lower internal validity in exchange for feasibility."
        ]
    },
    "task-3": {
        title: "Tools & Methods",
        icon: ClipboardPen,
        theme: "clay",
        lines: [
            "Utilize existing school attendance registers and rapid mobile exit interviews.",
            "Avoid household surveys which are time-consuming and costly.",
            "Leverages existing infrastructure to keep costs near zero."
        ]
    },
    "task-4": {
        title: "Bias Management",
        icon: ShieldAlert,
        theme: "red",
        lines: [
            "Counter 'Social Desirability' by triangulating self-reports with stock registers.",
            "We cannot afford clinical verification (blood tests).",
            "Cross-verification is the most cost-effective validity check."
        ]
    },
    "task-5": {
        title: "Action Plan",
        icon: Megaphone,
        theme: "olive",
        lines: [
            "Create a simple 'Red/Green' scorecard for monthly block-level reviews.",
            "Ensures immediate administrative feedback without expensive software.",
            "Focuses on course correction during the 12-month timeline."
        ]
    },
    "hard-choice": {
        title: "Strategic Sacrifice",
        icon: Scissors,
        theme: "red",
        lines: [
            "Sacrifice **Sample Size** first. Study fewer people with rigor.",
            "Cutting 'Design' invalidates the study; cutting 'Indicators' blinds you to causes.",
            "A small, valid study is valuable; a large, invalid one is waste."
        ]
    }
  };

  const tasks = [
    { id: "task-0", text: "Define one measurable objective", icon: Target, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-100" },
    { id: "task-1", text: "Identify 3 key indicators", icon: ListChecks, color: "text-green-700", bg: "bg-green-100", border: "border-green-200" },
    { id: "task-2", text: "Choose evaluation design", icon: LayoutTemplate, color: "text-amber-700", bg: "bg-amber-100", border: "border-amber-200" },
    { id: "task-3", text: "Decide data collection tools", icon: ClipboardPen, color: "text-orange-700", bg: "bg-orange-100", border: "border-orange-200" },
    { id: "task-4", text: "Identify bias strategy", icon: ShieldAlert, color: "text-red-500", bg: "bg-red-50", border: "border-red-100" },
    { id: "task-5", text: "District action plan", icon: Megaphone, color: "text-green-700", bg: "bg-green-100", border: "border-green-200" },
  ];

  const getThemeStyles = (theme: string) => {
      switch(theme) {
          case 'blue': return { bg: 'bg-blue-50', text: 'text-blue-800', icon: 'text-blue-600' };
          case 'forest': return { bg: 'bg-green-100', text: 'text-green-900', icon: 'text-green-700' };
          case 'copper': return { bg: 'bg-amber-100', text: 'text-amber-900', icon: 'text-amber-700' };
          case 'clay': return { bg: 'bg-orange-100', text: 'text-orange-900', icon: 'text-orange-700' };
          case 'red': return { bg: 'bg-red-50', text: 'text-red-800', icon: 'text-red-600' };
          case 'olive': return { bg: 'bg-green-100', text: 'text-green-900', icon: 'text-green-700' };
          default: return { bg: 'bg-gray-50', text: 'text-gray-800', icon: 'text-gray-600' };
      }
  };

  return (
    <div className={`w-full h-full flex flex-col p-8 relative bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-yellow-200/50 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-gradient-to-tr from-green-100/50 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>

      {/* Header Area */}
      <div className="flex-none mb-6 flex justify-between items-start relative z-10">
        <div className="flex-1 pr-6 pt-2">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-green-200 rounded-full text-green-900 font-bold uppercase tracking-widest text-sm mb-3">
                Final Activity
            </div>
            <h2 className="text-6xl font-bold text-green-950 leading-tight">
              Design a Realistic<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-green-700">Evaluation Plan</span>
            </h2>
            <div className="flex items-center gap-2 mt-2 text-green-950 font-bold text-sm uppercase tracking-wider animate-pulse">
                <MousePointerClick size={16} /> Click items to reveal answers
            </div>
        </div>

        {/* Scenario Card - Compact */}
        <div className={`bg-white/95 backdrop-blur-md border-2 border-green-300 rounded-[2rem] p-6 shadow-xl flex flex-col gap-5 w-[640px] transition-all duration-1000 transform origin-top-right ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <div className="flex items-center justify-between border-b-2 border-gray-100 pb-2">
                 <div className="text-base font-bold text-gray-400 uppercase tracking-widest">Mission Constraints</div>
                 <div className="px-3 py-1.5 bg-red-100 text-red-700 rounded-full font-bold text-sm flex items-center gap-1.5">
                    <AlertTriangle size={14} /> RESTRICTED
                 </div>
            </div>
            
            <div className="flex items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-green-100 rounded-xl text-green-700"><IndianRupee size={28} /></div>
                    <div>
                        <div className="text-sm font-bold text-gray-500 uppercase">Budget</div>
                        <div className="text-3xl font-black text-green-950">₹15 Lakh</div>
                    </div>
                </div>
                <div className="w-px h-14 bg-gray-200"></div>
                <div className="flex items-center gap-4">
                    <div className="p-3 bg-blue-100 rounded-xl text-blue-600"><CalendarClock size={28} /></div>
                    <div>
                        <div className="text-sm font-bold text-gray-500 uppercase">Timeline</div>
                        <div className="text-3xl font-black text-green-950">12 Months</div>
                    </div>
                </div>
            </div>
            <div className="text-xl font-bold text-green-800 bg-green-100 p-3.5 rounded-xl text-center border border-green-300">
                Target: District adolescent anaemia program
            </div>
        </div>
      </div>

      {/* Task Grid - Horizontal Cards (Reduced Height) */}
      <div className="flex-1 grid grid-cols-3 grid-rows-2 gap-6 mb-6 relative z-10 min-h-0">
        {tasks.map((task, index) => (
            <div 
                key={index}
                onClick={() => setSelectedItem(modalData[task.id])}
                className={`group relative bg-white border-[3px] ${task.border} rounded-3xl p-5 shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-transparent hover:ring-4 hover:ring-offset-2 hover:ring-green-300 transition-all duration-500 transform ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'} flex items-center gap-5 overflow-hidden cursor-pointer`}
                style={{ transitionDelay: `${200 + (index * 100)}ms` }}
            >
                {/* Number Background */}
                <div className="absolute -right-2 -bottom-6 text-[8rem] font-black text-gray-50 opacity-30 group-hover:opacity-60 group-hover:text-gray-200 transition-all duration-500 z-0 pointer-events-none select-none leading-none">
                    {index + 1}
                </div>

                <div className={`w-20 h-20 flex-shrink-0 rounded-2xl ${task.bg} ${task.color} flex items-center justify-center shadow-md relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                    <task.icon size={36} strokeWidth={2.5} />
                </div>
                <p className="text-3xl font-bold text-gray-800 leading-tight group-hover:text-green-950 transition-colors relative z-10">
                    {task.text}
                </p>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    <MousePointerClick className="w-8 h-8 text-green-400" />
                </div>
            </div>
        ))}
      </div>

      {/* Bottom Footer - Expanded & Detailed */}
      <div 
        className={`flex-none relative z-10 transition-all duration-1000 delay-700 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} cursor-pointer group`}
        onClick={() => setSelectedItem(modalData["hard-choice"])}
      >
         <div className="bg-gradient-to-r from-green-950 to-green-950 rounded-[2.5rem] p-10 shadow-2xl flex items-center justify-between text-white relative overflow-hidden border-4 border-white/20 group-hover:scale-[1.01] transition-transform">
             {/* Decorative pattern */}
             <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
             
             <div className="flex items-center gap-10 relative z-10 w-full">
                <div className="p-6 bg-white/10 rounded-full border-2 border-white/20 flex-shrink-0 shadow-2xl group-hover:bg-white/20 transition-colors">
                    <Scissors className="w-16 h-16 text-yellow-400" />
                </div>
                <div className="flex-1">
                    <h4 className="text-green-400 font-bold uppercase tracking-widest text-xl mb-3 flex items-center gap-3">
                        <AlertTriangle size={24} /> The Hard Choice
                    </h4>
                    <p className="text-4xl font-bold leading-tight">
                        Resources are cut by 30%. What do you sacrifice?
                    </p>
                    <div className="flex gap-8 mt-4 text-2xl font-medium text-yellow-200">
                        <span className="border-b-4 border-red-400/50 pb-1">Rigorous Design?</span>
                        <span className="border-b-4 border-red-400/50 pb-1">Sample Size?</span>
                        <span className="border-b-4 border-red-400/50 pb-1">Number of Indicators?</span>
                    </div>
                </div>
                <MousePointerClick className="w-10 h-10 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity" />
             </div>
         </div>
      </div>

      {/* THE ESCAPING BUTTON */}
      <div 
        className="absolute z-50 transition-all duration-300 ease-out"
        style={{ top: btnPos.top, right: btnPos.right }}
        onMouseEnter={runAway}
      >
        <button 
            className="bg-blue-600 hover:bg-red-500 text-white text-xl font-bold py-4 px-10 rounded-full shadow-2xl flex items-center gap-3 transform hover:scale-110 transition-transform active:scale-95 cursor-pointer ring-4 ring-white/50"
        >
            Next Slide <ChevronRight size={24} />
            {isHovered && <MousePointer2 size={24} className="absolute -bottom-8 right-0 text-black animate-bounce" />}
        </button>
      </div>

      {/* ANSWER MODAL */}
      {selectedItem && (
        <div className="absolute inset-0 z-[60] flex items-center justify-center backdrop-blur-md p-10 animate-in fade-in duration-300" onClick={() => setSelectedItem(null)}>
            <div 
                className="bg-white w-full max-w-4xl rounded-[3rem] shadow-2xl p-10 relative animate-in zoom-in-95 duration-300 border-4 border-white/50"
                onClick={(e) => e.stopPropagation()}
            >
                <button 
                    onClick={() => setSelectedItem(null)}
                    className="absolute top-6 right-6 p-3 bg-gray-100 rounded-full hover:bg-red-100 hover:text-red-600 transition-all z-10"
                >
                    <X className="w-8 h-8" />
                </button>

                <div className="flex flex-col items-center text-center">
                    <div className={`p-6 rounded-3xl mb-6 shadow-sm ${getThemeStyles(selectedItem.theme).bg} ${getThemeStyles(selectedItem.theme).text}`}>
                        <selectedItem.icon className="w-20 h-20" strokeWidth={1.5} />
                    </div>
                    
                    <h3 className={`text-4xl font-bold mb-8 ${getThemeStyles(selectedItem.theme).text}`}>
                        {selectedItem.title}
                    </h3>

                    <div className="w-full space-y-6 text-left bg-gray-50 p-8 rounded-3xl border border-gray-100">
                        {selectedItem.lines.map((line: string, i: number) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className={`mt-1.5 p-1 rounded-full flex-shrink-0 ${getThemeStyles(selectedItem.theme).bg} ${getThemeStyles(selectedItem.theme).text}`}>
                                    <Check className="w-5 h-5" strokeWidth={4} />
                                </div>
                                <p className="text-3xl font-medium text-green-950 leading-snug">
                                    {line.includes('**') ? (
                                        <>
                                            {line.split('**')[0]}
                                            <span className="font-bold text-black bg-yellow-200 px-1 rounded">{line.split('**')[1]}</span>
                                            {line.split('**')[2]}
                                        </>
                                    ) : line}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 flex items-center gap-3 text-green-950 font-bold uppercase tracking-widest text-sm">
                        <Lightbulb className="w-5 h-5" /> Optimized for Budget & Timeline
                    </div>
                </div>
            </div>
        </div>
      )}

    </div>
  );
};

export default FinalIntegrativeActivity;