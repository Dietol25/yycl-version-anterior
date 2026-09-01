import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. Update app/globals.css with the exact 15 Text Styles & 70px Display/Hero
write_file('app/globals.css', """@import "tailwindcss";

@theme {
  /* Primitivos */
  --color-violeta: #834296;
  --color-lila-claro: #D4B6E3;
  --color-navy: #001837;
  --color-azul-medio: #3C4C92;
  --color-cyan: #4DC2DA;
  --color-celeste-palido: #CAFFFF;
  --color-amarillo: #FFD203;
  --color-amarillo-oscuro: #EC9519;
  --color-crema: #FFE2C0;
  --color-blanco: #FFFFFF;
  --color-gris-disabled: #A3ABB8;
  --color-verde: #16A34A;
  --color-rojo: #DC2626;

  /* Aliases para YYCL */
  --color-yycl-navy: #001837;
  --color-yycl-yellow: #FFD203;
  --color-yycl-purple: #834296;
  --color-yycl-cyan: #4DC2DA;
  --color-yycl-blue-medium: #3C4C92;
  --color-yycl-amber: #EC9519;
  --color-yycl-cream: #FFE2C0;

  /* Semánticos */
  --color-bg-surface: #FFFFFF;
  --color-bg-dark-card: #834296;
  --color-text-default: #001837;
  --color-text-inverse: #FFFFFF;
  --color-text-muted: #3C4C92;
  --color-border-default: rgba(0, 0, 0, 0.10);
  --color-state-disabled: #A3ABB8;
  --color-state-success: #16A34A;
  --color-state-error: #DC2626;
  --color-accent-kids: #4DC2DA;
  --color-accent-empresas: #001837;
  --color-accent-conversacion: #FFD203;
}

:root {
  --background: #FFFFFF;
  --foreground: #001837;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: var(--font-nunito), sans-serif;
  font-size: 16px;
  line-height: 24px;
}

/* Gradiente de marca v2 (135deg, #EC9519 -> #834296) */
.bg-gradient-brand-v2 {
  background: linear-gradient(135deg, #EC9519, #834296);
}

/* 15 Text Styles Exactos (Escala Modular 1.25, 2026-08-25/31) */
.font-display-hero {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 800;
  font-size: 70px;
  line-height: 77px;
  letter-spacing: -0.025em;
}

.font-heading-h2 {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 46px;
  letter-spacing: -0.015em;
}

.font-heading-h3 {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 34px;
}

.font-heading-h4 {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
}

.font-lead {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 28px;
}

.font-label-bold {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
}

.font-label-button {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}

.font-label-large {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
}

.font-label-regular {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}

.font-body-large {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
}

.font-body-regular {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.font-body-small {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}

.font-body-bold {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}

.font-link {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
}

.font-fine-print {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 17px;
}
""")

# 2. Update Footer.tsx with exact spec: Desktop (1280px, #834296) and MobileFooter (375px, #834296)
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
      {/* DESKTOP FOOTER (>= lg screens - Exact 1280 layout in Figma code.ts)       */}
      {/* ========================================================================= */}
      <div className="hidden lg:block max-w-[1280px] mx-auto px-16 pt-12 pb-8">
        <div className="grid grid-cols-12 gap-8 pb-10 border-b border-white/15">
          {/* Col 1: Marca (Logo 48px + Title #FFD203 + Tagline #FFFFFF @ 90%) */}
          <div className="col-span-4 space-y-2">
            <Link href="/" className="flex items-center gap-3">
              <Logo size={48} />
              <span className="font-heading font-extrabold text-2xl text-yycl-yellow tracking-tight">
                Yes You Can Languages
              </span>
            </Link>
            <p className="text-sm font-heading font-semibold text-white/90 pl-1">
              Sí puedes. Yes You Can.
            </p>
          </div>

          {/* Col 2: EXPLORA (Heading #FFFFFF, links #FFFFFF @ 90%) */}
          <div className="col-span-3 space-y-3.5 pl-4">
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
          <div className="col-span-3 space-y-3.5">
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
        <div className="space-y-2.5">
          <p className="text-xs font-body-regular text-white leading-relaxed">
            Recibe noticias y aprende algo nuevo cada mes en tu correo.
          </p>

          {subscribed ? (
            <div className="bg-white/20 border border-white/40 rounded-xl p-3 flex items-center gap-2 text-white">
              <CheckCircle2 className="w-4 h-4 text-yycl-yellow shrink-0" />
              <p className="text-xs font-semibold">¡Te has suscrito con éxito!</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                required
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-3.5 bg-white text-yycl-navy rounded-xl text-xs placeholder-slate-400 focus:outline-none border border-black/10 shadow-[2px_2px_0px_#001837]"
              />
              <button
                type="submit"
                className="w-full h-10 bg-white text-yycl-navy font-heading font-bold text-xs rounded-xl border border-black/10 shadow-[2px_2px_0px_#001837] hover:bg-yycl-yellow transition-colors cursor-pointer"
              >
                Suscribir
              </button>
            </form>
          )}

          <p className="text-[10px] text-white/80 leading-tight">
            Al suscribirte aceptas nuestra política de privacidad y recibir actualizaciones.
          </p>
        </div>

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

        {/* Legales apilados antes del copyright (exacto code.ts 31/08) */}
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

# 3. Update HeroSection.tsx to use the official 70px Display/Hero size
write_file('components/sections/HeroSection.tsx', """import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const HeroSection = () => {
  return (
    <section className="bg-white py-14 lg:py-24 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline, Kicker, Subtitle, Dual CTAs (6 cols on lg) */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Top kicker badge */}
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-yycl-navy">
              <span className="w-2.5 h-2.5 rounded-full bg-yycl-yellow inline-block shrink-0 shadow-xs" />
              <span>El último curso de inglés que necesitarás.</span>
            </div>

            {/* H1 Main Headline with 70px Display/Hero size */}
            <div className="space-y-1 relative">
              <h1 className="text-4xl sm:text-5xl lg:text-[70px] font-extrabold font-heading text-yycl-navy tracking-tight leading-[1.10]">
                Pierde el <span className="text-yycl-purple">miedo</span><br />
                a hablar inglés.
              </h1>

              {/* Hand-drawn accent curve underline SVG beneath 'a hablar' */}
              <div className="pt-1.5">
                <svg
                  className="w-40 sm:w-52 h-4 text-yycl-yellow"
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

          {/* Right Column: Prominently Large Transparent Collage (6 cols on lg) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px] lg:max-w-[640px]">
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

print("Master Design System specs applied cleanly")
