import React from "react";
import {
  BrandHeader,
  BrandFooter,
  UserAvatar,
  MarkerHighlight,
  YYCLStickerLogo,
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
      className={`w-[1080px] h-[1350px] relative overflow-hidden flex flex-col justify-between p-[84px] text-white select-none ${className}`}
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
      className="bg-[#001837]"
    >
      <BrandHeader badge="WELCOME TO YYCL 🎉" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-7 text-center items-center">
        <div>
          <span className="text-[18px] font-heading font-bold text-[#4DC2DA] uppercase tracking-widest block mb-1">
            Comienza tu proceso
          </span>
          <h1 className="font-heading font-black text-[64px] leading-tight text-white">
            ¡Bienvenido/a a la familia YYCL!
          </h1>
        </div>

        <div className="bg-[#834296] text-white p-8 rounded-3xl border border-white/20 shadow-[6px_6px_0px_#001837] max-w-[880px] text-left space-y-4">
          <p className="font-body text-[24px] text-white/95 leading-relaxed font-medium">
            Desde hoy estás en un espacio seguro donde el error es bienvenido y hablar inglés se vuelve parte natural de tu rutina.
          </p>
          <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/20">
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-[#FFD203] stroke-[3]" />
              <span className="font-heading font-bold text-[18px]">
                Profesor asignado 1-a-1
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Check className="w-6 h-6 text-[#FFD203] stroke-[3]" />
              <span className="font-heading font-bold text-[18px]">
                Club de Conversación incluido
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-7 z-10 w-full text-white/75">
        <span className="font-body text-[17px]">
          Yes You Can Languages · Tu meta es nuestro compromiso
        </span>
        <span className="font-heading font-bold text-[18px] text-[#FFD203]">
          Let’s Talk!
        </span>
      </div>
    </CommercialFrameWrapper>
  );
}

// 02. Workshop / Masterclass
export function TemplateInternal02Workshop() {
  return (
    <CommercialFrameWrapper
      id="internal-02-workshop"
      title="Interno 02 · Workshop Announcement"
      className="bg-[#001837]"
    >
      <BrandHeader badge="LIVE MASTERCLASS" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-7">
        <div>
          <span className="text-[18px] font-heading font-bold text-[#4DC2DA] uppercase tracking-widest block mb-1">
            Exclusivo Comunidad YYCL
          </span>
          <h2 className="font-heading font-black text-[56px] leading-tight text-white">
            Cómo superar el Síndrome del Impostor al hablar inglés en el trabajo
          </h2>
        </div>

        {/* Detalles Limpios */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/10 p-6 rounded-2xl border border-white/15 flex items-center gap-4">
            <Calendar className="w-9 h-9 text-[#FFD203]" />
            <div>
              <span className="text-xs text-white/60 font-bold uppercase">
                Fecha
              </span>
              <p className="font-heading font-bold text-[22px]">
                Jueves 28 de Septiembre
              </p>
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-white/15 flex items-center gap-4">
            <Clock className="w-9 h-9 text-[#4DC2DA]" />
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

        <div className="bg-[#834296] p-6 rounded-2xl flex items-center gap-5 border border-white/20">
          <UserAvatar
            src="/images/SRC_001_Imagen de Codex 22 ago 2026, 10_05_51 p.m..png"
            alt="Naty Sánchez"
            name="Host: Naty Sánchez"
            role="Directora Académica · Sesión interactiva por Zoom"
            size={64}
            borderColor="border-[#FFD203]"
          />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-7 z-10 w-full">
        <span className="font-heading font-semibold text-[17px] text-white">
          Enlace disponible en la comunidad de WhatsApp
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-6 py-2.5 rounded-xl font-heading font-black text-[16px]">
          Reservar Cupo
        </div>
      </div>
    </CommercialFrameWrapper>
  );
}

// 03. Matriz de Modalidades (Fiel a la web)
export function TemplateInternal03Pricing() {
  return (
    <CommercialFrameWrapper
      id="internal-03-pricing"
      title="Comercial 03 · Matriz de Planes"
      className="bg-[#001837]"
    >
      <BrandHeader badge="MODALIDADES 2026" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-6">
        <div className="text-center">
          <h2 className="font-heading font-black text-[50px] leading-tight text-white">
            Elige la modalidad ideal para tu objetivo
          </h2>
        </div>

        {/* 3 Planes Limpios tipo Web */}
        <div className="grid grid-cols-3 gap-4">
          {/* Grupal */}
          <div className="bg-white text-[#001837] p-6 rounded-2xl border border-black/10 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-bold text-[#834296] uppercase tracking-wider">
                Comunidad
              </span>
              <p className="font-heading font-black text-[26px] mt-1">
                Grupal
              </p>
              <p className="font-body text-[15px] text-slate-600 mt-1.5">
                Máx. 8 alumnos. Dinámico y participativo.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-200">
              <span className="font-heading font-bold text-[15px] text-[#834296]">
                Club de Conversación
              </span>
            </div>
          </div>

          {/* Dúo (Destacado) */}
          <div className="bg-[#FFD203] text-[#001837] p-6 rounded-2xl border-3 border-[#001837] flex flex-col justify-between shadow-[4px_4px_0px_#4DC2DA] relative">
            <div className="absolute -top-3 right-4 bg-[#834296] text-white text-[11px] font-heading font-black px-3 py-0.5 rounded-full uppercase">
              Recomendado
            </div>
            <div>
              <span className="text-xs font-bold text-[#001837] uppercase tracking-wider">
                En Pareja
              </span>
              <p className="font-heading font-black text-[26px] mt-1">
                Plan Dúo
              </p>
              <p className="font-body text-[15px] text-[#001837]/85 mt-1.5 font-medium">
                2 alumnos con 1 docente exclusivo. Ritmo a medida.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-[#001837]/20">
              <span className="font-heading font-black text-[15px] text-[#001837]">
                Mayor adherencia y práctica
              </span>
            </div>
          </div>

          {/* 1 a 1 */}
          <div className="bg-white text-[#001837] p-6 rounded-2xl border border-black/10 flex flex-col justify-between shadow-sm">
            <div>
              <span className="text-xs font-bold text-[#4DC2DA] uppercase tracking-wider">
                Exclusivo
              </span>
              <p className="font-heading font-black text-[26px] mt-1">
                Personalizado
              </p>
              <p className="font-body text-[15px] text-slate-600 mt-1.5">
                1 docente para ti. Horarios y temas 100% a medida.
              </p>
            </div>
            <div className="mt-5 pt-3 border-t border-slate-200">
              <span className="font-heading font-bold text-[15px] text-[#001837]">
                Horarios flexibles
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/15 pt-7 z-10 w-full text-white/70">
        <span className="font-body text-[17px]">
          *Planes comunicados exclusivamente en la sesión de diagnóstico
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-6 py-2.5 rounded-xl font-heading font-black text-[16px]">
          Agendar Entrevista →
        </div>
      </div>
    </CommercialFrameWrapper>
  );
}

// 04. Certificado de Nivel
export function TemplateInternal04Certificate() {
  return (
    <CommercialFrameWrapper
      id="internal-04-certificate"
      title="Interno 04 · Certificado de Nivel"
      className="bg-[#001837]"
    >
      <div className="w-full h-full border-4 border-[#FFD203] rounded-3xl p-12 flex flex-col justify-between text-[#001837] bg-white relative shadow-2xl">
        <div className="flex items-center justify-between">
          <YYCLStickerLogo size={76} />
          <Award className="w-14 h-14 text-[#834296]" />
        </div>

        <div className="text-center my-auto flex flex-col gap-5">
          <span className="text-[18px] font-heading font-black text-[#834296] uppercase tracking-widest">
            Certificate of Achievement
          </span>

          <h2 className="font-heading font-black text-[52px] text-[#001837] leading-tight">
            Valeria Morales
          </h2>

          <p className="font-body text-[21px] text-slate-700 max-w-[700px] mx-auto leading-relaxed font-medium">
            Has successfully completed the <strong>B2 Conversational Fluency Program</strong> at Yes You Can Languages, demonstrating active communication, professional vocabulary, and presentation skills.
          </p>

          <div className="flex items-center justify-center gap-10 mt-3">
            <div className="text-center">
              <div className="w-44 h-0.5 bg-slate-300 mb-2" />
              <p className="font-heading font-bold text-[17px]">Naty Sánchez</p>
              <p className="text-xs text-slate-500">Academic Director</p>
            </div>
            <div className="text-center">
              <div className="w-44 h-0.5 bg-slate-300 mb-2" />
              <p className="font-heading font-bold text-[17px]">Néstor Montaño</p>
              <p className="text-xs text-slate-500">General Director</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-slate-200 pt-5 text-xs text-slate-500 font-mono">
          <span>YYCL LLC · Florida, USA</span>
          <span>Verified Certificate ID: YYCL-2026-8821</span>
        </div>
      </div>
    </CommercialFrameWrapper>
  );
}
