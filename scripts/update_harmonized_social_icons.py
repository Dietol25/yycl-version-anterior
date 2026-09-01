import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# Harmonized, optically balanced social icons on 24x24 grid with matching weights
write_file('components/icons/SocialIcons.tsx', """import React from 'react';

interface SocialIconProps {
  className?: string;
  size?: number;
}

// Instagram (Clean 24x24 Outline with matching 1.8px stroke)
export const InstagramIcon: React.FC<SocialIconProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={`shrink-0 ${className}`}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

// X (formerly Twitter) - Clean, sharp vector matching optical weight
export const XIcon: React.FC<SocialIconProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`shrink-0 ${className}`}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// LinkedIn - Official vector emblem (Square container with 'in' matching Instagram/YouTube style)
export const LinkedinIcon: React.FC<SocialIconProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`shrink-0 ${className}`}
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

// YouTube - Clean rounded player with centered play triangle
export const YoutubeIcon: React.FC<SocialIconProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`shrink-0 ${className}`}
  >
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// Facebook - Clean Facebook vector matching optical proportion
export const FacebookIcon: React.FC<SocialIconProps> = ({ className = 'w-5 h-5', size = 20 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={`shrink-0 ${className}`}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
""")

# Update Footer.tsx to use harmonized SocialIcons with uniform size
write_file('components/navigation/Footer.tsx', """\"use client\";

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { InstagramIcon, XIcon, LinkedinIcon, YoutubeIcon, FacebookIcon } from '@/components/icons/SocialIcons';
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
      {/* DESKTOP FOOTER (>= lg screens)                                            */}
      {/* ========================================================================= */}
      <div className="hidden lg:block max-w-[1280px] mx-auto px-8 lg:px-12 pt-14 pb-8">
        <div className="grid grid-cols-12 gap-6 xl:gap-8 pb-12 border-b border-white/15">
          {/* Col 1: Marca + Tagline + Newsletter (4 cols) */}
          <div className="col-span-4 space-y-3.5 pr-2">
            <Link href="/" className="flex items-center gap-3">
              <Logo size={44} />
              <span className="font-heading font-extrabold text-2xl text-yycl-yellow tracking-tight">
                Yes You Can Languages
              </span>
            </Link>

            <p className="text-sm font-heading font-semibold text-white/90 pl-0.5">
              Sí puedes. Yes You Can.
            </p>

            {/* Newsletter Compacto */}
            <div className="max-w-[270px] space-y-2 pt-1">
              <p className="text-xs text-white/85 font-body-regular leading-snug">
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
          <div className="col-span-3 space-y-3.5 pl-4">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-[11px]">
              EXPLORA
            </h4>
            <div className="flex flex-col space-y-2 text-[13px] font-body-regular text-white/90">
              <Link href="/" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Inicio</Link>
              <Link href="/como-funciona" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Cómo funciona</Link>
              <Link href="/resultados" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Resultados</Link>
              <Link href="/profesores" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Nuestro equipo</Link>
              <Link href="/sobre-yycl" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Sobre YYCL</Link>
              <Link href="/login" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Plataforma</Link>
              <Link href="/sobre-yycl" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Trabaja con nosotros</Link>
              <Link href="/sobre-yycl" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Portal de profesores</Link>
            </div>
          </div>

          {/* Col 3: NUESTROS PROGRAMAS (3 cols) */}
          <div className="col-span-3 space-y-3.5">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-[11px]">
              NUESTROS PROGRAMAS
            </h4>
            <div className="flex flex-col space-y-2 text-[13px] font-body-regular text-white/90">
              <Link href="/idiomas" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Otros idiomas</Link>
              <Link href="/kids" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Kids & Teens</Link>
              <Link href="/empresas" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Capacitación corporativa en idiomas</Link>
              <Link href="/servicios-especiales" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Servicios Especiales</Link>
            </div>
          </div>

          {/* Col 4: SÍGUENOS (2 cols - Harmonized 20x20 vector icons) */}
          <div className="col-span-2 space-y-3.5 pl-2">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-[11px]">
              SÍGUENOS
            </h4>
            <div className="flex items-center gap-4 text-white pt-1">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/90 hover:text-yycl-yellow transition-colors flex items-center justify-center w-6 h-6" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="text-white/90 hover:text-yycl-yellow transition-colors flex items-center justify-center w-6 h-6" aria-label="X">
                <XIcon size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white/90 hover:text-yycl-yellow transition-colors flex items-center justify-center w-6 h-6" aria-label="LinkedIn">
                <LinkedinIcon size={19} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white/90 hover:text-yycl-yellow transition-colors flex items-center justify-center w-6 h-6" aria-label="YouTube">
                <YoutubeIcon size={21} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white/90 hover:text-yycl-yellow transition-colors flex items-center justify-center w-6 h-6" aria-label="Facebook">
                <FacebookIcon size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legales */}
        <div className="pt-6 flex items-center justify-between text-[11px] font-fine-print text-white">
          <p>© 2026 Yes You Can Languages. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6 text-white/90">
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
              <InstagramIcon size={20} />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow" aria-label="X">
              <XIcon size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow" aria-label="LinkedIn">
              <LinkedinIcon size={19} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow" aria-label="YouTube">
              <YoutubeIcon size={21} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow" aria-label="Facebook">
              <FacebookIcon size={19} />
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

print("Harmonized vector social icons applied with uniform baseline and optical weights")
