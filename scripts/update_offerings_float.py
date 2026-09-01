import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

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

        {/* Tab Navigation Buttons */}
        <div className="flex items-center justify-start lg:justify-center gap-2.5 overflow-x-auto pb-4 mb-14 no-scrollbar">
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

        {/* Tab Content Pane: Organic floating collage without rigid gray box */}
        <div className="bg-slate-50/60 border-2 border-slate-200/80 rounded-3xl p-8 sm:p-12 shadow-sm transition-all duration-200 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
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

            {/* Right Organic Floating Collage Asset (No rigid container box) */}
            <div className="lg:col-span-6 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[480px]">
                <img
                  src={current.image}
                  alt={current.imageAlt}
                  className="w-full h-auto object-contain select-none transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sub-Feature 3 Pillars with Floating Left Illustration */}
        <div className="mt-20 pt-16 border-t border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Floating Collage Media */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-[480px]">
              <img
                src="/assets/02_COMO_FUNCIONA/YYCL_03_MODALIDAD_GRUPAL.png"
                alt="Clases de conversación real"
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </div>

          {/* Right 3 Pillars */}
          <div className="lg:col-span-6 space-y-6">
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

print("OfferingsTabWidget updated with organic floating collage images")
