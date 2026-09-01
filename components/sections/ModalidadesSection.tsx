import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';

export const ModalidadesSection = () => {
  const modalidades = [
    {
      id: 'grupal',
      title: 'Grupal',
      badge: 'GRUPAL',
      badgeColor: 'bg-purple-100 text-[#834296] border-[#834296]/30',
      accentColor: '#834296',
      subtitle: 'Aprende junto a otros, con la energía de un grupo pequeño.',
      features: [
        'Máximo 8 alumnos',
        'Clases en vivo',
        'Profesores con años de experiencia'
      ]
    },
    {
      id: 'personalizada',
      title: 'Personalizada',
      badge: 'PERSONALIZADA',
      badgeColor: 'bg-amber-100 text-[#EC9519] border-[#EC9519]/30',
      accentColor: '#EC9519',
      subtitle: 'Un profesor, un plan, hecho para ti.',
      features: [
        'Clases uno a uno',
        'Clases enfocadas a tu objetivo',
        'Horario a tu elección'
      ]
    },
    {
      id: 'duo',
      title: 'Dúo',
      badge: 'DÚO',
      badgeColor: 'bg-cyan-100 text-[#001837] border-[#4DC2DA]/40',
      accentColor: '#4DC2DA',
      subtitle: 'Mismo profesor exclusivo, mismo plan a medida, compartido con alguien que va por lo mismo que tú.',
      features: [
        'Clases para dos',
        'Ritmo en pareja',
        'Cada uno paga menos que en Personalizada individual',
        'Clases enfocadas a tu objetivo'
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-24 bg-gradient-to-b from-[#FDF8F3] via-white to-[#FDF8F3] border-t border-slate-100">
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
            Tres modalidades, un mismo método. El plan ideal lo definimos en tu entrevista gratuita.
          </p>
        </div>

        {/* 3 Editorial White Cards (Sin enlaces globales en toda la tarjeta) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {modalidades.map((mod) => (
            <div
              key={mod.id}
              className="bg-white rounded-3xl p-7 sm:p-8 border-2 border-[#001837] shadow-[5px_5px_0px_#001837] flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Badge Oficial */}
                <div>
                  <span className={`inline-block text-[11px] font-heading font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full border ${mod.badgeColor}`}>
                    {mod.badge}
                  </span>
                </div>

                {/* Titular & Subtítulo */}
                <div className="space-y-1">
                  <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#001837] tracking-tight">
                    {mod.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium leading-relaxed">
                    {mod.subtitle}
                  </p>
                </div>

                {/* Lista de Features */}
                <ul className="space-y-3 pt-3">
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

              {/* Ghost Link exclusivo que lleva a Cómo Funciona */}
              <div className="pt-5 border-t border-slate-100 mt-6">
                <Link
                  href="/como-funciona"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold text-[#3C4C92] hover:text-[#001837] hover:underline"
                >
                  <span>Más información</span>
                  <span>→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
