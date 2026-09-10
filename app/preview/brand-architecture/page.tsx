"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { User, Users, UserPlus, Check } from 'lucide-react';
import { BrushStroke } from '@/components/ui/BrushStroke';
import { Button } from '@/components/ui/Button';

export default function PreviewBrandArchitecturePage() {
  const [viewVersion, setViewVersion] = useState<'nueva' | 'anterior'>('nueva');

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />

      {/* Barra de Control Fija Superior */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b-2 border-[#001837] shadow-sm py-3 px-4">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            <span className="text-[11px] font-heading font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#834296]/10 text-[#834296] border border-[#834296]/20">
              Preview Arquitectura de Marca + Cards Home
            </span>
            <h1 className="text-sm sm:text-base font-heading font-extrabold text-[#001837]">
              Comparativa: Yes You Can Languages (YYCL) & Cards sin redundancia
            </h1>
          </div>

          <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-black/10 text-xs font-heading font-bold">
            <button
              onClick={() => setViewVersion('nueva')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewVersion === 'nueva'
                  ? 'bg-[#001837] text-white shadow-xs'
                  : 'text-slate-600 hover:text-black'
              }`}
            >
              ✨ Propuesta Simplificada (Recomendada)
            </button>
            <button
              onClick={() => setViewVersion('anterior')}
              className={`px-3.5 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewVersion === 'anterior'
                  ? 'bg-slate-700 text-white shadow-xs'
                  : 'text-slate-500 hover:text-black'
              }`}
            >
              Versión Anterior (Con viñetas de Planes)
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 space-y-16 py-10">
        {/* ========================================================================= */}
        {/* 1. HERO DEMO: Yes You Can Languages (YYCL) en el Eyebrow                   */}
        {/* ========================================================================= */}
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-xs font-heading text-amber-900 mb-6">
            <strong>PUNTOS 1 & 2:</strong> En el Hero establecemos por primera vez la relación <em>«Yes You Can Languages (YYCL)»</em> en el eyebrow superior sin alterar el H1 ni el subtítulo.
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border-2 border-[#001837] shadow-[5px_5px_0px_#001837]">
            <div className="max-w-2xl space-y-5 text-left">
              {/* Eyebrow con Identidad de Marca Institucional */}
              <div className="inline-flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-heading font-extrabold uppercase tracking-wider text-[#834296]">
                <span className="inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#834296]" />
                  <span>Yes You Can Languages (YYCL)</span>
                </span>
                <span className="text-slate-300 hidden sm:inline">·</span>
                <span className="text-slate-500 font-semibold lowercase tracking-normal text-[11px] sm:text-xs">
                  inglés conversacional
                </span>
              </div>

              {/* Headline Oficial Intacto */}
              <div className="space-y-1.5 relative">
                <h2 className="text-[32px] xs:text-4xl sm:text-5xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.15]">
                  Pierde el <span className="text-[#834296]">miedo</span> <br className="hidden sm:inline" />
                  a hablar inglés.
                </h2>
                <div className="pt-1">
                  <BrushStroke color="#FFD203" variant="brush" className="w-44 sm:w-60 h-3.5 text-[#FFD203]" />
                </div>
              </div>

              {/* Subtítulo Intacto */}
              <p className="text-sm sm:text-base text-slate-600 font-body-large leading-relaxed max-w-lg">
                El problema nunca fue lo que sabes, sino soltarte a hablar. Lo que cambia primero no es el vocabulario — es el miedo.
              </p>

              <div className="pt-2">
                <Button variant="primary" size="md" className="font-heading font-bold text-sm px-8 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]">
                  Quiero hablar sin miedo
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. HOME MODALIDADES SECTION: COMPARATIVA                                   */}
        {/* ========================================================================= */}
        <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#EC9519]">
              Modalidades en el Home
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
              {viewVersion === 'nueva' ? 'Home: Descubrir (Sin listas repetidas)' : 'Versión Anterior (Con listas de Planes)'}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              {viewVersion === 'nueva'
                ? 'Cards limpias, directas y con el degradado sunset oficial. Las listas de beneficios quedan exclusivamente en /planes.'
                : 'Cards sobrecargadas con viñetas que duplicaban exactamente el contenido de la página /planes.'}
            </p>
          </div>

          {/* =================== NUEVA VERSIÓN (LIMPIA) =================== */}
          {viewVersion === 'nueva' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch animate-in fade-in duration-200">
              {/* PERSONALIZADA -> FLEX */}
              <div className="bg-gradient-to-b from-[#F58220] via-[#853D94] to-[#4A154B] rounded-3xl p-7 sm:p-8 border border-black/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-md">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-block text-[11px] font-heading font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white text-[#834296] shadow-xs">
                      PERSONALIZADA
                    </span>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#834296] shadow-xs group-hover:scale-105 transition-transform">
                      <User className="w-5 h-5 stroke-[2.2]" />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight leading-tight">
                      FLEX
                    </h3>
                    <p className="text-sm text-white/95 font-medium leading-relaxed">
                      Un profesor, un plan.<br />Hecho para ti.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20 mt-8">
                  <Link
                    href="/planes#personalizada"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold text-white hover:underline transition-colors"
                  >
                    <span>Ver Personalizada</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* DÚO -> FUSION */}
              <div className="bg-gradient-to-b from-[#F58220] via-[#853D94] to-[#4A154B] rounded-3xl p-7 sm:p-8 border border-black/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-md">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-block text-[11px] font-heading font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white text-[#834296] shadow-xs">
                      DÚO
                    </span>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#834296] shadow-xs group-hover:scale-105 transition-transform">
                      <Users className="w-5 h-5 stroke-[2.2]" />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight leading-tight">
                      FUSION
                    </h3>
                    <p className="text-sm text-white/95 font-medium leading-relaxed">
                      Dos personas, un mismo profesor y un plan compartido.
                    </p>
                  </div>

                  {/* Microcopy Estratégico de Dúo */}
                  <p className="text-xs text-[#FFD203] font-heading font-bold leading-snug pt-3 border-t border-white/20">
                    ¿Tienes a alguien con quien quieras practicar? Empiecen juntos.
                  </p>
                </div>

                <div className="pt-6 border-t border-white/20 mt-8">
                  <Link
                    href="/planes#duo"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold text-white hover:underline transition-colors"
                  >
                    <span>Ver Dúo</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* GRUPAL -> CONNECTION */}
              <div className="bg-gradient-to-b from-[#F58220] via-[#853D94] to-[#4A154B] rounded-3xl p-7 sm:p-8 border border-black/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-md">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="inline-block text-[11px] font-heading font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white text-[#834296] shadow-xs">
                      GRUPAL
                    </span>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#834296] shadow-xs group-hover:scale-105 transition-transform">
                      <UserPlus className="w-5 h-5 stroke-[2.2]" />
                    </div>
                  </div>

                  <div className="space-y-2 pt-2">
                    <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight leading-tight">
                      CONNECTION
                    </h3>
                    <p className="text-sm text-white/95 font-medium leading-relaxed">
                      Aprende junto a otros, con la energía de un grupo pequeño.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/20 mt-8">
                  <Link
                    href="/planes#grupal"
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold text-white hover:underline transition-colors"
                  >
                    <span>Ver Grupal</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* =================== VERSIÓN ANTERIOR =================== */}
          {viewVersion === 'anterior' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch opacity-85">
              <div className="bg-gradient-to-b from-[#F58220] via-[#853D94] to-[#4A154B] rounded-3xl p-7 border border-black/10 space-y-4 text-white">
                <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-white text-[#834296]">PERSONALIZADA</span>
                <h3 className="text-2xl font-bold">FLEX</h3>
                <ul className="space-y-2 text-xs pt-2 border-t border-white/20">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-300" /> Clases uno a uno</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-300" /> Clases enfocadas a tu objetivo</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-300" /> Horario a tu elección</li>
                </ul>
                <div className="pt-4 text-xs font-bold text-white/60">(Repite exactamente lo de /planes)</div>
              </div>

              <div className="bg-gradient-to-b from-[#F58220] via-[#853D94] to-[#4A154B] rounded-3xl p-7 border border-black/10 space-y-4 text-white">
                <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-white text-[#834296]">DÚO</span>
                <h3 className="text-2xl font-bold">FUSION</h3>
                <ul className="space-y-2 text-xs pt-2 border-t border-white/20">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-300" /> Clases para dos personas</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-300" /> Mismo plan personalizado</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-300" /> Menor costo por persona</li>
                </ul>
                <div className="pt-4 text-xs font-bold text-white/60">(Repite exactamente lo de /planes)</div>
              </div>

              <div className="bg-gradient-to-b from-[#F58220] via-[#853D94] to-[#4A154B] rounded-3xl p-7 border border-black/10 space-y-4 text-white">
                <span className="inline-block text-[11px] font-bold px-3 py-1 rounded-full bg-white text-[#834296]">GRUPAL</span>
                <h3 className="text-2xl font-bold">CONNECTION</h3>
                <ul className="space-y-2 text-xs pt-2 border-t border-white/20">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-300" /> Máximo 8 alumnos</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-300" /> Clases en vivo</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-300" /> Profesores con experiencia</li>
                </ul>
                <div className="pt-4 text-xs font-bold text-white/60">(Repite exactamente lo de /planes)</div>
              </div>
            </div>
          )}
        </div>

        {/* Resumen de Principio UX */}
        <div className="max-w-3xl mx-auto px-5">
          <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-xs text-xs sm:text-sm text-slate-700 space-y-3">
            <h4 className="font-heading font-extrabold text-[#001837] uppercase tracking-wider text-xs">
              📌 Principio UX Aplicado:
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-[#834296] block mb-1">HOME</span>
                <span className="text-xs text-slate-600">«Descubrir qué ofrece YYCL y qué opciones existen»</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-[#EC9519] block mb-1">CÓMO FUNCIONA</span>
                <span className="text-xs text-slate-600">«Comprender el método conversacional y la plataforma»</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="font-bold text-[#0284C7] block mb-1">PLANES</span>
                <span className="text-xs text-slate-600">«Comparar viñetas, qué incluye y decidir»</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
