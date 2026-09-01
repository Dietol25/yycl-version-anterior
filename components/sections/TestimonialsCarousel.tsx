"use client";

import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, ExternalLink, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy tracking-tight">
            Resultados reales
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
            Lo que el perfeccionamiento continuo y la dedicación real logran en nuestros estudiantes.
          </p>
        </div>

        {/* 2 Stat Counters (Mobile & Desktop) */}
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-12 text-center">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-yycl-navy">
              +1.000
            </span>
            <span className="block text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              graduados
            </span>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-yycl-navy">
              96-98%
            </span>
            <span className="block text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              de satisfacción
            </span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="max-w-md mx-auto relative">
          {/* Card */}
          <div className="bg-yycl-purple text-white p-7 sm:p-9 rounded-3xl border-2 border-yycl-navy shadow-[6px_6px_0px_#001837] space-y-5 transition-all duration-300">
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(TESTIMONIALS[currentIndex].rating || 5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yycl-yellow text-yycl-yellow" />
              ))}
            </div>

            {/* Quote Icon & Text */}
            <div className="space-y-2">
              <span className="text-3xl font-serif text-yycl-yellow leading-none block">“</span>
              <p className="text-base sm:text-lg font-heading font-medium leading-relaxed">
                "{TESTIMONIALS[currentIndex].quote}"
              </p>
            </div>

            {/* User Details */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-white/20">
              <img
                src={TESTIMONIALS[currentIndex].avatar}
                alt={TESTIMONIALS[currentIndex].name}
                className="w-12 h-12 rounded-full object-cover border-2 border-yycl-yellow shrink-0"
              />
              <div className="space-y-0.5">
                <span className="block font-heading font-bold text-base leading-tight">
                  {TESTIMONIALS[currentIndex].name}
                </span>
                <span className="block text-xs text-slate-200">
                  {TESTIMONIALS[currentIndex].role} · <span className="font-semibold">{TESTIMONIALS[currentIndex].company}</span>
                </span>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-[11px] text-yycl-yellow hover:underline font-semibold pt-0.5"
                >
                  <span>Ver reseña original</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Country Flag Badge */}
            <div className="text-sm pt-1">
              <span>{TESTIMONIALS[currentIndex].countryFlag}</span>
            </div>
          </div>

          {/* Controls: Left Arrow, Pagination Dots, Right Arrow */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-yycl-purple text-white flex items-center justify-center border-2 border-yycl-navy shadow-[2px_2px_0px_#001837] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer hover:bg-yycl-purple-dark transition-all"
              aria-label="Testimonio anterior"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'w-6 h-2.5 bg-yycl-purple'
                      : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-yycl-purple text-white flex items-center justify-center border-2 border-yycl-navy shadow-[2px_2px_0px_#001837] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer hover:bg-yycl-purple-dark transition-all"
              aria-label="Testimonio siguiente"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
