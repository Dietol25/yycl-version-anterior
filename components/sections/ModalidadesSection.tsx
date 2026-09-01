import React from 'react';
import Link from 'next/link';
import { Check, Users, User, UserPlus } from 'lucide-react';

export const ModalidadesSection = () => {
  const modalidades = [
    {
      title: 'Grupal',
      badge: 'Aprendizaje Dinámico',
      badgeColor: 'bg-purple-100 text-[#834296] border-[#834296]/30',
      icon: <Users className="w-5 h-5 text-[#834296]" />,
      accentColor: '#834296',
      subtitle: 'Aprendizaje en conjunto y ritmo compartido.',
      features: [
        'Máximo 8 alumnos por grupo',
        'Clases en vivo 100% conversacionales',
        'Profesores nativos y bilingües certificados'
      ]
    },
    {
      title: 'Personalizada',
      badge: 'Más Popular · 1 a 1',
      badgeColor: 'bg-amber-100 text-[#EC9519] border-[#EC9519]/30',
      icon: <User className="w-5 h-5 text-[#EC9519]" />,
      accentColor: '#EC9519',
      subtitle: 'Atención total a tu ritmo y metas individuales.',
      features: [
        'Clases exclusivas uno a uno',
        'Enfocadas a tus objetivos (empleo, viajes, exámenes)',
        'Horarios flexibles a tu elección'
      ]
    },
    {
      title: 'Dúo, en pareja',
      badge: 'Comparte y Ahorra',
      badgeColor: 'bg-cyan-100 text-[#001837] border-[#4DC2DA]/40',
      icon: <UserPlus className="w-5 h-5 text-[#4DC2DA]" />,
      accentColor: '#4DC2DA',
      subtitle: 'Aprende con un amigo, colega o pareja.',
      features: [
        'Clases para dos alumnos con el mismo nivel',
        'Cada uno paga menos que en Personalizada',
        'Programa personalizado a su objetivo conjunto'
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
            <span>Formatos de Estudio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
            Nuestras Modalidades
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            3 formas de aprender: grupal, personalizada o en dúo. El plan ideal lo definimos en tu entrevista gratuita.
          </p>
        </div>

        {/* 3 Clean Editorial Cards (Zero gradient clash, Pure Design System) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {modalidades.map((mod, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#001837] shadow-[4px_4px_0px_#001837] space-y-5 hover:-translate-y-1.5 transition-all duration-200 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Header Badge + Icon */}
                <div className="flex items-center justify-between">
                  <span className={`inline-block text-[11px] font-heading font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${mod.badgeColor}`}>
                    {mod.badge}
                  </span>
                  <div className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center">
                    {mod.icon}
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-extrabold font-heading text-[#001837] tracking-tight">
                    {mod.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-slate-600 font-medium mt-1 leading-relaxed">
                    {mod.subtitle}
                  </p>
                </div>

                <ul className="space-y-3 pt-2">
                  {mod.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 shrink-0 mt-0.5 stroke-[2.5]" style={{ color: mod.accentColor }} />
                      <span className="text-xs sm:text-sm text-slate-700 font-body-regular leading-snug">
                        {feat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <Link
                  href="/agendar"
                  className="block text-center font-heading font-bold text-xs sm:text-sm text-[#3C4C92] hover:text-[#001837] hover:underline"
                >
                  Consultar disponibilidad en {mod.title} →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="text-center pt-10">
          <Link
            href="/planes"
            className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#3C4C92] hover:text-[#001837] hover:bg-purple-50/70 px-5 py-2.5 rounded-full transition-all"
          >
            <span>Ver todos los planes y precios detallados</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
