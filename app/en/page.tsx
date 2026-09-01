"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Star } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';
import { TestimonialsGrid } from '@/components/sections/TestimonialsGrid';
import { OfferingsSection } from '@/components/sections/OfferingsSection';
import { MethodSection } from '@/components/sections/MethodSection';

export default function EnglishHomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION EN: Split 2 Columnas (F-Pattern UX + Official Design System) */}
        {/* ========================================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-b from-[#FDF8F3] via-white to-white py-14 sm:py-18 lg:py-24">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              
              {/* Left Column: Eyebrow + H1 + Subtitle + CTAs */}
              <div className="lg:col-span-6 space-y-6 text-left">
                
                {/* 1. Eyebrow */}
                <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
                  <span className="w-2 h-2 rounded-full bg-[#834296]" />
                  <span>The last language course you will ever need</span>
                </div>

                {/* 2. Main Title */}
                <div className="space-y-1">
                  <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold font-heading text-[#001837] tracking-tight leading-[1.12]">
                    Lose the <span className="text-[#834296]">fear</span> of speaking Spanish & English.
                  </h1>
                  
                  {/* Decorative Yellow Vector Line */}
                  <div className="pt-1">
                    <svg className="w-44 h-3.5 text-[#FFD203]" viewBox="0 0 176 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 10C50 3 130 3 174 10" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {/* 3. Subtitle */}
                <p className="text-base sm:text-lg text-slate-600 font-body-large max-w-xl leading-relaxed">
                  Tried apps, grammar books and still feeling stuck? The problem was never your vocabulary — it is speaking confidence. You practice real conversation from day one with certified 1-on-1 coaches.
                </p>

                {/* 4. Dual Actions left-aligned (F-Pattern) */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-left">
                  <Link href="/agendar">
                    <Button
                      variant="primary"
                      size="md"
                      className="font-label-large text-base px-7 py-3 h-12 shadow-[3px_3px_0px_#EC9519]"
                    >
                      Book Free Diagnostic Session
                    </Button>
                  </Link>

                  <Link
                    href="/como-funciona"
                    className="font-heading font-semibold text-base text-[#3C4C92] hover:text-[#001837] transition-colors py-2 text-left"
                  >
                    See how it works
                  </Link>
                </div>

                {/* Micro Social Proof */}
                <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 font-medium">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFD203] text-[#FFD203]" />
                    ))}
                  </div>
                  <span>Rated 5.0★ on Google Reviews · 100% Live 1-on-1 Classes</span>
                </div>
              </div>

              {/* Right Column: Transparent Sticker Illustration */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[540px] lg:max-w-[580px]">
                  <img
                    src="/assets/11_ENGLISH_VERSION/YYCL_EN_01_ENGLISH_CLASSES_MODALIDADES.png"
                    alt="Students practicing conversational English and Spanish in YYCL"
                    className="w-full h-auto object-contain select-none drop-shadow-sm"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. PROGRAM OFFERINGS                                                      */}
        {/* ========================================================================= */}
        <OfferingsSection />

        {/* ========================================================================= */}
        {/* 3. METHODOLOGY                                                            */}
        {/* ========================================================================= */}
        <MethodSection />

        {/* ========================================================================= */}
        {/* 4. VERIFIED TESTIMONIALS                                                  */}
        {/* ========================================================================= */}
        <TestimonialsGrid />

        {/* ========================================================================= */}
        {/* 5. FINAL EMOTIONAL CTA                                                    */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-[#FDF8F3] border-t border-slate-100 text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
              Your fluency story begins today.
              <span className="block text-[#834296] pt-1">
                Yes You Can.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-medium pt-1">
              Book your free 15-minute diagnostic session with an expert coach.
            </p>

            <div className="pt-3">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="md"
                  className="font-heading font-bold text-sm sm:text-base px-9 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                >
                  Book Free Session
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
