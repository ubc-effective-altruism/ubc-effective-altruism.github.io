/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { DiscussionGroupSection } from './components/DiscussionGroupSection.tsx';
import { UpcomingEventsSection } from './components/UpcomingEventsSection.tsx';
import { CommunitySection } from './components/CommunitySection.tsx';
import { Footer } from './components/Footer.tsx';

export default function App() {
  return (
    <div className="bg-slate-50 text-slate-900 antialiased min-h-screen flex flex-col selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <DiscussionGroupSection />
        <UpcomingEventsSection />
        <CommunitySection />
      </main>
      <Footer />
    </div>
  );
}

