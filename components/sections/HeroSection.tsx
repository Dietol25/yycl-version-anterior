import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const HeroSection = () => {
  return (
    <section className="bg-white py-8 sm:py-14 lg:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Eyebrow + Responsive Display Headline + Body + Dual Actions */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
            
            {/* 1. Eyebrow */}
            <div className="inline-flex items-center gap-2 font-label-bold text-xs sm:text-sm text-[#001837]">
              <span className="w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#FFD203] shrink-0" />
              <span>El último curso de inglés que necesitarás.</span>
            </div>

            {/* 2. Headline: 30px en mobile (2 líneas limpias) vs 68px en desktop */}
            <div className="space-y-1 relative">
              <h1 className="font-display-hero text-[30px] sm:text-5xl lg:text-[68px] text-[#001837] tracking-tight leading-[1.12] sm:leading-[1.08]">
                Pierde el <span className="text-[#834296]">miedo</span> <br className="hidden sm:inline" />
                a hablar inglés.
              </h1>

              {/* Hand-drawn accent curve in #FFD203 under 'a hablar' */}
              <div className="pt-1 sm:pt-2">
                <svg
                  className="w-36 sm:w-56 h-3 sm:h-4 text-[#FFD203]"
                  viewBox="0 0 160 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 10.5C25 4.5 75 2.5 157 7.5"
                    stroke="#FFD203"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* 3. Subtitle: Proporción balanceada para mobile */}
            <p className="font-body-large text-sm sm:text-[18px] text-[#3C4C92] leading-relaxed sm:leading-[28px] max-w-xl">
              ¿Ya probaste apps, cursos, de todo? El problema nunca fue lo que sabes — es soltarte a hablar. Eso se practica, no se memoriza, desde tu primera clase con un profesor real.
            </p>

            {/* 4. Dual Actions alineados a la izquierda (F-Pattern UX) */}
            <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-6 text-left">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="md"
                  className="font-label-large text-sm sm:text-base px-6 sm:px-7 py-3 h-11 sm:h-12 shadow-[3px_3px_0px_#EC9519]"
                >
                  Agendar entrevista gratis
                </Button>
              </Link>

              <Link
                href="/como-funciona"
                className="font-heading font-semibold text-xs sm:text-base text-[#3C4C92] hover:text-[#001837] transition-colors py-1.5 text-left"
              >
                Conoce cómo funciona
              </Link>
            </div>
          </div>

          {/* Right Column: Prominent Large Transparent Collage Illustration */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end pt-2 lg:pt-0">
            <div className="relative w-full max-w-[380px] sm:max-w-[480px] lg:max-w-[620px]">
              <img
                src="/assets/01_INICIO/YYCL_01_HOME_INGLES_CONVERSACION.png"
                alt="Estudiante practicando inglés conversacional en YYCL"
                className="w-full h-auto object-contain select-none drop-shadow-sm"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
