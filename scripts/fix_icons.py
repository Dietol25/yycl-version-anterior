import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

write_file('components/icons/SocialIcons.tsx', """import React from 'react';

export const InstagramIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

export const LinkedinIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

export const YoutubeIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/>
  </svg>
);

export const FacebookIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);
""")

write_file('components/navigation/Footer.tsx', """\"use client\";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { InstagramIcon, LinkedinIcon, YoutubeIcon, FacebookIcon } from '@/components/icons/SocialIcons';

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
    <footer className="bg-yycl-navy text-slate-300 pt-16 pb-12 border-t-4 border-yycl-yellow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-yycl-purple-dark via-yycl-purple to-yycl-purple-dark rounded-2xl p-6 sm:p-8 mb-14 shadow-xl border border-white/15 relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-yycl-yellow/10 rounded-full blur-2xl pointer-events-none" />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-yycl-yellow mb-2">
                <Mail className="w-4 h-4" />
                Boletín Semanal Gratuito
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading text-white">
                Recibe consejos y ejercicios semanales para desbloquear tu fluidez
              </h3>
              <p className="text-sm text-slate-200 mt-1">
                Aprende modismos reales, errores comunes en entrevistas y trucos de pronunciación. Cero spam.
              </p>
            </div>
            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="bg-emerald-500/20 border border-emerald-400/50 rounded-xl p-4 flex items-center gap-3 text-white">
                  <CheckCircle2 className="w-6 h-6 text-emerald-300 shrink-0" />
                  <p className="text-sm font-medium">¡Gracias por suscribirte! Te hemos enviado la primera guía por correo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Tu correo corporativo o personal"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 px-4 bg-white text-yycl-navy rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-yycl-yellow w-full"
                  />
                  <Button variant="primary" size="md" type="submit" className="shrink-0 font-bold">
                    Suscribirme
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-yycl-yellow flex items-center justify-center font-heading font-extrabold text-yycl-navy text-xl shadow-md">
                YY
              </div>
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-white text-xl tracking-tight leading-none">
                  Yes You Can Languages
                </span>
                <span className="text-xs font-heading font-semibold tracking-widest text-yycl-cyan uppercase">
                  Academia Online de Idiomas
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-300 max-w-sm">
              La academia líder en Latinoamérica especializada en profesionales que necesitan hablar inglés con fluidez y seguridad en su entorno laboral.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-yycl-yellow hover:text-yycl-navy transition-all" aria-label="Instagram">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-yycl-yellow hover:text-yycl-navy transition-all" aria-label="LinkedIn">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-yycl-yellow hover:text-yycl-navy transition-all" aria-label="YouTube">
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-yycl-yellow hover:text-yycl-navy transition-all" aria-label="Facebook">
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider text-yycl-cyan">
              Programas
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/planes" className="hover:text-yycl-yellow transition-colors">Clases 1-a-1 Personalizadas</Link></li>
              <li><Link href="/planes" className="hover:text-yycl-yellow transition-colors">Plan Grupal Dinámico</Link></li>
              <li><Link href="/planes" className="hover:text-yycl-yellow transition-colors">Plan Dúo en Pareja</Link></li>
              <li><Link href="/servicios-especiales" className="hover:text-yycl-yellow transition-colors">Prep. TOEFL / IELTS / CELPIP</Link></li>
              <li><Link href="/kids" className="hover:text-yycl-yellow transition-colors">Programa Kids & Teens</Link></li>
              <li><Link href="/empresas" className="hover:text-yycl-yellow transition-colors">Inglés Corporativo B2B</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider text-yycl-cyan">
              Idiomas
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/idiomas" className="hover:text-yycl-yellow transition-colors">Inglés para Profesionales</Link></li>
              <li><Link href="/idiomas" className="hover:text-yycl-yellow transition-colors">Francés Conversacional</Link></li>
              <li><Link href="/idiomas" className="hover:text-yycl-yellow transition-colors">Portugués de Negocios</Link></li>
              <li><Link href="/en/spanish-classes" className="hover:text-yycl-yellow transition-colors">Spanish for Foreigners</Link></li>
              <li><Link href="/profesores" className="hover:text-yycl-yellow transition-colors">Conoce a los Profesores</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-heading font-bold text-white text-sm uppercase tracking-wider text-yycl-cyan">
              YYCL
            </h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sobre-yycl" className="hover:text-yycl-yellow transition-colors">Sobre Nosotros</Link></li>
              <li><Link href="/resultados" className="hover:text-yycl-yellow transition-colors">Casos de Éxito</Link></li>
              <li><Link href="/como-funciona" className="hover:text-yycl-yellow transition-colors">Metodología 3 Pasos</Link></li>
              <li><Link href="/login" className="hover:text-yycl-yellow transition-colors">Portal de Alumnos</Link></li>
              <li><Link href="/agendar" className="hover:text-yycl-yellow transition-colors">Agendar Diagnóstico</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© 2026 Yes You Can Languages (YYCL). Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <ShieldCheck className="w-4 h-4 text-yycl-cyan" />
              Pagos seguros SSL 256-bit
            </span>
            <Link href="/sobre-yycl" className="hover:text-yycl-yellow">Privacidad</Link>
            <Link href="/sobre-yycl" className="hover:text-yycl-yellow">Términos del Servicio</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
""")

print("Icons and Footer updated")
