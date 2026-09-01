import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

write_file('components/sections/TestimonialsGrid.tsx', """\"use client\";

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';

export const TestimonialsGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
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
          <div>
            <span className="block text-3xl sm:text-4xl font-extrabold font-heading text-yycl-purple">
              +1.000
            </span>
            <span className="block text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              estudiantes
            </span>
          </div>

          <div className="w-px h-12 bg-slate-200" />

          <div>
            <span className="block text-3xl sm:text-4xl font-extrabold font-heading text-yycl-purple">
              94-98%
            </span>
            <span className="block text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              de satisfacción
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (>= lg): Grid of 3 all-violet cards                          */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="bg-yycl-purple text-white rounded-3xl p-8 border border-black/10 shadow-[4px_4px_0px_#000000] flex flex-col justify-between space-y-6 hover:-translate-y-1 transition-transform duration-200"
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
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover shrink-0 border border-white/20 bg-purple-900"
                  />
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
                  <a
                    href="#"
                    className="font-heading font-bold text-white hover:text-yycl-yellow hover:underline inline-flex items-center gap-1"
                  >
                    <span>Ver reseña original</span>
                    <span>→</span>
                  </a>
                  <span className="text-base">{item.countryFlag || '🇨🇴'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW (< lg): Interactive Carousel with all-violet cards            */}
        {/* ========================================================================= */}
        <div className="block lg:hidden max-w-sm mx-auto space-y-6">
          <div className="bg-yycl-purple text-white rounded-3xl p-7 border border-black/10 shadow-[4px_4px_0px_#000000] flex flex-col justify-between space-y-6 min-h-[380px] animate-in fade-in duration-150">
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
                <img
                  src={TESTIMONIALS[activeIndex].avatar}
                  alt={TESTIMONIALS[activeIndex].name}
                  className="w-11 h-11 rounded-full object-cover shrink-0 border border-white/20 bg-purple-900"
                />
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
                <a
                  href="#"
                  className="font-heading font-bold text-white hover:text-yycl-yellow hover:underline inline-flex items-center gap-1"
                >
                  <span>Ver reseña original</span>
                  <span>→</span>
                </a>
                <span className="text-sm">{TESTIMONIALS[activeIndex].countryFlag || '🇨🇴'}</span>
              </div>
            </div>
          </div>

          {/* SliderControls Component matching Figma */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={prevSlide}
              className="w-9 h-9 rounded-full bg-[#834296] text-white flex items-center justify-center border border-black/10 shadow-[2px_2px_0px_#001837] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer hover:bg-purple-800 transition-all"
              aria-label="Anterior testimonio"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.slice(0, 3).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`rounded-full transition-all cursor-pointer ${
                    activeIndex === idx
                      ? 'w-5 h-2 bg-[#001837]'
                      : 'w-2 h-2 bg-black/15 hover:bg-black/30'
                  }`}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-9 h-9 rounded-full bg-[#834296] text-white flex items-center justify-center border border-black/10 shadow-[2px_2px_0px_#001837] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer hover:bg-purple-800 transition-all"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
""")

print("TestimonialsGrid updated: all-violet cards + mobile interactive carousel")
