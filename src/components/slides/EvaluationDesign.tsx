import React from 'react';
import { SlideProps } from '../../types';
import { ArrowRight, Users, Activity, Scale, HeartHandshake, Wallet, CheckCircle2, XCircle } from 'lucide-react';

const EvaluationDesign: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className={`w-full h-full flex flex-col p-8 relative bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Header */}
      <div className="flex-none mb-6 text-center">
        <h2 className={`text-5xl font-bold text-lime-950 mb-2 transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          Step 4: Choosing Evaluation Design
        </h2>
        <div className={`h-1.5 w-48 bg-lime-300 mx-auto rounded-full transition-all duration-1000 delay-200 transform ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
      </div>

      {/* Main Content - Designs Grid */}
      <div className="flex-1 grid grid-cols-3 gap-8 min-h-0 px-2">
        
        {/* --- Design 1: Before-After --- */}
        <div 
          className={`flex flex-col bg-white rounded-[2.5rem] border-2 border-orange-300 shadow-lg overflow-hidden h-full transition-all duration-500 delay-300 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          {/* Section 1: Title & Icon - Height Increased */}
          <div className="flex-none flex items-center gap-4 py-10 px-6 bg-orange-100 border-b border-orange-200">
            <div className="bg-white p-3 rounded-2xl shadow-sm text-orange-700 border border-orange-200">
                <ArrowRight className="w-8 h-8" strokeWidth={3} />
            </div>
            <div>
                <h3 className="text-3xl font-bold text-lime-950 leading-none">Before–After</h3>
                <p className="text-sm font-bold text-orange-700 uppercase tracking-widest mt-1">Pre & Post Test</p>
            </div>
          </div>

          {/* Section 2: Graphic - Height Increased significantly */}
          <div className="flex-none h-56 bg-white border-b border-orange-200 flex items-center justify-center gap-3">
             <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center font-bold text-2xl text-orange-800 border-4 border-orange-300">O1</div>
                <span className="text-xs font-bold text-orange-500 mt-2 uppercase">Base</span>
             </div>
             <ArrowRight className="w-8 h-8 text-orange-400" strokeWidth={4} />
             <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-orange-700 flex items-center justify-center font-bold text-3xl text-white shadow-lg transform rotate-3">X</div>
                <span className="text-xs font-bold text-orange-700 mt-2 uppercase">Int</span>
             </div>
             <ArrowRight className="w-8 h-8 text-orange-400" strokeWidth={4} />
             <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center font-bold text-2xl text-orange-800 border-4 border-orange-300">O2</div>
                <span className="text-xs font-bold text-orange-500 mt-2 uppercase">End</span>
             </div>
          </div>
          
          {/* Section 3: Scenario - Boxed & Decreased Padding - More Text Added */}
          <div className="flex-1 p-2 bg-white flex flex-col">
             <div className="w-full h-full bg-orange-100/60 rounded-2xl p-5 border border-orange-200 flex flex-col justify-center">
                 <h4 className="text-xs font-bold text-orange-900 mb-2 uppercase tracking-widest border-b border-orange-300 pb-1 self-start">Scenario</h4>
                 <p className="text-xl font-bold text-lime-950 leading-tight mb-3">
                    Evaluating a <span className="text-orange-800">Dengue Workshop</span> for high school students.
                 </p>
                 <p className="text-base text-lime-800 leading-relaxed font-medium">
                    We administer a knowledge test at 9:00 AM, deliver the lecture, and repeat the test at 11:00 AM.
                 </p>
                 <p className="text-sm text-orange-900 font-bold italic mt-3 bg-white/50 p-2 rounded-lg">
                    "Is the improvement due to the lecture, or did they just remember the questions?"
                 </p>
             </div>
          </div>

          {/* Section 4: Pros/Cons - Boxed */}
          <div className="flex-none p-5 pt-0 bg-white flex flex-col gap-3">
            <div className="bg-green-50 rounded-2xl p-4 flex items-center gap-4 border border-green-100">
                <div className="bg-white p-2 rounded-full text-green-600 shadow-sm"><CheckCircle2 className="w-6 h-6" strokeWidth={3} /></div>
                <div>
                    <span className="text-[10px] font-bold text-green-800 uppercase tracking-wider block mb-0.5">Pros</span>
                    <p className="text-xl text-lime-950 font-bold leading-none">Simple & Fast.</p>
                </div>
            </div>
            <div className="bg-red-50 rounded-2xl p-4 flex items-center gap-4 border border-red-100">
                <div className="bg-white p-2 rounded-full text-red-500 shadow-sm"><XCircle className="w-6 h-6" strokeWidth={3} /></div>
                <div>
                    <span className="text-[10px] font-bold text-red-800 uppercase tracking-wider block mb-0.5">Cons</span>
                    <p className="text-xl text-lime-950 font-bold leading-none">Weak Validity.</p>
                </div>
            </div>
          </div>
        </div>

        {/* --- Design 2: Control Group --- */}
        <div 
          className={`flex flex-col bg-white rounded-[2.5rem] border-2 border-green-300 shadow-lg overflow-hidden h-full transition-all duration-500 delay-500 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
           {/* Section 1: Title & Icon - Height Increased */}
           <div className="flex-none flex items-center gap-4 py-10 px-6 bg-green-100 border-b border-green-200">
            <div className="bg-white p-3 rounded-2xl shadow-sm text-green-700 border border-green-200">
                <Users className="w-8 h-8" strokeWidth={3} />
            </div>
            <div>
                <h3 className="text-3xl font-bold text-lime-950 leading-none">Control Group</h3>
                <p className="text-sm font-bold text-green-700 uppercase tracking-widest mt-1">Intervention vs Control</p>
            </div>
          </div>

          {/* Section 2: Graphic - Height Increased */}
          <div className="flex-none h-56 bg-white border-b border-green-200 flex flex-col justify-center gap-6 px-4">
             {/* Int */}
             <div className="flex items-center w-full justify-between">
                <span className="text-[10px] font-bold text-green-700 uppercase w-6">Int</span>
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-sm text-green-800 border-2 border-green-300">O1</div>
                <ArrowRight className="w-5 h-5 text-green-400" strokeWidth={3} />
                <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center font-bold text-white text-xl shadow">X</div>
                <ArrowRight className="w-5 h-5 text-green-400" strokeWidth={3} />
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center font-bold text-sm text-green-800 border-2 border-green-300">O2</div>
             </div>
             <div className="w-full border-t border-dashed border-green-300"></div>
             {/* Con */}
             <div className="flex items-center w-full justify-between opacity-60">
                <span className="text-[10px] font-bold text-gray-500 uppercase w-6">Con</span>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm text-gray-600 border-2 border-gray-200">O1</div>
                <div className="w-5"></div>
                <div className="w-10 h-10 rounded-lg border-2 border-gray-200 bg-gray-50 flex items-center justify-center text-[10px] text-gray-400">No</div>
                <div className="w-5"></div>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center font-bold text-sm text-gray-600 border-2 border-gray-200">O2</div>
             </div>
          </div>
          
          {/* Section 3: Scenario - Boxed & Decreased Padding - More Text Added */}
          <div className="flex-1 p-2 bg-white flex flex-col">
             <div className="w-full h-full bg-green-100/60 rounded-2xl p-5 border border-green-200 flex flex-col justify-center">
                 <h4 className="text-xs font-bold text-green-900 mb-2 uppercase tracking-widest border-b border-green-300 pb-1 self-start">Scenario</h4>
                 <p className="text-xl font-bold text-lime-950 leading-tight mb-3">
                    Efficacy of <span className="text-green-800">Supplements</span> in Village A vs Village B.
                 </p>
                 <p className="text-base text-lime-800 leading-relaxed font-medium">
                    Village A gets supplements; Village B gets only education.
                 </p>
                 <p className="text-sm text-green-900 font-bold italic mt-3 bg-white/50 p-2 rounded-lg">
                    "By comparing both, we rule out general factors like a good harvest improving everyone's health."
                 </p>
             </div>
          </div>
          
          {/* Section 4: Pros/Cons - Boxed */}
          <div className="flex-none p-5 pt-0 bg-white flex flex-col gap-3">
            <div className="bg-green-50 rounded-2xl p-4 flex items-center gap-4 border border-green-100">
                <div className="bg-white p-2 rounded-full text-green-600 shadow-sm"><CheckCircle2 className="w-6 h-6" strokeWidth={3} /></div>
                <div>
                    <span className="text-[10px] font-bold text-green-800 uppercase tracking-wider block mb-0.5">Pros</span>
                    <p className="text-xl text-lime-950 font-bold leading-none">Gold Standard.</p>
                </div>
            </div>
            <div className="bg-red-50 rounded-2xl p-4 flex items-center gap-4 border border-red-100">
                <div className="bg-white p-2 rounded-full text-red-500 shadow-sm"><XCircle className="w-6 h-6" strokeWidth={3} /></div>
                <div>
                    <span className="text-[10px] font-bold text-red-800 uppercase tracking-wider block mb-0.5">Cons</span>
                    <p className="text-xl text-lime-950 font-bold leading-none">Ethical Issues.</p>
                </div>
            </div>
          </div>
        </div>

        {/* --- Design 3: Time Series --- */}
        <div 
          className={`flex flex-col bg-white rounded-[2.5rem] border-2 border-amber-300 shadow-lg overflow-hidden h-full transition-all duration-500 delay-700 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          {/* Section 1: Title & Icon - Height Increased */}
          <div className="flex-none flex items-center gap-4 py-10 px-6 bg-amber-100 border-b border-amber-200">
            <div className="bg-white p-3 rounded-2xl shadow-sm text-amber-700 border border-amber-200">
                <Activity className="w-8 h-8" strokeWidth={3} />
            </div>
            <div>
                <h3 className="text-3xl font-bold text-lime-950 leading-none">Time Series</h3>
                <p className="text-sm font-bold text-amber-700 uppercase tracking-widest mt-1">Trend Analysis</p>
            </div>
          </div>

          {/* Section 2: Graphic - Height Increased */}
          <div className="flex-none h-56 bg-white border-b border-amber-200 flex items-end justify-center px-4 pb-6 pt-6 gap-2">
             <div className="w-5 bg-amber-300 h-[30%] rounded-t"></div>
             <div className="w-5 bg-amber-300 h-[40%] rounded-t"></div>
             <div className="w-5 bg-amber-300 h-[35%] rounded-t"></div>
             <div className="w-5 bg-amber-300 h-[50%] rounded-t"></div>
             
             <div className="w-1.5 h-full bg-red-400 border-l border-dashed border-red-400 relative mx-2"></div>
             
             <div className="w-5 bg-amber-700 h-[40%] rounded-t"></div>
             <div className="w-5 bg-amber-800 h-[30%] rounded-t"></div>
             <div className="w-5 bg-amber-900 h-[20%] rounded-t"></div>
             <div className="w-5 bg-amber-950 h-[15%] rounded-t"></div>
          </div>

          {/* Section 3: Scenario - Boxed & Decreased Padding - More Text Added */}
          <div className="flex-1 p-2 bg-white flex flex-col">
             <div className="w-full h-full bg-amber-100/60 rounded-2xl p-5 border border-amber-200 flex flex-col justify-center">
                 <h4 className="text-xs font-bold text-amber-900 mb-2 uppercase tracking-widest border-b border-amber-300 pb-1 self-start">Scenario</h4>
                 <p className="text-xl font-bold text-lime-950 leading-tight mb-3">
                    <span className="text-amber-800">Malaria Cases</span> tracked monthly for 24 months.
                 </p>
                 <p className="text-base text-lime-800 leading-relaxed font-medium">
                    Bed nets are distributed at month 12.
                 </p>
                 <p className="text-sm text-amber-900 font-bold italic mt-3 bg-white/50 p-2 rounded-lg">
                    "We look for a sharp drop after month 12 that stands out from the usual seasonal ups and downs."
                 </p>
             </div>
          </div>
          
          {/* Section 4: Pros/Cons - Boxed */}
          <div className="flex-none p-5 pt-0 bg-white flex flex-col gap-3">
            <div className="bg-green-50 rounded-2xl p-4 flex items-center gap-4 border border-green-100">
                <div className="bg-white p-2 rounded-full text-green-600 shadow-sm"><CheckCircle2 className="w-6 h-6" strokeWidth={3} /></div>
                <div>
                    <span className="text-[10px] font-bold text-green-800 uppercase tracking-wider block mb-0.5">Pros</span>
                    <p className="text-xl text-lime-950 font-bold leading-none">Trends & Seasonality.</p>
                </div>
            </div>
            <div className="bg-red-50 rounded-2xl p-4 flex items-center gap-4 border border-red-100">
                <div className="bg-white p-2 rounded-full text-red-500 shadow-sm"><XCircle className="w-6 h-6" strokeWidth={3} /></div>
                <div>
                    <span className="text-[10px] font-bold text-red-800 uppercase tracking-wider block mb-0.5">Cons</span>
                    <p className="text-xl text-lime-950 font-bold leading-none">Data Dependent.</p>
                </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className={`flex-none mt-5 transition-all duration-1000 delay-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
         <div className="bg-yellow-100 border-l-[6px] border-yellow-500 rounded-r-2xl py-3 px-6 shadow-sm flex items-center justify-between">
            <h4 className="text-xl font-bold text-lime-900 mr-4">Choice depends on:</h4>
            <div className="flex-1 flex justify-around">
                <div className="flex items-center gap-3"><Scale size={24} className="text-green-700" /><span className="text-xl font-bold text-lime-800">Feasibility</span></div>
                <div className="flex items-center gap-3"><HeartHandshake size={24} className="text-red-500" /><span className="text-xl font-bold text-lime-800">Ethics</span></div>
                <div className="flex items-center gap-3"><Wallet size={24} className="text-blue-600" /><span className="text-xl font-bold text-lime-800">Resources</span></div>
            </div>
         </div>
      </div>

    </div>
  );
};

export default EvaluationDesign;