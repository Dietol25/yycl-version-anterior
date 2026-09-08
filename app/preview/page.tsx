import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { PreviewBanner } from '@/components/preview/PreviewBanner';
import { PreviewHero } from '@/components/preview/PreviewHero';
import { PreviewJitterShowcase } from '@/components/preview/PreviewJitterShowcase';
import { PreviewDarkResults } from '@/components/preview/PreviewDarkResults';
import { Button } from '@/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: "Fase 2 Preview · Propuesta Alternativa YYCL",
  description: "Propuesta alternativa de diseño inspirada en Jitter (motion modular), Sofi Health (transición suave de scroll) y Lexington (color blocking).",
};

export default function AlternativePreviewPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 0. Banner de Modo Preview Comparativo */}
      <PreviewBanner />

      {/* 1. Navbar Oficial */}
      <Navbar />

      {/* 2. HERO: Color Blocking Cálido #FDF8F3 + Autoridad Directa (Lexington + Wall Street English) */}
      <PreviewHero />

      {/* 3. SHOWCASE MODULAR: Servicios Destacados con Micro-Motion (Jitter.video) */}
      <PreviewJitterShowcase />

      {/* 4. RESULTADOS & AUTORIDAD: Color Blocking Oscuro #001837 + Google Reviews 5.0 (Sofi Health + Berlitz) */}
      <PreviewDarkResults />

      {/* 5. CIERRE FINAL: Sí puedes. Yes You Can. */}
      <section className="py-24 lg:py-28 bg-[#FDF8F3] text-center border-t border-[#001837]/10">
        <div className="max-w-lg mx-auto px-5 space-y-5">
          <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
            Tu próximo paso
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
            Sí puedes. <br />
            <span className="text-[#834296]">Yes You Can.</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-body-regular">
            15 minutos de conversación con nuestro equipo para definir tu punto de partida, totalmente gratis.
          </p>
          <div className="pt-3">
            <Link href="/agendar">
              <Button
                variant="primary"
                size="lg"
                className="w-full max-w-sm font-heading font-extrabold text-sm sm:text-base h-13 shadow-[4px_4px_0px_#EC9519]"
              >
                <span>Agendar entrevista gratuita</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Footer Oficial */}
      <Footer />
    </main>
  );
}
