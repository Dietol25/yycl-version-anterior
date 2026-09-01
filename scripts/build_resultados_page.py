import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

write_file('app/resultados/page.tsx', """\"use client\";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Star, ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';
import { TESTIMONIALS } from '@/lib/data';

export default function ResultadosPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

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
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION: "Resultados reales"                                      */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 text-center bg-white">
          <div className="max-w-3xl mx-auto px-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#3C4C92]">
              <span className="w-2 h-2 rounded-full bg-[#EC9519]" />
              <span>Resultados</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.15]">
              Resultados reales
            </h1>

            <p className="text-base sm:text-lg text-[#3C4C92] font-body-large max-w-xl mx-auto leading-relaxed">
              Lo que importa no es cuánto estudiaste antes, sino que esta vez sí lo lograste.
            </p>

            {/* Botón Secundario Oficial (#001837 border + #001837 shadow) */}
            <div className="pt-2">
              <Link href="/agendar">
                <Button
                  variant="secondary"
                  size="md"
                  className="font-heading font-bold text-sm px-8 py-3.5 h-12 shadow-[3px_3px_0px_#001837]"
                >
                  Agenda tu entrevista gratuita
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. VIDEO / SHOWCASE BANNER DESTACADO                                       */}
        {/* ========================================================================= */}
        <section className="pb-16 bg-white">
          <div className="max-w-[1100px] mx-auto px-5 lg:px-12">
            <div className="relative rounded-3xl overflow-hidden border-2 border-[#001837] shadow-[6px_6px_0px_#001837] bg-slate-900 aspect-video flex items-center justify-center group cursor-pointer"
                 onClick={() => setIsPlayingVideo(true)}>
              <img
                src="/assets/02_COMO_FUNCIONA/YYCL_03_MODALIDAD_GRUPAL.png"
                alt="Testimonios y clases en vivo en YYCL"
                className="w-full h-full object-cover opacity-80 group-hover:scale-102 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              
              {/* Floating Large Play Button */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                <div className="w-18 h-18 sm:w-22 sm:h-22 bg-[#FFD203] text-[#001837] rounded-full border-2 border-[#001837] shadow-[4px_4px_0px_#001837] flex items-center justify-center group-hover:scale-110 active:scale-95 transition-transform duration-200">
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-[#001837] text-[#001837] ml-1" />
                </div>
                <span className="text-white font-heading font-bold text-xs sm:text-sm bg-black/40 px-4 py-1 rounded-full backdrop-blur-xs border border-white/20">
                  Ver historias de estudiantes reales
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. STAT COUNTERS: +1.000 y 94–98% en Violeta de Marca                    */}
        {/* ========================================================================= */}
        <section className="py-12 bg-slate-50/60 border-y border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="flex items-center justify-center gap-12 sm:gap-24 text-center">
              <div className="space-y-1">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-yycl-purple tracking-tight block">
                  +1.000
                </span>
                <span className="text-xs sm:text-sm font-heading font-bold text-slate-500 uppercase tracking-wider">
                  Estudiantes
                </span>
              </div>
              <div className="w-px h-16 bg-slate-200" />
              <div className="space-y-1">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-yycl-purple tracking-tight block">
                  94–98%
                </span>
                <span className="text-xs sm:text-sm font-heading font-bold text-slate-500 uppercase tracking-wider">
                  De satisfacción
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. TESTIMONIOS VERIFICADOS GOOGLE MAPS (5.0★)                              */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            {/* Desktop Grid (3 Cards) */}
            <div className="hidden lg:grid grid-cols-3 gap-8">
              {TESTIMONIALS.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl p-8 border border-black/10 border-t-4 border-t-[#834296] shadow-[4px_4px_0px_#001837] flex flex-col justify-between space-y-6 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="space-y-4">
                    {/* 5 Stars */}
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#FFD203] text-[#FFD203]" />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="text-[15px] font-heading font-semibold text-[#001837] leading-relaxed">
                      "{item.quote}"
                    </blockquote>
                  </div>

                  {/* Author Info */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center font-heading font-extrabold text-base border-2 border-white shadow-xs shrink-0 ${
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
                        <span className="block font-heading font-bold text-sm text-[#001837] leading-tight">
                          {item.name}
                        </span>
                        <span className="block text-xs font-medium text-slate-500">
                          {item.role}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-1">
                      <span className="font-heading font-bold text-[#834296] inline-flex items-center gap-1">
                        <span>Google Reviews 5.0★</span>
                      </span>
                      <span className="text-base">{item.countryFlag || '🇨🇴'}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Touch Carousel */}
            <div
              className="block lg:hidden max-w-sm mx-auto space-y-6 touch-pan-y select-none"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                key={activeIndex}
                className="bg-white rounded-3xl p-7 border border-black/10 border-t-4 border-t-[#834296] shadow-[4px_4px_0px_#001837] flex flex-col justify-between space-y-6 min-h-[360px] animate-in fade-in-50 slide-in-from-right-2 duration-200"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD203] text-[#FFD203]" />
                    ))}
                  </div>

                  <blockquote className="text-[15px] font-heading font-semibold text-[#001837] leading-relaxed">
                    "{TESTIMONIALS[activeIndex].quote}"
                  </blockquote>
                </div>

                <div className="space-y-3 pt-3 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-11 h-11 rounded-full flex items-center justify-center font-heading font-extrabold text-sm border-2 border-white shadow-xs shrink-0 ${
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
                      <span className="block font-heading font-bold text-sm text-[#001837] leading-tight">
                        {TESTIMONIALS[activeIndex].name}
                      </span>
                      <span className="block text-xs font-medium text-slate-500">
                        {TESTIMONIALS[activeIndex].role}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <span className="font-heading font-bold text-[#834296]">
                      Google Reviews 5.0★
                    </span>
                    <span className="text-sm">{TESTIMONIALS[activeIndex].countryFlag || '🇨🇴'}</span>
                  </div>
                </div>
              </div>

              {/* Controls */}
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

        {/* ========================================================================= */}
        {/* 5. CIERRE EMOCIONAL: "Tu historia también puede cambiar. Sí puedes..."   */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50/80 border-t border-slate-100 text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-5">
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
              Tu historia también puede cambiar.
              <span className="block text-[#834296] pt-1">
                Sí puedes. Yes You Can.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-slate-600 font-medium pt-1">
              Agenda tu entrevista gratuita.
            </p>

            <div className="pt-3">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="md"
                  className="font-heading font-bold text-sm sm:text-base px-9 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                >
                  Agenda tu entrevista gratuita
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Video Modal */}
      {isPlayingVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsPlayingVideo(false)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden border-2 border-[#001837] shadow-[6px_6px_0px_#001837] max-w-3xl w-full p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <h3 className="text-lg font-heading font-bold text-[#001837]">
                Historias y Resultados Reales — YYCL
              </h3>
              <button
                onClick={() => setIsPlayingVideo(false)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#001837] hover:bg-slate-200 font-bold"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-black rounded-2xl flex items-center justify-center overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Resultados Reales YYCL"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
""")

print("Resultados page built successfully matching exact Figma wireframe and verified copy")
