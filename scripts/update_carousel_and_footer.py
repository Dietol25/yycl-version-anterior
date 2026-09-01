import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. TestimonialsCarousel.tsx (Interactive Carousel for Mobile & Desktop)
write_file('components/sections/TestimonialsCarousel.tsx', """\"use client\";

import React, { useState } from 'react';
import { Star, ArrowLeft, ArrowRight, ExternalLink, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/data';

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 lg:py-24 bg-white border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy tracking-tight">
            Resultados reales
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 font-medium">
            Lo que el perfeccionamiento continuo y la dedicación real logran en nuestros estudiantes.
          </p>
        </div>

        {/* 2 Stat Counters (Mobile & Desktop) */}
        <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-12 text-center">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-yycl-navy">
              +1.000
            </span>
            <span className="block text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              graduados
            </span>
          </div>

          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 shadow-xs">
            <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-yycl-navy">
              96-98%
            </span>
            <span className="block text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              de satisfacción
            </span>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="max-w-md mx-auto relative">
          {/* Card */}
          <div className="bg-yycl-purple text-white p-7 sm:p-9 rounded-3xl border-2 border-yycl-navy shadow-[6px_6px_0px_#001837] space-y-5 transition-all duration-300">
            {/* Stars */}
            <div className="flex items-center gap-1">
              {[...Array(TESTIMONIALS[currentIndex].rating || 5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yycl-yellow text-yycl-yellow" />
              ))}
            </div>

            {/* Quote Icon & Text */}
            <div className="space-y-2">
              <span className="text-3xl font-serif text-yycl-yellow leading-none block">“</span>
              <p className="text-base sm:text-lg font-heading font-medium leading-relaxed">
                "{TESTIMONIALS[currentIndex].quote}"
              </p>
            </div>

            {/* User Details */}
            <div className="flex items-center gap-3.5 pt-4 border-t border-white/20">
              <img
                src={TESTIMONIALS[currentIndex].avatar}
                alt={TESTIMONIALS[currentIndex].name}
                className="w-12 h-12 rounded-full object-cover border-2 border-yycl-yellow shrink-0"
              />
              <div className="space-y-0.5">
                <span className="block font-heading font-bold text-base leading-tight">
                  {TESTIMONIALS[currentIndex].name}
                </span>
                <span className="block text-xs text-slate-200">
                  {TESTIMONIALS[currentIndex].role} · <span className="font-semibold">{TESTIMONIALS[currentIndex].company}</span>
                </span>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-[11px] text-yycl-yellow hover:underline font-semibold pt-0.5"
                >
                  <span>Ver reseña original</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Country Flag Badge */}
            <div className="text-sm pt-1">
              <span>{TESTIMONIALS[currentIndex].countryFlag}</span>
            </div>
          </div>

          {/* Controls: Left Arrow, Pagination Dots, Right Arrow */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-yycl-purple text-white flex items-center justify-center border-2 border-yycl-navy shadow-[2px_2px_0px_#001837] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer hover:bg-yycl-purple-dark transition-all"
              aria-label="Testimonio anterior"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'w-6 h-2.5 bg-yycl-purple'
                      : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ir al testimonio ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-yycl-purple text-white flex items-center justify-center border-2 border-yycl-navy shadow-[2px_2px_0px_#001837] active:translate-x-0.5 active:translate-y-0.5 cursor-pointer hover:bg-yycl-purple-dark transition-all"
              aria-label="Testimonio siguiente"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
""")

# 2. Update Footer.tsx with the mobile wireframe layout and sticker logo
write_file('components/navigation/Footer.tsx', """\"use client\";

import React, { useState } from 'react';
import Link from 'next/link';
import { Logo } from '@/components/icons/Logo';
import { Button } from '@/components/ui/Button';
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
    <footer className="bg-yycl-purple text-white pt-14 pb-12 border-t-4 border-yycl-yellow">
      <div className="max-w-[1440px] mx-auto px-5 lg:px-16">
        <div className="max-w-md mx-auto space-y-8">
          {/* Logo & Brand Header */}
          <div className="flex items-center gap-3">
            <Logo size={46} />
            <div className="flex flex-col">
              <span className="font-heading font-extrabold text-white text-lg tracking-tight leading-none">
                Yes You Can Languages
              </span>
              <span className="text-[11px] font-heading font-semibold tracking-wider text-yycl-yellow uppercase">
                Academia Online
              </span>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="space-y-3">
            <p className="text-sm text-slate-100 font-medium leading-relaxed">
              Recibe noticias y aprende algo nuevo cada mes en tu correo.
            </p>

            {subscribed ? (
              <div className="bg-white/20 border border-white/40 rounded-xl p-3.5 flex items-center gap-2.5 text-white">
                <CheckCircle2 className="w-5 h-5 text-yycl-yellow shrink-0" />
                <p className="text-xs font-medium">¡Te has suscrito con éxito!</p>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
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
            <p className="text-[11px] text-slate-200">
              Al suscribirte aceptas recibir correos de YYCL. Puedes cancelar en cualquier momento.
            </p>
          </div>

          {/* Links Section */}
          <div className="space-y-4 pt-4 border-t border-white/20 text-sm">
            <h4 className="font-heading font-bold text-yycl-yellow uppercase text-xs tracking-wider">
              Explora
            </h4>
            <div className="grid grid-cols-2 gap-y-2 text-xs font-medium text-slate-100">
              <Link href="/" className="hover:text-yycl-yellow transition-colors">Inicio</Link>
              <Link href="/como-funciona" className="hover:text-yycl-yellow transition-colors">Cómo Funciona</Link>
              <Link href="/resultados" className="hover:text-yycl-yellow transition-colors">Resultados</Link>
              <Link href="/planes" className="hover:text-yycl-yellow transition-colors">Precios y planes</Link>
              <Link href="/sobre-yycl" className="hover:text-yycl-yellow transition-colors">Sobre YYCL</Link>
              <Link href="/profesores" className="hover:text-yycl-yellow transition-colors">Profesores</Link>
              <Link href="/servicios-especiales" className="hover:text-yycl-yellow transition-colors">TOEFL & IELTS</Link>
              <Link href="/kids" className="hover:text-yycl-yellow transition-colors">Kids & Teens</Link>
              <Link href="/empresas" className="hover:text-yycl-yellow transition-colors">Servicios empresas</Link>
              <Link href="/agendar" className="hover:text-yycl-yellow transition-colors">Atención y contacto</Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-3 pt-4 border-t border-white/20 text-xs">
            <h4 className="font-heading font-bold text-yycl-yellow uppercase text-xs tracking-wider">
              Síguenos
            </h4>
            <div className="flex flex-col space-y-2 text-slate-100 font-medium">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-yellow">
                <FacebookIcon className="w-4 h-4 text-yycl-yellow" />
                <span>Facebook</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-yellow">
                <InstagramIcon className="w-4 h-4 text-yycl-yellow" />
                <span>Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-yellow">
                <LinkedinIcon className="w-4 h-4 text-yycl-yellow" />
                <span>LinkedIn</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-yycl-yellow">
                <YoutubeIcon className="w-4 h-4 text-yycl-yellow" />
                <span>YouTube</span>
              </a>
            </div>
          </div>

          {/* Legal and Copyright */}
          <div className="pt-6 border-t border-white/20 text-[11px] text-slate-200 space-y-2">
            <div className="flex items-center gap-4">
              <Link href="/sobre-yycl" className="hover:underline">Privacidad</Link>
              <Link href="/sobre-yycl" className="hover:underline">Términos del servicio</Link>
              <Link href="/sobre-yycl" className="hover:underline">Cookies</Link>
            </div>
            <p>© 2026 Yes You Can Languages. Todos los derechos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
""")

# 3. Update app/page.tsx with the Carousel and full Mobile Wireframe structure
write_file('app/page.tsx', """import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { OfferingsSection } from '@/components/sections/OfferingsSection';
import { TestimonialsCarousel } from '@/components/sections/TestimonialsCarousel';
import { Button } from '@/components/ui/Button';
import { Check, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. TODO LO QUE OFRECEMOS (Pills + Aprende a hablar + 3 Pilares) */}
      <OfferingsSection />

      {/* 3. RESULTADOS REALES (2 Métricas + Carrusel de Testimonios) */}
      <TestimonialsCarousel />

      {/* 4. MODALIDADES (3 Cards con checklist fiel al wireframe) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-5 lg:px-16">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold font-heading text-slate-500 uppercase tracking-wider block mb-1">
              Nuestros programas
            </span>
            <h2 className="font-heading-h2 text-yycl-navy">
              Modalidades
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-md mx-auto">
              3 modalidades: grupal, personalizado o en dúo. Elige la opción que mejor se adapte a tu objetivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Card 1: Grupal */}
            <div className="bg-gradient-to-b from-amber-600/90 via-yycl-purple to-yycl-purple text-white p-6 sm:p-7 rounded-3xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-extrabold text-xl text-white">Grupal</h3>
                <p className="text-xs text-slate-100 mt-1 mb-4 leading-relaxed">
                  Aprende con un pequeño grupo de tu mismo nivel.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-100">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow shrink-0" /> Máximo 4-6 alumnos</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow shrink-0" /> Clases en vivo</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow shrink-0" /> Profesores con años de experiencia</li>
                </ul>
              </div>
            </div>

            {/* Card 2: Personalizado */}
            <div className="bg-gradient-to-b from-amber-600/90 via-yycl-purple to-yycl-purple text-white p-6 sm:p-7 rounded-3xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-extrabold text-xl text-white">Personalizado</h3>
                <p className="text-xs text-slate-100 mt-1 mb-4 leading-relaxed">
                  Atención 1 a 1 y tu propio ritmo de avance.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-100">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow shrink-0" /> Clases uno a uno</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow shrink-0" /> Clases enfocadas a tu objetivo</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow shrink-0" /> Horario a tu elección</li>
                </ul>
              </div>
            </div>

            {/* Card 3: Dúo, en pareja */}
            <div className="bg-gradient-to-b from-amber-600/90 via-yycl-purple to-yycl-purple text-white p-6 sm:p-7 rounded-3xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] space-y-4 flex flex-col justify-between">
              <div>
                <h3 className="font-heading font-extrabold text-xl text-white">Dúo, en pareja</h3>
                <p className="text-xs text-slate-100 mt-1 mb-4 leading-relaxed">
                  Aprende con un compañero de tu nivel.
                </p>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-100">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow shrink-0" /> Clases uno a dos</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow shrink-0" /> Toda la atención personalizada pero con más interacción</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow shrink-0" /> Clases enfocadas a tu objetivo</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center pt-8">
            <Link href="/planes" className="text-xs sm:text-sm font-bold font-heading text-yycl-navy hover:underline inline-flex items-center gap-1">
              Ver todos los planes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. CIERRE (Sí puedes. Yes you can. + Botón Amarillo) */}
      <section className="py-16 bg-white text-center border-t border-slate-200">
        <div className="max-w-md mx-auto px-5 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-yycl-navy leading-tight">
            Sí puedes. Yes you can.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-medium">
            Agenda tu entrevista gratuita y da el primer paso.
          </p>
          <div className="pt-2">
            <Link href="/agendar">
              <Button variant="primary" size="lg" className="w-full font-bold text-sm h-12 shadow-[3px_3px_0px_#001837]">
                Agendar tu entrevista gratuita
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
""")

print("Carousel and Footer wireframe updated successfully")
