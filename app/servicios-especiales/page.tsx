"use client";

import React from 'react';
import Link from 'next/link';
import { Award, BookOpen, Globe2, FileCheck, Landmark, Sparkles } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';

export default function ServiciosEspecialesPage() {
  const examenes = [
    {
      id: 'toefl',
      title: 'TOEFL',
      icon: BookOpen,
      color: 'text-[#4DC2DA]',
      borderColor: 'border-t-[#4DC2DA]',
      desc: 'Para estudiar o aplicar a becas en instituciones que exigen inglés académico.'
    },
    {
      id: 'ielts',
      title: 'IELTS',
      icon: Award,
      color: 'text-[#834296]',
      borderColor: 'border-t-[#834296]',
      desc: 'Para migración, trabajo o estudios en países de habla inglesa que piden este certificado.'
    },
    {
      id: 'celpip',
      title: 'CELPIP',
      icon: FileCheck,
      color: 'text-[#EC9519]',
      borderColor: 'border-t-[#EC9519]',
      desc: 'Para migración a Canadá. Un certificado tan válido como IELTS — la elección depende de tu preferencia como examinado, no de una diferencia de nivel.'
    },
    {
      id: 'ciudadania',
      title: 'Examen de ciudadanía USA',
      icon: Landmark,
      color: 'text-[#001837]',
      borderColor: 'border-t-[#001837]',
      desc: 'Para quienes están tramitando la ciudadanía estadounidense y deben rendir la entrevista y el examen de inglés.'
    },
    {
      id: 'duolingo',
      title: 'Duolingo English Test',
      icon: Globe2,
      color: 'text-[#4DC2DA]',
      borderColor: 'border-t-[#4DC2DA]',
      desc: 'Para quienes necesitan un certificado de inglés rápido, aceptado por universidades y empleadores. Se rinde online, sin salir de casa.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (Split 2 Columns)                                         */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Copy & CTA */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#EC9519]">
                  <span className="w-2 h-2 rounded-full bg-[#EC9519]" />
                  <span>Servicios</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.15]">
                  Servicios especiales.
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-body-large max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Para lo que no entra en una clase estándar: preparación para certificaciones internacionales o el inglés puntual de tu profesión.
                </p>

                <div className="pt-2">
                  <Link href="/agendar">
                    <Button
                      variant="secondary"
                      size="md"
                      className="font-heading font-bold text-sm px-8 py-3.5 h-12 shadow-[3px_3px_0px_#001837]"
                    >
                      Agendar entrevista gratis
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column: Organic Illustrated Asset */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[500px]">
                  <img
                    src="/assets/05_SERVICIOS_ESPECIALES/YYCL_11_SERVICIOS_ESTUDIO_ENFOCADO.png"
                    alt="Servicios especiales y preparación para exámenes en YYCL"
                    className="w-full h-auto object-contain select-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. EXÁMENES INTERNACIONALES: Grilla Simétrica 3x2 (6 Tarjetas)            */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-slate-50/50 border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#834296]">
                Certificaciones
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                Exámenes internacionales
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                Programas enfocados en el resultado que necesitas.
              </p>
            </div>

            {/* 6 Cards Grid (3x2 Perfect Symmetry) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
              {examenes.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-3xl p-7 sm:p-8 border border-black/10 border-t-4 ${item.borderColor} shadow-[4px_4px_0px_#001837] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between space-y-5`}
                  >
                    <div className="space-y-3">
                      <div className="w-11 h-11 rounded-2xl bg-slate-50 border border-black/5 flex items-center justify-center text-[#001837]">
                        <IconComponent className="w-5 h-5 stroke-[2.2]" />
                      </div>

                      <h3 className={`text-xl sm:text-2xl font-extrabold font-heading ${item.color} tracking-tight`}>
                        {item.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 font-body-regular leading-relaxed">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100">
                      <Link
                        href="/agendar"
                        className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#001837] hover:text-[#834296] transition-colors"
                      >
                        <span>Preparar este examen</span>
                        <span>→</span>
                      </Link>
                    </div>
                  </div>
                );
              })}

              {/* 6th Card: Edge Case / Custom Exam Card with Brand Gradient */}
              <div className="bg-[linear-gradient(116deg,#EC9519_0%,#A84988_30%,#834296_65%,#834296_100%)] text-white rounded-3xl p-7 sm:p-8 border-2 border-[#001837] shadow-[4px_4px_0px_#001837] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <div className="w-11 h-11 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center text-white">
                    <Sparkles className="w-5 h-5 stroke-[2.2] text-[#FFD203]" />
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white tracking-tight">
                    ¿Otro examen o meta?
                  </h3>

                  <p className="text-xs sm:text-sm text-white/90 font-body-regular leading-relaxed">
                    Preparamos Cambridge (FCE, CAE), GMAT, GRE, entrevistas laborales en inglés y requisitos específicos de tu visa o carrera.
                  </p>
                </div>

                <div className="pt-2 border-t border-white/20">
                  <Link
                    href="/agendar"
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-[#FFD203] hover:text-white transition-colors"
                  >
                    <span>Consultar por mi caso</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. ESP — INGLÉS DE PROPÓSITO ESPECÍFICO                                    */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
          <div className="max-w-[900px] mx-auto px-5 lg:px-12 text-center space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#EC9519]">
              <Sparkles className="w-4 h-4 text-[#EC9519]" />
              <span>A la medida</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
              ESP — Inglés de propósito específico
            </h2>

            <p className="text-base sm:text-lg text-slate-700 font-body-regular max-w-2xl mx-auto leading-relaxed">
              No es inglés genérico: es el vocabulario y las situaciones exactas de tu trabajo, armadas a tu medida en clases personalizadas. Aplica a cualquier rubro.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CIERRE CTA                                                             */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-white to-slate-50/80 border-t border-slate-100 text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
              Agenda tu entrevista gratuita
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Evaluamos tu nivel y armamos tu plan de preparación.
            </p>
            <div className="pt-2">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="md"
                  className="font-heading font-bold text-sm sm:text-base px-9 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                >
                  Agendar entrevista gratis
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
