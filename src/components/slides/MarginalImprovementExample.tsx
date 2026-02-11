import React from 'react';
import { SlideProps } from '../../types';
import { TrendingUp, Calculator, Scale, AlertOctagon, ArrowUpRight, Target, Users } from 'lucide-react';

const MarginalImprovementExample: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className={`w-full h-full flex flex-col p-10 relative overflow-hidden bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background Decor */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

      {/* Header */}
      <div className="flex-none mb-8">
         <div className="flex items-center gap-4">
            <div className="p-3 bg-gray-100 rounded-2xl">
                 <TrendingUp className="w-10 h-10 text-gray-700" />
            </div>
            <div>
                <h2 className={`text-4xl font-bold text-lime-950 transition-all duration-1000 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    Example: Marginal Knowledge Improvement
                </h2>
                <h3 className={`text-2xl text-gray-500 font-medium transition-all duration-1000 delay-200 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                    The Ceiling Effect
                </h3>
            </div>
         </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col gap-8 px-4">
        
        {/* Data Visualization */}
        <div className={`bg-white border-2 border-gray-100 rounded-3xl p-8 shadow-sm transition-all duration-1000 delay-300 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h4 className="text-xl font-bold text-gray-500 uppercase tracking-widest mb-6">Knowledge Score Change</h4>
            
            {/* 90% Bar */}
            <div className="mb-6">
                <div className="flex justify-between text-xl font-bold text-lime-900 mb-2">
                    <span>Baseline</span>
                    <span>90%</span>
                </div>
                <div className="w-full h-10 bg-gray-100 rounded-full overflow-hidden shadow-inner">
                    <div 
                        className="h-full bg-blue-300 rounded-full transition-all duration-1000 ease-out delay-500 flex items-center justify-end px-4"
                        style={{ width: isActive ? '90%' : '0%' }}
                    >
                    </div>
                </div>
            </div>

            {/* 95% Bar */}
            <div>
                <div className="flex justify-between text-xl font-bold text-lime-900 mb-2">
                    <span>Post-Intervention</span>
                    <span className="text-green-700 flex items-center gap-2">95% <ArrowUpRight className="w-5 h-5" /></span>
                </div>
                <div className="w-full h-10 bg-gray-100 rounded-full overflow-hidden shadow-inner relative">
                     {/* The base 90% visual ref */}
                     <div className="absolute top-0 bottom-0 left-[90%] w-0.5 bg-white/50 z-10"></div>
                     <div 
                        className="h-full bg-green-600 rounded-full transition-all duration-1000 ease-out delay-700 flex items-center justify-end px-4 text-white font-bold"
                        style={{ width: isActive ? '95%' : '0%' }}
                    >
                        {isActive && <span className="animate-pulse">+5%</span>}
                    </div>
                </div>
            </div>
        </div>

        {/* Interpretation Grid */}
        <div className="grid grid-cols-2 gap-4">
            {/* Stat Significant */}
            <div className={`p-5 bg-blue-50 border-l-[12px] border-blue-400 rounded-r-2xl shadow-sm transition-all duration-700 delay-500 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <div className="flex items-center gap-4 mb-2">
                    <Calculator className="w-7 h-7 text-blue-600" strokeWidth={2} />
                    <h4 className="text-lg font-bold text-blue-800">Statistically Significant?</h4>
                </div>
                <p className="text-3xl font-bold text-lime-950 mt-2">Possibly Yes</p>
                <p className="text-base text-blue-600 font-medium mt-1 opacity-80">(p &lt; 0.05)</p>
            </div>

            {/* Program Meaningful */}
            <div className={`p-5 bg-amber-50 border-l-[12px] border-amber-400 rounded-r-2xl shadow-sm transition-all duration-700 delay-700 transform ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="flex items-center gap-4 mb-2">
                    <Scale className="w-7 h-7 text-amber-600" strokeWidth={2} />
                    <h4 className="text-lg font-bold text-amber-800">Programmatically Meaningful?</h4>
                </div>
                <p className="text-3xl font-bold text-lime-950 mt-2">Likely Minimal</p>
                <p className="text-base text-amber-700 font-medium mt-1 opacity-80">High effort, low yield</p>
            </div>

            {/* Real-world Impact */}
            <div className={`p-5 bg-green-100 border-l-[12px] border-green-500 rounded-r-2xl shadow-sm transition-all duration-700 delay-900 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
                <div className="flex items-center gap-4 mb-2">
                    <Users className="w-7 h-7 text-green-700" strokeWidth={2} />
                    <h4 className="text-lg font-bold text-green-900">Real-world Impact?</h4>
                </div>
                <p className="text-3xl font-bold text-lime-950 mt-2">Negligible</p>
                <p className="text-base text-green-800 font-medium mt-1 opacity-80">Already near maximum</p>
            </div>

            {/* Resource Justification */}
            <div className={`p-5 bg-red-50 border-l-[12px] border-red-400 rounded-r-2xl shadow-sm transition-all duration-700 delay-1100 transform ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
                <div className="flex items-center gap-4 mb-2">
                    <Target className="w-7 h-7 text-red-600" strokeWidth={2} />
                    <h4 className="text-lg font-bold text-red-800">Resource Justification?</h4>
                </div>
                <p className="text-3xl font-bold text-lime-950 mt-2">Questionable</p>
                <p className="text-base text-red-700 font-medium mt-1 opacity-80">Better targets exist</p>
            </div>
        </div>

      </div>

      {/* Footer Insight */}
      <div className={`flex-none mt-6 bg-gray-50 border-2 border-dashed border-gray-300 rounded-2xl p-6 flex items-center gap-6 transition-all duration-1000 delay-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <div className="p-3 bg-white rounded-full text-gray-600 shadow-sm border border-gray-200">
             <AlertOctagon className="w-10 h-10" />
        </div>
        <p className="text-2xl font-medium text-gray-700">
            Evaluation must consider <span className="font-bold text-lime-950 border-b-4 border-lime-400">baseline saturation</span> (ceiling effect).
        </p>
      </div>

    </div>
  );
};

export default MarginalImprovementExample;