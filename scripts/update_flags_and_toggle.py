import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. FlagIcons.tsx with exact clean vector flags
write_file('components/icons/FlagIcons.tsx', """import React from 'react';

// Spain flat flag (Red / Yellow / Red in 1:2:1 ratio)
export const SpainFlag = ({ size = 28 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="rounded-full overflow-hidden shrink-0"
  >
    <rect width="32" height="32" rx="16" fill="#AA151B" />
    <rect y="8" width="32" height="16" fill="#F1BF00" />
  </svg>
);

// USA circular flag (Stars & Stripes)
export const UsaFlag = ({ size = 28 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="rounded-full overflow-hidden shrink-0"
  >
    {/* Red/White Stripes */}
    <rect width="32" height="32" rx="16" fill="#B22234" />
    <rect y="2.5" width="32" height="2.5" fill="#FFFFFF" />
    <rect y="7.5" width="32" height="2.5" fill="#FFFFFF" />
    <rect y="12.5" width="32" height="2.5" fill="#FFFFFF" />
    <rect y="17.5" width="32" height="2.5" fill="#FFFFFF" />
    <rect y="22.5" width="32" height="2.5" fill="#FFFFFF" />
    <rect y="27.5" width="32" height="2.5" fill="#FFFFFF" />
    {/* Blue Canton */}
    <rect width="16" height="16" fill="#3C3B6E" />
    {/* Mini Stars */}
    <circle cx="4" cy="4" r="1.1" fill="#FFFFFF" />
    <circle cx="8" cy="4" r="1.1" fill="#FFFFFF" />
    <circle cx="12" cy="4" r="1.1" fill="#FFFFFF" />
    <circle cx="6" cy="8" r="1.1" fill="#FFFFFF" />
    <circle cx="10" cy="8" r="1.1" fill="#FFFFFF" />
    <circle cx="4" cy="12" r="1.1" fill="#FFFFFF" />
    <circle cx="8" cy="12" r="1.1" fill="#FFFFFF" />
    <circle cx="12" cy="12" r="1.1" fill="#FFFFFF" />
  </svg>
);

// France flat flag (Blue / White / Red)
export const FranceFlag = ({ size = 28 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="rounded-full overflow-hidden shrink-0"
  >
    <rect width="10.6" height="32" fill="#002654" />
    <rect x="10.6" width="10.8" height="32" fill="#FFFFFF" />
    <rect x="21.4" width="10.6" height="32" fill="#CE1126" />
  </svg>
);
""")

# 2. Update LanguageToggle.tsx (Exact 84x36 pill with 28x28 circular knob, shadow, and transition)
write_file('components/navigation/LanguageToggle.tsx', """\"use client\";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SpainFlag, UsaFlag } from '@/components/icons/FlagIcons';

export const LanguageToggle = () => {
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en');

  return (
    <Link
      href={isEn ? '/' : '/en'}
      className="relative inline-flex items-center w-[84px] h-[36px] bg-white border border-black/15 rounded-full p-1 transition-all cursor-pointer select-none shadow-xs hover:border-[#001837]"
      title={isEn ? 'Cambiar a Español' : 'Switch to English'}
    >
      {/* Background text: EN on right when ES is active, ES on left when EN is active */}
      <span
        className={`w-1/2 text-center text-xs font-heading font-bold text-[#3C4C92] transition-opacity ${
          isEn ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        ES
      </span>
      <span
        className={`w-1/2 text-center text-xs font-heading font-bold text-[#3C4C92] transition-opacity ${
          isEn ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        EN
      </span>

      {/* Sliding Knob (28x28 circular knob with flag and keycap shadow) */}
      <div
        className={`absolute top-[3px] w-[28px] h-[28px] rounded-full shadow-[1px_1px_0px_#001837] border border-black/10 overflow-hidden flex items-center justify-center transition-transform duration-200 ${
          isEn ? 'left-[49px]' : 'left-[3px]'
        }`}
      >
        {isEn ? <UsaFlag size={28} /> : <SpainFlag size={28} />}
      </div>
    </Link>
  );
};
""")

# 3. Update Navbar.tsx to place LanguageToggle, Plataforma, and Agendar in the exact visual hierarchy
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
    <header className="sticky top-0 z-50 bg-white border-b border-black/10 transition-all duration-200">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo Sticker (52px) */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Logo size={52} />
        </Link>

        {/* Center Nav Links (Desktop — 4 items: Cómo Funciona, Resultados, Nuestros programas ⌵, Sobre YYCL ⌵) */}
        <nav className="hidden xl:flex items-center gap-8">
          <Link
            href="/como-funciona"
            className={`text-[15px] font-heading font-semibold transition-colors hover:text-yycl-navy ${
              pathname === '/como-funciona' ? 'text-yycl-navy font-bold' : 'text-slate-800'
            }`}
          >
            Cómo Funciona
          </Link>

          <Link
            href="/resultados"
            className={`text-[15px] font-heading font-semibold transition-colors hover:text-yycl-navy ${
              pathname === '/resultados' ? 'text-yycl-navy font-bold' : 'text-slate-800'
            }`}
          >
            Resultados
          </Link>

          {/* Dropdown: Nuestros programas */}
          <div
            className="relative group"
            onMouseEnter={() => setProgramasDropdownOpen(true)}
            onMouseLeave={() => setProgramasDropdownOpen(false)}
          >
            <button
              type="button"
              className="text-[15px] font-heading font-semibold text-slate-800 hover:text-yycl-navy transition-colors inline-flex items-center gap-1 py-2 cursor-pointer"
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

          {/* Dropdown: Sobre YYCL */}
          <div
            className="relative group"
            onMouseEnter={() => setSobreDropdownOpen(true)}
            onMouseLeave={() => setSobreDropdownOpen(false)}
          >
            <button
              type="button"
              className="text-[15px] font-heading font-semibold text-slate-800 hover:text-yycl-navy transition-colors inline-flex items-center gap-1 py-2 cursor-pointer"
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
        </nav>

        {/* Right Side: LanguageToggle + Plataforma (#3C4C92) + CTA Agendar (#FFD203) */}
        <div className="hidden lg:flex items-center gap-6">
          <LanguageToggle />

          <Link
            href="/login"
            className="text-[15px] font-heading font-semibold text-[#3C4C92] hover:text-yycl-navy transition-colors"
          >
            Plataforma
          </Link>

          <Link href="/agendar">
            <Button
              variant="primary"
              size="sm"
              className="font-bold text-sm px-6 py-2.5 h-11"
            >
              Agendar
            </Button>
          </Link>
        </div>

        {/* Right Side (Mobile View) */}
        <div className="flex xl:hidden items-center gap-3">
          <LanguageToggle />

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
        <div className="xl:hidden bg-yycl-purple text-white px-5 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150 shadow-xl">
          <div className="flex flex-col space-y-2">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold hover:bg-white/10 text-white">
              Inicio
            </Link>
            <Link href="/como-funciona" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold hover:bg-white/10 text-white">
              Cómo Funciona
            </Link>
            <Link href="/resultados" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold hover:bg-white/10 text-white">
              Resultados
            </Link>
            <Link href="/planes" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold hover:bg-white/10 text-white">
              Planes
            </Link>
            <Link href="/servicios-especiales" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold hover:bg-white/10 text-white">
              Servicios Especiales
            </Link>
            <Link href="/idiomas" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold hover:bg-white/10 text-white">
              Idiomas
            </Link>
            <Link href="/kids" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold hover:bg-white/10 text-white">
              Kids
            </Link>
            <Link href="/empresas" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold hover:bg-white/10 text-white">
              Empresas
            </Link>
          </div>

          <div className="pt-3 border-t border-white/20 flex flex-col gap-3">
            <div className="flex justify-center">
              <LanguageToggle />
            </div>

            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" size="md" fullWidth className="font-bold text-white bg-white/10 hover:bg-white/20">
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

print("LanguageToggle and Navbar updated with exact flag vectors")
