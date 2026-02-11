import React from 'react';
import { SlideProps } from '../../types';
import { HeartPulse, Activity, ChevronDown, Stethoscope, BookOpen } from 'lucide-react';

const Hero: React.FC<SlideProps> = ({ isActive }) => {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center relative overflow-hidden bg-white transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: 'radial-gradient(#4a5568 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      {/* Abstract Shapes */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-olive-100/40 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-gradient-to-tr from-blue-50/40 to-transparent rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 animate-pulse" style={{ animationDuration: '10s' }}></div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl px-4">
        
        {/* Animated Icon Cluster */}
        <div className={`mb-12 relative transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'}`}>
           <div className="absolute inset-0 bg-olive-100 rounded-full blur-2xl opacity-50 animate-pulse"></div>
           <div className="relative bg-white p-8 rounded-[2.5rem] shadow-2xl border-4 border-olive-50 flex items-center justify-center gap-6">
              <Activity className="w-16 h-16 text-olive-600 animate-bounce" strokeWidth={2} style={{ animationDuration: '3s' }} />
              <div className="w-px h-16 bg-olive-200"></div>
              <HeartPulse className="w-20 h-20 text-red-500 animate-pulse" strokeWidth={2} style={{ animationDuration: '2s' }} />
              <div className="w-px h-16 bg-olive-200"></div>
              <BookOpen className="w-16 h-16 text-blue-600 animate-bounce" strokeWidth={2} style={{ animationDuration: '3.5s' }} />
           </div>
        </div>

        {/* Title Group */}
        <div className="space-y-2">
            <h2 className={`text-4xl font-medium text-gray-500 uppercase tracking-[0.2em] transition-all duration-1000 delay-300 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                Evaluation of
            </h2>
            
            <h1 className="flex flex-col gap-2">
                <span className={`text-8xl font-black text-olive-900 tracking-tight leading-none transition-all duration-1000 delay-500 transform ${isActive ? 'translate-x-0 opacity-100' : '-translate-x-20 opacity-0'}`}>
                    Health <span className="text-transparent bg-clip-text bg-gradient-to-r from-olive-600 to-forest-600">Promotion</span>
                </span>
                <span className={`text-6xl font-bold text-gray-300 transition-all duration-1000 delay-700 transform ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}>
                    &
                </span>
                <span className={`text-8xl font-black text-olive-900 tracking-tight leading-none transition-all duration-1000 delay-900 transform ${isActive ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'}`}>
                    Health <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Education</span>
                </span>
            </h1>
            
            <h2 className={`text-4xl font-light text-gray-400 uppercase tracking-[0.2em] mt-4 transition-all duration-1000 delay-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                Programs
            </h2>
        </div>

        {/* Presenter Badge */}
        <div className={`mt-16 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full pl-3 pr-8 py-3 shadow-lg flex items-center gap-4 transition-all duration-1000 delay-[1200ms] transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:scale-105 hover:shadow-xl`}>
            <div className="w-16 h-16 bg-gradient-to-br from-olive-500 to-olive-700 rounded-full flex items-center justify-center text-white shadow-inner">
                <Stethoscope className="w-8 h-8" />
            </div>
            <div className="text-left">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Presented By</p>
                <p className="text-2xl font-bold text-olive-900">Dr. Devaprasad Reddy</p>
            </div>
        </div>

      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-10 flex flex-col items-center gap-2 transition-all duration-1000 delay-[1500ms] ${isActive ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
         <span className="text-sm font-bold text-gray-400 uppercase tracking-widest animate-pulse">Start Presentation</span>
         <ChevronDown className="w-8 h-8 text-gray-300 animate-bounce" />
      </div>

    </div>
  );
};

export default Hero;