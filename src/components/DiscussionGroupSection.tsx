import React from 'react';

export const DiscussionGroupSection: React.FC = () => {
  return (
    <section id="discussion-group" className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          
          {/* Deadline Tag */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/20 border border-teal-400/40 text-teal-300 text-xs sm:text-sm font-semibold mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Deadline: Apply before October 3, 2026</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
            Join our Discussion Group! Apply before October 3, 2026
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto mb-8">
            In this discussion group you’ll learn the basics of the philosophy of effective altruism, discuss some philosophy, get tips and tricks for career planning, and learn about other resources and opportunities to help your career
          </p>

          {/* Apply Now button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdT-u7gzx320Mv_7L7f4_gmW6hayTG374t7t4OlRSrBCuiuUg/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 text-lg font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-xl shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
              <span>Apply Now</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
