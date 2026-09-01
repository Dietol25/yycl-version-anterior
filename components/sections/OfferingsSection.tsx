"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'english', label: 'Inglés' },
  { id: 'languages', label: 'Francés y Portugués' },
  { id: 'kids', label: 'Kids & Teens' },
  { id: 'business', label: 'Empresas' },
];

export const OfferingsSection = () => {
  const [activeCategory, setActiveCategory] = useState('english');
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: 'Hablas desde el minuto uno',
      desc: 'Conversación real con un profesor es el centro de cada clase.',
    },
    {
      title: 'Corrección en el momento justo',
      desc: 'Corrección que te hace avanzar sin interrumpir tu fluidez.',
    },
    {
      title: 'Practicas hasta que sale solo',
      desc: 'Con espacios de práctica rotativos incluidos, refuerzas lo aprendido en situaciones reales y sin presión.',
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy tracking-tight">
            Todo lo que ofrecemos
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
            Un camino directo para cada necesidad. Sin rodeos, sin relleno.
          </p>
        </div>

        {/* Filter Pills (Category Switcher) */}
        <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-yycl-navy text-white shadow-md shadow-yycl-navy/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isActive ? 'bg-white' : 'bg-slate-400'
                  }`}
                />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Container (Card + Illustration + Pillars) */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Offering Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <div className="md:col-span-7 space-y-4 text-left">
              <span className="text-sm font-bold font-heading text-yycl-purple block uppercase tracking-wider">
                {activeCategory === 'english' ? 'Inglés' :
                 activeCategory === 'languages' ? 'Francés & Portugués' :
                 activeCategory === 'kids' ? 'Kids' : 'Empresas'}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-yycl-navy tracking-tight">
                Aprende a hablar, no solo a estudiar
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Clases 100% conversacionales desde la primera clase.
              </p>

              <div className="pt-2">
                <Link
                  href="/planes"
                  className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold font-heading text-yycl-navy hover:text-yycl-purple transition-colors"
                >
                  <span>Más información</span>
                  <ArrowRight className="w-4 h-4 text-yycl-purple" />
                </Link>
              </div>
            </div>

            {/* Illustration */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative max-w-xs w-full rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <img
                  src="/assets/02_COMO_FUNCIONA/YYCL_04_MODALIDAD_PERSONALIZADA.png"
                  alt="Clase de inglés 1-a-1 en YYCL"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>
          </div>

          {/* 3 Step Interactive Pillars (Hablas desde el minuto uno, Corrección, Prácticas) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            {/* Left list with active indicator */}
            <div className="lg:col-span-7 space-y-6">
              {pillars.map((pillar, idx) => {
                const isActive = activePillar === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActivePillar(idx)}
                    className={`cursor-pointer transition-all p-4 rounded-2xl ${
                      isActive
                        ? 'border-l-4 border-yycl-navy bg-amber-50/40 pl-5 shadow-xs'
                        : 'border-l-4 border-transparent hover:bg-slate-50 pl-5 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <h4 className="text-lg sm:text-xl font-bold font-heading text-yycl-navy">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                <img
                  src="/assets/02_COMO_FUNCIONA/YYCL_03_MODALIDAD_GRUPAL.png"
                  alt="Metodología conversacional YYCL"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
