import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. Logo.tsx
write_file('components/icons/Logo.tsx', """import React from 'react';

export const Logo = ({ size = 44 }: { size?: number }) => (
  <div
    style={{ width: size, height: size }}
    className="rounded-full bg-yycl-yellow border-2 border-yycl-navy flex flex-col items-center justify-center p-1 shadow-sm select-none relative group cursor-pointer"
  >
    <div className="flex flex-col items-center justify-center leading-none text-center">
      <span className="text-[9px] font-extrabold font-heading text-yycl-navy tracking-tight uppercase">
        YES
      </span>
      <span className="text-[8px] font-extrabold font-heading text-yycl-navy tracking-tighter uppercase">
        YOU
      </span>
      <span className="text-[8px] font-extrabold font-heading text-yycl-navy tracking-tight uppercase">
        CAN
      </span>
    </div>
  </div>
);
""")

# 2. Navbar.tsx (White background matching the screenshot)
write_file('components/navigation/Navbar.tsx', """\"use client\";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/icons/Logo';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [idiomasDropdownOpen, setIdiomasDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Cómo Funciona', href: '/como-funciona' },
    { label: 'Resultados', href: '/resultados' },
    { label: 'Planes', href: '/planes' },
    { label: 'Servicios Especiales', href: '/servicios-especiales' },
    {
      label: 'Idiomas',
      href: '/idiomas',
      hasDropdown: true,
    },
    { label: 'Kids', href: '/kids' },
    { label: 'Empresas', href: '/empresas' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80 transition-all duration-200">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Logo size={46} />
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setIdiomasDropdownOpen(true)}
                  onMouseLeave={() => setIdiomasDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="text-[15px] font-heading font-semibold text-slate-800 hover:text-yycl-navy transition-colors inline-flex items-center gap-1 py-2"
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>

                  {idiomasDropdownOpen && (
                    <div className="absolute top-full left-0 w-52 bg-white rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] p-2 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150">
                      <Link href="/idiomas" className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-yycl-cream">
                        🇬🇧 Inglés Profesional
                      </Link>
                      <Link href="/idiomas" className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-yycl-cream">
                        🇫🇷 Francés Conversacional
                      </Link>
                      <Link href="/idiomas" className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-yycl-cream">
                        🇧🇷 Portugués de Negocios
                      </Link>
                      <Link href="/en/spanish-classes" className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-yycl-cream">
                        🇨🇴 Spanish for Expats
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[15px] font-heading font-semibold transition-colors hover:text-yycl-navy ${
                  isActive ? 'text-yycl-navy font-bold' : 'text-slate-800'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side: ES / EN, Plataforma, Agendar CTA */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Language Toggle */}
          <div className="text-sm font-heading font-bold flex items-center gap-1 select-none">
            <span className="text-yycl-navy">ES</span>
            <span className="text-slate-300 font-normal">/</span>
            <Link href="/en" className="text-slate-500 hover:text-yycl-navy font-medium transition-colors">
              EN
            </Link>
          </div>

          {/* Plataforma */}
          <Link
            href="/login"
            className="text-sm font-heading font-semibold text-slate-800 hover:text-yycl-navy transition-colors"
          >
            Plataforma
          </Link>

          {/* CTA Agendar entrevista */}
          <Link href="/agendar">
            <Button
              variant="primary"
              size="md"
              className="font-bold text-sm px-5 py-2.5 h-11"
            >
              Agendar entrevista
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex xl:hidden items-center gap-3">
          <Link href="/agendar">
            <Button variant="primary" size="sm" className="font-bold text-xs h-9 px-3">
              Agendar
            </Button>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl border-2 border-yycl-navy text-yycl-navy hover:bg-slate-100 focus:outline-none"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-5 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-base font-heading font-semibold text-slate-800 hover:bg-yycl-cream hover:text-yycl-navy transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-3">
            <div className="flex items-center justify-between px-3 py-2 text-sm font-heading font-bold">
              <span>Idioma:</span>
              <div className="flex items-center gap-2">
                <span className="text-yycl-navy font-bold">ES</span>
                <span className="text-slate-300">/</span>
                <Link href="/en" className="text-slate-500">EN</Link>
              </div>
            </div>

            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" size="md" fullWidth className="font-bold">
                Plataforma (Iniciar Sesión)
              </Button>
            </Link>

            <Link href="/agendar" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="md" fullWidth className="font-bold">
                Agendar entrevista gratuita
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
""")

# 3. HeroSection.tsx (100% faithful to the uploaded screenshot)
write_file('components/sections/HeroSection.tsx', """import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const HeroSection = () => {
  return (
    <section className="bg-white py-12 lg:py-20 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline, Kicker, Subtitle, Dual CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
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
              <div className="pt-1">
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
            <p className="text-base sm:text-[17px] text-slate-600 max-w-xl leading-relaxed">
              ¿Ya probaste apps, cursos, de todo? El problema nunca fue lo que sabes — es soltarte a hablar. Eso se practica, no se memoriza, desde tu primera clase con un profesor real.
            </p>

            {/* Dual Actions */}
            <div className="pt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="lg"
                  className="font-bold text-base px-7 py-3.5 h-13 w-full sm:w-auto"
                >
                  Agenda tu entrevista gratuita
                </Button>
              </Link>

              <Link
                href="/como-funciona"
                className="font-heading font-bold text-[15px] text-[#3C4C92] hover:text-yycl-navy transition-colors text-center sm:text-left py-2 sm:px-2"
              >
                Conoce cómo funciona
              </Link>
            </div>
          </div>

          {/* Right Column: Exact YYCL Asset Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative max-w-[500px] w-full">
              <img
                src="/assets/01_INICIO/YYCL_01_HOME_INGLES_CONVERSACION.png"
                alt="Estudiante practicando inglés conversacional en YYCL"
                className="w-full h-auto object-contain select-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
""")

# 4. Update app/page.tsx to render HeroSection cleanly
write_file('app/page.tsx', """import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { Button } from '@/components/ui/Button';
import { Star, ArrowRight, Check, Briefcase, Globe, Users, Building2 } from 'lucide-react';

export default function HomePage() {
  const categories = [
    {
      title: 'Inglés para Profesionales',
      desc: 'Pierde el miedo a hablar en reuniones de trabajo y entrevistas laborales.',
      icon: <Briefcase className="w-6 h-6 text-yycl-navy" />,
      tag: 'Más Popular'
    },
    {
      title: 'Francés Conversacional',
      desc: 'Preparación para inmigración a Canadá (TEF) o viajes.',
      icon: <Globe className="w-6 h-6 text-yycl-navy" />,
      tag: 'Canadá & Francia'
    },
    {
      title: 'Portugués de Negocios',
      desc: 'Enfocado en el mercado brasileño y exámenes Celpe-Bras.',
      icon: <Globe className="w-6 h-6 text-yycl-navy" />,
      tag: 'LATAM B2B'
    },
    {
      title: 'Kids & Teens (6-16 años)',
      desc: 'Pedagogía lúdica sin presión para desarrollar fluidez temprana.',
      icon: <Users className="w-6 h-6 text-yycl-navy" />,
      tag: 'Lúdico'
    },
    {
      title: 'Inglés Corporativo B2B',
      desc: 'Capacitación a la medida para equipos y empresas.',
      icon: <Building2 className="w-6 h-6 text-yycl-navy" />,
      tag: 'Empresas'
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* SECCIÓN 1: HERO (Fiel 100% al diseño Figma) */}
      <HeroSection />

      {/* SECCIÓN 2: TODO LO QUE OFRECEMOS (5 tarjetas por categoría) */}
      <section className="py-16 lg:py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading-h2 text-yycl-navy">
              Todo lo que ofrecemos
            </h2>
            <p className="text-body-small text-slate-600 mt-2">
              Programas diseñados para tus metas laborales y personales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#001837] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-yycl-cream flex items-center justify-center border-2 border-yycl-navy">
                      {cat.icon}
                    </div>
                    <span className="text-[13px] font-bold text-yycl-navy bg-yycl-yellow/60 px-3 py-1 rounded-full border border-yycl-navy">
                      {cat.tag}
                    </span>
                  </div>
                  <h3 className="font-heading-h3 text-yycl-navy mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-body-small text-slate-600">
                    {cat.desc}
                  </p>
                </div>
                <div className="pt-6">
                  <Link href="/planes" className="text-sm font-bold text-yycl-navy hover:underline inline-flex items-center gap-1">
                    Ver programa <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: CÓMO FUNCIONA (PREVIEW — Una frase contundente) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 text-center space-y-6">
          <span className="text-sm font-extrabold uppercase tracking-widest text-yycl-purple">
            Metodología Directa
          </span>
          <h2 className="font-heading-h2 text-yycl-navy">
            Aprende a hablar, no solo a estudiar.
          </h2>
          <p className="text-body-reg text-slate-700 max-w-2xl mx-auto">
            Desde 2021, enseñamos inglés directo a la conversación con corrección en el momento 24/7 y prácticas guiadas hasta que hablar te sale natural.
          </p>
          <div>
            <Link href="/como-funciona">
              <Button variant="outline" size="md">
                Conoce el proceso completo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: TESTIMONIOS (1 Testimonio Destacado) */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-8">
            <h2 className="font-heading-h2 text-yycl-navy">
              Resultados reales
            </h2>
          </div>

          <div className="bg-yycl-purple text-white p-8 sm:p-10 rounded-3xl border-2 border-yycl-navy shadow-[6px_6px_0px_#001837] space-y-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yycl-yellow text-yycl-yellow" />
              ))}
            </div>
            <blockquote className="text-lg sm:text-xl font-heading font-medium leading-relaxed">
              "Me ha encantado... me ha permitido preguntar, hablar y equivocarme. ¡Me gusta que no hay juzgamiento, por eso aprovecho todo!"
            </blockquote>
            <div className="flex items-center gap-3 pt-4 border-t border-white/20">
              <div className="w-12 h-12 rounded-full bg-yycl-yellow text-yycl-navy font-bold flex items-center justify-center font-heading text-lg border border-yycl-navy">
                TB
              </div>
              <div>
                <span className="block font-heading font-bold text-base">Tatiana Becerra</span>
                <span className="block text-xs text-slate-200">Product Manager · 🇨🇴 Colombia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: MODALIDADES (3 Cards sin precio visible) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-5 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-extrabold uppercase tracking-widest text-yycl-purple">
              Nuestros Programas
            </span>
            <h2 className="font-heading-h2 text-yycl-navy mt-1">
              Modalidades
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-yycl-purple text-white p-6 sm:p-8 rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] space-y-4">
              <h3 className="font-heading-h3 text-yycl-yellow">Grupal</h3>
              <p className="text-body-small text-slate-100">Grupos reducidos (máx. 4-6 personas) con estudiantes de tu mismo nivel.</p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow" /> Clases en vivo 3x/semana</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow" /> Club de conversación</li>
              </ul>
            </div>

            <div className="bg-yycl-purple-dark text-white p-6 sm:p-8 rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#FFD203] space-y-4">
              <span className="text-xs font-bold bg-yycl-yellow text-yycl-navy px-2.5 py-0.5 rounded-full border border-yycl-navy inline-block">
                MÁS POPULAR
              </span>
              <h3 className="font-heading-h3 text-white">Personalizado (1-a-1)</h3>
              <p className="text-body-small text-slate-200">Profesor exclusivo enfocado 100% en tu industria y objetivos.</p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow" /> Horarios flexibles</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow" /> Simulacro de entrevistas</li>
              </ul>
            </div>

            <div className="bg-yycl-purple text-white p-6 sm:p-8 rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] space-y-4">
              <h3 className="font-heading-h3 text-yycl-yellow">Dúo (En Pareja)</h3>
              <p className="text-body-small text-slate-100">Aprende con tu pareja, amigo o colega con un plan coordinado.</p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow" /> 2 alumnos por profesor</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow" /> Ahorro de más del 30%</li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8">
            <Link href="/planes" className="text-sm font-bold text-yycl-navy hover:underline inline-flex items-center gap-1">
              Ver todos los planes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: CIERRE (Sí puedes. Yes you can. + CTA) */}
      <section className="py-16 bg-gradient-to-r from-yycl-purple-dark to-yycl-purple text-white text-center border-t-4 border-yycl-yellow">
        <div className="max-w-3xl mx-auto px-5 space-y-6">
          <h2 className="font-display-hero text-white text-4xl sm:text-5xl">
            Sí puedes. Yes you can.
          </h2>
          <p className="text-body-reg text-slate-200">
            Agenda tu entrevista gratuita de 15 minutos y comienza hoy mismo.
          </p>
          <div>
            <Link href="/agendar">
              <Button variant="primary" size="lg" className="font-extrabold" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Agendar Mi Entrevista Gratuita
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
""")

print("Hero and Navbar updated with exact assets")
