import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. OfferingsTabWidget.tsx (Interactive 6-Tab Widget with exact copy & illustrations)
write_file('components/sections/OfferingsTabWidget.tsx', """\"use client\";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface TabItem {
  id: string;
  tabLabel: string;
  tag: string;
  title: string;
  description: string;
  link: string;
  image: string;
  imageAlt: string;
}

const TABS: TabItem[] = [
  {
    id: 'ingles',
    tabLabel: 'Inglés',
    tag: 'Inglés',
    title: 'Aprende a hablar, no solo a estudiar',
    description: 'Clases 100% conversacionales desde la primera clase.',
    link: '/planes',
    image: '/assets/02_COMO_FUNCIONA/YYCL_04_MODALIDAD_PERSONALIZADA.png',
    imageAlt: 'Clases conversacionales de inglés en YYCL',
  },
  {
    id: 'idiomas',
    tabLabel: 'Francés y Portugués',
    tag: 'Idiomas',
    title: 'También hablamos francés y portugués',
    description: 'Clases 100% personalizadas de francés y portugués, sin examen de nivel previo.',
    link: '/idiomas',
    image: '/assets/06_IDIOMAS/YYCL_13_IDIOMAS_FRANCES_PORTUGUES_REVISION_BANDERA.png',
    imageAlt: 'Clases de francés y portugués en YYCL',
  },
  {
    id: 'kids',
    tabLabel: 'Kids & Teens',
    tag: 'Kids & Teens',
    title: 'Inglés para niños',
    description: 'Clases uno a uno, adaptadas a su edad e intereses, con seguimiento constante.',
    link: '/kids',
    image: '/assets/07_KIDS/YYCL_15_KIDS_JUEGO.png',
    imageAlt: 'Inglés para niños y adolescentes en YYCL',
  },
  {
    id: 'empresas',
    tabLabel: 'Capacitación corporativa en idiomas',
    tag: 'Empresas',
    title: 'Idiomas para tu equipo',
    description: 'Programas in-company de inglés, francés y portugués, a medida de tu empresa.',
    link: '/empresas',
    image: '/assets/08_EMPRESAS/YYCL_19_EMPRESAS_EQUIPO_COLABORACION.png',
    imageAlt: 'Capacitación corporativa de idiomas para empresas',
  },
  {
    id: 'examenes',
    tabLabel: 'Servicios Especiales',
    tag: 'Exámenes',
    title: 'Prepárate para tu examen',
    description: 'TOEFL, IELTS, CELPIP y examen de ciudadanía. Solo para nivel B2 o C1.',
    link: '/servicios-especiales',
    image: '/assets/05_SERVICIOS_ESPECIALES/YYCL_11_SERVICIOS_ESTUDIO_ENFOCADO.png',
    imageAlt: 'Preparación de exámenes internacionales TOEFL e IELTS',
  },
  {
    id: 'equipo',
    tabLabel: 'Nuestro equipo',
    tag: 'Equipo',
    title: 'Conoce a tus profesores',
    description: 'Profesores reales, con experiencia, enfocados en que hables con confianza.',
    link: '/profesores',
    image: '/assets/10_SOBRE_YYCL/YYCL_24_SOBRE_YYCL_CONVERSACION_HUMANA.png',
    imageAlt: 'Docentes y equipo humano de YYCL',
  }
];

export const OfferingsTabWidget = () => {
  const [activeTab, setActiveTab] = useState('ingles');
  const current = TABS.find((t) => t.id === activeTab) || TABS[0];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#3C4C92]">
            Oferta
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy tracking-tight">
            Todo lo que ofrecemos
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium pt-1">
            Un camino directo para cada necesidad. Sin rodeos, sin relleno.
          </p>
        </div>

        {/* Tab Navigation Buttons (Desktop Grid / Mobile Horizontal Scroll) */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-14 no-scrollbar">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-[13px] font-heading font-semibold transition-all duration-150 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-yycl-navy text-white shadow-[2px_2px_0px_#001837] scale-102'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200/60'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full shrink-0 ${
                    isActive ? 'bg-white' : 'bg-slate-400'
                  }`}
                />
                <span>{tab.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Pane (Left Copy + Right Media Box) */}
        <div className="bg-slate-50/70 border-2 border-slate-200/90 rounded-3xl p-8 sm:p-12 shadow-sm transition-all duration-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <span className="text-xs sm:text-sm font-heading font-bold text-yycl-cyan tracking-wider uppercase block">
                {current.tag}
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold font-heading text-yycl-navy leading-tight tracking-tight">
                {current.title}
              </h3>

              <p className="text-base text-slate-600 leading-relaxed font-body-regular max-w-lg">
                {current.description}
              </p>

              <div className="pt-3">
                <Link
                  href={current.link}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-heading font-bold text-yycl-navy hover:text-yycl-purple transition-colors"
                >
                  <span>Más información</span>
                  <ArrowRight className="w-4 h-4 text-yycl-navy" />
                </Link>
              </div>
            </div>

            {/* Right Media Box */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-white border-2 border-yycl-navy rounded-2xl overflow-hidden shadow-[4px_4px_0px_#001837] aspect-[4/3] flex items-center justify-center relative">
                <img
                  src={current.image}
                  alt={current.imageAlt}
                  className="w-full h-full object-cover select-none"
                  onError={(e) => {
                    // Fallback to placeholder if asset path differs
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Feature 3 Pillars with Left Illustration */}
        <div className="mt-20 pt-16 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Media Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-slate-100 border-2 border-yycl-navy rounded-2xl overflow-hidden shadow-[4px_4px_0px_#001837] aspect-[4/3] flex items-center justify-center">
              <img
                src="/assets/02_COMO_FUNCIONA/YYCL_03_MODALIDAD_GRUPAL.png"
                alt="Clases de conversación real"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right 3 Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border-l-4 border-yycl-navy pl-5 py-1 space-y-1">
              <h4 className="text-lg sm:text-xl font-heading font-bold text-yycl-navy">
                Hablas desde el minuto uno
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-body-regular">
                Nada de ejercicios mudos. La conversación real con un profesor es el centro de cada clase.
              </p>
            </div>

            <div className="border-l-4 border-transparent hover:border-yycl-navy/40 pl-5 py-1 space-y-1 transition-colors">
              <h4 className="text-lg sm:text-xl font-heading font-bold text-yycl-navy">
                Corrección en el momento justo
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-body-regular">
                Corrección que te hace avanzar sin interrumpir tu fluidez.
              </p>
            </div>

            <div className="border-l-4 border-transparent hover:border-yycl-navy/40 pl-5 py-1 space-y-1 transition-colors">
              <h4 className="text-lg sm:text-xl font-heading font-bold text-yycl-navy">
                Practicas hasta que sale solo
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed font-body-regular">
                Con espacios de práctica rotativos incluidos, refuerzas lo aprendido en situaciones reales y sin presión.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
""")

# 2. Update TestimonialsGrid.tsx (Exact 3 Cards on Desktop + Stat counters)
write_file('components/sections/TestimonialsGrid.tsx', """import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Yuliana Navarro',
    role: 'Estudiante de YYCL',
    quote: 'Me han encantado... Me he permitido preguntar, hablar y lanzarme. Me gusta que no hay juzgamientos; por eso aprovecho todo.',
    source: 'Opinión de Google · 5.0★',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Nicolas Ibañez Esenarro',
    role: 'Estudiante de YYCL',
    quote: 'Lo puedo decir en inglés: \"Jose is THE GOAT\". He progresado mucho (presente perfecto simple) en poco tiempo con sus clases! Siempre muy paciente y pedagógico.',
    source: 'Opinión de Google · 5.0★',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
  },
  {
    name: 'Diana Proaño',
    role: 'Guía de turismo',
    quote: 'YYCL me ayudó a refrescar mis conocimientos y a practicar toda la teoría que había estudiado hace tiempo, también pude mejorar la gramática, el vocabulario, la lectura y el habla de una manera fácil y con tiempo flexible.',
    source: 'Opinión de Google · 5.0★',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
  }
];

export const TestimonialsGrid = () => {
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy tracking-tight">
            Resultados reales
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Lo que importa no es cuánto estudiaste antes, sino que esta vez sí lo lograste.
          </p>
        </div>

        {/* 2 Stat Counters */}
        <div className="flex items-center justify-center gap-12 sm:gap-20 mb-14 text-center">
          <div>
            <span className="block text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy">
              +1.000
            </span>
            <span className="block text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              estudiantes
            </span>
          </div>

          <div className="w-px h-12 bg-slate-200" />

          <div>
            <span className="block text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy">
              94-98%
            </span>
            <span className="block text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              de satisfacción
            </span>
          </div>
        </div>

        {/* 3 Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {REVIEWS.map((rev, idx) => (
            <div
              key={idx}
              className="bg-white border-2 border-yycl-navy rounded-3xl p-7 sm:p-8 shadow-[4px_4px_0px_#001837] flex flex-col justify-between space-y-6 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#001837] transition-all duration-200"
            >
              <div className="space-y-4">
                {/* 5 Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yycl-navy text-yycl-navy" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-[15px] font-heading font-medium text-slate-800 leading-relaxed">
                  “{rev.quote}”
                </blockquote>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    src={rev.avatar}
                    alt={rev.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-yycl-navy shrink-0"
                  />
                  <div>
                    <span className="block font-heading font-bold text-sm text-yycl-navy">
                      {rev.name}
                    </span>
                    <span className="block text-xs text-slate-500 font-medium">
                      {rev.role}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <a
                    href="#"
                    className="font-heading font-bold text-yycl-navy hover:underline inline-flex items-center gap-1"
                  >
                    <span>Ver reseña original</span>
                    <span>→</span>
                  </a>
                  <span className="text-slate-400 text-[11px] font-medium">
                    {rev.source}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
""")

# 3. Update ModalidadesSection.tsx (3 Clean White Cards with exact copy)
write_file('components/sections/ModalidadesSection.tsx', """import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';

export const ModalidadesSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#3C4C92]">
            Nuestros programas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy tracking-tight">
            Modalidades
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            3 modalidades: grupal, personalizada o en dúo. El precio lo hablamos en tu entrevista gratuita.
          </p>
        </div>

        {/* 3 White Modalidad Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* Card 1: Grupal */}
          <div className="bg-white border-2 border-yycl-navy rounded-3xl p-7 sm:p-8 shadow-[4px_4px_0px_#001837] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-yycl-navy">
                  Grupal
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Aprendizaje en conjunto y ritmo compartido.
                </p>
              </div>

              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-yycl-navy shrink-0 mt-0.5" />
                  <span>Máximo 8 alumnos</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-yycl-navy shrink-0 mt-0.5" />
                  <span>Clases en vivo</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-yycl-navy shrink-0 mt-0.5" />
                  <span>Profesores con años de experiencia</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: Personalizada */}
          <div className="bg-white border-2 border-yycl-navy rounded-3xl p-7 sm:p-8 shadow-[4px_4px_0px_#001837] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-yycl-navy">
                  Personalizada
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Atención total a tu progreso individual.
                </p>
              </div>

              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-yycl-navy shrink-0 mt-0.5" />
                  <span>Clases uno a uno</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-yycl-navy shrink-0 mt-0.5" />
                  <span>Clases enfocadas a tu objetivo</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-yycl-navy shrink-0 mt-0.5" />
                  <span>Horario a tu elección</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 3: Personalizada, en pareja */}
          <div className="bg-white border-2 border-yycl-navy rounded-3xl p-7 sm:p-8 shadow-[4px_4px_0px_#001837] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-yycl-navy">
                  Personalizada, en pareja
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Aprende con un compañero de tu nivel.
                </p>
              </div>

              <ul className="space-y-3 pt-2">
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-yycl-navy shrink-0 mt-0.5" />
                  <span>Clases para dos</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-yycl-navy shrink-0 mt-0.5" />
                  <span>Ritmo en pareja</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-yycl-navy shrink-0 mt-0.5" />
                  <span>Cada uno paga menos que en Personalizada individual</span>
                </li>
                <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <Check className="w-4 h-4 text-yycl-navy shrink-0 mt-0.5" />
                  <span>Clases enfocadas a tu objetivo</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Link Ver todos los planes */}
        <div className="text-center pt-10">
          <Link
            href="/planes"
            className="inline-flex items-center gap-1.5 font-heading font-bold text-sm text-yycl-navy hover:underline"
          >
            <span>Ver todos los planes</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
""")

# 4. Update Footer.tsx (Clean white footer matching Image 3)
write_file('components/navigation/Footer.tsx', """\"use client\";

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { Button } from '@/components/ui/Button';
import { InstagramIcon, LinkedinIcon, YoutubeIcon, FacebookIcon } from '@/components/icons/SocialIcons';
import { CheckCircle2 } from 'lucide-react';

export const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-white text-slate-800 pt-16 pb-12 border-t-2 border-slate-200">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-slate-200">
          {/* Col 1: Brand Logo + Newsletter Form (4 cols) */}
          <div className="md:col-span-5 space-y-4">
            <Link href="/" className="inline-block">
              <Logo size={48} />
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-sm leading-relaxed">
              Recibe noticias y aprende algo nuevo cada mes en tu correo.
            </p>

            {subscribed ? (
              <div className="bg-emerald-50 border border-emerald-300 rounded-xl p-3 flex items-center gap-2 text-emerald-800">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                <p className="text-xs font-semibold">¡Te has suscrito con éxito!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2 max-w-sm">
                <input
                  type="email"
                  required
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-11 px-3.5 bg-slate-50 text-yycl-navy rounded-xl text-xs sm:text-sm placeholder-slate-400 focus:outline-none border-2 border-yycl-navy shadow-[2px_2px_0px_#001837]"
                />
                <button
                  type="submit"
                  className="h-11 px-5 bg-white text-yycl-navy font-heading font-bold text-xs sm:text-sm rounded-xl border-2 border-yycl-navy shadow-[2px_2px_0px_#001837] hover:bg-yycl-yellow transition-colors cursor-pointer shrink-0"
                >
                  Suscribir
                </button>
              </form>
            )}

            <p className="text-[11px] text-slate-400">
              Al suscribirte aceptas recibir correos de YYCL. Puedes cancelar en cualquier momento.
            </p>
          </div>

          {/* Col 2: Explora (3 cols) */}
          <div className="md:col-span-2 space-y-3 text-xs">
            <h4 className="font-heading font-bold text-yycl-navy uppercase tracking-wider text-xs">
              Explora
            </h4>
            <div className="flex flex-col space-y-2 text-slate-600 font-medium">
              <Link href="/" className="hover:text-yycl-navy transition-colors">Inicio</Link>
              <Link href="/como-funciona" className="hover:text-yycl-navy transition-colors">Cómo funciona</Link>
              <Link href="/resultados" className="hover:text-yycl-navy transition-colors">Resultados</Link>
              <Link href="/profesores" className="hover:text-yycl-navy transition-colors">Nuestro equipo</Link>
              <Link href="/sobre-yycl" className="hover:text-yycl-navy transition-colors">Sobre YYCL</Link>
              <Link href="/login" className="hover:text-yycl-navy transition-colors">Plataforma</Link>
              <Link href="/sobre-yycl" className="hover:text-yycl-navy transition-colors">Trabaja con nosotros</Link>
              <Link href="/sobre-yycl" className="hover:text-yycl-navy transition-colors">Portal de profesores</Link>
            </div>
          </div>

          {/* Col 3: Nuestros programas (3 cols) */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h4 className="font-heading font-bold text-yycl-navy uppercase tracking-wider text-xs">
              Nuestros programas
            </h4>
            <div className="flex flex-col space-y-2 text-slate-600 font-medium">
              <Link href="/idiomas" className="hover:text-yycl-navy transition-colors">Otros Idiomas</Link>
              <Link href="/kids" className="hover:text-yycl-navy transition-colors">Kids & Teens</Link>
              <Link href="/empresas" className="hover:text-yycl-navy transition-colors">Capacitación corporativa en idiomas</Link>
              <Link href="/servicios-especiales" className="hover:text-yycl-navy transition-colors">Servicios Especiales</Link>
            </div>
          </div>

          {/* Col 4: Síguenos (2 cols) */}
          <div className="md:col-span-2 space-y-3 text-xs">
            <h4 className="font-heading font-bold text-yycl-navy uppercase tracking-wider text-xs">
              Síguenos
            </h4>
            <div className="flex flex-col space-y-2 text-slate-600 font-medium">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-navy">
                <FacebookIcon className="w-4 h-4 text-yycl-navy" />
                <span>Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-navy">
                <InstagramIcon className="w-4 h-4 text-yycl-navy" />
                <span>Instagram</span>
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-navy">
                <span className="font-bold">𝕏</span>
                <span>X</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-navy">
                <LinkedinIcon className="w-4 h-4 text-yycl-navy" />
                <span>LinkedIn</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-navy">
                <YoutubeIcon className="w-4 h-4 text-yycl-navy" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright + Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 Yes You Can Languages. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/sobre-yycl" className="hover:underline">Privacidad</Link>
            <Link href="/sobre-yycl" className="hover:underline">Términos del servicio</Link>
            <Link href="/sobre-yycl" className="hover:underline">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
""")

# 5. Update app/page.tsx with the full faithful desktop/mobile distribution
write_file('app/page.tsx', """import React from 'react';
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
          <div className="pt-3">
            <Link href="/agendar">
              <Button
                variant="primary"
                size="md"
                className="w-full font-bold text-sm h-12 shadow-[3px_3px_0px_#001837]"
              >
                Agenda tu entrevista gratuita
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 6. FOOTER BLANCO */}
      <Footer />
    </main>
  );
}
""")

print("Complete Desktop/Mobile Home distribution applied successfully")
