import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-teal-50/50 via-slate-50 to-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        
        {/* EA Lightbulb Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100/80 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold mb-6">
          <svg className="w-4 h-4 text-teal-700" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="3">
            <path d="M24 6C16.268 6 10 12.268 10 20C10 24.843 12.457 29.114 16.2 31.643C16.8 32.05 17.2 32.73 17.2 33.457V35.5H30.8V33.457C30.8 32.73 31.2 32.05 31.8 31.643C35.543 29.114 38 24.843 38 20C38 12.268 31.732 6 24 6Z"/>
            <path d="M20 23L24 14L28 23"/>
            <path d="M19 40H29"/>
          </svg>
          <span>Evidence & Reason for Global Impact</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight sm:leading-tight mb-6">
          UBC Effective Altruism
        </h1>
        
        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed max-w-2xl mx-auto mb-8">
          At UBC Effective Altruism, we help prepare students to tackle the world’s most pressing problems through evidence-based philosophy, career planning, and community.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#discussion-group" className="px-6 py-3.5 text-base font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-md transition hover:-translate-y-0.5">
            Join our Discussion Group
          </a>
          <a href="#about" className="px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl shadow-sm transition">
            Learn About EA
          </a>
        </div>

        {/* Quick Social Icons */}
        <div className="mt-10 flex items-center justify-center gap-6 text-sm font-medium text-slate-600">
          <a href="https://www.instagram.com/ubceffectivealtruism/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-pink-600 transition">
            <span>Follow @ubceffectivealtruism on Instagram</span>
            &rarr;
          </a>
          <span className="text-slate-300">&bull;</span>
          <a href="https://discord.gg/FnfQ4W7R3" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-indigo-600 transition">
            <span>Join our Discord</span>
            &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
