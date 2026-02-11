import React from 'react';
import { SlideProps } from '../../types';
import { CalendarX, Wheat, ArrowRight, CalendarCheck, Repeat, Users } from 'lucide-react';

const ASHAMeetingExample: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className={`w-full h-full flex flex-col p-10 relative overflow-hidden bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-amber-50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none"></div>

      {/* Header */}
      <div className="flex-none mb-10">
         <div className="flex items-center gap-4">
            <div className="p-3 bg-lime-200 rounded-2xl">
                 <Users className="w-10 h-10 text-lime-800" />
            </div>
            <div>
                <h2 className={`text-4xl font-bold text-lime-950 transition-all duration-1000 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    Example: ASHA Meeting Attendance Low
                </h2>
                <h3 className={`text-2xl text-lime-700 font-medium transition-all duration-1000 delay-200 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    From Finding to Action
                </h3>
            </div>
         </div>
      </div>

      {/* Main Content Flow */}
      <div className="flex-1 flex items-center justify-between px-4 gap-8">
        
        {/* Problem Card */}
        <div className={`flex-1 flex flex-col p-8 bg-red-50 border-2 border-red-100 rounded-3xl shadow-sm h-full justify-center transition-all duration-700 delay-300 transform ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-white rounded-full text-red-500 shadow-sm">
                    <CalendarX className="w-12 h-12" strokeWidth={1.5} />
                </div>
                <div className="p-4 bg-amber-100 rounded-full text-amber-600 shadow-sm">
                    <Wheat className="w-12 h-12" strokeWidth={1.5} />
                </div>
            </div>
            <h4 className="text-xl font-bold text-red-800 uppercase tracking-widest mb-4">Evaluation Finding</h4>
            <p className="text-4xl text-lime-950 font-medium leading-snug">
                Poor attendance due to <span className="text-amber-700 font-bold underline decoration-amber-400 decoration-wavy underline-offset-4">agricultural season</span> workload.
            </p>
        </div>

        {/* Transition Arrow */}
        <div className={`text-gray-300 flex-shrink-0 transition-all duration-700 delay-500 transform ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
            <ArrowRight className="w-20 h-20" strokeWidth={3} />
        </div>

        {/* Solution Card */}
        <div className={`flex-1 flex flex-col p-8 bg-green-100 border-2 border-green-200 rounded-3xl shadow-sm h-full justify-center transition-all duration-700 delay-700 transform ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
             <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-white rounded-full text-green-700 shadow-sm">
                    <CalendarCheck className="w-12 h-12" strokeWidth={1.5} />
                </div>
            </div>
            <h4 className="text-xl font-bold text-green-900 uppercase tracking-widest mb-6">Programmatic Response</h4>
            <ul className="space-y-6">
                <li className="flex items-center gap-4 text-3xl text-lime-950 font-bold">
                    <div className="w-4 h-4 bg-green-600 rounded-full flex-shrink-0"></div> Reschedule meetings
                </li>
                <li className="flex items-center gap-4 text-3xl text-lime-950 font-bold">
                    <div className="w-4 h-4 bg-green-600 rounded-full flex-shrink-0"></div> Provide flexible timing
                </li>
            </ul>
        </div>

      </div>

      {/* Footer Loop Concept */}
      <div className={`flex-none mt-10 bg-yellow-100 border-l-[12px] border-yellow-600 rounded-r-full p-6 flex items-center justify-center gap-6 shadow-md transition-all duration-1000 delay-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
         <Repeat className="w-10 h-10 text-yellow-800" strokeWidth={3} />
         <p className="text-3xl font-bold text-lime-950">
            Feedback closes the <span className="text-yellow-800 underline decoration-4 underline-offset-4">evaluation loop</span>.
         </p>
      </div>

    </div>
  );
};

export default ASHAMeetingExample;