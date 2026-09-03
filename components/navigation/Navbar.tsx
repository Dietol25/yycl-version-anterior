"use client";

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

  const isProgramasActive = [
    '/planes',
    '/idiomas',
    '/kids',
    '/empresas',
    '/servicios-especiales',
  ].some((path) => pathname?.startsWith(path));

  const isSobreActive = ['/sobre-yycl', '/profesores'].some((path) =>
    pathname?.startsWith(path)
  );

  const isEn = pathname?.startsWith('/en');

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-black/10 transition-all duration-200">
        <div className="max-w-[1280px] mx-auto px-3.5 sm:px-6 lg:px-12 h-16 sm:h-[68px] flex items-center justify-between">
          {/* Brand Logo Sticker */}
          <Link href={isEn ? '/en' : '/'} className="flex items-center gap-2 shrink-0" title={isEn ? 'YYCL Home' : 'YYCL Inicio'}>
            <div className="block sm:hidden">
              <Logo size={38} />
            </div>
            <div className="hidden sm:block">
              <Logo size={44} />
            </div>
          </Link>

          {/* Center Nav Links */}
          {isEn ? (
            <nav className="hidden xl:flex items-center gap-7 h-full">
              <Link
                href="/en"
                className={`relative h-full flex items-center text-[14px] font-heading font-semibold transition-colors hover:text-[#001837] ${
                  pathname === '/en' || pathname === '/en/spanish-classes'
                    ? 'text-[#001837] font-bold'
                    : 'text-slate-700'
                }`}
              >
                <span>Spanish Classes</span>
                {(pathname === '/en' || pathname === '/en/spanish-classes') && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FFD203] rounded-t-full" />
                )}
              </Link>

              <Link
                href="/en/english-classes"
                className={`relative h-full flex items-center text-[14px] font-heading font-semibold transition-colors hover:text-[#001837] ${
                  pathname === '/en/english-classes'
                    ? 'text-[#001837] font-bold'
                    : 'text-slate-700'
                }`}
              >
                <span>English Classes</span>
                {pathname === '/en/english-classes' && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FFD203] rounded-t-full" />
                )}
              </Link>

              <Link
                href="/en/spanish-classes-kids"
                className={`relative h-full flex items-center text-[14px] font-heading font-semibold transition-colors hover:text-[#001837] ${
                  pathname === '/en/spanish-classes-kids'
                    ? 'text-[#001837] font-bold'
                    : 'text-slate-700'
                }`}
              >
                <span>Kids & Teens</span>
                {pathname === '/en/spanish-classes-kids' && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FFD203] rounded-t-full" />
                )}
              </Link>

              <Link
                href="/en/about-us"
                className={`relative h-full flex items-center text-[14px] font-heading font-semibold transition-colors hover:text-[#001837] ${
                  pathname === '/en/about-us'
                    ? 'text-[#001837] font-bold'
                    : 'text-slate-700'
                }`}
              >
                <span>About Us</span>
                {pathname === '/en/about-us' && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FFD203] rounded-t-full" />
                )}
              </Link>
            </nav>
          ) : (
            <nav className="hidden xl:flex items-center gap-7 h-full">
              {/* 1. Cómo Funciona */}
              <Link
                href="/como-funciona"
                className={`relative h-full flex items-center text-[14px] font-heading font-semibold transition-colors hover:text-[#001837] ${
                  pathname === '/como-funciona'
                    ? 'text-[#001837] font-bold'
                    : 'text-slate-700'
                }`}
              >
                <span>Cómo Funciona</span>
                {pathname === '/como-funciona' && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FFD203] rounded-t-full" />
                )}
              </Link>

              {/* 2. Resultados */}
              <Link
                href="/resultados"
                className={`relative h-full flex items-center text-[14px] font-heading font-semibold transition-colors hover:text-[#001837] ${
                  pathname === '/resultados'
                    ? 'text-[#001837] font-bold'
                    : 'text-slate-700'
                }`}
              >
                <span>Resultados</span>
                {pathname === '/resultados' && (
                  <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FFD203] rounded-t-full" />
                )}
              </Link>

              {/* 3. Dropdown: Nuestros programas */}
              <div
                className="relative h-full flex items-center group cursor-pointer"
                onMouseEnter={() => setProgramasDropdownOpen(true)}
                onMouseLeave={() => setProgramasDropdownOpen(false)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={programasDropdownOpen}
                  aria-controls="nav-programas-dropdown"
                  className={`relative h-full inline-flex items-center gap-1 text-[14px] font-heading font-semibold transition-colors hover:text-[#001837] cursor-pointer ${
                    isProgramasActive ? 'text-[#001837] font-bold' : 'text-slate-700'
                  }`}
                >
                  <span>Nuestros programas</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${programasDropdownOpen ? 'rotate-180' : ''}`} />
                  {isProgramasActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FFD203] rounded-t-full" />
                  )}
                </button>

                {programasDropdownOpen && (
                  <div
                    id="nav-programas-dropdown"
                    role="menu"
                    className="absolute top-[calc(100%-2px)] left-0 pt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    <div className="w-80 bg-white rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] p-2 space-y-1">
                      <Link
                        href="/planes"
                        role="menuitem"
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-[13px] font-heading font-semibold transition-colors ${
                          pathname === '/planes' ? 'bg-slate-100 text-yycl-navy font-bold' : 'text-slate-800 hover:bg-slate-100'
                        }`}
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#834296] shrink-0" />
                        <span>Nuestros programas</span>
                      </Link>
                      <Link
                        href="/idiomas"
                        role="menuitem"
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-[13px] font-heading font-semibold transition-colors ${
                          pathname === '/idiomas' ? 'bg-slate-100 text-yycl-navy font-bold' : 'text-slate-800 hover:bg-slate-100'
                        }`}
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EC9519] shrink-0" />
                        <span>Otros idiomas</span>
                      </Link>
                      <Link
                        href="/kids"
                        role="menuitem"
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-[13px] font-heading font-semibold transition-colors ${
                          pathname === '/kids' ? 'bg-slate-100 text-yycl-navy font-bold' : 'text-slate-800 hover:bg-slate-100'
                        }`}
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#4DC2DA] shrink-0" />
                        <span>Kids & Teens (Niños y adolescentes)</span>
                      </Link>
                      <Link
                        href="/empresas"
                        role="menuitem"
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-[13px] font-heading font-semibold transition-colors ${
                          pathname === '/empresas' ? 'bg-slate-100 text-yycl-navy font-bold' : 'text-slate-800 hover:bg-slate-100'
                        }`}
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#001837] shrink-0" />
                        <span>Capacitación corporativa en idiomas</span>
                      </Link>
                      <Link
                        href="/servicios-especiales"
                        role="menuitem"
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs sm:text-[13px] font-heading font-semibold transition-colors ${
                          pathname === '/servicios-especiales' ? 'bg-slate-100 text-yycl-navy font-bold' : 'text-slate-800 hover:bg-slate-100'
                        }`}
                      >
                        <span className="w-2.5 h-2.5 rounded-full bg-[#EC9519] shrink-0" />
                        <span>Servicios Especiales</span>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. Dropdown: Sobre YYCL */}
              <div
                className="relative h-full flex items-center group cursor-pointer"
                onMouseEnter={() => setSobreDropdownOpen(true)}
                onMouseLeave={() => setSobreDropdownOpen(false)}
              >
                <button
                  type="button"
                  aria-haspopup="true"
                  aria-expanded={sobreDropdownOpen}
                  aria-controls="nav-sobre-dropdown"
                  className={`relative h-full inline-flex items-center gap-1 text-[14px] font-heading font-semibold transition-colors hover:text-[#001837] cursor-pointer ${
                    isSobreActive ? 'text-[#001837] font-bold' : 'text-slate-700'
                  }`}
                >
                  <span>Sobre YYCL</span>
                  <ChevronDown className={`w-3.5 h-3.5 text-slate-500 transition-transform duration-200 ${sobreDropdownOpen ? 'rotate-180' : ''}`} />
                  {isSobreActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[3px] bg-[#FFD203] rounded-t-full" />
                  )}
                </button>

                {sobreDropdownOpen && (
                  <div
                    id="nav-sobre-dropdown"
                    role="menu"
                    className="absolute top-[calc(100%-2px)] left-0 pt-1 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                  >
                    <div className="w-60 bg-white rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] p-2 space-y-1">
                      <Link
                        href="/sobre-yycl"
                        role="menuitem"
                        className={`block px-3 py-2 rounded-xl text-xs sm:text-[13px] font-heading font-semibold transition-colors ${
                          pathname === '/sobre-yycl' ? 'bg-slate-100 text-yycl-navy font-bold' : 'text-slate-800 hover:bg-slate-100'
                        }`}
                      >
                        Sobre YYCL
                      </Link>
                      <Link
                        href="/profesores"
                        role="menuitem"
                        className={`block px-3 py-2 rounded-xl text-xs sm:text-[13px] font-heading font-semibold transition-colors ${
                          pathname === '/profesores' ? 'bg-slate-100 text-yycl-navy font-bold' : 'text-slate-800 hover:bg-slate-100'
                        }`}
                      >
                        Nuestro equipo
                      </Link>
                      <Link
                        href="/trabaja-con-nosotros"
                        role="menuitem"
                        className={`block px-3 py-2 rounded-xl text-xs sm:text-[13px] font-heading font-semibold transition-colors ${
                          pathname === '/trabaja-con-nosotros' ? 'bg-slate-100 text-yycl-navy font-bold' : 'text-slate-800 hover:bg-slate-100'
                        }`}
                      >
                        Trabaja con nosotros
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          )}

          {/* Right Side: [LanguageToggle] -> [Plataforma (#3C4C92)] -> [CTA Agendar (#FFD203)] */}
          <div className="hidden xl:flex items-center gap-5">
            <LanguageToggle />

            {!isEn && (
              <Link
                href="/login"
                className={`text-[14px] font-heading font-semibold transition-colors ${
                  pathname === '/login' ? 'text-[#001837] font-bold underline' : 'text-[#3C4C92] hover:text-[#001837]'
                }`}
              >
                Plataforma
              </Link>
            )}

            <Link href={isEn ? '/en/agendar' : '/agendar'}>
              <Button
                variant="primary"
                size="sm"
                className="font-heading font-bold text-xs sm:text-sm px-5 py-2 h-10 shadow-[3px_3px_0px_#EC9519]"
              >
                {isEn ? 'Book an interview' : 'Agendar gratis'}
              </Button>
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex xl:hidden items-center gap-1.5 sm:gap-2.5">
            <LanguageToggle />

            <Link href={isEn ? '/en/agendar' : '/agendar'}>
              <Button
                variant="primary"
                size="sm"
                className="font-bold text-[11px] sm:text-xs h-8 sm:h-8.5 px-2.5 sm:px-3 shadow-[2px_2px_0px_#EC9519] whitespace-nowrap"
              >
                {isEn ? 'Book interview' : 'Agendar gratis'}
              </Button>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-1 sm:p-1.5 text-[#001837] hover:bg-slate-100 rounded-xl focus:outline-none cursor-pointer shrink-0"
              aria-label={isEn ? 'Open Menu' : 'Abrir Menú'}
            >
              <Menu className="w-5 h-5" />
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
