"use client";

import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';

export default function PlanesPage() {
  const planes = [
    {
      id: 'grupal',
      title: 'Grupal',
      color: 'text-[#4DC2DA]',
      borderTop: 'border-t-[#4DC2DA]',
      subtitle: 'Aprende junto a otros, con la energía de un grupo pequeño.',
      features: [
        'Máximo 8 alumnos',
        'Clases en vivo',
        'Profesores con años de experiencia'
      ]
    },
    {
      id: 'personalizada',
      title: 'Personalizada',
      color: 'text-[#834296]',
      borderTop: 'border-t-[#834296]',
      subtitle: 'Un profesor, un plan, hecho para ti.',
      features: [
        'Clases uno a uno',
        'Clases enfocadas a tu objetivo',
        'Horario a tu elección'
      ]
    },
    {
      id: 'duo',
      title: 'Dúo',
      color: 'text-[#4DC2DA]',
      borderTop: 'border-t-[#4DC2DA]',
      subtitle: 'Mismo profesor exclusivo, mismo plan a medida, compartido con alguien que va por lo mismo que tú.',
      features: [
        'Clases para dos',
        'Ritmo en pareja',
        'Cada uno paga menos que en Personalizada individual',
        'Clases enfocadas a tu objetivo'
      ]
    }
  ];

  const extraBenefits = [
    'Club de conversación',
    'Llamadas simuladas',
    'Talleres temáticos',
    'Acceso a la plataforma'
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION: "Planes que se adaptan a ti" (Split 2 Columnas)          */}
        {/* ========================================================================= */}
        <section className="py-12 sm:py-16 lg:py-20 bg-white">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Copy & CTA */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
                  <span className="w-2 h-2 rounded-full bg-[#EC9519]" />
                  <span>Nuestros programas</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.15]">
                  Planes que se adaptan a <span className="text-[#834296]">ti</span>
                </h1>

                <p className="text-base sm:text-lg text-[#3C4C92] font-body-large max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Tres modalidades, un mismo método. El plan a tu medida lo definimos en tu entrevista gratuita.
                </p>

                <div className="pt-2">
                  <Link href="/agendar">
                    <Button
                      variant="secondary"
                      size="md"
                      className="font-heading font-bold text-sm px-8 py-3.5 h-12 shadow-[3px_3px_0px_#001837]"
                    >
                      Elegir mi modalidad
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column: Illustration */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[500px]">
                  <img
                    src="/assets/02_COMO_FUNCIONA/YYCL_04_MODALIDAD_PERSONALIZADA.png"
                    alt="Estudiantes y profesores de inglés en YYCL"
                    className="w-full h-auto object-contain select-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. MODALIDADES: 3 Tarjetas con Gradient Uniformes                         */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#3C4C92]">
                Nuestros programas
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                Modalidades
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                Elige cómo quieres aprender. El precio lo hablamos en tu entrevista gratuita.
              </p>
            </div>

            {/* 3 Modality Pricing Cards con Design System Limpio */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
              {planes.map((plan, pIdx) => {
                const badgeColor = pIdx === 0 ? 'bg-purple-100 text-[#834296] border-[#834296]/30' : pIdx === 1 ? 'bg-amber-100 text-[#EC9519] border-[#EC9519]/30' : 'bg-cyan-100 text-[#001837] border-[#4DC2DA]/40';
                const checkColor = pIdx === 0 ? '#834296' : pIdx === 1 ? '#EC9519' : '#4DC2DA';
                return (
                  <div
                    key={plan.id}
                    className="group bg-white text-[#001837] hover:bg-gradient-brand-v2 rounded-3xl p-7 sm:p-8 border-2 border-[#001837] shadow-[5px_5px_0px_#001837] hover:shadow-[7px_7px_0px_#001837] hover:-translate-y-1.5 flex flex-col justify-between space-y-6 transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className={`inline-block text-[11px] font-heading font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${badgeColor} group-hover:bg-white/20 group-hover:text-white group-hover:border-white/30 transition-colors`}>
                          {pIdx === 0 ? 'Grupal' : pIdx === 1 ? 'Personalizada' : 'Dúo'}
                        </span>
                      </div>

                      <div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#001837] group-hover:text-white tracking-tight transition-colors">
                          {plan.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-slate-600 group-hover:text-white/90 font-medium mt-1 leading-relaxed transition-colors">
                          {plan.subtitle}
                        </p>
                      </div>

                      <ul className="space-y-3 pt-3 border-t border-slate-100 group-hover:border-white/20 transition-colors">
                        {plan.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <Check className="w-4 h-4 shrink-0 mt-0.5 stroke-[2.5] text-[#834296] group-hover:text-[#FFD203] transition-colors" />
                            <span className="text-xs sm:text-sm text-slate-700 group-hover:text-white font-body-regular leading-snug transition-colors">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 space-y-3 border-t border-slate-100 group-hover:border-white/20 transition-colors">
                      <Link
                        href="/como-funciona"
                        className="inline-block text-xs font-heading font-bold text-[#3C4C92] group-hover:text-white hover:underline transition-colors"
                      >
                        Más información →
                      </Link>

                      <Link href="/agendar" className="block">
                        <Button
                          variant="primary"
                          size="sm"
                          fullWidth
                          className="font-heading font-bold text-xs sm:text-sm h-11 shadow-[2px_2px_0px_#EC9519]"
                        >
                          Elegir mi modalidad
                        </Button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. BENEFICIOS EXTRA: Jerarquía más sutil y limpia                          */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-16 bg-slate-50/50 border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="max-w-xl mx-auto space-y-8">
              <div className="text-center space-y-1.5">
                <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#834296]">
                  Extra
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#001837] tracking-tight">
                  Beneficios extra
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-medium">
                  Incluidos en todos los planes, sin costo adicional.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 sm:p-8 border-2 border-[#001837] shadow-[4px_4px_0px_#001837]">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {extraBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-slate-50 border border-black/5">
                      <Check className="w-4 h-4 text-[#16A34A] shrink-0 stroke-[2.5]" />
                      <span className="text-xs sm:text-sm font-heading font-semibold text-[#001837]">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. PREGUNTAS FRECUENTES (FAQ)                                             */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-5">
            <div className="text-center space-y-2 mb-12">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#3C4C92]">
                Dudas
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                Preguntas frecuentes
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                Todo lo que necesitas saber antes de empezar.
              </p>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl border-2 border-black/10 bg-slate-50/50 space-y-2">
                <h3 className="text-base sm:text-lg font-heading font-extrabold text-[#001837]">
                  ¿Cómo sé cuál es mi nivel de inglés?
                </h3>
                <p className="text-sm text-slate-600 font-body-regular leading-relaxed">
                  Tu nivel exacto se define durante la entrevista gratuita de 15 minutos con un profesor de YYCL, evaluando tu fluidez y comprensión real al hablar.
                </p>
              </div>

              <div className="p-6 rounded-2xl border-2 border-black/10 bg-slate-50/50 space-y-2">
                <h3 className="text-base sm:text-lg font-heading font-extrabold text-[#001837]">
                  ¿Las clases son en vivo o grabadas?
                </h3>
                <p className="text-sm text-slate-600 font-body-regular leading-relaxed">
                  100% en vivo con profesores reales con años de experiencia pedagógica. La conversación es el centro de cada sesión; no usamos videos grabados ni ejercicios mudos.
                </p>
              </div>

              <div className="p-6 rounded-2xl border-2 border-black/10 bg-slate-50/50 space-y-2">
                <h3 className="text-base sm:text-lg font-heading font-extrabold text-[#001837]">
                  ¿Qué pasa si necesito reprogramar una clase?
                </h3>
                <p className="text-sm text-slate-600 font-body-regular leading-relaxed">
                  En la modalidad personalizada cuentas con total flexibilidad para coordinar tus horarios y avisar con antelación si necesitas reagendar.
                </p>
              </div>

              <div className="p-6 rounded-2xl border-2 border-black/10 bg-slate-50/50 space-y-2">
                <h3 className="text-base sm:text-lg font-heading font-extrabold text-[#001837]">
                  ¿Los beneficios extra tienen costo adicional?
                </h3>
                <p className="text-sm text-slate-600 font-body-regular leading-relaxed">
                  No. El club de conversación, talleres temáticos, llamadas simuladas y la plataforma de práctica están 100% incluidos en todos los paquetes.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. PRECIOS TRANSPARENTES & CIERRE CTA                                      */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50/80 border-t border-slate-100 text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
              ¿Tienes dudas sobre las modalidades? Te lo contamos en tu entrevista gratuita.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Sin sorpresas: todo se conversa antes de que decidas.
            </p>
            <div className="pt-2">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="md"
                  className="font-heading font-bold text-sm sm:text-base px-9 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                >
                  Elegir mi modalidad
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
