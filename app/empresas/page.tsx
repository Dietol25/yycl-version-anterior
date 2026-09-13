"use client";

import React from 'react';
import Link from 'next/link';
import { Briefcase, Building2, TrendingUp, Users, PhoneCall, RefreshCw, HeartHandshake, Laptop, Cpu, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';
import { BrushStroke } from '@/components/ui/BrushStroke';
import { CompanyLogosSlider } from '@/components/ui/CompanyLogosSlider';

export default function EmpresasPage() {
  const steps = [
    {
      id: 'paso1',
      number: '01',
      numberColor: 'text-[#EC9519]',
      title: 'Diagnóstico',
      desc: 'Conversamos para entender los objetivos de tu equipo.',
      image: '/assets/08_EMPRESAS/YYCL_20_EMPRESAS_DIAGNOSTICO.png'
    },
    {
      id: 'paso2',
      number: '02',
      numberColor: 'text-[#0284C7]',
      title: 'Plan a medida',
      desc: 'Clases en vivo, horarios a su selección y profesores especializados en inglés de negocios.',
      image: '/assets/08_EMPRESAS/YYCL_21_EMPRESAS_PLAN_A_MEDIDA.png'
    },
    {
      id: 'paso3',
      number: '03',
      numberColor: 'text-[#834296]',
      title: 'Seguimiento y métricas de avance',
      desc: 'Informes bimensuales de evolución y desempeño para que Recursos Humanos mida el impacto real en el equipo.',
      image: '/assets/08_EMPRESAS/YYCL_22_EMPRESAS_SEGUIMIENTO_REPORTES.png'
    }
  ];

  const modalidades = [
    {
      id: 'grupal-equipo',
      title: 'Grupal — para tu equipo',
      desc: 'Grupos por área o nivel. La forma más eficiente de capacitar a muchas personas a la vez, sin perder seguimiento individual.',
      image: '/assets/08_EMPRESAS/YYCL_19_EMPRESAS_EQUIPO_COLABORACION.png'
    },
    {
      id: 'directivos',
      title: 'Personalizada o en dúo — para tus directivos',
      desc: 'Para agendas que cambian de una reunión a otra. Sin horario fijo, al ritmo que tu equipo directivo necesita.',
      image: '/assets/08_EMPRESAS/YYCL_21_EMPRESAS_PLAN_A_MEDIDA.png'
    }
  ];

  const beneficios = [
    {
      title: 'Inglés de negocios',
      desc: 'Reuniones, negociaciones y presentaciones: que el idioma no sea lo que te haga perder una operación.',
      icon: Briefcase
    },
    {
      title: 'Inglés para propósitos específicos (ESP)',
      desc: 'El vocabulario real de tu industria, no inglés genérico.',
      icon: Building2
    },
    {
      title: 'Análisis de estilos de aprendizaje',
      desc: 'Adaptamos el método a cómo aprende cada colaborador.',
      icon: TrendingUp
    },
    {
      title: 'Llamadas simuladas',
      desc: 'Practicamos situaciones reales de trabajo antes de que ocurran de verdad.',
      icon: PhoneCall
    },
    {
      title: 'Mantenimiento del idioma',
      desc: 'Un idioma que no se practica se olvida. También acompañamos a quienes ya llegaron a su nivel.',
      icon: RefreshCw
    },
    {
      title: 'Grupos reducidos',
      desc: 'Grupos de 3 a 8 personas, para que cada colaborador participe de verdad.',
      icon: Users
    },
    {
      title: 'Extensivo a la familia',
      desc: 'El beneficio no se queda solo en tu equipo: también alcanza a sus familias.',
      icon: HeartHandshake
    },
    {
      title: 'Plataforma de práctica, pensada para el mundo corporativo',
      desc: 'Con módulos de viajes de negocio, reuniones y recursos humanos, para seguir practicando después de la clase.',
      icon: Laptop
    },
    {
      title: 'Práctica con inteligencia artificial',
      desc: 'Un espacio más para practicar cuando lo necesites, dentro de la misma plataforma.',
      icon: Cpu
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION: Fondo Navy Oficial (#001837)                              */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-[#001837] text-white relative overflow-hidden">
          {/* Acentos sutiles de luz de fondo */}
          <div className="absolute top-10 right-20 w-80 h-80 rounded-full bg-[#834296]/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-[#4DC2DA]/10 blur-3xl pointer-events-none" />

          <div className="max-w-[1280px] mx-auto px-5 lg:px-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Column: Copy & CTA */}
              <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#4DC2DA]">
                  <span className="w-2 h-2 rounded-full bg-[#4DC2DA]" />
                  <span>Empresas</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.15]">
                  Inglés para tu <span className="text-[#A84988] relative inline-block">
                    equipo
                    <BrushStroke color="#FFD203" variant="straight" className="absolute -bottom-2 left-0 w-full h-2" />
                  </span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 font-body-large max-w-xl mx-auto lg:mx-0 leading-relaxed">
                  Preparamos a tu equipo para el inglés que van a usar de verdad: en una reunión de negocios, en su trabajo técnico del día a día, rindiendo un examen, o parados frente a una audiencia.
                </p>

                {/* Botón Primario Amarillo (#FFD203) */}
                <div className="pt-3">
                  <Link href="/agendar?tipo=empresas">
                    <Button
                      variant="primary"
                      size="lg"
                      className="font-heading font-extrabold text-sm sm:text-base px-8 py-3.5 h-12 shadow-[4px_4px_0px_#EC9519] cursor-pointer"
                    >
                      <span>Agendar reunión corporativa</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column: Corporate Showcase Asset */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[540px]">
                  <img
                    src="/assets/08_EMPRESAS/YYCL_19_EMPRESAS_EQUIPO_COLABORACION.png"
                    alt="Capacitación corporativa en inglés para empresas en YYCL"
                    className="w-full h-auto object-contain select-none filter drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* LOGOS DE EMPRESAS (Fondo claro + Borde suave #D9E0E8 + Voluntariado)      */}
        {/* ========================================================================= */}
        <CompanyLogosSlider />

        {/* ========================================================================= */}
        {/* 2. CÓMO FUNCIONA: 3 Pasos con Borde Uniforme Fino y Números Cromáticos    */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#834296]">
                Cómo trabajamos
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                Cómo funciona
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                Diagnóstico → plan a medida → implementación con seguimiento.
              </p>
            </div>

            {/* 3 Step Cards Grid (Borde uniforme navy fino + sombra mínima) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto items-stretch">
              {steps.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-3xl overflow-hidden border border-[#001837] shadow-[3px_3px_0px_#001837] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                >
                  {/* Photo Container */}
                  <div className="h-48 sm:h-52 bg-white relative overflow-hidden flex items-center justify-center p-3.5 border-b border-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain select-none"
                    />
                  </div>

                  {/* Card Content */}
                  <div className="p-6 sm:p-7 space-y-2 flex-1 flex flex-col justify-start">
                    <div className="flex items-center gap-2">
                      <span className={`text-sm font-heading font-black tracking-wider ${item.numberColor}`}>
                        {item.number}
                      </span>
                      <span className="text-[11px] font-heading font-extrabold uppercase tracking-wider text-slate-500">
                        PASO
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[#001837] tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 font-body-regular leading-relaxed pt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. MODALIDADES: Un plan para cada rol (Dark Navy Cards con Fotos)         */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-slate-50/60 border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#EC9519]">
                Modalidades
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                Un plan para cada rol
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                Elige la modalidad que mejor se adapta a tu equipo.
              </p>
            </div>

            {/* 2 Large Dark Navy Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto items-stretch">
              {/* Card 1: Grupal */}
              <div className="bg-[#001837] text-white rounded-3xl overflow-hidden border-2 border-[#001837] shadow-[4px_4px_0px_#001837] hover:-translate-y-1 transition-all duration-200 flex flex-col sm:flex-row items-center justify-between p-7 sm:p-8 gap-6 relative">
                <div className="flex-1 space-y-4 text-left z-10">
                  <div className="w-11 h-11 rounded-full bg-[#4DC2DA]/20 border border-[#4DC2DA]/40 flex items-center justify-center text-[#4DC2DA]">
                    <Users className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white tracking-tight leading-snug">
                    Grupal — para tu equipo
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-body-regular leading-relaxed">
                    Grupos por área o nivel. La forma más eficiente de capacitar a muchas personas a la vez, sin perder seguimiento individual.
                  </p>
                </div>
                <div className="w-full sm:w-48 md:w-56 shrink-0 flex items-center justify-center relative">
                  <img
                    src="/assets/08_EMPRESAS/YYCL_19_EMPRESAS_EQUIPO_COLABORACION.png"
                    alt="Grupal para tu equipo"
                    className="w-full h-auto max-h-48 object-contain select-none filter drop-shadow-lg"
                  />
                </div>
              </div>

              {/* Card 2: Directivos */}
              <div className="bg-[#001837] text-white rounded-3xl overflow-hidden border-2 border-[#001837] shadow-[4px_4px_0px_#001837] hover:-translate-y-1 transition-all duration-200 flex flex-col sm:flex-row items-center justify-between p-7 sm:p-8 gap-6 relative">
                <div className="flex-1 space-y-4 text-left z-10">
                  <div className="w-11 h-11 rounded-full bg-[#834296]/30 border border-[#834296]/50 flex items-center justify-center text-[#D4B6E3]">
                    <Briefcase className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-white tracking-tight leading-snug">
                    Personalizada o en dúo — para tus directivos
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-body-regular leading-relaxed">
                    Para agendas que cambian de una reunión a otra. Sin horario fijo, al ritmo que tu equipo directivo necesita.
                  </p>
                </div>
                <div className="w-full sm:w-48 md:w-56 shrink-0 flex items-center justify-center relative">
                  <img
                    src="/assets/08_EMPRESAS/YYCL_21_EMPRESAS_PLAN_A_MEDIDA.png"
                    alt="Personalizada o en dúo para tus directivos"
                    className="w-full h-auto max-h-48 object-contain select-none filter drop-shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. TODO LO QUE INCLUYE EL PROGRAMA (Sistema Unificado Navy + Gris #F4F6F8) */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#001837]">
                Por qué elegirnos
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                Todo lo que incluye el programa
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                Pensado para equipos, no solo para individuos.
              </p>
            </div>

            {/* 3x3 Unified System Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto items-stretch">
              {beneficios.map((ben, idx) => {
                const IconComponent = ben.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-3xl p-7 sm:p-8 border border-[#001837] shadow-[3px_3px_0px_#001837] hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-3">
                      <div className="w-11 h-11 rounded-2xl bg-[#F4F6F8] text-[#001837] border border-[#001837]/10 flex items-center justify-center">
                        <IconComponent className="w-5 h-5 stroke-[2.2]" />
                      </div>

                      <h3 className="text-lg sm:text-xl font-extrabold font-heading text-[#001837] tracking-tight leading-snug">
                        {ben.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 font-body-regular leading-relaxed">
                        {ben.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. CIERRE CTA: Dark Navy Banner de Alto Impacto B2B                       */}
        {/* ========================================================================= */}
        {/* 5. CIERRE CTA: Charlemos sobre la estrategia                              */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100 text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
              Charlemos sobre la estrategia
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Conversamos el alcance y armamos el plan para tu equipo.
            </p>
            <div className="pt-2">
              <Link href="/agendar?tipo=empresas">
                <Button
                  variant="primary"
                  size="md"
                  className="font-heading font-bold text-sm sm:text-base px-9 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                >
                  Agendar reunión corporativa
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
