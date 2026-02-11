'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Presentation, ArrowRight, Calendar } from 'lucide-react';
import { Expletus_Sans } from 'next/font/google';
import Hero from '@/src/components/slides/Hero';

const expletus = Expletus_Sans({
  subsets: ["latin"],
  weight: ["700"],
});

const presentations = [
  {
    id: 'health-evaluation',
    title: 'Health Program Evaluation',
    description: 'Comprehensive guide to evaluating health promotion and education programs',
    slides: 23,
    duration: '45 min',
  },
];

export default function PresentationsPage() {
  return (
    <div className="min-h-screen bg-[#111111]">
      {/* Header */}
      <header className="border-b border-gray-700 bg-black/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <Link href="/" className="flex items-center gap-4 w-fit">
            <Image src="/icon1.png" alt="LEVIX Logo" width={48} height={48} className="rounded-xl" />
            <h1 className={`text-3xl font-black text-[#ffdc00] tracking-tight ${expletus.className}`}>LEVIX</h1>
          </Link>
        </div>
      </header>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12">
          <h2 className={`text-5xl font-black text-white mb-4 ${expletus.className}`}>
            Available Presentations
          </h2>
          <p className="text-xl text-gray-400">
            Select a presentation to begin
          </p>
        </div>

        {/* Presentations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {presentations.map((presentation) => (
            <Link
              key={presentation.id}
              href={`/presentation/${presentation.id}`}
              className="bg-[#1a1a1a] rounded-3xl overflow-hidden border border-[#2a2a2a] hover:border-[#ffdc00]/50 transition-all hover:shadow-lg group"
            >
              <div className="aspect-[4/3] bg-white overflow-hidden relative">
                <div className="scale-[0.25] origin-top-left w-[400%] h-[400%]">
                  <Hero isActive={true} />
                </div>
              </div>
              
              <div className="p-6">
              <h3 className={`text-2xl font-bold text-white mb-2 ${expletus.className}`}>
                {presentation.title}
              </h3>
              
              <p className="text-gray-400 mb-4 line-clamp-2">
                {presentation.description}
              </p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                <div className="flex items-center gap-1">
                  <Presentation className="w-4 h-4" />
                  <span>{presentation.slides} slides</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{presentation.duration}</span>
                </div>
              </div>
              
              <div className="flex items-center gap-2 text-[#ffdc00] font-bold group-hover:gap-3 transition-all">
                <span>Launch</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
