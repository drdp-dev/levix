import React, { useEffect, useState } from 'react';
import { SlideProps } from '../../types';
import { BookOpen, Building2, GraduationCap, HeartHandshake, Sparkles, Award, Trophy, Star, Target, Users, TrendingUp, HeartPulse, Leaf, BrainCircuit, CheckCircle2, Lightbulb, Rocket, Zap } from 'lucide-react';

const ThankYou: React.FC<SlideProps> = ({ isActive }) => {
  const [confetti, setConfetti] = useState<Array<{ id: number; icon: any; x: number; y: number; delay: number; duration: number; size: number; color: string }>>([]);

  useEffect(() => {
    if (isActive) {
      const icons = [Sparkles, Award, Trophy, Star, HeartHandshake, Target, Users, TrendingUp, HeartPulse, Leaf, BrainCircuit, CheckCircle2, Lightbulb, Rocket, Zap];
      const colors = ['text-lime-1000', 'text-green-600', 'text-amber-600', 'text-yellow-700', 'text-orange-600', 'text-blue-500', 'text-amber-500', 'text-red-500'];
      
      let id = 0;
      const addConfetti = () => {
        const newItem = {
          id: Date.now() + id++,
          icon: icons[Math.floor(Math.random() * icons.length)],
          x: Math.random() * 100,
          y: -10,
          delay: 0,
          duration: 3000 + Math.random() * 2000,
          size: 32 + Math.random() * 32,
          color: colors[Math.floor(Math.random() * colors.length)],
        };
        setConfetti(prev => [...prev.slice(-49), newItem]);
      };

      const interval = setInterval(addConfetti, 200);
      return () => clearInterval(interval);
    } else {
      setConfetti([]);
    }
  }, [isActive]);

  const references = [
    "Park K. Park’s Textbook of Preventive and Social Medicine. Latest Edition.",
    "National Health Mission (India). IEC/BCC Operational Guidelines.",
    "WHO. Health Promotion Evaluation: Recommendations to Policy-Makers.",
    "CDC Framework for Program Evaluation in Public Health."
  ];

  return (
    <div className={`w-full h-full flex flex-col p-12 relative bg-white transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
        {/* Background */}
        <div className="absolute top-0 left-0 w-3/4 h-3/4 bg-lime-100 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none animate-drift"></div>
        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 bg-yellow-100 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-60 pointer-events-none animate-drift" style={{ animationDelay: '3s' }}></div>

        {/* Confetti - Behind content */}
        {confetti.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="absolute pointer-events-none animate-confetti-fall z-0"
              style={{
                left: `${item.x}%`,
                top: `${item.y}%`,
                animationDelay: `${item.delay}ms`,
                animationDuration: `${item.duration}ms`,
              }}
            >
              <Icon className={`${item.color}`} style={{ width: `${item.size}px`, height: `${item.size}px` }} strokeWidth={2.5} />
            </div>
          );
        })}

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center relative z-10">
            
            {/* Thank You Section */}
            <div className={`text-center mb-12 transition-all duration-1000 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} animate-float`}>
                <div className="inline-block p-6 bg-lime-200 rounded-full mb-6 text-lime-900 shadow-sm hover:shadow-lg transition-shadow duration-300">
                     <HeartHandshake className="w-20 h-20 animate-pulse" strokeWidth={1.5} />
                </div>
                <h1 className="text-7xl font-bold text-lime-950 tracking-tight">Thank You</h1>
            </div>

            {/* Presenter Details */}
            <div className={`flex flex-col items-center gap-2 mb-16 transition-all duration-1000 delay-300 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                 <h2 className="text-4xl font-bold text-amber-800 hover:text-amber-900 transition-colors">Dr. Devaprasad Reddy</h2>
                 <div className="flex items-center gap-3 text-2xl text-lime-800 font-medium mt-2">
                    <GraduationCap className="w-6 h-6" />
                    <span>Tutor</span>
                 </div>
                 <div className="flex items-center gap-3 text-xl text-lime-700">
                    <Building2 className="w-5 h-5" />
                    <span>Department of Community Medicine</span>
                 </div>
            </div>

            {/* References Section */}
            <div className={`w-full max-w-4xl bg-white/80 backdrop-blur border-2 border-lime-200 rounded-3xl p-8 shadow-sm transition-all duration-1000 delay-700 transform ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'} hover:shadow-xl hover:border-lime-300 transition-all`}>
                <div className="flex items-center gap-3 mb-6 border-b border-lime-200 pb-3">
                    <BookOpen className="w-8 h-8 text-green-700" />
                    <h3 className="text-2xl font-bold text-lime-900 uppercase tracking-wide">References</h3>
                </div>
                <ul className="space-y-4">
                    {references.map((ref, idx) => (
                        <li key={idx} className="flex items-start gap-4 text-lg text-lime-800 hover:text-lime-950 hover:translate-x-2 transition-all duration-300 cursor-default">
                            <div className="w-2 h-2 rounded-full bg-green-500 mt-2.5 flex-shrink-0"></div>
                            <span>{ref}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  );
};

export default ThankYou;