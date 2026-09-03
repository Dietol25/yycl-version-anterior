"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { MessageSquare, Sliders, Users, CheckCircle2, ArrowRight, Play, Volume2, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const PreviewHowItWorks = () => {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <div className="space-y-20 sm:space-y-28">
      
      {/* 1. SECCIÓN DE LOS 3 PASOS EDITORIALES (Lexington + Jitter) */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#001837]/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296] bg-purple-50 px-3 py-1 rounded-full border border-purple-200">
              Método YYCL
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#001837] tracking-tight">
              Tres pasos hacia tu fluidez real
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-body-regular">
              Sin exámenes escritos interminables. Directo al punto: escucharte hablar y darte tu mapa de ruta.
            </p>
          </div>

          {/* Grid de los 3 Pasos con Selector Interactivo */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            
            {/* Paso 1 */}
            <div
              onClick={() => setActiveStep(1)}
              className={`rounded-3xl p-7 sm:p-8 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                activeStep === 1
                  ? 'border-[#001837] bg-[#FDF8F3] shadow-[6px_6px_0px_#FFD203]'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFD203] border-2 border-[#001837] flex items-center justify-center font-heading font-black text-lg text-[#001837] shadow-xs">
                  1
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#001837]">
                  Agenda tu entrevista gratuita
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-body-regular leading-relaxed">
                  15 minutos por Google Meet con Dirección de Estudios. Evaluamos tu nivel oral real y entendemos qué necesitas lograr.
                </p>
              </div>
              <span className="text-[11px] font-heading font-bold text-[#834296] pt-4 block">
                ✓ 100% gratuita y sin compromiso
              </span>
            </div>

            {/* Paso 2 */}
            <div
              onClick={() => setActiveStep(2)}
              className={`rounded-3xl p-7 sm:p-8 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                activeStep === 2
                  ? 'border-[#001837] bg-[#FDF8F3] shadow-[6px_6px_0px_#4DC2DA]'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#4DC2DA] border-2 border-[#001837] flex items-center justify-center font-heading font-black text-lg text-[#001837] shadow-xs">
                  2
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#001837]">
                  Te asignamos tu plan y grupo ideal
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-body-regular leading-relaxed">
                  Tu nivel exacto se define escuchándote hablar, no rellenando opciones múltiples. Te ubicamos en el grupo o con el profesor perfecto.
                </p>
              </div>
              <span className="text-[11px] font-heading font-bold text-[#0284C7] pt-4 block">
                ✓ Marco Común Europeo (A1 a C1)
              </span>
            </div>

            {/* Paso 3 */}
            <div
              onClick={() => setActiveStep(3)}
              className={`rounded-3xl p-7 sm:p-8 border-2 transition-all cursor-pointer flex flex-col justify-between ${
                activeStep === 3
                  ? 'border-[#001837] bg-[#FDF8F3] shadow-[6px_6px_0px_#834296]'
                  : 'border-slate-200 bg-white hover:border-slate-300'
              }`}
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#834296] border-2 border-[#001837] flex items-center justify-center font-heading font-black text-lg text-white shadow-xs">
                  3
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#001837]">
                  Empiezas a hablar desde el minuto uno
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-body-regular leading-relaxed">
                  La clase es un espacio seguro para practicar. Se acabaron los silencios incómodos y la frustración de traducir mentalmente.
                </p>
              </div>
              <span className="text-[11px] font-heading font-bold text-[#834296] pt-4 block">
                ✓ 70% conversación activa del alumno
              </span>
            </div>

          </div>

        </div>
      </section>

      {/* 2. ANATOMÍA DE UNA CLASE YYCL (Jitter Showcase Modular) */}
      <section className="py-16 sm:py-24 bg-[#FDF8F3] border-b border-[#001837]/10">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
                <Sparkles className="w-3.5 h-3.5" />
                Metodología en Acción
              </span>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#001837] tracking-tight">
                ¿Qué pasa en una clase típica de 60 minutos?
              </h2>

              <div className="space-y-4 pt-2">
                <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-[#001837] shadow-[3px_3px_0px_#001837] flex items-start gap-4">
                  <span className="text-sm font-heading font-black text-[#834296] bg-purple-50 px-2.5 py-1 rounded-lg shrink-0">
                    10 MIN
                  </span>
                  <div>
                    <h4 className="font-heading font-extrabold text-sm text-[#001837]">Icebreaker & Calentamiento</h4>
                    <p className="text-xs text-slate-600 font-body-regular mt-0.5">Preguntas detonantes de actualidad para despertar tu cerebro en inglés sin presiones.</p>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-[#001837] shadow-[3px_3px_0px_#FFD203] flex items-start gap-4">
                  <span className="text-sm font-heading font-black text-[#EC9519] bg-amber-50 px-2.5 py-1 rounded-lg shrink-0">
                    35 MIN
                  </span>
                  <div>
                    <h4 className="font-heading font-extrabold text-sm text-[#001837]">Conversación Guiada & Role-Play</h4>
                    <p className="text-xs text-slate-600 font-body-regular mt-0.5">Discusión activa, simulación de reuniones o casos reales. Los estudiantes llevan la voz cantante.</p>
                  </div>
                </div>

                <div className="bg-white p-4 sm:p-5 rounded-2xl border-2 border-[#001837] shadow-[3px_3px_0px_#4DC2DA] flex items-start gap-4">
                  <span className="text-sm font-heading font-black text-[#0284C7] bg-cyan-50 px-2.5 py-1 rounded-lg shrink-0">
                    15 MIN
                  </span>
                  <div>
                    <h4 className="font-heading font-extrabold text-sm text-[#001837]">Feedback Personalizado & Fonética</h4>
                    <p className="text-xs text-slate-600 font-body-regular mt-0.5">El docente te explica exactamente cómo corregir tus muletillas y sonar más natural.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Video Modal / Showcase Card */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-[440px] bg-white rounded-3xl p-6 border-2 border-[#001837] shadow-[6px_6px_0px_#001837] text-center space-y-5">
                <div className="h-56 bg-slate-900 rounded-2xl overflow-hidden relative border border-black/10 flex items-center justify-center group">
                  <img
                    src="/assets/02_COMO_FUNCIONA/YYCL_03_MODALIDAD_GRUPAL.png"
                    alt="Clase de inglés en vivo"
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-[#FFD203] border-2 border-[#001837] flex items-center justify-center shadow-[3px_3px_0px_#001837] group-hover:scale-110 transition-transform cursor-pointer">
                      <Play className="w-6 h-6 fill-[#001837] text-[#001837] ml-1" />
                    </div>
                  </div>
                </div>

                <div className="space-y-1">
                  <h4 className="font-heading font-extrabold text-base text-[#001837]">
                    Mira cómo se vive una clase real
                  </h4>
                  <p className="text-xs text-slate-600 font-body-regular">
                    Sin libretas de gramática: pantalla compartida, notas colaborativas y conversación continua.
                  </p>
                </div>

                <div className="pt-1">
                  <Link href="/agendar" className="block">
                    <Button variant="primary" size="md" className="w-full font-heading font-bold text-xs sm:text-sm shadow-[3px_3px_0px_#EC9519]">
                      Probar el método gratis
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
