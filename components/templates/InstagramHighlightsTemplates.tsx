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
  BookOpen,
  MessageCircle,
  Flame,
} from "lucide-react";
import { YYCLStickerLogo } from "./DesignElements";

export interface HighlightItem {
  id: string;
  title: string;
  category: "conversacional" | "kids" | "empresas" | "metodologia" | "social";
  bgColor: string;
  borderColor: string;
  accentColor: string;
  iconBg: string;
  iconColor: string;
  icon: React.ReactNode;
  subtitle: string;
}

export const HIGHLIGHTS_DATA: HighlightItem[] = [
  {
    id: "hl-diagnostico",
    title: "Diagnóstico",
    subtitle: "Test 15 min gratis",
    category: "conversacional",
    bgColor: "bg-[#834296]",
    borderColor: "border-[#FFD203]",
    accentColor: "text-[#FFD203]",
    iconBg: "bg-[#FFD203]",
    iconColor: "text-[#001837]",
    icon: <CalendarCheck className="w-20 h-20" />,
  },
  {
    id: "hl-testimonios",
    title: "Resultados",
    subtitle: "+1.000 alumnos 5.0★",
    category: "conversacional",
    bgColor: "bg-[#834296]",
    borderColor: "border-[#FFE2C0]",
    accentColor: "text-[#FFE2C0]",
    iconBg: "bg-[#FFE2C0]",
    iconColor: "text-[#001837]",
    icon: <Award className="w-20 h-20" />,
  },
  {
    id: "hl-grupal",
    title: "Grupal",
    subtitle: "Club de conversación",
    category: "conversacional",
    bgColor: "bg-[#834296]",
    borderColor: "border-[#FFD203]",
    accentColor: "text-[#FFD203]",
    iconBg: "bg-[#FFD203]",
    iconColor: "text-[#001837]",
    icon: <Users className="w-20 h-20" />,
  },
  {
    id: "hl-personalizado",
    title: "1 a 1 VIP",
    subtitle: "Docente exclusivo",
    category: "conversacional",
    bgColor: "bg-[#834296]",
    borderColor: "border-[#FFD203]",
    accentColor: "text-[#FFD203]",
    iconBg: "bg-[#FFD203]",
    iconColor: "text-[#001837]",
    icon: <UserCheck className="w-20 h-20" />,
  },
  {
    id: "hl-kids",
    title: "Kids & Teens",
    subtitle: "Acento Cyan lúdico",
    category: "kids",
    bgColor: "bg-[#834296]",
    borderColor: "border-[#4DC2DA]",
    accentColor: "text-[#4DC2DA]",
    iconBg: "bg-[#4DC2DA]",
    iconColor: "text-[#001837]",
    icon: <Smile className="w-20 h-20" />,
  },
  {
    id: "hl-empresas",
    title: "Empresas",
    subtitle: "Capacitación B2B",
    category: "empresas",
    bgColor: "bg-[#001837]",
    borderColor: "border-[#FFD203]",
    accentColor: "text-[#4DC2DA]",
    iconBg: "bg-[#001837]",
    iconColor: "text-[#FFD203]",
    icon: <Building2 className="w-20 h-20" />,
  },
  {
    id: "hl-profesores",
    title: "Profesores",
    subtitle: "Equipo docente",
    category: "metodologia",
    bgColor: "bg-[#834296]",
    borderColor: "border-[#FFD203]",
    accentColor: "text-[#FFE2C0]",
    iconBg: "bg-[#FFE2C0]",
    iconColor: "text-[#834296]",
    icon: <Sparkles className="w-20 h-20" />,
  },
  {
    id: "hl-miniclases",
    title: "Mini Clases",
    subtitle: "Tips & pronunciación",
    category: "conversacional",
    bgColor: "bg-[#834296]",
    borderColor: "border-[#FFD203]",
    accentColor: "text-[#FFD203]",
    iconBg: "bg-[#FFD203]",
    iconColor: "text-[#001837]",
    icon: <PlayCircle className="w-20 h-20" />,
  },
  {
    id: "hl-faqs",
    title: "Preguntas",
    subtitle: "Precios y método",
    category: "metodologia",
    bgColor: "bg-[#834296]",
    borderColor: "border-[#4DC2DA]",
    accentColor: "text-[#4DC2DA]",
    iconBg: "bg-[#4DC2DA]",
    iconColor: "text-[#001837]",
    icon: <HelpCircle className="w-20 h-20" />,
  },
];

// Portada individual de Historia Destacada (1080 x 1920 px para subir a Instagram Story)
export function HighlightStoryCover({ item }: { item: HighlightItem }) {
  return (
    <div
      id={item.id}
      data-template-type="highlight-cover"
      className={`w-[1080px] h-[1920px] relative overflow-hidden flex flex-col items-center justify-between p-[96px] text-white select-none ${item.bgColor}`}
      style={{ boxSizing: "border-box" }}
    >
      {/* Header sutil */}
      <div className="z-10 opacity-70">
        <span className="font-heading font-bold text-[24px] uppercase tracking-widest text-white/80">
          Yes You Can Languages
        </span>
      </div>

      {/* Centro: El Círculo del Destacado con guía de recorte circular de Instagram */}
      <div className="my-auto z-10 flex flex-col items-center text-center gap-8">
        <div className="relative">
          {/* Círculo Principal con Relieve de Sticker Oficial */}
          <div
            className={`w-[440px] h-[440px] rounded-full border-8 ${item.borderColor} ${item.iconBg} ${item.iconColor} flex items-center justify-center shadow-[0_20px_40px_rgba(0,0,0,0.35)] relative`}
          >
            {/* Esquina doblada tipo Sticker oficial en el círculo */}
            <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-full pointer-events-none">
              <div className="w-28 h-28 bg-[#FFE2C0] shadow-md -rotate-45 translate-x-10 -translate-y-10 border-b border-black/10" />
            </div>

            <div className="scale-[1.8] flex items-center justify-center">
              {item.icon}
            </div>
          </div>
        </div>

        {/* Etiqueta del Destacado */}
        <div>
          <h2 className="font-heading font-black text-[64px] leading-tight text-white tracking-tight">
            {item.title}
          </h2>
          <p className={`font-body text-[28px] font-medium mt-1 ${item.accentColor}`}>
            {item.subtitle}
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="z-10 border-t border-white/20 pt-6 w-full text-center">
        <span className="font-heading font-black text-[22px] text-[#FFD203]">
          @yyclanguages
        </span>
      </div>
    </div>
  );
}

// Visualizador de la barra de Destacados de Instagram (Simulador de Perfil)
export function HighlightsProfileBar() {
  return (
    <div className="w-full bg-[#001837] border-3 border-white/20 rounded-3xl p-8 text-white shadow-2xl space-y-6">
      <div className="flex items-center justify-between border-b border-white/15 pb-5">
        <div>
          <h3 className="font-heading font-black text-2xl text-white">
            Propuesta de Historias Destacadas · YYCL 2026
          </h3>
          <p className="font-body text-sm text-white/70">
            Iconografía oficial con código semántico de color (Amarillo, Cyan, Navy, Violeta y Crema)
          </p>
        </div>
        <YYCLStickerLogo size={60} />
      </div>

      {/* Barra deslizable horizontal simulando Instagram */}
      <div className="flex items-center gap-6 overflow-x-auto pb-4 pt-2 no-scrollbar">
        {HIGHLIGHTS_DATA.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center gap-2.5 shrink-0 group cursor-pointer"
          >
            {/* Círculo con borde semántico */}
            <div
              className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full p-1 border-3 ${item.borderColor} bg-[#834296] shadow-md flex items-center justify-center transition-transform group-hover:scale-105`}
            >
              <div
                className={`w-full h-full rounded-full ${item.iconBg} ${item.iconColor} flex items-center justify-center relative overflow-hidden`}
              >
                {/* Micro esquina doblada */}
                <div className="absolute top-0 right-0 w-6 h-6 overflow-hidden rounded-tr-full pointer-events-none">
                  <div className="w-7 h-7 bg-[#FFE2C0] shadow-xs -rotate-45 translate-x-2.5 -translate-y-2.5" />
                </div>
                <div className="scale-75 sm:scale-90 flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
            </div>

            {/* Texto del Destacado */}
            <span className="font-heading font-bold text-xs sm:text-sm text-white text-center tracking-tight max-w-[90px] truncate">
              {item.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
