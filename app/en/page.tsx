import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';
import { BrushStroke } from '@/components/ui/BrushStroke';
import { EnglishCategoryTabs } from '@/components/navigation/EnglishCategoryTabs';

export const metadata: Metadata = {
  title: "Learn Spanish, live with real teachers",
  description: "Live 1-on-1 and small group conversational Spanish classes with native teachers. Lose the fear of speaking from day one.",
};

export default function EnglishHomePage() {
  const cards = [
    {
      id: 'real-conversation',
      tag: 'Real conversation',
      tagColor: 'text-[#834296]',
      borderTop: 'border-t-[#834296]',
      title: 'Speak from day one',
      desc: 'No boring drills — real conversation practice every class.',
      image: '/assets/02_COMO_FUNCIONA/YYCL_03_MODALIDAD_GRUPAL.png',
      alt: 'Live conversational Spanish practice with teacher',
    },
    {
      id: 'your-pace',
      tag: 'Your pace',
      tagColor: 'text-[#EC9519]',
      borderTop: 'border-t-[#EC9519]',
      title: 'Personalized, one-on-one',
      desc: 'One-on-one classes at your own pace — no group option for this language yet.',
      image: '/assets/02_COMO_FUNCIONA/YYCL_04_MODALIDAD_PERSONALIZADA.png',
      alt: 'One-on-one personalized Spanish coaching',
    },
    {
      id: 'culture',
      tag: 'Culture',
      tagColor: 'text-[#4DC2DA]',
      borderTop: 'border-t-[#4DC2DA]',
      title: "Spanish you'll actually use",
      desc: 'Learn with context and culture, not just textbook phrases.',
      image: '/assets/02_COMO_FUNCIONA/YYCL_05_MODALIDAD_DUO.png',
      alt: 'Cultural and real-world Spanish language immersion',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />
      <EnglishCategoryTabs />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION: Spanish Classes for Foreigners                            */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#FDF8F3] via-white to-white">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296] bg-purple-50 px-3.5 py-1.5 rounded-full border border-purple-200">
                  <span className="w-2 h-2 rounded-full bg-[#834296]" />
                  <span>Spanish Classes for Adults · Live Online</span>
                </div>

                <div className="space-y-1 relative">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.12]">
                    Learn Spanish, live with <span className="text-[#834296]">real teachers</span>
                  </h1>

                  {/* Stylized organic brush stroke */}
                  <div className="pt-1">
                    <BrushStroke color="#FFD203" variant="brush" className="w-48 sm:w-60 h-4 text-[#FFD203]" />
                  </div>
                </div>

                <div className="space-y-2 max-w-lg">
                  <p className="text-base sm:text-lg text-slate-600 font-body-large leading-relaxed">
                    Conversational Spanish for speakers of other languages, from day one.
                  </p>
                  <p className="text-sm text-slate-500 font-medium">
                    For international students and English learners who want to speak with confidence.
                  </p>
                </div>

                <div className="pt-2 space-y-2">
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <Link href="/en/agendar">
                      <Button
                        variant="primary"
                        size="md"
                        className="font-heading font-bold text-sm sm:text-base px-8 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                      >
                        Book an interview
                      </Button>
                    </Link>

                    <Link
                      href="/en/english-classes"
                      className="text-xs sm:text-sm font-heading font-semibold text-[#001837] hover:text-[#834296] transition-colors py-1"
                    >
                      Looking for English courses instead? →
                    </Link>
                  </div>
                  <p className="text-xs font-heading font-medium text-slate-500">
                    20 min · No cost · No commitment
                  </p>
                </div>
              </div>

              {/* Right Column: Hero Illustration */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[480px] lg:max-w-[540px]">
                  <img
                    src="/assets/11_ENGLISH_VERSION/YYCL_EN_02_SPANISH_CLASSES_ADULTS.png"
                    alt="Learn Spanish live with real teachers at YYCL"
                    className="w-full h-auto object-contain select-none"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. SECTION: Why YYCL - More than grammar (3 Cards)                        */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#834296]">
                Why YYCL
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                More than grammar
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                Real conversation, real culture, your own pace.
              </p>
            </div>

            {/* 3 Editorial White Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className={`bg-white rounded-3xl overflow-hidden border border-[#001837] border-t-4 ${card.borderTop} shadow-[3px_3px_0px_#001837] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between`}
                >
                  {/* Photo Container */}
                  <div className="h-48 sm:h-52 bg-slate-50 relative overflow-hidden flex items-center justify-center p-4 border-b border-[#001837]/15">
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
        {/* 3. CIERRE CTA SECTION: Start speaking Spanish                             */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-[#FDF8F3] border-t border-slate-100 text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
              Start speaking Spanish
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-medium pt-1">
              Book your no-cost interview to find your level.
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
