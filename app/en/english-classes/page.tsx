import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';
import { BrushStroke } from '@/components/ui/BrushStroke';
import { EnglishCategoryTabs } from '@/components/navigation/EnglishCategoryTabs';

export const metadata: Metadata = {
  title: "English Classes for International Students",
  description: "The English course you'll actually finish — no Spanish needed. Built for international students who want to learn English directly.",
};

export default function EnglishClassesPage() {
  const cards = [
    {
      id: 'learn-by-speaking',
      tag: 'Real, experienced teachers',
      tagColor: 'text-[#834296]',
      borderTop: 'border-t-[#834296]',
      title: 'Learn by speaking',
      desc: "You speak from class one — no memorizing rules before you're ready.",
      image: '/assets/02_COMO_FUNCIONA/YYCL_04_MODALIDAD_PERSONALIZADA.png',
      alt: 'Learn English by speaking from class one',
    },
    {
      id: 'flexible-formats',
      tag: 'Flexible',
      tagColor: 'text-[#4DC2DA]',
      borderTop: 'border-t-[#4DC2DA]',
      title: 'Group, 1-on-1, or Duo',
      desc: 'Pick the format that fits your schedule and budget.',
      image: '/assets/02_COMO_FUNCIONA/YYCL_03_MODALIDAD_GRUPAL.png',
      alt: 'Flexible English class formats at YYCL',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />
      <EnglishCategoryTabs />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION: English Classes for Non-Spanish Speakers                 */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#FDF8F3] via-white to-white">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#001837]">
                  <span className="w-2 h-2 rounded-full bg-[#FFD203]" />
                  <span>English Classes</span>
                </div>

                <div className="space-y-1 relative">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.12]">
                    The English course you'll <span className="text-[#834296]">actually finish</span>
                  </h1>

                  {/* Stylized organic brush stroke */}
                  <div className="pt-1">
                    <BrushStroke color="#FFD203" variant="brush" className="w-48 sm:w-60 h-4 text-[#FFD203]" />
                  </div>
                </div>

                <p className="text-base sm:text-lg text-slate-600 font-body-large max-w-lg leading-relaxed">
                  Live English classes, taught 100% in English — no Spanish needed. Built for international students who want to learn English directly, without translation getting in the way.
                </p>

                <div className="pt-2 space-y-2">
                  <Link href="/en/agendar">
                    <Button
                      variant="primary"
                      size="md"
                      className="font-heading font-bold text-sm sm:text-base px-8 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                    >
                      Book an interview
                    </Button>
                  </Link>
                  <p className="text-xs font-heading font-medium text-slate-500">
                    20 min · No cost · No commitment
                  </p>
                </div>
              </div>

              {/* Right Column: Hero Illustration */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[480px] lg:max-w-[540px]">
                  <img
                    src="/assets/11_ENGLISH_VERSION/YYCL_EN_01_ENGLISH_CLASSES_MODALIDADES.png"
                    alt="English classes for international students at YYCL"
                    className="w-full h-auto object-contain select-none"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. SECTION: How it works - Speak from day one (2 Cards)                   */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#834296]">
                How it works
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                Speak from day one
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                A method built around real conversation, not grammar drills.
              </p>
            </div>

            {/* 2 Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`bg-white rounded-3xl overflow-hidden border border-[#001837] border-t-4 ${card.borderTop} shadow-[3px_3px_0px_#001837] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between`}
                >
                  {/* Photo Container */}
                  <div className="h-52 sm:h-56 bg-slate-50 relative overflow-hidden flex items-center justify-center p-4 border-b border-[#001837]/15">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-contain select-none"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-2 flex-1 flex flex-col justify-start">
                    <span className={`text-[11px] font-heading font-extrabold uppercase tracking-wider ${card.tagColor}`}>
                      {card.tag}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[#001837] tracking-tight">
                      {card.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-body-regular leading-relaxed pt-1">
                      {card.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. CIERRE CTA SECTION: Ready to start speaking?                           */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-[#FDF8F3] border-t border-slate-100 text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
              Ready to start speaking?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-medium pt-1">
              Book your no-cost interview and find your starting point.
            </p>

            <div className="pt-3">
              <Link href="/en/agendar">
                <Button
                  variant="primary"
                  size="md"
                  className="font-heading font-bold text-sm sm:text-base px-9 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                >
                  Book an interview
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
