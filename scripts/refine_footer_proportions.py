import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

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
      {/* DESKTOP FOOTER (>= lg screens - Refined, elegant, compact proportions)    */}
      {/* ========================================================================= */}
      <div className="hidden lg:block max-w-[1280px] mx-auto px-8 lg:px-12 pt-12 pb-7">
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

          {/* Col 4: SÍGUENOS (2 cols) */}
          <div className="col-span-2 space-y-3">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-[11px]">
              SÍGUENOS
            </h4>
            <div className="flex items-center gap-2 text-white">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-[#834296] border border-white/20 flex items-center justify-center hover:bg-yycl-yellow hover:text-[#001837] transition-all" aria-label="Instagram">
                <InstagramIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-[#834296] border border-white/20 flex items-center justify-center font-bold text-[11px] hover:bg-yycl-yellow hover:text-[#001837] transition-all" aria-label="X">
                𝕏
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-[#834296] border border-white/20 flex items-center justify-center hover:bg-yycl-yellow hover:text-[#001837] transition-all" aria-label="LinkedIn">
                <LinkedinIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-[#834296] border border-white/20 flex items-center justify-center hover:bg-yycl-yellow hover:text-[#001837] transition-all" aria-label="YouTube">
                <YoutubeIcon className="w-3.5 h-3.5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-7 h-7 rounded-full bg-[#834296] border border-white/20 flex items-center justify-center hover:bg-yycl-yellow hover:text-[#001837] transition-all" aria-label="Facebook">
                <FacebookIcon className="w-3.5 h-3.5" />
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
      {/* MOBILE FOOTER (< lg screens - Compact)                                    */}
      {/* ========================================================================= */}
      <div className="block lg:hidden px-5 py-8 space-y-6 max-w-[340px] mx-auto">
        {/* Brand Header */}
        <div className="flex items-center gap-2">
          <Logo size={38} />
          <span className="font-heading font-bold text-lg text-yycl-yellow tracking-tight">
            Yes You Can Languages
          </span>
        </div>

        {/* Newsletter Compacto */}
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

        {/* Column: Explora */}
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

        {/* Column: Nuestros programas */}
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

        {/* Section: Síguenos */}
        <div className="space-y-2">
          <h4 className="font-heading font-bold text-white text-[11px] uppercase tracking-wider">
            Síguenos
          </h4>
          <div className="flex flex-col space-y-1.5 text-xs font-body-regular text-white/85">
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

        {/* Legales */}
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

print("Footer and Newsletter resized to refined, elegant proportions")
