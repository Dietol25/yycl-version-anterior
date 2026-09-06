import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { OfferingsTabWidget } from '@/components/sections/OfferingsTabWidget';
import { TestimonialsGrid } from '@/components/sections/TestimonialsGrid';
import { ModalidadesSection } from '@/components/sections/ModalidadesSection';
import { Button } from '@/components/ui/Button';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. TODO LO QUE OFRECEMOS (Widget con 6 Tabs + Pilares interactivos) */}
      <OfferingsTabWidget />

      {/* 3. RESULTADOS REALES (+1.000 / 94-98% + 3 Tarjetas de Reseñas de Google) */}
      <TestimonialsGrid />

      {/* 4. MODALIDADES (3 Cards Blancas con checklist fiel al Figma) */}
      <ModalidadesSection />

      {/* 5. CIERRE: Sí puedes. Yes you can. */}
      <section className="py-20 lg:py-24 bg-white text-center border-t border-slate-100">
        <div className="max-w-md mx-auto px-5 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy tracking-tight leading-tight">
            Sí puedes. Yes you can.
          </h2>
          <p className="text-sm text-slate-600 font-medium">
            Agenda tu entrevista gratuita y da el primer paso.
          </p>
          <div className="pt-3 space-y-2">
            <Link href="/agendar">
              <Button
                variant="primary"
                size="md"
                className="w-full font-bold text-sm h-12 shadow-[3px_3px_0px_#001837]"
              >
                Agendar entrevista gratis
              </Button>
            </Link>
            <p className="text-xs font-heading font-medium text-slate-500">
              20 min · Sin costo · Sin compromiso
            </p>
          </div>
        </div>
      </section>

      {/* 6. FOOTER BLANCO */}
      <Footer />
    </main>
  );
}
