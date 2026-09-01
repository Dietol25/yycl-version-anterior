import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const CtaBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-yycl-purple-dark via-yycl-purple to-yycl-navy text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-yycl-yellow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-yycl-yellow text-xs font-bold uppercase tracking-wider border border-white/10">
          <Sparkles className="w-3.5 h-3.5" />
          Tu momento es ahora
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight">
          Sí puedes. Yes you can.
        </h2>

        <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto">
          Agenda hoy tu diagnóstico de nivel gratuito de 15 minutos. Sin tarjetas de crédito, sin compromisos. Solo tú y un profesor trazando tu camino al inglés fluido.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/agendar">
            <Button
              variant="primary"
              size="lg"
              className="font-extrabold shadow-yycl-yellow hover:scale-105"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              Agendar Mi Diagnóstico Gratis
            </Button>
          </Link>
          <Link href="/profesores">
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10"
            >
              Conocer al Equipo de Profesores
            </Button>
          </Link>
        </div>

        <div className="flex items-center justify-center gap-2 text-xs text-slate-300 pt-2">
          <ShieldCheck className="w-4 h-4 text-yycl-cyan" />
          <span>Garantía de satisfacción: si no amas tu primera sesión, te devolvemos el 100% de tu dinero.</span>
        </div>
      </div>
    </section>
  );
};
