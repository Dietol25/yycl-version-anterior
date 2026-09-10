"use client";

import React from 'react';
import Link from 'next/link';
import { Check, Users, User, UserPlus } from 'lucide-react';

// Icono de 3 personas para modalidad Grupal (idéntico a la referencia gráfica)
const Group3UsersIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    {/* Persona Izquierda */}
    <circle cx="5.5" cy="9.5" r="2.5" />
    <path d="M1 21c0-2.8 2.2-4.8 5.2-4.8" />
    {/* Persona Derecha */}
    <circle cx="18.5" cy="9.5" r="2.5" />
    <path d="M17.8 16.2c3 0 5.2 2 5.2 4.8" />
    {/* Persona Centro (al frente) */}
    <circle cx="12" cy="7" r="3.2" />
    <path d="M6 21a6 6 0 0 1 12 0" />
  </svg>
);

export const ModalidadesSection = () => {
  const modalidades = [
    {
      id: 'personalizada',
      badge: 'PERSONALIZADA',
      commercialName: 'FLEX',
      icon: User,
      description: (
        <>
          Un profesor, un plan.<br className="hidden sm:inline" /> Hecho para ti.
        </>
      ),
      ctaText: 'Ver Personalizada'
    },
    {
      id: 'duo',
      badge: 'DÚO',
      commercialName: 'FUSION',
      icon: Users,
      description: 'Dos personas, un mismo profesor y un plan compartido.',
      microcopy: '¿Tienes a alguien con quien quieras practicar? Empiecen juntos.',
      ctaText: 'Ver Dúo'
    },
    {
      id: 'grupal',
      badge: 'GRUPAL',
      commercialName: 'CONNECTION',
      icon: Group3UsersIcon,
      description: 'Aprende junto a otros, con la energía de un grupo pequeño.',
      ctaText: 'Ver Grupal'
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

        {/* 3 Modality Cards Simplificadas (Home: Descubrir / Planes: Comparar) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          {modalidades.map((mod) => {
            const IconComponent = mod.icon;
            return (
              <div
                key={mod.id}
                className="bg-gradient-to-b from-[#F58220] via-[#853D94] to-[#4A154B] rounded-3xl p-7 sm:p-8 border border-black/10 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group shadow-md"
              >
                <div className="space-y-4">
                  {/* Top Header Row: White Badge + White Circular Icon */}
                  <div className="flex items-center justify-between">
                    <span className="inline-block text-[11px] font-heading font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white text-[#834296] shadow-xs">
                      {mod.badge}
                    </span>

                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#834296] shadow-xs group-hover:scale-105 transition-transform duration-300">
                      <IconComponent className="w-5 h-5 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Titular (H2 con Nombre Comercial en Blanco de Alto Contraste) & Descripción Breve */}
                  <div className="space-y-2 pt-1">
                    <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-white tracking-tight leading-tight">
                      {mod.commercialName}
                    </h2>
                    <p className="text-sm text-white/95 font-medium leading-relaxed pt-0.5">
                      {mod.description}
                    </p>
                  </div>

                  {/* Microcopy estratégico solo en Dúo */}
                  {mod.microcopy && (
                    <p className="text-xs text-[#FFD203] font-heading font-bold leading-snug pt-3 border-t border-white/20">
                      {mod.microcopy}
                    </p>
                  )}
                </div>

                {/* In-Card Exploration Link */}
                <div className="pt-6 border-t border-white/20 mt-8">
                  <Link
                    href={`/planes#${mod.id}`}
                    className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-heading font-bold text-white hover:underline transition-colors"
                  >
                    <span>{mod.ctaText}</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
