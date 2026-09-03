import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';
import { BrushStroke } from '@/components/ui/BrushStroke';
import { EnglishCategoryTabs } from '@/components/navigation/EnglishCategoryTabs';

export const metadata: Metadata = {
  title: "About Us | Conversational Language Academy",
  description: "Who we are: one method, three languages. Discover our conversational methodology and the passionate teachers behind Yes You Can Languages.",
};

export default function AboutUsPage() {
  const cards = [
    {
      id: 'english',
      tag: 'English',
      tagColor: 'text-[#834296]',
      borderTop: 'border-t-[#834296]',
      title: "The course you'll actually finish",
      desc: 'Live classes, real, experienced teachers, speaking from day one.',
      image: '/assets/02_COMO_FUNCIONA/YYCL_04_MODALIDAD_PERSONALIZADA.png',
      alt: 'Conversational English program at YYCL',
    },
    {
      id: 'spanish',
      tag: 'Spanish',
      tagColor: 'text-[#EC9519]',
      borderTop: 'border-t-[#EC9519]',
      title: 'Conversational from day one',
      desc: 'Personalized classes for speakers of other languages, at your own pace.',
      image: '/assets/06_IDIOMAS/YYCL_13_IDIOMAS_FRANCES_PORTUGUES_REVISION_BANDERA.png',
      alt: 'Conversational Spanish program for foreigners',
    },
    {
      id: 'portuguese',
      tag: 'Portuguese',
      tagColor: 'text-[#4DC2DA]',
      borderTop: 'border-t-[#4DC2DA]',
      title: 'The language that clicks fastest',
      desc: 'especially if you already speak Spanish or English.',
      image: '/assets/01_INICIO/YYCL_01_HOME_INGLES_CONVERSACION.png',
      alt: 'Portuguese classes with natural conversational method',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />
      <EnglishCategoryTabs />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION: Who we are                                               */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#FDF8F3] via-white to-white">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
                  <span className="w-2 h-2 rounded-full bg-[#834296]" />
                  <span>About Us</span>
                </div>

                <div className="space-y-1 relative">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.12]">
                    Who we are
                  </h1>

                  {/* Stylized Yellow Brush Stroke */}
                  <div className="pt-1">
                    <BrushStroke color="#FFD203" variant="brush" className="w-40 sm:w-52 h-4 text-[#FFD203]" />
                  </div>
                </div>

                <p className="text-base sm:text-lg text-slate-600 font-body-large max-w-lg leading-relaxed">
                  Yes You Can Languages (YYCL) is a language academy with a remote team of teachers across Latin America. We teach English, French, Portuguese, and Spanish through real conversation from day one — no rigid grammar drills, no judgment for mistakes.
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
                    src="/assets/11_ENGLISH_VERSION/YYCL_EN_04_ABOUT_US_IDIOMAS_REVISION_BANDERA.png"
                    alt="Who we are at Yes You Can Languages"
                    className="w-full h-auto object-contain select-none"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. SECTION: What we teach - One method, three languages (3 Cards)         */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#834296]">
                What we teach
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                One method, three languages
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                Real conversation from day one, whichever language you choose.
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
        {/* 3. CIERRE CTA SECTION: Sí puedes. Yes You Can.                            */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-[#FDF8F3] border-t border-slate-100 text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
              Sí puedes. Yes You Can.
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
                  Book your no-cost interview
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
