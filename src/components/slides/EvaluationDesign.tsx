import React from 'react';
import { SlideProps } from '../../types';
import { ArrowRight, Users, Activity, Scale, HeartHandshake, Wallet, CheckCircle2, XCircle } from 'lucide-react';

const EvaluationDesign: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className={`w-full h-full flex flex-col p-8 relative overflow-hidden bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Header */}
      <div className="flex-none mb-6 text-center">
        <h2 className={`text-5xl font-bold text-olive-900 mb-2 transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          Step 4: Choosing Evaluation Design
        </h2>
        <div className={`h-1.5 w-48 bg-olive-200 mx-auto rounded-full transition-all duration-1000 delay-200 transform ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}></div>
      </div>

      {/* Main Content - Designs Grid */}
      <div className="flex-1 grid grid-cols-3 gap-8 min-h-0 px-2">
        
        {/* --- Design 1: Before-After --- */}
        <div 
          className={`flex flex-col bg-white rounded-[2.5rem] border-2 border-clay-200 shadow-lg overflow-hidden h-full transition-all duration-500 delay-300 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          {/* Section 1: Title & Icon - Height Increased */}
          <div className="flex-none flex items-center gap-4 py-10 px-6 bg-clay-50 border-b border-clay-100">
            <div className="bg-white p-3 rounded-2xl shadow-sm text-clay-600 border border-clay-100">
                <ArrowRight className="w-8 h-8" strokeWidth={3} />
            </div>
            <div>
                <h3 className="text-3xl font-bold text-olive-900 leading-none">Before–After</h3>
                <p className="text-sm font-bold text-clay-600 uppercase tracking-widest mt-1">Pre & Post Test</p>
            </div>
          </div>

          {/* Section 2: Graphic - Height Increased significantly */}
          <div className="flex-none h-56 bg-white border-b border-clay-100 flex items-center justify-center gap-3">
             <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-clay-50 flex items-center justify-center font-bold text-2xl text-clay-700 border-4 border-clay-200">O1</div>
                <span className="text-xs font-bold text-clay-400 mt-2 uppercase">Base</span>
             </div>
             <ArrowRight className="w-8 h-8 text-clay-300" strokeWidth={4} />
             <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-2xl bg-clay-600 flex items-center justify-center font-bold text-3xl text-white shadow-lg transform rotate-3">X</div>
                <span className="text-xs font-bold text-clay-600 mt-2 uppercase">Int</span>
             </div>
             <ArrowRight className="w-8 h-8 text-clay-300" strokeWidth={4} />
             <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-clay-50 flex items-center justify-center font-bold text-2xl text-clay-700 border-4 border-clay-200">O2</div>
                <span className="text-xs font-bold text-clay-400 mt-2 uppercase">End</span>
             </div>
          </div>
          
          {/* Section 3: Scenario - Boxed & Decreased Padding - More Text Added */}
          <div className="flex-1 p-2 bg-white flex flex-col">
             <div className="w-full h-full bg-clay-50/60 rounded-2xl p-5 border border-clay-100 flex flex-col justify-center">
                 <h4 className="text-xs font-bold text-clay-800 mb-2 uppercase tracking-widest border-b border-clay-200 pb-1 self-start">Scenario</h4>
                 <p className="text-xl font-bold text-olive-900 leading-tight mb-3">
                    Evaluating a <span className="text-clay-700">Dengue Workshop</span> for high school students.
                 </p>
                 <p className="text-base text-olive-700 leading-relaxed font-medium">
                    We administer a knowledge test at 9:00 AM, deliver the lecture, and repeat the test at 11:00 AM.
                 </p>
                 <p className="text-sm text-clay-800 font-bold italic mt-3 bg-white/50 p-2 rounded-lg">
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
                    <p className="text-xl text-olive-900 font-bold leading-none">Simple & Fast.</p>
                </div>
            </div>
            <div className="bg-red-50 rounded-2xl p-4 flex items-center gap-4 border border-red-100">
                <div className="bg-white p-2 rounded-full text-red-500 shadow-sm"><XCircle className="w-6 h-6" strokeWidth={3} /></div>
                <div>
                    <span className="text-[10px] font-bold text-red-800 uppercase tracking-wider block mb-0.5">Cons</span>
                    <p className="text-xl text-olive-900 font-bold leading-none">Weak Validity.</p>
                </div>
            </div>
          </div>
        </div>

        {/* --- Design 2: Control Group --- */}
        <div 
          className={`flex flex-col bg-white rounded-[2.5rem] border-2 border-forest-200 shadow-lg overflow-hidden h-full transition-all duration-500 delay-500 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
           {/* Section 1: Title & Icon - Height Increased */}
           <div className="flex-none flex items-center gap-4 py-10 px-6 bg-forest-50 border-b border-forest-100">
            <div className="bg-white p-3 rounded-2xl shadow-sm text-forest-600 border border-forest-100">
                <Users className="w-8 h-8" strokeWidth={3} />
            </div>
            <div>
                <h3 className="text-3xl font-bold text-olive-900 leading-none">Control Group</h3>
                <p className="text-sm font-bold text-forest-600 uppercase tracking-widest mt-1">Intervention vs Control</p>
            </div>
          </div>

          {/* Section 2: Graphic - Height Increased */}
          <div className="flex-none h-56 bg-white border-b border-forest-100 flex flex-col justify-center gap-6 px-4">
             {/* Int */}
             <div className="flex items-center w-full justify-between">
                <span className="text-[10px] font-bold text-forest-600 uppercase w-6">Int</span>
                <div className="w-10 h-10 rounded-full bg-forest-50 flex items-center justify-center font-bold text-sm text-forest-700 border-2 border-forest-200">O1</div>
                <ArrowRight className="w-5 h-5 text-forest-300" strokeWidth={3} />
                <div className="w-10 h-10 rounded-lg bg-forest-500 flex items-center justify-center font-bold text-white text-xl shadow">X</div>
                <ArrowRight className="w-5 h-5 text-forest-300" strokeWidth={3} />
                <div className="w-10 h-10 rounded-full bg-forest-50 flex items-center justify-center font-bold text-sm text-forest-700 border-2 border-forest-200">O2</div>
             </div>
             <div className="w-full border-t border-dashed border-forest-200"></div>
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
             <div className="w-full h-full bg-forest-50/60 rounded-2xl p-5 border border-forest-100 flex flex-col justify-center">
                 <h4 className="text-xs font-bold text-forest-800 mb-2 uppercase tracking-widest border-b border-forest-200 pb-1 self-start">Scenario</h4>
                 <p className="text-xl font-bold text-olive-900 leading-tight mb-3">
                    Efficacy of <span className="text-forest-700">Supplements</span> in Village A vs Village B.
                 </p>
                 <p className="text-base text-olive-700 leading-relaxed font-medium">
                    Village A gets supplements; Village B gets only education.
                 </p>
                 <p className="text-sm text-forest-800 font-bold italic mt-3 bg-white/50 p-2 rounded-lg">
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
                    <p className="text-xl text-olive-900 font-bold leading-none">Gold Standard.</p>
                </div>
            </div>
            <div className="bg-red-50 rounded-2xl p-4 flex items-center gap-4 border border-red-100">
                <div className="bg-white p-2 rounded-full text-red-500 shadow-sm"><XCircle className="w-6 h-6" strokeWidth={3} /></div>
                <div>
                    <span className="text-[10px] font-bold text-red-800 uppercase tracking-wider block mb-0.5">Cons</span>
                    <p className="text-xl text-olive-900 font-bold leading-none">Ethical Issues.</p>
                </div>
            </div>
          </div>
        </div>

        {/* --- Design 3: Time Series --- */}
        <div 
          className={`flex flex-col bg-white rounded-[2.5rem] border-2 border-copper-200 shadow-lg overflow-hidden h-full transition-all duration-500 delay-700 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          {/* Section 1: Title & Icon - Height Increased */}
          <div className="flex-none flex items-center gap-4 py-10 px-6 bg-copper-50 border-b border-copper-100">
            <div className="bg-white p-3 rounded-2xl shadow-sm text-copper-600 border border-copper-100">
                <Activity className="w-8 h-8" strokeWidth={3} />
            </div>
            <div>
                <h3 className="text-3xl font-bold text-olive-900 leading-none">Time Series</h3>
                <p className="text-sm font-bold text-copper-600 uppercase tracking-widest mt-1">Trend Analysis</p>
            </div>
          </div>

          {/* Section 2: Graphic - Height Increased */}
          <div className="flex-none h-56 bg-white border-b border-copper-100 flex items-end justify-center px-4 pb-6 pt-6 gap-2">
             <div className="w-5 bg-copper-200 h-[30%] rounded-t"></div>
             <div className="w-5 bg-copper-200 h-[40%] rounded-t"></div>
             <div className="w-5 bg-copper-200 h-[35%] rounded-t"></div>
             <div className="w-5 bg-copper-200 h-[50%] rounded-t"></div>
             
             <div className="w-1.5 h-full bg-red-400 border-l border-dashed border-red-400 relative mx-2"></div>
             
             <div className="w-5 bg-copper-600 h-[40%] rounded-t"></div>
             <div className="w-5 bg-copper-700 h-[30%] rounded-t"></div>
             <div className="w-5 bg-copper-800 h-[20%] rounded-t"></div>
             <div className="w-5 bg-copper-900 h-[15%] rounded-t"></div>
          </div>

          {/* Section 3: Scenario - Boxed & Decreased Padding - More Text Added */}
          <div className="flex-1 p-2 bg-white flex flex-col">
             <div className="w-full h-full bg-copper-50/60 rounded-2xl p-5 border border-copper-100 flex flex-col justify-center">
                 <h4 className="text-xs font-bold text-copper-800 mb-2 uppercase tracking-widest border-b border-copper-200 pb-1 self-start">Scenario</h4>
                 <p className="text-xl font-bold text-olive-900 leading-tight mb-3">
                    <span className="text-copper-700">Malaria Cases</span> tracked monthly for 24 months.
                 </p>
                 <p className="text-base text-olive-700 leading-relaxed font-medium">
                    Bed nets are distributed at month 12.
                 </p>
                 <p className="text-sm text-copper-800 font-bold italic mt-3 bg-white/50 p-2 rounded-lg">
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
                    <p className="text-xl text-olive-900 font-bold leading-none">Trends & Seasonality.</p>
                </div>
            </div>
            <div className="bg-red-50 rounded-2xl p-4 flex items-center gap-4 border border-red-100">
                <div className="bg-white p-2 rounded-full text-red-500 shadow-sm"><XCircle className="w-6 h-6" strokeWidth={3} /></div>
                <div>
                    <span className="text-[10px] font-bold text-red-800 uppercase tracking-wider block mb-0.5">Cons</span>
                    <p className="text-xl text-olive-900 font-bold leading-none">Data Dependent.</p>
                </div>
            </div>
          </div>
        </div>

      </div>

      {/* Footer */}
      <div className={`flex-none mt-5 transition-all duration-1000 delay-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
         <div className="bg-cornsilk-50 border-l-[6px] border-cornsilk-400 rounded-r-2xl py-3 px-6 shadow-sm flex items-center justify-between">
            <h4 className="text-xl font-bold text-olive-800 mr-4">Choice depends on:</h4>
            <div className="flex-1 flex justify-around">
                <div className="flex items-center gap-3"><Scale size={24} className="text-forest-600" /><span className="text-xl font-bold text-olive-700">Feasibility</span></div>
                <div className="flex items-center gap-3"><HeartHandshake size={24} className="text-red-500" /><span className="text-xl font-bold text-olive-700">Ethics</span></div>
                <div className="flex items-center gap-3"><Wallet size={24} className="text-blue-600" /><span className="text-xl font-bold text-olive-700">Resources</span></div>
            </div>
         </div>
      </div>

    </div>
  );
};

export default EvaluationDesign;