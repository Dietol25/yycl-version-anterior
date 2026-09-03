import React from "react";
import {
  BrandHeader,
  BrandFooter,
  UserAvatar,
  MarkerHighlight,
  YYCLStickerLogo,
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
      className={`w-[1080px] h-[1920px] relative overflow-hidden flex flex-col justify-between p-[96px] text-white select-none ${className}`}
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
      className="bg-[#001837]"
    >
      <BrandHeader badge="DON'T SAY THIS 🚫" badgeVariant="yellow" logoSize={88} />

      <div className="my-auto z-10 flex flex-col gap-9 items-center text-center">
        <div className="bg-red-600 text-white px-8 py-3 rounded-2xl font-heading font-black text-[32px] tracking-wider uppercase shadow-xl">
          STOP SAYING THIS ❌
        </div>

        <h1 className="font-heading font-black text-[76px] leading-[1.08] text-white max-w-[920px]">
          “I have a doubt” <br />
          <span className="text-[#FFD203]">en reuniones de trabajo</span>
        </h1>

        <div className="bg-white/10 p-7 rounded-3xl border border-white/20 max-w-[850px]">
          <p className="font-body text-[28px] text-white/90 font-medium">
            Los nativos no usan <em>“doubt”</em> para pedir aclaraciones. Di esto en su lugar 👇
          </p>
        </div>

        {/* Solución Limpia */}
        <div className="bg-[#FFD203] text-[#001837] px-10 py-6 rounded-3xl font-heading font-black text-[40px] border-4 border-[#001837] shadow-[8px_8px_0px_#4DC2DA]">
          “I have a question” ✅
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-heading font-bold text-[20px] text-white/80">
          Guarda este video para tu próxima llamada 📌
        </span>
        <span className="font-heading font-black text-[20px] text-[#FFD203]">
          @yyclanguages
        </span>
      </div>
    </TikTokFrameWrapper>
  );
}

// 02. Vocabulario Express
export function TemplateTikTok02Vocabulary() {
  return (
    <TikTokFrameWrapper
      id="tiktok-02-vocabulary"
      title="TikTok 02 · Vocabulario Express"
      className="bg-[#834296]"
    >
      <BrandHeader badge="NIVEL NATIVO" badgeVariant="yellow" logoSize={88} />

      <div className="my-auto z-10 flex flex-col gap-8 text-center items-center">
        <span className="text-[22px] font-heading font-bold text-[#FFE2C0] uppercase tracking-widest block">
          Vocabulario para hablar con soltura
        </span>

        <h2 className="font-heading font-black text-[68px] leading-tight text-white">
          3 formas de decir: <br />
          <span className="text-[#001837] bg-[#FFD203] px-6 py-2 rounded-2xl inline-block mt-3">
            “I’M TIRED” 😴
          </span>
        </h2>

        {/* 3 Niveles */}
        <div className="w-full flex flex-col gap-4 mt-2 text-left">
          <div className="bg-white text-[#001837] p-7 rounded-3xl border border-black/10 shadow-md flex items-center justify-between">
            <div>
              <span className="text-xs font-heading font-black text-[#834296] uppercase tracking-widest block">
                1. Informal
              </span>
              <p className="font-heading font-black text-[36px]">
                “I’m beat”
              </p>
            </div>
            <span className="text-3xl">⚡</span>
          </div>

          <div className="bg-[#FFD203] text-[#001837] p-7 rounded-3xl border border-black/10 shadow-md flex items-center justify-between">
            <div>
              <span className="text-xs font-heading font-black text-[#001837] uppercase tracking-widest block">
                2. Exhausto
              </span>
              <p className="font-heading font-black text-[36px]">
                “I’m exhausted”
              </p>
            </div>
            <span className="text-3xl">🔥</span>
          </div>

          <div className="bg-[#001837] text-white p-7 rounded-3xl border border-white/20 shadow-md flex items-center justify-between">
            <div>
              <span className="text-xs font-heading font-black text-[#4DC2DA] uppercase tracking-widest block">
                3. Sin energía
              </span>
              <p className="font-heading font-black text-[36px] text-[#FFD203]">
                “I’m drained”
              </p>
            </div>
            <span className="text-3xl">🔋</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-heading font-semibold text-[20px] text-white">
          ¿Cuál vas a usar hoy? Comenta 👇
        </span>
        <span className="font-heading font-bold text-[20px] text-[#FFD203]">
          YYCL
        </span>
      </div>
    </TikTokFrameWrapper>
  );
}

// 03. Before / After
export function TemplateTikTok03BeforeAfter() {
  return (
    <TikTokFrameWrapper
      id="tiktok-03-before-after"
      title="TikTok 03 · Before & After"
      className="bg-[#001837]"
    >
      <BrandHeader badge="TRANSFORMACIÓN" badgeVariant="cyan" logoSize={88} />

      <div className="my-auto z-10 flex flex-col gap-9">
        <div>
          <span className="font-heading font-bold text-[20px] text-[#4DC2DA] uppercase tracking-widest block mb-2 text-center">
            Naturalidad al hablar
          </span>
          <h2 className="font-heading font-black text-[64px] leading-tight text-white text-center">
            Inglés de Escuela vs. Inglés Real
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {/* Antes */}
          <div className="bg-red-950/40 border-2 border-red-500/60 rounded-3xl p-7 flex items-center gap-5">
            <div className="w-14 h-14 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-2xl shrink-0">
              <X className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-red-400">
                Como nos enseñaron:
              </span>
              <p className="font-heading font-bold text-[32px] text-white/90 mt-0.5">
                “I am fine, thank you very much.”
              </p>
            </div>
          </div>

          {/* Después */}
          <div className="bg-[#FFD203] border-3 border-[#001837] rounded-3xl p-7 flex items-center gap-5 text-[#001837] shadow-[8px_8px_0px_#834296]">
            <div className="w-14 h-14 rounded-xl bg-[#001837] text-[#FFD203] flex items-center justify-center font-bold text-2xl shrink-0">
              <Check className="w-8 h-8" />
            </div>
            <div>
              <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#001837]">
                Como habla un nativo:
              </span>
              <p className="font-heading font-black text-[34px] text-[#001837] mt-0.5">
                “Doing great! How about yourself?”
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl text-center border border-white/15">
          <p className="font-body text-[22px] text-white font-medium">
            La naturalidad se entrena con conversación en vivo, no memorizando tablas.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-heading font-semibold text-[18px] text-[#4DC2DA]">
          Aprende a hablar con confianza
        </span>
        <span className="font-heading font-bold text-[20px] text-[#FFD203]">
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
      className="bg-[#001837]"
    >
      {/* Zona Superior Fija */}
      <div className="z-10 flex flex-col gap-4">
        <BrandHeader badge="RESPUESTA EN VIDEO" badgeVariant="yellow" logoSize={88} />
        <div className="bg-[#834296] p-6 rounded-2xl border border-white/20 text-center shadow-lg">
          <p className="font-heading font-black text-[32px] text-white leading-snug">
            ¿Por qué te trabas al hablar aunque entiendas todo? 👇
          </p>
        </div>
      </div>

      {/* Zona Central Libre para Video */}
      <div className="my-auto w-full h-[850px] rounded-3xl border-3 border-dashed border-[#FFD203]/40 flex flex-col items-center justify-center text-center p-8 bg-black/40">
        <Play className="w-16 h-16 text-[#FFD203] mb-3 opacity-80" />
        <span className="font-heading font-black text-[28px] text-white/90">
          [ ÁREA LIBRE PARA VIDEO DEL PROFESOR ]
        </span>
        <p className="font-body text-[18px] text-white/60 mt-1 max-w-[460px]">
          Espacio transparente para montar la grabación del docente hablando a cámara.
        </p>
      </div>

      {/* Zona Inferior Fija */}
      <div className="z-10 flex flex-col gap-3 border-t border-white/20 pt-5">
        <div className="bg-[#FFD203] text-[#001837] p-5 rounded-2xl flex items-center justify-between font-heading font-black text-[22px]">
          <span>👉 Prueba de diagnóstico gratis en la bio</span>
          <ArrowRight className="w-6 h-6" />
        </div>
      </div>
    </TikTokFrameWrapper>
  );
}

// 05. Storytelling
export function TemplateTikTok05Storytelling() {
  return (
    <TikTokFrameWrapper
      id="tiktok-05-storytelling"
      title="TikTok 05 · Storytelling de Impacto"
      className="bg-[#001837]"
    >
      <BrandHeader badge="HISTORIA REAL" badgeVariant="yellow" logoSize={88} />

      <div className="my-auto z-10 flex flex-col gap-8 text-center items-center">
        <Flame className="w-16 h-16 text-[#FFD203]" />
        
        <h2 className="font-heading font-black text-[64px] leading-tight text-white max-w-[900px]">
          La razón por la que te congelas al hablar inglés…
        </h2>

        <div className="bg-[#834296] p-8 rounded-3xl border border-white/20 text-left space-y-3 shadow-xl">
          <p className="font-body text-[25px] text-white/90 leading-relaxed font-medium">
            …no es que te falte vocabulario. Es que tu cerebro aprendió a ver el idioma como un examen donde cada error tiene castigo.
          </p>
          <p className="font-heading font-black text-[24px] text-[#FFD203]">
            En YYCL cambiamos esa programación mental.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full text-white/70">
        <span className="font-body text-[18px]">
          Sí puedes. Yes You Can.
        </span>
        <span className="font-heading font-bold text-[20px] text-[#FFD203]">
          yyclanguages.com
        </span>
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
      className="bg-[#001837]"
    >
      <BrandHeader logoSize={88} />

      <div className="my-auto z-10 flex flex-col gap-8 items-center text-center">
        <YYCLStickerLogo size={180} rotate="-2deg" />

        <div>
          <h2 className="font-heading font-black text-[70px] leading-tight text-white">
            Yes You Can Languages
          </h2>
          <p className="font-heading font-black text-[32px] text-[#FFD203] mt-1">
            Pierde el miedo a hablar inglés.
          </p>
        </div>

        <div className="bg-white/10 p-7 rounded-3xl border border-white/20 max-w-[800px]">
          <p className="font-body text-[26px] text-white/90 font-medium">
            Agenda tu clase de diagnóstico gratuita en el link del perfil 🔗
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full text-white/70">
        <span className="font-body text-[20px]">
          Síguenos para más contenido diario
        </span>
        <span className="font-heading font-black text-[22px] text-[#FFD203]">
          @yyclanguages
        </span>
      </div>
    </TikTokFrameWrapper>
  );
}
