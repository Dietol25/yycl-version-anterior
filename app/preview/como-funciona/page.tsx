"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Check, ArrowRight, MessageSquare, Sliders, Users, Sparkles } from 'lucide-react';

export default function PreviewRitmoComoFunciona() {
  const [viewMode, setViewMode] = useState<'propuesta1' | 'propuesta2' | 'actual'>('propuesta1');
  const [activeLevel, setActiveLevel] = useState<'a1' | 'b1' | 'c1'>('b1');

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />

      {/* Control Bar Superior Fijo */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b-2 border-[#001837] shadow-sm py-3 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-heading font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#834296]/10 text-[#834296] border border-[#834296]/20">
                Laboratorio de Ritmo Visual
              </span>
              <span className="text-xs text-slate-500 font-medium">Cómo Funciona</span>
            </div>
            <h1 className="text-sm sm:text-base font-heading font-extrabold text-[#001837]">
              Solución a la repetición de cards: 3 pasos + Modalidades + Niveles
            </h1>
          </div>

          <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-black/10 text-xs font-heading font-bold">
            <button
              onClick={() => setViewMode('propuesta1')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'propuesta1'
                  ? 'bg-[#001837] text-white shadow-xs'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              ✨ Propuesta 1 (Stepper + Hero Cards)
            </button>
            <button
              onClick={() => setViewMode('propuesta2')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'propuesta2'
                  ? 'bg-[#834296] text-white shadow-xs'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              ⚡ Propuesta 2 (Niveles Tabs)
            </button>
            <button
              onClick={() => setViewMode('actual')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === 'actual'
                  ? 'bg-slate-700 text-white shadow-xs'
                  : 'text-slate-500 hover:text-black'
              }`}
            >
              Vista Previa (9 Cards)
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* VISTA: PROPUESTA 1 (Stepper horizontal conectado + Cards con foto + Niveles aireados) */}
        {/* ========================================================================= */}
        {viewMode === 'propuesta1' && (
          <div className="space-y-0 animate-in fade-in duration-200">
            {/* 1. SECCIÓN MÉTODO: STEPPER / TIMELINE CONECTADO (Sin cards de cartón) */}
            <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
              <div className="max-w-[1200px] mx-auto px-5 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
                  <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#834296]">
                    Método
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                    Así funciona el método
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 font-medium">
                    Tres pasos sencillos y transparentes. Sin vueltas.
                  </p>
                </div>

                {/* Línea de tiempo fluida conectada */}
                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10">
                  {/* Línea conectora visual en Desktop */}
                  <div className="hidden md:block absolute top-7 left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-[#834296]/30 z-0" />

                  {/* Paso 01 */}
                  <div className="relative z-10 flex flex-col items-center text-center space-y-3 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#FFF8E6] border-2 border-[#EC9519] flex items-center justify-center text-[#B26B06] font-heading font-extrabold text-xl shadow-[3px_3px_0px_#001837] group-hover:-translate-y-1 transition-transform">
                      01
                    </div>
                    <div className="space-y-1.5 max-w-xs">
                      <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#001837]">
                        Agenda tu entrevista
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        20 minutos con un profesor de nuestro equipo, 100% gratuita y sin compromiso comercial.
                      </p>
                    </div>
                  </div>

                  {/* Paso 02 */}
                  <div className="relative z-10 flex flex-col items-center text-center space-y-3 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#F0F9FF] border-2 border-[#0284C7] flex items-center justify-center text-[#0284C7] font-heading font-extrabold text-xl shadow-[3px_3px_0px_#001837] group-hover:-translate-y-1 transition-transform">
                      02
                    </div>
                    <div className="space-y-1.5 max-w-xs">
                      <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#001837]">
                        Asignamos nivel y grupo
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        Evaluamos tu escucha y habla real en la videollamada. Sin tests automáticos impersonales.
                      </p>
                    </div>
                  </div>

                  {/* Paso 03 */}
                  <div className="relative z-10 flex flex-col items-center text-center space-y-3 group">
                    <div className="w-14 h-14 rounded-2xl bg-[#FAF5FC] border-2 border-[#834296] flex items-center justify-center text-[#834296] font-heading font-extrabold text-xl shadow-[3px_3px_0px_#001837] group-hover:-translate-y-1 transition-transform">
                      03
                    </div>
                    <div className="space-y-1.5 max-w-xs">
                      <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#001837]">
                        Hablas desde el día uno
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                        Entras directamente a conversar. Corrección en tiempo real que desbloquea tu confianza.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 2. FRANJA CREMA DE QUIEBRE */}
            <section className="py-12 sm:py-14 bg-[#FFE2C0] border-y border-black/5 text-center">
              <div className="max-w-3xl mx-auto px-5 space-y-2">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                  Nada de memorizar reglas en silencio
                </h2>
                <p className="text-sm sm:text-base text-[#001837] font-body-regular">
                  desde la primera sesión te ponemos a hablar en situaciones reales, así de simple.
                </p>
              </div>
            </section>

            {/* 3. SECCIÓN MODALIDADES: LAS VERDADERAS PROTAGONISTAS VISUALES */}
            <section className="py-20 lg:py-24 bg-[#FDF8F3]">
              <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
                  <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#EC9519]">
                    Modalidades
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                    Elige cómo quieres aprender
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 font-medium">
                    Profesores en vivo con corrección en tiempo real. Ahora estas 3 cards respiran y capturan toda la atención.
                  </p>
                </div>

                {/* Las 3 Cards con Foto ahora destacan sin competencia */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch max-w-6xl mx-auto">
                  {/* FLEX */}
                  <div className="bg-white rounded-3xl overflow-hidden border-2 border-[#001837] shadow-[5px_5px_0px_#001837] hover:-translate-y-1 transition-all flex flex-col justify-between">
                    <div className="h-44 bg-slate-50 relative overflow-hidden flex items-center justify-center p-3 border-b-2 border-[#001837]">
                      <img
                        src="/assets/02_COMO_FUNCIONA/YYCL_04_MODALIDAD_PERSONALIZADA.png"
                        alt="Modalidad Personalizada FLEX YYCL"
                        className="w-full h-full object-contain select-none"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div>
                          <span className="inline-block text-[10px] font-heading font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#834296]/10 text-[#834296] border border-[#834296]/20">
                            PERSONALIZADA
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-2xl font-extrabold font-heading text-[#001837]">FLEX</h3>
                          <Check className="w-5 h-5 text-[#16A34A] stroke-[2.5]" />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                          Clases uno a uno, enfocadas directamente en tus metas personales o profesionales al ritmo que elijas.
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <Link href="/planes#personalizada" className="inline-flex items-center gap-1 text-xs sm:text-sm font-heading font-bold text-[#834296] hover:underline">
                          <span>Ver personalizada</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* FUSION */}
                  <div className="bg-white rounded-3xl overflow-hidden border-2 border-[#001837] shadow-[5px_5px_0px_#001837] hover:-translate-y-1 transition-all flex flex-col justify-between">
                    <div className="h-44 bg-slate-50 relative overflow-hidden flex items-center justify-center p-3 border-b-2 border-[#001837]">
                      <img
                        src="/assets/02_COMO_FUNCIONA/YYCL_05_MODALIDAD_DUO.png"
                        alt="Modalidad Dúo FUSION YYCL"
                        className="w-full h-full object-contain select-none"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div>
                          <span className="inline-block text-[10px] font-heading font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#834296]/10 text-[#834296] border border-[#834296]/20">
                            DÚO
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-2xl font-extrabold font-heading text-[#001837]">FUSION</h3>
                          <Check className="w-5 h-5 text-[#16A34A] stroke-[2.5]" />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                          Mismo plan a tu medida compartido con quien tú elijas, a menor costo por persona e interacción compartida.
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <Link href="/planes#duo" className="inline-flex items-center gap-1 text-xs sm:text-sm font-heading font-bold text-[#834296] hover:underline">
                          <span>Ver dúo</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* CONNECTION */}
                  <div className="bg-white rounded-3xl overflow-hidden border-2 border-[#001837] shadow-[5px_5px_0px_#001837] hover:-translate-y-1 transition-all flex flex-col justify-between">
                    <div className="h-44 bg-slate-50 relative overflow-hidden flex items-center justify-center p-3 border-b-2 border-[#001837]">
                      <img
                        src="/assets/02_COMO_FUNCIONA/YYCL_03_MODALIDAD_GRUPAL.png"
                        alt="Modalidad Grupal CONNECTION YYCL"
                        className="w-full h-full object-contain select-none"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div>
                          <span className="inline-block text-[10px] font-heading font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#834296]/10 text-[#834296] border border-[#834296]/20">
                            GRUPAL
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-2xl font-extrabold font-heading text-[#001837]">CONNECTION</h3>
                          <Check className="w-5 h-5 text-[#16A34A] stroke-[2.5]" />
                        </div>
                        <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                          Con la energía de un grupo de máximo 8 personas del mismo nivel para ganar fluidez y naturalidad social.
                        </p>
                      </div>
                      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                        <Link href="/planes#grupal" className="inline-flex items-center gap-1 text-xs sm:text-sm font-heading font-bold text-[#834296] hover:underline">
                          <span>Ver grupal</span>
                          <span>→</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 4. SECCIÓN NIVELES: COLUMNAS ABIERTAS EDITORIALES (Sin cajas pesadas de cartón) */}
            <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
              <div className="max-w-[1200px] mx-auto px-5 lg:px-12">
                <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
                  <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#3C4C92]">
                    Niveles
                  </span>
                  <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                    Tu nivel, sin complicaciones.
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto">
                    No necesitas saber tu nivel antes de empezar. Lo identificamos contigo en la entrevista de 20 minutos.
                  </p>
                </div>

                {/* Formato Abierto & Aireado con Separador Sutil */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 bg-slate-50/70 rounded-3xl p-6 sm:p-8 border border-black/10">
                  {/* Principiante */}
                  <div className="py-6 md:py-2 md:px-6 space-y-4">
                    <div className="space-y-1">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-white text-[#001837] border border-black/10 font-heading font-bold text-[11px] uppercase tracking-wider">
                        A1 · A2
                      </span>
                      <h3 className="text-2xl font-extrabold font-heading text-[#001837]">Principiante</h3>
                      <p className="text-xs text-[#834296] font-heading font-bold uppercase tracking-wider">
                        Objetivo: Soltar la lengua
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Desde cero o bases olvidadas. Empiezas a hablar en situaciones cotidianas desde la primera sesión sin miedo a equivocarte.
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span>Vocabulario cotidiano útil</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span>Profesor en vivo guiado</span>
                      </li>
                    </ul>
                  </div>

                  {/* Intermedio */}
                  <div className="py-6 md:py-2 md:px-6 space-y-4">
                    <div className="space-y-1">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#F5E6F8] text-[#834296] border border-[#834296]/20 font-heading font-bold text-[11px] uppercase tracking-wider">
                        B1 · B2
                      </span>
                      <h3 className="text-2xl font-extrabold font-heading text-[#001837]">Intermedio</h3>
                      <p className="text-xs text-[#834296] font-heading font-bold uppercase tracking-wider">
                        Objetivo: Pensar en inglés
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Entiendes mucho pero te trabas al hablar. Desarrollas fluidez para reuniones de trabajo, viajes y opiniones espontáneas.
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span>Fluidez sin traducir mentalmente</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span>Reuniones y situaciones de trabajo</span>
                      </li>
                    </ul>
                  </div>

                  {/* Avanzado */}
                  <div className="py-6 md:py-2 md:px-6 space-y-4">
                    <div className="space-y-1">
                      <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#FFF5E6] text-[#EC9519] border border-[#EC9519]/30 font-heading font-bold text-[11px] uppercase tracking-wider">
                        C1
                      </span>
                      <h3 className="text-2xl font-extrabold font-heading text-[#001837]">Avanzado</h3>
                      <p className="text-xs text-[#EC9519] font-heading font-bold uppercase tracking-wider">
                        Objetivo: Precisión y liderazgo
                      </p>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Ya te comunicas con naturalidad y buscas pulir matices, precisión léxica y desenvolverte al más alto nivel profesional.
                    </p>
                    <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span>Matices y naturalidad ejecutiva</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-[#16A34A] shrink-0" />
                        <span>Presentaciones de alto impacto</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mt-10 text-center">
                  <Link
                    href="/agendar"
                    className="inline-flex items-center gap-1.5 font-heading font-bold text-sm sm:text-base text-[#834296] hover:text-[#001837] hover:underline transition-colors"
                  >
                    <span>Quiero conocer mi nivel con un profesor</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VISTA: PROPUESTA 2 (Selector interactivo de Niveles en Tabs)              */}
        {/* ========================================================================= */}
        {viewMode === 'propuesta2' && (
          <div className="py-16 max-w-4xl mx-auto px-5 space-y-12 animate-in fade-in duration-200">
            <div className="text-center space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#3C4C92]">
                Propuesta 2: Niveles con Selector Interactivo
              </span>
              <h2 className="text-3xl font-extrabold font-heading text-[#001837]">
                En lugar de 3 cajas, una vista enfocada
              </h2>
              <p className="text-sm text-slate-600">
                El usuario hace clic en el nivel que le interesa y lee el detalle sin saturar la pantalla.
              </p>
            </div>

            {/* Selector de Píldoras */}
            <div className="flex justify-center gap-3">
              <button
                onClick={() => setActiveLevel('a1')}
                className={`px-5 py-2.5 rounded-full text-xs font-heading font-bold transition-all cursor-pointer border ${
                  activeLevel === 'a1'
                    ? 'bg-[#001837] text-white border-[#001837] shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                A1 · A2 Principiante
              </button>
              <button
                onClick={() => setActiveLevel('b1')}
                className={`px-5 py-2.5 rounded-full text-xs font-heading font-bold transition-all cursor-pointer border ${
                  activeLevel === 'b1'
                    ? 'bg-[#834296] text-white border-[#834296] shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                B1 · B2 Intermedio (Más común)
              </button>
              <button
                onClick={() => setActiveLevel('c1')}
                className={`px-5 py-2.5 rounded-full text-xs font-heading font-bold transition-all cursor-pointer border ${
                  activeLevel === 'c1'
                    ? 'bg-[#EC9519] text-white border-[#EC9519] shadow-md'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                C1 Avanzado
              </button>
            </div>

            {/* Tarjeta Enfoque Única */}
            <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#001837] shadow-[5px_5px_0px_#001837]">
              {activeLevel === 'a1' && (
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-[#001837] font-heading font-bold text-xs uppercase tracking-wider">
                    Nivel Inicial · A1 - A2
                  </span>
                  <h3 className="text-3xl font-extrabold font-heading text-[#001837]">
                    Principiante: Soltar la lengua
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                    Desde cero o si estudiaste hace años y lo olvidaste. El foco está en romper la barrera del miedo y empezar a pronunciar frases cotidianas sin complejos.
                  </p>
                </div>
              )}
              {activeLevel === 'b1' && (
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#F5E6F8] text-[#834296] font-heading font-bold text-xs uppercase tracking-wider">
                    Nivel Conversacional · B1 - B2
                  </span>
                  <h3 className="text-3xl font-extrabold font-heading text-[#001837]">
                    Intermedio: Pensar en inglés
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                    Entiendes series o textos, pero cuando te toca hablar en una reunión de trabajo te quedas traduciendo en la cabeza. Aquí adquieres soltura, ritmo y argumentos espontáneos.
                  </p>
                </div>
              )}
              {activeLevel === 'c1' && (
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#FFF5E6] text-[#EC9519] font-heading font-bold text-xs uppercase tracking-wider">
                    Nivel Ejecutivo · C1
                  </span>
                  <h3 className="text-3xl font-extrabold font-heading text-[#001837]">
                    Avanzado: Precisión y Liderazgo
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed max-w-2xl">
                    Ya hablas con comodidad pero quieres afinar matices culturales, vocabulario sofisticado de tu industria y oratoria para presentaciones internacionales.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* VISTA: ACTUAL (Las 9 cards para contrastar)                                */}
        {/* ========================================================================= */}
        {viewMode === 'actual' && (
          <div className="py-12 max-w-4xl mx-auto px-5 text-center space-y-6">
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-sm">
              Esta es la estructura actual donde conviven 3 cards de pasos + 3 cards de modalidades + 3 cards de niveles (9 cajas con bordes oscuros).
            </div>
            <Link
              href="/como-funciona"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#001837] text-white font-heading font-bold text-sm"
            >
              <span>Ver página /como-funciona en vivo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
