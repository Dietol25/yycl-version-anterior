import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. Full Mobile Drawer matching exact screenshot (media_1788233313615.png) + Language Toggle
write_file('components/navigation/MobileMenu.tsx', """\"use client\";

import React from 'react';
import Link from 'next/link';
import { ChevronRight, X, ChevronLeft } from 'lucide-react';
import { Logo } from '@/components/icons/Logo';
import { Button } from '@/components/ui/Button';
import { LanguageToggle } from '@/components/navigation/LanguageToggle';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const menuItems = [
    { label: 'Inicio', href: '/' },
    { label: 'Cómo funciona', href: '/como-funciona' },
    { label: 'Resultados', href: '/resultados' },
    { label: 'Nuestros programas', href: '/planes' },
    { label: 'Otros idiomas', href: '/idiomas' },
    { label: 'Kids & Teens (Niños y adolescentes)', href: '/kids' },
    { label: 'Capacitación corporativa en idiomas', href: '/empresas' },
    { label: 'Servicios Especiales', href: '/servicios-especiales' },
    { label: 'Nuestro equipo', href: '/profesores' },
    { label: 'Sobre YYCL', href: '/sobre-yycl' },
    { label: 'Plataforma', href: '/login' },
    { label: 'Trabaja con nosotros', href: '/sobre-yycl' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      {/* Slide-in White Mobile Menu Drawer (matching exact Figma layout) */}
      <div className="w-full max-w-[340px] sm:max-w-[375px] h-full bg-white flex flex-col justify-between p-6 shadow-2xl animate-in slide-in-from-right duration-200 overflow-y-auto">
        <div>
          {/* Header with Logo + Close Chevron Button */}
          <div className="flex items-center justify-between pb-5 border-b border-black/10">
            <Link href="/" onClick={onClose} className="flex items-center gap-2">
              <Logo size={44} />
            </Link>

            <div className="flex items-center gap-3">
              <LanguageToggle />
              <button
                type="button"
                onClick={onClose}
                className="p-2 text-slate-500 hover:text-yycl-navy transition-colors rounded-full hover:bg-slate-100 cursor-pointer"
                aria-label="Cerrar menú"
              >
                <ChevronLeft className="w-6 h-6 text-slate-400" />
              </button>
            </div>
          </div>

          {/* Vertical list of links in exact copy & font hierarchy */}
          <nav className="flex flex-col space-y-4 pt-6 pb-6">
            {menuItems.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className="font-heading font-bold text-[15px] sm:text-base text-[#001837] hover:text-[#834296] transition-colors py-0.5"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom CTA Button: Agenda tu entrevista gratuita */}
        <div className="pt-4 border-t border-black/10">
          <Link href="/agendar" onClick={onClose}>
            <Button
              variant="primary"
              size="md"
              fullWidth
              className="font-label-large font-bold text-sm h-12 shadow-[3px_3px_0px_#EC9519]"
            >
              Agenda tu entrevista gratuita
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
""")

# 2. Update Navbar.tsx to integrate MobileMenu cleanly
write_file('components/navigation/Navbar.tsx', """\"use client\";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/icons/Logo';
import { LanguageToggle } from '@/components/navigation/LanguageToggle';
import { MobileMenu } from '@/components/navigation/MobileMenu';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programasDropdownOpen, setProgramasDropdownOpen] = useState(false);
  const [sobreDropdownOpen, setSobreDropdownOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-black/10 transition-all duration-200">
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
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] p-2 space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
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
                <div className="absolute top-full left-0 w-52 bg-white rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] p-2 space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
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

          {/* Right Side (Desktop): LanguageToggle + Plataforma (#3C4C92) + CTA Agendar (#FFD203) */}
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
                className="font-bold text-sm px-6 py-2.5 h-11 shadow-[3px_3px_0px_#EC9519]"
              >
                Agendar
              </Button>
            </Link>
          </div>

          {/* Right Side (Mobile View) */}
          <div className="flex xl:hidden items-center gap-3">
            <LanguageToggle />

            <Link href="/agendar">
              <Button variant="primary" size="sm" className="font-bold text-xs h-9 px-3.5 shadow-[2px_2px_0px_#EC9519]">
                Agendar
              </Button>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#001837] hover:bg-slate-100 rounded-xl focus:outline-none cursor-pointer"
              aria-label="Abrir Menú"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Full Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
};
""")

print("MobileMenu and Navbar updated with exact full copy, layout, and language switch")
