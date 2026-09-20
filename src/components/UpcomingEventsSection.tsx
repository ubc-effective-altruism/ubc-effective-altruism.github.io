import React, { useState } from 'react';
import { Calendar, Plus, ExternalLink, CalendarDays, List, Columns } from 'lucide-react';

const CALENDAR_ID = 'ubceffectivealtruism0@gmail.com';
const TIMEZONE = 'America/Vancouver';

export const UpcomingEventsSection: React.FC = () => {
  const [viewMode, setViewMode] = useState<'MONTH' | 'AGENDA' | 'WEEK'>('AGENDA');

  // Direct Google Calendar subscription link: prompts user to add the entire calendar to their personal Google Calendar
  const addToGoogleCalendarUrl = `https://calendar.google.com/calendar/render?cid=${encodeURIComponent(CALENDAR_ID)}`;

  // Live embed iframe URL with selected view mode
  const embedUrl = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(CALENDAR_ID)}&ctz=${encodeURIComponent(TIMEZONE)}&mode=${viewMode}&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=1&bgcolor=%23ffffff`;

  return (
    <section id="events" className="py-16 md:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-100 border border-teal-200 text-teal-800 text-xs sm:text-sm font-semibold mb-4">
            <Calendar className="w-4 h-4 text-teal-700" />
            <span>Calendar & Schedule</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Upcoming Events
          </h2>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Stay up to date with our weekly discussion groups, guest speakers, fellowships, and socials.
          </p>

          {/* Action Button: Add all events to personal Google Calendar */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              id="add-all-events-btn"
              href={addToGoogleCalendarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-bold text-white bg-teal-600 hover:bg-teal-700 rounded-xl shadow-md transition transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              title="Add this entire calendar to your personal Google Calendar"
            >
              <Plus className="w-5 h-5" />
              <span>Add to Google Calendar</span>
            </a>

            <a
              href={embedUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl shadow-sm transition"
              title="Open full calendar in a new window"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-4 h-4 text-slate-500" />
            </a>
          </div>
        </div>

        {/* Live Calendar Display Container */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden">
          
          {/* Calendar Toolbar with View Mode Switcher */}
          <div className="px-4 py-3 bg-slate-100/70 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse"></span>
              <span className="font-semibold text-slate-800">Live Calendar</span>
              <span className="text-xs text-slate-400 hidden sm:inline">•</span>
              <span className="text-xs text-slate-500 hidden sm:inline">Timezone: America/Vancouver (PT)</span>
            </div>

            {/* View Mode Switcher (Agenda, Month, Week) */}
            <div className="flex items-center bg-slate-200/80 p-0.5 rounded-lg text-xs font-semibold text-slate-600">
              <button
                type="button"
                onClick={() => setViewMode('AGENDA')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition ${
                  viewMode === 'AGENDA'
                    ? 'bg-white text-teal-700 shadow-xs font-bold'
                    : 'hover:text-slate-900'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>Agenda</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('MONTH')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition ${
                  viewMode === 'MONTH'
                    ? 'bg-white text-teal-700 shadow-xs font-bold'
                    : 'hover:text-slate-900'
                }`}
              >
                <CalendarDays className="w-3.5 h-3.5" />
                <span>Month</span>
              </button>

              <button
                type="button"
                onClick={() => setViewMode('WEEK')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md transition ${
                  viewMode === 'WEEK'
                    ? 'bg-white text-teal-700 shadow-xs font-bold'
                    : 'hover:text-slate-900'
                }`}
              >
                <Columns className="w-3.5 h-3.5" />
                <span>Week</span>
              </button>
            </div>
          </div>

          {/* Embedded Google Calendar iframe */}
          <div className="relative w-full aspect-4/3 min-h-[500px] sm:min-h-[600px] bg-white">
            <iframe
              key={viewMode}
              src={embedUrl}
              title="UBC Effective Altruism Google Calendar"
              width="100%"
              height="100%"
              frameBorder="0"
              scrolling="no"
              className="absolute inset-0 w-full h-full border-0"
              loading="lazy"
            ></iframe>
          </div>

          {/* Footer note inside card */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-center text-xs text-slate-500 text-center">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-teal-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>
                Click <strong>Add to Google Calendar</strong> above to subscribe and sync all current and future events directly into your personal calendar.
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
