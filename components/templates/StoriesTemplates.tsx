import React from "react";
import {
  BrandHeader,
  BrandFooter,
  UserAvatar,
  MarkerHighlight,
  YYCLStickerLogo,
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
      className={`w-[1080px] h-[1920px] relative overflow-hidden flex flex-col justify-between p-[96px] text-white select-none ${className}`}
      style={{ boxSizing: "border-box" }}
    >
      {children}
    </div>
  );
}

// 01. This or That
export function TemplateStory01ThisOrThat() {
  return (
    <StoryFrameWrapper
      id="story-01-this-or-that"
      title="Story 01 · This or That"
      className="bg-[#001837]"
    >
      <BrandHeader badge="THIS OR THAT?" badgeVariant="yellow" logoSize={88} />

      <div className="my-auto z-10 flex flex-col gap-10 items-center text-center">
        <div>
          <span className="font-heading font-bold text-[20px] text-[#4DC2DA] uppercase tracking-widest block mb-2">
            Inglés para reuniones
          </span>
          <h2 className="font-heading font-black text-[68px] leading-tight text-white max-w-[900px]">
            ¿Cómo lo dirías en el trabajo?
          </h2>
          <p className="font-body text-[26px] text-white/80 mt-2">
            Toca tu opción en la encuesta 👇
          </p>
        </div>

        {/* 2 Opciones Limpias */}
        <div className="w-full flex flex-col gap-6 mt-4">
          <div className="bg-white/10 p-9 rounded-3xl border border-white/20 flex items-center justify-between shadow-lg">
            <div className="text-left">
              <span className="text-[18px] font-heading font-bold text-[#FFD203] uppercase tracking-wider block">
                Opción A
              </span>
              <p className="font-heading font-black text-[42px] text-white mt-1">
                “I look forward to meet you”
              </p>
            </div>
            <div className="w-16 h-16 rounded-2xl bg-white/20 border border-white/30 flex items-center justify-center font-bold text-2xl">
              A
            </div>
          </div>

          <div className="bg-[#FFD203] text-[#001837] p-9 rounded-3xl border-3 border-[#001837] shadow-[6px_6px_0px_#834296] flex items-center justify-between">
            <div className="text-left">
              <span className="text-[18px] font-heading font-bold text-[#001837] uppercase tracking-wider block">
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

        <div className="bg-[#834296] text-white p-6 rounded-2xl border border-white/20 max-w-[850px]">
          <p className="font-body text-[22px] font-medium">
            💡 <strong>Respuesta correcta: B.</strong> Tras la expresión <em>“look forward to”</em> el verbo va siempre en gerundio (-ing).
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-heading font-semibold text-[20px] text-white/80">
          Desliza para más tips diarios
        </span>
        <span className="font-heading font-bold text-[20px] text-[#FFD203]">
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
      className="bg-[#834296]"
    >
      <BrandHeader badge="QUIZ TIME 🧠" badgeVariant="yellow" logoSize={88} />

      <div className="my-auto z-10 flex flex-col gap-9 items-center text-center">
        <div>
          <span className="text-[20px] font-heading font-bold text-[#FFE2C0] uppercase tracking-widest block mb-2">
            Expresiones Idiomáticas
          </span>
          <h2 className="font-heading font-black text-[62px] leading-tight text-white max-w-[900px]">
            ¿Qué significa: <br />
            <span className="text-[#001837] bg-[#FFD203] px-5 py-1.5 rounded-2xl inline-block mt-3">
              “Keep me in the loop”
            </span>
          </h2>
        </div>

        <div className="w-full flex flex-col gap-4 mt-2">
          <div className="bg-white text-[#001837] p-7 rounded-2xl border border-black/10 shadow-md flex items-center gap-5 text-left">
            <div className="w-12 h-12 rounded-xl bg-[#001837] text-white flex items-center justify-center font-bold text-2xl shrink-0">
              A
            </div>
            <p className="font-heading font-bold text-[28px]">
              Mantenme informado de las novedades
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm text-white p-7 rounded-2xl border border-white/30 flex items-center gap-5 text-left">
            <div className="w-12 h-12 rounded-xl bg-white/30 text-white flex items-center justify-center font-bold text-2xl shrink-0">
              B
            </div>
            <p className="font-heading font-bold text-[28px]">
              No me cuentes nada hasta el final
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm text-white p-7 rounded-2xl border border-white/30 flex items-center gap-5 text-left">
            <div className="w-12 h-12 rounded-xl bg-white/30 text-white flex items-center justify-center font-bold text-2xl shrink-0">
              C
            </div>
            <p className="font-heading font-bold text-[28px]">
              Ponme en el centro de la reunión
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-heading font-semibold text-[20px] text-[#FFE2C0]">
          ¿Acertaste? Vota en la story
        </span>
        <span className="font-heading font-bold text-[20px] text-[#FFD203]">
          @yyclanguages
        </span>
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
      className="bg-[#001837]"
    >
      <BrandHeader badge="ENCUESTA" badgeVariant="yellow" logoSize={88} />

      <div className="my-auto z-10 flex flex-col gap-9">
        <div>
          <span className="font-heading font-bold text-[20px] text-[#4DC2DA] uppercase tracking-widest block mb-2">
            Seguridad al hablar
          </span>
          <h2 className="font-heading font-black text-[64px] leading-tight text-white">
            ¿Qué es lo que más te frena al hablar inglés?
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-white text-[#001837] p-7 rounded-2xl border border-black/10 shadow-md flex items-center justify-between">
            <span className="font-heading font-black text-[30px]">
              😰 Quedarme en blanco
            </span>
            <span className="font-heading font-black text-[28px] text-[#834296]">
              64%
            </span>
          </div>

          <div className="bg-white text-[#001837] p-7 rounded-2xl border border-black/10 shadow-md flex items-center justify-between">
            <span className="font-heading font-black text-[30px]">
              🗣️ Mi acento / pronunciación
            </span>
            <span className="font-heading font-black text-[28px] text-[#834296]">
              21%
            </span>
          </div>

          <div className="bg-white text-[#001837] p-7 rounded-2xl border border-black/10 shadow-md flex items-center justify-between">
            <span className="font-heading font-black text-[30px]">
              📚 Falta de vocabulario
            </span>
            <span className="font-heading font-black text-[28px] text-[#834296]">
              15%
            </span>
          </div>
        </div>

        <div className="bg-white/10 p-7 rounded-2xl border border-white/15">
          <p className="font-body text-[22px] text-white/90 font-medium">
            En YYCL entrenamos la seguridad psicológica antes que la gramática estricta.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-heading font-bold text-[20px] text-[#FFE2C0]">
          Yes You Can Languages
        </span>
        <span className="font-heading font-black text-[20px] text-[#FFD203]">
          Sí Puedes
        </span>
      </div>
    </StoryFrameWrapper>
  );
}

// 04. Pregunta Abierta (Avatar Real de Naty Sánchez)
export function TemplateStory04Question() {
  return (
    <StoryFrameWrapper
      id="story-04-question"
      title="Story 04 · Caja de Preguntas"
      className="bg-[#001837]"
    >
      <BrandHeader badge="PREGÚNTALE A NATY" badgeVariant="yellow" logoSize={88} />

      <div className="my-auto z-10 flex flex-col gap-9 items-center text-center">
        <UserAvatar
          src="/images/SRC_001_Imagen de Codex 22 ago 2026, 10_05_51 p.m..png"
          alt="Naty Sánchez"
          name="Naty Sánchez"
          role="Directora Académica"
          size={120}
          borderColor="border-[#FFD203]"
        />

        <div>
          <h2 className="font-heading font-black text-[60px] leading-tight text-white max-w-[900px]">
            ¿Qué palabra en inglés te cuesta más pronunciar?
          </h2>
          <p className="font-body text-[24px] text-[#4DC2DA] mt-2">
            Escríbela abajo y te responderemos en video 👇
          </p>
        </div>

        <div className="w-full bg-white text-[#001837] p-8 rounded-3xl border border-black/10 shadow-lg flex flex-col gap-3">
          <div className="flex items-center justify-between text-[#834296] font-heading font-black text-[20px]">
            <span>Escribe tu palabra o frase...</span>
            <MessageCircle className="w-6 h-6" />
          </div>
          <div className="bg-slate-100 h-16 rounded-xl border border-slate-200 flex items-center px-5 text-slate-400 font-body text-[20px]">
            Escribe aquí...
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-body text-[20px] text-white/70">
          Respuestas durante el día en stories 🎬
        </span>
        <span className="font-heading font-bold text-[20px] text-[#FFD203]">
          @yyclanguages
        </span>
      </div>
    </StoryFrameWrapper>
  );
}

// 05. Flash Tip del Día
export function TemplateStory05DailyTip() {
  return (
    <StoryFrameWrapper
      id="story-05-tip"
      title="Story 05 · Tip del Día"
      className="bg-[#001837]"
    >
      <BrandHeader badge="FLASH TIP ⚡" badgeVariant="yellow" logoSize={88} />

      <div className="my-auto z-10 flex flex-col gap-8">
        <div>
          <span className="font-heading font-bold text-[18px] text-[#4DC2DA] uppercase tracking-widest block mb-1">
            Pronunciación
          </span>
          <h2 className="font-heading font-black text-[62px] leading-tight text-white">
            La diferencia entre: <br />
            <span className="text-[#FFD203]">“Desert”</span> y{" "}
            <span className="text-[#CAFFFF]">“Dessert”</span>
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-white/10 p-7 rounded-2xl border border-white/20 flex items-center justify-between">
            <div>
              <p className="font-heading font-black text-[36px] text-[#FFD203]">
                Desert 🏜️
              </p>
              <p className="font-body text-[20px] text-white/80">
                Énfasis en la 1ra sílaba: <em>/ˈdɛzərt/</em> = Desierto
              </p>
            </div>
            <span className="bg-white/10 text-white px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase">
              1 S
            </span>
          </div>

          <div className="bg-white/10 p-7 rounded-2xl border border-white/20 flex items-center justify-between">
            <div>
              <p className="font-heading font-black text-[36px] text-[#CAFFFF]">
                Dessert 🍰
              </p>
              <p className="font-body text-[20px] text-white/80">
                Énfasis en la 2da sílaba: <em>/dɪˈzɜːrt/</em> = Postre
              </p>
            </div>
            <span className="bg-[#FFD203] text-[#001837] px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase">
              2 S
            </span>
          </div>
        </div>

        <div className="bg-[#834296] p-5 rounded-2xl text-center">
          <p className="font-body text-[21px] text-white font-medium">
            💡 <strong>Truco:</strong> <em>Dessert</em> tiene 2 ‘S’ porque siempre queremos doble postre.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full">
        <span className="font-heading font-semibold text-[20px] text-white">
          Guarda esta story 📌
        </span>
        <span className="font-heading font-bold text-[20px] text-[#FFD203]">
          YYCL
        </span>
      </div>
    </StoryFrameWrapper>
  );
}

// 06. CTA / Reserva Diagnóstico
export function TemplateStory06CTA() {
  return (
    <StoryFrameWrapper
      id="story-06-cta"
      title="Story 06 · CTA / Cupos Diagnóstico"
      className="bg-[#001837]"
    >
      <BrandHeader badge="CUPOS LIMITADOS" badgeVariant="yellow" logoSize={88} />

      <div className="my-auto z-10 flex flex-col gap-9 items-center text-center">
        <YYCLStickerLogo size={120} rotate="-3deg" />

        <h2 className="font-heading font-black text-[70px] leading-[1.1] text-white max-w-[900px]">
          ¿Listo para desbloquear tu inglés este mes?
        </h2>

        <p className="font-body text-[26px] text-white/85 max-w-[820px] leading-relaxed">
          Abrimos nuevos cupos para la <strong className="text-[#FFD203]">Prueba de Diagnóstico Gratuita</strong> 1-a-1 por Zoom.
        </p>

        {/* Botón de Enlace Limpio */}
        <div className="w-full bg-[#FFD203] text-[#001837] p-8 rounded-3xl border-3 border-[#001837] shadow-[6px_6px_0px_#4DC2DA] flex items-center justify-center gap-4">
          <span className="font-heading font-black text-[32px]">
            🔗 Toca aquí para agendar tu test
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-8 z-10 w-full text-white/70">
        <span className="font-body text-[18px]">
          100% online · Sin compromiso
        </span>
        <span className="font-heading font-bold text-[20px] text-[#FFD203]">
          yyclanguages.com
        </span>
      </div>
    </StoryFrameWrapper>
  );
}
