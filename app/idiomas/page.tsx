"use client";

import React from 'react';
import Link from 'next/link';
import { MessageSquare, Sparkles, Zap, Check } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';

export default function OtrosIdiomasPage() {
  const cards = [
    {
      id: 'frances',
      tag: 'Francés',
      icon: MessageSquare,
      title: 'Habla desde el primer día',
      color: 'text-[#4DC2DA]',
      borderTop: 'border-t-[#4DC2DA]',
      desc: 'Conversación desde el día uno, a tu ritmo — el mismo método que en inglés.'
    },
    {
      id: 'portugues',
      tag: 'Portugués',
      icon: Sparkles,
      title: 'Sin exámenes ni vueltas',
      color: 'text-[#834296]',
      borderTop: 'border-t-[#834296]',
      desc: 'Tu nivel se define en tu primera clase. Empiezas a hablar, no a hacer un test.'
    },
    {
      id: 'espanol-ventaja',
      tag: 'Ventaja directa',
      icon: Zap,
      title: 'Si ya hablas español, vas más rápido',
      color: 'text-[#EC9519]',
      borderTop: 'border-t-[#EC9519]',
      desc: 'Francés y portugués comparten raíz con el español. Aprovechas lo que ya sabes desde la primera clase.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (Split 2 Columns)                                         */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Copy & CTA */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#EC9519]">
                  <span className="w-2 h-2 rounded-full bg-[#EC9519]" />
                  <span>Otros idiomas</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.15]">
                  Francés y Portugués
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-body-large max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Clases personalizadas para quienes quieren un nuevo idioma (y español para extranjeros), sin vueltas.
                </p>

                <div className="pt-2 flex flex-col items-center lg:items-start gap-2.5">
                  <Button
                    href="/agendar"
                    variant="primary"
                    size="md"
                    className="font-heading font-bold text-sm px-8 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                  >
                    Agendar entrevista
                  </Button>
                </div>
              </div>

              {/* Right Column: Organic Illustrated Asset */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[520px]">
                  <img
                    src="/assets/06_IDIOMAS/YYCL_13_IDIOMAS_FRANCES_PORTUGUES_REVISION_BANDERA.png"
                    alt="Aprender Francés y Portugués en YYCL"
                    className="w-full h-auto object-contain select-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. CÓMO FUNCIONA: El método 100% conversacional                           */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-slate-50/50 border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#834296]">
                Método
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                Cómo funciona
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                El mismo método 100% conversacional para los tres idiomas — simple, flexible y pensado para ti.
              </p>
            </div>

            {/* 3 Step Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
              {cards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.id}
                    className={`bg-white rounded-3xl p-7 sm:p-8 border border-black/10 border-t-4 ${card.borderTop} shadow-[4px_4px_0px_#001837] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between space-y-4`}
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 rounded-2xl bg-slate-50 border border-black/5 flex items-center justify-center text-[#001837]">
                          <IconComponent className="w-5 h-5 stroke-[2.2]" />
                        </div>
                        <span className="text-[11px] font-heading font-extrabold uppercase tracking-wider text-slate-500">
                          {card.tag}
                        </span>
                      </div>

                      <h3 className={`text-xl sm:text-2xl font-extrabold font-heading ${card.color} tracking-tight leading-snug`}>
                        {card.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 font-body-regular leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. ESPAÑOL — TAMBIÉN LO ENSEÑAMOS                                         */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-white border-t border-slate-100 text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
              Español — también lo enseñamos
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              ¿Conoces a alguien que quiera aprender? Cuéntale.
            </p>
            <div className="pt-2">
              <Link href="/en/spanish-classes">
                <Button
                  variant="secondary"
                  size="md"
                  className="font-heading font-bold text-sm sm:text-base px-8 py-3.5 h-12 shadow-[3px_3px_0px_#001837]"
                >
                  Ver clases de español para extranjeros →
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. CIERRE CTA: Agenda una llamada gratuita                                */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50/80 border-t border-slate-100 text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
              Agenda tu entrevista gratuita
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Sin examen de nivel previo: conversamos y armamos tu plan a medida.
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
