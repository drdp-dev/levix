import React from 'react';
import { SlideProps } from '../../types';
import { RefreshCcw, Coins, CalendarClock, TrendingUp, AlertTriangle, Megaphone } from 'lucide-react';

const FeedbackUtilization: React.FC<SlideProps> = ({ isActive }) => {
  const actions = [
    { text: "Modify IEC strategies", icon: RefreshCcw, color: "text-blue-600", bg: "bg-blue-50", border: "border-blue-200", delay: 300 },
    { text: "Reallocate resources", icon: Coins, color: "text-amber-700", bg: "bg-amber-100", border: "border-amber-300", delay: 500 },
    { text: "Change implementation timing", icon: CalendarClock, color: "text-orange-700", bg: "bg-orange-100", border: "border-orange-300", delay: 700 },
    { text: "Scale up effective components", icon: TrendingUp, color: "text-green-700", bg: "bg-green-100", border: "border-green-300", delay: 900 },
  ];

  return (
    <div className={`w-full h-full flex flex-col p-10 relative overflow-hidden bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Background Decor */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-yellow-100 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 opacity-60 pointer-events-none"></div>

      {/* Header */}
      <div className="flex-none mb-10 text-center">
        <h2 className={`text-5xl font-bold text-olive-900 mb-6 transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}`}>
          Step 7: Feedback and Utilization of Findings
        </h2>
        <div className={`inline-block px-10 py-4 bg-olive-100 rounded-full transition-all duration-1000 delay-200 transform ${isActive ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
            <p className="text-3xl font-bold text-olive-800 flex items-center gap-4">
                <Megaphone className="w-8 h-8" />
                Evaluation must lead to <span className="underline decoration-wavy decoration-olive-500 underline-offset-4">action</span>.
            </p>
        </div>
      </div>

      {/* Action Grid */}
      <div className="flex-1 grid grid-cols-2 gap-8 px-12">
        {actions.map((action, idx) => (
            <div 
                key={idx}
                className={`flex items-center p-8 bg-white border-l-[16px] ${action.border} ${action.bg} rounded-r-3xl shadow-sm transition-all duration-700 transform hover:scale-105 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
                style={{ transitionDelay: `${action.delay}ms` }}
            >
                <div className={`p-5 bg-white rounded-full mr-8 shadow-sm ${action.color}`}>
                    <action.icon className="w-12 h-12" strokeWidth={2} />
                </div>
                <span className="text-3xl font-bold text-olive-900">{action.text}</span>
            </div>
        ))}
      </div>

      {/* Warning Footer */}
      <div className={`flex-none mt-10 mx-auto max-w-5xl bg-red-50 border-2 border-red-200 rounded-3xl p-8 flex items-center justify-center gap-8 shadow-lg transition-all duration-1000 delay-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
        <AlertTriangle className="w-14 h-14 text-red-500 animate-pulse" strokeWidth={2.5} />
        <p className="text-4xl font-bold text-red-900 tracking-wide text-center">
             "Evaluation without feedback is <span className="underline decoration-4 decoration-red-300 underline-offset-4">wasted effort</span>."
        </p>
      </div>

    </div>
  );
};

export default FeedbackUtilization;