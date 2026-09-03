import React from "react";
import Image from "next/image";
import {
  Tape,
  StickerBadge,
  MarkerHighlight,
  BrushStroke,
  DoodleSpark,
  HandwrittenNote,
  YYCLLogoMark,
} from "./DesignElements";
import { Award, Calendar, Clock, Check } from "lucide-react";

// Wrapper base para Material Comercial / Interno (1080 x 1350 px exactos)
export function CommercialFrameWrapper({
  id,
  title,
  children,
  className = "bg-[#001837]",
}: {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      id={id}
      data-template-type="internal-commercial"
      className={`w-[1080px] h-[1350px] relative overflow-hidden flex flex-col justify-between p-[76px] text-white select-none ${className}`}
      style={{ boxSizing: "border-box" }}
    >
      {children}
    </div>
  );
}

// 01. Bienvenida a Nuevos Alumnos
export function TemplateInternal01Welcome() {
  return (
    <CommercialFrameWrapper
      id="internal-01-welcome"
      title="Interno 01 · Bienvenida de Alumnos"
      className="bg-[#001837] bg-notebook-dots"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="WELCOME TO YYCL 🎉" variant="yellow" rotate="2deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-7 text-center items-center relative">
        <Tape color="bg-[#FFD203]/90" rotate="-2deg" className="self-center" />
        
        <div>
          <span className="text-[20px] font-heading font-bold text-[#4DC2DA] uppercase tracking-widest block mb-1">
            Comienza tu transformación
          </span>
          <h1 className="font-heading font-black text-[64px] leading-tight text-white">
            ¡Bienvenido/a a la familia YYCL!
          </h1>
        </div>

        <div className="bg-[#FFE2C0] text-[#001837] p-8 rounded-3xl border-3 border-[#001837] shadow-[10px_10px_0px_#834296] max-w-[880px] text-left space-y-4 relative">
          <Tape className="absolute -top-3.5 right-8 w-24 h-5" color="bg-[#834296]/60" rotate="3deg" />
          <p className="font-body text-[25px] text-[#001837]/90 leading-relaxed font-medium">
            Desde hoy estás en un espacio seguro donde el error es bienvenido y hablar inglés se vuelve parte de tu rutina diaria sin miedo.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-4 border-t-2 border-[#001837]/15">
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-[#834296] stroke-[3]" />
              <span className="font-heading font-black text-[19px]">
                Profesor asignado 1-a-1
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-[#834296] stroke-[3]" />
              <span className="font-heading font-black text-[19px]">
                Club de Conversación Incluido
              </span>
            </div>
          </div>
        </div>

        <HandwrittenNote text="¡Estamos listos para verte crecer! 🚀" color="text-[#FFE2C0]" rotate="1deg" className="text-3xl" />
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-heading font-semibold text-[18px] text-[#FFE2C0]">
          Yes You Can Languages · Tu éxito es nuestro compromiso
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-6 py-2 rounded-xl font-heading font-black text-[17px]">
          Let’s Talk!
        </div>
      </div>
    </CommercialFrameWrapper>
  );
}

// 02. Workshop / Live Masterclass
export function TemplateInternal02Workshop() {
  return (
    <CommercialFrameWrapper
      id="internal-02-workshop"
      title="Interno 02 · Workshop Announcement"
      className="bg-[#834296] bg-notebook-grid"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="LIVE MASTERCLASS" variant="yellow" rotate="-3deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-7">
        <div>
          <span className="text-[18px] font-heading font-bold text-[#FFE2C0] uppercase tracking-widest block mb-1">
            Exclusivo Alumnos & Comunidad
          </span>
          <h2 className="font-heading font-black text-[56px] leading-tight text-white">
            Cómo superar el Síndrome del Impostor al hablar inglés con nativos
          </h2>
        </div>

        {/* Detalles en Collage */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#001837] p-6 rounded-2xl border border-white/20 flex items-center gap-4 shadow-lg -rotate-0.5">
            <Calendar className="w-10 h-10 text-[#FFD203]" />
            <div>
              <span className="text-xs text-white/60 font-bold uppercase">
                Fecha
              </span>
              <p className="font-heading font-bold text-[22px]">
                Jueves 28 de Septiembre
              </p>
            </div>
          </div>

          <div className="bg-[#001837] p-6 rounded-2xl border border-white/20 flex items-center gap-4 shadow-lg rotate-0.5">
            <Clock className="w-10 h-10 text-[#4DC2DA]" />
            <div>
              <span className="text-xs text-white/60 font-bold uppercase">
                Hora
              </span>
              <p className="font-heading font-bold text-[22px]">
                7:00 PM (Colombia / Perú)
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl flex items-center gap-5 border border-white/15">
          <div className="bg-white p-1.5 pb-2 rounded-lg shadow-md -rotate-2 border border-black/10">
            <div className="w-14 h-14 rounded-xs overflow-hidden relative bg-[#834296]">
              <Image
                src="/images/SRC_001_Imagen de Codex 22 ago 2026, 10_05_51 p.m..png"
                alt="Speaker"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="font-heading font-black text-[22px] text-white">
              Host: Naty Sánchez
            </p>
            <p className="font-body text-[16px] text-[#FFE2C0]">
              Directora Académica · Masterclass interactiva por Zoom
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10">
        <span className="font-heading font-semibold text-[18px] text-white">
          Enlace de acceso en el grupo de WhatsApp
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-6 py-2.5 rounded-xl font-heading font-black text-[17px]">
          Reservar Cupo
        </div>
      </div>
    </CommercialFrameWrapper>
  );
}

// 03. Matriz de Planes y Beneficios
export function TemplateInternal03Pricing() {
  return (
    <CommercialFrameWrapper
      id="internal-03-pricing"
      title="Comercial 03 · Matriz de Planes"
      className="bg-[#001837] bg-notebook-dots"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <span className="font-heading font-black text-[16px] text-[#FFD203] uppercase">
          Planes y Modalidades 2026
        </span>
      </div>

      <div className="my-auto z-10 flex flex-col gap-6">
        <div className="text-center">
          <h2 className="font-heading font-black text-[50px] leading-tight text-white">
            Elige la modalidad ideal para tu objetivo
          </h2>
        </div>

        {/* 3 Planes en Collage */}
        <div className="grid grid-cols-3 gap-4">
          {/* Grupal */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/15 flex flex-col justify-between -rotate-0.5">
            <div>
              <span className="text-xs font-bold text-[#4DC2DA] uppercase tracking-wider">
                Comunidad
              </span>
              <p className="font-heading font-black text-[26px] text-white mt-1">
                Grupal
              </p>
              <p className="font-body text-[15px] text-white/75 mt-2">
                Máx. 6 alumnos. Dinámico y participativo.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/10">
              <span className="font-heading font-bold text-[16px] text-[#FFD203]">
                Club de Conversación
              </span>
            </div>
          </div>

          {/* Dúo */}
          <div className="bg-[#FFD203] text-[#001837] p-6 rounded-2xl border-4 border-white flex flex-col justify-between shadow-2xl relative rotate-0.5">
            <div className="absolute -top-3.5 right-4 bg-[#834296] text-white text-xs font-heading font-black px-3 py-0.5 rounded-full uppercase">
              Más Popular
            </div>
            <div>
              <span className="text-xs font-bold text-[#001837] uppercase tracking-wider">
                Parejas / Amigos
              </span>
              <p className="font-heading font-black text-[26px] text-[#001837] mt-1">
                Plan Dúo
              </p>
              <p className="font-body text-[15px] text-[#001837]/85 mt-2">
                2 alumnos con 1 profesor. Ritmo personalizado y corrección en vivo.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#001837]/20">
              <span className="font-heading font-black text-[16px] text-[#001837]">
                Mayor adherencia y práctica
              </span>
            </div>
          </div>

          {/* 1 a 1 */}
          <div className="bg-white/10 p-6 rounded-2xl border border-white/15 flex flex-col justify-between -rotate-0.5">
            <div>
              <span className="text-xs font-bold text-[#CAFFFF] uppercase tracking-wider">
                Exclusivo
              </span>
              <p className="font-heading font-black text-[26px] text-white mt-1">
                1-a-1 VIP
              </p>
              <p className="font-body text-[15px] text-white/75 mt-2">
                100% personalizado para entrevistas, TOEFL o negocios.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-white/10">
              <span className="font-heading font-bold text-[16px] text-[#FFD203]">
                Horarios flexibles
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10">
        <span className="font-body text-[17px] text-white/80">
          *Planes comunicados exclusivamente en la sesión de diagnóstico
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-6 py-2.5 rounded-xl font-heading font-black text-[17px]">
          Agendar Diagnóstico →
        </div>
      </div>
    </CommercialFrameWrapper>
  );
}

// 04. Certificado de Nivel Oficial
export function TemplateInternal04Certificate() {
  return (
    <CommercialFrameWrapper
      id="internal-04-certificate"
      title="Interno 04 · Certificado de Nivel"
      className="bg-[#FBF8F2] bg-notebook-grid"
    >
      <div className="w-full h-full border-4 border-[#001837] rounded-3xl p-12 flex flex-col justify-between text-[#001837] bg-white relative shadow-2xl">
        <div className="flex items-center justify-between">
          <YYCLLogoMark variant="default" />
          <Award className="w-16 h-16 text-[#834296]" />
        </div>

        <div className="text-center my-auto flex flex-col gap-5">
          <span className="text-[19px] font-heading font-black text-[#834296] uppercase tracking-widest">
            Certificate of Achievement
          </span>

          <h2 className="font-heading font-black text-[54px] text-[#001837] leading-tight">
            Valeria Morales
          </h2>

          <p className="font-body text-[22px] text-[#001837]/85 max-w-[700px] mx-auto leading-relaxed font-medium">
            Has successfully completed the <strong>B2 Conversational Fluency Program</strong> at Yes You Can Languages, demonstrating active communication, professional vocabulary, and presentation skills.
          </p>

          <div className="flex items-center justify-center gap-10 mt-3">
            <div className="text-center">
              <div className="w-44 h-0.5 bg-[#001837] mb-2" />
              <p className="font-heading font-bold text-[17px]">Naty Sánchez</p>
              <p className="text-xs text-[#001837]/60">Academic Director</p>
            </div>
            <div className="text-center">
              <div className="w-44 h-0.5 bg-[#001837] mb-2" />
              <p className="font-heading font-bold text-[17px]">Néstor Montaño</p>
              <p className="text-xs text-[#001837]/60">General Director</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t-2 border-[#001837]/15 pt-5 text-xs text-[#001837]/60 font-mono">
          <span>YYCL LLC · Florida, USA</span>
          <span>Verified Certificate ID: YYCL-2026-8821</span>
        </div>
      </div>
    </CommercialFrameWrapper>
  );
}
