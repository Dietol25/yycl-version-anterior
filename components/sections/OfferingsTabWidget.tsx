"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

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
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);

  const current = TABS.find((t) => t.id === activeTab) || TABS[0];
  const currentPillar = PILLARS[activePillar];

  return (
    <section className="pt-16 sm:pt-20 pb-12 sm:pb-14 bg-white border-t border-slate-100">
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

        {/* Tab Content Pane */}
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
              <div className="relative w-full max-w-[480px] aspect-[1535/1024]">
                <img
                  src={current.image}
                  alt={current.imageAlt}
                  width={1535}
                  height={1024}
                  className="w-full h-full object-contain select-none transition-all duration-300 hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Feature 3 Interactive Pillars:
            - Mobile: Pillars appear FIRST (order-1), Photo appears BELOW (order-2) to break up consecutive images!
            - Desktop: Photo on LEFT (lg:order-1), Pillars on RIGHT (lg:order-2).
        */}
        <div className="mt-20 pt-16 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Illustration: order-2 on mobile (below pillars), lg:order-1 on desktop (left side) */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex justify-center">
            <div 
              className="relative w-full max-w-[480px] aspect-[1535/1024] group select-none"
              style={{ minHeight: '260px' }}
            >
              {PILLARS.map((pillar) => {
                const isCurrent = activePillar === pillar.id;
                return (
                  <img
                    key={pillar.id}
                    src={pillar.image}
                    alt={pillar.alt}
                    width={1535}
                    height={1024}
                    className={`absolute inset-0 w-full h-full object-contain select-none transition-opacity duration-300 ${
                      isCurrent ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                    }`}
                  />
                );
              })}

              {/* Botón de Play Flotante en 'Hablas desde el minuto uno' (Laptop Video Preview) */}
              <button
                type="button"
                onClick={() => setIsPlayingVideo(true)}
                className={`absolute top-[44%] left-[48%] -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-[#FFD203] hover:bg-[#FFE2C0] text-[#001837] rounded-full border-2 border-[#001837] shadow-[3px_3px_0px_#001837] flex items-center justify-center transition-all duration-300 hover:scale-110 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none cursor-pointer z-20 group-hover:scale-105 ${
                  activePillar === 0 ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                aria-label="Reproducir video de clase real"
              >
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-[#001837] text-[#001837] ml-0.5" />
              </button>
            </div>
          </div>

          {/* 3 Pillars: order-1 on mobile (above photo), lg:order-2 on desktop (right side) */}
          <div className="order-1 lg:order-2 lg:col-span-6 space-y-4">
            {PILLARS.map((pillar) => {
              const isSelected = activePillar === pillar.id;
              return (
                <div
                  key={pillar.id}
                  onClick={() => setActivePillar(pillar.id)}
                  className={`border-l-4 pl-5 py-3 transition-all duration-200 cursor-pointer rounded-r-2xl min-h-[86px] flex flex-col justify-center ${
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

      {/* Modal Interactivo de Video */}
      {isPlayingVideo && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-xs animate-in fade-in duration-200"
          onClick={() => setIsPlayingVideo(false)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden border-2 border-[#001837] shadow-[6px_6px_0px_#001837] max-w-3xl w-full p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center pb-2 border-b border-slate-100">
              <h3 className="text-lg font-heading font-bold text-[#001837]">
                Clase real en vivo — Hablas desde el primer minuto
              </h3>
              <button
                onClick={() => setIsPlayingVideo(false)}
                className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-[#001837] hover:bg-slate-200 font-bold"
              >
                ✕
              </button>
            </div>
            <div className="aspect-video bg-black rounded-2xl flex items-center justify-center overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Clase Demostrativa YYCL"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
