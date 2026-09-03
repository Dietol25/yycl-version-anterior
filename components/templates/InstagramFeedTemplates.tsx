import React from "react";
import {
  BrandHeader,
  BrandFooter,
  UserAvatar,
  MarkerHighlight,
  StarRating,
  YYCLStickerLogo,
} from "./DesignElements";
import { Check, X, ArrowRight, Bookmark, Sparkles } from "lucide-react";

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
      className={`w-[1080px] h-[1350px] relative overflow-hidden flex flex-col justify-between p-[84px] text-white select-none ${className}`}
      style={{ boxSizing: "border-box" }}
    >
      {children}
    </div>
  );
}

// 01. Quote / Frase de Impacto (Limpio y coherente con la web)
export function TemplateIG01Quote() {
  return (
    <FeedFrameWrapper
      id="ig-feed-01-quote"
      title="01 · Quote / Frase de Impacto"
      className="bg-[#001837]"
    >
      {/* Header Limpio: Solo Logo Sticker Oficial + Badge de Categoría */}
      <BrandHeader badge="YYCL MINDSET" badgeVariant="yellow" />

      {/* Contenido Central: Tipografía Montserrat limpia y contundente */}
      <div className="my-auto z-10 flex flex-col gap-10 max-w-[940px]">
        <h1 className="font-heading font-black text-[68px] leading-[1.14] tracking-tight text-white">
          You already know{" "}
          <MarkerHighlight color="bg-[#FFD203]" textColor="text-[#001837]">
            more English
          </MarkerHighlight>{" "}
          than you think.
        </h1>

        {/* Tarjeta Limpia de Reflexión (Estilo Web YYCL) */}
        <div className="bg-[#834296] text-white p-9 rounded-3xl border border-white/20 shadow-[6px_6px_0px_#001837] space-y-3">
          <p className="font-heading font-bold text-[28px] leading-relaxed text-white">
            El verdadero bloqueo nunca fue tu vocabulario. Fue el miedo a equivocarte
            frente a otros. Cuando el entorno es seguro,{" "}
            <span className="text-[#FFD203]">tu inglés fluye naturalmente.</span>
          </p>
        </div>
      </div>

      {/* Footer Limpio con Avatar Real */}
      <div className="flex items-center justify-between border-t border-white/15 pt-7 z-10 w-full">
        <UserAvatar
          src="/images/SRC_001_Imagen de Codex 22 ago 2026, 10_05_51 p.m..png"
          alt="Naty Sánchez"
          name="Naty Sánchez"
          role="Directora Académica · YYCL"
          size={64}
        />
        <div className="flex items-center gap-2 text-white/80 font-heading font-semibold text-[17px]">
          <Bookmark className="w-5 h-5 text-[#FFD203]" />
          <span>Guarda este post</span>
        </div>
      </div>
    </FeedFrameWrapper>
  );
}

// 02. Tip de Inglés (Limpio y Profesional)
export function TemplateIG02Tip() {
  return (
    <FeedFrameWrapper
      id="ig-feed-02-tip"
      title="02 · Tip de Inglés Profesional"
      className="bg-[#001837]"
    >
      <BrandHeader badge="BUSINESS ENGLISH" badgeVariant="cyan" />

      <div className="my-auto z-10 flex flex-col gap-8">
        <div>
          <span className="font-heading font-bold text-[18px] text-[#4DC2DA] uppercase tracking-widest block mb-1">
            Tips para tus reuniones
          </span>
          <h2 className="font-heading font-black text-[56px] leading-[1.15] text-white">
            3 phrasal verbs para sonar más{" "}
            <MarkerHighlight color="bg-[#FFD203]" textColor="text-[#001837]">
              natural
            </MarkerHighlight>{" "}
            al hablar
          </h2>
        </div>

        {/* 3 Tarjetas Limpias */}
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white text-[#001837] p-7 rounded-2xl border border-black/10 shadow-[4px_4px_0px_#4DC2DA]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-heading font-black text-[26px] text-[#834296]">
                1. Bring up
              </span>
              <span className="text-[14px] font-heading font-bold bg-[#FFE2C0] text-[#001837] px-3.5 py-1 rounded-full">
                Mencionar un tema
              </span>
            </div>
            <p className="font-body text-[20px] text-slate-700">
              “I’d like to <strong className="text-[#001837]">bring up</strong> the budget question before we finish.”
            </p>
          </div>

          <div className="bg-white text-[#001837] p-7 rounded-2xl border border-black/10 shadow-[4px_4px_0px_#4DC2DA]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-heading font-black text-[26px] text-[#834296]">
                2. Follow up
              </span>
              <span className="text-[14px] font-heading font-bold bg-[#CAFFFF] text-[#001837] px-3.5 py-1 rounded-full">
                Dar seguimiento
              </span>
            </div>
            <p className="font-body text-[20px] text-slate-700">
              “Let’s <strong className="text-[#001837]">follow up</strong> on this next Tuesday via email.”
            </p>
          </div>

          <div className="bg-white text-[#001837] p-7 rounded-2xl border border-black/10 shadow-[4px_4px_0px_#4DC2DA]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-heading font-black text-[26px] text-[#834296]">
                3. Wrap up
              </span>
              <span className="text-[14px] font-heading font-bold bg-[#FFD203]/70 text-[#001837] px-3.5 py-1 rounded-full">
                Concluir la sesión
              </span>
            </div>
            <p className="font-body text-[20px] text-slate-700">
              “Let’s <strong className="text-[#001837]">wrap up</strong> today’s sync with key action items.”
            </p>
          </div>
        </div>
      </div>

      <BrandFooter actionText="Practícalo hoy en tu próxima llamada de trabajo" />
    </FeedFrameWrapper>
  );
}

// 03. Error Común (Don't Say X → Say Y)
export function TemplateIG03Error() {
  return (
    <FeedFrameWrapper
      id="ig-feed-03-error"
      title="03 · Error Común: Don't say X → Say Y"
      className="bg-[#001837]"
    >
      <BrandHeader badge="ERROR COMÚN" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-9">
        <div>
          <span className="font-heading font-bold text-[18px] text-[#4DC2DA] uppercase tracking-widest block mb-1">
            Evita traducir palabra por palabra
          </span>
          <h2 className="font-heading font-black text-[58px] leading-tight text-white">
            ¿Cómo dices tu edad en inglés?
          </h2>
        </div>

        {/* Cajas Comparativas Nítidas */}
        <div className="flex flex-col gap-5">
          {/* Incorrecto */}
          <div className="bg-red-950/40 border-2 border-red-500/60 rounded-3xl p-7 flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center font-bold text-2xl shrink-0">
                <X className="w-8 h-8" />
              </div>
              <div>
                <span className="text-sm font-heading font-bold uppercase tracking-wider text-red-400">
                  Don’t say:
                </span>
                <p className="font-heading font-bold text-[36px] text-white/90 line-through decoration-red-500 decoration-3">
                  “I have 35 years”
                </p>
              </div>
            </div>
          </div>

          {/* Correcto */}
          <div className="bg-[#FFD203] border-3 border-[#001837] rounded-3xl p-7 flex items-center justify-between shadow-[6px_6px_0px_#4DC2DA] text-[#001837]">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#001837] text-[#FFD203] flex items-center justify-center font-bold text-2xl shrink-0">
                <Check className="w-8 h-8" />
              </div>
              <div>
                <span className="text-sm font-heading font-bold uppercase tracking-wider text-[#001837]">
                  Say instead:
                </span>
                <p className="font-heading font-black text-[38px] text-[#001837]">
                  “I am 35 years old”
                </p>
              </div>
            </div>
            <span className="font-heading font-black text-xs bg-[#834296] text-white px-3.5 py-1.5 rounded-full uppercase">
              Natural
            </span>
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl border border-white/15">
          <p className="font-body text-[22px] text-white/90 font-medium">
            💡 <strong>En inglés la edad no se “tiene”:</strong> tú “eres” esa cantidad de años de vida (se usa el verbo <em>To Be</em>).
          </p>
        </div>
      </div>

      <BrandFooter actionText="¿Te ha pasado alguna vez? Cuéntanos en comentarios 👇" />
    </FeedFrameWrapper>
  );
}

// 04. Mini Clase Rápida
export function TemplateIG04MiniClass() {
  return (
    <FeedFrameWrapper
      id="ig-feed-04-miniclass"
      title="04 · Mini Clase Rápida"
      className="bg-[#834296]"
    >
      <BrandHeader badge="MINI CLASE · 60s" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-8">
        <div>
          <span className="font-heading font-bold text-[18px] uppercase text-[#FFE2C0] tracking-widest block mb-1">
            Alternativas a frases de libro
          </span>
          <h2 className="font-heading font-black text-[54px] text-white leading-tight">
            Deja de responder siempre: <br />
            <span className="text-[#001837] bg-[#FFD203] px-4 py-1 rounded-xl inline-block mt-2">
              “Fine, thanks. And you?”
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#001837] p-6 rounded-2xl border border-white/20 shadow-md">
            <span className="text-[12px] font-heading font-bold text-[#4DC2DA] uppercase tracking-wider block">
              1. Casual / Amistoso
            </span>
            <p className="font-heading font-black text-[26px] text-[#FFD203] mt-1">
              “Can’t complain!”
            </p>
            <p className="font-body text-[16px] text-white/80 mt-1">
              Ideal para romper el hielo.
            </p>
          </div>

          <div className="bg-[#001837] p-6 rounded-2xl border border-white/20 shadow-md">
            <span className="text-[12px] font-heading font-bold text-[#4DC2DA] uppercase tracking-wider block">
              2. Profesional
            </span>
            <p className="font-heading font-black text-[26px] text-[#FFD203] mt-1">
              “Doing well, thanks!”
            </p>
            <p className="font-body text-[16px] text-white/80 mt-1">
              Para llamadas de trabajo.
            </p>
          </div>

          <div className="bg-[#001837] p-6 rounded-2xl border border-white/20 shadow-md">
            <span className="text-[12px] font-heading font-bold text-[#4DC2DA] uppercase tracking-wider block">
              3. Ocupado
            </span>
            <p className="font-heading font-black text-[26px] text-[#FFD203] mt-1">
              “Keeping busy!”
            </p>
            <p className="font-body text-[16px] text-white/80 mt-1">
              Transmite ritmo y dinamismo.
            </p>
          </div>

          <div className="bg-[#001837] p-6 rounded-2xl border border-white/20 shadow-md">
            <span className="text-[12px] font-heading font-bold text-[#4DC2DA] uppercase tracking-wider block">
              4. Directo
            </span>
            <p className="font-heading font-black text-[26px] text-[#FFD203] mt-1">
              “All good here!”
            </p>
            <p className="font-body text-[16px] text-white/80 mt-1">
              Natural entre compañeros de equipo.
            </p>
          </div>
        </div>
      </div>

      <BrandFooter actionText="Clases 100% conversacionales en vivo con profesores reales" />
    </FeedFrameWrapper>
  );
}

// 05. Carrusel Educativo (Portada)
export function TemplateIG05CarouselCover() {
  return (
    <FeedFrameWrapper
      id="ig-feed-05-carousel"
      title="05 · Carrusel Educativo (Portada)"
      className="bg-[#001837]"
    >
      <BrandHeader badge="GUÍA PRÁCTICA" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-8 max-w-[920px]">
        <div>
          <span className="text-[19px] font-heading font-bold text-[#FFD203] uppercase tracking-widest block mb-2">
            Fluidez sin bloqueos
          </span>

          <h1 className="font-heading font-black text-[68px] leading-[1.12] text-white">
            Cómo dejar de traducir en tu mente{" "}
            <MarkerHighlight color="bg-[#834296]" textColor="text-white">
              antes de hablar
            </MarkerHighlight>
          </h1>
        </div>

        <p className="font-body text-[26px] text-white/80 leading-relaxed font-medium">
          El método de 3 pasos que usan nuestros alumnos profesionales para responder en inglés sin quedarse en blanco.
        </p>

        <div className="pt-2">
          <div className="inline-flex items-center gap-3 bg-[#FFD203] text-[#001837] px-8 py-4 rounded-2xl font-heading font-black text-[22px] shadow-[4px_4px_0px_#4DC2DA]">
            <span>Desliza para ver los 3 pasos</span>
            <ArrowRight className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/15 pt-7 z-10 w-full">
        <span className="font-body text-[18px] text-white/70">
          Desliza para continuar 👉
        </span>
        <span className="font-heading font-bold text-[20px] text-[#FFD203]">
          Slide 1/5
        </span>
      </div>
    </FeedFrameWrapper>
  );
}

// 06. Caso de Éxito / Transformación (Avatar Real + Reseña)
export function TemplateIG06Case() {
  return (
    <FeedFrameWrapper
      id="ig-feed-06-case"
      title="06 · Caso de Éxito / Transformación"
      className="bg-[#001837]"
    >
      <BrandHeader badge="CASO REAL" badgeVariant="purple" />

      <div className="my-auto z-10 flex flex-col gap-8">
        <h2 className="font-heading font-black text-[52px] leading-[1.2] text-white">
          “Pasé de temblar antes de entrar al Zoom… a{" "}
          <MarkerHighlight color="bg-[#FFD203]" textColor="text-[#001837]">
            liderar la presentación
          </MarkerHighlight>{" "}
          frente al cliente de USA.”
        </h2>

        {/* Tarjeta de Caso Estilo Web */}
        <div className="bg-[#834296] p-8 rounded-3xl border border-white/20 shadow-[6px_6px_0px_#001837] flex items-center gap-7">
          <UserAvatar
            src="/images/SRC_002_Imagen de Codex 22 ago 2026, 10_06_16 p.m..png"
            alt="Valeria Morales"
            name="Valeria Morales"
            role="Gerente de Proyectos · Bogotá"
            size={80}
            borderColor="border-[#FFD203]"
          />
          <div className="h-16 w-px bg-white/20" />
          <div>
            <StarRating count={5} />
            <p className="font-body text-[18px] text-white/90 mt-1 font-medium">
              4 meses en el Club de Conversación YYCL. Ascenso confirmado en empresa multinacional.
            </p>
          </div>
        </div>
      </div>

      <BrandFooter actionText="Agenda tu prueba de diagnóstico gratuita" />
    </FeedFrameWrapper>
  );
}

// 07. Testimonio Directo (Google Reviews 5.0★)
export function TemplateIG07Testimonial() {
  return (
    <FeedFrameWrapper
      id="ig-feed-07-testimonial"
      title="07 · Testimonio de Confianza"
      className="bg-[#001837]"
    >
      <BrandHeader badge="GOOGLE REVIEWS 5.0★" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-8 max-w-[920px]">
        <StarRating count={5} />

        <blockquote className="font-heading font-extrabold text-[52px] leading-[1.2] text-white">
          “Lo mejor de YYCL es que los profesores{" "}
          <span className="text-[#FFD203]">no te juzgan</span>. Es el primer curso donde realmente hablo el 80% del tiempo de la clase.”
        </blockquote>

        <div className="flex items-center gap-5 pt-2">
          <UserAvatar
            src="/images/SRC_003_Imagen de Codex 22 ago 2026, 10_06_22 p.m..png"
            alt="Nicolas Ibañez"
            name="Nicolas Ibañez Esenarro"
            role="Profesional en Tecnología · Alumno YYCL"
            size={72}
          />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/15 pt-7 z-10 w-full">
        <span className="font-body text-[18px] text-white/70">
          +1.000 estudiantes · 94-98% satisfacción
        </span>
        <span className="font-heading font-black text-[18px] text-[#FFD203]">
          yyclanguages.com
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
      className="bg-[#001837]"
    >
      <BrandHeader badge="EQUIPO DOCENTE" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-8">
        <div className="flex items-center gap-8 bg-white/10 p-8 rounded-3xl border border-white/15">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#FFD203] relative shrink-0 shadow-xl">
            <UserAvatar
              src="/images/SRC_004_Imagen de Codex 22 ago 2026, 10_06_30 p.m..png"
              alt="Profe Jordi"
              name=""
              size={192}
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-heading font-bold text-[#4DC2DA] uppercase tracking-widest">
              Speaking Coach
            </span>
            <h2 className="font-heading font-black text-[46px] leading-tight text-white">
              Profe Jordi
            </h2>
            <p className="font-body text-[20px] text-white/85 leading-relaxed font-medium">
              Especialista en pronunciación y fluidez. En sus clases la prioridad es que hables sin miedo a equivocarte.
            </p>
            <div className="flex gap-2.5 mt-2">
              <span className="bg-[#FFD203] text-[#001837] px-4 py-1.5 rounded-lg font-heading font-bold text-xs uppercase">
                100% Conversacional
              </span>
              <span className="bg-white/20 text-white px-4 py-1.5 rounded-lg font-heading font-bold text-xs uppercase">
                Nivel B1 / B2 / C1
              </span>
            </div>
          </div>
        </div>
      </div>

      <BrandFooter actionText="Aprende con profesores humanos que te inspiran" />
    </FeedFrameWrapper>
  );
}

// 09. Promocional (Club de Conversación)
export function TemplateIG09Promo() {
  return (
    <FeedFrameWrapper
      id="ig-feed-09-promo"
      title="09 · Promocional / Club de Conversación"
      className="bg-[#001837]"
    >
      <BrandHeader badge="NUEVOS GRUPOS" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-8">
        <div>
          <span className="font-heading font-bold text-[18px] text-[#4DC2DA] uppercase tracking-widest block mb-1">
            Inscripciones Abiertas
          </span>
          <h2 className="font-heading font-black text-[58px] leading-tight text-white">
            Club de Conversación <br />
            <span className="text-[#FFD203]">Grupos de Máx. 6 Alumnos</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white text-[#001837] p-6 rounded-2xl border border-black/10 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#FFD203] text-[#001837] flex items-center justify-center font-black text-xl shrink-0">
              ✓
            </div>
            <p className="font-heading font-bold text-[22px] text-[#001837]">
              Habla desde el primer minuto en cada sesión
            </p>
          </div>

          <div className="bg-white text-[#001837] p-6 rounded-2xl border border-black/10 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#FFD203] text-[#001837] flex items-center justify-center font-black text-xl shrink-0">
              ✓
            </div>
            <p className="font-heading font-bold text-[22px] text-[#001837]">
              Temas reales: Trabajo, entrevistas, viajes y debate
            </p>
          </div>

          <div className="bg-white text-[#001837] p-6 rounded-2xl border border-black/10 flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#FFD203] text-[#001837] flex items-center justify-center font-black text-xl shrink-0">
              ✓
            </div>
            <p className="font-heading font-bold text-[22px] text-[#001837]">
              Feedback constructivo sin notas punitivas
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/15 pt-7 z-10 w-full">
        <span className="font-body text-[18px] text-white/70">
          Cupos limitados por horario
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-7 py-3 rounded-xl font-heading font-black text-[18px] shadow-sm">
          Aparta tu Lugar →
        </div>
      </div>
    </FeedFrameWrapper>
  );
}

// 10. CTA Directo / Cierre Nativo para Instagram
export function TemplateIG10CTA() {
  return (
    <FeedFrameWrapper
      id="ig-feed-10-cta"
      title="10 · CTA Nativo de Instagram"
      className="bg-[#001837]"
    >
      <BrandHeader badge="DIAGNÓSTICO ORAL GRATIS" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-8 max-w-[920px]">
        <div>
          <span className="font-heading font-bold text-[18px] text-[#4DC2DA] uppercase tracking-widest block mb-1">
            Da el primer paso hoy
          </span>
          <h2 className="font-heading font-black text-[62px] leading-[1.12] text-white">
            ¿Listo para perder el miedo a hablar inglés?
          </h2>
        </div>

        {/* Action Card Nativa de Instagram (3 Acciones Reales) */}
        <div className="bg-white/10 p-8 rounded-3xl border border-white/20 space-y-5 shadow-xl">
          <p className="font-heading font-bold text-[22px] text-white">
            Elige cómo agendar tu sesión de 15 min sin costo:
          </p>

          <div className="grid grid-cols-1 gap-4">
            {/* Acción 1: DM por comentario */}
            <div className="bg-white text-[#001837] p-5 rounded-2xl flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#834296] text-white flex items-center justify-center font-bold text-xl shrink-0">
                  💬
                </div>
                <div>
                  <span className="font-heading font-black text-[20px] text-[#001837] block">
                    Comenta la palabra <span className="bg-[#FFD203] px-2 py-0.5 rounded text-[#001837]">“QUIERO”</span>
                  </span>
                  <span className="font-body text-[15px] text-slate-600">
                    Te enviamos el enlace directo a tu DM al instante.
                  </span>
                </div>
              </div>
            </div>

            {/* Acción 2: Link en Bio */}
            <div className="bg-white text-[#001837] p-5 rounded-2xl flex items-center justify-between shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#001837] text-[#FFD203] flex items-center justify-center font-bold text-xl shrink-0">
                  🔗
                </div>
                <div>
                  <span className="font-heading font-black text-[20px] text-[#001837] block">
                    Entra al link en nuestro perfil <span className="text-[#834296]">@yyclanguages</span>
                  </span>
                  <span className="font-body text-[15px] text-slate-600">
                    Elige el día y horario que mejor te convenga.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <UserAvatar
            src="/images/SRC_001_Imagen de Codex 22 ago 2026, 10_05_51 p.m..png"
            alt="Naty Sánchez"
            name="Naty Sánchez"
            role="Directora Académica · Evaluación 1-a-1 por Zoom"
            size={60}
          />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/15 pt-7 z-10 w-full text-white/70">
        <span className="font-body text-[18px]">
          Sin notas punitivas · 100% online
        </span>
        <span className="font-heading font-bold text-[18px] text-[#FFD203]">
          @yyclanguages
        </span>
      </div>
    </FeedFrameWrapper>
  );
}

