"use client";

import React from 'react';
import Link from 'next/link';
import { Smile, Sparkles, Gamepad2, Users } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';
import { BrushStroke } from '@/components/ui/BrushStroke';
import { PhotoCard } from '@/components/ui/PhotoCard';

export default function KidsPage() {
  const cards = [
    {
      id: 'confianza',
      tag: 'Confianza',
      title: 'Sin miedo a equivocarse, desde chicos',
      desc: 'Un espacio donde participar importa más que acertar — así se construye la confianza para hablar.',
      image: '/assets/07_KIDS/YYCL_16_KIDS_CONFIANZA.png',
      alt: 'Niños ganando confianza hablando inglés'
    },
    {
      id: 'contenido',
      tag: 'Contenido',
      title: 'Método adaptado a cada edad',
      desc: 'Empezamos con una evaluación que es puro juego; seguimos con clases 100% en inglés, y te mantenemos al tanto del progreso en todo momento.',
      image: '/assets/07_KIDS/YYCL_17_KIDS_CONTENIDO.png',
      alt: 'Método de inglés lúdico para niños'
    },
    {
      id: 'seguimiento',
      tag: 'Seguimiento',
      title: 'Profesores con experiencia real',
      desc: 'Especializados en enseñar a niños, con seguimiento constante.',
      image: '/assets/07_KIDS/YYCL_18_KIDS_SEGUIMIENTO_FAMILIAR.png',
      alt: 'Profesores especializados en Kids and Teens'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION: Con acento Cyan de identidad Kids & Teens                */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F0F9FF] via-white to-white relative overflow-hidden">
          {/* Elementos lúdicos sutiles de fondo en Cyan */}
          <div className="absolute top-12 left-10 w-24 h-24 rounded-full bg-[#4DC2DA]/10 blur-2xl pointer-events-none" />
          <div className="absolute top-32 right-12 w-32 h-32 rounded-full bg-[#FFD203]/20 blur-2xl pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-5 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Copy & CTA */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#0284C7]">
                  <span className="w-2 h-2 rounded-full bg-[#4DC2DA]" />
                  <span>Kids & Teens</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.15]">
                  Inglés para <span className="text-[#0284C7] relative inline-block">
                    Kids & Teens
                    <BrushStroke color="#4DC2DA" variant="playful" className="absolute -bottom-2.5 left-0 w-full h-4 -z-10" />
                  </span>
                  <span className="block text-2xl sm:text-3xl text-slate-700 font-bold mt-2 font-heading">
                    (Niños y adolescentes)
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-body-large max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Que empiecen a jugar en inglés desde ya — con clases pensadas para su edad, no una clase de adultos en miniatura.
                </p>

                <div className="pt-2 flex flex-col items-center lg:items-start gap-2.5">
                  <Button
                    href="/agendar"
                    variant="primary"
                    size="md"
                    className="font-heading font-bold text-sm sm:text-base px-8 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                  >
                    Agendar entrevista
                  </Button>
                </div>
              </div>

              {/* Right Column: Organic Illustrated Asset */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[500px]">
                  <img
                    src="/assets/07_KIDS/YYCL_15_KIDS_JUEGO.png"
                    alt="Niños y jóvenes aprendiendo inglés en YYCL"
                    className="w-full h-auto object-contain select-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. CÓMO FUNCIONA: 3 PhotoCards con marco y acento Cyan (Sin Tab flotante) */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#00838F]">
                Kids & Teens
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                Cómo funciona
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                Evaluación inicial en forma de juego, clases 100% en inglés y seguimiento directo contigo.
              </p>
            </div>

            {/* 3 PhotoCards Grid Oficiales sin Tab flotante y sin enlace inferior */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
              {cards.map((card) => (
                <PhotoCard
                  key={card.id}
                  category="kids"
                  imageSrc={card.image}
                  imageAlt={card.alt}
                  title={card.title}
                  subtitle={card.tag}
                  description={card.desc}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. CIERRE CTA                                                             */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-[#F0F9FF] to-white border-t border-slate-100 text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
              Agenda tu entrevista gratuita
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Conoce el programa sin compromiso.
            </p>
            <div className="pt-2 flex flex-col items-center">
              <Button
                href="/agendar"
                variant="primary"
                size="md"
                className="font-heading font-bold text-sm sm:text-base px-9 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
              >
                Agendar entrevista
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
