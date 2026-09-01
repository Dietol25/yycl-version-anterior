import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

export const ModalidadesSection = () => {
  const modalidades = [
    {
      title: 'Grupal',
      subtitle: 'Aprendizaje en conjunto y ritmo compartido.',
      features: [
        'Máximo 8 alumnos',
        'Clases en vivo',
        'Profesores con años de experiencia'
      ]
    },
    {
      title: 'Personalizada',
      subtitle: 'Atención total a tu progreso individual.',
      features: [
        'Clases uno a uno',
        'Clases enfocadas a tu objetivo',
        'Horario a tu elección'
      ]
    },
    {
      title: 'Duo, en pareja',
      subtitle: 'Aprende con un compañero de tu nivel.',
      features: [
        'Clases para dos',
        'Cada uno paga menos que en Personalizada individual',
        'Clases enfocadas a tu objetivo'
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy tracking-tight">
            Modalidades
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            3 modalidades: grupal, personalizada o en dúo. El precio lo hablamos en tu entrevista gratuita.
          </p>
        </div>

        {/* 3 Gradient Modalidad Cards (No CTA buttons, exact copy from Figma) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {modalidades.map((mod, idx) => (
            <div
              key={idx}
              className="bg-[linear-gradient(116deg,#EC9519_0%,#A84988_30%,#834296_65%,#834296_100%)] text-white rounded-3xl p-7 sm:p-8 border-2 border-[#001837] shadow-[4px_4px_0px_#001837] space-y-4 hover:-translate-y-1 transition-all duration-200"
            >
              <div>
                <h3 className="text-2xl font-extrabold font-heading text-white tracking-tight">
                  {mod.title}
                </h3>
                <p className="text-xs sm:text-[13px] text-white/90 font-medium mt-1 leading-relaxed">
                  {mod.subtitle}
                </p>
              </div>

              <ul className="space-y-3 pt-3">
                {mod.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#4DC2DA] shrink-0 mt-0.5 stroke-[2.5]" />
                    <span className="text-xs sm:text-sm text-white font-body-regular leading-snug">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Link */}
        <div className="text-center pt-10">
          <Link
            href="/planes"
            className="inline-flex items-center gap-1.5 font-heading font-bold text-sm text-yycl-navy hover:underline"
          >
            <span>Ver todos los planes</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
