import React from 'react';
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
