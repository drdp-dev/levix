import React from 'react';
import { SlideProps } from '@/src/types';
import { Target, Footprints, Globe2, AlertTriangle, Lightbulb, Map, ArrowRight } from 'lucide-react';

const Overview: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className={`w-full h-full relative bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-teal-100 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-yellow-100 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        {/* Content Wrapper with Padding */}
        <div className="relative z-10 w-full h-full p-10 flex flex-col">
        {/* Header Section */}
        <div className="flex-none mb-8 flex items-center justify-between border-b-4 border-teal-200 pb-4">
            <div>
                <div className={`flex items-center gap-3 mb-2 transition-all duration-1000 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    <Map className="w-8 h-8 text-teal-600" />
                    <span className="text-xl font-bold text-slate-900 uppercase tracking-widest">Session Roadmap</span>
                </div>
                <h2 className={`text-6xl font-bold text-slate-900 tracking-tight transition-all duration-1000 delay-100 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
                    Overview
                </h2>
            </div>
            <div className={`transition-all duration-1000 delay-300 transform ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                <p className="text-2xl text-teal-600 font-serif italic text-right max-w-md">
                    "A systematic journey from theory to practice."
                </p>
            </div>
        </div>

        {/* Main Content - Bento Grid Layout */}
        <div className="flex-1 grid grid-cols-6 grid-rows-2 gap-6 pb-2 relative z-10">
            
            {/* Card 1: Large Left (The Why) */}
            <div 
                className={`col-span-2 row-span-2 bg-amber-100 border-2 border-amber-300 rounded-3xl p-8 flex flex-col justify-between group hover:shadow-xl hover:border-amber-500 transition-all duration-700 transform relative overflow-hidden ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`} 
                style={{ transitionDelay: '200ms' }}
            >
                 <div>
                    <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center text-amber-700 shadow-sm mb-8 group-hover:scale-110 transition-transform duration-300">
                        <Target className="w-12 h-12" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-2xl font-bold text-amber-900 uppercase tracking-wide mb-2">The Why</h3>
                    <p className="text-5xl font-bold text-slate-900 leading-tight">Relevance in Public Health</p>
                 </div>
                 <div className="flex items-center gap-2 text-amber-800 font-bold text-xl mt-4 group-hover:gap-4 transition-all">
                    <span>Setting the stage</span> <ArrowRight className="w-6 h-6" />
                 </div>
                 
                 {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-white/95 backdrop-blur-md p-8 flex flex-col justify-center items-start text-left transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0 z-20 border-t-4 border-amber-500 rounded-3xl">
                    <h3 className="text-2xl font-bold text-amber-900 mb-4">Why Evaluate?</h3>
                    <p className="text-2xl text-slate-700 leading-relaxed font-medium">
                        Evaluation bridges the gap between good intentions and actual health outcomes. It transforms resource allocation from guesswork to evidence-based strategy.
                    </p>
                 </div>
            </div>

            {/* Card 2: Top Middle (The How) */}
            <div 
                className={`col-span-2 bg-teal-100 border-2 border-teal-300 rounded-3xl p-6 flex flex-col justify-center gap-2 group hover:shadow-lg hover:border-teal-500 transition-all duration-700 transform relative overflow-hidden ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`} 
                style={{ transitionDelay: '400ms' }}
            >
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-teal-700 shadow-sm flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                        <Footprints className="w-8 h-8" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-teal-800 uppercase tracking-wider">The How</h3>
                </div>
                <p className="text-3xl font-bold text-slate-900 pl-1">Standard Steps</p>

                {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-white/95 backdrop-blur-md p-6 flex flex-col justify-center text-left transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0 z-20 border-t-4 border-teal-500 rounded-3xl">
                    <p className="text-xl text-slate-700 leading-snug font-medium">
                        Navigating the 7-step CDC framework, adapted for low-resource settings to ensure every phase is practical and actionable.
                    </p>
                 </div>
            </div>

            {/* Card 3: Top Right (The Context) */}
            <div 
                className={`col-span-2 bg-emerald-100 border-2 border-emerald-300 rounded-3xl p-6 flex flex-col justify-center gap-2 group hover:shadow-lg hover:border-emerald-500 transition-all duration-700 transform relative overflow-hidden ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`} 
                style={{ transitionDelay: '600ms' }}
            >
                 <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-emerald-700 shadow-sm flex-shrink-0 group-hover:rotate-12 transition-transform duration-300">
                        <Globe2 className="w-8 h-8" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-emerald-800 uppercase tracking-wider">The Context</h3>
                </div>
                <p className="text-3xl font-bold text-slate-900 pl-1">Indian Examples</p>

                {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-white/95 backdrop-blur-md p-6 flex flex-col justify-center text-left transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0 z-20 border-t-4 border-emerald-500 rounded-3xl">
                    <p className="text-xl text-slate-700 leading-snug font-medium">
                        Real-world case studies from National Health Programs (NHM) like Tobacco Control and VHNDs to ground theory in Indian reality.
                    </p>
                 </div>
            </div>

            {/* Card 4: Bottom Middle (The Watch-outs) */}
            <div 
                className={`col-span-2 bg-red-50 border-2 border-red-200 rounded-3xl p-6 flex flex-col justify-center gap-2 group hover:shadow-lg hover:border-red-400 transition-all duration-700 transform relative overflow-hidden ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} 
                style={{ transitionDelay: '800ms' }}
            >
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-red-500 shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <AlertTriangle className="w-8 h-8" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-red-700 uppercase tracking-wider">Watch-outs</h3>
                </div>
                <p className="text-3xl font-bold text-slate-900 pl-1">Critical Pitfalls</p>

                {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-white/95 backdrop-blur-md p-6 flex flex-col justify-center text-left transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0 z-20 border-t-4 border-red-400 rounded-3xl">
                    <p className="text-xl text-slate-700 leading-snug font-medium">
                        Identifying traps like 'activity-based' reporting vs. 'outcome-based' assessment that often derail meaningful evaluation.
                    </p>
                 </div>
            </div>

            {/* Card 5: Bottom Right (The Goal) */}
            <div 
                className={`col-span-2 bg-orange-100 border-2 border-orange-300 rounded-3xl p-6 flex flex-col justify-center gap-2 group hover:shadow-lg hover:border-orange-500 transition-all duration-700 transform relative overflow-hidden ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`} 
                style={{ transitionDelay: '1000ms' }}
            >
                <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-orange-700 shadow-sm flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <Lightbulb className="w-8 h-8" strokeWidth={2} />
                    </div>
                    <h3 className="text-xl font-bold text-orange-800 uppercase tracking-wider">The Goal</h3>
                </div>
                <p className="text-3xl font-bold text-slate-900 pl-1">Policy & Practice</p>

                {/* Hover Overlay */}
                 <div className="absolute inset-0 bg-white/95 backdrop-blur-md p-6 flex flex-col justify-center text-left transition-transform duration-500 ease-in-out translate-y-full group-hover:translate-y-0 z-20 border-t-4 border-orange-500 rounded-3xl">
                    <p className="text-xl text-slate-700 leading-snug font-medium">
                        Creating feedback loops that actually improve program quality and inform high-level policy decisions.
                    </p>
                 </div>
            </div>
        </div>
    </div>
    </div>
  );
};

export default Overview;