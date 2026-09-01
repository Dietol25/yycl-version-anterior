import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

write_file('components/sections/HeroSection.tsx', """import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Play, Star } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-yycl-navy via-yycl-navy-light to-yycl-navy py-16 lg:py-24 text-white">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-yycl-purple/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 right-10 w-80 h-80 bg-yycl-yellow/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold text-slate-200">
              <span className="flex items-center text-amber-300">
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                <Star className="w-3.5 h-3.5 fill-amber-300" />
                <Star className="w-3.5 h-3.5 fill-amber-300" />
              </span>
              <span>4.9/5 por más de 1,200 profesionales en LATAM</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.15]">
              Pierde el <span className="text-transparent bg-clip-text bg-gradient-to-r from-yycl-yellow via-amber-300 to-yycl-yellow">miedo</span> a hablar inglés.
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              ¿Te quedas en blanco en reuniones de trabajo o entrevistas? En <strong className="text-white">Yes You Can Languages (YYCL)</strong> no estudias reglas gramaticales interminables: <span className="text-yycl-yellow font-semibold">hablas desde el minuto 1</span> con coaches nativos y bilingües.
            </p>

            <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start pt-2">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="lg"
                  className="font-extrabold w-full sm:w-auto shadow-yycl-yellow hover:scale-[1.02]"
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                >
                  Agendar Mi Diagnóstico Gratis
                </Button>
              </Link>

              <Link href="/como-funciona">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
                  leftIcon={<Play className="w-4 h-4 fill-white text-white" />}
                >
                  Ver Cómo Funciona
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-xs sm:text-sm text-slate-300 border-t border-white/10">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-yycl-yellow shrink-0" />
                <span>100% En Vivo Online</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-yycl-cyan shrink-0" />
                <span>Sin contratos forzosos</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Horarios Flexibles</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md bg-white rounded-3xl p-4 shadow-2xl border-4 border-white/20 overflow-hidden">
              <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                  alt="Clase de inglés personalizada YYCL"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-yycl-navy/80 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  EN VIVO · 1-a-1
                </div>

                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/50 text-left">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="font-bold text-yycl-navy">Coach Sarah J. (USA)</span>
                    <span className="text-[10px] text-yycl-purple font-semibold">Sesión de Fluidez</span>
                  </div>
                  <p className="text-[11px] text-slate-600 line-clamp-1 italic">
                    "Excelente pronunciación en el pitch de ventas, Santiago. Vamos a pulir los conectores."
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-3 text-center">
                <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="block text-lg font-extrabold font-heading text-yycl-navy">+1,000</span>
                  <span className="block text-[11px] text-slate-500 font-medium">Alumnos Graduados</span>
                </div>
                <div className="bg-amber-50 p-2.5 rounded-xl border border-amber-100">
                  <span className="block text-lg font-extrabold font-heading text-yycl-purple">98%</span>
                  <span className="block text-[11px] text-slate-600 font-medium">Recomiendan YYCL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
""")

write_file('components/sections/MethodSection.tsx', """import React from 'react';
import { MessageSquare, ShieldCheck, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export const MethodSection = () => {
  const steps = [
    {
      num: '01',
      title: 'Hablas desde el minuto 1',
      desc: 'Basta de escuchar monólogos. En YYCL tú tienes el 70% del tiempo de habla en cada clase con roleplays de la vida real.',
      icon: <MessageSquare className="w-6 h-6 text-yycl-yellow" />
    },
    {
      num: '02',
      title: 'Corrección fonética y mental',
      desc: 'Te enseñamos los trucos para dejar de traducir palabra por palabra en tu mente y cómo modular tu aparato fonador en inglés.',
      icon: <Zap className="w-6 h-6 text-yycl-purple" />
    },
    {
      num: '03',
      title: 'Prácticas hasta que sale natural',
      desc: 'Simulamos reuniones de trabajo, presentaciones a directivos y entrevistas laborales hasta que tu respuesta sea automática e intuitiva.',
      icon: <ShieldCheck className="w-6 h-6 text-yycl-cyan" />
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-yycl-purple mb-2 block">
            Nuestra Metodología
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy tracking-tight">
            Aprende a hablar, no solo a estudiar reglas.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-3">
            El método conversacional directo creado para profesionales que necesitan resultados tangibles en meses, no en años.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-yycl-neutral hover:shadow-yycl-hover transition-all duration-300 relative group"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-yycl-navy flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
                  {s.icon}
                </div>
                <span className="text-4xl font-extrabold font-heading text-slate-200">
                  {s.num}
                </span>
              </div>

              <h3 className="text-xl font-bold font-heading text-yycl-navy mb-3">
                {s.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/como-funciona">
            <Button variant="secondary" size="md" className="font-bold">
              Conoce todos los detalles del método
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
""")
print("Sections Part 1 done")
