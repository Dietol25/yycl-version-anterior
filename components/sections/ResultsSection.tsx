import React from 'react';
import { TESTIMONIALS } from '@/lib/data';
import { TestimonialCard } from '@/components/cards/TestimonialCard';

export const ResultsSection = () => {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-yycl-navy via-yycl-navy-light to-yycl-navy rounded-3xl p-8 sm:p-12 mb-16 text-white shadow-xl">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-yycl-yellow block mb-1">
              Resultados Reales Comprobados
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
              Cifras que respaldan nuestro compromiso contigo
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
              <span className="block text-3xl sm:text-4xl font-extrabold font-heading text-yycl-yellow">+1.200</span>
              <span className="text-xs sm:text-sm text-slate-200 mt-1 block">Profesionales Formados</span>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
              <span className="block text-3xl sm:text-4xl font-extrabold font-heading text-yycl-cyan">98%</span>
              <span className="text-xs sm:text-sm text-slate-200 mt-1 block">Tasa de Satisfacción</span>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
              <span className="block text-3xl sm:text-4xl font-extrabold font-heading text-emerald-400">4 Meses</span>
              <span className="text-xs sm:text-sm text-slate-200 mt-1 block">Promedio para Fluidez</span>
            </div>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xs">
              <span className="block text-3xl sm:text-4xl font-extrabold font-heading text-amber-300">8 Idiomas</span>
              <span className="text-xs sm:text-sm text-slate-200 mt-1 block">& Especialidades</span>
            </div>
          </div>
        </div>

        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-yycl-purple block mb-1">
            Testimonios Verificados
          </span>
          <h3 className="text-3xl font-bold font-heading text-yycl-navy">
            Lo que dicen nuestros estudiantes
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};
