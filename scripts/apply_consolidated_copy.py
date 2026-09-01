import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. Update Navbar.tsx with the exact consolidated navigation items & dropdowns
write_file('components/navigation/Navbar.tsx', """\"use client\";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/icons/Logo';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sobreDropdownOpen, setSobreDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Cómo Funciona', href: '/como-funciona' },
    { label: 'Resultados', href: '/resultados' },
    { label: 'Planes', href: '/planes' },
    { label: 'Servicios Especiales', href: '/servicios-especiales' },
    { label: 'Otros Idiomas', href: '/idiomas' },
    { label: 'Kids & Teens', href: '/kids' },
    { label: 'Capacitación corporativa', href: '/empresas' },
    {
      label: 'Sobre YYCL',
      href: '/sobre-yycl',
      hasDropdown: true,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80 transition-all duration-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo Sticker */}
        <Link href="/" className="flex items-center gap-3">
          <Logo size={48} />
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-5 2xl:gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setSobreDropdownOpen(true)}
                  onMouseLeave={() => setSobreDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="text-[14px] font-heading font-semibold text-slate-800 hover:text-yycl-navy transition-colors inline-flex items-center gap-1 py-2"
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>

                  {sobreDropdownOpen && (
                    <div className="absolute top-full left-0 w-48 bg-white rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] p-2 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150">
                      <Link href="/sobre-yycl" className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-yycl-cream">
                        Sobre Nosotros
                      </Link>
                      <Link href="/profesores" className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-yycl-cream">
                        Nuestro equipo
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] font-heading font-semibold transition-colors hover:text-yycl-navy ${
                  isActive ? 'text-yycl-navy font-bold' : 'text-slate-800'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side (Desktop) */}
        <div className="hidden lg:flex items-center gap-5">
          {/* Plataforma in main nav */}
          <Link
            href="/login"
            className="text-[14px] font-heading font-semibold text-slate-800 hover:text-yycl-navy transition-colors"
          >
            Plataforma
          </Link>

          {/* Language Toggle */}
          <div className="text-xs font-heading font-bold flex items-center gap-1 select-none">
            <span className="text-yycl-navy">ES</span>
            <span className="text-slate-300 font-normal">/</span>
            <Link href="/en" className="text-slate-500 hover:text-yycl-navy font-medium transition-colors">
              EN
            </Link>
          </div>

          {/* CTA Nav button (Short: "Agendar") */}
          <Link href="/agendar">
            <Button
              variant="primary"
              size="md"
              className="font-bold text-sm px-5 py-2 h-10 shadow-[2px_2px_0px_#001837]"
            >
              Agendar
            </Button>
          </Link>
        </div>

        {/* Right Side (Mobile View) */}
        <div className="flex xl:hidden items-center gap-3">
          <div className="flex items-center gap-1 text-xs font-bold font-heading text-slate-700">
            <span>🇪🇸</span>
            <span>ES</span>
          </div>

          <Link href="/agendar">
            <Button variant="primary" size="sm" className="font-bold text-xs h-9 px-3.5 shadow-[2px_2px_0px_#001837]">
              Agendar
            </Button>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-yycl-navy hover:bg-slate-100 rounded-lg focus:outline-none"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-5 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-base font-heading font-semibold text-slate-800 hover:bg-yycl-cream hover:text-yycl-navy transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/profesores"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-base font-heading font-semibold text-slate-800 hover:bg-yycl-cream hover:text-yycl-navy transition-all pl-6"
            >
              ↳ Nuestro equipo
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-3">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" size="md" fullWidth className="font-bold">
                Plataforma (Ingresar)
              </Button>
            </Link>

            <Link href="/agendar" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="md" fullWidth className="font-bold">
                Agenda tu entrevista gratuita
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
""")

# 2. Update lib/data.ts with verified testimonials & no numerical prices
write_file('lib/data.ts', """import { Teacher, PricingPlan, Testimonial } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Yuliana Navarro',
    role: 'Estudiante YYCL',
    company: 'Google Reviews 5.0★',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    country: 'Colombia',
    countryFlag: '🇨🇴',
    rating: 5,
    highlight: 'Me he permitido preguntar, hablar y lanzarme.',
    quote: 'Me han encantado... Me he permitido preguntar, hablar y lanzarme. Me gusta que no hay juzgamientos; por eso aprovecho todo.'
  },
  {
    id: '2',
    name: 'Nicolas Ibañez Esenarro',
    role: 'Profesional en Tecnología',
    company: 'Google Reviews 5.0★',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    country: 'Colombia',
    countryFlag: '🇨🇴',
    rating: 5,
    highlight: 'Jose is THE GOAT!',
    quote: 'Lo puedo decir en inglés: "Jose is THE GOAT". He progresado mucho (presente perfecto simple) en poco tiempo con sus clases! Siempre muy paciente y pedagógico.'
  },
  {
    id: '3',
    name: 'Diana Proaño',
    role: 'Guía de Turismo',
    company: 'Google Reviews 5.0★',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    country: 'Ecuador',
    countryFlag: '🇪🇨',
    rating: 5,
    highlight: 'Pude mejorar la gramática, vocabulario y habla.',
    quote: 'YYCL me ayudó a refrescar mis conocimientos y a practicar toda la teoría que había estudiado hace tiempo, también pude mejorar la gramática, el vocabulario, la lectura y el habla de una manera fácil y con tiempo flexible.'
  },
  {
    id: '4',
    name: 'Maria Badano',
    role: 'Estudiante Modalidad Personalizada',
    company: 'Google Reviews 5.0★',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200',
    country: 'Argentina',
    countryFlag: '🇦🇷',
    rating: 5,
    highlight: 'Super flexible a los objetivos.',
    quote: 'En mi caso particular, que tengo de profe a Mica Sedan, estoy muy contenta. Es super flexible a los pedidos, objetivos, adapta todo el material en función de lo que uno quiere desarrollar.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'grupal',
    name: 'Grupal',
    subtitle: 'Aprende con otros, se contagia la energía de un grupo chico (máx. 8 personas).',
    price: 'A consultar',
    period: 'en tu entrevista',
    description: 'El precio lo conversamos con calma en tu entrevista gratuita según tu frecuencia y objetivos.',
    features: [
      'Grupos reducidos de máximo 8 alumnos',
      'Clases 100% en vivo con profesores reales',
      'Club de Conversación semanal incluido',
      'Acceso a plataforma de práctica 24/7',
      'Llamadas simuladas e invitados internacionales',
    ],
    ctaText: 'Agenda tu entrevista gratuita',
  },
  {
    id: 'personalizado',
    name: 'Personalizada (1-a-1)',
    subtitle: 'Un profesor solo para ti, un plan pensado a tu medida.',
    price: 'A consultar',
    period: 'en tu entrevista',
    popular: true,
    badge: 'MÁS POPULAR',
    description: 'El precio lo conversamos con calma en tu entrevista gratuita según tu disponibilidad y requerimientos.',
    features: [
      'Profesor exclusivo para ti en cada sesión',
      'Horarios flexibles adaptados a tu agenda',
      'Contenido enfocado en tu trabajo y metas',
      'Club de Conversación semanal incluido',
      'Acceso a plataforma de práctica 24/7',
      'Preparación de entrevistas y presentaciones',
    ],
    ctaText: 'Agenda tu entrevista gratuita',
    highlightColor: 'yycl-yellow',
  },
  {
    id: 'duo',
    name: 'Dúo (En Pareja)',
    subtitle: 'La Personalizada en pareja: mismo profesor exclusivo, compartido con alguien que va por lo mismo.',
    price: 'A consultar',
    period: 'en tu entrevista',
    badge: 'RECOMENDADO',
    description: 'El precio lo conversamos con calma en tu entrevista gratuita con descuento para ambos.',
    features: [
      '2 estudiantes con el mismo docente en vivo',
      'Mismo plan a medida y profesor exclusivo',
      'Horarios coordinados a su conveniencia',
      'Club de Conversación semanal incluido',
      'Acceso a plataforma de práctica 24/7',
    ],
    ctaText: 'Agenda tu entrevista gratuita',
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Lead English Coach',
    specialty: 'Inglés de Negocios & Fluidez Conversacional',
    bio: 'Más de 8 años ayudando a ejecutivos en América Latina a liderar reuniones internacionales sin bloqueos.',
    languages: ['Inglés (Nativo - USA)', 'Español (Avanzado)'],
    certifications: ['CELTA Certified', 'MA Applied Linguistics'],
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    rating: 4.98,
    classesGiven: 2450,
    country: 'Estados Unidos',
    countryFlag: '🇺🇸',
  },
  {
    id: '2',
    name: \"David O'Connor\",
    role: 'Senior Speaking Coach',
    specialty: 'Reducción de Acento & Entrevistas de Trabajo',
    bio: 'Especialista en preparar a ingenieros y profesionales de tecnología para entrevistas en empresas globales.',
    languages: ['Inglés (Nativo - UK)', 'Español (Intermedio)'],
    certifications: ['DELTA Cambridge', 'Interview Coach Pro'],
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    rating: 4.95,
    classesGiven: 1890,
    country: 'Reino Unido',
    countryFlag: '🇬🇧',
  },
  {
    id: '3',
    name: 'Camila Restrepo',
    role: 'Bilingual Accent Coach',
    specialty: 'Inglés desde Cero & Desbloqueo Mental',
    bio: 'Comprende exactamente las dificultades de los hispanohablantes al pronunciar fonemas complejos en inglés.',
    languages: ['Español (Nativo)', 'Inglés (C2 Bilingüe)'],
    certifications: ['TESOL Advanced', 'Neurolanguage Coach'],
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    rating: 4.99,
    classesGiven: 3100,
    country: 'Colombia',
    countryFlag: '🇨🇴',
  },
  {
    id: '4',
    name: 'Jean-Luc Moreau',
    role: 'Profesor de Francés',
    specialty: 'Francés Conversacional & Inmigración Canadá (TEF)',
    bio: 'Nativo de Lyon, especialista en preparar a familias y profesionales para sus exámenes oficiales de inmigración.',
    languages: ['Francés (Nativo)', 'Español (Fluido)', 'Inglés'],
    certifications: ['DAEFLE Paris', 'Examinador TEF/DELF'],
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    rating: 4.92,
    classesGiven: 1420,
    country: 'Francia',
    countryFlag: '🇫🇷',
  }
];

export const FAQS = [
  {
    q: '¿Por qué no publican los precios exactos en la web?',
    a: 'Porque cada plan se ajusta a tu frecuencia semanal, tu nivel y si requieres preparación específica (ej. entrevistas o exámenes internacionales). En tu entrevista gratuita de 15 minutos te damos el valor exacto sin ningún compromiso.'
  },
  {
    q: '¿Qué incluye la entrevista gratuita?',
    a: 'Un diagnóstico oral de 15 minutos donde conversamos para conocer tu nivel real, tus bloqueos y trazamos tu plan personalizado.'
  },
  {
    q: '¿El Club de Conversación tiene costo extra?',
    a: 'No. El Club de Conversación semanal y el acceso a la plataforma de práctica están incluidos en todas las modalidades.'
  },
  {
    q: '¿Puedo reprogramar mis clases?',
    a: 'Sí. En modalidad personalizada y en dúo puedes reprogramar avisando con anticipación para no perder tu sesión.'
  }
];
""")

# 3. Update app/empresas/page.tsx with 6 confirmed corporate clients
write_file('app/empresas/page.tsx', """import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Building2, TrendingUp, Users, CheckCircle2, ArrowRight, ShieldCheck, Laptop, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function EmpresasPage() {
  const clients = ['S4N', 'SRK México', 'SRK Argentina', 'Integrity Seguros', 'EPAM', 'NCC'];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header */}
      <section className="bg-yycl-navy text-white py-16 lg:py-24 text-center">
        <div className="max-w-4xl mx-auto px-5 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-yycl-cyan block">
            Capacitación Corporativa en Idiomas
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
            Inglés para tu equipo.
          </h1>
          <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto leading-relaxed">
            Preparamos a tu equipo para el inglés que van a usar de verdad: en una reunión de negocios, en su trabajo técnico del día a día, rindiendo un examen, o parados frente a una audiencia.
          </p>
          <div className="pt-4">
            <Link href="/agendar">
              <Button variant="primary" size="lg" className="font-bold">
                Agenda una reunión gratuita
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Logos: Empresas que confían en nosotros */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-[1440px] mx-auto px-5 text-center">
          <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-6">
            Empresas que confían en nosotros
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {clients.map((c, idx) => (
              <div key={idx} className="bg-white px-6 py-3 rounded-xl border border-slate-200 font-heading font-bold text-slate-700 shadow-xs">
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo Funciona en 3 Pasos B2B */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-heading text-yycl-navy">
              Cómo funciona para tu empresa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-yycl-yellow text-yycl-navy font-bold flex items-center justify-center text-sm font-heading">1</span>
              <h3 className="text-lg font-bold font-heading text-yycl-navy">Diagnóstico</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Entrevistamos a tu equipo por área, definimos el nivel real de cada persona e identificamos quiénes son prioritarios para empezar.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-yycl-purple text-white font-bold flex items-center justify-center text-sm font-heading">2</span>
              <h3 className="text-lg font-bold font-heading text-yycl-navy">Plan a medida</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Armamos los grupos según el perfil y el objetivo de cada colaborador, no por orden de lista.
              </p>
            </div>

            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
              <span className="w-8 h-8 rounded-full bg-yycl-cyan text-yycl-navy font-bold flex items-center justify-center text-sm font-heading">3</span>
              <h3 className="text-lg font-bold font-heading text-yycl-navy">Seguimiento</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Acompañamiento durante todo el curso, con reportes de avance para el área de Talento Humano cada 2 meses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Cierre B2B */}
      <section className="py-16 bg-slate-50 border-t border-slate-200 text-center">
        <div className="max-w-2xl mx-auto px-5 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-heading text-yycl-navy">
            ¿Listo para capacitar a tu equipo?
          </h2>
          <p className="text-sm text-slate-600">
            Conversemos 20 minutos sobre las necesidades de tu empresa y te armamos una propuesta a la medida.
          </p>
          <div className="pt-2">
            <Link href="/agendar">
              <Button variant="primary" size="lg" className="font-bold">
                Agenda una reunión gratuita
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

print("Consolidated copy and architecture updated")
