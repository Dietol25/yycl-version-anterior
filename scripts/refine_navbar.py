import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

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
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo Sticker */}
        <Link href="/" className="flex items-center gap-3">
          <Logo size={46} />
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-7">
          <Link
            href="/como-funciona"
            className={`text-[14px] font-heading font-semibold transition-colors hover:text-yycl-navy ${
              pathname === '/como-funciona' ? 'text-yycl-navy font-bold' : 'text-slate-700'
            }`}
          >
            Cómo funciona
          </Link>

          <Link
            href="/resultados"
            className={`text-[14px] font-heading font-semibold transition-colors hover:text-yycl-navy ${
              pathname === '/resultados' ? 'text-yycl-navy font-bold' : 'text-slate-700'
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
              className="text-[14px] font-heading font-semibold text-slate-700 hover:text-yycl-navy transition-colors inline-flex items-center gap-1 py-2 cursor-pointer"
            >
              <span>Nuestros programas</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:rotate-180 transition-transform duration-200" />
            </button>

            {programasDropdownOpen && (
              <div className="absolute top-full left-0 w-60 bg-white rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] p-2 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                <Link href="/planes" className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-yycl-cream">
                  🇬🇧 Inglés General & Planes
                </Link>
                <Link href="/idiomas" className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-yycl-cream">
                  🇫🇷 Francés y Portugués
                </Link>
                <Link href="/kids" className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-yycl-cream">
                  🎨 Kids & Teens
                </Link>
                <Link href="/empresas" className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-yycl-cream">
                  🏢 Capacitación corporativa
                </Link>
                <Link href="/servicios-especiales" className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-yycl-cream">
                  🎓 Servicios Especiales (Exámenes)
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
              className="text-[14px] font-heading font-semibold text-slate-700 hover:text-yycl-navy transition-colors inline-flex items-center gap-1 py-2 cursor-pointer"
            >
              <span>Sobre YYCL</span>
              <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:rotate-180 transition-transform duration-200" />
            </button>

            {sobreDropdownOpen && (
              <div className="absolute top-full left-0 w-48 bg-white rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] p-2 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                <Link href="/sobre-yycl" className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-yycl-cream">
                  Sobre Nosotros
                </Link>
                <Link href="/profesores" className="block px-3 py-2 rounded-xl text-xs font-semibold text-slate-800 hover:bg-yycl-cream">
                  Nuestro equipo
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/login"
            className="text-[14px] font-heading font-semibold text-slate-700 hover:text-yycl-navy transition-colors"
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
              className="font-bold text-xs px-5 py-2 h-10 shadow-[2px_2px_0px_#001837]"
            >
              Agendar
            </Button>
          </Link>
        </div>

        {/* Right Side (Mobile View) */}
        <div className="flex xl:hidden items-center gap-3">
          <LanguageToggle />

          <Link href="/agendar">
            <Button variant="primary" size="sm" className="font-bold text-xs h-9 px-3 shadow-[2px_2px_0px_#001837]">
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
            <Link href="/como-funciona" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-yycl-cream">
              Cómo funciona
            </Link>
            <Link href="/resultados" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-yycl-cream">
              Resultados
            </Link>
            <Link href="/planes" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-yycl-cream">
              Planes & Modalidades
            </Link>
            <Link href="/idiomas" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-yycl-cream">
              Otros Idiomas
            </Link>
            <Link href="/kids" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-yycl-cream">
              Kids & Teens
            </Link>
            <Link href="/empresas" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-yycl-cream">
              Capacitación corporativa
            </Link>
            <Link href="/profesores" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-yycl-cream">
              Nuestro equipo
            </Link>
            <Link href="/sobre-yycl" onClick={() => setMobileMenuOpen(false)} className="px-3 py-2 rounded-xl text-sm font-heading font-semibold text-slate-800 hover:bg-yycl-cream">
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

print("Navbar refined cleanly")
