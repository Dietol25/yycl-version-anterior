"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Check, ArrowRight, User, Users, UserPlus } from 'lucide-react';
import { Button } from '@/components/ui/Button';

// 3 Modalidades Oficiales
const MODALIDADES = [
  {
    id: 'personalizada',
    badge: 'PERSONALIZADA',
    name: 'FLEX',
    headline: 'Un profesor, un plan. Hecho para ti.',
    tagline: 'Clases uno a uno, enfocadas directamente en tu objetivo personal o profesional.',
    accentColor: '#FFD203',
    borderColor: '#EC9519',
    badgeBg: 'bg-[#FFF8E6] text-[#B26B06] border-[#EC9519]/30',
    icon: User,
    image: '/assets/02_COMO_FUNCIONA/YYCL_04_MODALIDAD_PERSONALIZADA.png',
    imageAlt: 'Modalidad Personalizada FLEX YYCL',
    bullets: [
      '100% personalizada a tu ritmo y metas',
      'Horarios flexibles coordinados contigo',
      'Atención y corrección exclusiva 1 a 1'
    ]
  },
  {
    id: 'duo',
    badge: 'DÚO',
    name: 'FUSION',
    headline: 'Dos personas, un mismo profesor.',
    tagline: 'Mismo plan a tu medida compartido con quien tú elijas, a menor costo por persona.',
    accentColor: '#4DC2DA',
    borderColor: '#0284C7',
    badgeBg: 'bg-[#F0F9FF] text-[#0284C7] border-[#4DC2DA]/30',
    icon: Users,
    image: '/assets/02_COMO_FUNCIONA/YYCL_05_MODALIDAD_DUO.png',
    imageAlt: 'Modalidad Dúo FUSION YYCL',
    bullets: [
      'Clases para dos con el mismo profesor',
      'Interacción en pareja y menor inversión',
      'Ideal para amigos, parejas o colegas'
    ]
  },
  {
    id: 'grupal',
    badge: 'GRUPAL',
    name: 'CONNECTION',
    headline: 'Aprende junto a otros en grupos reducidos.',
    tagline: 'Con la energía de un grupo de máximo 8 personas para ganar fluidez conversacional.',
    accentColor: '#834296',
    borderColor: '#834296',
    badgeBg: 'bg-[#FAF5FC] text-[#834296] border-[#834296]/30',
    icon: UserPlus,
    image: '/assets/02_COMO_FUNCIONA/YYCL_03_MODALIDAD_GRUPAL.png',
    imageAlt: 'Modalidad Grupal CONNECTION YYCL',
    bullets: [
      'Máximo 8 alumnos del mismo nivel',
      'Dinámicas de conversación y debate en vivo',
      'Profesores expertos guiando cada sesión'
    ]
  }
];

export default function AlternativeComoFuncionaPage() {
  const [activeProposal, setActiveProposal] = useState<'a' | 'b' | 'c'>('a');
  const [activeTabId, setActiveTabId] = useState('personalizada');

  const currentTab = MODALIDADES.find((m) => m.id === activeTabId) || MODALIDADES[0];

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />

      {/* Selector de Propuesta Flotante Superior */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b-2 border-[#001837] shadow-sm py-3.5 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <span className="text-[11px] font-heading font-extrabold uppercase tracking-wider text-[#834296]">
              Laboratorio de Propuestas · Cómo Funciona
            </span>
            <h1 className="text-base sm:text-lg font-heading font-extrabold text-[#001837]">
              Explora cómo resolver el espacio y las fotos
            </h1>
          </div>

          <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-black/10">
            <button
              onClick={() => setActiveProposal('a')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold transition-all cursor-pointer ${
                activeProposal === 'a'
                  ? 'bg-[#001837] text-white shadow-xs'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              Opción A: Cards Apaisadas
            </button>
            <button
              onClick={() => setActiveProposal('b')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold transition-all cursor-pointer ${
                activeProposal === 'b'
                  ? 'bg-[#834296] text-white shadow-xs'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              Opción B: Tabs Editorial
            </button>
            <button
              onClick={() => setActiveProposal('c')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-heading font-bold transition-all cursor-pointer ${
                activeProposal === 'c'
                  ? 'bg-[#EC9519] text-white shadow-xs'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              Opción C: Grid 3 Col Compacto
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto px-5 lg:px-8 space-y-12">
          {/* Header de Sección */}
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#EC9519]">
              Modalidades
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
              Elige cómo quieres aprender
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Profesores reales, con años de experiencia, no grabaciones. Corrección que te hace avanzar.
            </p>
          </div>

          {/* ================================================================= */}
          {/* PROPUESTA A: Cards Horizontales / Apaisadas (Cero Aire Muerto)    */}
          {/* ================================================================= */}
          {activeProposal === 'a' && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="text-center pb-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-heading font-bold bg-[#FFE2C0] text-[#001837] border border-black/10">
                  ✨ Opción A: Lectura fluida tipo pasaporte sin blanco innecesario
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5">
                {MODALIDADES.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl p-5 sm:p-6 border-2 border-[#001837] shadow-[4px_4px_0px_#001837] hover:-translate-y-0.5 transition-all flex flex-col md:flex-row items-center gap-6"
                  >
                    {/* Imagen / Sticker recortado con marco suave */}
                    <div className="w-full md:w-56 h-40 md:h-36 bg-slate-50 rounded-2xl flex items-center justify-center p-3 shrink-0 border border-black/10">
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="w-full h-full object-contain select-none"
                      />
                    </div>

                    {/* Contenido Editorial Directo */}
                    <div className="flex-1 space-y-2 text-center md:text-left">
                      <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
                        <span className={`text-[10px] font-heading font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full border ${item.badgeBg}`}>
                          {item.badge}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[#001837] tracking-tight">
                          {item.name}
                        </h3>
                      </div>

                      <p className="text-sm sm:text-base font-heading font-bold text-[#3C4C92] leading-snug">
                        {item.headline}
                      </p>

                      <p className="text-xs sm:text-sm text-slate-600 font-body-regular max-w-xl">
                        {item.tagline}
                      </p>
                    </div>

                    {/* CTA a la derecha */}
                    <div className="shrink-0 w-full md:w-auto flex justify-center md:justify-end border-t md:border-t-0 md:border-l border-slate-100 pt-4 md:pt-0 md:pl-6">
                      <Link
                        href={`/planes#${item.id}`}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold text-[#834296] hover:text-[#001837] hover:underline"
                      >
                        <span>Ver {item.badge.toLowerCase()}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* PROPUESTA B: Tabs Switcher Editorial Interactivo (Ahorra 70% Espacio) */}
          {/* ================================================================= */}
          {activeProposal === 'b' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="text-center pb-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-heading font-bold bg-[#E0F2FE] text-[#0284C7] border border-black/10">
                  ✨ Opción B: Tabs interactivo — Cero scroll repetitivo y máxima elegancia
                </span>
              </div>

              {/* Botones de Tab */}
              <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
                {MODALIDADES.map((tab) => {
                  const isSelected = tab.id === activeTabId;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTabId(tab.id)}
                      className={`px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer border-2 ${
                        isSelected
                          ? 'bg-white text-[#001837] border-[#001837] shadow-[3px_3px_0px_#001837] scale-102'
                          : 'bg-white/60 text-slate-600 border-transparent hover:bg-white hover:border-slate-200'
                      }`}
                    >
                      <span className="text-[#834296] mr-1.5 uppercase tracking-wider text-[11px] font-extrabold">
                        {tab.badge}
                      </span>
                      <span>· {tab.name}</span>
                    </button>
                  );
                })}
              </div>

              {/* Panel del Tab Activo */}
              <div className="bg-white rounded-3xl p-7 sm:p-10 border-2 border-[#001837] shadow-[5px_5px_0px_#001837] grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Lado Izquierdo: Copy & Bullets */}
                <div className="md:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <span className={`inline-block text-[11px] font-heading font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full border ${currentTab.badgeBg}`}>
                      {currentTab.badge}
                    </span>
                    <h3 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                      {currentTab.name}
                    </h3>
                    <p className="text-base sm:text-lg text-[#3C4C92] font-heading font-bold leading-snug">
                      {currentTab.headline}
                    </p>
                    <p className="text-sm text-slate-600 font-body-regular leading-relaxed">
                      {currentTab.tagline}
                    </p>
                  </div>

                  <ul className="space-y-2.5 pt-2 border-t border-slate-100">
                    {currentTab.bullets.map((b, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 font-medium">
                        <div className="w-5 h-5 rounded-full bg-[#16A34A]/10 text-[#16A34A] flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <Link href={`/planes#${currentTab.id}`}>
                      <Button
                        variant="primary"
                        size="md"
                        className="font-heading font-bold text-xs sm:text-sm shadow-[3px_3px_0px_#EC9519]"
                      >
                        <span>Conocer plan {currentTab.name}</span>
                        <ArrowRight className="w-4 h-4 ml-1.5" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Lado Derecho: Imagen limpia */}
                <div className="md:col-span-5 flex justify-center">
                  <div className="w-full max-w-[320px] aspect-square bg-slate-50 rounded-2xl p-4 flex items-center justify-center border border-black/10">
                    <img
                      src={currentTab.image}
                      alt={currentTab.imageAlt}
                      className="w-full h-full object-contain select-none"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================= */}
          {/* PROPUESTA C: Grid 3 Columnas Proporción Áurea (16:9 y Compacto)   */}
          {/* ================================================================= */}
          {activeProposal === 'c' && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="text-center pb-2">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-heading font-bold bg-[#F3E8FA] text-[#834296] border border-black/10">
                  ✨ Opción C: Grid tradicional de 3 columnas pero proporcionado (h-40, fotos PNG oficiales y sin aire vacío)
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {MODALIDADES.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white rounded-3xl overflow-hidden border-2 border-[#001837] shadow-[4px_4px_0px_#001837] hover:-translate-y-1 transition-all flex flex-col justify-between"
                  >
                    {/* Header con Contenedor de Imagen Compacto 16:9 */}
                    <div className="h-40 bg-slate-50 relative overflow-hidden flex items-center justify-center p-3 border-b-2 border-[#001837]">
                      <span className="absolute top-3 left-3 text-[10px] font-heading font-extrabold uppercase tracking-wider px-3 py-0.5 rounded-full bg-white text-[#834296] shadow-xs border border-black/10">
                        {item.badge}
                      </span>
                      <img
                        src={item.image}
                        alt={item.imageAlt}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    {/* Cuerpo de Texto Compacto y Equilibrado */}
                    <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-2xl font-extrabold font-heading text-[#001837] tracking-tight">
                            {item.name}
                          </h3>
                          <Check className="w-5 h-5 text-[#16A34A] stroke-[2.5]" />
                        </div>
                        <p className="text-xs sm:text-[13px] text-slate-600 font-medium leading-relaxed">
                          {item.tagline}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <Link
                          href={`/planes#${item.id}`}
                          className="inline-flex items-center gap-1 text-xs sm:text-sm font-heading font-bold text-[#834296] hover:underline"
                        >
                          <span>Ver {item.badge.toLowerCase()}</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Comparador de Criterio */}
          <div className="p-6 rounded-2xl bg-white border border-black/10 text-xs sm:text-sm text-slate-600 space-y-2">
            <h4 className="font-heading font-bold text-[#001837] uppercase tracking-wider text-xs">
              Resumen de diferencias técnicas frente a lo actual:
            </h4>
            <ul className="space-y-1 list-disc list-inside">
              <li><strong>Imágenes:</strong> En todas las opciones se usan los PNGs garantizados que nunca se rompen (<code>YYCL_04_MODALIDAD_PERSONALIZADA.png</code>, <code>YYCL_05_MODALIDAD_DUO.png</code>, <code>YYCL_03_MODALIDAD_GRUPAL.png</code>).</li>
              <li><strong>Eliminación de aire:</strong> Se redujo la altura de la imagen de 260px a 140-160px, ajustando el contenido para que ninguna card quede desierta.</li>
              <li><strong>Diferenciación con Planes:</strong> La opción A o B le dan a <em>Cómo Funciona</em> una identidad propia, sin ser una copia de la tabla de precios.</li>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
