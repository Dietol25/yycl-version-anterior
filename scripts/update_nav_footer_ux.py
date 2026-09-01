import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. Update Navbar.tsx with active indicator underline & parent dropdown active state
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

  return (
    <>
      <header className="sticky top-0 z-40 bg-white border-b border-black/10 transition-all duration-200">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
          {/* Brand Logo Sticker (52px) — Cumple función estándar de Inicio */}
          <Link href="/" className="flex items-center gap-3 shrink-0" title="YYCL Inicio">
            <Logo size={52} />
          </Link>

          {/* Center Nav Links (Desktop — 4 items: Cómo Funciona, Resultados, Nuestros programas ⌵, Sobre YYCL ⌵) */}
          <nav className="hidden xl:flex items-center gap-8 h-full">
            {/* 1. Cómo Funciona */}
            <Link
              href="/como-funciona"
              className={`relative h-full flex items-center text-[15px] font-heading font-semibold transition-colors hover:text-[#001837] ${
                pathname === '/como-funciona'
                  ? 'text-[#001837] font-bold'
                  : 'text-slate-700'
              }`}
            >
              <span>Cómo Funciona</span>
              {pathname === '/como-funciona' && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FFD203] rounded-t-full" />
              )}
            </Link>

            {/* 2. Resultados */}
            <Link
              href="/resultados"
              className={`relative h-full flex items-center text-[15px] font-heading font-semibold transition-colors hover:text-[#001837] ${
                pathname === '/resultados'
                  ? 'text-[#001837] font-bold'
                  : 'text-slate-700'
              }`}
            >
              <span>Resultados</span>
              {pathname === '/resultados' && (
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FFD203] rounded-t-full" />
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
                className={`relative h-full inline-flex items-center gap-1 text-[15px] font-heading font-semibold transition-colors hover:text-[#001837] cursor-pointer ${
                  isProgramasActive ? 'text-[#001837] font-bold' : 'text-slate-700'
                }`}
              >
                <span>Nuestros programas</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:rotate-180 transition-transform duration-200" />
                {isProgramasActive && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FFD203] rounded-t-full" />
                )}
              </button>

              {programasDropdownOpen && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] p-2 space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <Link
                    href="/planes"
                    className={`block px-3.5 py-2.5 rounded-xl text-sm font-heading font-semibold transition-colors ${
                      pathname === '/planes' ? 'bg-slate-100 text-yycl-navy font-bold' : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    Inglés General & Planes
                  </Link>
                  <Link
                    href="/idiomas"
                    className={`block px-3.5 py-2.5 rounded-xl text-sm font-heading font-semibold transition-colors ${
                      pathname === '/idiomas' ? 'bg-slate-100 text-yycl-navy font-bold' : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    Francés y Portugués
                  </Link>
                  <Link
                    href="/kids"
                    className={`block px-3.5 py-2.5 rounded-xl text-sm font-heading font-semibold transition-colors ${
                      pathname === '/kids' ? 'bg-slate-100 text-yycl-navy font-bold' : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    Kids & Teens
                  </Link>
                  <Link
                    href="/empresas"
                    className={`block px-3.5 py-2.5 rounded-xl text-sm font-heading font-semibold transition-colors ${
                      pathname === '/empresas' ? 'bg-slate-100 text-yycl-navy font-bold' : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    Capacitación corporativa
                  </Link>
                  <Link
                    href="/servicios-especiales"
                    className={`block px-3.5 py-2.5 rounded-xl text-sm font-heading font-semibold transition-colors ${
                      pathname === '/servicios-especiales' ? 'bg-slate-100 text-yycl-navy font-bold' : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    Servicios Especiales (Exámenes)
                  </Link>
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
                className={`relative h-full inline-flex items-center gap-1 text-[15px] font-heading font-semibold transition-colors hover:text-[#001837] cursor-pointer ${
                  isSobreActive ? 'text-[#001837] font-bold' : 'text-slate-700'
                }`}
              >
                <span>Sobre YYCL</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:rotate-180 transition-transform duration-200" />
                {isSobreActive && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FFD203] rounded-t-full" />
                )}
              </button>

              {sobreDropdownOpen && (
                <div className="absolute top-full left-0 w-52 bg-white rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] p-2 space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-150 z-50">
                  <Link
                    href="/sobre-yycl"
                    className={`block px-3.5 py-2.5 rounded-xl text-sm font-heading font-semibold transition-colors ${
                      pathname === '/sobre-yycl' ? 'bg-slate-100 text-yycl-navy font-bold' : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    Sobre Nosotros
                  </Link>
                  <Link
                    href="/profesores"
                    className={`block px-3.5 py-2.5 rounded-xl text-sm font-heading font-semibold transition-colors ${
                      pathname === '/profesores' ? 'bg-slate-100 text-yycl-navy font-bold' : 'text-slate-800 hover:bg-slate-100'
                    }`}
                  >
                    Nuestro equipo
                  </Link>
                </div>
              )}
            </div>
          </nav>

          {/* Right Side: [LanguageToggle (84x36)] -> [Plataforma (#3C4C92)] -> [CTA Agendar (#FFD203)] */}
          <div className="hidden lg:flex items-center gap-6">
            <LanguageToggle />

            <Link
              href="/login"
              className={`text-[15px] font-heading font-semibold transition-colors ${
                pathname === '/login' ? 'text-[#001837] font-bold underline' : 'text-[#3C4C92] hover:text-[#001837]'
              }`}
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

          {/* Mobile Right Controls */}
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

# 2. Update Footer.tsx to render clean flat monochrome social icons with wide spacing matching Figma screenshot
write_file('components/navigation/Footer.tsx', """\"use client\";

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { InstagramIcon, LinkedinIcon, YoutubeIcon, FacebookIcon } from '@/components/icons/SocialIcons';
import { CheckCircle2 } from 'lucide-react';

export const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-yycl-purple text-white transition-colors select-none">
      {/* ========================================================================= */}
      {/* DESKTOP FOOTER (>= lg screens - Exact distribution from Figma screenshot)  */}
      {/* ========================================================================= */}
      <div className="hidden lg:block max-w-[1280px] mx-auto px-8 lg:px-12 pt-14 pb-8">
        <div className="grid grid-cols-12 gap-8 pb-10 border-b border-white/15">
          {/* Col 1: Marca + Newsletter compacto (4.5 cols) */}
          <div className="col-span-5 xl:col-span-4 space-y-3.5">
            <Link href="/" className="flex items-center gap-2.5">
              <Logo size={42} />
              <span className="font-heading font-bold text-xl text-yycl-yellow tracking-tight">
                Yes You Can Languages
              </span>
            </Link>

            {/* Newsletter Compacto */}
            <div className="max-w-[270px] space-y-2 pt-0.5">
              <p className="text-xs text-white/90 font-body-regular leading-snug">
                Recibe noticias y aprende algo nuevo cada mes en tu correo.
              </p>

              {subscribed ? (
                <div className="bg-white/15 border border-white/30 rounded-xl p-2.5 flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-4 h-4 text-yycl-yellow shrink-0" />
                  <p className="text-[11px] font-semibold">¡Suscrito con éxito!</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-1.5">
                  <input
                    type="email"
                    required
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-9 px-3 bg-white text-[#001837] rounded-xl text-xs placeholder-slate-400 focus:outline-none border border-black/10 shadow-[2px_2px_0px_#001837]"
                  />
                  <button
                    type="submit"
                    className="w-full h-8.5 bg-white text-[#001837] font-heading font-bold text-xs rounded-xl border border-black/10 shadow-[2px_2px_0px_#001837] hover:bg-[#FFE2C0] transition-colors cursor-pointer"
                  >
                    Suscribir
                  </button>
                </form>
              )}

              <p className="text-[10px] text-white/70 leading-tight">
                Al suscribirte aceptas nuestra política de privacidad y recibir actualizaciones.
              </p>
            </div>
          </div>

          {/* Col 2: EXPLORA (3 cols) */}
          <div className="col-span-3 space-y-3 pl-2">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-[11px]">
              EXPLORA
            </h4>
            <div className="flex flex-col space-y-1.5 text-[13px] font-body-regular text-white/85">
              <Link href="/" className="hover:text-yycl-yellow transition-colors">Inicio</Link>
              <Link href="/como-funciona" className="hover:text-yycl-yellow transition-colors">Cómo funciona</Link>
              <Link href="/resultados" className="hover:text-yycl-yellow transition-colors">Resultados</Link>
              <Link href="/profesores" className="hover:text-yycl-yellow transition-colors">Nuestro equipo</Link>
              <Link href="/sobre-yycl" className="hover:text-yycl-yellow transition-colors">Sobre YYCL</Link>
              <Link href="/login" className="hover:text-yycl-yellow transition-colors">Plataforma</Link>
              <Link href="/sobre-yycl" className="hover:text-yycl-yellow transition-colors">Trabaja con nosotros</Link>
              <Link href="/sobre-yycl" className="hover:text-yycl-yellow transition-colors">Portal de profesores</Link>
            </div>
          </div>

          {/* Col 3: NUESTROS PROGRAMAS (2.5 cols) */}
          <div className="col-span-2.5 space-y-3">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-[11px]">
              NUESTROS PROGRAMAS
            </h4>
            <div className="flex flex-col space-y-1.5 text-[13px] font-body-regular text-white/85">
              <Link href="/idiomas" className="hover:text-yycl-yellow transition-colors">Otros idiomas</Link>
              <Link href="/kids" className="hover:text-yycl-yellow transition-colors">Kids & Teens</Link>
              <Link href="/empresas" className="hover:text-yycl-yellow transition-colors">Capacitación corporativa en idiomas</Link>
              <Link href="/servicios-especiales" className="hover:text-yycl-yellow transition-colors">Servicios Especiales</Link>
            </div>
          </div>

          {/* Col 4: SÍGUENOS (Flat monochrome SVG icons with wide gap matching Figma media_1788234522104.png) */}
          <div className="col-span-2.5 space-y-3">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-[11px]">
              SÍGUENOS
            </h4>
            <div className="flex items-center gap-4 text-white">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow transition-colors font-bold text-xs" aria-label="X">
                𝕏
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow transition-colors font-bold text-[13px] tracking-tighter" aria-label="LinkedIn">
                in
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow transition-colors" aria-label="YouTube">
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright 100% White & Legales */}
        <div className="pt-5 flex items-center justify-between text-[11px] font-fine-print text-white">
          <p>© 2026 Yes You Can Languages. Todos los derechos reservados.</p>
          <div className="flex items-center gap-5 text-white/80">
            <Link href="/sobre-yycl" className="hover:underline hover:text-white">Privacidad</Link>
            <Link href="/sobre-yycl" className="hover:underline hover:text-white">Términos del servicio</Link>
            <Link href="/sobre-yycl" className="hover:underline hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE FOOTER (< lg screens)                                              */}
      {/* ========================================================================= */}
      <div className="block lg:hidden px-5 py-8 space-y-6 max-w-[340px] mx-auto">
        <div className="flex items-center gap-2">
          <Logo size={38} />
          <span className="font-heading font-bold text-lg text-yycl-yellow tracking-tight">
            Yes You Can Languages
          </span>
        </div>

        <div className="space-y-2">
          <p className="text-xs font-body-regular text-white leading-snug">
            Recibe noticias y aprende algo nuevo cada mes en tu correo.
          </p>

          {subscribed ? (
            <div className="bg-white/15 border border-white/30 rounded-xl p-2.5 flex items-center gap-2 text-white">
              <CheckCircle2 className="w-4 h-4 text-yycl-yellow shrink-0" />
              <p className="text-xs font-semibold">¡Te has suscrito con éxito!</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-1.5">
              <input
                type="email"
                required
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-9 px-3 bg-white text-[#001837] rounded-xl text-xs placeholder-slate-400 focus:outline-none border border-black/10 shadow-[2px_2px_0px_#001837]"
              />
              <button
                type="submit"
                className="w-full h-8.5 bg-white text-[#001837] font-heading font-bold text-xs rounded-xl border border-black/10 shadow-[2px_2px_0px_#001837] hover:bg-[#FFE2C0] transition-colors cursor-pointer"
              >
                Suscribir
              </button>
            </form>
          )}

          <p className="text-[10px] text-white/70 leading-tight">
            Al suscribirte aceptas nuestra política de privacidad y recibir actualizaciones.
          </p>
        </div>

        <div className="space-y-2 pt-1">
          <h4 className="font-heading font-bold text-white text-[11px] uppercase tracking-wider">
            Explora
          </h4>
          <div className="flex flex-col space-y-1.5 text-xs font-body-regular text-white/85">
            <Link href="/" className="hover:text-yycl-yellow">Inicio</Link>
            <Link href="/como-funciona" className="hover:text-yycl-yellow">Cómo funciona</Link>
            <Link href="/resultados" className="hover:text-yycl-yellow">Resultados</Link>
            <Link href="/profesores" className="hover:text-yycl-yellow">Nuestro equipo</Link>
            <Link href="/sobre-yycl" className="hover:text-yycl-yellow">Sobre YYCL</Link>
            <Link href="/login" className="hover:text-yycl-yellow">Plataforma</Link>
            <Link href="/sobre-yycl" className="hover:text-yycl-yellow">Trabaja con nosotros</Link>
            <Link href="/sobre-yycl" className="hover:text-yycl-yellow">Portal de profesores</Link>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-heading font-bold text-white text-[11px] uppercase tracking-wider">
            Nuestros programas
          </h4>
          <div className="flex flex-col space-y-1.5 text-xs font-body-regular text-white/85">
            <Link href="/idiomas" className="hover:text-yycl-yellow">Otros idiomas</Link>
            <Link href="/kids" className="hover:text-yycl-yellow">Kids & Teens</Link>
            <Link href="/empresas" className="hover:text-yycl-yellow">Capacitación corporativa en idiomas</Link>
            <Link href="/servicios-especiales" className="hover:text-yycl-yellow">Servicios Especiales</Link>
          </div>
        </div>

        <div className="space-y-2">
          <h4 className="font-heading font-bold text-white text-[11px] uppercase tracking-wider">
            Síguenos
          </h4>
          <div className="flex items-center gap-4 text-white pt-1">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow" aria-label="Instagram">
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow font-bold text-xs" aria-label="X">
              𝕏
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow font-bold text-[13px]" aria-label="LinkedIn">
              in
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow" aria-label="YouTube">
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow" aria-label="Facebook">
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="pt-4 border-t border-white/15 space-y-2 text-[11px] text-white">
          <div className="flex flex-col space-y-1 text-white/80">
            <Link href="/sobre-yycl" className="hover:underline">Privacidad</Link>
            <Link href="/sobre-yycl" className="hover:underline">Términos del servicio</Link>
            <Link href="/sobre-yycl" className="hover:underline">Cookies</Link>
          </div>
          <p className="pt-1 text-[10px] text-white/90">© 2026 Yes You Can Languages. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
""")

print("Navbar active indicators and Footer flat social icons updated successfully")
