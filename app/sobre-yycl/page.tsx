"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Play, X } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';

export default function SobreYYCLPage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const cards = [
    {
      id: 'nuestra-historia',
      tag: 'Quiénes somos',
      title: 'Nuestra historia',
      desc: 'Nacimos de ver siempre lo mismo: personas que sabían gramática de memoria pero se congelaban al hablar en público o en el trabajo. Construimos un método distinto: menos reglas rígidas y más conversación real desde el primer día.',
      image: '/assets/10_SOBRE_YYCL/YYCL_25_SOBRE_YYCL_NUESTRA_HISTORIA.png',
      alt: 'Fundadores Naty y Néstor en el origen de Yes You Can Languages'
    },
    {
      id: 'que-ensenamos',
      tag: 'Qué enseñamos',
      title: 'Qué enseñamos',
      desc: 'Inglés, francés, portugués y español (a hablantes de inglés) — para adultos, niños y empresas, siempre bajo el mismo enfoque humano y conversacional.',
      image: '/assets/10_SOBRE_YYCL/YYCL_26_SOBRE_YYCL_QUE_ENSENAMOS.png',
      alt: 'Idiomas impartidos en Yes You Can Languages'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION: Sobre Yes You Can Languages (Copy Unificado)             */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#FDF8F3] via-white to-white">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12 text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
              <span className="w-2 h-2 rounded-full bg-[#834296]" />
              <span>Sobre YYCL</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.15]">
              Sobre Yes You Can Languages
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-body-large max-w-3xl mx-auto leading-relaxed">
              <strong className="text-[#001837] font-extrabold">Aprender un idioma no tiene que doler.</strong> Ayudamos a hispanohablantes a lograr el inglés que se les venía resistiendo, con un método conversacional y cercano donde equivocarse es solo parte del camino.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. 2 PHOTOCARDS BALANCEADAS CON BORDE SUPERIOR AMARILLO                   */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-18 bg-slate-50/60 border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">
              {cards.map((card) => (
                <div
                  key={card.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#001837] border-t-4 border-t-[#FFD203] shadow-[3px_3px_0px_#001837] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                >
                  {/* Photo Container */}
                  <div className="h-56 sm:h-64 bg-slate-50 relative overflow-hidden flex items-center justify-center p-4 border-b border-[#001837]/15">
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-contain select-none"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-7 sm:p-8 space-y-2.5 flex-1 flex flex-col justify-start">
                    <span className="text-[11px] font-heading font-extrabold uppercase tracking-wider text-[#834296]">
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
        {/* 3. SHOWCASE DE VIDEO DEDICADO: Nuestra filosofía (Gran Formato 16:9)       */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="max-w-4xl mx-auto text-center space-y-4 mb-10 sm:mb-14">
              <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
                Nuestra filosofía
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
                Sí puedes. Yes You Can.
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-body-large max-w-2xl mx-auto leading-relaxed">
                Un espacio seguro diseñado para perder el miedo, ganar confianza y disfrutar el proceso de hablar otro idioma.
              </p>
            </div>

            {/* Video Frame 16:9 con Botón Play Flotante */}
            <div className="max-w-4xl mx-auto relative rounded-3xl overflow-hidden border-2 border-[#001837] shadow-[5px_5px_0px_#001837] bg-slate-900 group">
              <div className="relative aspect-video w-full flex items-center justify-center cursor-pointer" onClick={() => setIsVideoOpen(true)}>
                <img
                  src="/assets/10_SOBRE_YYCL/YYCL_27_SOBRE_YYCL_FILOSOFIA_VIDEO_THUMB.png"
                  alt="Video de nuestra filosofía Yes You Can Languages"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001837]/60 via-transparent to-transparent pointer-events-none" />

                {/* Botón Flotante Circular Play Amarillo (#FFD203) */}
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="absolute z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#FFD203] text-[#001837] border-2 border-[#001837] shadow-[4px_4px_0px_#001837] flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-[#FFE2C0] cursor-pointer"
                  aria-label="Reproducir video de nuestra filosofía"
                >
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-[#001837] translate-x-1" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. CIERRE CTA                                                             */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-[#FDF8F3] to-white border-t border-slate-100 text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
              Sí puedes. Yes You Can.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Agenda tu entrevista gratuita.
            </p>
            <div className="pt-2">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="md"
                  className="font-heading font-bold text-sm sm:text-base px-9 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                >
                  Agendar entrevista gratis
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* MODAL INTERACTIVO DE VIDEO                                                */}
      {/* ========================================================================= */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/20 text-white hover:bg-white hover:text-black flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Cerrar video"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="aspect-video w-full flex items-center justify-center bg-slate-950">
              <div className="text-center p-8 space-y-3">
                <div className="w-16 h-16 rounded-full bg-[#FFD203] text-[#001837] flex items-center justify-center mx-auto mb-2">
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </div>
                <h4 className="text-xl font-heading font-bold text-white">Nuestra filosofía — Sí puedes. Yes You Can.</h4>
                <p className="text-sm text-slate-400 max-w-md mx-auto">Video institucional de presentación de método y fundadores de YYCL.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
