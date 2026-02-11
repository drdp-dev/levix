import React from 'react';
import { SlideProps } from '../../types';
import { MapPin, HelpCircle, AlertTriangle, ShieldCheck, MessageSquare, Users } from 'lucide-react';

const DesignCritiqueActivity: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className={`w-full h-full flex flex-col p-10 relative overflow-hidden bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cornsilk-50 rounded-full blur-3xl translate-y-1/2 translate-x-1/2 opacity-60 pointer-events-none"></div>

      {/* Header */}
      <div className="flex-none mb-8 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-2 bg-olive-100 rounded-full mb-4 text-olive-800 font-bold uppercase tracking-widest transition-all duration-1000 transform scale-0" style={{ transform: isActive ? 'scale(1)' : 'scale(0)' }}>
             <MessageSquare className="w-5 h-5" /> Activity
        </div>
        <h2 className={`text-5xl font-bold text-olive-900 mb-2 transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          Design Critique
        </h2>
      </div>

      {/* Scenario Section */}
      <div className={`flex-none mb-10 transition-all duration-1000 delay-200 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="bg-cornsilk-50 border-l-[12px] border-cornsilk-400 rounded-r-3xl p-8 shadow-sm relative overflow-hidden">
             <div className="absolute right-0 top-0 opacity-10 transform translate-x-1/4 -translate-y-1/4">
                 <Users className="w-64 h-64 text-cornsilk-800" />
             </div>
             
             <h3 className="text-2xl font-bold text-olive-800 mb-2 flex items-center gap-3">
                <MapPin className="w-8 h-8 text-cornsilk-600" />
                Scenario
             </h3>
             <p className="text-4xl text-olive-900 font-medium leading-snug relative z-10">
                You are evaluating an <span className="text-forest-700 font-bold">adolescent reproductive health</span> education program in <span className="underline decoration-wavy decoration-cornsilk-500">two villages</span>.
             </p>
        </div>
      </div>

      {/* Questions Grid */}
      <div className="flex-1 grid grid-cols-3 gap-8 px-2">
        {/* Q1 */}
        <div 
            className={`flex flex-col bg-white border-2 border-blue-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-700 delay-400 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
            <div className="mb-6 p-5 bg-blue-50 rounded-2xl self-start text-blue-600">
                <HelpCircle className="w-12 h-12" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-bold text-blue-800 uppercase tracking-widest mb-4">Control Village?</h4>
            <p className="text-3xl font-bold text-olive-900 leading-tight">
                Would you include a control village in your design? Why or why not?
            </p>
        </div>

        {/* Q2 */}
        <div 
            className={`flex flex-col bg-white border-2 border-red-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-700 delay-600 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
            <div className="mb-6 p-5 bg-red-50 rounded-2xl self-start text-red-500">
                <AlertTriangle className="w-12 h-12" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-bold text-red-800 uppercase tracking-widest mb-4">Potential Biases</h4>
            <p className="text-3xl font-bold text-olive-900 leading-tight">
                What selection or confounding biases could occur in this setting?
            </p>
        </div>

        {/* Q3 */}
        <div 
            className={`flex flex-col bg-white border-2 border-forest-100 rounded-[2rem] p-8 shadow-sm hover:shadow-xl transition-all duration-700 delay-800 transform ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
        >
            <div className="mb-6 p-5 bg-forest-50 rounded-2xl self-start text-forest-600">
                <ShieldCheck className="w-12 h-12" strokeWidth={1.5} />
            </div>
            <h4 className="text-xl font-bold text-forest-800 uppercase tracking-widest mb-4">Minimize Bias</h4>
            <p className="text-3xl font-bold text-olive-900 leading-tight">
                How would you design the study to minimize these biases?
            </p>
        </div>
      </div>

      {/* Footer */}
      <div className={`flex-none mt-8 text-center transition-all duration-1000 delay-1000 transform ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        <p className="text-2xl text-olive-400 font-bold tracking-wide uppercase">
            Encourage methodological critique
        </p>
      </div>

    </div>
  );
};

export default DesignCritiqueActivity;