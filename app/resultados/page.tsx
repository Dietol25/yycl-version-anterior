"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { Star, Play, X, ExternalLink, MessageCircle, Award, CheckCircle2 } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';
import { SliderControls } from '@/components/ui/SliderControls';
import { TESTIMONIALS } from '@/lib/data';
import { CountryFlag } from '@/components/icons/FlagIcons';

const GOOGLE_MAPS_REVIEWS_URL = 'https://www.google.com/maps/place//@-12.060543,-70.6361328,3z/data=!3m1!4b1!4m3!3m2!1s0x95bccb681a6ea077:0xd57ae9c7c1891e35!12e1?entry=ttu&g_ep=EgoyMDI2MDgyNi4wIKXMDSoASAFQAw%3D%3D';
const INSTAGRAM_HIGHLIGHTS_URL = 'https://www.instagram.com/stories/highlights/17913912476880324/?hl=es-la';

// Lista de testimonios verificados con sus fuentes reales
const VERIFIED_TESTIMONIALS = [
  {
    id: '1',
    name: 'Clara Reinoso',
    role: 'Profesional en Finanzas',
    quote: 'Las clases son súper dinámicas y personalizadas. Pasé de tener temor a hablar en juntas de trabajo a expresarme con fluidez y confianza total.',
    avatar: '/assets/avatares/mujer.png',
    source: 'Google Reviews 5.0★',
    sourceUrl: GOOGLE_MAPS_REVIEWS_URL,
    country: 'México',
    countryFlag: '🇲🇽',
  },
  {
    id: '2',
    name: 'Miguel Ramírez',
    role: 'Profesional Corporativo',
    quote: 'Me ayudó a dejar de ser tan de madera en el inglés. Pasé de no hablar nada a desenvolverme con fluidez en cuestión de meses por trabajo. Sin duda encontré el espacio donde dar mis primeros pasos.',
    avatar: '/assets/avatares/hombre.png',
    source: 'Google Reviews 5.0★',
    sourceUrl: GOOGLE_MAPS_REVIEWS_URL,
    country: 'Argentina',
    countryFlag: '🇦🇷',
  },
  {
    id: '3',
    name: 'Yulian Sentani',
    role: 'Especialista en Marketing Digital',
    quote: 'Me encanta que no hay juzgamientos ni teoría aburrida; te lanzas a hablar desde la primera clase. Es el empujón práctico que necesitaba para dar el salto profesional.',
    avatar: '/assets/avatares/hombre.png',
    source: 'Google Reviews 5.0★',
    sourceUrl: GOOGLE_MAPS_REVIEWS_URL,
    country: 'España',
    countryFlag: '🇪🇸',
  },
  {
    id: '4',
    name: 'Nicolás Ibáñez',
    role: 'Profesional en Tecnología',
    quote: 'Lo puedo decir en inglés: "Jose is THE GOAT". He progresado mucho en poco tiempo con sus clases! Siempre muy paciente y pedagógico.',
    avatar: '/assets/avatares/hombre.png',
    source: 'Google Reviews 5.0★',
    sourceUrl: GOOGLE_MAPS_REVIEWS_URL,
    country: 'Argentina',
    countryFlag: '🇦🇷',
  },
  {
    id: '5',
    name: 'Caro Corchuelo',
    role: 'Diseñadora UX / Creativa',
    quote: 'La clase hermosa, súper práctica y hablé un montón. El ambiente de confianza te hace sentir cómoda desde el inicio para soltarte sin presiones.',
    avatar: '/assets/avatares/mujer.png',
    source: 'Instagram Stories',
    sourceUrl: INSTAGRAM_HIGHLIGHTS_URL,
    country: 'España',
    countryFlag: '🇪🇸',
  },
  {
    id: '6',
    name: 'Carolina Cepeda',
    role: 'Ingeniera de Software',
    quote: 'Buscaba perder el miedo en entrevistas en inglés con clientes en el extranjero. En 2 meses pasé de bloquearme a responder con total soltura y seguridad.',
    avatar: '/assets/avatares/mujer.png',
    source: 'Reseña Verificada 5.0★',
    sourceUrl: GOOGLE_MAPS_REVIEWS_URL,
    country: 'Colombia',
    countryFlag: '🇨🇴',
  },
];

export default function ResultadosPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Touch state for mobile carousel
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? VERIFIED_TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === VERIFIED_TESTIMONIALS.length - 1 ? 0 : prev + 1));
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
        {/* 1. HERO SECTION: Split 2 Columnas Estandarizado                            */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-16 lg:py-20 bg-gradient-to-b from-[#F9FAFB] via-white to-white">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column: Eyebrow + H1 + Subtítulo + CTA */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
                  <span className="w-2 h-2 rounded-full bg-[#834296]" />
                  <span>Resultados comprobados</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.12]">
                  Resultados reales
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-body-large max-w-lg leading-relaxed">
                  Lo que importa no es cuánto estudiaste antes, sino que esta vez sí lo lograste. Historias reales de estudiantes que transformaron su conversación.
                </p>

                <div className="pt-2 space-y-2">
                  <Link href="/agendar">
                    <Button
                      variant="primary"
                      size="md"
                      className="font-heading font-bold text-sm sm:text-base px-8 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                    >
                      Agendar entrevista gratis
                    </Button>
                  </Link>
                  <p className="text-xs font-heading font-medium text-slate-500 pl-1">
                    20 min · Sin costo · Sin compromiso
                  </p>
                </div>
              </div>

              {/* Right Column: Video Showcase con Botón Play Interactivo */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[480px] group cursor-pointer" onClick={() => setIsVideoOpen(true)}>
                  <div className="relative rounded-3xl overflow-hidden border border-[#001837] shadow-[5px_5px_0px_#001837] bg-slate-900">
                    <img
                      src="/assets/03_RESULTADOS/YYCL_09_RESULTADOS_VIDEO_THUMB.png"
                      alt="Video de estudiantes teniendo resultados reales en YYCL"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/25 flex flex-col items-center justify-center gap-3">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#FFD203] text-[#001837] flex items-center justify-center border-2 border-[#001837] shadow-[3px_3px_0px_#001837] group-hover:scale-110 active:scale-95 transition-all">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#001837] ml-1" />
                      </div>
                      <span className="text-white font-heading font-bold text-xs bg-black/50 px-3.5 py-1 rounded-full backdrop-blur-xs border border-white/20">
                        Ver historias de estudiantes reales
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. STAT COUNTERS: +1.000 y 94–98% en Violeta de Marca                    */}
        {/* ========================================================================= */}
        <section className="py-10 bg-slate-50/70 border-y border-slate-100">
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
              <div className="w-px h-14 bg-slate-200" />
              <div className="space-y-1">
                <span className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-yycl-purple tracking-tight block">
                  94–98%
                </span>
                <span className="text-xs sm:text-sm font-heading font-bold text-slate-500 uppercase tracking-wider block">
                  De satisfacción
                </span>
                <span className="text-[10px] font-heading font-medium text-slate-400 block pt-0.5">
                  Según encuestas internas
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. GRILLA DE TESTIMONIOS VERIFICADOS (Estética Premium con Links)         */}
        {/* ========================================================================= */}
        <section className="py-16 lg:py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2.5">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#EC9519]">
                Opiniones Reales
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                Lo que dicen nuestros estudiantes
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                Testimonios verificados en Google Maps, LinkedIn y redes sociales.
              </p>
            </div>

            {/* Desktop Grid: 6 Tarjetas en 2 Filas de 3 Columnas */}
            <div className="hidden lg:grid grid-cols-3 gap-6">
              {VERIFIED_TESTIMONIALS.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#834296] text-white rounded-2xl p-6 border border-[#001837]/20 shadow-[3px_3px_0px_#001837] flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all duration-200"
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
                      "{item.quote}"
                    </blockquote>
                  </div>

                  {/* Author Info + Enlace Verificado */}
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
                        <span className="block font-heading font-bold text-xs sm:text-sm text-white leading-tight">
                          {item.name}
                        </span>
                        <span className="block text-[11px] font-medium text-white/80">
                          {item.role}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-[11px] pt-0.5">
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="font-heading font-bold text-white/90 hover:text-[#FFD203] transition-colors inline-flex items-center gap-1 group"
                      >
                        <span>{item.source}</span>
                        <ExternalLink className="w-3 h-3 opacity-70 group-hover:opacity-100 transition-opacity" />
                      </a>
                      <span title={item.country} className="flex items-center">
                        <CountryFlag code={item.countryFlag || item.country || 'ES'} size={18} />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Touch Carousel con Slim Dots */}
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
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFD203] text-[#FFD203]" />
                    ))}
                  </div>

                  <blockquote className="text-xs sm:text-sm font-heading font-medium text-white/95 leading-relaxed">
                    "{VERIFIED_TESTIMONIALS[activeIndex].quote}"
                  </blockquote>
                </div>

                <div className="space-y-2.5 pt-3 border-t border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 shrink-0 select-none">
                      <img
                        src={VERIFIED_TESTIMONIALS[activeIndex].avatar}
                        alt={VERIFIED_TESTIMONIALS[activeIndex].name}
                        className="w-full h-full object-contain select-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.15)]"
                      />
                    </div>
                    <div>
                      <span className="block font-heading font-bold text-xs sm:text-sm text-white leading-tight">
                        {VERIFIED_TESTIMONIALS[activeIndex].name}
                      </span>
                      <span className="block text-[11px] font-medium text-white/80">
                        {VERIFIED_TESTIMONIALS[activeIndex].role}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-[11px] pt-0.5">
                    <a
                      href={VERIFIED_TESTIMONIALS[activeIndex].sourceUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-heading font-bold text-white/90 hover:text-[#FFD203] transition-colors inline-flex items-center gap-1"
                    >
                      <span>{VERIFIED_TESTIMONIALS[activeIndex].source}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <span title={VERIFIED_TESTIMONIALS[activeIndex].country} className="flex items-center">
                      <CountryFlag
                        code={VERIFIED_TESTIMONIALS[activeIndex].countryFlag || VERIFIED_TESTIMONIALS[activeIndex].country || 'ES'}
                        size={18}
                      />
                    </span>
                  </div>
                </div>
              </div>

              {/* Slim Dots Indicator (Sin botones gigantes redundantes) */}
              <div className="flex items-center justify-center gap-2 py-1">
                {VERIFIED_TESTIMONIALS.map((_, idx) => {
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

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. VIDEO MODAL INTERACTIVO                                                */}
        {/* ========================================================================= */}
        {isVideoOpen && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in-50 duration-200"
            onClick={() => setIsVideoOpen(false)}
          >
            <div
              className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 aspect-video flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors cursor-pointer border border-white/20"
                aria-label="Cerrar video"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-center p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#FFD203] text-[#001837] flex items-center justify-center mx-auto shadow-lg">
                  <Play className="w-8 h-8 fill-[#001837] ml-1" />
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white">
                  Historias de Estudiantes Reales en YYCL
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto">
                  Aquí se reproducirá el video oficial testimonial de 18 segundos.
                </p>
              </div>
            </div>
          </div>
        )}

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

            <div className="pt-3 space-y-2">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="md"
                  className="font-heading font-bold text-sm sm:text-base px-9 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                >
                  Agendar entrevista gratis
                </Button>
              </Link>
              <p className="text-xs font-heading font-medium text-slate-500">
                20 min · Sin costo · Sin compromiso
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
