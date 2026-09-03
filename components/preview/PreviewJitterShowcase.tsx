"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Users, User, UserCheck, Check, Sparkles, MessageCircle, ArrowRight, Briefcase, Plane, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const PreviewJitterShowcase = () => {
  // Estado interactivo para el Bloque 2 (Personalizada)
  const [activeGoal, setActiveGoal] = useState<'work' | 'travel' | 'exam'>('work');

  return (
    <section className="py-20 sm:py-28 bg-white border-b border-[#001837]/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 space-y-20 sm:space-y-28">
        
        {/* Encabezado Editorial Limpio (Lexington) */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296] bg-[#834296]/10 px-3.5 py-1.5 rounded-full border border-[#834296]/20">
            <Sparkles className="w-3.5 h-3.5" />
            Modalidades YYCL · Hechas para Hablar
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#001837] tracking-tight">
            Elige cómo quieres soltarte a hablar
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-body-regular">
            Un diferencial por bloque. Cada formato tiene su propio ritmo, adaptado a tu estilo de vida.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* BLOQUE MODULAR 1: MODALIDAD GRUPAL (Jitter Pattern 1)                     */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-[#FDF8F3] rounded-3xl p-6 sm:p-10 lg:p-14 border-2 border-[#001837] shadow-[6px_6px_0px_#001837]">
          
          {/* Texto y Explicación */}
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#834296] text-white text-[11px] font-heading font-black px-3 py-1 rounded-full uppercase tracking-wider">
              <Users className="w-3.5 h-3.5" />
              <span>Grupal · La Energía del Grupo</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
              Aprende en comunidad. <br />
              <span className="text-[#834296]">Máximo 8 personas por sala.</span>
            </h3>

            <p className="text-sm sm:text-base text-slate-700 font-body-regular leading-relaxed">
              La mejor forma de perder la timidez. Compartes clase con estudiantes de tu mismo nivel, guiados por un profesor que asegura que <strong>todos hablen al menos el 70% de la clase</strong>.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm font-body-regular text-slate-700">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#834296] text-white flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                <span>Grupos de nivel homogéneo según el Marco Europeo (A1 a B2).</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#834296] text-white flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                <span>Dinámicas de debate, role-play y situaciones de la vida real.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#834296] text-white flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                <span>Acceso libre al Club de Conversación los fines de semana.</span>
              </li>
            </ul>

            <div className="pt-3">
              <Link href="/agendar">
                <Button variant="primary" size="md" className="font-heading font-bold text-xs sm:text-sm shadow-[3px_3px_0px_#EC9519]">
                  Agendar para grupo →
                </Button>
              </Link>
            </div>
          </div>

          {/* Micro-Motion Stage (Jitter style simulation) */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[420px] bg-white rounded-2xl p-5 sm:p-6 border-2 border-[#001837] shadow-[4px_4px_0px_#834296] space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-heading font-extrabold text-[#001837]">
                  Sala de conversación en vivo
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-heading font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  8 / 8 Estudiantes
                </span>
              </div>

              {/* Chat bubbles simuladas con motion */}
              <div className="space-y-3 font-body-regular text-xs">
                <div className="bg-purple-50/70 p-3 rounded-xl border border-purple-100 flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#834296] text-white flex items-center justify-center text-[10px] font-heading font-bold shrink-0">
                    Natty
                  </div>
                  <div>
                    <span className="font-heading font-bold text-[11px] text-[#834296] block">Teacher</span>
                    <p className="text-slate-800">«Who would like to share their opinion about remote work?»</p>
                  </div>
                </div>

                <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 flex items-start gap-2.5 ml-4">
                  <div className="w-7 h-7 rounded-full bg-[#EC9519] text-white flex items-center justify-center text-[10px] font-heading font-bold shrink-0">
                    🇨🇴 Cam
                  </div>
                  <div>
                    <span className="font-heading font-bold text-[11px] text-slate-700 block">Camila (Bogotá)</span>
                    <p className="text-slate-800">«In my opinion, it helps me save two hours of commute everyday!»</p>
                  </div>
                </div>
              </div>

              <div className="pt-2 text-center text-[11px] font-heading font-bold text-slate-400">
                100% interactivo · Cero exámenes de papel
              </div>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BLOQUE MODULAR 2: MODALIDAD PERSONALIZADA 1-A-1 (Jitter Pattern 2)        */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-white rounded-3xl p-6 sm:p-10 lg:p-14 border-2 border-[#001837] shadow-[6px_6px_0px_#001837]">
          
          {/* Micro-Motion Stage (Interactive Goal Selector) */}
          <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-[420px] bg-[#FDF8F3] rounded-2xl p-5 sm:p-6 border-2 border-[#001837] shadow-[4px_4px_0px_#EC9519] space-y-4">
              <span className="text-xs font-heading font-extrabold text-[#001837] block">
                Simula tu enfoque de aprendizaje:
              </span>

              {/* Selector de Objetivos */}
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveGoal('work')}
                  className={`p-2 rounded-xl text-center font-heading font-bold text-[11px] transition-all cursor-pointer border ${
                    activeGoal === 'work'
                      ? 'bg-[#EC9519] text-white border-[#001837] shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Briefcase className="w-4 h-4 mx-auto mb-1" />
                  <span>Trabajo</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveGoal('travel')}
                  className={`p-2 rounded-xl text-center font-heading font-bold text-[11px] transition-all cursor-pointer border ${
                    activeGoal === 'travel'
                      ? 'bg-[#EC9519] text-white border-[#001837] shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Plane className="w-4 h-4 mx-auto mb-1" />
                  <span>Viajes</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveGoal('exam')}
                  className={`p-2 rounded-xl text-center font-heading font-bold text-[11px] transition-all cursor-pointer border ${
                    activeGoal === 'exam'
                      ? 'bg-[#EC9519] text-white border-[#001837] shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <Award className="w-4 h-4 mx-auto mb-1" />
                  <span>Certificación</span>
                </button>
              </div>

              {/* Contenido Dinámico según objetivo */}
              <div className="bg-white p-4 rounded-xl border border-[#001837]/10 space-y-2 text-xs">
                {activeGoal === 'work' && (
                  <div className="space-y-1.5 animate-in fade-in-50 duration-200">
                    <span className="font-heading font-black text-[#EC9519] block">Plan: English for Career Growth</span>
                    <p className="text-slate-700">Simulaciones de entrevistas, presentaciones con clientes anglosajones y vocabulario técnico exacto de tu rubro.</p>
                  </div>
                )}
                {activeGoal === 'travel' && (
                  <div className="space-y-1.5 animate-in fade-in-50 duration-200">
                    <span className="font-heading font-black text-[#EC9519] block">Plan: Real World Travel & Immersion</span>
                    <p className="text-slate-700">Situaciones de aeropuerto, hoteles, restaurantes, emergencias y conversación casual con nativos sin bloqueos.</p>
                  </div>
                )}
                {activeGoal === 'exam' && (
                  <div className="space-y-1.5 animate-in fade-in-50 duration-200">
                    <span className="font-heading font-black text-[#EC9519] block">Plan: TOEFL / IELTS / CELPIP Prep</span>
                    <p className="text-slate-700">Estrategias cronometradas para la sección oral (Speaking), rúbricas de calificación y feedback minucioso.</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Texto Explicativo */}
          <div className="lg:col-span-6 space-y-5 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-[#EC9519] text-white text-[11px] font-heading font-black px-3 py-1 rounded-full uppercase tracking-wider">
              <User className="w-3.5 h-3.5" />
              <span>Personalizada 1-a-1 · Máxima Aceleración</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
              Un profesor exclusivo, <br />
              <span className="text-[#EC9519]">un plan hecho solo para ti.</span>
            </h3>

            <p className="text-sm sm:text-base text-slate-700 font-body-regular leading-relaxed">
              El 100% del tiempo de clase está enfocado en tus dudas, tus objetivos y tu velocidad. Si necesitas cancelar o reprogramar una clase por trabajo, tienes total flexibilidad.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm font-body-regular text-slate-700">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#EC9519] text-white flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                <span>Horarios totalmente adaptables a tu agenda laboral o personal.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#EC9519] text-white flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                <span>Corrección fonética y gramatical en tiempo real sin juicio.</span>
              </li>
            </ul>

            <div className="pt-3">
              <Link href="/agendar">
                <Button variant="primary" size="md" className="font-heading font-bold text-xs sm:text-sm shadow-[3px_3px_0px_#EC9519]">
                  Agendar 1-a-1 personalizado →
                </Button>
              </Link>
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* BLOQUE MODULAR 3: MODALIDAD DÚO (Jitter Pattern 3)                         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center bg-[#FDF8F3] rounded-3xl p-6 sm:p-10 lg:p-14 border-2 border-[#001837] shadow-[6px_6px_0px_#001837]">
          
          <div className="lg:col-span-6 space-y-5">
            <div className="inline-flex items-center gap-2 bg-[#4DC2DA] text-[#001837] text-[11px] font-heading font-black px-3 py-1 rounded-full uppercase tracking-wider">
              <UserCheck className="w-3.5 h-3.5" />
              <span>Dúo · El Balance Ideal</span>
            </div>

            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
              Personalizada en pareja. <br />
              <span className="text-[#0284C7]">Mismo objetivo, mejor inversión.</span>
            </h3>

            <p className="text-sm sm:text-base text-slate-700 font-body-regular leading-relaxed">
              Inscríbete con tu pareja, amigo o colega de trabajo. Disfrutan de la exclusividad de un profesor dedicado, pero con la motivación y el ahorro de estudiar acompañados.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm font-body-regular text-slate-700">
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#4DC2DA] text-[#001837] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                <span>Mismo profesor y temario a medida que en la opción individual.</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#4DC2DA] text-[#001837] flex items-center justify-center text-xs shrink-0 font-bold">✓</span>
                <span>Ahorro de hasta un 30% por persona respecto al plan individual.</span>
              </li>
            </ul>

            <div className="pt-3">
              <Link href="/agendar">
                <Button variant="primary" size="md" className="font-heading font-bold text-xs sm:text-sm shadow-[3px_3px_0px_#EC9519]">
                  Agendar en modalidad Dúo →
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="w-full max-w-[420px] bg-white rounded-2xl p-6 border-2 border-[#001837] shadow-[4px_4px_0px_#4DC2DA] text-center space-y-4">
              <div className="flex items-center justify-center -space-x-3">
                <div className="w-14 h-14 rounded-full border-2 border-[#001837] bg-amber-100 flex items-center justify-center font-heading font-black text-sm text-[#001837] shadow-xs">
                  Tú
                </div>
                <div className="w-14 h-14 rounded-full border-2 border-[#001837] bg-cyan-100 flex items-center justify-center font-heading font-black text-sm text-[#001837] shadow-xs">
                  Partner
                </div>
              </div>

              <div className="space-y-1">
                <h4 className="font-heading font-extrabold text-base text-[#001837]">
                  Aprendizaje Sincronizado
                </h4>
                <p className="text-xs text-slate-600 font-body-regular">
                  Practican diálogos entre ustedes con corrección experta del docente.
                </p>
              </div>

              <span className="inline-block text-[11px] font-heading font-bold text-[#0284C7] bg-cyan-50 px-3 py-1 rounded-full border border-cyan-200">
                ⚡ Modalidad favorita de parejas y socios
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
