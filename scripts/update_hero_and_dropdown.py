import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. Clean dropdowns in Navbar.tsx (no icons/emojis)
write_file('components/navigation/Navbar.tsx', """\"use client\";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/icons/Logo';
import { LanguageToggle } from '@/components/navigation/LanguageToggle';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programasDropdownOpen, setProgramasDropdownOpen] = useState(false);
  const [sobreDropdownOpen, setSobreDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80 transition-all duration-200">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-14 h-20 flex items-center justify-between">
        {/* Brand Logo Sticker */}
        <Link href="/" className="flex items-center gap-3">
          <Logo size={48} />
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-8">
          <Link
            href="/como-funciona"
            className={`text-[15px] font-heading font-semibold transition-colors hover:text-yycl-navy ${
              pathname === '/como-funciona' ? 'text-yycl-navy font-bold' : 'text-slate-700'
            }`}
          >
            Cómo funciona
          </Link>

          <Link
            href="/resultados"
            className={`text-[15px] font-heading font-semibold transition-colors hover:text-yycl-navy ${
              pathname === '/resultados' ? 'text-yycl-navy font-bold' : 'text-slate-700'
            }`}
          >
            Resultados
          </Link>

          {/* Dropdown: Nuestros programas (Clean text, no icons) */}
          <div
            className="relative group"
            onMouseEnter={() => setProgramasDropdownOpen(true)}
            onMouseLeave={() => setProgramasDropdownOpen(false)}
          >
            <button
              type="button"
              className="text-[15px] font-heading font-semibold text-slate-700 hover:text-yycl-navy transition-colors inline-flex items-center gap-1 py-2 cursor-pointer"
            >
              <span>Nuestros programas</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:rotate-180 transition-transform duration-200" />
            </button>

            {programasDropdownOpen && (
              <div className="absolute top-full left-0 w-60 bg-white rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] p-2 space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                <Link
                  href="/planes"
                  className="block px-3.5 py-2.5 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-slate-100 hover:text-yycl-navy transition-colors"
                >
                  Inglés General & Planes
                </Link>
                <Link
                  href="/idiomas"
                  className="block px-3.5 py-2.5 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-slate-100 hover:text-yycl-navy transition-colors"
                >
                  Francés y Portugués
                </Link>
                <Link
                  href="/kids"
                  className="block px-3.5 py-2.5 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-slate-100 hover:text-yycl-navy transition-colors"
                >
                  Kids & Teens
                </Link>
                <Link
                  href="/empresas"
                  className="block px-3.5 py-2.5 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-slate-100 hover:text-yycl-navy transition-colors"
                >
                  Capacitación corporativa
                </Link>
                <Link
                  href="/servicios-especiales"
                  className="block px-3.5 py-2.5 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-slate-100 hover:text-yycl-navy transition-colors"
                >
                  Servicios Especiales (Exámenes)
                </Link>
              </div>
            )}
          </div>

          {/* Dropdown: Sobre YYCL (Clean text, no icons) */}
          <div
            className="relative group"
            onMouseEnter={() => setSobreDropdownOpen(true)}
            onMouseLeave={() => setSobreDropdownOpen(false)}
          >
            <button
              type="button"
              className="text-[15px] font-heading font-semibold text-slate-700 hover:text-yycl-navy transition-colors inline-flex items-center gap-1 py-2 cursor-pointer"
            >
              <span>Sobre YYCL</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:rotate-180 transition-transform duration-200" />
            </button>

            {sobreDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-white rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] p-2 space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                <Link
                  href="/sobre-yycl"
                  className="block px-3.5 py-2.5 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-slate-100 hover:text-yycl-navy transition-colors"
                >
                  Sobre Nosotros
                </Link>
                <Link
                  href="/profesores"
                  className="block px-3.5 py-2.5 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-slate-100 hover:text-yycl-navy transition-colors"
                >
                  Nuestro equipo
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/login"
            className="text-[15px] font-heading font-semibold text-slate-700 hover:text-yycl-navy transition-colors"
          >
            Plataforma
          </Link>
        </nav>

        {/* Right Side (Desktop) */}
        <div className="hidden lg:flex items-center gap-5">
          <LanguageToggle />

          <Link href="/agendar">
            <Button
              variant="primary"
              size="sm"
              className="font-bold text-sm px-6 py-2.5 h-11 shadow-[2px_2px_0px_#001837]"
            >
              Agendar
            </Button>
          </Link>
        </div>

        {/* Right Side (Mobile View) */}
        <div className="flex xl:hidden items-center gap-3">
          <LanguageToggle />

          <Link href="/agendar">
            <Button variant="primary" size="sm" className="font-bold text-xs h-9 px-3.5 shadow-[2px_2px_0px_#001837]">
              Agendar
            </Button>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-yycl-navy hover:bg-slate-100 rounded-lg focus:outline-none"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-5 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150 shadow-xl">
          <div className="flex flex-col space-y-2">
            <Link href="/como-funciona" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-slate-100">
              Cómo funciona
            </Link>
            <Link href="/resultados" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-slate-100">
              Resultados
            </Link>
            <Link href="/planes" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-slate-100">
              Inglés General & Planes
            </Link>
            <Link href="/idiomas" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-slate-100">
              Francés y Portugués
            </Link>
            <Link href="/kids" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-slate-100">
              Kids & Teens
            </Link>
            <Link href="/empresas" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-slate-100">
              Capacitación corporativa
            </Link>
            <Link href="/servicios-especiales" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-slate-100">
              Servicios Especiales
            </Link>
            <Link href="/profesores" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-slate-100">
              Nuestro equipo
            </Link>
            <Link href="/sobre-yycl" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-slate-100">
              Sobre YYCL
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-3">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" size="md" fullWidth className="font-bold">
                Plataforma (Ingresar)
              </Button>
            </Link>

            <Link href="/agendar" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="md" fullWidth className="font-bold">
                Agenda tu entrevista gratuita
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
""")

# 2. HeroSection.tsx with prominently larger illustration image & refined layout
write_file('components/sections/HeroSection.tsx', """import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const HeroSection = () => {
  return (
    <section className="bg-white py-14 lg:py-24 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Headline, Kicker, Subtitle, Dual CTAs (6 cols on lg) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Top kicker badge */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-yycl-navy">
              <span className="w-2.5 h-2.5 rounded-full bg-yycl-yellow inline-block shrink-0 shadow-xs" />
              <span>El último curso de inglés que necesitarás.</span>
            </div>

            {/* H1 Main Headline */}
            <div className="space-y-1 relative">
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold font-heading text-yycl-navy tracking-tight leading-[1.12]">
                Pierde el <span className="text-yycl-purple">miedo</span><br />
                a hablar inglés.
              </h1>

              {/* Hand-drawn accent curve underline SVG beneath 'a hablar' */}
              <div className="pt-1.5">
                <svg
                  className="w-36 sm:w-44 h-4 text-yycl-yellow"
                  viewBox="0 0 160 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 10.5C25 4.5 75 2.5 157 7.5"
                    stroke="#FFD203"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-base sm:text-[17px] text-slate-600 max-w-xl leading-relaxed font-body-regular">
              ¿Ya probaste apps, cursos, de todo? El problema nunca fue lo que sabes — es soltarte a hablar. Eso se practica, no se memoriza, desde tu primera clase con un profesor real.
            </p>

            {/* Dual Actions matching screenshot */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="md"
                  className="font-bold text-sm px-7 py-3 h-12 shadow-[3px_3px_0px_#001837]"
                >
                  Agendar entrevista
                </Button>
              </Link>

              <Link href="/como-funciona">
                <Button
                  variant="ghost"
                  size="md"
                  className="font-bold text-sm px-7 py-3 h-12 bg-white text-yycl-navy border-2 border-yycl-navy shadow-[3px_3px_0px_#001837] hover:bg-slate-50"
                >
                  Ver cómo funciona
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Prominently Larger Illustration Image (6 cols on lg) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px] lg:max-w-[620px] transition-transform hover:scale-[1.01] duration-300">
              <img
                src="/assets/01_INICIO/YYCL_01_HOME_INGLES_CONVERSACION.png"
                alt="Estudiante practicando inglés conversacional en YYCL"
                className="w-full h-auto object-contain select-none drop-shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
""")

print("Hero image enlarged and dropdown icons removed cleanly")
