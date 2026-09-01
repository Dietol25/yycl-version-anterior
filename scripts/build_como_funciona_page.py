import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

write_file('app/como-funciona/page.tsx', """\"use client\";

import React from 'react';
import Link from 'next/link';
import { MessageSquare, Sliders, Users, Check, ArrowRight } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION: "Así funciona tu camino al inglés"                       */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 text-center bg-gradient-to-b from-slate-50/60 to-white">
          <div className="max-w-3xl mx-auto px-5 space-y-5">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#3C4C92]">
              Aprende
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
              Así funciona tu camino al inglés
            </h1>
            <p className="text-base sm:text-lg text-[#3C4C92] font-body-large max-w-xl mx-auto leading-relaxed">
              Un método conversacional que va directo a lo que necesitas: hablar.
            </p>
            <div className="pt-3">
              <Link href="/agendar">
                <Button
                  variant="secondary"
                  size="md"
                  className="font-heading font-bold text-sm px-8 py-3 h-12 shadow-[3px_3px_0px_#001837]"
                >
                  Agenda tu entrevista gratuita
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. MÉTODO: "Así funciona el método (Tres pasos, sin vueltas)"              */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#3C4C92]">
                Método
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                Así funciona el método
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium">
                Tres pasos, sin vueltas.
              </p>
            </div>

            {/* 3 Step Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {/* Step 1 */}
              <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-black/10 shadow-[3px_3px_0px_#001837] space-y-4 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-[#001837]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#4DC2DA] leading-snug">
                  1. Agenda tu entrevista gratuita
                </h3>
                <p className="text-sm font-body-regular text-slate-600 leading-relaxed">
                  Sin costo y sin compromiso.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-black/10 shadow-[3px_3px_0px_#001837] space-y-4 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-[#001837]">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#4DC2DA] leading-snug">
                  2. Te asignamos tu nivel y grupo ideal
                </h3>
                <p className="text-sm font-body-regular text-slate-600 leading-relaxed">
                  Tu nivel exacto se define en la entrevista, no antes.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-black/10 shadow-[3px_3px_0px_#001837] space-y-4 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-2xl bg-slate-100 flex items-center justify-center text-[#001837]">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold text-[#4DC2DA] leading-snug">
                  3. Empiezas a hablar desde el primer día
                </h3>
                <p className="text-sm font-body-regular text-slate-600 leading-relaxed">
                  Conversación real desde la primera clase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. MODALIDADES: "Elige cómo quieres aprender" (3 PhotoCards)               */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-slate-50/50 border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#3C4C92]">
                Modalidades
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                Elige cómo quieres aprender
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto">
                Profesores reales, con años de experiencia, no grabaciones. Corrección que te hace avanzar.
              </p>
            </div>

            {/* 3 Modality Cards with Organic Collage Art */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
              {/* Grupal */}
              <div className="bg-white rounded-3xl overflow-hidden border border-black/10 shadow-[3px_3px_0px_#001837] flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <div className="w-full h-48 bg-slate-100 overflow-hidden flex items-center justify-center p-3">
                  <img
                    src="/assets/02_COMO_FUNCIONA/YYCL_03_MODALIDAD_GRUPAL.png"
                    alt="Modalidad Grupal"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-7 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-heading font-bold text-slate-500 uppercase tracking-wider">
                      Grupal
                    </span>
                    <h3 className="text-xl font-heading font-bold text-[#4DC2DA]">
                      Aprende junto a otros
                    </h3>
                    <p className="text-xs font-body-small text-slate-600 leading-relaxed pt-1">
                      La energía de un grupo pequeño.
                    </p>
                  </div>
                  <div className="pt-2">
                    <Link
                      href="/planes"
                      className="inline-flex items-center gap-1 text-xs font-heading font-bold text-[#001837] hover:text-[#834296]"
                    >
                      <span>Más información</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Personalizada */}
              <div className="bg-white rounded-3xl overflow-hidden border border-black/10 shadow-[3px_3px_0px_#001837] flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <div className="w-full h-48 bg-slate-100 overflow-hidden flex items-center justify-center p-3">
                  <img
                    src="/assets/02_COMO_FUNCIONA/YYCL_04_MODALIDAD_PERSONALIZADA.png"
                    alt="Modalidad Personalizada"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-7 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-heading font-bold text-slate-500 uppercase tracking-wider">
                      Personalizada
                    </span>
                    <h3 className="text-xl font-heading font-bold text-[#4DC2DA]">
                      Un profesor, un plan
                    </h3>
                    <p className="text-xs font-body-small text-slate-600 leading-relaxed pt-1">
                      Hecho para ti.
                    </p>
                  </div>
                  <div className="pt-2">
                    <Link
                      href="/planes"
                      className="inline-flex items-center gap-1 text-xs font-heading font-bold text-[#001837] hover:text-[#834296]"
                    >
                      <span>Más información</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Dúo */}
              <div className="bg-white rounded-3xl overflow-hidden border border-black/10 shadow-[3px_3px_0px_#001837] flex flex-col justify-between hover:-translate-y-1 transition-transform">
                <div className="w-full h-48 bg-slate-100 overflow-hidden flex items-center justify-center p-3">
                  <img
                    src="/assets/02_COMO_FUNCIONA/YYCL_05_MODALIDAD_DUO.png"
                    alt="Modalidad Dúo en Pareja"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="p-7 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <span className="text-xs font-heading font-bold text-slate-500 uppercase tracking-wider">
                      Dúo
                    </span>
                    <h3 className="text-xl font-heading font-bold text-[#4DC2DA]">
                      Personalizada, en pareja
                    </h3>
                    <p className="text-xs font-body-small text-slate-600 leading-relaxed pt-1">
                      Mismo profesor exclusivo, mismo plan a medida, compartido con alguien que va por lo mismo que tú.
                    </p>
                  </div>
                  <div className="pt-2">
                    <Link
                      href="/planes"
                      className="inline-flex items-center gap-1 text-xs font-heading font-bold text-[#001837] hover:text-[#834296]"
                    >
                      <span>Más información</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. NIVELES: "Principiante, intermedio o avanzado" (Tablas Comparativas)    */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#3C4C92]">
                Niveles
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                Principiante, intermedio o avanzado
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto">
                Tu nivel exacto se define en la entrevista, no antes. Nos manejamos con el Marco Común Europeo (A1-C1).
              </p>
            </div>

            {/* 2 Level Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Principiante */}
              <div className="bg-white rounded-3xl p-8 border border-black/10 shadow-[3px_3px_0px_#001837] space-y-6">
                <div className="text-center pb-4 border-b border-black/10">
                  <h3 className="text-2xl font-extrabold font-heading text-[#4DC2DA]">
                    Principiante
                  </h3>
                  <span className="text-xs font-heading font-bold text-slate-500">
                    A1 y A2
                  </span>
                </div>

                <div className="space-y-3.5 text-sm">
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-700">Construyes las bases</span>
                    <span className="font-bold text-[#001837]">A1</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-700">Presentaciones y rutinas</span>
                    <span className="font-bold text-[#001837]">A2</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-700">Conversaciones cotidianas</span>
                    <span className="font-bold text-[#4DC2DA]">80%</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-700">Confianza al hablar</span>
                    <span className="font-bold text-[#001837]">Sí</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>Beneficios Extras</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>Material auténtico incluido</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>Profesor asignado</span>
                  </div>
                </div>
              </div>

              {/* Intermedio */}
              <div className="bg-white rounded-3xl p-8 border border-black/10 shadow-[3px_3px_0px_#001837] space-y-6">
                <div className="text-center pb-4 border-b border-black/10">
                  <h3 className="text-2xl font-extrabold font-heading text-[#4DC2DA]">
                    Intermedio
                  </h3>
                  <span className="text-xs font-heading font-bold text-slate-500">
                    B1 y B2
                  </span>
                </div>

                <div className="space-y-3.5 text-sm">
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-700">Dominas la lengua</span>
                    <span className="font-bold text-[#001837]">B1</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-700">Viajes y trabajo</span>
                    <span className="font-bold text-[#001837]">B2</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-700">Debates y opiniones</span>
                    <span className="font-bold text-[#4DC2DA]">95%</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-700">Fluidez conversacional</span>
                    <span className="font-bold text-[#001837]">Sí</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2 text-xs text-slate-600">
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>Beneficios Extras</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>Material auténtico incluido</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#16A34A] shrink-0" />
                    <span>Profesor asignado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. PLATAFORMA DE PRÁCTICA: Feature con Ilustración Lateral                */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-slate-50/50 border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Left Collage Media */}
              <div className="order-2 lg:order-1 lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[500px]">
                  <img
                    src="/assets/02_COMO_FUNCIONA/YYCL_06_NIVEL_PRINCIPIANTE.png"
                    alt="Plataforma de práctica conversacional en YYCL"
                    className="w-full h-auto object-contain select-none"
                  />
                </div>
              </div>

              {/* Right 3 Info Blocks */}
              <div className="order-1 lg:order-2 lg:col-span-6 space-y-6">
                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#4DC2DA]">
                    Plataforma de práctica incluida
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-body-regular">
                    Incluido en todos los planes, sin costo adicional: talleres temáticos, material auténtico, invitados de distintos países y llamadas simuladas. Va rotando, así siempre tienes dónde seguir practicando.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#4DC2DA]">
                    Sin libros de texto ni tareas para memorizar
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-body-regular">
                    Solo conversación real con un profesor, desde el primer minuto.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-xl sm:text-2xl font-heading font-extrabold text-[#4DC2DA]">
                    Todos los paquetes incluyen la plataforma de práctica
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed font-body-regular">
                    No es un extra. Es parte del método. Porque hablar es la única forma de aprender de verdad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. CIERRE CTA: "Agenda tu entrevista gratuita y descubre tu punto..."     */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-white border-t border-slate-100 text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
              Agenda tu entrevista gratuita y descubre tu punto de partida
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Sin costo, sin compromiso.
            </p>
            <div className="pt-2">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="md"
                  className="font-heading font-bold text-sm px-8 py-3 h-12 shadow-[3px_3px_0px_#EC9519]"
                >
                  Agenda tu entrevista gratuita
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
""")

print("Como Funciona page built matching exact Figma wireframe and Design System")
