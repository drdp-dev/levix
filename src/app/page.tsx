'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Presentation, Target, TrendingUp, Users } from 'lucide-react';
import { Expletus_Sans } from 'next/font/google';

const expletus = Expletus_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Header */}
      <header className="border-b border-gray-700 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <Image src="/icon1.png" alt="LEVIX Logo" width={48} height={48} className="rounded-xl" />
            <h1 className={`text-3xl font-black text-[#ffdc00] tracking-tight ${expletus.className}`}>LEVIX</h1>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <Image src="/icon1.png" alt="LEVIX" width={120} height={120} className="rounded-3xl shadow-2xl" />
          </div>
          <h2 className={`text-6xl font-black text-white mb-6 tracking-tight ${expletus.className}`}>
            Interactive Presentation
            <br />
            <span className="text-[#ffdc00]">Platform</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A professional, large-screen optimized presentation application for creating and delivering engaging interactive presentations
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#1a1a1a] rounded-3xl p-8 shadow-sm border border-[#2a2a2a] hover:shadow-lg hover:border-[#ffdc00]/50 transition-all">
            <div className="w-16 h-16 bg-[#2a2a2a] rounded-2xl flex items-center justify-center mb-4">
              <Presentation className="w-8 h-8 text-[#ffdc00]" />
            </div>
            <h3 className={`text-xl font-bold text-white mb-2 ${expletus.className}`}>Interactive Slides</h3>
            <p className="text-gray-400">Smooth animations, transitions, and engaging visual elements</p>
          </div>

          <div className="bg-[#1a1a1a] rounded-3xl p-8 shadow-sm border border-[#2a2a2a] hover:shadow-lg hover:border-[#ffdc00]/50 transition-all">
            <div className="w-16 h-16 bg-[#2a2a2a] rounded-2xl flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-[#ffdc00]" />
            </div>
            <h3 className={`text-xl font-bold text-white mb-2 ${expletus.className}`}>Rich Content</h3>
            <p className="text-gray-400">Support for examples, case studies, and interactive elements</p>
          </div>

          <div className="bg-[#1a1a1a] rounded-3xl p-8 shadow-sm border border-[#2a2a2a] hover:shadow-lg hover:border-[#ffdc00]/50 transition-all">
            <div className="w-16 h-16 bg-[#2a2a2a] rounded-2xl flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-[#ffdc00]" />
            </div>
            <h3 className={`text-xl font-bold text-white mb-2 ${expletus.className}`}>Structured Flow</h3>
            <p className="text-gray-400">Organized navigation with radial progress indicator</p>
          </div>

          <div className="bg-[#1a1a1a] rounded-3xl p-8 shadow-sm border border-[#2a2a2a] hover:shadow-lg hover:border-[#ffdc00]/50 transition-all">
            <div className="w-16 h-16 bg-[#2a2a2a] rounded-2xl flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-[#ffdc00]" />
            </div>
            <h3 className={`text-xl font-bold text-white mb-2 ${expletus.className}`}>Professional Design</h3>
            <p className="text-gray-400">Clean, modern interface optimized for large displays</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/presentations"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#ffdc00] hover:bg-[#ffd700] text-black text-xl font-bold rounded-full transition-colors shadow-lg hover:shadow-xl"
          >
            <Presentation className="w-6 h-6" />
            Explore LEVIX
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 bg-black/50 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-gray-400">
          <p className="text-lg">© 2026 drdp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
