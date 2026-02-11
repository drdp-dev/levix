import React from 'react';
import { SlideProps } from '../../types';
import { CigaretteOff, XCircle, CheckCircle2, BarChart3, History, Scale } from 'lucide-react';

const TobaccoExample: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className={`w-full h-full flex flex-col p-10 relative bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        {/* Background Element */}
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 pointer-events-none"></div>

        {/* Header */}
        <div className="flex-none mb-8 relative z-10">
            <div className="flex items-center gap-4 mb-2 transition-all duration-700 transform translate-x-0">
                 <div className="p-3 bg-red-100 rounded-full shadow-sm">
                    <CigaretteOff className="w-10 h-10 text-red-600" strokeWidth={2} />
                 </div>
                 <div>
                    <h2 className="text-4xl font-bold text-lime-950">National Tobacco Control Programme</h2>
                    <p className="text-2xl text-lime-700 font-medium mt-1">IEC Component Evaluation Example</p>
                 </div>
            </div>
        </div>

        {/* Comparison Section */}
        <div className="flex-1 flex flex-col justify-center gap-6 mb-4 relative z-10">
            {/* Vague */}
            <div className={`flex items-center p-8 bg-gray-50 border-l-8 border-gray-400 rounded-r-2xl shadow-sm transition-all duration-700 delay-200 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                <XCircle className="w-14 h-14 text-gray-400 mr-8 flex-shrink-0" strokeWidth={1.5} />
                <div>
                    <h3 className="text-xl font-bold text-gray-500 uppercase tracking-widest mb-1">Vague Objective</h3>
                    <p className="text-4xl text-gray-600 italic font-serif">"Create awareness about harms of tobacco."</p>
                </div>
            </div>

            {/* Clear */}
             <div className={`flex items-center p-10 bg-green-100 border-l-8 border-green-600 rounded-r-2xl shadow-md transition-all duration-700 delay-500 transform ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                <CheckCircle2 className="w-16 h-16 text-green-700 mr-8 flex-shrink-0" strokeWidth={2} />
                <div>
                    <h3 className="text-xl font-bold text-green-700 uppercase tracking-widest mb-3">Clear Objective</h3>
                    <p className="text-5xl text-lime-950 font-bold leading-tight">
                        Increase proportion of <span className="text-blue-700 bg-blue-50 px-2 rounded-lg">adults</span> who can identify <span className="text-amber-700 bg-amber-100 px-2 rounded-lg">≥3 harms</span> of smokeless tobacco from <span className="text-red-600 bg-red-50 px-2 rounded-lg">40% to 70%</span> in <span className="text-lime-800 bg-lime-200 px-2 rounded-lg">6 months</span>.
                    </p>
                </div>
            </div>
        </div>

        {/* Benefits Section */}
        <div className={`flex-none bg-lime-100 rounded-2xl p-6 mt-4 transition-all duration-1000 delay-700 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <h4 className="text-lg font-bold text-lime-900 mb-4 border-b border-lime-300 pb-2 uppercase tracking-wide">This Specificity Allows:</h4>
            <div className="grid grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center gap-3 group">
                    <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <History className="w-8 h-8 text-amber-700" />
                    </div>
                    <span className="text-xl font-semibold text-lime-950">Baseline Assessment</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group">
                     <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <Scale className="w-8 h-8 text-blue-600" />
                    </div>
                    <span className="text-xl font-semibold text-lime-950">Post-intervention Comparison</span>
                </div>
                <div className="flex flex-col items-center text-center gap-3 group">
                     <div className="p-3 bg-white rounded-full shadow-sm group-hover:scale-110 transition-transform duration-300">
                        <BarChart3 className="w-8 h-8 text-green-700" />
                    </div>
                    <span className="text-xl font-semibold text-lime-950">Measurable Outcome Tracking</span>
                </div>
            </div>
        </div>
    </div>
  );
};

export default TobaccoExample;