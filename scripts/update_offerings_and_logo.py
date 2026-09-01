import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. Logo.tsx with the official sticker logo
write_file('components/icons/Logo.tsx', """import React from 'react';

export const Logo = ({ size = 48, className = "" }: { size?: number; className?: string }) => (
  <div
    style={{ width: size, height: size }}
    className={`relative shrink-0 select-none cursor-pointer transition-transform hover:scale-105 ${className}`}
  >
    <img
      src="/assets/logo.png"
      alt="Yes You Can Languages"
      className="w-full h-full object-contain drop-shadow-xs"
    />
  </div>
);
""")

# 2. OfferingsSection.tsx matching the exact wireframe
write_file('components/sections/OfferingsSection.tsx', """\"use client\";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CATEGORIES = [
  { id: 'english', label: 'Inglés' },
  { id: 'languages', label: 'Francés y Portugués' },
  { id: 'kids', label: 'Kids & Teens' },
  { id: 'business', label: 'Empresas' },
];

export const OfferingsSection = () => {
  const [activeCategory, setActiveCategory] = useState('english');
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: 'Hablas desde el minuto uno',
      desc: 'Conversación real con un profesor es el centro de cada clase.',
    },
    {
      title: 'Corrección en el momento justo',
      desc: 'Corrección que te hace avanzar sin interrumpir tu fluidez.',
    },
    {
      title: 'Practicas hasta que sale solo',
      desc: 'Con espacios de práctica rotativos incluidos, refuerzas lo aprendido en situaciones reales y sin presión.',
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy tracking-tight">
            Todo lo que ofrecemos
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
            Un camino directo para cada necesidad. Sin rodeos, sin relleno.
          </p>
        </div>

        {/* Filter Pills (Category Switcher) */}
        <div className="flex items-center justify-center gap-2.5 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-yycl-navy text-white shadow-md shadow-yycl-navy/20'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isActive ? 'bg-white' : 'bg-slate-400'
                  }`}
                />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Content Container (Card + Illustration + Pillars) */}
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Offering Card */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-slate-50 p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
            <div className="md:col-span-7 space-y-4 text-left">
              <span className="text-sm font-bold font-heading text-yycl-purple block uppercase tracking-wider">
                {activeCategory === 'english' ? 'Inglés' :
                 activeCategory === 'languages' ? 'Francés & Portugués' :
                 activeCategory === 'kids' ? 'Kids' : 'Empresas'}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-yycl-navy tracking-tight">
                Aprende a hablar, no solo a estudiar
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Clases 100% conversacionales desde la primera clase.
              </p>

              <div className="pt-2">
                <Link
                  href="/planes"
                  className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold font-heading text-yycl-navy hover:text-yycl-purple transition-colors"
                >
                  <span>Más información</span>
                  <ArrowRight className="w-4 h-4 text-yycl-purple" />
                </Link>
              </div>
            </div>

            {/* Illustration */}
            <div className="md:col-span-5 flex justify-center">
              <div className="relative max-w-xs w-full rounded-2xl overflow-hidden shadow-md border-2 border-white">
                <img
                  src="/assets/02_COMO_FUNCIONA/YYCL_04_MODALIDAD_PERSONALIZADA.png"
                  alt="Clase de inglés 1-a-1 en YYCL"
                  className="w-full h-56 object-cover"
                />
              </div>
            </div>
          </div>

          {/* 3 Step Interactive Pillars (Hablas desde el minuto uno, Corrección, Prácticas) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
            {/* Left list with active indicator */}
            <div className="lg:col-span-7 space-y-6">
              {pillars.map((pillar, idx) => {
                const isActive = activePillar === idx;
                return (
                  <div
                    key={idx}
                    onClick={() => setActivePillar(idx)}
                    className={`cursor-pointer transition-all p-4 rounded-2xl ${
                      isActive
                        ? 'border-l-4 border-yycl-navy bg-amber-50/40 pl-5 shadow-xs'
                        : 'border-l-4 border-transparent hover:bg-slate-50 pl-5 opacity-70 hover:opacity-100'
                    }`}
                  >
                    <h4 className="text-lg sm:text-xl font-bold font-heading text-yycl-navy">
                      {pillar.title}
                    </h4>
                    <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Right illustration */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative max-w-sm w-full">
                <img
                  src="/assets/02_COMO_FUNCIONA/YYCL_03_MODALIDAD_GRUPAL.png"
                  alt="Metodología conversacional YYCL"
                  className="w-full h-auto object-contain rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
""")

# 3. Update Navbar.tsx to use the new Logo size & mobile bar
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
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-16 h-20 flex items-center justify-between">
        {/* Brand Logo Sticker */}
        <Link href="/" className="flex items-center gap-3">
          <Logo size={52} />
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

        {/* Right Side (Desktop) */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="text-sm font-heading font-bold flex items-center gap-1 select-none">
            <span className="text-yycl-navy">ES</span>
            <span className="text-slate-300 font-normal">/</span>
            <Link href="/en" className="text-slate-500 hover:text-yycl-navy font-medium transition-colors">
              EN
            </Link>
          </div>

          <Link
            href="/login"
            className="text-sm font-heading font-semibold text-slate-800 hover:text-yycl-navy transition-colors"
          >
            Plataforma
          </Link>

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

        {/* Right Side (Mobile View 393px matching screenshot) */}
        <div className="flex xl:hidden items-center gap-3">
          <div className="flex items-center gap-1 text-xs font-bold font-heading text-slate-700">
            <span>🇪🇸</span>
            <span>ES</span>
          </div>

          <Link href="/agendar">
            <Button variant="primary" size="sm" className="font-bold text-xs h-9 px-3.5">
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

# 4. Update app/page.tsx
write_file('app/page.tsx', """import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { OfferingsSection } from '@/components/sections/OfferingsSection';
import { Button } from '@/components/ui/Button';
import { Star, ArrowRight, Check } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. TODO LO QUE OFRECEMOS (Pills + Aprende a hablar + 3 Pilares) */}
      <OfferingsSection />

      {/* 3. TESTIMONIOS (1 Testimonio Destacado) */}
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

      {/* 4. MODALIDADES (3 Cards sin precio visible) */}
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

      {/* 5. CIERRE (Sí puedes. Yes you can. + CTA) */}
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

print("Offerings and Logo updated successfully")
