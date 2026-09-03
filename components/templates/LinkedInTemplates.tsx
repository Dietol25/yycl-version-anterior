import React from "react";
import {
  BrandHeader,
  BrandFooter,
  UserAvatar,
  MarkerHighlight,
  YYCLStickerLogo,
} from "./DesignElements";
import { CheckCircle2, ArrowRight } from "lucide-react";

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
      className={`w-[1080px] h-[1350px] relative overflow-hidden flex flex-col justify-between p-[84px] text-white select-none ${className}`}
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
      className="bg-[#001837]"
    >
      <BrandHeader badge="EXECUTIVE INSIGHT" badgeVariant="cyan" />

      <div className="my-auto z-10 flex flex-col gap-8 max-w-[940px]">
        <div>
          <span className="text-[18px] font-heading font-bold uppercase text-[#FFD203] tracking-wider block mb-2">
            El dilema del profesional senior
          </span>

          <h1 className="font-heading font-black text-[58px] leading-[1.18] text-white tracking-tight">
            Why do Latin American professionals understand{" "}
            <span className="text-[#FFD203]">90% of English</span> but freeze when it’s time to speak?
          </h1>
        </div>

        <div className="bg-[#834296] text-white p-8 rounded-3xl border border-white/20 shadow-[6px_6px_0px_#001837] space-y-3">
          <p className="font-heading font-medium text-[25px] leading-relaxed text-white">
            No es falta de capacidad técnica. Es la presión de sentir que tu fluidez en inglés no refleja tu nivel de seniority y liderazgo.
          </p>
          <div className="h-0.5 bg-white/20" />
          <p className="font-heading font-bold text-[20px] text-[#FFD203]">
            En YYCL convertimos tu inglés pasivo en inglés ejecutivo activo.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-7 z-10 w-full">
        <UserAvatar
          src="/images/SRC_001_Imagen de Codex 22 ago 2026, 10_05_51 p.m..png"
          alt="Naty Sánchez"
          name="Naty Sánchez"
          role="Academic Director · Yes You Can Languages"
          size={64}
        />
        <div className="bg-white text-[#001837] px-5 py-2.5 rounded-xl font-heading font-bold text-[16px]">
          Follow on LinkedIn
        </div>
      </div>
    </LinkedInFrameWrapper>
  );
}

// 02. Carrusel Educativo LinkedIn (PDF Carousel)
export function TemplateLinkedIn02Carousel() {
  return (
    <LinkedInFrameWrapper
      id="linkedin-02-carousel"
      title="LinkedIn 02 · Carrusel PDF Ejecutivo"
      className="bg-[#001837]"
    >
      <BrandHeader badge="EXECUTIVE ENGLISH GUIDE" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-8">
        <div>
          <span className="text-[18px] font-heading font-bold text-[#4DC2DA] uppercase tracking-wider block mb-2">
            Leadership Communication
          </span>
          <h2 className="font-heading font-black text-[54px] leading-[1.15] text-white">
            5 phrases that make your English sound{" "}
            <MarkerHighlight color="bg-[#FFD203]" textColor="text-[#001837]">
              more executive
            </MarkerHighlight>{" "}
            in high-stakes meetings.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white text-[#001837] p-6 rounded-2xl border border-black/10 shadow-[4px_4px_0px_#4DC2DA] flex items-center justify-between">
            <div>
              <p className="text-sm text-red-600 font-bold line-through">
                “I think maybe this is bad...”
              </p>
              <p className="text-[24px] font-heading font-black text-[#001837] mt-0.5">
                👉 “I have reservations about this approach.”
              </p>
            </div>
            <span className="bg-[#4DC2DA]/20 text-[#001837] font-bold text-xs px-3 py-1 rounded-md uppercase">
              Diplomatic
            </span>
          </div>

          <div className="bg-white text-[#001837] p-6 rounded-2xl border border-black/10 shadow-[4px_4px_0px_#4DC2DA] flex items-center justify-between">
            <div>
              <p className="text-sm text-red-600 font-bold line-through">
                “Repeat that, I didn’t understand.”
              </p>
              <p className="text-[24px] font-heading font-black text-[#001837] mt-0.5">
                👉 “Could you clarify what you mean by that?”
              </p>
            </div>
            <span className="bg-[#FFD203]/50 text-[#001837] font-bold text-xs px-3 py-1 rounded-md uppercase">
              Assertive
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/15 pt-7 z-10 w-full text-white/80">
        <span className="font-body text-[18px]">
          Desliza para ver las 5 frases completas 📄
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-5 py-2 rounded-xl font-heading font-bold text-[16px]">
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
      className="bg-[#001837]"
    >
      <BrandHeader badge="YYCL PERSPECTIVE" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-8">
        <h2 className="font-heading font-black text-[54px] leading-[1.2] text-white">
          “Speaking English at work isn’t about knowing 10,000 words. <br />
          <span className="text-[#FFD203]">
            It’s about psychological safety.
          </span>”
        </h2>

        <div className="space-y-4 text-white/85 font-body text-[24px] leading-relaxed border-l-4 border-[#834296] pl-8 font-medium">
          <p>
            En Latinoamérica nos enseñaron idiomas castigando el error con notas rojas. Por eso, en una llamada en inglés con directivos extranjeros, el cuerpo reacciona con tensión.
          </p>
          <p className="text-white font-bold">
            Cuando cambias el entorno a un espacio seguro donde el error es bienvenido, la fluidez surge de forma natural.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-7 z-10 w-full">
        <UserAvatar
          src="/images/SRC_005_Imagen de Codex 22 ago 2026, 10_06_35 p.m..png"
          alt="Néstor Montaño"
          name="Néstor Montaño"
          role="Co-Founder & Operations · YYCL"
          size={64}
        />
        <span className="font-heading font-semibold text-[17px] text-white/70">
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
      className="bg-[#001837]"
    >
      <BrandHeader badge="CASE STUDY · B2B" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-8">
        <div>
          <span className="text-[18px] font-heading font-bold text-[#4DC2DA] uppercase tracking-widest block mb-1">
            Ingeniería & Consultoría Global
          </span>
          <h2 className="font-heading font-black text-[52px] leading-tight text-white">
            Cómo capacitamos al equipo de ingeniería de{" "}
            <span className="text-[#FFD203]">SRK</span> para presentar informes en inglés.
          </h2>
        </div>

        {/* 3 Métricas Limpias */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white/10 p-6 rounded-2xl border border-white/15 text-center">
            <span className="font-heading font-black text-[44px] text-[#FFD203] block">
              100%
            </span>
            <p className="font-body text-[16px] text-white/80 mt-1">
              Conversacional y técnico
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-white/15 text-center">
            <span className="font-heading font-black text-[44px] text-[#4DC2DA] block">
              +85%
            </span>
            <p className="font-body text-[16px] text-white/80 mt-1">
              Mayor soltura en llamadas
            </p>
          </div>

          <div className="bg-white/10 p-6 rounded-2xl border border-white/15 text-center">
            <span className="font-heading font-black text-[44px] text-[#FFE2C0] block">
              6 Meses
            </span>
            <p className="font-body text-[16px] text-white/80 mt-1">
              Programa intensivo
            </p>
          </div>
        </div>

        <div className="bg-[#834296] p-6 rounded-2xl border border-white/20">
          <p className="font-body text-[20px] text-white leading-relaxed font-medium italic">
            “Nuestros ingenieros ya no evitan las reuniones con los clientes de Norteamérica. El programa superó nuestras expectativas.”
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-7 z-10 w-full">
        <span className="font-heading font-semibold text-[17px] text-white">
          Planes corporativos a la medida de tu equipo
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-6 py-2.5 rounded-xl font-heading font-black text-[16px]">
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
      className="bg-[#001837]"
    >
      <BrandHeader badge="TESTIMONIO EJECUTIVO" badgeVariant="cyan" />

      <div className="my-auto z-10 flex flex-col gap-8">
        <h2 className="font-heading font-extrabold text-[50px] leading-[1.2] text-white">
          “Tenía 10 años en tecnología, pero el inglés era el techo de cristal que no me dejaba acceder a salarios internacionales.”
        </h2>

        <div className="bg-white p-7 rounded-3xl border border-black/10 text-[#001837] shadow-xl flex items-center gap-6">
          <UserAvatar
            src="/images/SRC_006_Imagen de Codex 22 ago 2026, 10_06_48 p.m..png"
            alt="Mauricio Rojas"
            name="Mauricio Rojas"
            role="Tech Lead · Contratado por empresa de USA"
            size={76}
            borderColor="border-[#834296]"
          />
          <div className="h-16 w-px bg-slate-200" />
          <p className="font-body text-[17px] text-slate-700 font-medium">
            “En 6 meses en YYCL pasé de dudar en cada frase a superar 4 rondas de entrevistas técnicas con total seguridad.”
          </p>
        </div>
      </div>

      <BrandFooter actionText="Acelera tu carrera con inglés conversacional real" />
    </LinkedInFrameWrapper>
  );
}

// 06. Announcement Corporativo
export function TemplateLinkedIn06Announcement() {
  return (
    <LinkedInFrameWrapper
      id="linkedin-06-announcement"
      title="LinkedIn 06 · Announcement Corporativo"
      className="bg-[#834296]"
    >
      <BrandHeader badge="NUEVO PROGRAMA" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-8">
        <div>
          <span className="text-[18px] font-heading font-bold text-[#FFE2C0] uppercase tracking-widest block mb-1">
            Corporate Language Solutions
          </span>
          <h2 className="font-heading font-black text-[58px] leading-tight text-white">
            Lanzamos el programa{" "}
            <span className="text-[#FFD203]">English for Executives</span> para empresas.
          </h2>
        </div>

        <div className="bg-[#001837] p-8 rounded-3xl border border-white/20 space-y-4 text-white/90 font-body text-[22px]">
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

      <div className="flex items-center justify-between border-t border-white/20 pt-7 z-10 w-full">
        <span className="font-heading font-semibold text-[17px] text-white">
          Agenda una sesión de 15 min con nuestro equipo
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-7 py-3 rounded-2xl font-heading font-black text-[17px]">
          Contactar B2B →
        </div>
      </div>
    </LinkedInFrameWrapper>
  );
}
