import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

write_file('components/sections/OfferingsSection.tsx', """\"use client\";

import React, { useState } from 'react';
import Link from 'next/link';
import { Sparkles, ArrowRight, Check, BookOpen, Users, Briefcase, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const CATEGORIES = [
  { id: 'english', label: 'Inglés Profesional', icon: <Briefcase className="w-4 h-4" /> },
  { id: 'languages', label: 'Francés & Portugués', icon: <BookOpen className="w-4 h-4" /> },
  { id: 'kids', label: 'Kids & Teens', icon: <Users className="w-4 h-4" /> },
  { id: 'exams', label: 'TOEFL / IELTS / CELPIP', icon: <GraduationCap className="w-4 h-4" /> },
];

const OFFERING_CONTENT: Record<string, { title: string; desc: string; bullets: string[]; cta: string; link: string; img: string }> = {
  english: {
    title: 'Inglés para Profesionales y Ejecutivos',
    desc: 'Diseñado específicamente para hispanohablantes de 30+ años que tienen buena comprensión lectora pero se bloquean al hablar o negociar en reuniones laborales.',
    bullets: [
      'Simulaciones de reuniones y presentaciones de alto impacto',
      'Desbloqueo de fonemas difíciles y entonación nativa',
      'Inglés de negocios adaptado a tu sector (Tech, Finanzas, Medicina, Marketing)',
      'Horarios flexibles matutinos y nocturnos'
    ],
    cta: 'Ver Planes de Inglés',
    link: '/planes',
    img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600'
  },
  languages: {
    title: 'Francés y Portugués Conversacional',
    desc: 'Aprende con profesores nativos certificados para inmigración a Canadá/Francia o negocios en Brasil y Portugal.',
    bullets: [
      'Preparación oficial TEF / TCF / DELF y Celpe-Bras',
      'Metodología conversacional acelerada',
      'Grupos reducidos o tutoría 1-a-1',
      'Práctica de acentos y modismos locales'
    ],
    cta: 'Explorar Idiomas',
    link: '/idiomas',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600'
  },
  kids: {
    title: 'YYCL Kids & Teens (6 a 16 años)',
    desc: 'Clases dinámicas y divertidas mediante pedagogía lúdica, juegos de rol y tecnología interactiva.',
    bullets: [
      'Profesores con especialización pedagógica infantil',
      'Grupos pequeños por rangos de edad exactos',
      'Foco en pronunciación natural y confianza temprana',
      'Reportes periódicos para padres de familia'
    ],
    cta: 'Conocer Programa Kids',
    link: '/kids',
    img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600'
  },
  exams: {
    title: 'Preparación Intensiva de Certificaciones Internacionales',
    desc: 'Estrategias probadas para maximizar tu puntaje en TOEFL iBT, IELTS General/Academic y CELPIP en tiempo récord.',
    bullets: [
      'Simulacros de examen reales con retroalimentación inmediata',
      'Estrategias de gestión de tiempo y descarte de respuestas',
      'Banco de preguntas y ensayos corregidos por examinadores',
      'Tasa de aprobación del 94% en el puntaje objetivo'
    ],
    cta: 'Ver Servicios Especiales',
    link: '/servicios-especiales',
    img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600'
  }
};

export const OfferingsSection = () => {
  const [activeTab, setActiveTab] = useState('english');
  const current = OFFERING_CONTENT[activeTab];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-yycl-purple block mb-2">
            Todo lo que Ofrecemos
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy">
            Programas a la medida de tu objetivo
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Selecciona la categoría para conocer el plan de estudio ideal para ti o tu familia.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-heading font-bold text-xs sm:text-sm transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-yycl-navy text-yycl-yellow shadow-lg shadow-yycl-navy/20 scale-105'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Active Content Card */}
        <div className="bg-slate-50 rounded-3xl p-8 sm:p-12 border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading text-yycl-navy">
              {current.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {current.desc}
            </p>

            <ul className="space-y-3">
              {current.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <Link href={current.link}>
                <Button variant="primary" size="md" className="font-bold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  {current.cta}
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white h-72 sm:h-80">
              <img
                src={current.img}
                alt={current.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yycl-navy/60 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
""")

write_file('components/sections/ResultsSection.tsx', """import React from 'react';
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
""")

write_file('components/sections/FaqSection.tsx', """\"use client\";

import React, { useState } from 'react';
import { FAQS } from '@/lib/data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-yycl-purple block mb-1">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl font-extrabold font-heading text-yycl-navy">
            Resolvemos todas tus dudas
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Todo lo que necesitas saber antes de comenzar tu viaje hacia la fluidez.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-base text-yycl-navy hover:text-yycl-purple transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-yycl-yellow shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-yycl-purple' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-sm text-slate-600 border-t border-slate-100 leading-relaxed animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
""")

write_file('components/sections/CtaBanner.tsx', """import React from 'react';
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
""")
print("Sections Part 2 completed")
