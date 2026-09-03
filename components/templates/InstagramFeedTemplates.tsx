import React from "react";
import Image from "next/image";
import {
  Tape,
  StickerBadge,
  MarkerHighlight,
  BrushStroke,
  DoodleArrow,
  DoodleSpark,
  DoodleCircle,
  HandwrittenNote,
  StickyNote,
  TornPaperEdge,
  YYCLLogoMark,
  StarRating,
} from "./DesignElements";
import { Check, X, ArrowRight, Bookmark, MessageCircle } from "lucide-react";

// Wrapper base para Instagram Feed (1080 x 1350 px exactos)
export function FeedFrameWrapper({
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
      data-template-type="instagram-feed"
      className={`w-[1080px] h-[1350px] relative overflow-hidden flex flex-col justify-between p-[76px] text-white select-none ${className}`}
      style={{ boxSizing: "border-box" }}
    >
      {children}
    </div>
  );
}

// 01. Quote / Frase de Impacto (Editorial Collage)
export function TemplateIG01Quote() {
  return (
    <FeedFrameWrapper
      id="ig-feed-01-quote"
      title="01 · Quote / Frase de Impacto"
      className="bg-[#001837] bg-notebook-grid"
    >
      {/* Mancha orgánica de pintura en el fondo */}
      <div className="absolute top-20 right-10 w-[420px] h-[420px] bg-[#834296]/25 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-[#FFD203]/15 rounded-full blur-[80px] pointer-events-none" />

      {/* Header */}
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="YYCL MINDSET" variant="yellow" rotate="-2deg" />
      </div>

      {/* Composición Central Collage */}
      <div className="my-auto z-10 flex flex-col gap-8 relative">
        <Tape className="absolute -top-6 left-12" color="bg-[#FFD203]/90" rotate="-4deg" />
        
        <div className="relative pt-4">
          <DoodleSpark color="#FFD203" className="absolute -top-4 -left-6" />
          <h1 className="font-heading font-black text-[68px] leading-[1.12] tracking-tight text-white max-w-[940px]">
            You already know{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-[#001837] px-3 py-1 font-black">
                more English
              </span>
              <span className="absolute inset-0 bg-[#FFD203] -rotate-1 rounded-sm -z-0" />
            </span>{" "}
            than you think.
          </h1>
        </div>

        {/* Tarjeta tipo recorte de papel con sombra física */}
        <div className="relative mt-2">
          <div className="bg-[#FFE2C0] text-[#001837] p-8 rounded-2xl border-3 border-[#001837] shadow-[8px_8px_0px_#834296] max-w-[860px] relative">
            <Tape className="absolute -top-4 right-8 w-24 h-6" color="bg-white/80" rotate="3deg" />
            <p className="font-body text-[26px] leading-[1.45] text-[#001837]/90 font-medium">
              El verdadero bloqueo nunca fue tu vocabulario. Fue el miedo a equivocarte
              frente a otros. Cuando el entorno es seguro,{" "}
              <strong className="text-[#834296] font-bold">tu inglés fluye solo.</strong>
            </p>
          </div>

          {/* Anotación manuscrita con flecha doodle */}
          <div className="absolute -bottom-10 right-4 flex items-center gap-3">
            <DoodleArrow color="#FFD203" rotate="-15deg" className="w-14 h-10" />
            <HandwrittenNote text="¡Sí puedes!" color="text-[#FFD203]" rotate="4deg" />
          </div>
        </div>
      </div>

      {/* Footer con foto polaroid del equipo */}
      <div className="flex items-center justify-between border-t border-white/15 pt-8 z-10">
        <div className="flex items-center gap-5">
          {/* Polaroid Mini */}
          <div className="bg-white p-2 pb-4 rounded-lg shadow-xl -rotate-2 border border-black/10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-xs overflow-hidden relative bg-[#834296]">
              <Image
                src="/images/SRC_001_Imagen de Codex 22 ago 2026, 10_05_51 p.m..png"
                alt="Naty Sánchez"
                fill
                sizes="120px"
                className="object-cover"
              />
            </div>
            <span className="font-handwritten text-xs text-[#001837] mt-1 font-bold">
              Naty S.
            </span>
          </div>

          <div>
            <p className="font-heading font-extrabold text-[22px] text-white leading-tight">
              Naty Sánchez
            </p>
            <p className="font-body text-[16px] text-[#4DC2DA]">
              Directora Académica · YYCL
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-white/90 font-heading font-bold text-[18px]">
          <Bookmark className="w-6 h-6 text-[#FFD203]" />
          <span>Guarda este recordatorio</span>
        </div>
      </div>
    </FeedFrameWrapper>
  );
}

// 02. Tip de Inglés (Collage Cuaderno de Notas)
export function TemplateIG02Tip() {
  return (
    <FeedFrameWrapper
      id="ig-feed-02-tip"
      title="02 · Tip de Inglés Profesional"
      className="bg-[#FBF8F2] bg-notebook-grid text-[#001837]"
    >
      {/* Header */}
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="default" />
        <StickerBadge text="TIP DE LA SEMANA" variant="purple" rotate="2deg" />
      </div>

      {/* Body */}
      <div className="my-auto z-10 flex flex-col gap-6 text-[#001837]">
        <div className="relative">
          <span className="font-heading font-black uppercase text-[17px] tracking-widest text-[#834296] block">
            Business English Hacks
          </span>
          <h2 className="font-heading font-black text-[54px] leading-[1.12] text-[#001837] mt-1">
            3 phrasal verbs para sonar más{" "}
            <span className="relative inline-block px-1">
              <span className="relative z-10">natural</span>
              <BrushStroke color="#FFD203" className="absolute -bottom-2 -left-2 w-full h-8 -z-0 opacity-80" />
            </span>{" "}
            en reuniones
          </h2>
        </div>

        {/* 3 Tarjetas tipo Notas Adhesivas / Recortes */}
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-6 rounded-xl border-2 border-[#001837] shadow-[5px_5px_0px_#001837] relative -rotate-0.5">
            <Tape className="absolute -top-3.5 left-6 w-20 h-5" color="bg-[#FFD203]/70" rotate="-2deg" />
            <div className="flex items-center justify-between">
              <span className="font-heading font-black text-[26px] text-[#834296]">
                1. Bring up
              </span>
              <span className="text-[15px] font-bold bg-[#FFD203] text-[#001837] px-3 py-1 rounded-md">
                = Mencionar un tema
              </span>
            </div>
            <p className="font-body text-[21px] text-[#001837]/85 mt-2">
              “I’d like to <strong className="text-[#001837]">bring up</strong> the budget before we finish.”
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-[#001837] shadow-[5px_5px_0px_#001837] relative rotate-0.5">
            <Tape className="absolute -top-3.5 right-6 w-20 h-5" color="bg-[#4DC2DA]/70" rotate="2deg" />
            <div className="flex items-center justify-between">
              <span className="font-heading font-black text-[26px] text-[#834296]">
                2. Follow up
              </span>
              <span className="text-[15px] font-bold bg-[#4DC2DA] text-[#001837] px-3 py-1 rounded-md">
                = Dar seguimiento
              </span>
            </div>
            <p className="font-body text-[21px] text-[#001837]/85 mt-2">
              “Let’s <strong className="text-[#001837]">follow up</strong> on this next Tuesday via email.”
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-2 border-[#001837] shadow-[5px_5px_0px_#001837] relative -rotate-0.5">
            <Tape className="absolute -top-3.5 left-10 w-20 h-5" color="bg-[#FFE2C0]" rotate="-1deg" />
            <div className="flex items-center justify-between">
              <span className="font-heading font-black text-[26px] text-[#834296]">
                3. Wrap up
              </span>
              <span className="text-[15px] font-bold bg-[#FFE2C0] text-[#001837] px-3 py-1 rounded-md border border-[#001837]">
                = Concluir / Cerrar
              </span>
            </div>
            <p className="font-body text-[21px] text-[#001837]/85 mt-2">
              “Let’s <strong className="text-[#001837]">wrap up</strong> today’s sync with key action items.”
            </p>
          </div>
        </div>

        <div className="flex justify-end items-center gap-2 -mt-2">
          <HandwrittenNote text="Guarda esto para tu próxima llamada 📌" color="text-[#834296]" rotate="-2deg" />
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between border-t-2 border-[#001837]/15 pt-6 z-10 text-[#001837]">
        <div className="flex items-center gap-3">
          <DoodleSpark color="#834296" />
          <span className="font-heading font-bold text-[19px]">
            Yes You Can Languages
          </span>
        </div>
        <div className="bg-[#001837] text-[#FFD203] px-6 py-2.5 rounded-xl font-heading font-black text-[18px] shadow-md">
          @yyclanguages
        </div>
      </div>
    </FeedFrameWrapper>
  );
}

// 03. Error Común (Recortes Rasgados & Pinceladas)
export function TemplateIG03Error() {
  return (
    <FeedFrameWrapper
      id="ig-feed-03-error"
      title="03 · Error Común: Don't say X → Say Y"
      className="bg-[#001837] bg-notebook-dots"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="ERROR FRECUENTE" variant="red" rotate="-3deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-8">
        <div className="text-center relative">
          <h2 className="font-heading font-black text-[56px] leading-tight text-white">
            ¿Cómo dices tu edad en inglés?
          </h2>
          <p className="font-body text-[23px] text-white/70 mt-1">
            Uno de los errores más comunes de traducción literal:
          </p>
          <HandwrittenNote text="¡Cuidado con esto!" color="text-[#FFD203]" rotate="3deg" className="absolute -top-6 right-8" />
        </div>

        {/* 2 Bloques de Collage */}
        <div className="flex flex-col gap-6">
          {/* Bloque Incorrecto */}
          <div className="bg-white/10 backdrop-blur-md border-2 border-red-500/70 rounded-2xl p-7 flex items-center justify-between shadow-lg relative">
            <Tape className="absolute -top-3.5 left-8 w-20 h-5" color="bg-red-500/80" rotate="-2deg" />
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-3xl shrink-0 shadow-md">
                <X className="w-9 h-9" />
              </div>
              <div>
                <span className="text-[17px] font-heading font-extrabold uppercase text-red-400">
                  Don’t say:
                </span>
                <p className="font-heading font-bold text-[38px] text-white/90 line-through decoration-red-500 decoration-4">
                  “I have 35 years”
                </p>
              </div>
            </div>
          </div>

          {/* Bloque Correcto con Papel Amarillo Rasgado */}
          <div className="bg-[#FFD203] border-4 border-[#001837] rounded-2xl p-7 flex items-center justify-between shadow-[8px_8px_0px_#4DC2DA] text-[#001837] relative rotate-0.5">
            <Tape className="absolute -top-3.5 right-8 w-24 h-5" color="bg-[#001837]/80" rotate="2deg" />
            <div className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-xl bg-[#001837] text-[#FFD203] flex items-center justify-center font-bold text-3xl shrink-0 shadow-md">
                <Check className="w-9 h-9" />
              </div>
              <div>
                <span className="text-[17px] font-heading font-extrabold uppercase text-[#001837]">
                  Say instead:
                </span>
                <p className="font-heading font-black text-[40px] text-[#001837]">
                  “I am 35 years old”
                </p>
              </div>
            </div>
            <StickerBadge text="NATURAL" variant="purple" rotate="3deg" />
          </div>
        </div>

        {/* Nota explicativa tipo papel */}
        <div className="bg-[#FFE2C0] text-[#001837] p-6 rounded-xl border-2 border-[#001837] shadow-md flex items-center gap-4">
          <span className="text-3xl shrink-0">💡</span>
          <p className="font-body text-[21px] text-[#001837]">
            <strong>En inglés no “tienes” la edad:</strong> tú “eres” esa cantidad de años (verbo <em>To Be</em>).
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/15 pt-7 z-10">
        <span className="font-heading font-bold text-[19px] text-[#4DC2DA]">
          ¿Te ha pasado alguna vez? Cuéntanos 👇
        </span>
        <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-xl">
          <MessageCircle className="w-5 h-5 text-[#FFD203]" />
          <span className="font-heading font-bold text-sm">Comentar</span>
        </div>
      </div>
    </FeedFrameWrapper>
  );
}

// 04. Mini Clase Rápida
export function TemplateIG04MiniClass() {
  return (
    <FeedFrameWrapper
      id="ig-feed-04-miniclass"
      title="04 · Mini Clase Rápida"
      className="bg-[#834296] bg-notebook-grid"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="MINI CLASE · 60s" variant="yellow" rotate="-2deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-7">
        <div className="relative">
          <span className="font-heading font-bold text-[19px] uppercase text-[#FFD203] tracking-wider block">
            Vocabulario Real para el Trabajo
          </span>
          <h2 className="font-heading font-black text-[52px] text-white leading-tight mt-1">
            Deja de responder siempre: <br />
            <span className="text-[#001837] bg-[#FFD203] px-4 py-1 rounded-lg inline-block mt-2 -rotate-1">
              “Fine, thanks. And you?”
            </span>
          </h2>
          <DoodleArrow color="#FFE2C0" rotate="30deg" className="absolute top-4 right-6 w-14 h-10" />
        </div>

        {/* 4 Opciones en formato collage */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#001837] p-6 rounded-2xl border-2 border-white/20 shadow-md relative -rotate-0.5">
            <span className="text-[12px] font-heading font-extrabold text-[#4DC2DA] uppercase tracking-wider block">
              Opción 1 · Casual
            </span>
            <p className="font-heading font-black text-[28px] text-[#FFD203] mt-1">
              “Can’t complain!”
            </p>
            <p className="font-body text-[17px] text-white/80 mt-1">
              Ideal para romper el hielo.
            </p>
          </div>

          <div className="bg-[#001837] p-6 rounded-2xl border-2 border-white/20 shadow-md relative rotate-0.5">
            <span className="text-[12px] font-heading font-extrabold text-[#4DC2DA] uppercase tracking-wider block">
              Opción 2 · Profesional
            </span>
            <p className="font-heading font-black text-[28px] text-[#FFD203] mt-1">
              “Doing well, thanks!”
            </p>
            <p className="font-body text-[17px] text-white/80 mt-1">
              Perfecto para clientes y jefes.
            </p>
          </div>

          <div className="bg-[#001837] p-6 rounded-2xl border-2 border-white/20 shadow-md relative -rotate-0.5">
            <span className="text-[12px] font-heading font-extrabold text-[#4DC2DA] uppercase tracking-wider block">
              Opción 3 · En ritmo
            </span>
            <p className="font-heading font-black text-[28px] text-[#FFD203] mt-1">
              “Keeping busy!”
            </p>
            <p className="font-body text-[17px] text-white/80 mt-1">
              Transmite dinamismo y acción.
            </p>
          </div>

          <div className="bg-[#001837] p-6 rounded-2xl border-2 border-white/20 shadow-md relative rotate-0.5">
            <span className="text-[12px] font-heading font-extrabold text-[#4DC2DA] uppercase tracking-wider block">
              Opción 4 · Positiva
            </span>
            <p className="font-heading font-black text-[28px] text-[#FFD203] mt-1">
              “All good here!”
            </p>
            <p className="font-body text-[17px] text-white/80 mt-1">
              Natural entre colegas de equipo.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <HandwrittenNote text="¡Úsalo hoy mismo en Slack o Zoom!" color="text-[#FFE2C0]" rotate="-1deg" />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-7 z-10">
        <span className="font-heading font-bold text-[19px] text-white">
          Aprende inglés hablando · Sin memorizar tablas
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-6 py-2.5 rounded-xl font-heading font-black text-[17px]">
          YYCL Academia
        </div>
      </div>
    </FeedFrameWrapper>
  );
}

// 05. Carrusel Educativo (Portada de Alto Impacto)
export function TemplateIG05CarouselCover() {
  return (
    <FeedFrameWrapper
      id="ig-feed-05-carousel"
      title="05 · Carrusel Educativo (Portada)"
      className="bg-[#001837] bg-notebook-dots"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="CARRUSEL · 5 SLIDES" variant="yellow" rotate="3deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-8 relative">
        <Tape color="bg-[#4DC2DA]/90" rotate="-3deg" className="self-start -mb-4" />
        
        <div>
          <span className="text-[20px] font-heading font-bold text-[#FFD203] uppercase tracking-widest block mb-2">
            Guía Práctica para Profesionales
          </span>

          <h1 className="font-heading font-black text-[68px] leading-[1.1] text-white">
            Cómo dejar de traducir en tu mente{" "}
            <span className="relative inline-block mt-2">
              <span className="relative z-10 text-[#001837] px-3 py-1 font-black">
                antes de hablar
              </span>
              <span className="absolute inset-0 bg-[#FFD203] -rotate-1 rounded-sm -z-0" />
            </span>
          </h1>
        </div>

        <div className="bg-white/10 p-7 rounded-2xl border border-white/20 max-w-[850px] shadow-lg">
          <p className="font-body text-[25px] text-white/90 leading-relaxed font-medium">
            El método de 3 pasos que usan nuestros alumnos de 35+ años para responder de forma automática y sin quedarse en blanco.
          </p>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <div className="bg-[#FFD203] text-[#001837] px-8 py-4 rounded-2xl font-heading font-black text-[22px] flex items-center gap-3 shadow-[6px_6px_0px_#834296]">
            <span>Desliza para ver la guía</span>
            <ArrowRight className="w-6 h-6" />
          </div>
          <HandwrittenNote text="Toma 2 minutos ⚡" color="text-[#4DC2DA]" rotate="2deg" />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/15 pt-7 z-10">
        <span className="font-body text-[18px] text-white/70">
          Desliza para continuar 👉
        </span>
        <span className="font-heading font-extrabold text-[20px] text-[#FFD203]">
          Slide 1/5
        </span>
      </div>
    </FeedFrameWrapper>
  );
}

// 06. Caso / Transformación de Alumno
export function TemplateIG06Case() {
  return (
    <FeedFrameWrapper
      id="ig-feed-06-case"
      title="06 · Caso de Éxito / Transformación"
      className="bg-[#FBF8F2] bg-notebook-grid text-[#001837]"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="default" />
        <StickerBadge text="CASO REAL · ALUMNA" variant="purple" rotate="-2deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-7 text-[#001837]">
        <div>
          <h2 className="font-heading font-black text-[50px] leading-[1.18] text-[#001837]">
            “Pasé de temblar antes de entrar al Zoom… a{" "}
            <MarkerHighlight color="bg-[#FFD203]">
              liderar la reunión
            </MarkerHighlight>{" "}
            frente al cliente de USA.”
          </h2>
        </div>

        {/* Card Collage con Polaroid y Tape */}
        <div className="bg-white p-7 rounded-3xl border-3 border-[#001837] shadow-[8px_8px_0px_#001837] flex items-center gap-8 relative">
          <Tape className="absolute -top-4 left-10 w-24 h-6" color="bg-[#FFD203]/80" rotate="-2deg" />

          {/* Marco Polaroid con foto real */}
          <div className="bg-white p-3 pb-6 rounded-xl border-2 border-[#001837] shadow-lg -rotate-2 shrink-0">
            <div className="w-40 h-40 rounded-xs overflow-hidden relative">
              <Image
                src="/images/SRC_002_Imagen de Codex 22 ago 2026, 10_06_16 p.m..png"
                alt="Valeria Morales"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-handwritten text-base text-[#001837] text-center font-bold mt-2">
              Valeria M. (38)
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <StarRating count={5} />
            <p className="font-heading font-black text-[30px] text-[#001837] leading-tight">
              Valeria Morales
            </p>
            <p className="font-body text-[19px] text-[#834296] font-bold">
              Gerente de Proyectos · Bogotá, Colombia
            </p>
            <p className="font-body text-[18px] text-[#001837]/85 mt-1">
              <strong>Resultado:</strong> 4 meses en YYCL Club de Conversación. Ascenso confirmado en multinacional.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <HandwrittenNote text="¡Tú también puedes lograrlo!" color="text-[#834296]" rotate="2deg" />
        </div>
      </div>

      <div className="flex items-center justify-between border-t-2 border-[#001837]/15 pt-6 z-10 text-[#001837]">
        <span className="font-heading font-bold text-[19px]">
          Pierde el miedo a hablar inglés
        </span>
        <div className="bg-[#001837] text-[#FFD203] px-6 py-2.5 rounded-xl font-heading font-bold text-[17px]">
          Test Gratis en Bio 🔗
        </div>
      </div>
    </FeedFrameWrapper>
  );
}

// 07. Testimonio Directo
export function TemplateIG07Testimonial() {
  return (
    <FeedFrameWrapper
      id="ig-feed-07-testimonial"
      title="07 · Testimonio de Confianza"
      className="bg-[#001837] bg-notebook-dots"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StarRating count={5} />
      </div>

      <div className="my-auto z-10 flex flex-col gap-8 relative">
        <Tape color="bg-[#FFD203]/90" rotate="-2deg" className="self-start -mb-4" />
        
        <h2 className="font-heading font-black text-[54px] leading-[1.2] text-white">
          “Lo mejor de YYCL es que los profesores{" "}
          <span className="text-[#FFD203]">no te juzgan</span>. Es el primer curso donde realmente hablo el 80% del tiempo.”
        </h2>

        {/* Tarjeta Collage con Foto Recortada */}
        <div className="flex items-center gap-6 bg-[#FFE2C0] text-[#001837] p-7 rounded-2xl border-3 border-[#001837] shadow-[6px_6px_0px_#834296] relative">
          <div className="w-20 h-20 rounded-full overflow-hidden border-3 border-[#001837] relative shrink-0 shadow-md">
            <Image
              src="/images/SRC_003_Imagen de Codex 22 ago 2026, 10_06_22 p.m..png"
              alt="Carlos Andrés Gómez"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-heading font-black text-[26px] text-[#001837]">
              Carlos Andrés Gómez
            </p>
            <p className="font-body text-[18px] text-[#834296] font-bold">
              Arquitecto de Software · Estudiante Plan Dúo
            </p>
          </div>
          <div className="ml-auto">
            <StickerBadge text="VERIFICADO" variant="navy" rotate="2deg" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/15 pt-7 z-10">
        <span className="font-heading font-semibold text-[19px] text-[#4DC2DA]">
          +95% de satisfacción en más de 500 alumnos
        </span>
        <span className="font-handwritten text-2xl text-[#FFD203]">
          Let&apos;s make it real ✨
        </span>
      </div>
    </FeedFrameWrapper>
  );
}

// 08. Presentación de Profesores
export function TemplateIG08Teacher() {
  return (
    <FeedFrameWrapper
      id="ig-feed-08-teacher"
      title="08 · Conoce a tus Profesores"
      className="bg-[#3C4C92] bg-notebook-grid"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="EQUIPO DOCENTE" variant="yellow" rotate="2deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-8">
        <div className="flex items-center gap-8">
          {/* Polaroid del Profesor */}
          <div className="bg-white p-3 pb-6 rounded-2xl shadow-2xl -rotate-2 border-2 border-black/10 shrink-0">
            <div className="w-[320px] h-[380px] rounded-xs overflow-hidden relative">
              <Image
                src="/images/SRC_004_Imagen de Codex 22 ago 2026, 10_06_30 p.m..png"
                alt="Profesor Jordi"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-handwritten text-xl text-[#001837] text-center font-bold mt-3">
              Profe Jordi · Pronunciación
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <span className="text-[17px] font-heading font-bold text-[#4DC2DA] uppercase tracking-widest">
              Profesor Destacado
            </span>
            <h2 className="font-heading font-black text-[48px] leading-tight text-white">
              Profe Jordi
            </h2>
            <p className="font-body text-[21px] text-white/90 leading-relaxed font-medium">
              Especialista en fluidez y reducción del miedo escénico. En sus clases la prioridad es que hables sin pena.
            </p>
            <div className="flex gap-2 mt-2">
              <span className="bg-[#FFD203] text-[#001837] px-3.5 py-1.5 rounded-lg font-heading font-bold text-xs">
                100% Conversacional
              </span>
              <span className="bg-white/20 text-white px-3.5 py-1.5 rounded-lg font-heading font-bold text-xs">
                Nivel B1 / B2 / C1
              </span>
            </div>
            <HandwrittenNote text="“El error es parte del aprendizaje”" color="text-[#FFE2C0]" rotate="1deg" className="mt-2" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-7 z-10">
        <span className="font-heading font-bold text-[19px] text-white">
          Aprende con profesores humanos
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-6 py-2.5 rounded-xl font-heading font-black text-[17px]">
          Conoce el Equipo
        </div>
      </div>
    </FeedFrameWrapper>
  );
}

// 09. Promocional (Club de Conversación)
export function TemplateIG09Promo() {
  return (
    <FeedFrameWrapper
      id="ig-feed-09-promo"
      title="09 · Promocional / Club de Conversación"
      className="bg-[#001837] bg-notebook-dots"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="NUEVOS GRUPOS" variant="yellow" rotate="-2deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-7">
        <div>
          <span className="font-heading font-bold text-[19px] text-[#4DC2DA] uppercase tracking-widest">
            Inscripciones Abiertas
          </span>
          <h2 className="font-heading font-black text-[58px] leading-tight text-white mt-1">
            Club de Conversación <br />
            <span className="text-[#FFD203]">Grupos de Máx. 6 Alumnos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3.5">
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/15 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#FFD203] text-[#001837] flex items-center justify-center font-bold text-xl shrink-0">
              ✓
            </div>
            <p className="font-heading font-bold text-[22px] text-white">
              Habla desde el primer minuto en cada sesión
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/15 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#FFD203] text-[#001837] flex items-center justify-center font-bold text-xl shrink-0">
              ✓
            </div>
            <p className="font-heading font-bold text-[22px] text-white">
              Temas reales: Trabajo, viajes, entrevistas y debate
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm p-5 rounded-xl border border-white/15 flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-[#FFD203] text-[#001837] flex items-center justify-center font-bold text-xl shrink-0">
              ✓
            </div>
            <p className="font-heading font-bold text-[22px] text-white">
              Feedback constructivo sin notas punitivas
            </p>
          </div>
        </div>

        <HandwrittenNote text="Cupos limitados por horario ⏰" color="text-[#FFE2C0]" rotate="-2deg" />
      </div>

      <div className="flex items-center justify-between border-t border-white/15 pt-7 z-10">
        <span className="font-heading font-bold text-[19px] text-white/80">
          Yes You Can Languages
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-7 py-3 rounded-xl font-heading font-black text-[20px] shadow-lg">
          Aparta tu Lugar →
        </div>
      </div>
    </FeedFrameWrapper>
  );
}

// 10. CTA Directo / Cierre
export function TemplateIG10CTA() {
  return (
    <FeedFrameWrapper
      id="ig-feed-10-cta"
      title="10 · CTA Directo: Agenda tu Clase"
      className="bg-[#834296] bg-notebook-grid"
    >
      <div className="flex items-center justify-between z-10">
        <YYCLLogoMark variant="white" />
        <StickerBadge text="CLASE DIAGNÓSTICO GRATIS" variant="yellow" rotate="3deg" />
      </div>

      <div className="my-auto z-10 flex flex-col gap-7 text-center items-center relative">
        <Tape color="bg-[#FFD203]/90" rotate="-2deg" className="self-center" />
        
        <h2 className="font-heading font-black text-[70px] leading-[1.08] text-white max-w-[920px]">
          Pierde el miedo a hablar inglés.
        </h2>

        <p className="font-body text-[26px] text-white/90 max-w-[820px] leading-relaxed font-medium">
          Agenda hoy tu prueba de diagnóstico 1-a-1 de 20 minutos con nuestros profesores. Evaluamos tu nivel real y diseñamos tu plan.
        </p>

        <div className="mt-3 bg-[#FFD203] text-[#001837] px-9 py-5 rounded-2xl font-heading font-black text-[28px] border-3 border-[#001837] shadow-[8px_8px_0px_#001837] flex items-center gap-4">
          <span>Agenda en el link de la Bio</span>
          <ArrowRight className="w-7 h-7" />
        </div>

        <HandwrittenNote text="Sin compromiso · 100% online por Zoom" color="text-[#FFE2C0]" rotate="2deg" />
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-7 z-10 w-full">
        <span className="font-body text-[19px] text-white/80">
          Yes You Can Languages · Since 2019
        </span>
        <span className="font-heading font-extrabold text-[20px] text-[#FFD203]">
          yyclanguages.com
        </span>
      </div>
    </FeedFrameWrapper>
  );
}
