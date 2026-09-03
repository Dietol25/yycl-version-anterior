import React from "react";
import {
  BrandHeader,
  BrandFooter,
  UserAvatar,
  BadgeDS,
  YYCLStickerLogo,
} from "./DesignElements";
import { MessageCircle } from "lucide-react";

// Wrapper base para Instagram Stories (1080 x 1920 px exactos)
export function StoryFrameWrapper({
  id,
  title,
  children,
  className = "bg-[#834296]",
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

// 01. This or That
export function TemplateStory01ThisOrThat() {
  return (
    <StoryFrameWrapper
      id="story-01-this-or-that"
      title="Story 01 · This or That"
      className="bg-[#834296]"
    >
      <BrandHeader badge="THIS OR THAT?" badgeVariant="yellow" logoSize={180} />

      <div className="my-auto z-10 flex flex-col gap-9 items-center text-center">
        <div>
          <span className="font-heading font-extrabold text-[26px] text-[#FFE2C0] uppercase tracking-widest block mb-2">
            Inglés para reuniones
          </span>
          <h2 className="font-heading font-black text-[72px] leading-tight text-white max-w-[920px]">
            ¿Cómo lo dirías en tu trabajo?
          </h2>
          <p className="font-body text-[30px] text-white/90 mt-2">
            Toca tu opción en la encuesta 👇
          </p>
        </div>

        {/* 2 Opciones Limpias y Grandes */}
        <div className="w-full flex flex-col gap-6 mt-4">
          <div className="bg-white/15 p-9 rounded-3xl border-3 border-white/30 flex items-center justify-between shadow-xl">
            <div className="text-left">
              <span className="text-[20px] font-heading font-bold text-[#FFD203] uppercase tracking-wider block">
                Opción A
              </span>
              <p className="font-heading font-black text-[46px] text-white mt-1">
                “I look forward to meet you”
              </p>
            </div>
            <div className="w-20 h-20 rounded-2xl bg-white/25 border-2 border-white/40 flex items-center justify-center font-bold text-3xl shrink-0">
              A
            </div>
          </div>

          <div className="bg-[#FFD203] text-[#001837] p-9 rounded-3xl border-4 border-[#001837] shadow-[10px_10px_0px_#001837] flex items-center justify-between">
            <div className="text-left">
              <span className="text-[20px] font-heading font-bold text-[#001837] uppercase tracking-wider block">
                Opción B
              </span>
              <p className="font-heading font-black text-[46px] text-[#001837] mt-1">
                “I look forward to meeting you”
              </p>
            </div>
            <div className="w-20 h-20 rounded-2xl bg-[#001837] text-[#FFD203] flex items-center justify-center font-bold text-3xl shrink-0">
              B
            </div>
          </div>
        </div>

        <div className="bg-[#001837] text-white p-7 rounded-3xl border-2 border-white/20 max-w-[900px]">
          <p className="font-body text-[26px] leading-relaxed">
            💡 <strong>Respuesta correcta: B.</strong> Tras la expresión <em>“look forward to”</em> el verbo va siempre en gerundio (-ing).
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t-2 border-white/25 pt-8 z-10 w-full">
        <span className="font-heading font-extrabold text-[28px] text-[#FFE2C0]">
          ¿Acertaste? Vota en la story
        </span>
        <span className="font-heading font-black text-[28px] text-[#FFD203]">
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
      <BrandHeader badge="QUIZ TIME 🧠" badgeVariant="yellow" logoSize={180} />

      <div className="my-auto z-10 flex flex-col gap-9 items-center text-center">
        <div>
          <span className="text-[26px] font-heading font-bold text-[#FFE2C0] uppercase tracking-widest block mb-2">
            Expresiones Idiomáticas
          </span>
          <h2 className="font-heading font-black text-[70px] leading-tight text-white max-w-[920px]">
            ¿Qué significa: <br />
            <span className="text-[#001837] bg-[#FFD203] px-6 py-2 rounded-2xl inline-block mt-3">
              “Keep me in the loop”
            </span>
          </h2>
        </div>

        <div className="w-full flex flex-col gap-4 mt-2">
          <div className="bg-white text-[#001837] p-8 rounded-3xl border-3 border-[#001837] shadow-lg flex items-center gap-6 text-left">
            <div className="w-16 h-16 rounded-2xl bg-[#001837] text-white flex items-center justify-center font-bold text-3xl shrink-0">
              A
            </div>
            <p className="font-heading font-extrabold text-[34px]">
              Mantenme informado de las novedades
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm text-white p-8 rounded-3xl border-2 border-white/30 flex items-center gap-6 text-left">
            <div className="w-16 h-16 rounded-2xl bg-white/30 text-white flex items-center justify-center font-bold text-3xl shrink-0">
              B
            </div>
            <p className="font-heading font-bold text-[34px]">
              No me cuentes nada hasta el final
            </p>
          </div>

          <div className="bg-white/20 backdrop-blur-sm text-white p-8 rounded-3xl border-2 border-white/30 flex items-center gap-6 text-left">
            <div className="w-16 h-16 rounded-2xl bg-white/30 text-white flex items-center justify-center font-bold text-3xl shrink-0">
              C
            </div>
            <p className="font-heading font-bold text-[34px]">
              Ponme en el centro de la reunión
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t-2 border-white/25 pt-8 z-10 w-full">
        <span className="font-heading font-extrabold text-[28px] text-[#FFE2C0]">
          ¿Acertaste? Vota en la story
        </span>
        <span className="font-heading font-black text-[28px] text-[#FFD203]">
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
      className="bg-[#834296]"
    >
      <BrandHeader badge="ENCUESTA" badgeVariant="yellow" logoSize={180} />

      <div className="my-auto z-10 flex flex-col gap-9">
        <div>
          <span className="font-heading font-bold text-[26px] text-[#FFE2C0] uppercase tracking-widest block mb-2">
            Seguridad al hablar
          </span>
          <h2 className="font-heading font-black text-[72px] leading-tight text-white">
            ¿Qué es lo que más te frena al hablar inglés?
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-white text-[#001837] p-8 rounded-3xl border-3 border-[#001837] shadow-lg flex items-center justify-between">
            <span className="font-heading font-black text-[36px]">
              😰 Quedarme en blanco
            </span>
            <span className="font-heading font-black text-[34px] text-[#834296]">
              64%
            </span>
          </div>

          <div className="bg-white text-[#001837] p-8 rounded-3xl border-3 border-[#001837] shadow-lg flex items-center justify-between">
            <span className="font-heading font-black text-[36px]">
              🗣️ Mi pronunciación
            </span>
            <span className="font-heading font-black text-[34px] text-[#834296]">
              21%
            </span>
          </div>

          <div className="bg-white text-[#001837] p-8 rounded-3xl border-3 border-[#001837] shadow-lg flex items-center justify-between">
            <span className="font-heading font-black text-[36px]">
              📚 Falta de vocabulario
            </span>
            <span className="font-heading font-black text-[34px] text-[#834296]">
              15%
            </span>
          </div>
        </div>

        <div className="bg-[#001837] p-7 rounded-3xl border-2 border-white/20">
          <p className="font-body text-[26px] text-white leading-relaxed">
            En YYCL entrenamos la seguridad psicológica antes que la gramática estricta.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t-2 border-white/25 pt-8 z-10 w-full">
        <span className="font-heading font-extrabold text-[28px] text-[#FFE2C0]">
          Yes You Can Languages
        </span>
        <span className="font-heading font-black text-[28px] text-[#FFD203]">
          @yyclanguages
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
      className="bg-[#834296]"
    >
      <BrandHeader badge="PREGÚNTALE A NATY" badgeVariant="yellow" logoSize={180} />

      <div className="my-auto z-10 flex flex-col gap-9 items-center text-center">
        <UserAvatar
          src="/images/naty-sanchez.png"
          alt="Naty Sánchez"
          name="Naty Sánchez"
          role="Directora Académica"
          size={140}
          borderColor="border-[#FFD203]"
        />

        <div>
          <h2 className="font-heading font-black text-[68px] leading-tight text-white max-w-[920px]">
            ¿Qué palabra en inglés te cuesta más pronunciar?
          </h2>
          <p className="font-body text-[30px] text-[#FFE2C0] mt-2 font-medium">
            Escríbela abajo y te responderemos en video 👇
          </p>
        </div>

        <div className="w-full bg-white text-[#001837] p-8 rounded-3xl border-3 border-[#001837] shadow-xl flex flex-col gap-4">
          <div className="flex items-center justify-between text-[#834296] font-heading font-black text-[26px]">
            <span>Escribe tu palabra o frase...</span>
            <MessageCircle className="w-8 h-8" />
          </div>
          <div className="bg-slate-100 h-20 rounded-2xl border-2 border-slate-200 flex items-center px-6 text-slate-400 font-body text-[26px]">
            Escribe aquí...
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t-2 border-white/25 pt-8 z-10 w-full">
        <span className="font-body text-[28px] text-[#FFE2C0]">
          Respuestas en video hoy 🎬
        </span>
        <span className="font-heading font-black text-[28px] text-[#FFD203]">
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
      className="bg-[#834296]"
    >
      <BrandHeader badge="FLASH TIP ⚡" badgeVariant="yellow" logoSize={180} />

      <div className="my-auto z-10 flex flex-col gap-8">
        <div>
          <span className="font-heading font-bold text-[26px] text-[#FFE2C0] uppercase tracking-widest block mb-2">
            Pronunciación
          </span>
          <h2 className="font-heading font-black text-[72px] leading-tight text-white">
            La diferencia entre: <br />
            <span className="text-[#FFD203]">“Desert”</span> y{" "}
            <span className="text-[#CAFFFF]">“Dessert”</span>
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          <div className="bg-[#001837] p-8 rounded-3xl border-2 border-white/20 flex items-center justify-between">
            <div>
              <p className="font-heading font-black text-[44px] text-[#FFD203]">
                Desert 🏜️
              </p>
              <p className="font-body text-[26px] text-white/90 mt-1">
                Énfasis en la 1ra sílaba: <em>/ˈdɛzərt/</em> = Desierto
              </p>
            </div>
            <span className="bg-white/20 text-white px-5 py-2 rounded-xl text-lg font-black uppercase">
              1 S
            </span>
          </div>

          <div className="bg-[#001837] p-8 rounded-3xl border-2 border-white/20 flex items-center justify-between">
            <div>
              <p className="font-heading font-black text-[44px] text-[#CAFFFF]">
                Dessert 🍰
              </p>
              <p className="font-body text-[26px] text-white/90 mt-1">
                Énfasis en la 2da sílaba: <em>/dɪˈzɜːrt/</em> = Postre
              </p>
            </div>
            <span className="bg-[#FFD203] text-[#001837] px-5 py-2 rounded-xl text-lg font-black uppercase">
              2 S
            </span>
          </div>
        </div>

        <div className="bg-[#FFE2C0] text-[#001837] p-6 rounded-2xl text-center border-2 border-[#001837]">
          <p className="font-body text-[26px] font-bold">
            💡 <strong>Truco:</strong> <em>Dessert</em> tiene 2 ‘S’ porque siempre queremos doble postre.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t-2 border-white/25 pt-8 z-10 w-full">
        <span className="font-heading font-extrabold text-[28px] text-white">
          Guarda esta story 📌
        </span>
        <span className="font-heading font-black text-[28px] text-[#FFD203]">
          @yyclanguages
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
      className="bg-[#834296]"
    >
      <BrandHeader badge="CUPOS LIMITADOS" badgeVariant="yellow" logoSize={180} />

      <div className="my-auto z-10 flex flex-col gap-9 items-center text-center">
        <YYCLStickerLogo size={220} rotate="-3deg" />

        <h2 className="font-heading font-black text-[76px] leading-[1.08] text-white max-w-[920px]">
          ¿Listo para desbloquear tu inglés este mes?
        </h2>

        <p className="font-body text-[32px] text-white/90 max-w-[860px] leading-relaxed">
          Abrimos nuevos cupos para la <strong className="text-[#FFD203]">Prueba de Diagnóstico Gratuita</strong> 1-a-1 por Zoom.
        </p>

        {/* Botón de Enlace Grande */}
        <div className="w-full bg-[#FFD203] text-[#001837] p-9 rounded-3xl border-4 border-[#001837] shadow-[10px_10px_0px_#001837] flex items-center justify-center gap-4">
          <span className="font-heading font-black text-[38px]">
            🔗 Toca aquí para agendar
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t-2 border-white/25 pt-8 z-10 w-full text-white/85">
        <span className="font-body text-[26px]">
          100% online · Sin compromiso
        </span>
        <span className="font-heading font-black text-[28px] text-[#FFD203]">
          yyclanguages.com
        </span>
      </div>
    </StoryFrameWrapper>
  );
}
