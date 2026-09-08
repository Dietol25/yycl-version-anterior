import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { BookingWizard } from '@/components/booking/BookingWizard';
import { EnglishCategoryTabs } from '@/components/navigation/EnglishCategoryTabs';

export const metadata: Metadata = {
  title: "Book your no-cost interview",
  description: "30-minute 1-on-1 live session with a real teacher on Google Meet. Level assessment and personalized roadmap with zero obligation.",
};

export default function EnAgendarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />
      <EnglishCategoryTabs />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Header Ligero y Aireado (Exacto al estilo en español) */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
              <span className="w-2 h-2 rounded-full bg-[#834296]" />
              <span>Easy 1-Minute Booking</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
              Book your no-cost interview
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-body-regular max-w-md mx-auto leading-relaxed">
              30-minute 1-on-1 live session with a real teacher on Google Meet. Level assessment and personalized roadmap with zero obligation.
            </p>
          </div>

          {/* Wizard Card */}
          <BookingWizard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
