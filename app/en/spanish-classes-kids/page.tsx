import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';
import { BrushStroke } from '@/components/ui/BrushStroke';
import { EnglishCategoryTabs } from '@/components/navigation/EnglishCategoryTabs';

export const metadata: Metadata = {
  title: "English & Spanish for Kids and Teens",
  description: "Fun, live language lessons designed specifically for children and adolescents with experienced teachers.",
};

export default function SpanishClassesKidsPage() {
  const cards = [
    {
      id: '1-on-1-attention',
      tag: '1-on-1',
      tagColor: 'text-[#4DC2DA]',
      borderTop: 'border-t-[#4DC2DA]',
      title: 'All the attention on them',
      desc: 'No distractions — just your child and their teacher.',
      image: '/assets/11_ENGLISH_VERSION/YYCL_EN_KIDS_CARD1_1ON1.png',
      alt: 'One on one private Spanish language coaching for kids',
    },
    {
      id: 'tailored-content',
      tag: 'Tailored',
      tagColor: 'text-[#834296]',
      borderTop: 'border-t-[#834296]',
      title: 'Built around their world',
      desc: 'Content matched to their age and interests.',
      image: '/assets/11_ENGLISH_VERSION/YYCL_EN_KIDS_CARD2_TAILORED.png',
      alt: 'Engaging tailored Spanish lessons for kids and teens',
    },
    {
      id: 'visible-progress',
      tag: 'Progress',
      tagColor: 'text-[#EC9519]',
      borderTop: 'border-t-[#EC9519]',
      title: "You'll see it happen",
      desc: "Regular updates so you can track how they're doing.",
      image: '/assets/11_ENGLISH_VERSION/YYCL_EN_KIDS_CARD3_PROGRESS.png',
      alt: 'Regular Spanish learning progress tracking with parents',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />
      <EnglishCategoryTabs />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION: English (or Spanish) for kids                            */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#F0F9FF] via-white to-white">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#0284C7]">
                  <span className="w-2 h-2 rounded-full bg-[#4DC2DA]" />
                  <span>Spanish for Kids & Teens</span>
                </div>

                <div className="space-y-1 relative">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.12]">
                    Spanish for <span className="text-[#0284C7]">kids</span>
                  </h1>

                  {/* Stylized Cyan Playful Brush Stroke */}
                  <div className="pt-1">
                    <BrushStroke color="#4DC2DA" variant="playful" className="w-48 sm:w-60 h-4 text-[#4DC2DA]" />
                  </div>
                </div>

                <p className="text-base sm:text-lg text-slate-600 font-body-large max-w-lg leading-relaxed">
                  Fun, personalized Spanish classes at your child's own pace — through games, stories, and natural conversation.
                </p>

                <div className="pt-2">
                  <Link href="/en/agendar">
                    <Button
                      variant="primary"
                      size="md"
                      className="font-heading font-bold text-sm sm:text-base px-8 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                    >
                      Book an interview
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column: Hero Illustration */}
              <div className="lg:col-span-6 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-[480px] lg:max-w-[540px]">
                  <img
                    src="/assets/11_ENGLISH_VERSION/YYCL_EN_03_SPANISH_CLASSES_KIDS.png"
                    alt="Spanish lessons for kids and teens at YYCL"
                    className="w-full h-auto object-contain select-none"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. SECTION: Built for them - A program made for kids (3 Cards)            */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#00838F]">
                Built for them
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                A program made for kids
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                Three things that make the difference.
              </p>
            </div>

            {/* 3 Cards Grid */}
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
        {/* 3. CIERRE CTA SECTION: Give your kid a head start                         */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-[#F0F9FF] to-white border-t border-slate-100 text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
              Give your kid a head start
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-medium pt-1">
              Book an interview and learn more about the program.
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
