"use client";

import React from 'react';
import { Star, ShieldCheck, Users, CheckCircle } from 'lucide-react';

export const PreviewSquarespaceLoop = () => {
  const col1 = [
    {
      title: "Clases Grupales en Vivo",
      tag: "Máx. 8 alumnos",
      tagColor: "bg-[#834296] text-white",
      image: "/assets/02_COMO_FUNCIONA/YYCL_03_MODALIDAD_GRUPAL.png",
      desc: "Debates y role-plays donde todos hablan",
    },
    {
      title: "Natty Sánchez",
      tag: "Dirección de Estudios",
      tagColor: "bg-[#EC9519] text-white",
      image: "/assets/profesores/natty-sanchez.png",
      desc: "Evaluación diagnóstica oral 1-a-1",
    },
    {
      title: "Modalidad Dúo",
      tag: "Ahorra hasta 30%",
      tagColor: "bg-[#4DC2DA] text-[#001837]",
      image: "/assets/02_COMO_FUNCIONA/YYCL_05_MODALIDAD_DUO.png",
      desc: "Estudia con tu pareja o amigo",
    },
    {
      title: "José Funes",
      tag: "Docente Destacado",
      tagColor: "bg-[#001837] text-white",
      image: "/assets/profesores/jose-funes.png",
      desc: "«Jose is THE GOAT» - Reseña Google 5.0★",
    },
  ];

  const col2 = [
    {
      title: "1-a-1 Personalizada",
      tag: "Tu propio ritmo",
      tagColor: "bg-[#EC9519] text-white",
      image: "/assets/02_COMO_FUNCIONA/YYCL_04_MODALIDAD_PERSONALIZADA.png",
      desc: "Horarios flexibles para profesionales",
    },
    {
      title: "Carolina Correal",
      tag: "Coordinación Operativa",
      tagColor: "bg-[#834296] text-white",
      image: "/assets/profesores/carolina-correal.png",
      desc: "Acompañamiento en cada paso",
    },
    {
      title: "Club de Conversación",
      tag: "Fines de semana",
      tagColor: "bg-[#16A34A] text-white",
      image: "/assets/02_COMO_FUNCIONA/YYCL_08_PLATAFORMA_VIDEO_THUMB.png",
      desc: "Práctica con invitados internacionales",
    },
    {
      title: "Ana Belén Ochoa",
      tag: "Docente de Inglés",
      tagColor: "bg-[#001837] text-white",
      image: "/assets/profesores/ana-belen-ochoa.png",
      desc: "Enfoque sin juicios ni estrés",
    },
  ];

  return (
    <div className="relative h-[480px] sm:h-[540px] w-full overflow-hidden rounded-3xl p-2 select-none">
      {/* Top & Bottom Gradient Fade Out Mask */}
      <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-[#FDF8F3] to-transparent z-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#FDF8F3] to-transparent z-20 pointer-events-none" />

      {/* Two Scrolling Columns (Squarespace Style) */}
      <div className="grid grid-cols-2 gap-3.5 h-full">
        
        {/* Columna 1 (Sube) */}
        <div className="animate-marquee-up flex flex-col gap-3.5">
          {[...col1, ...col1].map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-3 border-2 border-[#001837] shadow-[3px_3px_0px_#001837] space-y-2 shrink-0 transition-transform hover:scale-[1.02]"
            >
              <div className="h-28 sm:h-32 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-1">
                  <span className={`text-[9px] font-heading font-black px-2 py-0.5 rounded-md ${card.tagColor}`}>
                    {card.tag}
                  </span>
                </div>
                <h4 className="font-heading font-extrabold text-xs text-[#001837] truncate">
                  {card.title}
                </h4>
                <p className="text-[10px] text-slate-500 font-body-regular line-clamp-1">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Columna 2 (Baja) */}
        <div className="animate-marquee-down flex flex-col gap-3.5">
          {[...col2, ...col2].map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-3 border-2 border-[#001837] shadow-[3px_3px_0px_#001837] space-y-2 shrink-0 transition-transform hover:scale-[1.02]"
            >
              <div className="h-28 sm:h-32 rounded-xl overflow-hidden bg-slate-50 border border-slate-100 flex items-center justify-center p-2">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="space-y-1">
                <div className="flex items-center justify-between gap-1">
                  <span className={`text-[9px] font-heading font-black px-2 py-0.5 rounded-md ${card.tagColor}`}>
                    {card.tag}
                  </span>
                </div>
                <h4 className="font-heading font-extrabold text-xs text-[#001837] truncate">
                  {card.title}
                </h4>
                <p className="text-[10px] text-slate-500 font-body-regular line-clamp-1">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
