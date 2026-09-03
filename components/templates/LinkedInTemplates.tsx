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
import { CheckCircle2 } from "lucide-react";

// Wrapper base para LinkedIn (1080 x 1350 px exactos)
export function LinkedInFrameWrapper({
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
      data-template-type="linkedin-post"
      className={`w-[1080px] h-[1350px] relative overflow-hidden flex flex-col justify-between p-[80px] text-white select-none ${className}`}
      style={{ boxSizing: "border-box" }}
    >
      {children}
    </div>
  );
}

// 01. Insight Profesional
export function TemplateLinkedIn01Insight() {
  return (
    <LinkedInFrameWrapper
      id="linkedin-01-insight"
      title="LinkedIn 01 · Insight Profesional"
      className="bg-[#001837] bg-notebook-dots"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <span className="font-heading font-black text-[17px] text-[#4DC2DA] tracking-widest uppercase bg-white/10 px-4 py-1.5 rounded-lg">
          Executive Language Insights
        </span>
      </div>

      <div className="my-auto z-10 flex flex-col gap-8 max-w-[940px] relative">
        <Tape color="bg-[#FFD203]/90" rotate="-2deg" className="self-start -mb-4" />
        
        <div>
          <span className="text-[19px] font-heading font-extrabold uppercase text-[#FFD203] tracking-wider block mb-2">
            El dilema del profesional senior
          </span>

          <h1 className="font-heading font-black text-[56px] leading-[1.18] text-white tracking-tight">
            Why do Latin American professionals understand{" "}
            <span className="text-[#FFD203]">90% of English</span> but freeze when it’s time to speak?
          </h1>
        </div>

        {/* Tarjeta Editorial de Collage */}
        <div className="bg-[#FFE2C0] text-[#001837] p-8 rounded-2xl border-3 border-[#001837] shadow-[8px_8px_0px_#834296] flex flex-col gap-3">
          <p className="font-body text-[24px] leading-relaxed text-[#001837]/90 font-medium">
            No es falta de capacidad técnica. Es la presión de sentir que tu nivel de inglés no refleja tu nivel de seniority y liderazgo.
          </p>
          <div className="h-0.5 bg-[#001837]/15 my-1" />
          <p className="font-heading font-extrabold text-[21px] text-[#834296]">
            En YYCL convertimos tu inglés pasivo en inglés ejecutivo activo.
          </p>
        </div>

        <HandwrittenNote text="La fluidez es seguridad psicológica 💡" color="text-[#4DC2DA]" rotate="1deg" className="self-end text-2xl" />
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10">
        <div className="flex items-center gap-5">
          <div className="bg-white p-2 pb-3 rounded-lg shadow-lg -rotate-2 border border-black/10">
            <div className="w-16 h-16 rounded-xs overflow-hidden relative bg-[#834296]">
              <Image
                src="/images/SRC_001_Imagen de Codex 22 ago 2026, 10_05_51 p.m..png"
                alt="Naty Sánchez"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="font-heading font-extrabold text-[22px] text-white">
              Naty Sánchez
            </p>
            <p className="font-body text-[16px] text-[#4DC2DA]">
              Academic Director · Yes You Can Languages
            </p>
          </div>
        </div>
        <div className="bg-white text-[#001837] px-6 py-3 rounded-xl font-heading font-bold text-[17px]">
          Follow on LinkedIn
        </div>
      </div>
    </LinkedInFrameWrapper>
  );
}

// 02. Carrusel Educativo LinkedIn (Document Carousel)
export function TemplateLinkedIn02Carousel() {
  return (
    <LinkedInFrameWrapper
      id="linkedin-02-carousel"
      title="LinkedIn 02 · Carrusel PDF Ejecutivo"
      className="bg-[#FBF8F2] bg-notebook-grid text-[#001837]"
    >
      <div className="flex items-center justify-between z-10 text-[#001837]">
        <YYCLLogoMark variant="default" />
        <span className="font-heading font-black text-[16px] bg-[#001837] text-white px-4 py-1.5 rounded-lg">
          Executive English Guide
        </span>
      </div>

      <div className="my-auto z-10 flex flex-col gap-7 text-[#001837]">
        <Tape color="bg-[#4DC2DA]/90" rotate="-2deg" className="-mb-4" />
        <div>
          <span className="text-[19px] font-heading font-bold text-[#834296] uppercase tracking-wider block mb-1">
            Leadership Communication
          </span>
          <h2 className="font-heading font-black text-[54px] leading-[1.15] text-[#001837]">
            5 phrases that make your English sound{" "}
            <MarkerHighlight color="bg-[#FFD203]">more executive</MarkerHighlight>{" "}
            in high-stakes meetings.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-6 rounded-2xl border-2 border-[#001837] shadow-[5px_5px_0px_#001837] flex items-center justify-between -rotate-0.5">
            <div>
              <p className="text-[15px] text-red-600 font-bold line-through">
                “I think maybe this is bad...”
              </p>
              <p className="text-[23px] font-heading font-black text-[#001837]">
                👉 “I have reservations about this approach.”
              </p>
            </div>
            <span className="bg-[#4DC2DA]/30 text-[#001837] font-bold text-xs px-3 py-1 rounded-md">
              Diplomatic
            </span>
          </div>

          <div className="bg-white p-6 rounded-2xl border-2 border-[#001837] shadow-[5px_5px_0px_#001837] flex items-center justify-between rotate-0.5">
            <div>
              <p className="text-[15px] text-red-600 font-bold line-through">
                “Repeat that, I didn’t understand.”
              </p>
              <p className="text-[23px] font-heading font-black text-[#001837]">
                👉 “Could you clarify what you mean by that?”
              </p>
            </div>
            <span className="bg-[#FFD203]/60 text-[#001837] font-bold text-xs px-3 py-1 rounded-md">
              Professional
            </span>
          </div>
        </div>

        <div className="flex justify-end">
          <HandwrittenNote text="Desliza para ver las 5 frases completas 📄" color="text-[#834296]" rotate="-1deg" className="text-2xl" />
        </div>
      </div>

      <div className="flex items-center justify-between border-t-2 border-[#001837]/15 pt-7 z-10 text-[#001837]">
        <span className="font-heading font-bold text-[19px]">
          Yes You Can Languages
        </span>
        <div className="bg-[#001837] text-white px-6 py-2.5 rounded-xl font-heading font-bold text-[17px]">
          Slide 1/6
        </div>
      </div>
    </LinkedInFrameWrapper>
  );
}

// 03. Thought Leadership
export function TemplateLinkedIn03ThoughtLeadership() {
  return (
    <LinkedInFrameWrapper
      id="linkedin-03-thought"
      title="LinkedIn 03 · Thought Leadership"
      className="bg-[#001837] bg-notebook-dots"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="YYCL PERSPECTIVE" variant="yellow" rotate="-2deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-8">
        <h2 className="font-heading font-black text-[54px] leading-[1.2] text-white">
          “Speaking English at work isn’t about knowing 10,000 words. <br />
          <span className="text-[#FFD203]">
            It’s about psychological safety.
          </span>”
        </h2>

        <div className="space-y-4 text-white/85 font-body text-[24px] leading-relaxed border-l-4 border-[#834296] pl-8">
          <p>
            En Latinoamérica nos enseñaron idiomas castigando el error con notas rojas. Por eso, en una llamada en inglés con directivos extranjeros, el cuerpo reacciona con tensión.
          </p>
          <p className="text-white font-bold">
            Cuando cambias el entorno a un espacio seguro donde el error es bienvenido, la fluidez surge de forma natural.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10">
        <div className="flex items-center gap-5">
          <div className="bg-white p-2 pb-3 rounded-lg shadow-lg rotate-2 border border-black/10">
            <div className="w-16 h-16 rounded-xs overflow-hidden relative bg-[#3C4C92]">
              <Image
                src="/images/SRC_005_Imagen de Codex 22 ago 2026, 10_06_35 p.m..png"
                alt="Néstor Montaño"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div>
            <p className="font-heading font-extrabold text-[22px] text-white">
              Néstor Montaño
            </p>
            <p className="font-body text-[16px] text-[#4DC2DA]">
              Co-Founder & Operations · YYCL
            </p>
          </div>
        </div>
        <span className="font-heading font-semibold text-[18px] text-white/70">
          ¿Cuál es tu experiencia?
        </span>
      </div>
    </LinkedInFrameWrapper>
  );
}

// 04. Caso Corporativo B2B (SRK)
export function TemplateLinkedIn04B2BCase() {
  return (
    <LinkedInFrameWrapper
      id="linkedin-04-b2b"
      title="LinkedIn 04 · Caso Corporativo B2B"
      className="bg-[#3C4C92] bg-notebook-grid"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <span className="bg-[#FFD203] text-[#001837] font-heading font-black text-xs px-4 py-1.5 rounded-md uppercase">
          Case Study · B2B Corporate
        </span>
      </div>

      <div className="my-auto z-10 flex flex-col gap-7">
        <div>
          <span className="text-[18px] font-heading font-bold text-[#CAFFFF] uppercase tracking-widest block mb-1">
            Ingeniería & Consultoría Global
          </span>
          <h2 className="font-heading font-black text-[50px] leading-tight text-white">
            Cómo capacitamos al equipo de ingeniería de{" "}
            <span className="text-[#FFD203]">SRK</span> para presentar informes en inglés.
          </h2>
        </div>

        {/* 3 Métricas en tarjetas de collage */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-[#001837] p-6 rounded-2xl border border-white/20 text-center shadow-lg">
            <span className="font-heading font-black text-[42px] text-[#FFD203] block">
              100%
            </span>
            <p className="font-body text-[16px] text-white/80 mt-1">
              Conversacional y técnico
            </p>
          </div>

          <div className="bg-[#001837] p-6 rounded-2xl border border-white/20 text-center shadow-lg">
            <span className="font-heading font-black text-[42px] text-[#4DC2DA] block">
              +85%
            </span>
            <p className="font-body text-[16px] text-white/80 mt-1">
              Mayor confianza en llamadas
            </p>
          </div>

          <div className="bg-[#001837] p-6 rounded-2xl border border-white/20 text-center shadow-lg">
            <span className="font-heading font-black text-[42px] text-[#FFE2C0] block">
              6 Meses
            </span>
            <p className="font-body text-[16px] text-white/80 mt-1">
              Programa intensivo
            </p>
          </div>
        </div>

        <div className="bg-white/10 p-5 rounded-2xl border border-white/15">
          <p className="font-body text-[20px] text-white/90 italic font-medium">
            “Nuestros ingenieros ya no evitan las reuniones con los clientes de Norteamérica. El programa superó nuestras expectativas.”
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10">
        <span className="font-heading font-semibold text-[18px] text-white">
          Planes corporativos a la medida de tu equipo
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-6 py-2.5 rounded-xl font-heading font-black text-[17px]">
          Propuesta B2B →
        </div>
      </div>
    </LinkedInFrameWrapper>
  );
}

// 05. Testimonio Profesional Senior
export function TemplateLinkedIn05ProfessionalTestimonial() {
  return (
    <LinkedInFrameWrapper
      id="linkedin-05-testimonial"
      title="LinkedIn 05 · Testimonio Profesional"
      className="bg-[#001837] bg-notebook-dots"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="TESTIMONIO EJECUTIVO" variant="cyan" rotate="2deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-7">
        <h2 className="font-heading font-extrabold text-[48px] leading-[1.2] text-white">
          “Tenía 10 años en tecnología, pero el inglés era el techo de cristal que no me dejaba acceder a salarios internacionales.”
        </h2>

        <div className="bg-[#FFE2C0] p-7 rounded-3xl border-3 border-[#001837] text-[#001837] shadow-xl flex items-center gap-7 relative">
          <Tape className="absolute -top-3.5 left-10 w-24 h-5" color="bg-[#FFD203]/80" rotate="-2deg" />
          
          <div className="w-28 h-28 rounded-2xl overflow-hidden relative shrink-0 border-2 border-[#001837] shadow-md">
            <Image
              src="/images/SRC_006_Imagen de Codex 22 ago 2026, 10_06_48 p.m..png"
              alt="Mauricio Rojas"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-heading font-black text-[28px] text-[#001837]">
              Mauricio Rojas
            </p>
            <p className="font-body text-[18px] text-[#834296] font-bold">
              Tech Lead · Contratado por empresa de San Francisco (Remoto)
            </p>
            <p className="font-body text-[17px] text-[#001837]/85 mt-1">
              “En 6 meses en YYCL pasé de no animarme a hablar a superar 4 rondas de entrevistas técnicas con total soltura.”
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10">
        <span className="font-heading font-semibold text-[18px] text-[#4DC2DA]">
          Acelera tu carrera con inglés real
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-6 py-2.5 rounded-xl font-heading font-bold text-[17px]">
          Conoce los Planes
        </div>
      </div>
    </LinkedInFrameWrapper>
  );
}

// 06. Announcement Corporativo
export function TemplateLinkedIn06Announcement() {
  return (
    <LinkedInFrameWrapper
      id="linkedin-06-announcement"
      title="LinkedIn 06 · Announcement Corporativo"
      className="bg-[#834296] bg-notebook-grid"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="NUEVO PROGRAMA" variant="yellow" rotate="-2deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-7">
        <div>
          <span className="text-[18px] font-heading font-bold text-[#FFE2C0] uppercase tracking-widest block mb-1">
            Corporate Language Solutions
          </span>
          <h2 className="font-heading font-black text-[56px] leading-tight text-white">
            Lanzamos el programa{" "}
            <span className="text-[#FFD203]">English for Executives</span> para empresas.
          </h2>
        </div>

        <div className="bg-[#001837] p-7 rounded-2xl border border-white/20 space-y-3.5 text-white/90 font-body text-[22px]">
          <div className="flex items-center gap-4">
            <CheckCircle2 className="w-7 h-7 text-[#FFD203] shrink-0" />
            <span>Diagnóstico de nivel para cada colaborador sin costo inicial</span>
          </div>
          <div className="flex items-center gap-4">
            <CheckCircle2 className="w-7 h-7 text-[#FFD203] shrink-0" />
            <span>Métricas mensuales de asistencia y progreso real en conversación</span>
          </div>
          <div className="flex items-center gap-4">
            <CheckCircle2 className="w-7 h-7 text-[#FFD203] shrink-0" />
            <span>Facturación corporativa en USD para toda la región</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10">
        <span className="font-heading font-semibold text-[18px] text-white">
          Agenda una llamada de 15 min con nuestro equipo
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-7 py-3 rounded-2xl font-heading font-black text-[18px]">
          Contactar B2B →
        </div>
      </div>
    </LinkedInFrameWrapper>
  );
}
