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
import { MessageSquare, Sliders, Users, Check } from 'lucide-react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';
import { PhotoCard } from '@/components/ui/PhotoCard';

export default function ComoFuncionaPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION: Clean crisp white with brand accent highlight             */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 text-center bg-white">
          <div className="max-w-3xl mx-auto px-5 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-widest text-[#3C4C92]">
              <span className="w-2 h-2 rounded-full bg-[#EC9519]" />
              <span>Aprende</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.15]">
              Así funciona tu <span className="text-[#834296] relative">
                camino al inglés
                <svg className="absolute -bottom-2 left-0 w-full h-3 text-[#FFD203] -z-10" viewBox="0 0 100 20" preserveAspectRatio="none">
                  <path d="M0 15 Q 50 0 100 15" stroke="currentColor" strokeWidth="6" fill="transparent" strokeLinecap="round" />
                </svg>
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#3C4C92] font-body-large max-w-xl mx-auto leading-relaxed">
              Un método conversacional que va directo a lo que necesitas: hablar.
            </p>

            <div className="pt-2">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="md"
                  className="font-heading font-bold text-sm px-8 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                >
                  Agenda tu entrevista gratuita
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. MÉTODO: 3 Pasos con fondo blanco y tarjetas nítidas                     */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 bg-white border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#834296]">
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
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-black/10 border-t-4 border-t-[#FFD203] shadow-[3px_3px_0px_#001837] space-y-4 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-[#EC9519]">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#001837] leading-snug">
                  1. Agenda tu entrevista gratuita
                </h3>
                <p className="text-sm font-body-regular text-slate-600 leading-relaxed">
                  Sin costo y sin compromiso.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-black/10 border-t-4 border-t-[#4DC2DA] shadow-[3px_3px_0px_#001837] space-y-4 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-[#0284C7]">
                  <Sliders className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#001837] leading-snug">
                  2. Te asignamos tu nivel y grupo ideal
                </h3>
                <p className="text-sm font-body-regular text-slate-600 leading-relaxed">
                  Tu nivel exacto se define en la entrevista, no antes.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-white rounded-3xl p-7 sm:p-8 border border-black/10 border-t-4 border-t-[#834296] shadow-[3px_3px_0px_#001837] space-y-4 hover:-translate-y-1 transition-transform">
                <div className="w-10 h-10 rounded-2xl bg-slate-50 flex items-center justify-center text-[#834296]">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#001837] leading-snug">
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
        {/* ACCENT CALLOUT BANNER: Tono Crema Oficial del DS (#FFE2C0)                */}
        {/* ========================================================================= */}
        <section className="py-14 bg-[#FFE2C0] text-[#001837] text-center border-y border-black/10">
          <div className="max-w-2xl mx-auto px-5 space-y-2">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#001837] tracking-tight">
              Nada de memorizar reglas
            </h3>
            <p className="text-sm sm:text-base font-heading font-semibold text-[#001837]/85">
              Desde la primera clase te ponemos a hablar, así de simple.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. MODALIDADES: 3 PhotoCards oficiales                                    */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#EC9519]">
                Modalidades
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
                Elige cómo quieres aprender
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium max-w-xl mx-auto">
                Profesores reales, con años de experiencia, no grabaciones. Corrección que te hace avanzar.
              </p>
            </div>

            {/* 3 Modality Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
              <PhotoCard
                category="default"
                title="Grupal"
                hasCheckmark={true}
                subtitle="Aprende junto a otros"
                description="La energía de un grupo pequeño."
                href="/planes"
                imageSrc="/assets/02_COMO_FUNCIONA/YYCL_03_MODALIDAD_GRUPAL.png"
                imageAlt="Modalidad Grupal YYCL"
              />

              <PhotoCard
                category="default"
                title="Personalizada"
                hasCheckmark={true}
                subtitle="Un profesor, un plan"
                description="Hecho para ti."
                href="/planes"
                imageSrc="/assets/02_COMO_FUNCIONA/YYCL_04_MODALIDAD_PERSONALIZADA.png"
                imageAlt="Modalidad Personalizada YYCL"
              />

              <PhotoCard
                category="default"
                title="Dúo"
                hasCheckmark={true}
                subtitle="Personalizada, en pareja"
                description="Mismo profesor exclusivo, mismo plan a medida, compartido con alguien que va por lo mismo que tú."
                href="/planes"
                imageSrc="/assets/02_COMO_FUNCIONA/YYCL_05_MODALIDAD_DUO.png"
                imageAlt="Modalidad Dúo YYCL"
              />
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 4. NIVELES: Tablas Comparativas nítidas sobre fondo blanco                */}
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
              <div className="bg-white rounded-3xl p-8 border border-black/10 border-t-4 border-t-[#4DC2DA] shadow-[3px_3px_0px_#001837] space-y-6">
                <div className="text-center pb-4 border-b border-black/10">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] font-heading font-bold text-xs uppercase tracking-wider mb-2">
                    A1 y A2
                  </span>
                  <h3 className="text-2xl font-extrabold font-heading text-[#001837]">
                    Principiante
                  </h3>
                </div>

                <div className="space-y-3.5 text-sm">
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-700 font-medium">Construyes las bases</span>
                    <span className="font-extrabold text-[#001837]">A1</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-700 font-medium">Presentaciones y rutinas</span>
                    <span className="font-extrabold text-[#001837]">A2</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-700 font-medium">Conversaciones cotidianas</span>
                    <span className="font-extrabold text-[#0284C7] bg-[#E0F2FE] px-2 py-0.5 rounded">80%</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-700 font-medium">Confianza al hablar</span>
                    <span className="font-extrabold text-[#16A34A]">Sí</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#16A34A] stroke-[2.5]" />
                    <span className="font-semibold">Beneficios Extras</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#16A34A] stroke-[2.5]" />
                    <span className="font-semibold">Material auténtico incluido</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#16A34A] stroke-[2.5]" />
                    <span className="font-semibold">Profesor asignado</span>
                  </div>
                </div>
              </div>

              {/* Intermedio */}
              <div className="bg-white rounded-3xl p-8 border border-black/10 border-t-4 border-t-[#834296] shadow-[3px_3px_0px_#001837] space-y-6">
                <div className="text-center pb-4 border-b border-black/10">
                  <span className="inline-block px-3 py-1 rounded-full bg-[#F5E6F8] text-[#834296] font-heading font-bold text-xs uppercase tracking-wider mb-2">
                    B1 y B2
                  </span>
                  <h3 className="text-2xl font-extrabold font-heading text-[#001837]">
                    Intermedio
                  </h3>
                </div>

                <div className="space-y-3.5 text-sm">
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-700 font-medium">Dominas la lengua</span>
                    <span className="font-extrabold text-[#001837]">B1</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-700 font-medium">Viajes y trabajo</span>
                    <span className="font-extrabold text-[#001837]">B2</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-700 font-medium">Debates y opiniones</span>
                    <span className="font-extrabold text-[#834296] bg-[#F5E6F8] px-2 py-0.5 rounded">95%</span>
                  </div>
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-700 font-medium">Fluidez conversacional</span>
                    <span className="font-extrabold text-[#16A34A]">Sí</span>
                  </div>
                </div>

                <div className="pt-2 space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#16A34A] stroke-[2.5]" />
                    <span className="font-semibold">Beneficios Extras</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#16A34A] stroke-[2.5]" />
                    <span className="font-semibold">Material auténtico incluido</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-[#16A34A] stroke-[2.5]" />
                    <span className="font-semibold">Profesor asignado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 5. PLATAFORMA DE PRÁCTICA                                                 */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
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
                <div className="space-y-1.5 p-4 rounded-2xl border border-black/10 bg-slate-50/50">
                  <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#4DC2DA]">
                    Plataforma de práctica incluida
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body-regular">
                    Incluido en todos los planes, sin costo adicional: talleres temáticos, material auténtico, invitados de distintos países y llamadas simuladas. Va rotando, así siempre tienes dónde seguir practicando.
                  </p>
                </div>

                <div className="space-y-1.5 p-4 rounded-2xl border border-black/10 bg-slate-50/50">
                  <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#4DC2DA]">
                    Sin libros de texto ni tareas para memorizar
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body-regular">
                    Solo conversación real con un profesor, desde el primer minuto.
                  </p>
                </div>

                <div className="space-y-1.5 p-4 rounded-2xl border border-black/10 bg-slate-50/50">
                  <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#4DC2DA]">
                    Todos los paquetes incluyen la plataforma de práctica
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body-regular">
                    No es un extra. Es parte del método. Porque hablar es la única forma de aprender de verdad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 6. CIERRE CTA                                                             */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-white border-t border-slate-100 text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-6">
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
                  className="font-heading font-bold text-sm px-8 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
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

print("Color balance aligned strictly with Figma reference: white canvas + specific #FFE2C0 banner accent")
