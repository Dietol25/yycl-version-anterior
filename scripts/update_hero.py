import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

write_file('components/sections/HeroSection.tsx', """import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const HeroSection = () => {
  return (
    <section className="bg-white py-12 lg:py-20 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline, Kicker, Subtitle, Dual CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top kicker badge */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-yycl-navy">
              <span className="w-2.5 h-2.5 rounded-full bg-yycl-yellow inline-block shrink-0 shadow-xs" />
              <span>El último curso de inglés que necesitarás.</span>
            </div>

            {/* H1 Main Headline */}
            <div className="space-y-1 relative">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold font-heading text-yycl-navy tracking-tight leading-[1.12]">
                Pierde el <span className="text-yycl-purple">miedo</span><br />
                a hablar inglés.
              </h1>

              {/* Hand-drawn accent curve underline SVG beneath 'a hablar' */}
              <div className="pt-1">
                <svg
                  className="w-36 sm:w-44 h-4 text-yycl-yellow"
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

            {/* Subtitle */}
            <p className="text-base sm:text-[17px] text-slate-600 max-w-xl leading-relaxed font-body-regular">
              ¿Ya probaste apps, cursos, de todo? El problema nunca fue lo que sabes — es soltarte a hablar. Eso se practica, no se memoriza, desde tu primera clase con un profesor real.
            </p>

            {/* Dual Actions matching screenshot */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="md"
                  className="font-bold text-sm px-6 py-3 h-12 shadow-[3px_3px_0px_#001837]"
                >
                  Agendar entrevista
                </Button>
              </Link>

              <Link href="/como-funciona">
                <Button
                  variant="ghost"
                  size="md"
                  className="font-bold text-sm px-6 py-3 h-12 bg-white text-yycl-navy border-2 border-yycl-navy shadow-[3px_3px_0px_#001837] hover:bg-slate-50"
                >
                  Ver cómo funciona
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Exact YYCL Asset Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-[480px] w-full">
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
""")

print("HeroSection updated cleanly")
