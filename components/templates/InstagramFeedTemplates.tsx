import React from "react";
import {
  BrandHeader,
  BrandFooter,
  UserAvatar,
  MarkerHighlight,
  SectionHeaderDS,
  TestimonialCardDS,
  BadgeDS,
} from "./DesignElements";
import { Check, X, ArrowRight, Bookmark } from "lucide-react";

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

// 01. Quote / Frase de Impacto
export function TemplateIG01Quote() {
  return (
    <FeedFrameWrapper
      id="ig-feed-01-quote"
      title="01 · Quote / Frase de Impacto"
      className="bg-[#001837]"
    >
      <BrandHeader badge="YYCL MINDSET" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-9 max-w-[940px]">
        <SectionHeaderDS
          eyebrow="Desbloqueo Mental"
          title="You already know more English than you think."
          theme="dark"
        />

        {/* Tarjeta Violeta Oficial DS */}
        <div className="bg-[#834296] text-white p-9 rounded-3xl border border-white/20 shadow-[6px_6px_0px_#001837] space-y-3">
          <p className="font-body text-[25px] leading-relaxed text-white">
            El verdadero bloqueo nunca fue tu vocabulario. Fue el miedo a equivocarte
            frente a otros. Cuando el entorno es seguro,{" "}
            <strong className="text-[#FFD203] font-extrabold">tu inglés fluye de forma natural.</strong>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/15 pt-7 z-10 w-full">
        <UserAvatar
          src="/images/SRC_001_Imagen de Codex 22 ago 2026, 10_05_51 p.m..png"
          alt="Naty Sánchez"
          name="Naty Sánchez"
          role="Directora Académica · YYCL"
          size={64}
        />
        <div className="flex items-center gap-2 text-white/80 font-heading font-bold text-[16px]">
          <Bookmark className="w-5 h-5 text-[#FFD203]" />
          <span>Guarda este post</span>
        </div>
      </div>
    </FeedFrameWrapper>
  );
}

// 02. Tip de Inglés (Business English)
export function TemplateIG02Tip() {
  return (
    <FeedFrameWrapper
      id="ig-feed-02-tip"
      title="02 · Tip de Inglés Profesional"
      className="bg-[#001837]"
    >
      <BrandHeader badge="BUSINESS ENGLISH" badgeVariant="cyan" />

      <div className="my-auto z-10 flex flex-col gap-8">
        <SectionHeaderDS
          eyebrow="Vocabulario de Reuniones"
          title="3 phrasal verbs para sonar más natural al hablar"
          theme="dark"
        />

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white text-[#001837] p-6 rounded-2xl border-2 border-[#001837] shadow-[4px_4px_0px_#4DC2DA]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-heading font-extrabold text-[24px] text-[#834296]">
                1. Bring up
              </span>
              <BadgeDS label="Mencionar tema" variant="yellow" />
            </div>
            <p className="font-body text-[19px] text-slate-700">
              “I’d like to <strong className="text-[#001837]">bring up</strong> the budget question before we finish.”
            </p>
          </div>

          <div className="bg-white text-[#001837] p-6 rounded-2xl border-2 border-[#001837] shadow-[4px_4px_0px_#4DC2DA]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-heading font-extrabold text-[24px] text-[#834296]">
                2. Follow up
              </span>
              <BadgeDS label="Dar seguimiento" variant="cyan" />
            </div>
            <p className="font-body text-[19px] text-slate-700">
              “Let’s <strong className="text-[#001837]">follow up</strong> on this next Tuesday via email.”
            </p>
          </div>

          <div className="bg-white text-[#001837] p-6 rounded-2xl border-2 border-[#001837] shadow-[4px_4px_0px_#4DC2DA]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-heading font-extrabold text-[24px] text-[#834296]">
                3. Wrap up
              </span>
              <BadgeDS label="Concluir sesión" variant="purple" />
            </div>
            <p className="font-body text-[19px] text-slate-700">
              “Let’s <strong className="text-[#001837]">wrap up</strong> today’s sync with key action items.”
            </p>
          </div>
        </div>
      </div>

      <BrandFooter actionText="Practícalo hoy en tu próxima llamada de trabajo" />
    </FeedFrameWrapper>
  );
}

// 03. Error Común
export function TemplateIG03Error() {
  return (
    <FeedFrameWrapper
      id="ig-feed-03-error"
      title="03 · Error Común: Don't say X → Say Y"
      className="bg-[#001837]"
    >
      <BrandHeader badge="ERROR COMÚN" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-8">
        <SectionHeaderDS
          eyebrow="Traducción Literal"
          title="¿Cómo dices tu edad en inglés sin equivocarte?"
          theme="dark"
        />

        <div className="flex flex-col gap-5">
          {/* Don't Say */}
          <div className="bg-red-950/40 border-2 border-red-500/60 rounded-3xl p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-red-600 text-white flex items-center justify-center font-bold text-xl shrink-0">
                <X className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-red-400">
                  Don’t say:
                </span>
                <p className="font-heading font-bold text-[32px] text-white/90 line-through decoration-red-500 decoration-3">
                  “I have 35 years”
                </p>
              </div>
            </div>
          </div>

          {/* Say Instead */}
          <div className="bg-[#FFD203] border-3 border-[#001837] rounded-3xl p-6 flex items-center justify-between shadow-[6px_6px_0px_#4DC2DA] text-[#001837]">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#001837] text-[#FFD203] flex items-center justify-center font-bold text-xl shrink-0">
                <Check className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#001837]">
                  Say instead:
                </span>
                <p className="font-heading font-black text-[34px] text-[#001837]">
                  “I am 35 years old”
                </p>
              </div>
            </div>
            <BadgeDS label="Natural" variant="purple" />
          </div>
        </div>

        <div className="bg-white/10 p-6 rounded-2xl border border-white/15">
          <p className="font-body text-[20px] text-white/90">
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
        <SectionHeaderDS
          eyebrow="Conversación Real"
          title="Deja de responder siempre: “Fine, thanks. And you?”"
          theme="dark"
        />

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#001837] p-6 rounded-2xl border border-white/20 shadow-md">
            <span className="text-[12px] font-heading font-bold text-[#4DC2DA] uppercase tracking-wider block">
              1. Casual / Amistoso
            </span>
            <p className="font-heading font-black text-[24px] text-[#FFD203] mt-1">
              “Can’t complain!”
            </p>
            <p className="font-body text-[15px] text-white/80 mt-1">
              Ideal para romper el hielo.
            </p>
          </div>

          <div className="bg-[#001837] p-6 rounded-2xl border border-white/20 shadow-md">
            <span className="text-[12px] font-heading font-bold text-[#4DC2DA] uppercase tracking-wider block">
              2. Profesional
            </span>
            <p className="font-heading font-black text-[24px] text-[#FFD203] mt-1">
              “Doing well, thanks!”
            </p>
            <p className="font-body text-[15px] text-white/80 mt-1">
              Para llamadas de trabajo.
            </p>
          </div>

          <div className="bg-[#001837] p-6 rounded-2xl border border-white/20 shadow-md">
            <span className="text-[12px] font-heading font-bold text-[#4DC2DA] uppercase tracking-wider block">
              3. Ocupado
            </span>
            <p className="font-heading font-black text-[24px] text-[#FFD203] mt-1">
              “Keeping busy!”
            </p>
            <p className="font-body text-[15px] text-white/80 mt-1">
              Transmite dinamismo.
            </p>
          </div>

          <div className="bg-[#001837] p-6 rounded-2xl border border-white/20 shadow-md">
            <span className="text-[12px] font-heading font-bold text-[#4DC2DA] uppercase tracking-wider block">
              4. Directo
            </span>
            <p className="font-heading font-black text-[24px] text-[#FFD203] mt-1">
              “All good here!”
            </p>
            <p className="font-body text-[15px] text-white/80 mt-1">
              Natural con tu equipo.
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
        <SectionHeaderDS
          eyebrow="Fluidez sin bloqueos"
          title="Cómo dejar de traducir en tu mente antes de hablar"
          theme="dark"
        />

        <p className="font-body text-[24px] text-white/80 leading-relaxed">
          El método de 3 pasos que usan nuestros alumnos profesionales para responder en inglés con seguridad y sin quedarse en blanco.
        </p>

        <div className="pt-2">
          <div className="inline-flex items-center gap-3 bg-[#FFD203] text-[#001837] px-7 py-3.5 rounded-2xl font-heading font-extrabold text-[20px] shadow-[4px_4px_0px_#4DC2DA]">
            <span>Desliza para ver los 3 pasos</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/15 pt-7 z-10 w-full">
        <span className="font-body text-[17px] text-white/70">
          Desliza para continuar 👉
        </span>
        <span className="font-heading font-bold text-[18px] text-[#FFD203]">
          Slide 1/5
        </span>
      </div>
    </FeedFrameWrapper>
  );
}

// 06. Caso de Éxito / Transformación (TestimonialCard Oficial del DS)
export function TemplateIG06Case() {
  return (
    <FeedFrameWrapper
      id="ig-feed-06-case"
      title="06 · Caso de Éxito / Transformación"
      className="bg-[#001837]"
    >
      <BrandHeader badge="CASO REAL" badgeVariant="purple" />

      <div className="my-auto z-10 flex flex-col gap-7">
        <SectionHeaderDS
          eyebrow="Transformación de Alumnos"
          title="De temblar antes del Zoom… a liderar la presentación en inglés."
          theme="dark"
        />

        <TestimonialCardDS
          quote="Pasé de congelarme cada vez que un cliente de USA me hacía una pregunta a explicar la arquitectura técnica del proyecto con total naturalidad."
          name="Valeria Morales"
          role="Gerente de Proyectos · 4 meses en YYCL"
          avatar="/images/SRC_002_Imagen de Codex 22 ago 2026, 10_06_16 p.m..png"
          countryFlag="🇨🇴"
          variant="purple"
        />
      </div>

      <BrandFooter actionText="Agenda tu prueba de diagnóstico gratuita" />
    </FeedFrameWrapper>
  );
}

// 07. Testimonio Directo (TestimonialCard Variante Blanca)
export function TemplateIG07Testimonial() {
  return (
    <FeedFrameWrapper
      id="ig-feed-07-testimonial"
      title="07 · Testimonio de Confianza"
      className="bg-[#001837]"
    >
      <BrandHeader badge="GOOGLE REVIEWS 5.0★" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-7 max-w-[920px]">
        <SectionHeaderDS
          eyebrow="Experiencia del Estudiante"
          title="“Lo mejor de YYCL es que los profesores no te juzgan.”"
          theme="dark"
        />

        <TestimonialCardDS
          quote="Es el primer curso donde realmente hablo el 80% del tiempo. Jose is THE GOAT! He progresado mucho en poco tiempo con sus clases, siempre paciente y pedagógico."
          name="Nicolas Ibañez Esenarro"
          role="Profesional en Tecnología · Estudiante Modalidad Personalizada"
          avatar="/images/SRC_003_Imagen de Codex 22 ago 2026, 10_06_22 p.m..png"
          countryFlag="🇨🇴"
          variant="white"
        />
      </div>

      <div className="flex items-center justify-between border-t border-white/15 pt-7 z-10 w-full text-white/70">
        <span className="font-body text-[17px]">
          +1.000 estudiantes · 94-98% satisfacción
        </span>
        <span className="font-heading font-bold text-[18px] text-[#FFD203]">
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

      <div className="my-auto z-10 flex flex-col gap-7">
        <div className="flex items-center gap-7 bg-white/10 p-8 rounded-3xl border border-white/15">
          <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-[#FFD203] relative shrink-0 shadow-xl">
            <UserAvatar
              src="/images/SRC_004_Imagen de Codex 22 ago 2026, 10_06_30 p.m..png"
              alt="Profe Jordi"
              name=""
              size={176}
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-xs font-heading font-bold text-[#4DC2DA] uppercase tracking-widest">
              Speaking Coach
            </span>
            <h2 className="font-heading font-extrabold text-[42px] leading-tight text-white">
              Profe Jordi
            </h2>
            <p className="font-body text-[19px] text-white/85 leading-relaxed">
              Especialista en pronunciación y fluidez. En sus clases la prioridad es que hables sin miedo a equivocarte.
            </p>
            <div className="flex gap-2.5 mt-2">
              <BadgeDS label="100% Conversacional" variant="yellow" />
              <BadgeDS label="B1 / B2 / C1" variant="white" />
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

      <div className="my-auto z-10 flex flex-col gap-7">
        <SectionHeaderDS
          eyebrow="Inscripciones Abiertas"
          title="Club de Conversación: Grupos reducidos de máx. 6 alumnos"
          theme="dark"
        />

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white text-[#001837] p-5 rounded-2xl border-2 border-[#001837] flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#FFD203] text-[#001837] flex items-center justify-center font-black text-xl shrink-0">
              ✓
            </div>
            <p className="font-heading font-bold text-[20px] text-[#001837]">
              Habla desde el primer minuto en cada sesión
            </p>
          </div>

          <div className="bg-white text-[#001837] p-5 rounded-2xl border-2 border-[#001837] flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#FFD203] text-[#001837] flex items-center justify-center font-black text-xl shrink-0">
              ✓
            </div>
            <p className="font-heading font-bold text-[20px] text-[#001837]">
              Temas reales: Trabajo, entrevistas, viajes y debate
            </p>
          </div>

          <div className="bg-white text-[#001837] p-5 rounded-2xl border-2 border-[#001837] flex items-center gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-[#FFD203] text-[#001837] flex items-center justify-center font-black text-xl shrink-0">
              ✓
            </div>
            <p className="font-heading font-bold text-[20px] text-[#001837]">
              Feedback constructivo sin notas punitivas
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/15 pt-7 z-10 w-full">
        <span className="font-body text-[17px] text-white/70">
          Cupos limitados por horario
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-6 py-2.5 rounded-xl font-heading font-extrabold text-[16px] shadow-sm">
          Aparta tu Lugar →
        </div>
      </div>
    </FeedFrameWrapper>
  );
}

// 10. CTA Nativo de Instagram
export function TemplateIG10CTA() {
  return (
    <FeedFrameWrapper
      id="ig-feed-10-cta"
      title="10 · CTA Nativo de Instagram"
      className="bg-[#001837]"
    >
      <BrandHeader badge="DIAGNÓSTICO ORAL GRATIS" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-8 max-w-[920px]">
        <SectionHeaderDS
          eyebrow="Da el primer paso hoy"
          title="¿Listo para perder el miedo a hablar inglés?"
          theme="dark"
        />

        {/* Action Card Nativa */}
        <div className="bg-white/10 p-7 rounded-3xl border border-white/20 space-y-4 shadow-xl">
          <p className="font-heading font-bold text-[20px] text-white">
            Elige cómo agendar tu sesión de 15 min sin costo:
          </p>

          <div className="grid grid-cols-1 gap-3.5">
            <div className="bg-white text-[#001837] p-5 rounded-2xl flex items-center justify-between shadow-sm border-2 border-[#001837]">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#834296] text-white flex items-center justify-center font-bold text-xl shrink-0">
                  💬
                </div>
                <div>
                  <span className="font-heading font-black text-[19px] text-[#001837] block">
                    Comenta la palabra <span className="bg-[#FFD203] px-2 py-0.5 rounded text-[#001837]">“QUIERO”</span>
                  </span>
                  <span className="font-body text-[14px] text-slate-600">
                    Te enviamos el enlace directo a tu DM al instante.
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white text-[#001837] p-5 rounded-2xl flex items-center justify-between shadow-sm border-2 border-[#001837]">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#001837] text-[#FFD203] flex items-center justify-center font-bold text-xl shrink-0">
                  🔗
                </div>
                <div>
                  <span className="font-heading font-black text-[19px] text-[#001837] block">
                    Entra al link en nuestro perfil <span className="text-[#834296]">@yyclanguages</span>
                  </span>
                  <span className="font-body text-[14px] text-slate-600">
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
            size={58}
          />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/15 pt-7 z-10 w-full text-white/70">
        <span className="font-body text-[17px]">
          Sin notas punitivas · 100% online
        </span>
        <span className="font-heading font-bold text-[17px] text-[#FFD203]">
          @yyclanguages
        </span>
      </div>
    </FeedFrameWrapper>
  );
}
