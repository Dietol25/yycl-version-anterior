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
    <footer className="bg-yycl-purple text-white transition-colors">
      {/* ========================================================================= */}
      {/* DESKTOP FOOTER (>= lg screens - Matching exact Desktop Footer in Figma)    */}
      {/* ========================================================================= */}
      <div className="hidden lg:block max-w-[1440px] mx-auto px-8 lg:px-14 pt-16 pb-12">
        <div className="grid grid-cols-12 gap-10 pb-14 border-b border-white/20">
          {/* Col 1: Brand Logo + Tagline (5 cols) */}
          <div className="col-span-5 space-y-3">
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

          {/* Col 2: EXPLORA (3 cols) */}
          <div className="col-span-3 space-y-4">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs">
              EXPLORA
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm font-body-regular text-white">
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
          <div className="col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs">
              NUESTROS PROGRAMAS
            </h4>
            <div className="flex flex-col space-y-2.5 text-sm font-body-regular text-white">
              <Link href="/idiomas" className="hover:text-yycl-yellow transition-colors">Otros idiomas</Link>
              <Link href="/kids" className="hover:text-yycl-yellow transition-colors">Kids & Teens</Link>
              <Link href="/empresas" className="hover:text-yycl-yellow transition-colors">Capacitación corporativa en idiomas</Link>
              <Link href="/servicios-especiales" className="hover:text-yycl-yellow transition-colors">Servicios Especiales</Link>
            </div>
          </div>

          {/* Col 4: SÍGUENOS (1.5 cols) */}
          <div className="col-span-2 space-y-4">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-xs">
              SÍGUENOS
            </h4>
            <div className="flex items-center gap-3 text-white">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-yycl-yellow transition-colors p-1" aria-label="Instagram">
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a href="https://x.com" target="_blank" rel="noreferrer" className="hover:text-yycl-yellow transition-colors p-1 font-bold text-lg" aria-label="X">
                𝕏
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-yycl-yellow transition-colors p-1" aria-label="LinkedIn">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-yycl-yellow transition-colors p-1" aria-label="YouTube">
                <YoutubeIcon className="w-5 h-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-yycl-yellow transition-colors p-1" aria-label="Facebook">
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-6 flex items-center justify-between text-xs font-body-small text-white">
          <p>© 2026 Yes You Can Languages. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link href="/sobre-yycl" className="hover:underline">Privacidad</Link>
            <Link href="/sobre-yycl" className="hover:underline">Términos del servicio</Link>
            <Link href="/sobre-yycl" className="hover:underline">Cookies</Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE FOOTER (< lg screens - Matching exact FooterMobile in Figma)       */}
      {/* ========================================================================= */}
      <div className="block lg:hidden px-6 py-10 space-y-8 max-w-md mx-auto">
        {/* Brand Header */}
        <div className="flex items-center gap-3">
          <Logo size={46} />
          <span className="font-heading font-extrabold text-xl text-yycl-yellow tracking-tight">
            Yes You Can Languages
          </span>
        </div>

        {/* Newsletter Box */}
        <div className="space-y-3">
          <p className="text-sm font-body-regular text-white leading-relaxed">
            Recibe noticias y aprende algo nuevo cada mes en tu correo.
          </p>

          {subscribed ? (
            <div className="bg-white/20 border border-white/40 rounded-xl p-3.5 flex items-center gap-2 text-white">
              <CheckCircle2 className="w-5 h-5 text-yycl-yellow shrink-0" />
              <p className="text-xs font-semibold">¡Te has suscrito con éxito!</p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-2.5">
              <input
                type="email"
                required
                placeholder="Tu correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 bg-white text-yycl-navy rounded-xl text-sm placeholder-slate-400 focus:outline-none border-2 border-yycl-navy shadow-[2px_2px_0px_#001837]"
              />
              <button
                type="submit"
                className="w-full h-11 bg-white text-yycl-navy font-heading font-bold text-sm rounded-xl border-2 border-yycl-navy shadow-[2px_2px_0px_#001837] hover:bg-yycl-yellow transition-all cursor-pointer"
              >
                Suscribir
              </button>
            </form>
          )}

          <p className="text-[11px] text-white/90 leading-tight">
            Al suscribirte aceptas nuestra política de privacidad y recibir actualizaciones.
          </p>
        </div>

        {/* Column: Explora */}
        <div className="space-y-3 pt-2">
          <h4 className="font-heading font-bold text-white text-sm">
            Explora
          </h4>
          <div className="flex flex-col space-y-2 text-xs font-body-regular text-white">
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
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm">
            Nuestros programas
          </h4>
          <div className="flex flex-col space-y-2 text-xs font-body-regular text-white">
            <Link href="/idiomas" className="hover:text-yycl-yellow">Otros idiomas</Link>
            <Link href="/kids" className="hover:text-yycl-yellow">Kids & Teens</Link>
            <Link href="/empresas" className="hover:text-yycl-yellow">Capacitación corporativa en idiomas</Link>
            <Link href="/servicios-especiales" className="hover:text-yycl-yellow">Servicios Especiales</Link>
          </div>
        </div>

        {/* Section: Síguenos (Vertical List) */}
        <div className="space-y-3">
          <h4 className="font-heading font-bold text-white text-sm">
            Síguenos
          </h4>
          <div className="flex flex-col space-y-2 text-xs font-body-regular text-white">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-yellow">
              <FacebookIcon className="w-4 h-4" />
              <span>Facebook</span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-yellow">
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram</span>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-yellow">
              <span className="font-bold w-4 text-center">𝕏</span>
              <span>X</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-yellow">
              <LinkedinIcon className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-yellow">
              <YoutubeIcon className="w-4 h-4" />
              <span>YouTube</span>
            </a>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="pt-6 border-t border-white/20 space-y-2 text-[11px] text-white">
          <div className="flex items-center gap-4">
            <Link href="/sobre-yycl" className="hover:underline">Privacidad</Link>
            <Link href="/sobre-yycl" className="hover:underline">Términos del servicio</Link>
            <Link href="/sobre-yycl" className="hover:underline">Cookies</Link>
          </div>
          <p>© 2026 Yes You Can Languages. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
""")

print("Footer and FooterMobile unified and updated to exact Figma specs")
