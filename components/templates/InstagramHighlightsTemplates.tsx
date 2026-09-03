import React from "react";
import {
  Users,
  UserCheck,
  Award,
  Sparkles,
  Building2,
  Smile,
  HelpCircle,
  PlayCircle,
  CalendarCheck,
} from "lucide-react";
import { YYCLStickerLogo } from "./DesignElements";

export interface HighlightItem {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export const HIGHLIGHTS_DATA: HighlightItem[] = [
  {
    id: "hl-diagnostico",
    title: "Diagnóstico",
    subtitle: "Test 15 min gratis",
    icon: <CalendarCheck className="w-16 h-16 sm:w-20 sm:h-20" />,
  },
  {
    id: "hl-testimonios",
    title: "Resultados",
    subtitle: "+1.000 alumnos 5.0★",
    icon: <Award className="w-16 h-16 sm:w-20 sm:h-20" />,
  },
  {
    id: "hl-grupal",
    title: "Grupal",
    subtitle: "Club de conversación",
    icon: <Users className="w-16 h-16 sm:w-20 sm:h-20" />,
  },
  {
    id: "hl-personalizado",
    title: "1 a 1 VIP",
    subtitle: "Docente exclusivo",
    icon: <UserCheck className="w-16 h-16 sm:w-20 sm:h-20" />,
  },
  {
    id: "hl-kids",
    title: "Kids & Teens",
    subtitle: "Inglés lúdico",
    icon: <Smile className="w-16 h-16 sm:w-20 sm:h-20" />,
  },
  {
    id: "hl-empresas",
    title: "Empresas",
    subtitle: "Capacitación B2B",
    icon: <Building2 className="w-16 h-16 sm:w-20 sm:h-20" />,
  },
  {
    id: "hl-profesores",
    title: "Profesores",
    subtitle: "Equipo docente",
    icon: <Sparkles className="w-16 h-16 sm:w-20 sm:h-20" />,
  },
  {
    id: "hl-miniclases",
    title: "Mini Clases",
    subtitle: "Tips & fluidez",
    icon: <PlayCircle className="w-16 h-16 sm:w-20 sm:h-20" />,
  },
  {
    id: "hl-faqs",
    title: "Preguntas",
    subtitle: "Precios y método",
    icon: <HelpCircle className="w-16 h-16 sm:w-20 sm:h-20" />,
  },
];

// Portada individual de Historia Destacada (1080 x 1920 px para subir a Instagram Story)
export function HighlightStoryCover({ item }: { item: HighlightItem }) {
  return (
    <div
      id={item.id}
      data-template-type="highlight-cover"
      className="w-[1080px] h-[1920px] relative overflow-hidden flex flex-col items-center justify-between p-[96px] bg-[#834296] text-white select-none"
      style={{ boxSizing: "border-box" }}
    >
      {/* Header sutil */}
      <div className="z-10">
        <span className="font-heading font-extrabold text-[26px] uppercase tracking-widest text-[#FFE2C0]">
          Yes You Can Languages
        </span>
      </div>

      {/* Centro: Círculo Limpio Oficial de Instagram Highlights (Sin sombrerito, 100% coherente) */}
      <div className="my-auto z-10 flex flex-col items-center text-center gap-10">
        {/* Círculo Principal: Fondo Amarillo con icono Navy y aro exterior blanco */}
        <div className="w-[480px] h-[480px] rounded-full p-4 border-8 border-white/90 bg-[#834296] shadow-[0_24px_48px_rgba(0,0,0,0.35)] flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-[#FFD203] text-[#001837] flex items-center justify-center shadow-inner">
            <div className="scale-[2.4] flex items-center justify-center">
              {item.icon}
            </div>
          </div>
        </div>

        {/* Etiqueta del Destacado */}
        <div className="space-y-2">
          <h2 className="font-heading font-black text-[72px] leading-tight text-white tracking-tight">
            {item.title}
          </h2>
          <p className="font-body text-[32px] font-medium text-[#FFE2C0]">
            {item.subtitle}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="z-10 border-t border-white/25 pt-6 w-full text-center">
        <span className="font-heading font-black text-[24px] text-[#FFD203]">
          @yyclanguages
        </span>
      </div>
    </div>
  );
}

// Visualizador de la barra de Destacados de Instagram (Simulador de Perfil)
export function HighlightsProfileBar() {
  return (
    <div className="w-full bg-white border-2 border-slate-200 rounded-3xl p-8 text-[#001837] shadow-xl space-y-6">
      <div className="flex items-center justify-between border-b border-slate-100 pb-5">
        <div>
          <h3 className="font-heading font-black text-2xl text-[#001837]">
            Propuesta de Historias Destacadas · YYCL 2026
          </h3>
          <p className="font-body text-sm text-slate-600">
            Iconografía 100% coherente: Base Violeta `#834296` + Icono en Amarillo `#FFD203` (limpio y uniforme)
          </p>
        </div>
        <YYCLStickerLogo size={64} />
      </div>

      {/* Barra deslizable horizontal simulando Instagram */}
      <div className="flex items-center gap-6 overflow-x-auto pb-4 pt-2 no-scrollbar">
        {HIGHLIGHTS_DATA.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-2.5 shrink-0 group cursor-pointer"
          >
            {/* Círculo limpio con aro blanco y fondo amarillo */}
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 border-3 border-[#834296] bg-white shadow-md flex items-center justify-center transition-transform group-hover:scale-105">
              <div className="w-full h-full rounded-full bg-[#FFD203] text-[#001837] flex items-center justify-center shadow-xs">
                <div className="scale-75 sm:scale-90 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
            </div>

            {/* Texto del Destacado */}
            <span className="font-heading font-bold text-xs sm:text-sm text-[#001837] text-center tracking-tight max-w-[90px] truncate">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
