import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-teal-400">
            <svg className="w-5 h-5" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.8">
              <path d="M24 6C16.268 6 10 12.268 10 20C10 24.843 12.457 29.114 16.2 31.643C16.8 32.05 17.2 32.73 17.2 33.457V35.5H30.8V33.457C30.8 32.73 31.2 32.05 31.8 31.643C35.543 29.114 38 24.843 38 20C38 12.268 31.732 6 24 6Z"/>
              <path d="M20 23L24 14L28 23"/>
              <path d="M19 40H29"/>
            </svg>
          </div>
          <span className="font-bold text-slate-200">UBC Effective Altruism</span>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <a href="#about" className="hover:text-slate-300">About</a>
          <span>•</span>
          <a href="#discussion-group" className="hover:text-slate-300">Apply</a>
          <span>•</span>
          <a href="#events" className="hover:text-slate-300">Upcoming Events</a>
        </div>

      </div>
    </footer>
  );
};
