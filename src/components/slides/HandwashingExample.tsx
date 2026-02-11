import React from 'react';
import { SlideProps } from '../../types';
import { ClipboardList, Droplets, ClipboardCheck, AlertOctagon, ArrowRight, Waves } from 'lucide-react';

const HandwashingExample: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className={`w-full h-full flex flex-col p-8 relative overflow-hidden bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-70 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cornsilk-50/50 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 opacity-60 pointer-events-none"></div>

      {/* Header */}
      <div className="flex-none mb-12 relative z-10">
         <div className="flex items-center gap-6">
            <div className="p-4 bg-blue-100 rounded-3xl shadow-sm">
                <Waves className="w-12 h-12 text-blue-600" />
            </div>
            <div>
                <h2 className={`text-5xl font-bold text-olive-900 mb-1 transition-all duration-1000 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    School Handwashing Program
                </h2>
                <div className={`flex items-center gap-3 transition-all duration-1000 delay-200 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                     <span className="px-3 py-1 bg-olive-100 text-olive-700 font-bold uppercase tracking-wider text-sm rounded-full">Design Application</span>
                     <span className="text-2xl text-blue-600 font-medium">Pre-test / Post-test (Before-After)</span>
                </div>
            </div>
         </div>
      </div>

      {/* Main Flow Visualization */}
      <div className="flex-1 flex items-center justify-center relative px-8 mb-8 z-10">
         
         {/* Connecting Line Container */}
         <div className="absolute top-1/2 left-20 right-20 h-3 bg-gray-100 rounded-full -translate-y-1/2 -z-10 overflow-hidden">
             {/* Animated Progress Bar */}
             <div className={`h-full bg-gradient-to-r from-blue-300 to-blue-500 rounded-full transition-all duration-[2000ms] ease-out delay-500 ${isActive ? 'w-full' : 'w-0'}`}></div>
         </div>

         <div className="w-full grid grid-cols-3 gap-8">
            
            {/* Step 1: O1 */}
            <div className={`relative flex flex-col items-center group transition-all duration-700 delay-300 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <div className="w-32 h-32 bg-white border-4 border-blue-100 rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:border-blue-300 transition-all duration-300 relative z-10">
                    <span className="absolute -top-3 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">Baseline</span>
                    <ClipboardList className="w-14 h-14 text-blue-400" strokeWidth={1.5} />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center border-2 border-white shadow-sm font-bold text-blue-800">O1</div>
                </div>
                <div className="text-center bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-blue-100 shadow-sm w-full">
                    <h3 className="text-2xl font-bold text-olive-900 mb-1">Knowledge Check</h3>
                    <p className="text-lg text-olive-600 font-medium">Score: <span className="text-red-500 font-bold">45%</span></p>
                </div>
            </div>

            {/* Step 2: X (Intervention) */}
            <div className={`relative flex flex-col items-center group transition-all duration-700 delay-700 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                 <div className="w-40 h-40 bg-blue-600 border-8 border-blue-50 rounded-[2.5rem] flex items-center justify-center shadow-2xl mb-6 group-hover:scale-105 group-hover:rotate-3 transition-all duration-300 relative z-20">
                    <span className="absolute -top-4 bg-white text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest shadow-md border border-blue-100">Intervention</span>
                    <Droplets className="w-20 h-20 text-white animate-bounce" strokeWidth={1.5} style={{ animationDuration: '3s' }} />
                    <div className="absolute -bottom-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center border-2 border-blue-100 shadow-md font-bold text-2xl text-blue-800 transform rotate-45">
                        <span className="transform -rotate-45">X</span>
                    </div>
                </div>
                <div className="text-center bg-blue-50 p-5 rounded-2xl border border-blue-200 shadow-md w-full transform -translate-y-4 pt-8">
                    <h3 className="text-2xl font-bold text-blue-900 mb-1">Live Demo + Song</h3>
                    <p className="text-lg text-blue-700 font-medium">Active Engagement</p>
                </div>
            </div>

            {/* Step 3: O2 */}
            <div className={`relative flex flex-col items-center group transition-all duration-700 delay-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
                <div className="w-32 h-32 bg-white border-4 border-green-100 rounded-full flex items-center justify-center shadow-lg mb-6 group-hover:scale-110 group-hover:border-green-300 transition-all duration-300 relative z-10">
                    <span className="absolute -top-3 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-sm">Endline</span>
                    <ClipboardCheck className="w-14 h-14 text-green-500" strokeWidth={1.5} />
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-50 rounded-full flex items-center justify-center border-2 border-white shadow-sm font-bold text-green-800">O2</div>
                </div>
                <div className="text-center bg-white/80 backdrop-blur-sm p-4 rounded-2xl border border-green-100 shadow-sm w-full">
                    <h3 className="text-2xl font-bold text-olive-900 mb-1">Re-Assessment</h3>
                    <p className="text-lg text-olive-600 font-medium">Score: <span className="text-green-600 font-bold">85%</span></p>
                </div>
            </div>

         </div>
      </div>

      {/* Footer / Limitation */}
      <div className={`flex-none mx-auto max-w-4xl w-full bg-white border-l-[12px] border-red-400 rounded-r-3xl p-6 shadow-lg transition-all duration-1000 delay-[1500ms] transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} group hover:bg-red-50 hover:scale-[1.01]`}>
         <div className="flex items-start gap-6">
            <div className="p-3 bg-red-100 rounded-full mt-1">
                <AlertOctagon className="w-8 h-8 text-red-500" />
            </div>
            <div>
                <h4 className="text-lg font-bold text-red-800 uppercase tracking-widest mb-1">Critical Limitation: "History Threat"</h4>
                <p className="text-2xl font-medium text-olive-800 leading-snug">
                    "Did the score improve because of our song, or because <span className="font-bold text-red-600 underline decoration-red-300 decoration-wavy">TV ads</span> were running the same week?"
                </p>
                <p className="text-lg text-olive-500 mt-2 italic flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" /> Without a control group, we cannot be sure.
                </p>
            </div>
         </div>
      </div>

    </div>
  );
};

export default HandwashingExample;