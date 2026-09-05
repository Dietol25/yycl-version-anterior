"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Star, ArrowRight, ExternalLink } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';

const GOOGLE_REVIEWS_URL = 'https://www.google.com/maps/place//@-12.060543,-70.6361328,3z/data=!3m1!4b1!4m3!3m2!1s0x95bccb681a6ea077:0xd57ae9c7c1891e35!12e1?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D';

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
    <section className="pt-10 sm:pt-14 pb-16 sm:pb-20 bg-white border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
            Resultados reales
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Lo que importa no es cuánto estudiaste antes, sino que esta vez sí lo lograste.
          </p>
        </div>

        {/* 2 Stat Counters in Violet Accent */}
        <div className="flex items-center justify-center gap-12 sm:gap-20 mb-12 text-center">
          <div className="space-y-1">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#834296] tracking-tight block">
              +1.000
            </span>
            <span className="text-xs sm:text-sm font-heading font-bold text-slate-500 uppercase tracking-wider">
              Estudiantes
            </span>
          </div>
          <div className="w-px h-14 bg-slate-200" />
          <div className="space-y-1">
            <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#834296] tracking-tight block">
              94–98%
            </span>
            <span className="text-xs sm:text-sm font-heading font-bold text-slate-500 uppercase tracking-wider">
              De satisfacción
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (>= lg): All 3 Cards Solid Violet #834296                    */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="bg-[#834296] text-white rounded-2xl p-6 border border-[#001837]/20 shadow-[3px_3px_0px_#001837] flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-200"
            >
              <div className="space-y-3">
                {/* 5 Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFD203] text-[#FFD203]" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-sm font-heading font-medium text-white/95 leading-relaxed">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="space-y-2.5 pt-3 border-t border-white/15">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 shrink-0 select-none">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-full h-full object-contain select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
                    />
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

                <div className="flex items-center justify-between text-[11px] pt-0.5">
                  <a
                    href={GOOGLE_REVIEWS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-heading font-bold text-white/90 hover:text-[#FFD203] hover:underline transition-colors cursor-pointer"
                  >
                    <span>Google Reviews 5.0★</span>
                    <ExternalLink className="w-3 h-3 text-[#FFD203]" />
                  </a>
                  <span className="text-xs">{item.countryFlag || '🇨🇴'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW (< lg): Swipe Carousel with Slim Dots Indicator               */}
        {/* ========================================================================= */}
        <div
          className="block lg:hidden max-w-sm mx-auto space-y-4 touch-manipulation select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            key={activeIndex}
            className="bg-[#834296] text-white rounded-2xl p-6 border border-[#001837] shadow-[3px_3px_0px_#001837] flex flex-col justify-between space-y-4 min-h-[260px] animate-in fade-in-50 duration-150"
          >
            <div className="space-y-3">
              {/* 5 Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#FFD203] text-[#FFD203]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-xs sm:text-sm font-heading font-medium text-white/95 leading-relaxed">
                "{TESTIMONIALS[activeIndex].quote}"
              </blockquote>
            </div>

            <div className="space-y-2.5 pt-3 border-t border-white/15">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 shrink-0 select-none">
                  <img
                    src={TESTIMONIALS[activeIndex].avatar}
                    alt={TESTIMONIALS[activeIndex].name}
                    className="w-full h-full object-contain select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
                  />
                </div>
                <div>
                  <span className="block font-heading font-bold text-xs sm:text-sm text-white leading-tight">
                    {TESTIMONIALS[activeIndex].name}
                  </span>
                  <span className="block text-[11px] font-medium text-white/80">
                    {TESTIMONIALS[activeIndex].role}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] pt-0.5">
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-heading font-bold text-white/90 hover:text-[#FFD203] hover:underline transition-colors cursor-pointer"
                >
                  <span>Google Reviews 5.0★</span>
                  <ExternalLink className="w-3 h-3 text-[#FFD203]" />
                </a>
                <span className="text-xs">{TESTIMONIALS[activeIndex].countryFlag}</span>
              </div>
            </div>
          </div>

          {/* Slim Dots Indicator */}
          <div className="flex items-center justify-center gap-2 py-1">
            {TESTIMONIALS.map((_, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className="p-1.5 cursor-pointer touch-manipulation"
                  aria-label={`Ver testimonio ${idx + 1}`}
                >
                  <div
                    className={`rounded-full transition-all duration-200 ${
                      isActive
                        ? 'w-6 h-2 bg-[#834296] rounded-full'
                        : 'w-2 h-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* Ghost Button: Ver más testimonios (Desktop y Mobile) */}
        <div className="pt-8 text-center">
          <Link
            href="/resultados"
            className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#3C4C92] hover:text-[#001837] hover:bg-purple-50/70 px-5 py-2.5 rounded-full transition-all group cursor-pointer"
          >
            <span>Ver más testimonios y casos de éxito</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#834296]" />
          </Link>
        </div>

      </div>
    </section>
  );
};
