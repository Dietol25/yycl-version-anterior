import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. Update OfferingsTabWidget.tsx with animated tab switching & interactive 3 pillars
write_file('components/sections/OfferingsTabWidget.tsx', """\"use client\";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface TabItem {
  id: string;
  tabLabel: string;
  tag: string;
  tagColor: string;
  dotColor: string;
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
    tagColor: 'text-[#834296]',
    dotColor: 'bg-[#834296]',
    title: 'Aprende a hablar, no solo a estudiar',
    description: 'Clases 100% conversacionales desde la primera clase con profesores reales.',
    link: '/planes',
    image: '/assets/02_COMO_FUNCIONA/YYCL_04_MODALIDAD_PERSONALIZADA.png',
    imageAlt: 'Clases conversacionales de inglés en YYCL',
  },
  {
    id: 'idiomas',
    tabLabel: 'Francés y Portugués',
    tag: 'Idiomas',
    tagColor: 'text-[#EC9519]',
    dotColor: 'bg-[#FFD203]',
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
    tagColor: 'text-[#4DC2DA]',
    dotColor: 'bg-[#4DC2DA]',
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
    tagColor: 'text-[#001837]',
    dotColor: 'bg-[#001837]',
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
    tagColor: 'text-[#EC9519]',
    dotColor: 'bg-[#EC9519]',
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
    tagColor: 'text-[#834296]',
    dotColor: 'bg-[#834296]',
    title: 'Conoce a tus profesores',
    description: 'Profesores reales, con experiencia, enfocados en que hables con confianza.',
    link: '/profesores',
    image: '/assets/10_SOBRE_YYCL/YYCL_24_SOBRE_YYCL_CONVERSACION_HUMANA.png',
    imageAlt: 'Docentes y equipo humano de YYCL',
  }
];

const PILLARS = [
  {
    id: 0,
    title: 'Hablas desde el minuto uno',
    desc: 'Nada de ejercicios mudos. La conversación real con un profesor es el centro de cada clase.',
    image: '/assets/02_COMO_FUNCIONA/YYCL_03_MODALIDAD_GRUPAL.png',
    alt: 'Estudiantes hablando inglés desde el primer minuto'
  },
  {
    id: 1,
    title: 'Corrección en el momento justo',
    desc: 'Corrección que te hace avanzar sin interrumpir tu fluidez.',
    image: '/assets/02_COMO_FUNCIONA/YYCL_04_MODALIDAD_PERSONALIZADA.png',
    alt: 'Profesor corrigiendo con pedagogía y empatía'
  },
  {
    id: 2,
    title: 'Practicas hasta que sale solo',
    desc: 'Con espacios de práctica rotativos incluidos, refuerzas lo aprendido en situaciones reales y sin presión.',
    image: '/assets/02_COMO_FUNCIONA/YYCL_05_MODALIDAD_DUO.png',
    alt: 'Práctica constante y natural'
  }
];

export const OfferingsTabWidget = () => {
  const [activeTab, setActiveTab] = useState('ingles');
  const [activePillar, setActivePillar] = useState(0);

  const current = TABS.find((t) => t.id === activeTab) || TABS[0];
  const currentPillar = PILLARS[activePillar];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#3C4C92]">
            Oferta
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
            Todo lo que ofrecemos
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium pt-1">
            Un camino directo para cada necesidad. Sin rodeos, sin relleno.
          </p>
        </div>

        {/* Tab Navigation Buttons with Category Colors */}
        <div className="flex items-center justify-start lg:justify-center gap-2.5 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-[13px] font-heading font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-[#001837] text-white shadow-[2px_2px_0px_#001837] scale-102 ring-2 ring-[#001837]/10'
                    : 'bg-white text-[#3C4C92] hover:text-[#001837] hover:bg-slate-50 border border-black/10 shadow-[1px_1px_0px_rgba(0,0,0,0.06)]'
                }`}
              >
                <span
                  className={`w-2.5 h-2.5 rounded-full shrink-0 ${tab.dotColor} ${
                    isActive ? 'ring-2 ring-white/60' : ''
                  }`}
                />
                <span>{tab.tabLabel}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Pane with smooth animated fade & keyframe transition */}
        <div className="bg-gradient-to-br from-slate-50/80 to-white border-2 border-[#001837]/10 rounded-3xl p-8 sm:p-12 shadow-[4px_4px_0px_rgba(0,24,55,0.06)] transition-all duration-300 overflow-hidden">
          <div key={current.id} className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center animate-in fade-in-50 slide-in-from-bottom-2 duration-300">
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <span className={`text-xs sm:text-sm font-heading font-extrabold tracking-wider uppercase block ${current.tagColor}`}>
                {current.tag}
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold font-heading text-[#001837] leading-tight tracking-tight">
                {current.title}
              </h3>

              <p className="text-base text-slate-600 leading-relaxed font-body-regular max-w-lg">
                {current.description}
              </p>

              <div className="pt-3">
                <Link
                  href={current.link}
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-heading font-bold text-[#001837] hover:text-[#834296] transition-colors"
                >
                  <span>Más información</span>
                  <ArrowRight className="w-4 h-4 text-[#001837]" />
                </Link>
              </div>
            </div>

            {/* Right Organic Floating Collage Asset */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px]">
                <img
                  src={current.image}
                  alt={current.imageAlt}
                  className="w-full h-auto object-contain select-none transition-all duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Feature 3 Interactive Pillars with Synchronized Floating Illustration */}
        <div className="mt-20 pt-16 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Floating Collage Media (changes smoothly with pillar selection) */}
          <div className="lg:col-span-6 flex justify-center">
            <div key={activePillar} className="relative w-full max-w-[480px] animate-in fade-in duration-300">
              <img
                src={currentPillar.image}
                alt={currentPillar.alt}
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </div>

          {/* Right 3 Clickable/Hoverable Pillars */}
          <div className="lg:col-span-6 space-y-4">
            {PILLARS.map((pillar) => {
              const isSelected = activePillar === pillar.id;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`border-l-4 pl-5 py-2.5 transition-all duration-200 cursor-pointer rounded-r-2xl ${
                    isSelected
                      ? 'border-[#001837] bg-slate-50/80 shadow-xs'
                      : 'border-transparent hover:border-[#834296]/50 hover:bg-slate-50/40'
                  }`}
                >
                  <h4 className={`text-lg sm:text-xl font-heading font-bold transition-colors ${
                    isSelected ? 'text-[#001837]' : 'text-slate-700 hover:text-[#001837]'
                  }`}>
                    {pillar.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed font-body-regular pt-0.5">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
""")

# 2. Update TestimonialsGrid.tsx with Touch Gestures / Swipe support & Keyboard arrow support
write_file('components/sections/TestimonialsGrid.tsx', """\"use client\";

import React, { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';

export const TestimonialsGrid = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  // Touch handlers for fluid mobile swipe gesture
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 45;

    if (distance > minSwipeDistance) {
      // Swiped left -> Next
      nextSlide();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> Prev
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

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

        {/* 2 Stat Counters in Violet Accent */}
        <div className="flex items-center justify-center gap-12 sm:gap-20 mb-14 text-center">
          <div>
            <span className="block text-3xl sm:text-4xl font-extrabold font-heading text-yycl-purple">
              +1.000
            </span>
            <span className="block text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              estudiantes
            </span>
          </div>

          <div className="w-px h-12 bg-slate-200" />

          <div>
            <span className="block text-3xl sm:text-4xl font-extrabold font-heading text-yycl-purple">
              94-98%
            </span>
            <span className="block text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              de satisfacción
            </span>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* DESKTOP VIEW (>= lg): Grid of 3 all-violet cards                          */}
        {/* ========================================================================= */}
        <div className="hidden lg:grid grid-cols-3 gap-8 items-stretch">
          {TESTIMONIALS.slice(0, 3).map((item, idx) => (
            <div
              key={idx}
              className="bg-yycl-purple text-white rounded-3xl p-8 border border-black/10 shadow-[4px_4px_0px_#000000] flex flex-col justify-between space-y-6 hover:-translate-y-1.5 transition-transform duration-200"
            >
              <div className="space-y-4">
                {/* 5 Stars directly in #FFD203 */}
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FFD203] text-[#FFD203]" />
                  ))}
                </div>

                {/* Large quote mark and quote */}
                <div className="space-y-1">
                  <span className="text-4xl font-serif text-white leading-none block">“</span>
                  <blockquote className="text-[15px] font-heading font-medium text-white leading-relaxed">
                    "{item.quote}"
                  </blockquote>
                </div>
              </div>

              {/* Author Info */}
              <div className="space-y-3 pt-4 border-t border-white/15">
                <div className="flex items-center gap-3.5">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover shrink-0 border border-white/20 bg-purple-900"
                  />
                  <div>
                    <span className="block font-heading font-bold text-sm text-white leading-tight">
                      {item.name}
                    </span>
                    <span className="block text-xs font-medium text-white/80">
                      {item.role}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1">
                  <a
                    href="#"
                    className="font-heading font-bold text-white hover:text-yycl-yellow hover:underline inline-flex items-center gap-1"
                  >
                    <span>Ver reseña original</span>
                    <span>→</span>
                  </a>
                  <span className="text-base">{item.countryFlag || '🇨🇴'}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ========================================================================= */}
        {/* MOBILE VIEW (< lg): Interactive Carousel with Touch Gestures              */}
        {/* ========================================================================= */}
        <div
          className="block lg:hidden max-w-sm mx-auto space-y-6 touch-pan-y select-none"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            key={activeIndex}
            className="bg-yycl-purple text-white rounded-3xl p-7 border border-black/10 shadow-[4px_4px_0px_#000000] flex flex-col justify-between space-y-6 min-h-[380px] animate-in fade-in-50 slide-in-from-right-2 duration-200"
          >
            <div className="space-y-4">
              {/* 5 Stars */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#FFD203] text-[#FFD203]" />
                ))}
              </div>

              {/* Quote */}
              <div className="space-y-1">
                <span className="text-4xl font-serif text-white leading-none block">“</span>
                <blockquote className="text-[15px] font-heading font-medium text-white leading-relaxed">
                  "{TESTIMONIALS[activeIndex].quote}"
                </blockquote>
              </div>
            </div>

            {/* Author Details */}
            <div className="space-y-3 pt-3 border-t border-white/15">
              <div className="flex items-center gap-3">
                <img
                  src={TESTIMONIALS[activeIndex].avatar}
                  alt={TESTIMONIALS[activeIndex].name}
                  className="w-11 h-11 rounded-full object-cover shrink-0 border border-white/20 bg-purple-900"
                />
                <div>
                  <span className="block font-heading font-bold text-sm text-white leading-tight">
                    {TESTIMONIALS[activeIndex].name}
                  </span>
                  <span className="block text-xs font-medium text-white/80">
                    {TESTIMONIALS[activeIndex].role}
                  </span>
                </div>
              </div>

              <div className="flex items-center justify-between text-xs pt-1">
                <a
                  href="#"
                  className="font-heading font-bold text-white hover:text-yycl-yellow hover:underline inline-flex items-center gap-1"
                >
                  <span>Ver reseña original</span>
                  <span>→</span>
                </a>
                <span className="text-sm">{TESTIMONIALS[activeIndex].countryFlag || '🇨🇴'}</span>
              </div>
            </div>
          </div>

          {/* SliderControls Component matching Figma */}
          <div className="flex items-center justify-center gap-4 pt-2">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-[#834296] text-white flex items-center justify-center border border-black/10 shadow-[2px_2px_0px_#001837] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer hover:bg-purple-800 transition-all"
              aria-label="Anterior testimonio"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.slice(0, 3).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`rounded-full transition-all cursor-pointer ${
                    activeIndex === idx
                      ? 'w-6 h-2.5 bg-[#001837]'
                      : 'w-2.5 h-2.5 bg-black/15 hover:bg-black/30'
                  }`}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-[#834296] text-white flex items-center justify-center border border-black/10 shadow-[2px_2px_0px_#001837] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer hover:bg-purple-800 transition-all"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
""")

print("Heuristic recommendations implemented: micro-animations, interactive pillars, and mobile touch swipe")
