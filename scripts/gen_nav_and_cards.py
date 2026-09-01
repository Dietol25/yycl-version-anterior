import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

write_file('components/navigation/Navbar.tsx', """\"use client\";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Globe, User, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = isEn ? [
    { label: 'How it Works', href: '/en' },
    { label: 'Spanish Classes', href: '/en/spanish-classes' },
    { label: 'Kids & Teens', href: '/en/spanish-classes-kids' },
    { label: 'About Us', href: '/en/about-us' },
  ] : [
    { label: 'Cómo Funciona', href: '/como-funciona' },
    { label: 'Resultados', href: '/resultados' },
    { label: 'Planes', href: '/planes' },
    { label: 'Idiomas', href: '/idiomas' },
    { label: 'Empresas', href: '/empresas' },
    { label: 'Kids', href: '/kids' },
    { label: 'Profesores', href: '/profesores' },
    { label: 'Sobre YYCL', href: '/sobre-yycl' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-yycl-navy/95 backdrop-blur-md shadow-lg py-3 border-b border-white/10'
          : 'bg-yycl-navy py-4 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href={isEn ? '/en' : '/'} className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-yycl-yellow flex items-center justify-center font-heading font-extrabold text-yycl-navy text-xl shadow-md transition-transform group-hover:scale-105">
            YY
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-white text-lg tracking-tight leading-none group-hover:text-yycl-yellow transition-colors">
              Yes You Can
            </span>
            <span className="text-[11px] font-heading font-semibold tracking-widest text-yycl-cyan uppercase leading-tight">
              Languages
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-yycl-yellow ${
                  active ? 'text-yycl-yellow font-bold' : 'text-slate-200'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher */}
          <Link
            href={isEn ? '/' : '/en'}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-all border border-white/10"
            title={isEn ? 'Cambiar a Español' : 'Switch to English'}
          >
            <Globe className="w-3.5 h-3.5 text-yycl-cyan" />
            <span>{isEn ? 'ES · 🇪🇸' : 'EN · 🇺🇸'}</span>
          </Link>

          {/* Student Login */}
          <Link
            href="/login"
            className="flex items-center gap-1.5 px-3 py-1.5 text-slate-200 hover:text-white text-xs font-semibold transition-colors"
          >
            <User className="w-3.5 h-3.5" />
            <span>{isEn ? 'Sign In' : 'Ingresar'}</span>
          </Link>

          {/* CTA Book Free Class */}
          <Link href={isEn ? '/en/agendar' : '/agendar'}>
            <Button
              variant="primary"
              size="sm"
              className="font-bold shadow-yycl-yellow hover:scale-[1.02]"
              rightIcon={<ArrowRight className="w-4 h-4" />}
            >
              {isEn ? 'Book Free Class' : 'Agendar Clase Gratis'}
            </Button>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href={isEn ? '/' : '/en'}
            className="flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 text-white text-xs font-semibold"
          >
            <Globe className="w-3 h-3 text-yycl-cyan" />
            <span>{isEn ? 'ES' : 'EN'}</span>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-white/10 text-white hover:bg-white/20 focus:outline-none"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-yycl-navy-dark/98 border-t border-white/10 px-4 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-2.5">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-100 hover:bg-white/10 hover:text-yycl-yellow transition-all"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" size="md" fullWidth className="border-white/30 text-white hover:bg-white/10">
                <User className="w-4 h-4 mr-2" />
                {isEn ? 'Student Portal Login' : 'Portal de Estudiantes'}
              </Button>
            </Link>

            <Link href={isEn ? '/en/agendar' : '/agendar'} onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="md" fullWidth className="font-bold">
                <Sparkles className="w-4 h-4 mr-2" />
                {isEn ? 'Book Free Diagnostic Class' : 'Agendar Diagnóstico Gratis'}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
""")

write_file('components/navigation/Footer.tsx', """\"use client\";

import React, { useState } from 'react';
import Link from 'next/link';
import { Mail, CheckCircle2, Instagram, Linkedin, Youtube, Facebook, ShieldCheck } from 'lucide-react';
import { Button } from '@/components/ui/Button';

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
        {/* Newsletter Subscription Box */}
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

        {/* Footer Navigation Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Col 1: Brand */}
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
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-yycl-yellow hover:text-yycl-navy transition-all" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-yycl-yellow hover:text-yycl-navy transition-all" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-yycl-yellow hover:text-yycl-navy transition-all" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Programas */}
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

          {/* Col 3: Idiomas */}
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

          {/* Col 4: Institucional */}
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

        {/* Bottom bar */}
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

write_file('components/cards/PricingCard.tsx', """import React from 'react';
import Link from 'next/link';
import { Check, ArrowRight, Sparkles } from 'lucide-react';
import { PricingPlan } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export const PricingCard: React.FC<{ plan: PricingPlan }> = ({ plan }) => {
  const isPopular = plan.popular;

  return (
    <div
      className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
        isPopular
          ? 'bg-gradient-to-b from-white to-amber-50/40 border-2 border-yycl-yellow shadow-xl lg:-translate-y-2'
          : 'bg-white border border-slate-200 shadow-yycl-neutral hover:shadow-yycl-hover'
      }`}
    >
      {isPopular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <Badge variant="yellow" size="md" className="shadow-md">
            <Sparkles className="w-3.5 h-3.5 mr-1" />
            {plan.badge || 'MÁS POPULAR'}
          </Badge>
        </div>
      )}

      <div>
        <div className="mb-4">
          <h3 className="text-xl sm:text-2xl font-bold font-heading text-yycl-navy">
            {plan.name}
          </h3>
          <p className="text-xs text-slate-500 mt-1 min-h-[32px]">
            {plan.subtitle}
          </p>
        </div>

        <div className="my-6 pb-6 border-b border-slate-100">
          <div className="flex items-baseline gap-1">
            <span className="text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy tracking-tight">
              {plan.price}
            </span>
            <span className="text-xs text-slate-500 font-semibold">{plan.period}</span>
          </div>
          <p className="text-xs text-slate-600 mt-2">
            {plan.description}
          </p>
        </div>

        <ul className="space-y-3 mb-8">
          {plan.features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
              <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Link href="/agendar">
          <Button
            variant={isPopular ? 'primary' : 'secondary'}
            size="md"
            fullWidth
            className="font-bold"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            {plan.ctaText}
          </Button>
        </Link>
        <p className="text-[11px] text-center text-slate-400 mt-2.5">
          Sin contratos de permanencia · Cancela cuando quieras
        </p>
      </div>
    </div>
  );
};
""")

write_file('components/cards/TestimonialCard.tsx', """import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '@/lib/types';

export const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-yycl-neutral hover:shadow-yycl-hover transition-all duration-200 flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <span className="w-8 h-8 rounded-full bg-yycl-purple-bg text-yycl-purple flex items-center justify-center">
            <Quote className="w-4 h-4" />
          </span>
        </div>

        <h4 className="text-sm sm:text-base font-bold font-heading text-yycl-navy mb-2.5">
          "{testimonial.highlight}"
        </h4>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
          {testimonial.quote}
        </p>
      </div>

      <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-11 h-11 rounded-full object-cover border-2 border-yycl-yellow"
        />
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold font-heading text-yycl-navy">{testimonial.name}</span>
            <span title={testimonial.country}>{testimonial.countryFlag}</span>
          </div>
          <span className="text-xs text-slate-500 font-medium">
            {testimonial.role} · <span className="text-yycl-purple font-semibold">{testimonial.company}</span>
          </span>
        </div>
      </div>
    </div>
  );
};
""")

write_file('components/cards/TeamMemberCard.tsx', """import React from 'react';
import Link from 'next/link';
import { Star, Award, Calendar, Languages } from 'lucide-react';
import { Teacher } from '@/lib/types';
import { Button } from '@/components/ui/Button';

export const TeamMemberCard: React.FC<{ teacher: Teacher }> = ({ teacher }) => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-yycl-neutral hover:shadow-yycl-hover transition-all duration-200 flex flex-col justify-between group">
      <div>
        <div className="relative h-56 w-full overflow-hidden bg-slate-100">
          <img
            src={teacher.avatar}
            alt={teacher.name}
            className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute top-3 right-3 bg-yycl-navy/90 backdrop-blur-xs text-white text-xs font-bold px-2.5 py-1 rounded-full flex items-center gap-1">
            <Star className="w-3.5 h-3.5 fill-yycl-yellow text-yycl-yellow" />
            <span>{teacher.rating}</span>
          </div>
          <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs text-yycl-navy text-xs font-bold px-2.5 py-1 rounded-lg shadow-sm flex items-center gap-1.5">
            <span>{teacher.countryFlag}</span>
            <span>{teacher.country}</span>
          </div>
        </div>

        <div className="p-5">
          <span className="text-xs font-bold text-yycl-purple uppercase tracking-wider">
            {teacher.role}
          </span>
          <h3 className="text-lg font-bold font-heading text-yycl-navy mt-0.5">
            {teacher.name}
          </h3>
          <p className="text-xs font-semibold text-slate-700 mt-1 mb-3">
            {teacher.specialty}
          </p>

          <p className="text-xs text-slate-600 line-clamp-2 mb-4">
            {teacher.bio}
          </p>

          <div className="space-y-1.5 pt-3 border-t border-slate-100">
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <Award className="w-3.5 h-3.5 text-yycl-yellow shrink-0" />
              <span className="font-medium truncate">{teacher.certifications.join(' · ')}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <Languages className="w-3.5 h-3.5 text-yycl-cyan shrink-0" />
              <span className="truncate">{teacher.languages.join(' · ')}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-5 pt-0">
        <Link href="/agendar">
          <Button variant="secondary" size="sm" fullWidth className="font-semibold text-xs gap-1.5">
            <Calendar className="w-3.5 h-3.5 text-yycl-yellow" />
            Agendar con {teacher.name.split(' ')[0]}
          </Button>
        </Link>
      </div>
    </div>
  );
};
""")

write_file('components/cards/FeatureCard.tsx', """import React from 'react';

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, tag }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-yycl-neutral hover:shadow-yycl-hover transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-yycl-cream flex items-center justify-center text-yycl-navy">
            {icon}
          </div>
          {tag && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-yycl-purple bg-yycl-purple-bg px-2.5 py-1 rounded-full">
              {tag}
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold font-heading text-yycl-navy mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
""")
print("Navbar, Footer, and Cards created successfully")
