import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

write_file('components/sections/TestimonialsGrid.tsx', """\"use client\";

import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';

export const TestimonialsGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Touch handlers for fluid mobile swipe gesture
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy tracking-tight">
            Resultados reales
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Lo que importa no es cuánto estudiaste antes, sino que esta vez sí lo lograste.
          </p>
        </div>

        {/* 2 Stat Counters in Violet Accent */}
        <div className="flex items-center justify-center gap-12 sm:gap-20 mb-14 text-center">
          <div className="space-y-1">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-yycl-purple tracking-tight block">
              +1.000
            </span>
            <span className="text-xs sm:text-sm font-heading font-bold text-slate-500 uppercase tracking-wider">
              Estudiantes
            </span>
          </div>
          <div className="w-px h-14 bg-slate-200" />
          <div className="space-y-1">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-yycl-purple tracking-tight block">
              94–98%
            </span>
            <span className="text-xs sm:text-sm font-heading font-bold text-slate-500 uppercase tracking-wider">
              De satisfacción
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (>= lg): All 3 Cards Solid Violet #834296 with Brand Avatars */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-3 gap-8">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-yycl-purple text-white rounded-3xl p-8 border border-black/10 shadow-[4px_4px_0px_#000000] flex flex-col justify-between space-y-6 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="space-y-4">
                {/* 5 Stars directly in #FFD203 */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFD203] text-[#FFD203]" />
                  ))}
                </div>

                {/* Large quote mark and quote */}
                <div className="space-y-1">
                  <span className="text-4xl font-serif text-white leading-none block">“</span>
                  <blockquote className="text-[15px] font-heading font-medium text-white leading-relaxed">
                    "{item.quote}"
                  </blockquote>
                </div>
              </div>

              {/* Author Info */}
              <div className="space-y-3 pt-4 border-t border-white/15">
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center font-heading font-extrabold text-base border-2 border-white/40 shadow-xs shrink-0 ${
                      item.id === '1'
                        ? 'bg-[#FFD203] text-[#001837]'
                        : item.id === '2'
                        ? 'bg-[#4DC2DA] text-[#001837]'
                        : item.id === '3'
                        ? 'bg-[#FFE2C0] text-[#001837]'
                        : 'bg-[#EC9519] text-[#001837]'
                    }`}
                  >
                    {item.name
                      .split(' ')
                      .slice(0, 2)
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-sm text-white leading-tight">
                      {item.name}
                    </span>
                    <span className="block text-xs font-medium text-white/80">
                      {item.role}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="font-heading font-bold text-white/90">
                    Google Reviews 5.0★
                  </span>
                  <span className="text-base">{item.countryFlag || '🇨🇴'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW (< lg): Interactive Carousel with Touch Gestures              */}
        {/* ========================================================================= */}
        <div
          className="block lg:hidden max-w-sm mx-auto space-y-6 touch-pan-y select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            key={activeIndex}
            className="bg-yycl-purple text-white rounded-3xl p-7 border border-black/10 shadow-[4px_4px_0px_#000000] flex flex-col justify-between space-y-6 min-h-[380px] animate-in fade-in-50 slide-in-from-right-2 duration-200"
          >
            <div className="space-y-4">
              {/* 5 Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFD203] text-[#FFD203]" />
                ))}
              </div>

              {/* Quote */}
              <div className="space-y-1">
                <span className="text-4xl font-serif text-white leading-none block">“</span>
                <blockquote className="text-[15px] font-heading font-medium text-white leading-relaxed">
                  "{TESTIMONIALS[activeIndex].quote}"
                </blockquote>
              </div>
            </div>

            {/* Author Details */}
            <div className="space-y-3 pt-3 border-t border-white/15">
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full flex items-center justify-center font-heading font-extrabold text-sm border-2 border-white/40 shadow-xs shrink-0 ${
                    TESTIMONIALS[activeIndex].id === '1'
                      ? 'bg-[#FFD203] text-[#001837]'
                      : TESTIMONIALS[activeIndex].id === '2'
                      ? 'bg-[#4DC2DA] text-[#001837]'
                      : TESTIMONIALS[activeIndex].id === '3'
                      ? 'bg-[#FFE2C0] text-[#001837]'
                      : 'bg-[#EC9519] text-[#001837]'
                  }`}
                >
                  {TESTIMONIALS[activeIndex].name
                    .split(' ')
                    .slice(0, 2)
                    .map((n) => n[0])
                    .join('')}
                </div>
                <div>
                  <span className="block font-heading font-bold text-sm text-white leading-tight">
                    {TESTIMONIALS[activeIndex].name}
                  </span>
                  <span className="block text-xs font-medium text-white/80">
                    {TESTIMONIALS[activeIndex].role}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <span className="font-heading font-bold text-white/90">
                  Google Reviews 5.0★
                </span>
                <span className="text-sm">{TESTIMONIALS[activeIndex].countryFlag || '🇨🇴'}</span>
              </div>
            </div>
          </div>

          {/* Slider Controls */}
          <div className="flex items-center justify-between px-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-slate-100 border border-black/10 flex items-center justify-center text-yycl-navy hover:bg-yycl-yellow transition-colors shadow-xs active:scale-95 cursor-pointer"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.slice(0, 3).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                    activeIndex === idx
                      ? 'w-6 bg-yycl-purple scale-100'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-slate-100 border border-black/10 flex items-center justify-center text-yycl-navy hover:bg-yycl-yellow transition-colors shadow-xs active:scale-95 cursor-pointer"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
""")

print("TestimonialsGrid rewritten cleanly with cohesive brand initial avatars")
