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
  StickyNote,
  YYCLLogoMark,
} from "./DesignElements";
import { HelpCircle, MessageCircle, ArrowDown } from "lucide-react";

// Wrapper base para Instagram Stories (1080 x 1920 px exactos)
export function StoryFrameWrapper({
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
      data-template-type="instagram-story"
      className={`w-[1080px] h-[1920px] relative overflow-hidden flex flex-col justify-between p-[84px] text-white select-none ${className}`}
      style={{ boxSizing: "border-box" }}
    >
      {children}
    </div>
  );
}

// 01. This or That (Collage de Votación)
export function TemplateStory01ThisOrThat() {
  return (
    <StoryFrameWrapper
      id="story-01-this-or-that"
      title="Story 01 · This or That"
      className="bg-[#001837] bg-notebook-grid"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="THIS OR THAT?" variant="yellow" rotate="-2deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-10 items-center text-center relative">
        <Tape color="bg-[#FFD203]/90" rotate="3deg" />
        
        <div>
          <h2 className="font-heading font-black text-[66px] leading-tight text-white max-w-[900px]">
            ¿Cómo dirías en una reunión de trabajo?
          </h2>
          <HandwrittenNote text="Toca tu opción favorita 👇" color="text-[#4DC2DA]" rotate="-2deg" className="mt-2 text-3xl" />
        </div>

        {/* 2 Opciones de Votación tipo Notas de Papel */}
        <div className="w-full flex flex-col gap-6 mt-2">
          {/* Opción A */}
          <div className="bg-white/10 backdrop-blur-md p-9 rounded-3xl border-3 border-white/30 flex items-center justify-between shadow-2xl relative -rotate-0.5">
            <Tape className="absolute -top-3.5 left-8 w-20 h-5" color="bg-white/40" rotate="-2deg" />
            <div className="text-left">
              <span className="text-[20px] font-heading font-bold text-[#FFD203] uppercase tracking-wider block">
                Opción A
              </span>
              <p className="font-heading font-black text-[42px] text-white mt-1">
                “I look forward to meet you”
              </p>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white/20 border-2 border-white/40 flex items-center justify-center font-bold text-2xl">
              A
            </div>
          </div>

          {/* Opción B */}
          <div className="bg-[#FFD203] p-9 rounded-3xl border-4 border-[#001837] shadow-[10px_10px_0px_#834296] flex items-center justify-between text-[#001837] relative rotate-0.5">
            <Tape className="absolute -top-3.5 right-8 w-24 h-5" color="bg-[#001837]/60" rotate="2deg" />
            <div className="text-left">
              <span className="text-[20px] font-heading font-bold text-[#001837] uppercase tracking-wider block">
                Opción B
              </span>
              <p className="font-heading font-black text-[42px] text-[#001837] mt-1">
                “I look forward to meeting you”
              </p>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-[#001837] text-[#FFD203] flex items-center justify-center font-bold text-2xl">
              B
            </div>
          </div>
        </div>

        {/* Nota explicativa de papel */}
        <div className="bg-[#FFE2C0] text-[#001837] p-6 rounded-2xl border-2 border-[#001837] shadow-md mt-4 max-w-[850px]">
          <p className="font-body text-[24px] font-medium text-[#001837]">
            💡 <strong>Respuesta correcta: Opción B.</strong> Después de la estructura <em>“look forward to”</em> el verbo va siempre en gerundio (-ing).
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-heading font-semibold text-[22px] text-white/80">
          Desliza para más tips diarios
        </span>
        <span className="font-heading font-black text-[24px] text-[#FFD203]">
          @yyclanguages
        </span>
      </div>
    </StoryFrameWrapper>
  );
}

// 02. Quiz Interactivo
export function TemplateStory02Quiz() {
  return (
    <StoryFrameWrapper
      id="story-02-quiz"
      title="Story 02 · Quiz Interactivo"
      className="bg-[#834296] bg-notebook-grid"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="QUIZ TIME 🧠" variant="yellow" rotate="3deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-8 items-center text-center">
        <HelpCircle className="w-16 h-16 text-[#FFD203]" />
        
        <div>
          <h2 className="font-heading font-black text-[60px] leading-tight text-white max-w-[900px]">
            ¿Qué significa la frase: <br />
            <span className="text-[#001837] bg-[#FFD203] px-5 py-1.5 rounded-xl inline-block mt-3 -rotate-1">
              “Keep me in the loop”
            </span>
          </h2>
          <HandwrittenNote text="¿Cuál eliges? Vota abajo 👇" color="text-[#FFE2C0]" rotate="2deg" className="mt-2 text-2xl" />
        </div>

        {/* Opciones tipo tarjetas de examen */}
        <div className="w-full flex flex-col gap-4 mt-2">
          <div className="bg-white text-[#001837] p-7 rounded-2xl border-3 border-[#001837] shadow-[6px_6px_0px_#001837] flex items-center gap-5 text-left -rotate-0.5">
            <div className="w-12 h-12 rounded-xl bg-[#001837] text-white flex items-center justify-center font-bold text-2xl shrink-0">
              A
            </div>
            <p className="font-heading font-bold text-[30px]">
              Mantenme informado de las novedades
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm text-white p-7 rounded-2xl border-2 border-white/30 flex items-center gap-5 text-left">
            <div className="w-12 h-12 rounded-xl bg-white/30 text-white flex items-center justify-center font-bold text-2xl shrink-0">
              B
            </div>
            <p className="font-heading font-bold text-[30px]">
              No me cuentes nada hasta el final
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm text-white p-7 rounded-2xl border-2 border-white/30 flex items-center gap-5 text-left rotate-0.5">
            <div className="w-12 h-12 rounded-xl bg-white/30 text-white flex items-center justify-center font-bold text-2xl shrink-0">
              C
            </div>
            <p className="font-heading font-bold text-[30px]">
              Ponme en el centro de la reunión
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-heading font-semibold text-[22px] text-[#FFE2C0]">
          ¿Acertaste? Comparte tu voto
        </span>
        <StickerBadge text="INGLÉS REAL" variant="cyan" rotate="-2deg" />
      </div>
    </StoryFrameWrapper>
  );
}

// 03. Encuesta / Poll Anónima
export function TemplateStory03Poll() {
  return (
    <StoryFrameWrapper
      id="story-03-poll"
      title="Story 03 · Encuesta / Poll"
      className="bg-[#FBF8F2] bg-notebook-grid text-[#001837]"
    >
      <div className="flex items-center justify-between z-10 text-[#001837]">
        <YYCLLogoMark variant="default" />
        <StickerBadge text="ENCUESTA ANÓNIMA" variant="purple" rotate="-3deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-9 text-[#001837]">
        <div className="text-center relative">
          <h2 className="font-heading font-black text-[64px] leading-tight text-[#001837]">
            ¿Qué es lo que más te frena al hablar inglés?
          </h2>
          <HandwrittenNote text="Sé 100% sincero/a 👇" color="text-[#834296]" rotate="2deg" className="mt-2 text-3xl" />
        </div>

        {/* 3 Barras de Encuesta con Collage */}
        <div className="flex flex-col gap-5">
          <div className="bg-white p-7 rounded-2xl border-3 border-[#001837] shadow-[6px_6px_0px_#001837] flex items-center justify-between relative -rotate-0.5">
            <Tape className="absolute -top-3.5 left-8 w-20 h-5" color="bg-[#FFD203]/70" rotate="-2deg" />
            <span className="font-heading font-extrabold text-[32px] text-[#001837]">
              😰 Quedarme en blanco
            </span>
            <span className="font-heading font-black text-[30px] text-[#834296]">
              64%
            </span>
          </div>

          <div className="bg-white p-7 rounded-2xl border-3 border-[#001837] shadow-[6px_6px_0px_#001837] flex items-center justify-between relative rotate-0.5">
            <span className="font-heading font-extrabold text-[32px] text-[#001837]">
              🗣️ Mi acento / pronunciación
            </span>
            <span className="font-heading font-black text-[30px] text-[#834296]">
              21%
            </span>
          </div>

          <div className="bg-white p-7 rounded-2xl border-3 border-[#001837] shadow-[6px_6px_0px_#001837] flex items-center justify-between relative -rotate-0.5">
            <span className="font-heading font-extrabold text-[32px] text-[#001837]">
              📚 Falta de vocabulario
            </span>
            <span className="font-heading font-black text-[30px] text-[#834296]">
              15%
            </span>
          </div>
        </div>

        {/* Nota de enfoque YYCL */}
        <div className="bg-[#001837] text-white p-7 rounded-2xl text-center shadow-lg">
          <p className="font-body text-[24px] font-medium">
            En YYCL trabajamos la seguridad psicológica antes que la gramática rígida.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t-2 border-[#001837]/15 pt-8 z-10 text-[#001837] w-full">
        <span className="font-heading font-bold text-[22px]">
          Yes You Can Languages
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-6 py-2 rounded-xl font-heading font-black text-[18px]">
          Sí Puedes
        </div>
      </div>
    </StoryFrameWrapper>
  );
}

// 04. Pregunta Abierta (Caja con Foto Polaroid)
export function TemplateStory04Question() {
  return (
    <StoryFrameWrapper
      id="story-04-question"
      title="Story 04 · Caja de Preguntas"
      className="bg-[#001837] bg-notebook-dots"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="PREGÚNTALE A NATY" variant="yellow" rotate="2deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-9 items-center text-center">
        {/* Polaroid de Naty */}
        <div className="bg-white p-3 pb-6 rounded-2xl shadow-2xl -rotate-2 border-2 border-black/10">
          <div className="w-36 h-36 rounded-xs overflow-hidden relative">
            <Image
              src="/images/SRC_001_Imagen de Codex 22 ago 2026, 10_05_51 p.m..png"
              alt="Naty Sánchez"
              fill
              className="object-cover"
            />
          </div>
          <p className="font-handwritten text-base text-[#001837] font-bold mt-2">
            Naty Sánchez
          </p>
        </div>

        <div>
          <h2 className="font-heading font-black text-[60px] leading-tight text-white max-w-[900px]">
            ¿Qué palabra en inglés te cuesta más pronunciar?
          </h2>
          <HandwrittenNote text="Escríbela y te respondo en video 🎬" color="text-[#FFD203]" rotate="-2deg" className="mt-2 text-3xl" />
        </div>

        {/* Sticker interactivo simulado */}
        <div className="w-full bg-[#FFE2C0] text-[#001837] p-8 rounded-3xl border-3 border-[#001837] shadow-[8px_8px_0px_#FFD203] flex flex-col gap-3">
          <div className="flex items-center justify-between text-[#834296] font-heading font-black text-[20px]">
            <span>Haz tu pregunta a Naty...</span>
            <MessageCircle className="w-7 h-7" />
          </div>
          <div className="bg-white h-16 rounded-xl border-2 border-dashed border-[#001837]/30 flex items-center px-6 text-[#001837]/50 font-body text-[22px]">
            Escribe tu palabra aquí...
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-body text-[20px] text-white/70">
          Respuestas en video durante el día 🎬
        </span>
        <span className="font-heading font-black text-[22px] text-[#FFD203]">
          @yyclanguages
        </span>
      </div>
    </StoryFrameWrapper>
  );
}

// 05. Flash Tip del Día en Story
export function TemplateStory05DailyTip() {
  return (
    <StoryFrameWrapper
      id="story-05-tip"
      title="Story 05 · Tip del Día"
      className="bg-[#3C4C92] bg-notebook-grid"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="FLASH TIP ⚡" variant="yellow" rotate="-2deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-8">
        <Tape color="bg-[#FFE2C0]/90" rotate="3deg" className="self-start -mb-4" />
        
        <div>
          <span className="font-heading font-bold text-[20px] text-[#4DC2DA] uppercase tracking-widest block mb-1">
            Pronunciación Profesional
          </span>
          <h2 className="font-heading font-black text-[62px] leading-tight text-white">
            La diferencia entre: <br />
            <span className="text-[#FFD203]">“Desert”</span> y{" "}
            <span className="text-[#CAFFFF]">“Dessert”</span>
          </h2>
        </div>

        <div className="flex flex-col gap-5 mt-2">
          <div className="bg-[#001837] p-7 rounded-2xl border-2 border-white/20 flex items-center justify-between shadow-lg">
            <div>
              <p className="font-heading font-black text-[38px] text-[#FFD203]">
                Desert 🏜️
              </p>
              <p className="font-body text-[22px] text-white/80">
                Énfasis en la 1ra sílaba: <em>/ˈdɛzərt/</em> = Desierto
              </p>
            </div>
            <span className="bg-white/10 text-white px-4 py-1.5 rounded-lg text-sm font-bold">
              1 S
            </span>
          </div>

          <div className="bg-[#001837] p-7 rounded-2xl border-2 border-white/20 flex items-center justify-between shadow-lg">
            <div>
              <p className="font-heading font-black text-[38px] text-[#CAFFFF]">
                Dessert 🍰
              </p>
              <p className="font-body text-[22px] text-white/80">
                Énfasis en la 2da sílaba: <em>/dɪˈzɜːrt/</em> = Postre
              </p>
            </div>
            <span className="bg-[#FFD203] text-[#001837] px-4 py-1.5 rounded-lg text-sm font-bold">
              2 S
            </span>
          </div>
        </div>

        <div className="bg-[#834296] p-5 rounded-xl text-center shadow-md">
          <p className="font-body text-[22px] text-white font-medium">
            💡 <strong>Truco mnemotécnico:</strong> <em>Dessert</em> tiene 2 ‘S’ porque siempre queremos doble postre.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-heading font-semibold text-[20px] text-white">
          Guarda esta story 📌
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-5 py-2 rounded-xl font-heading font-extrabold text-[18px]">
          YYCL
        </div>
      </div>
    </StoryFrameWrapper>
  );
}

// 06. CTA / Reserva Diagnóstico Story
export function TemplateStory06CTA() {
  return (
    <StoryFrameWrapper
      id="story-06-cta"
      title="Story 06 · CTA / Cupos Diagnóstico"
      className="bg-[#001837] bg-notebook-dots"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="CUPOS LIMITADOS" variant="red" rotate="3deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-9 items-center text-center relative">
        <Tape color="bg-[#FFD203]/90" rotate="-2deg" className="self-center" />
        
        <h2 className="font-heading font-black text-[72px] leading-[1.08] text-white max-w-[900px]">
          ¿Listo para desbloquear tu inglés este mes?
        </h2>

        <p className="font-body text-[28px] text-white/90 max-w-[820px] leading-relaxed">
          Abrimos 15 nuevos cupos para la <strong className="text-[#FFD203]">Prueba de Diagnóstico Gratuita</strong> 1-a-1 por Zoom.
        </p>

        {/* Sticker tipo Link */}
        <div className="w-full bg-[#FFD203] text-[#001837] p-9 rounded-3xl border-4 border-[#001837] shadow-[10px_10px_0px_#4DC2DA] flex items-center justify-center gap-4 mt-2">
          <span className="font-heading font-black text-[34px]">
            🔗 Toca aquí para agendar tu test gratis
          </span>
        </div>

        <div className="flex items-center gap-3 text-[#4DC2DA]">
          <ArrowDown className="w-7 h-7 animate-bounce" />
          <HandwrittenNote text="Enlace directo en la story 📲" color="text-[#FFE2C0]" rotate="-2deg" className="text-2xl" />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-body text-[20px] text-white/70">
          100% online · Sin compromiso
        </span>
        <span className="font-heading font-bold text-[22px] text-[#FFD203]">
          yyclanguages.com
        </span>
      </div>
    </StoryFrameWrapper>
  );
}
