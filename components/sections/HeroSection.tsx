import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { BrushStroke } from '@/components/ui/BrushStroke';

export const HeroSection = () => {
  return (
    <section className="bg-white pt-8 pb-12 sm:py-14 lg:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Eyebrow + Responsive Display Headline + Body + Dual Actions */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
            
            {/* 1. Eyebrow */}
            <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-heading font-extrabold uppercase tracking-wider text-[#834296]">
              <span className="inline-flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#834296]" />
                <span>Inglés conversacional</span>
              </span>
              <span className="text-slate-300 hidden sm:inline">·</span>
              <span className="text-slate-500 font-semibold lowercase tracking-normal text-[11px] sm:text-xs">el último curso que necesitarás</span>
            </div>

            {/* 2. Headline: Escala equilibrada y armónica en mobile y desktop */}
            <div className="space-y-1.5 relative">
              <h1 className="text-[32px] xs:text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.15] sm:leading-[1.12]">
                Pierde el <span className="text-[#834296]">miedo</span> <br className="hidden sm:inline" />
                a hablar inglés.
              </h1>

              {/* Stylized organic brush stroke */}
              <div className="pt-1">
                <BrushStroke color="#FFD203" variant="brush" className="w-44 sm:w-60 h-3.5 sm:h-4 text-[#FFD203]" />
              </div>
            </div>

            {/* 3. Subtitle & Insight Editorial */}
            <div className="space-y-3 max-w-lg">
              <p className="text-sm sm:text-lg text-slate-600 font-body-large leading-relaxed">
                El problema nunca fue lo que sabes. Es soltarte a hablar. Eso se practica, no se memoriza, desde tu primera clase con un profesor real.
              </p>
              <p className="text-xs sm:text-base text-[#834296] font-heading font-bold leading-snug">
                Lo que cambia primero no es el vocabulario — es el miedo.
              </p>
            </div>

            {/* 4. Dual Actions alineados a la izquierda con Microcopy reductor de fricción */}
            <div className="pt-2 sm:pt-3 flex flex-col items-start gap-2.5">
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5 w-full sm:w-auto text-left">
                <Button
                  href="/agendar"
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto font-heading font-bold text-sm sm:text-base px-8 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519] justify-center"
                >
                  Agendar entrevista
                </Button>

                <Link
                  href="/como-funciona"
                  className="font-heading font-semibold text-xs sm:text-base text-[#3C4C92] hover:text-[#001837] transition-colors py-1 text-center sm:text-left"
                >
                  Cómo funciona →
                </Link>
              </div>

              {/* Microcopy de confianza */}
              <p className="text-[11px] sm:text-xs font-heading font-medium text-slate-500 pl-1">
                20 min · Sin costo
              </p>
            </div>
          </div>

          {/* Right Column: Prominent Large Transparent Collage Illustration */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end pt-2 lg:pt-0">
            <div className="relative w-full max-w-[440px] sm:max-w-[540px] lg:max-w-[680px] xl:max-w-[740px] lg:-mr-4 xl:-mr-8 scale-100 lg:scale-[1.12] xl:scale-[1.16] origin-center lg:origin-right transition-transform duration-300">
              <img
                src="/assets/01_INICIO/YYCL_01_HOME_INGLES_CONVERSACION.png"
                alt="Estudiante practicando inglés conversacional en YYCL"
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
