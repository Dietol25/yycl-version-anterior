"use client";

import React from 'react';
import Link from 'next/link';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';

export default function SpanishClassesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-14 sm:py-18 lg:py-20 bg-gradient-to-b from-[#FDF8F3] via-white to-white">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
                  <span className="w-2 h-2 rounded-full bg-[#834296]" />
                  <span>Spanish Immersion Program</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.12]">
                  Learn Conversational Spanish with Native Coaches
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-body-large max-w-lg leading-relaxed">
                  Tailored for expats, digital nomads, and remote executives living in or doing business across Latin America. Speak real Spanish from day one.
                </p>

                <div className="pt-2">
                  <Link href="/agendar">
                    <Button
                      variant="primary"
                      size="md"
                      className="font-heading font-bold text-sm sm:text-base px-8 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                    >
                      Book Free Diagnostic Session
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[500px]">
                  <img
                    src="/assets/11_ENGLISH_VERSION/YYCL_EN_02_SPANISH_CLASSES_ADULTS.png"
                    alt="Adults learning Spanish with native coaches at YYCL"
                    className="w-full h-auto object-contain select-none"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-20 bg-slate-50 border-y border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                Why YYCL is different for Spanish learners
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                Forget rigid grammar drills. Practice authentic conversations for travel, social life, and business meetings.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-[#001837] shadow-[3px_3px_0px_#001837] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 text-[#834296] flex items-center justify-center font-bold">1</div>
                <h3 className="font-heading font-extrabold text-base text-[#001837]">1-on-1 Private Tutoring</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Personalized 100% to your speed, goals, and regional dialect preferences (Colombian, Argentine, Mexican).
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#001837] shadow-[3px_3px_0px_#001837] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#EC9519] flex items-center justify-center font-bold">2</div>
                <h3 className="font-heading font-extrabold text-base text-[#001837]">Flexible Timezones</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Easily book your sessions morning, afternoon, or evening across all US and European time zones.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#001837] shadow-[3px_3px_0px_#001837] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#4DC2DA] flex items-center justify-center font-bold">3</div>
                <h3 className="font-heading font-extrabold text-base text-[#001837]">Zero Grammar Anxiety</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A warm, welcoming space where making mistakes is part of the fun of getting fluent.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
              Ready to speak Spanish with confidence?
            </h2>
            <div className="pt-2">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="md"
                  className="font-heading font-bold text-sm sm:text-base px-9 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                >
                  Book Free 15-Min Diagnostic
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
