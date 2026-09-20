import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Big Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            What is effective altruism?
          </h2>
        </div>

        {/* Side-by-side sentences separated by a vertical line */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">
            
            {/* Sentence 1 */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-teal-100 text-teal-700 flex-shrink-0 flex items-center justify-center font-bold text-sm">
                1
              </div>
              <p className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed">
                A philosophy about using evidence and reason to find the most effective ways to help others
              </p>
            </div>

            {/* Vertical Divider (Desktop) / Horizontal Divider (Mobile) */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -ml-px w-px bg-slate-300"></div>
            <div className="block md:hidden h-px w-full bg-slate-200 my-2"></div>

            {/* Sentence 2 */}
            <div className="flex items-start gap-4">
              <div className="w-9 h-9 rounded-full bg-teal-100 text-teal-700 flex-shrink-0 flex items-center justify-center font-bold text-sm">
                2
              </div>
              <p className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed">
                A global network of people and organizations putting the ideas into practice.
              </p>
            </div>

          </div>

          {/* Learn More Link */}
          <div className="mt-8 pt-6 border-t border-slate-200 text-center">
            <p className="text-base sm:text-lg text-slate-700">
              You can learn more about it here:{' '}
              <a href="https://www.effectivealtruism.org/" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-600 hover:text-teal-700 underline decoration-2 underline-offset-4 ml-1 inline-flex items-center gap-1">
                effectivealtruism.org
                <svg className="w-4 h-4 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </p>
          </div>
        </div>

        {/* About UBC Effective Altruism Paragraph */}
        <div className="bg-gradient-to-r from-teal-50 to-sky-50 border border-teal-200/80 rounded-2xl p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3">About UBC Effective Altruism</h3>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
            At UBC effective altruism, we help prepare students to tackle the world’s most pressing problems. We have a{' '}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdT-u7gzx320Mv_7L7f4_gmW6hayTG374t7t4OlRSrBCuiuUg/viewform?usp=header" target="_blank" rel="noopener noreferrer" className="font-bold text-teal-700 hover:text-teal-900 underline decoration-teal-500 decoration-2 underline-offset-2">
              discussion group
            </a>{' '}
            to talk about the philosophy and help with career planning. We also run social events just to hang out, and have guest speakers every now and then to give ideas and inspiration for your own career.
          </p>
        </div>

      </div>
    </section>
  );
};
