import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. Reusable Newsletter.tsx component (Mobile 353 / Desktop 500)
write_file('components/ui/Newsletter.tsx', """\"use client\";

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export interface NewsletterProps {
  variant?: 'light' | 'dark';
  width?: 'mobile' | 'desktop' | 'full';
  className?: string;
}

export const Newsletter: React.FC<NewsletterProps> = ({
  variant = 'dark',
  width = 'full',
  className = '',
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const isDark = variant === 'dark';

  const widthStyles = {
    mobile: 'max-w-[353px]',
    desktop: 'max-w-[500px]',
    full: 'w-full',
  };

  return (
    <div className={`space-y-3 ${widthStyles[width]} ${className}`}>
      <p className={`text-sm font-body-regular leading-relaxed ${isDark ? 'text-white' : 'text-slate-700'}`}>
        Recibe noticias y aprende algo nuevo cada mes en tu correo.
      </p>

      {subscribed ? (
        <div className="bg-white/20 border border-white/40 rounded-2xl p-3.5 flex items-center gap-2.5 text-white animate-in fade-in duration-200">
          <CheckCircle2 className="w-5 h-5 text-yycl-yellow shrink-0" />
          <p className="text-xs font-heading font-semibold">¡Te has suscrito con éxito!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2.5">
          {/* Input field */}
          <input
            type="email"
            required
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 bg-white text-yycl-navy rounded-2xl text-sm font-body-regular placeholder-slate-400 focus:outline-none border-2 border-yycl-navy shadow-[2px_2px_0px_#001837] focus:shadow-[0_0_0_3px_#001837] transition-all"
          />

          {/* Button Secundario / Suscribir (White with navy stroke & keycap shadow) */}
          <button
            type="submit"
            className="w-full h-12 bg-white text-yycl-navy font-heading font-semibold text-sm rounded-2xl border-2 border-yycl-navy shadow-[3px_3px_0px_#001837] hover:bg-[#FFE2C0] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#001837] transition-all cursor-pointer flex items-center justify-center"
          >
            Suscribir
          </button>
        </form>
      )}

      {/* Disclaimer */}
      <p className={`text-[11px] leading-tight font-fine-print ${isDark ? 'text-white/80' : 'text-slate-400'}`}>
        Al suscribirte aceptas nuestra política de privacidad y recibir actualizaciones.
      </p>
    </div>
  );
};
""")

# 2. Update Footer.tsx to include the exact Newsletter box in Desktop and Mobile
write_file('components/navigation/Footer.tsx', """\"use client\";

import React from 'react';
import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { Newsletter } from '@/components/ui/Newsletter';
import { InstagramIcon, LinkedinIcon, YoutubeIcon, FacebookIcon } from '@/components/icons/SocialIcons';

export const Footer = () => {
  return (
    <footer className="bg-yycl-purple text-white transition-colors select-none">
      {/* ========================================================================= */}
      {/* DESKTOP FOOTER (>= lg screens - Exact 1280 layout in Figma code.ts)       */}
      {/* ========================================================================= */}
      <div className="hidden lg:block max-w-[1280px] mx-auto px-12 pt-14 pb-8">
        <div className="grid grid-cols-12 gap-10 pb-12 border-b border-white/15">
          {/* Col 1: Marca + Newsletter Box (5 cols) */}
          <div className="col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Logo size={48} />
              <span className="font-heading font-extrabold text-2xl text-yycl-yellow tracking-tight">
                Yes You Can Languages
              </span>
            </Link>

            {/* Newsletter Box component */}
            <div className="pt-1 max-w-[340px]">
              <Newsletter variant="dark" width="full" />
            </div>
          </div>

          {/* Col 2: EXPLORA (Heading #FFFFFF, links #FFFFFF @ 90%) */}
          <div className="col-span-3 space-y-3.5 pl-2">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs">
              EXPLORA
            </h4>
            <div className="flex flex-col space-y-2 text-sm font-body-regular text-white/90">
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

          {/* Col 3: NUESTROS PROGRAMAS */}
          <div className="col-span-2 space-y-3.5">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs">
              NUESTROS PROGRAMAS
            </h4>
            <div className="flex flex-col space-y-2 text-sm font-body-regular text-white/90">
              <Link href="/idiomas" className="hover:text-yycl-yellow transition-colors">Otros idiomas</Link>
              <Link href="/kids" className="hover:text-yycl-yellow transition-colors">Kids & Teens</Link>
              <Link href="/empresas" className="hover:text-yycl-yellow transition-colors">Capacitación corporativa en idiomas</Link>
              <Link href="/servicios-especiales" className="hover:text-yycl-yellow transition-colors">Servicios Especiales</Link>
            </div>
          </div>

          {/* Col 4: SÍGUENOS (SocialIcons in #834296 circle with #FFFFFF glyph) */}
          <div className="col-span-2 space-y-3.5">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs">
              SÍGUENOS
            </h4>
            <div className="flex items-center gap-2.5 text-white">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#834296] border border-white/20 flex items-center justify-center hover:bg-yycl-yellow hover:text-yycl-navy transition-all" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#834296] border border-white/20 flex items-center justify-center font-bold text-xs hover:bg-yycl-yellow hover:text-yycl-navy transition-all" aria-label="X">
                𝕏
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#834296] border border-white/20 flex items-center justify-center hover:bg-yycl-yellow hover:text-yycl-navy transition-all" aria-label="LinkedIn">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#834296] border border-white/20 flex items-center justify-center hover:bg-yycl-yellow hover:text-yycl-navy transition-all" aria-label="YouTube">
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-[#834296] border border-white/20 flex items-center justify-center hover:bg-yycl-yellow hover:text-yycl-navy transition-all" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright 100% White (WCAG AAA) & Legales */}
        <div className="pt-6 flex items-center justify-between text-xs font-body-small text-white">
          <p>© 2026 Yes You Can Languages. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6 text-white/90">
            <Link href="/sobre-yycl" className="hover:underline hover:text-white">Privacidad</Link>
            <Link href="/sobre-yycl" className="hover:underline hover:text-white">Términos del servicio</Link>
            <Link href="/sobre-yycl" className="hover:underline hover:text-white">Cookies</Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE FOOTER (< lg screens - Exact 375 layout in Figma code.ts)          */}
      {/* ========================================================================= */}
      <div className="block lg:hidden px-5 py-8 space-y-7 max-w-[375px] mx-auto">
        {/* Brand Header */}
        <div className="flex items-center gap-2.5">
          <Logo size={44} />
          <span className="font-heading font-extrabold text-xl text-yycl-yellow tracking-tight">
            Yes You Can Languages
          </span>
        </div>

        {/* Newsletter Box */}
        <Newsletter variant="dark" width="full" />

        {/* Column: Explora */}
        <div className="space-y-2 pt-1">
          <h4 className="font-heading font-bold text-white text-xs">
            Explora
          </h4>
          <div className="flex flex-col space-y-1.5 text-xs font-body-regular text-white/90">
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

        {/* Column: Nuestros programas */}
        <div className="space-y-2">
          <h4 className="font-heading font-bold text-white text-xs">
            Nuestros programas
          </h4>
          <div className="flex flex-col space-y-1.5 text-xs font-body-regular text-white/90">
            <Link href="/idiomas" className="hover:text-yycl-yellow">Otros idiomas</Link>
            <Link href="/kids" className="hover:text-yycl-yellow">Kids & Teens</Link>
            <Link href="/empresas" className="hover:text-yycl-yellow">Capacitación corporativa en idiomas</Link>
            <Link href="/servicios-especiales" className="hover:text-yycl-yellow">Servicios Especiales</Link>
          </div>
        </div>

        {/* Section: Síguenos (Vertical List with icons) */}
        <div className="space-y-2">
          <h4 className="font-heading font-bold text-white text-xs">
            Síguenos
          </h4>
          <div className="flex flex-col space-y-1.5 text-xs font-body-regular text-white/90">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-yellow">
              <FacebookIcon className="w-3.5 h-3.5" />
              <span>Facebook</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-yellow">
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-yellow">
              <span className="font-bold w-3.5 text-center text-xs">𝕏</span>
              <span>X</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-yellow">
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-yellow">
              <YoutubeIcon className="w-3.5 h-3.5" />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        {/* Legales apilados antes del copyright */}
        <div className="pt-4 border-t border-white/15 space-y-2 text-[11px] text-white">
          <div className="flex flex-col space-y-1 text-white/90">
            <Link href="/sobre-yycl" className="hover:underline">Privacidad</Link>
            <Link href="/sobre-yycl" className="hover:underline">Términos del servicio</Link>
            <Link href="/sobre-yycl" className="hover:underline">Cookies</Link>
          </div>
          <p className="pt-1 text-[11px] text-white">© 2026 Yes You Can Languages. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
""")

print("Newsletter component created and integrated into Footers")
