"use client";

import React from 'react';
import Link from 'next/link';
import { Star, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BrushStroke } from '@/components/ui/BrushStroke';

export const PreviewHero = () => {
  return (
    <section className="relative py-16 sm:py-24 lg:py-28 bg-[#FDF8F3] border-b border-[#001837]/10 overflow-hidden transition-colors duration-500">
      {/* Subtle Background Geometric Dots for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(#001837_1px,transparent_1px)] [background-size:24px_24px] opacity-4 pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Columna Izquierda: Copy Directo & Jerarquía Contundente (Wall Street English + Berlitz) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Pill de Autoridad & Live Indicator */}
            <div className="inline-flex items-center gap-2.5 bg-white/90 backdrop-blur-xs border border-[#001837]/15 rounded-full px-3.5 py-1.5 shadow-2xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-[11px] font-heading font-extrabold uppercase tracking-wider text-[#001837]">
                Método Conversacional en Vivo · Latinoamérica
              </span>
            </div>

            {/* Titular Principal Imponente */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.12]">
                Pierde el miedo a <br className="hidden sm:inline" />
                <span className="relative inline-block text-[#834296]">
                  hablar inglés.
                  <BrushStroke color="#FFD203" variant="brush" className="absolute -bottom-2.5 left-0 w-full h-4 -z-10 text-[#FFD203]" />
                </span>
              </h1>
            </div>

            {/* Subtítulo Claro y Empático (Sin Voseo) */}
            <p className="text-base sm:text-lg lg:text-xl text-slate-700 font-body-large max-w-xl leading-relaxed">
              ¿Ya probaste apps y cursos de memoria? El problema nunca fue lo que sabes — es <strong>soltarte a hablar</strong>. Con nosotros practicas conversación real desde tu primera clase con profesores certificados.
            </p>

            {/* CTAs y Social Proof Integrado */}
            <div className="pt-2 space-y-4">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
                <Link href="/agendar">
                  <Button
                    variant="primary"
                    size="lg"
                    className="font-heading font-extrabold text-sm sm:text-base px-8 py-4 h-13 shadow-[4px_4px_0px_#EC9519] hover:shadow-[2px_2px_0px_#EC9519] transition-all"
                  >
                    <span>Agendar entrevista gratis</span>
                    <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Button>
                </Link>

                <Link href="/preview/como-funciona">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="font-heading font-bold text-sm text-[#001837] hover:bg-white/70 h-13 px-6 border-2 border-transparent hover:border-[#001837]/15 rounded-2xl"
                  >
                    Conoce el método →
                  </Button>
                </Link>
              </div>

              {/* Micro-Trust Badges */}
              <div className="flex items-center gap-4 flex-wrap pt-2 text-xs font-heading font-bold text-slate-600">
                <div className="flex items-center gap-1 text-[#001837]">
                  <div className="flex text-[#FFD203]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FFD203]" />
                    ))}
                  </div>
                  <span className="font-extrabold ml-1">5.0</span>
                  <span className="text-slate-500 font-medium">(Google Maps)</span>
                </div>
                <span className="text-slate-300">•</span>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Diagnóstico 15 min sin compromiso</span>
                </div>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Tarjeta Escenario Modular con Micro-Motion (Inspiración Jitter) */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Card Principal Flotante con Borde Físico */}
            <div className="w-full max-w-[420px] bg-white rounded-3xl p-6 border-2 border-[#001837] shadow-[6px_6px_0px_#001837] space-y-5 transition-transform hover:-translate-y-1 duration-300">
              
              {/* Header de la tarjeta */}
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-[#001837] bg-purple-50 shrink-0">
                    <img
                      src="/assets/profesores/natty-sanchez.png"
                      alt="Natty Sánchez - Head of Studies YYCL"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-sm text-[#001837]">
                      Natty Sánchez
                    </h3>
                    <p className="text-[11px] text-[#834296] font-heading font-bold">
                      Co-founder & Head of Studies
                    </p>
                  </div>
                </div>

                <span className="bg-emerald-50 text-emerald-700 text-[10px] font-heading font-black px-2.5 py-1 rounded-full border border-emerald-200">
                  ONLINE
                </span>
              </div>

              {/* Mensaje de diálogo simulado (Micro-interacción Jitter) */}
              <div className="space-y-3 font-body-regular text-xs">
                <div className="bg-[#FDF8F3] p-3.5 rounded-2xl rounded-tl-xs border border-[#001837]/10 space-y-1">
                  <span className="text-[10px] font-heading font-bold text-[#834296] uppercase">
                    Clase en vivo 1-a-1
                  </span>
                  <p className="text-slate-800 leading-relaxed">
                    «Acá no te juzgamos por equivocarte. Hablar con fluidez empieza perdiendo el miedo a pronunciar mal la primera vez.»
                  </p>
                </div>

                {/* Checklist de lo que recibes */}
                <div className="pt-2 space-y-2">
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Evaluación oral de nivel en vivo (Marco Europeo)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Plan personalizado a tu objetivo exacto</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Eliges tu horario ideal sin costo inicial</span>
                  </div>
                </div>
              </div>

              {/* CTA dentro de la tarjeta */}
              <div className="pt-2">
                <Link href="/agendar" className="block">
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full font-heading font-bold text-xs h-10 shadow-[2px_2px_0px_#EC9519]"
                  >
                    Reservar mi evaluación gratuita
                  </Button>
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
