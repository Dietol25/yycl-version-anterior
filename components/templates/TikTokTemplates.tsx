import React from "react";
import Image from "next/image";
import {
  Tape,
  StickerBadge,
  MarkerHighlight,
  BrushStroke,
  DoodleArrow,
  DoodleSpark,
  HandwrittenNote,
  YYCLLogoMark,
} from "./DesignElements";
import { X, Check, Play, Flame, ArrowRight } from "lucide-react";

// Wrapper base para TikTok / Reels (1080 x 1920 px exactos)
export function TikTokFrameWrapper({
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
      data-template-type="tiktok-overlay"
      className={`w-[1080px] h-[1920px] relative overflow-hidden flex flex-col justify-between p-[84px] text-white select-none ${className}`}
      style={{ boxSizing: "border-box" }}
    >
      {children}
    </div>
  );
}

// 01. Hook Viral (STOP SAYING THIS)
export function TemplateTikTok01Hook() {
  return (
    <TikTokFrameWrapper
      id="tiktok-01-hook"
      title="TikTok 01 · Hook Viral"
      className="bg-[#001837] bg-notebook-dots"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="DON'T SAY THIS 🚫" variant="red" rotate="-3deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-9 items-center text-center relative">
        <Tape color="bg-red-500/80" rotate="2deg" className="self-center" />
        
        <div className="bg-red-600 text-white px-8 py-3.5 rounded-2xl font-heading font-black text-[34px] tracking-wider uppercase shadow-2xl">
          STOP SAYING THIS ❌
        </div>

        <h1 className="font-heading font-black text-[76px] leading-[1.08] text-white max-w-[920px]">
          “I have a doubt” <br />
          <span className="text-[#FFD203]">en tus reuniones de trabajo</span>
        </h1>

        <div className="bg-white/10 backdrop-blur-md p-7 rounded-3xl border border-white/20 max-w-[850px]">
          <p className="font-body text-[30px] text-white/90 font-medium">
            Los nativos no usan <em>“doubt”</em> para pedir aclaraciones. Di esto en su lugar 👇
          </p>
        </div>

        {/* Solución en Bloque de Collage */}
        <div className="bg-[#FFD203] text-[#001837] px-10 py-6 rounded-3xl font-heading font-black text-[40px] border-4 border-[#001837] shadow-[10px_10px_0px_#4DC2DA] relative rotate-1">
          “I have a question” ✅
        </div>

        <HandwrittenNote text="Guarda esto para tu próxima llamada 📌" color="text-[#FFE2C0]" rotate="-2deg" className="text-3xl" />
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-heading font-bold text-[22px] text-white/80">
          Síguenos para más tips de inglés real
        </span>
        <span className="font-heading font-black text-[24px] text-[#FFD203]">
          @yyclanguages
        </span>
      </div>
    </TikTokFrameWrapper>
  );
}

// 02. Vocabulario Express (3 Niveles)
export function TemplateTikTok02Vocabulary() {
  return (
    <TikTokFrameWrapper
      id="tiktok-02-vocabulary"
      title="TikTok 02 · Vocabulario Express"
      className="bg-[#834296] bg-notebook-grid"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="NIVEL NATIVO" variant="yellow" rotate="2deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-8 text-center items-center">
        <span className="text-[24px] font-heading font-bold text-[#FFE2C0] uppercase tracking-widest block">
          Amplía tu vocabulario diario
        </span>

        <h2 className="font-heading font-black text-[70px] leading-tight text-white">
          3 formas de decir: <br />
          <span className="text-[#001837] bg-[#FFD203] px-6 py-2 rounded-2xl inline-block mt-3 -rotate-1">
            “I’M TIRED” 😴
          </span>
        </h2>

        {/* 3 Niveles en Collage */}
        <div className="w-full flex flex-col gap-4 mt-2 text-left">
          <div className="bg-white text-[#001837] p-7 rounded-3xl border-3 border-[#001837] shadow-[6px_6px_0px_#001837] flex items-center justify-between -rotate-0.5">
            <div>
              <span className="text-xs font-heading font-black text-[#834296] uppercase tracking-widest block">
                Nivel 1 · Informal
              </span>
              <p className="font-heading font-black text-[38px]">
                1. “I’m beat”
              </p>
            </div>
            <span className="text-3xl">⚡</span>
          </div>

          <div className="bg-[#FFD203] text-[#001837] p-7 rounded-3xl border-3 border-[#001837] shadow-[6px_6px_0px_#001837] flex items-center justify-between rotate-0.5">
            <div>
              <span className="text-xs font-heading font-black text-[#001837] uppercase tracking-widest block">
                Nivel 2 · Exhausto
              </span>
              <p className="font-heading font-black text-[38px]">
                2. “I’m exhausted”
              </p>
            </div>
            <span className="text-3xl">🔥</span>
          </div>

          <div className="bg-[#001837] text-white p-7 rounded-3xl border-3 border-white/30 shadow-[6px_6px_0px_#FFD203] flex items-center justify-between -rotate-0.5">
            <div>
              <span className="text-xs font-heading font-black text-[#4DC2DA] uppercase tracking-widest block">
                Nivel 3 · Sin energía
              </span>
              <p className="font-heading font-black text-[38px] text-[#FFD203]">
                3. “I’m drained”
              </p>
            </div>
            <span className="text-3xl">🔋</span>
          </div>
        </div>

        <HandwrittenNote text="¿Cuál vas a usar hoy? Comenta 👇" color="text-[#FFE2C0]" rotate="2deg" className="text-3xl" />
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-heading font-semibold text-[22px] text-white">
          Yes You Can Languages
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-6 py-2 rounded-xl font-heading font-black text-[18px]">
          YYCL
        </div>
      </div>
    </TikTokFrameWrapper>
  );
}

// 03. Before / After Directo
export function TemplateTikTok03BeforeAfter() {
  return (
    <TikTokFrameWrapper
      id="tiktok-03-before-after"
      title="TikTok 03 · Before & After"
      className="bg-[#001837] bg-notebook-dots"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="TRANSFORMACIÓN" variant="cyan" rotate="-3deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-9">
        <div className="text-center">
          <h2 className="font-heading font-black text-[64px] leading-tight text-white">
            Inglés de Escuela vs. Inglés Real
          </h2>
          <HandwrittenNote text="La diferencia que nota un nativo 👇" color="text-[#FFD203]" rotate="-1deg" className="mt-2 text-3xl" />
        </div>

        <div className="flex flex-col gap-6">
          {/* Antes */}
          <div className="bg-red-500/15 border-3 border-red-500/60 rounded-3xl p-7 flex items-center gap-6 relative">
            <div className="w-14 h-14 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-3xl shrink-0">
              <X className="w-8 h-8" />
            </div>
            <div>
              <span className="text-sm font-heading font-bold uppercase tracking-wider text-red-400">
                Como nos enseñaron:
              </span>
              <p className="font-heading font-bold text-[34px] text-white/90 mt-1">
                “I am fine, thank you very much.”
              </p>
            </div>
          </div>

          {/* Después */}
          <div className="bg-[#FFD203] border-4 border-[#001837] rounded-3xl p-7 flex items-center gap-6 text-[#001837] shadow-[10px_10px_0px_#834296] relative rotate-0.5">
            <Tape className="absolute -top-3.5 right-8 w-20 h-5" color="bg-[#001837]/60" rotate="2deg" />
            <div className="w-14 h-14 rounded-xl bg-[#001837] text-[#FFD203] flex items-center justify-center font-bold text-3xl shrink-0">
              <Check className="w-8 h-8" />
            </div>
            <div>
              <span className="text-sm font-heading font-bold uppercase tracking-wider text-[#001837]">
                Como habla un nativo:
              </span>
              <p className="font-heading font-black text-[36px] text-[#001837] mt-1">
                “Doing great! How about yourself?”
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl text-center">
          <p className="font-body text-[24px] text-white font-medium">
            La naturalidad se entrena con conversación en vivo, no memorizando reglas.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-heading font-semibold text-[20px] text-[#4DC2DA]">
          Aprende a hablar con confianza
        </span>
        <span className="font-heading font-bold text-[22px] text-[#FFD203]">
          @yyclanguages
        </span>
      </div>
    </TikTokFrameWrapper>
  );
}

// 04. Teacher Explains Frame
export function TemplateTikTok04TeacherExplains() {
  return (
    <TikTokFrameWrapper
      id="tiktok-04-teacher"
      title="TikTok 04 · Marco para Video del Profesor"
      className="bg-[#001837] bg-notebook-dots"
    >
      {/* Zona Superior Fija */}
      <div className="z-10 flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <YYCLLogoMark variant="white" />
          <StickerBadge text="PROFE NATY RESPONDE" variant="yellow" rotate="2deg" />
        </div>
        <div className="bg-[#834296] p-6 rounded-2xl border-2 border-white/20 text-center shadow-lg relative">
          <Tape className="absolute -top-3 left-6 w-20 h-4" color="bg-[#FFD203]/80" rotate="-2deg" />
          <p className="font-heading font-black text-[34px] text-white leading-snug">
            ¿Por qué te trabas al hablar aunque entiendas todo? 👇
          </p>
        </div>
      </div>

      {/* Zona Central Libre para Video */}
      <div className="my-auto w-full h-[840px] rounded-3xl border-4 border-dashed border-[#FFD203]/40 flex flex-col items-center justify-center text-center p-8 bg-black/40 backdrop-blur-xs">
        <Play className="w-16 h-16 text-[#FFD203] mb-3 opacity-80" />
        <span className="font-heading font-black text-[30px] text-white/90">
          [ ÁREA DE VIDEO DEL PROFESOR ]
        </span>
        <p className="font-body text-[20px] text-white/60 mt-1 max-w-[480px]">
          Zona transparente para insertar la grabación del docente hablando a cámara con subtítulos.
        </p>
      </div>

      {/* Zona Inferior Fija */}
      <div className="z-10 flex flex-col gap-3 border-t border-white/20 pt-5">
        <div className="bg-[#FFD203] text-[#001837] p-5 rounded-2xl flex items-center justify-between font-heading font-black text-[24px]">
          <span>👉 Prueba de diagnóstico gratis en la bio</span>
          <ArrowRight className="w-7 h-7" />
        </div>
      </div>
    </TikTokFrameWrapper>
  );
}

// 05. Storytelling / Root Cause
export function TemplateTikTok05Storytelling() {
  return (
    <TikTokFrameWrapper
      id="tiktok-05-storytelling"
      title="TikTok 05 · Storytelling de Impacto"
      className="bg-[#3C4C92] bg-notebook-grid"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="HISTORIA REAL" variant="yellow" rotate="-2deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-8 text-center items-center">
        <Flame className="w-16 h-16 text-[#FFD203]" />
        
        <h2 className="font-heading font-black text-[64px] leading-tight text-white max-w-[900px]">
          La razón por la que te congelas al hablar inglés…
        </h2>

        <div className="bg-[#001837] p-8 rounded-3xl border-2 border-white/20 text-left space-y-4 shadow-xl">
          <p className="font-body text-[26px] text-white/90 leading-relaxed font-medium">
            …no es que te falte vocabulario. Es que tu cerebro aprendió a ver el inglés como un examen donde cada error significa una mala nota.
          </p>
          <p className="font-heading font-black text-[26px] text-[#FFD203]">
            En YYCL cambiamos esa programación mental.
          </p>
        </div>

        <HandwrittenNote text="Tú ya puedes. Vamos a hacerlo real ✨" color="text-[#FFE2C0]" rotate="2deg" className="text-3xl" />
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-heading font-semibold text-[20px] text-[#CAFFFF]">
          Yes You Can Languages
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-5 py-2 rounded-xl font-heading font-black text-[18px]">
          yyclanguages.com
        </div>
      </div>
    </TikTokFrameWrapper>
  );
}

// 06. End Card Oficial
export function TemplateTikTok06EndCard() {
  return (
    <TikTokFrameWrapper
      id="tiktok-06-endcard"
      title="TikTok 06 · End Card de Marca"
      className="bg-[#001837] bg-notebook-dots"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <span className="font-heading font-bold text-[18px] text-[#4DC2DA]">
          Cierre Oficial
        </span>
      </div>

      <div className="my-auto z-10 flex flex-col gap-9 items-center text-center relative">
        <Tape color="bg-[#FFD203]/90" rotate="-3deg" />
        
        <div className="w-32 h-32 rounded-3xl bg-[#FFD203] flex items-center justify-center font-heading font-black text-[#001837] text-6xl shadow-2xl border-4 border-white">
          YY
        </div>

        <div>
          <h2 className="font-heading font-black text-[72px] leading-tight text-white">
            Yes You Can Languages
          </h2>
          <p className="font-heading font-black text-[34px] text-[#FFD203] mt-2">
            Pierde el miedo a hablar inglés.
          </p>
        </div>

        <div className="bg-white/10 p-7 rounded-3xl border border-white/20 max-w-[800px]">
          <p className="font-body text-[28px] text-white/90">
            Agenda tu clase de diagnóstico gratis en el link del perfil 🔗
          </p>
        </div>

        <HandwrittenNote text="Let&apos;s make it real 🚀" color="text-[#FFE2C0]" rotate="3deg" className="text-3xl" />
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-body text-[22px] text-white/70">
          Síguenos para más contenido diario
        </span>
        <span className="font-heading font-black text-[24px] text-[#FFD203]">
          @yyclanguages
        </span>
      </div>
    </TikTokFrameWrapper>
  );
}
