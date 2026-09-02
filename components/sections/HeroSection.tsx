import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { BrushStroke } from '@/components/ui/BrushStroke';

export const HeroSection = () => {
  return (
    <section className="bg-white py-8 sm:py-14 lg:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Eyebrow + Responsive Display Headline + Body + Dual Actions */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
            
            {/* 1. Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#001837]">
              <span className="w-2 h-2 rounded-full bg-[#FFD203]" />
              <span>El último curso de inglés que necesitarás</span>
            </div>

            {/* 2. Headline: Escala equilibrada y armónica en mobile y desktop */}
            <div className="space-y-1 relative">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.12]">
                Pierde el <span className="text-[#834296]">miedo</span> <br className="hidden sm:inline" />
                a hablar inglés.
              </h1>

              {/* Stylized organic brush stroke */}
              <div className="pt-1">
                <BrushStroke color="#FFD203" variant="brush" className="w-48 sm:w-60 h-4 text-[#FFD203]" />
              </div>
            </div>

            {/* 3. Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 font-body-large max-w-lg leading-relaxed">
              ¿Ya probaste apps, cursos, de todo? El problema nunca fue lo que sabes — es soltarte a hablar. Eso se practica, no se memoriza, desde tu primera clase con un profesor real.
            </p>

            {/* 4. Dual Actions alineados a la izquierda (F-Pattern UX) */}
            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-5 text-left">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="md"
                  className="font-heading font-bold text-sm sm:text-base px-7 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                >
                  Quiero hablar
                </Button>
              </Link>

              <Link
                href="/como-funciona"
                className="font-heading font-semibold text-sm sm:text-base text-[#3C4C92] hover:text-[#001837] transition-colors py-1.5 text-left"
              >
                Conoce cómo funciona →
              </Link>
            </div>
          </div>

          {/* Right Column: Prominent Large Transparent Collage Illustration */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end pt-2 lg:pt-0">
            <div className="relative w-full max-w-[380px] sm:max-w-[480px] lg:max-w-[620px]">
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
