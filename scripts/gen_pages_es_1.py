import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. app/page.tsx (ES Inicio)
write_file('app/page.tsx', """import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { OfferingsSection } from '@/components/sections/OfferingsSection';
import { MethodSection } from '@/components/sections/MethodSection';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { PRICING_PLANS } from '@/lib/data';
import { PricingCard } from '@/components/cards/PricingCard';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <HeroSection />
      <OfferingsSection />
      <MethodSection />

      {/* Pricing Preview Section */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-yycl-purple block mb-2">
              Planes y Modalidades
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy">
              Invierte en tu fluidez profesional
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              Sin contratos de permanencia. Clases en vivo con profesores certificados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <ResultsSection />
      <FaqSection />
      <CtaBanner />
      <Footer />
    </main>
  );
}
""")

# 2. app/como-funciona/page.tsx
write_file('app/como-funciona/page.tsx', """import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { MethodSection } from '@/components/sections/MethodSection';
import { CheckCircle2, Video, Calendar, ShieldCheck, Clock, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function ComoFuncionaPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Header */}
      <section className="bg-yycl-navy text-white py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-yycl-yellow block">
            Paso a Paso
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
            ¿Cómo funciona el método YYCL?
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Eliminamos la frustración de memorizar gramática en silencio. Desde tu primer día, tu voz y tu seguridad son el centro de cada sesión.
          </p>
        </div>
      </section>

      <MethodSection />

      {/* 4 Step Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold font-heading text-yycl-navy">
              Tu camino desde el día 1 hasta la fluidez
            </h2>
          </div>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6 items-start bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-yycl-yellow text-yycl-navy font-heading font-extrabold text-xl flex items-center justify-center shrink-0">
                1
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-heading text-yycl-navy">
                  Diagnóstico oral gratuito de 15 minutos
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Conectas por videollamada con un coach. Conversamos brevemente para identificar en qué nivel estás, qué fonemas te cuestan más y qué vocabulario necesitas para tu trabajo o meta.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-yycl-purple text-white font-heading font-extrabold text-xl flex items-center justify-center shrink-0">
                2
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-heading text-yycl-navy">
                  Asignación del profesor ideal y plan personalizado
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Te emparejamos con el coach que mejor se adapta a tu estilo de aprendizaje y horario. Si necesitas inglés financiero, legal o tecnológico, tu profesor dominará esos términos.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-yycl-cyan text-yycl-navy font-heading font-extrabold text-xl flex items-center justify-center shrink-0">
                3
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-heading text-yycl-navy">
                  Clases 100% conversacionales en vivo
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Cada sesión es interactiva. Realizamos simulacros de reuniones, pitches, debates y entrevistas. Si cometes un error, lo corregimos en tiempo real sin juzgarte.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6 items-start bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white font-heading font-extrabold text-xl flex items-center justify-center shrink-0">
                4
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold font-heading text-yycl-navy">
                  Medición de avance y desbloqueo total
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Recibes reportes mensuales de tu progreso, grabaciones de tus clases para repasar fonética y feedback constante hasta que notes que ya no traduces mentalmente.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/agendar">
              <Button variant="primary" size="lg" className="font-bold">
                Agendar Mi Diagnóstico Gratuito
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
""")

# 3. app/resultados/page.tsx
write_file('app/resultados/page.tsx', """import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { TESTIMONIALS } from '@/lib/data';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { Trophy, TrendingUp, DollarSign, Briefcase } from 'lucide-react';

export default function ResultadosPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="bg-yycl-navy text-white py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-yycl-yellow block">
            Historias de Éxito
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
            Resultados que transforman carreras
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Más de 1,200 profesionales en Colombia, México, Perú y toda Latinoamérica han superado sus miedos y alcanzado sus metas profesionales con YYCL.
          </p>
        </div>
      </section>

      <ResultsSection />

      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold font-heading text-yycl-navy">
              Impacto directo en tu vida profesional
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mx-auto">
                <DollarSign className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-yycl-navy">+45% Aumento Salarial</h3>
              <p className="text-sm text-slate-600">
                Los alumnos que dominan el inglés acceden a salarios en USD y ofertas laborales remotas en multinacionales.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mx-auto">
                <Briefcase className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-yycl-navy">Entrevistas Exitosas</h3>
              <p className="text-sm text-slate-600">
                Simulamos los paneles técnicos en inglés para que respondas con calma y convicción a reclutadores globales.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Trophy className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold font-heading text-yycl-navy">94% Aprobación en TOEFL / IELTS</h3>
              <p className="text-sm text-slate-600">
                Estrategias enfocadas en las bandas de puntuación requeridas por universidades y programas de inmigración.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
""")

# 4. app/planes/page.tsx
write_file('app/planes/page.tsx', """import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { FaqSection } from '@/components/sections/FaqSection';
import { PRICING_PLANS } from '@/lib/data';
import { PricingCard } from '@/components/cards/PricingCard';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export default function PlanesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="bg-yycl-navy text-white py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-yycl-yellow block">
            Precios Transparentes
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
            Elige el plan que se adapta a tu ritmo
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Sin costos ocultos ni cláusulas de permanencia. Todos los planes incluyen acceso a plataforma y club de conversación semanal.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {PRICING_PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm max-w-4xl mx-auto">
            <div className="flex items-start gap-4">
              <ShieldCheck className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-bold font-heading text-yycl-navy">
                  Garantía 100% de Satisfacción YYCL
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Si tras tu primera semana sientes que la metodología o tu profesor asignado no son los indicados para ti, te cambiamos de docente de inmediato o te reembolsamos la totalidad de tu dinero sin preguntas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />
      <CtaBanner />
      <Footer />
    </main>
  );
}
""")

# 5. app/servicios-especiales/page.tsx
write_file('app/servicios-especiales/page.tsx', """import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { GraduationCap, Award, Briefcase, Globe, Check, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function ServiciosEspecialesPage() {
  const services = [
    {
      title: 'Preparación TOEFL iBT',
      badge: 'EXAMEN ACADÉMICO',
      desc: 'Simulacros cronometrados, estrategias de Speaking y corrección de ensayos para postulación a universidades internacionales.',
      perks: ['Práctica de las 4 habilidades', 'Banco de más de 500 preguntas oficiales', 'Feedback de pronunciación fonética']
    },
    {
      title: 'Preparación IELTS (General & Academic)',
      badge: 'INMIGRACIÓN & ESTUDIOS',
      desc: 'Especializado en subir bandas en el Speaking y Writing con profesores examinadores certificados.',
      perks: ['Entrenamiento para entrevista cara a cara', 'Técnicas de síntesis para Task 1 y Task 2', 'Simulacros completos']
    },
    {
      title: 'Preparación CELPIP (Canadá)',
      badge: 'EXPRÉS ENTRY CANADÁ',
      desc: 'El examen de opción preferida para residencia permanente canadiense. Entrena con formato 100% por computador.',
      perks: ['Módulos de Listening con acentos canadienses', 'Estrategias de Speaking en 60 segundos', 'Material exclusivo']
    },
    {
      title: 'Coaching para Entrevistas Laborales',
      badge: 'BOOST DE CARRERA',
      desc: '3 a 5 sesiones intensivas para preparar tus respuestas a preguntas trampa, negociación salarial y pitch personal.',
      perks: ['Roleplays con reclutadores bilingües', 'Optimización de tu narrativa profesional', 'Grabación y análisis de video']
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="bg-yycl-navy text-white py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-yycl-yellow block">
            Servicios Especializados
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
            Certificaciones y Metas de Alto Impacto
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Programas intensivos diseñados para obtener la certificación o el puesto de trabajo que necesitas en tiempo récord.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((s, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-yycl-purple bg-yycl-purple-bg px-3 py-1 rounded-full">
                    {s.badge}
                  </span>
                  <h3 className="text-2xl font-bold font-heading text-yycl-navy mt-3 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-slate-600 mb-6">
                    {s.desc}
                  </p>
                  <ul className="space-y-2.5 mb-8">
                    {s.perks.map((p, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href="/agendar">
                  <Button variant="primary" size="md" fullWidth className="font-bold">
                    Agendar Diagnóstico para {s.title.split(' ')[1] || 'Examen'}
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
""")
print("Pages ES Part 1 completed")
