import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { BookingWizard } from '@/components/booking/BookingWizard';

export default function EnAgendarPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <section className="bg-yycl-navy text-white py-12 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-yycl-yellow block">
            Fast 1-Minute Booking
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading">
            Book Your Live 1-on-1 Session
          </h1>
          <p className="text-sm text-slate-200">
            Select the time that best suits your routine. Live individual session on Google Meet.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <BookingWizard />
      </section>

      <Footer />
    </main>
  );
}
