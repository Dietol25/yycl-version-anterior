import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { PreviewBanner } from '@/components/preview/PreviewBanner';
import { PreviewHowItWorks } from '@/components/preview/PreviewHowItWorks';
import { PreviewDarkResults } from '@/components/preview/PreviewDarkResults';
import { BrushStroke } from '@/components/ui/BrushStroke';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: "Cómo Funciona · Propuesta Alternativa Fase 2",
  description: "Descubre el método conversacional de YYCL con el diseño alternativo inspirado en Jitter, Sofi Health y Lexington.",
};

export default function AlternativeComoFuncionaPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 0. Banner de Modo Preview Comparativo */}
      <PreviewBanner />

      {/* 1. Navbar Oficial */}
      <Navbar />

      {/* 2. Hero de Cómo Funciona */}
      <section className="py-16 sm:py-24 bg-[#FDF8F3] border-b border-[#001837]/10 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-5">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
            <span className="w-2 h-2 rounded-full bg-[#EC9519]" />
            <span>Método Conversacional YYCL</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.12]">
            Así funciona tu <br className="hidden sm:inline" />
            <span className="relative inline-block text-[#834296]">
              camino al inglés.
              <BrushStroke color="#FFD203" variant="brush" className="absolute -bottom-2.5 left-0 w-full h-4 -z-10 text-[#FFD203]" />
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-700 font-body-large max-w-xl mx-auto leading-relaxed">
            Un método diseñado para una sola cosa: que hables desde el primer día sin rodeos gramaticales ni miedo a equivocarte.
          </p>

          <div className="pt-2">
            <Link href="/agendar">
              <Button
                variant="primary"
                size="md"
                className="font-heading font-bold text-sm px-8 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
              >
                Probar el método gratis
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Storytelling Interactivo de 3 Pasos + Anatomía de la Clase */}
      <PreviewHowItWorks />

      {/* 4. Sección de Resultados y Reseñas en Navy Profundo */}
      <PreviewDarkResults />

      {/* 5. Footer Oficial */}
      <Footer />
    </main>
  );
}
