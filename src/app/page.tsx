'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Presentation, Target, TrendingUp, Users } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-olive-50 via-white to-cornsilk-50">
      {/* Header */}
      <header className="border-b border-olive-100 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image src="/icon1.png" alt="LEVIX Logo" width={48} height={48} className="rounded-xl" />
            <h1 className="text-3xl font-black text-olive-900 tracking-tight">LEVIX</h1>
          </div>
          <Link 
            href="/presentation"
            className="px-6 py-3 bg-olive-600 hover:bg-olive-700 text-white font-bold rounded-full transition-colors"
          >
            Launch Presentation
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <Image src="/icon1.png" alt="LEVIX" width={120} height={120} className="rounded-3xl shadow-2xl" />
          </div>
          <h2 className="text-6xl font-black text-olive-900 mb-6 tracking-tight">
            Health Program Evaluation
            <br />
            <span className="text-forest-600">Made Interactive</span>
          </h2>
          <p className="text-2xl text-olive-700 max-w-3xl mx-auto leading-relaxed">
            A professional, large-screen optimized presentation application for Health Promotion & Education Program Evaluation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-sm border border-olive-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
              <Presentation className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-olive-900 mb-2">Interactive Slides</h3>
            <p className="text-olive-600">23 comprehensive slides with animations and real-world examples</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-olive-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-forest-50 rounded-2xl flex items-center justify-center mb-4">
              <Target className="w-8 h-8 text-forest-600" />
            </div>
            <h3 className="text-xl font-bold text-olive-900 mb-2">Practical Examples</h3>
            <p className="text-olive-600">Real Indian health programs: VHND, Swachh Bharat, and more</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-olive-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-copper-50 rounded-2xl flex items-center justify-center mb-4">
              <TrendingUp className="w-8 h-8 text-copper-600" />
            </div>
            <h3 className="text-xl font-bold text-olive-900 mb-2">Step-by-Step Guide</h3>
            <p className="text-olive-600">From defining objectives to feedback utilization</p>
          </div>

          <div className="bg-white rounded-3xl p-8 shadow-sm border border-olive-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-bold text-olive-900 mb-2">Community Medicine</h3>
            <p className="text-olive-600">Designed for medical education and public health professionals</p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link 
            href="/presentation"
            className="inline-flex items-center gap-3 px-8 py-4 bg-olive-600 hover:bg-olive-700 text-white text-xl font-bold rounded-full transition-colors shadow-lg hover:shadow-xl"
          >
            <Presentation className="w-6 h-6" />
            Start Presentation
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-olive-100 bg-white/50 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-6 py-8 text-center text-olive-600">
          <p className="text-lg">© 2026 drdp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
