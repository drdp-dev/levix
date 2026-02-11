import React from 'react';
import { SlideProps } from '../../types';
import { CalendarDays, ClipboardCheck, Users, Syringe, AlertOctagon, Package, ArrowRight, CheckCircle2 } from 'lucide-react';

const VHNDExample: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className={`w-full h-full p-8 relative bg-white flex flex-col transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background with skewed partition */}
      <div className="absolute top-0 right-0 w-[55%] h-full bg-green-100/50 -z-10 transform -skew-x-6 origin-top-right translate-x-20"></div>

      {/* Header */}
      <div className="flex-none mb-4 flex justify-between items-end border-b-2 border-green-200 pb-3">
        <div>
             <div className="flex items-center gap-3 mb-2 text-green-700 font-bold uppercase tracking-widest">
                <ClipboardCheck className="w-6 h-6" /> Process Evaluation
             </div>
             <h2 className="text-4xl font-bold text-green-950">Village Health Nutrition Day (VHND)</h2>
        </div>
        <div className="text-right pb-1">
             <p className="text-xl text-green-950 font-serif italic">"Are we doing what we said we'd do?"</p>
        </div>
      </div>

      {/* Main Dashboard Layout */}
      <div className="flex-1 grid grid-cols-12 gap-8">
        
        {/* Left Panel: Quantitative (The Numbers) - 5 cols */}
        <div className={`col-span-5 flex flex-col gap-4 transition-all duration-700 delay-300 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
            <div className="bg-blue-50 rounded-3xl p-8 flex-1 flex flex-col relative overflow-hidden border border-blue-100 shadow-sm group hover:shadow-md transition-all">
                 <h3 className="text-2xl font-bold text-blue-800 mb-8 flex items-center gap-3">
                    <CalendarDays className="w-8 h-8" /> Quantitative Metrics
                 </h3>

                 <div className="flex-1 flex flex-col justify-start gap-10">
                     {/* Target */}
                     <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-blue-600 uppercase tracking-wide">Planned Sessions</span>
                        <div className="flex items-baseline gap-2">
                             <span className="text-6xl font-black text-blue-900">4</span>
                             <span className="text-xl text-blue-500 font-medium">/mo</span>
                        </div>
                     </div>

                     {/* Divider */}
                     <div className="w-full h-px bg-blue-200"></div>

                     {/* Actual */}
                     <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-red-600 uppercase tracking-wide">Held Sessions</span>
                        <div className="flex items-baseline gap-2">
                             <span className="text-6xl font-black text-red-600">2</span>
                             <span className="text-xl text-red-400 font-medium">/mo</span>
                        </div>
                     </div>

                     {/* Visual Gap */}
                     <div className="mt-auto bg-white rounded-2xl p-5 border border-blue-100 shadow-inner">
                        <div className="flex justify-between text-sm font-bold text-gray-500 mb-3">
                            <span>Implementation Gap</span>
                            <span className="text-red-500">50% Shortfall</span>
                        </div>
                        <div className="flex h-8 rounded-full overflow-hidden gap-1">
                             <div className="flex-1 bg-blue-500 rounded-l-md"></div>
                             <div className="flex-1 bg-blue-500"></div>
                             <div className="flex-1 bg-red-100 border border-red-200 relative overflow-hidden">
                                <div className="absolute inset-0 bg-red-400/20 transform -skew-x-12"></div>
                             </div>
                             <div className="flex-1 bg-red-100 border border-red-200 rounded-r-md relative overflow-hidden">
                                <div className="absolute inset-0 bg-red-400/20 transform -skew-x-12"></div>
                             </div>
                        </div>
                     </div>
                 </div>
            </div>
        </div>

        {/* Right Panel: Qualitative (The Quality) - 7 cols */}
        <div className="col-span-7 flex flex-col gap-6">
             {/* Title */}
             <div className={`transition-all duration-700 delay-400 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                <h3 className="text-2xl font-black text-green-950 flex items-center gap-4 pl-2 uppercase tracking-widest">
                    <div className="p-2 bg-green-200 rounded-xl"><Users className="w-8 h-8" strokeWidth={2.5} /></div> Qualitative Assessment
                </h3>
             </div>

             {/* Cards */}
             <div className="flex-1 flex flex-col gap-5">
                
                {/* Q1 Service Delivery */}
                <div className={`flex-1 bg-white border-[3px] border-green-200 border-l-[20px] border-l-green-600 rounded-r-[2.5rem] p-8 shadow-md flex items-center gap-8 transition-all duration-700 delay-500 transform ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} hover:shadow-xl hover:-translate-y-1 group`}>
                    <div className="p-6 bg-green-100 rounded-3xl text-green-800 shadow-inner ring-4 ring-green-100/50 group-hover:bg-green-200 transition-colors">
                        <Syringe className="w-10 h-10" strokeWidth={2.5} />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-2xl font-black text-green-950 mb-2 uppercase tracking-wide">Service Completeness</h4>
                        <p className="text-xl text-green-900 font-bold leading-snug">
                            Did the ANM carry out <span className="text-green-800 bg-green-200 px-2 py-0.5 rounded-lg border border-green-300">all</span> mandated services?
                        </p>
                        <p className="text-base text-gray-500 font-bold mt-2 flex items-center gap-2">
                             <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> ANC, Immunization, Growth Monitoring
                        </p>
                    </div>
                    <div className="ml-auto">
                        <CheckCircle2 className="w-12 h-12 text-green-300" strokeWidth={3} />
                    </div>
                </div>

                {/* Q2 Logistics */}
                <div className={`flex-1 bg-white border-[3px] border-amber-200 border-l-[20px] border-l-amber-600 rounded-r-[2.5rem] p-8 shadow-md flex items-center gap-8 transition-all duration-700 delay-600 transform ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} hover:shadow-xl hover:-translate-y-1 group`}>
                    <div className="p-6 bg-amber-100 rounded-3xl text-amber-800 shadow-inner ring-4 ring-amber-100/50 group-hover:bg-amber-200 transition-colors">
                        <Package className="w-10 h-10" strokeWidth={2.5} />
                    </div>
                     <div className="flex-1">
                        <h4 className="text-2xl font-black text-amber-950 mb-2 uppercase tracking-wide">Logistics & Supply</h4>
                        <p className="text-xl text-green-900 font-bold leading-snug">
                            Were essential supplies available on site?
                        </p>
                        <p className="text-base text-gray-500 font-bold mt-2 flex items-center gap-2">
                             <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span> Vaccines, IFA tablets, Weighing scales
                        </p>
                    </div>
                    <div className="ml-auto">
                        <CheckCircle2 className="w-12 h-12 text-amber-300" strokeWidth={3} />
                    </div>
                </div>

                {/* Q3 Attendance */}
                <div className={`flex-1 bg-white border-[3px] border-orange-200 border-l-[20px] border-l-orange-600 rounded-r-[2.5rem] p-8 shadow-md flex items-center gap-8 transition-all duration-700 delay-700 transform ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'} hover:shadow-xl hover:-translate-y-1 group`}>
                    <div className="p-6 bg-orange-100 rounded-3xl text-orange-800 shadow-inner ring-4 ring-orange-100/50 group-hover:bg-orange-200 transition-colors">
                        <Users className="w-10 h-10" strokeWidth={2.5} />
                    </div>
                     <div className="flex-1">
                        <h4 className="text-2xl font-black text-orange-950 mb-2 uppercase tracking-wide">Beneficiary Reach</h4>
                        <p className="text-xl text-green-900 font-bold leading-snug">
                            Was mobilization effective? Did target beneficiaries actually attend?
                        </p>
                    </div>
                    <div className="ml-auto">
                        <CheckCircle2 className="w-12 h-12 text-orange-300" strokeWidth={3} />
                    </div>
                </div>

             </div>
        </div>

      </div>

      {/* Footer Insight */}
      <div className={`flex-none mt-6 bg-green-950 text-white p-6 rounded-2xl flex items-center justify-between shadow-lg transition-all duration-1000 delay-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:scale-[1.01]`}>
          <div className="flex items-center gap-6">
               <div className="p-3 bg-white/10 rounded-full">
                    <AlertOctagon className="w-8 h-8 text-red-300" strokeWidth={2} />
               </div>
               <p className="text-2xl font-medium tracking-wide">
                   "Numbers tell you <span className="font-bold text-red-300 border-b-2 border-red-300/50">what</span> happened. Process evaluation tells you <span className="font-bold text-green-300 border-b-2 border-green-300/50">why</span>."
               </p>
          </div>
          <ArrowRight className="w-8 h-8 text-green-500" />
      </div>

    </div>
  );
};

export default VHNDExample;