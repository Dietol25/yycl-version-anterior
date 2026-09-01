"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';

export default function AboutUsPage() {
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
                  <span>About Yes You Can Languages</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.12]">
                  Human, Conversational Language Learning
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-body-large max-w-lg leading-relaxed">
                  We started YYCL after seeing the same pattern everywhere: people who knew grammar rules by heart but froze when speaking. We built a method centered on real connection, zero judgment, and confidence from day one.
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
                    src="/assets/11_ENGLISH_VERSION/YYCL_EN_04_ABOUT_US_IDIOMAS_REVISION_BANDERA.png"
                    alt="About YYCL team and multilingual coaching"
                    className="w-full h-auto object-contain select-none"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 border border-[#001837] shadow-[3px_3px_0px_#001837] space-y-2.5">
                <h3 className="font-heading font-extrabold text-base text-[#001837]">No Judgment</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Making mistakes is how real humans learn. We celebrate courage over rigid perfection.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#001837] shadow-[3px_3px_0px_#001837] space-y-2.5">
                <h3 className="font-heading font-extrabold text-base text-[#001837]">Real Teachers</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Certified, empathetic human coaches who tailor each 1-on-1 minute to your exact needs.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-6 border border-[#001837] shadow-[3px_3px_0px_#001837] space-y-2.5">
                <h3 className="font-heading font-extrabold text-base text-[#001837]">Fast Results</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Notice real speaking confidence in your very first month, ready for meetings, interviews and travel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-white text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
              Start your journey with Yes You Can Languages
            </h2>
            <div className="pt-2">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="md"
                  className="font-heading font-bold text-sm sm:text-base px-9 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                >
                  Book Free Diagnostic
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
