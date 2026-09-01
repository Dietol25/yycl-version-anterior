import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const HeroSection = () => {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Eyebrow + 70px Display/Hero + Body/Large in #3C4C92 + Dual Actions */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* 1. Eyebrow: Label/Bold (Montserrat 700, 14px) in #001837 with #FFD203 dot */}
            <div className="inline-flex items-center gap-2 font-label-bold text-[#001837]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FFD203] shrink-0" />
              <span>El último curso de inglés que necesitarás.</span>
            </div>

            {/* 2. Headline: Display/Hero (Montserrat 800, 70px / 77px, -0.025em) */}
            <div className="space-y-1 relative">
              <h1 className="font-display-hero text-4xl sm:text-6xl lg:text-[70px] text-[#001837] tracking-tight leading-[1.08]">
                Pierde el <span className="text-[#834296]">miedo</span><br />
                a hablar inglés.
              </h1>

              {/* Hand-drawn accent curve in #FFD203 directly under 'a hablar' */}
              <div className="pt-2">
                <svg
                  className="w-44 sm:w-56 h-4 text-[#FFD203]"
                  viewBox="0 0 160 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 10.5C25 4.5 75 2.5 157 7.5"
                    stroke="#FFD203"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* 3. Subtitle: Body/Large (Nunito 400, 18px / 28px) in text/muted #3C4C92 */}
            <p className="font-body-large text-[17px] sm:text-[18px] text-[#3C4C92] leading-[28px] max-w-xl">
              ¿Ya probaste apps, cursos, de todo? El problema nunca fue lo que sabes — es soltarte a hablar. Eso se practica, no se memoriza, desde tu primera clase con un profesor real.
            </p>

            {/* 4. Dual Actions alineados a la izquierda (F-Pattern UX) */}
            <div className="pt-3 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 text-left">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="md"
                  className="font-label-large text-base px-7 py-3 h-12 shadow-[3px_3px_0px_#EC9519]"
                >
                  Agendar entrevista gratis
                </Button>
              </Link>

              <Link
                href="/como-funciona"
                className="font-heading font-semibold text-base text-[#3C4C92] hover:text-[#001837] transition-colors py-2 text-left"
              >
                Conoce cómo funciona
              </Link>
            </div>
          </div>

          {/* Right Column: Prominent Large Transparent Collage Illustration */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px] lg:max-w-[620px]">
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
