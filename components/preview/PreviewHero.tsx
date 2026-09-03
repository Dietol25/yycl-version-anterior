"use client";

import React from 'react';
import Link from 'next/link';
import { Star, ShieldCheck, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { BrushStroke } from '@/components/ui/BrushStroke';
import { PreviewSquarespaceLoop } from '@/components/preview/PreviewSquarespaceLoop';

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

          {/* Columna Derecha: Bucle Infinito de Vida de la Academia (Inspiración Squarespace) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <PreviewSquarespaceLoop />
          </div>

        </div>

        {/* Barra de Notoriedad Institucional & Acreditación (Berlitz / Wall Street English) */}
        <div className="pt-10 sm:pt-14 mt-10 sm:mt-14 border-t border-[#001837]/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center text-center">
            
            <div className="space-y-1 p-2">
              <span className="text-xs font-heading font-black text-[#001837] tracking-wider uppercase block">
                Marco Europeo (CEFR)
              </span>
              <p className="text-[11px] text-slate-500 font-body-regular">
                Planes estructurados de A1 a C1
              </p>
            </div>

            <div className="space-y-1 p-2">
              <span className="text-xs font-heading font-black text-[#834296] tracking-wider uppercase block">
                Docentes Certificados
              </span>
              <p className="text-[11px] text-slate-500 font-body-regular">
                Titulación universitaria y supervisión docente
              </p>
            </div>

            <div className="space-y-1 p-2">
              <span className="text-xs font-heading font-black text-[#EC9519] tracking-wider uppercase block">
                Google Reviews 5.0 ★
              </span>
              <p className="text-[11px] text-slate-500 font-body-regular">
                +1.200 estudiantes y profesionales
              </p>
            </div>

            <div className="space-y-1 p-2">
              <span className="text-xs font-heading font-black text-[#16A34A] tracking-wider uppercase block">
                Diagnóstico Sin Riesgo
              </span>
              <p className="text-[11px] text-slate-500 font-body-regular">
                15 min orales 1-a-1 sin costo inicial
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
