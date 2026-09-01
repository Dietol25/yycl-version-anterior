import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 6. app/idiomas/page.tsx
write_file('app/idiomas/page.tsx', """import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Globe, ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function IdiomasPage() {
  const languages = [
    {
      name: 'Inglés Profesional',
      flag: '🇺🇸 🇬🇧',
      level: 'A1 a C2',
      desc: 'Enfocado en fluidez para el trabajo, reuniones internacionales, entrevistas y certificaciones.',
      features: ['Metodología 100% conversacional', 'Coaches nativos y bilingües', 'Vocabulario por industria']
    },
    {
      name: 'Francés Conversacional',
      flag: '🇫🇷 🇨🇦',
      level: 'A1 a B2',
      desc: 'Diseñado para profesionales y familias en proceso de inmigración a Canadá (TEF/TCF) o viajes a Francia.',
      features: ['Enfoque en fonética francesa', 'Preparación de entrevistas de inmigración', 'Profesores nativos']
    },
    {
      name: 'Portugués de Negocios',
      flag: '🇧🇷',
      level: 'A1 a B2',
      desc: 'Ideal para ejecutivos y empresas que comercian con el mercado brasileño y preparación para Celpe-Bras.',
      features: ['Portugués brasileño estándar', 'Expresiones corporativas', 'Roleplays comerciales']
    },
    {
      name: 'Español para Extranjeros',
      flag: '🇨🇴 🇲🇽',
      level: 'A1 a C2',
      desc: 'Spanish for expats, remote workers, and executives living in Latin America or doing business in Spanish.',
      features: ['Immersion conversation', 'Cultural nuances', 'Native Latin American coaches']
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <section className="bg-yycl-navy text-white py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-yycl-yellow block">
            Oferta Académica
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
            Idiomas disponibles en YYCL
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Aprende con profesores nativos y especializados con nuestra metodología conversacional directa.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {languages.map((lang, idx) => (
              <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{lang.flag}</span>
                    <span className="text-xs font-bold text-yycl-navy bg-yycl-cream px-3 py-1 rounded-full">
                      {lang.level}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-yycl-navy mb-2">
                    {lang.name}
                  </h3>
                  <p className="text-sm text-slate-600 mb-6">
                    {lang.desc}
                  </p>
                  <ul className="space-y-2 mb-8">
                    {lang.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link href="/agendar">
                  <Button variant="secondary" size="md" fullWidth className="font-bold">
                    Agendar Diagnóstico en {lang.name.split(' ')[0]}
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

# 7. app/kids/page.tsx
write_file('app/kids/page.tsx', """import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Sparkles, Gamepad2, Heart, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function KidsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="bg-gradient-to-b from-yycl-navy to-yycl-purple-dark text-white py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-yycl-yellow block">
            Programa Juvenil & Infantil
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
            YYCL Kids & Teens (6 a 16 años)
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Aprenden jugando, hablando y creando. Clases interactivas con profesores certificados en pedagogía lúdica infantil.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-amber-50/50 p-8 rounded-3xl border border-amber-200 text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-yycl-yellow text-yycl-navy flex items-center justify-center mx-auto text-2xl">
                🎮
              </div>
              <h3 className="text-xl font-bold font-heading text-yycl-navy">Gamificación Real</h3>
              <p className="text-sm text-slate-600">Dinámicas con retos, historias interactivas y proyectos que mantienen su atención activa.</p>
            </div>

            <div className="bg-purple-50/50 p-8 rounded-3xl border border-purple-200 text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-yycl-purple text-white flex items-center justify-center mx-auto text-2xl">
                🧸
              </div>
              <h3 className="text-xl font-bold font-heading text-yycl-navy">Cero Presión ni Timidez</h3>
              <p className="text-sm text-slate-600">Ambiente seguro y positivo donde equivocarse es solo parte del juego y el aprendizaje.</p>
            </div>

            <div className="bg-cyan-50/50 p-8 rounded-3xl border border-cyan-200 text-center space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-yycl-cyan text-yycl-navy flex items-center justify-center mx-auto text-2xl">
                📊
              </div>
              <h3 className="text-xl font-bold font-heading text-yycl-navy">Reportes para Padres</h3>
              <p className="text-sm text-slate-600">Actualizaciones periódicas sobre la evolución del vocabulario y fluidez de tu hijo/a.</p>
            </div>
          </div>

          <div className="text-center">
            <Link href="/agendar">
              <Button variant="primary" size="lg" className="font-bold">
                Agendar Clase Demo para mi Hijo/a
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

# 8. app/empresas/page.tsx
write_file('app/empresas/page.tsx', """import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Building2, TrendingUp, Users, CheckCircle, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function EmpresasPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="bg-yycl-navy text-white py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-yycl-cyan block">
            Soluciones Corporativas B2B
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
            Capacita a tu equipo para negociar en inglés global
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Planes a la medida para empresas y startups con reportes de asistencia en tiempo real, facturación electrónica y métricas de ROI.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <Users className="w-8 h-8 text-yycl-yellow" />
              <h3 className="text-xl font-bold font-heading text-yycl-navy">Diagnóstico de Equipo</h3>
              <p className="text-sm text-slate-600">Evaluamos oralmente a todos tus colaboradores para ubicarlos en grupos homogéneos y niveles precisos.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <TrendingUp className="w-8 h-8 text-yycl-purple" />
              <h3 className="text-xl font-bold font-heading text-yycl-navy">Métricas de Asistencia y ROI</h3>
              <p className="text-sm text-slate-600">Dashboard ejecutivo con horas cursadas, progreso individual y reportes mensuales de avance.</p>
            </div>
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-3">
              <FileText className="w-8 h-8 text-yycl-cyan" />
              <h3 className="text-xl font-bold font-heading text-yycl-navy">Contenido por Industria</h3>
              <p className="text-sm text-slate-600">Adaptamos el temario al vocabulario de tu sector: Tecnología, Finanzas, Legal, Salud o Consultoría.</p>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 text-center max-w-3xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold font-heading text-yycl-navy">¿Deseas una propuesta para tu empresa?</h3>
            <p className="text-sm text-slate-600">Un especialista corporativo se contactará contigo en menos de 24 horas.</p>
            <Link href="/agendar">
              <Button variant="primary" size="lg" className="font-bold">
                Agendar Reunión B2B
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

# 9. app/profesores/page.tsx
write_file('app/profesores/page.tsx', """import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { TEACHERS } from '@/lib/data';
import { TeamMemberCard } from '@/components/cards/TeamMemberCard';

export default function ProfesoresPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="bg-yycl-navy text-white py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-yycl-yellow block">
            Nuestro Equipo Docente
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
            Coaches Nativos y Bilingües Certificados
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Profesores con certificaciones internacionales (CELTA, DELTA, TESOL) y experiencia en entrenamiento para ejecutivos.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEACHERS.map((teacher) => (
              <TeamMemberCard key={teacher.id} teacher={teacher} />
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

# 10. app/sobre-yycl/page.tsx
write_file('app/sobre-yycl/page.tsx', """import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Heart, Target, Sparkles, MapPin, Mail, Phone } from 'lucide-react';

export default function SobreYYCLPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="bg-yycl-navy text-white py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-yycl-yellow block">
            Nuestra Historia
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
            Sobre Yes You Can Languages
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Nacimos con una misión clara: erradicar el miedo a hablar inglés en Latinoamérica y abrir puertas a mejores oportunidades globales.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-heading text-yycl-navy">
                La frustración de saber gramática pero no poder hablar
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Durante años vimos cómo profesionales brillantes se quedaban sin ascensos o no se postulaban a trabajos remotos en dólares simplemente por el pánico a hablar en inglés frente a otros.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                Por eso en YYCL creamos un modelo basado en la práctica conversacional continua, empatía, feedback constructivo y personalización absoluta.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 h-80">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                alt="Comunidad YYCL"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <Target className="w-8 h-8 text-yycl-yellow mx-auto mb-2" />
              <h3 className="font-bold font-heading text-yycl-navy text-lg">Misión</h3>
              <p className="text-xs text-slate-600 mt-1">Capacitar a los profesionales hispanohablantes para comunicarse con total naturalidad.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <Heart className="w-8 h-8 text-yycl-purple mx-auto mb-2" />
              <h3 className="font-bold font-heading text-yycl-navy text-lg">Valores</h3>
              <p className="text-xs text-slate-600 mt-1">Empatía, excelencia pedagógica, cero juzgamiento y resultados medibles.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl border border-slate-200">
              <Sparkles className="w-8 h-8 text-yycl-cyan mx-auto mb-2" />
              <h3 className="font-bold font-heading text-yycl-navy text-lg">Visión</h3>
              <p className="text-xs text-slate-600 mt-1">Ser la comunidad lingüística de mayor impacto y confianza en la región.</p>
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

# 11. app/login/page.tsx
write_file('app/login/page.tsx', """\"use client\";

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { FormInput } from '@/components/ui/FormInput';
import { Lock, Mail, ArrowRight } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Ingreso exitoso al portal de alumnos.');
  };

  return (
    <main className="min-h-screen bg-slate-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <Link href="/" className="inline-flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-yycl-yellow flex items-center justify-center font-heading font-extrabold text-yycl-navy text-2xl shadow-md">
            YY
          </div>
        </Link>
        <h2 className="mt-4 text-2xl sm:text-3xl font-extrabold font-heading text-yycl-navy">
          Portal de Alumnos YYCL
        </h2>
        <p className="mt-1 text-xs sm:text-sm text-slate-500">
          Accede a tus grabaciones, agenda de clases y material de estudio.
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-6 shadow-xl sm:rounded-3xl sm:px-10 border border-slate-200">
          <form className="space-y-5" onSubmit={handleSubmit}>
            <FormInput
              label="Correo Electrónico"
              type="email"
              required
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              leftIcon={<Mail className="w-4 h-4" />}
            />

            <FormInput
              label="Contraseña"
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              leftIcon={<Lock className="w-4 h-4" />}
            />

            <div className="flex items-center justify-between text-xs">
              <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                <input type="checkbox" className="rounded border-slate-300 text-yycl-yellow focus:ring-yycl-yellow" />
                <span>Recordarme</span>
              </label>
              <a href="#" className="font-semibold text-yycl-purple hover:underline">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            <Button variant="primary" size="md" fullWidth type="submit" className="font-bold">
              Iniciar Sesión
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          <div className="mt-6 text-center text-xs text-slate-500">
            ¿Aún no eres alumno?{' '}
            <Link href="/agendar" className="font-bold text-yycl-purple hover:underline">
              Agenda tu diagnóstico gratuito
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
""")

# 12. app/agendar/page.tsx
write_file('app/agendar/page.tsx', """import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { BookingWizard } from '@/components/booking/BookingWizard';

export default function AgendarPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <section className="bg-yycl-navy text-white py-12 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-yycl-yellow block">
            Reserva Fácil en 1 Minuto
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading">
            Agenda tu Sesión Online en Vivo
          </h1>
          <p className="text-sm text-slate-200">
            Elige el horario que mejor se acomode a tu rutina. Sesión individual por Google Meet.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <BookingWizard />
      </section>

      <Footer />
    </main>
  );
}
""")

# 13. app/not-found.tsx (404 Page)
write_file('app/not-found.tsx', """import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';
import { Compass, Home, Sparkles } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <div className="flex-1 flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
          <span className="text-6xl sm:text-7xl font-extrabold font-heading text-yycl-yellow block tracking-tight">
            404
          </span>

          <div className="space-y-2">
            <h1 className="text-2xl sm:text-3xl font-bold font-heading text-yycl-navy">
              ¡Ups! Esta página se fue de viaje sin avisar.
            </h1>
            <p className="text-sm text-slate-600">
              El enlace que buscas no existe o ha sido movido. Pero no te preocupes, en YYCL siempre encontramos el camino.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
            <Link href="/">
              <Button variant="primary" size="md" className="font-bold w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" />
                Volver al Inicio
              </Button>
            </Link>

            <Link href="/agendar">
              <Button variant="outline" size="md" className="w-full sm:w-auto">
                <Sparkles className="w-4 h-4 mr-2 text-yycl-purple" />
                Agendar Diagnóstico
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
""")

print("Pages ES Part 2 created successfully")
