import React from "react";
import {
  BrandHeader,
  BrandFooter,
  UserAvatar,
  SectionHeaderDS,
  TestimonialCardDS,
  BadgeDS,
  MarkerHighlight,
} from "./DesignElements";
import { Check, X, ArrowRight, Bookmark } from "lucide-react";

// Wrapper base para Instagram Feed (1080 x 1350 px exactos)
export function FeedFrameWrapper({
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
      data-template-type="instagram-feed"
      className={`w-[1080px] h-[1350px] relative overflow-hidden flex flex-col justify-between p-[72px] text-white select-none ${className}`}
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
      className="bg-[#834296]"
    >
      <BrandHeader badge="CONVERSACIONAL" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-8 max-w-[940px]">
        <SectionHeaderDS
          eyebrow="Desbloqueo Mental"
          title="You already know more English than you think."
          theme="dark"
          eyebrowColor="text-[#FFE2C0]"
        />

        <div className="bg-[#FFE2C0] text-[#001837] p-8 rounded-3xl border-3 border-[#001837] shadow-[8px_8px_0px_#001837] space-y-3">
          <p className="font-body text-[32px] leading-relaxed text-[#001837] font-medium">
            El verdadero bloqueo nunca fue tu vocabulario. Fue el miedo a equivocarte
            frente a otros. Cuando el entorno es seguro,{" "}
            <strong className="text-[#834296] font-black">tu inglés fluye naturalmente.</strong>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-6 z-10 w-full">
        <UserAvatar
          src="/images/naty-sanchez.png"
          alt="Naty Sánchez"
          name="Naty Sánchez"
          role="Directora Académica · YYCL"
          size={76}
          borderColor="border-[#FFD203]"
        />
        <div className="flex items-center gap-2.5 text-white font-heading font-bold text-[24px]">
          <Bookmark className="w-7 h-7 text-[#FFD203]" />
          <span>Guarda este post</span>
        </div>
      </div>
    </FeedFrameWrapper>
  );
}

// 02. Tip de Inglés (Acento Amarillo Conversacional)
export function TemplateIG02Tip() {
  return (
    <FeedFrameWrapper
      id="ig-feed-02-tip"
      title="02 · Tip de Inglés Profesional"
      className="bg-[#834296]"
    >
      <BrandHeader badge="CONVERSACIONAL" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-7">
        <SectionHeaderDS
          eyebrow="Tips de Reuniones"
          title="3 phrasal verbs para sonar más natural al hablar"
          theme="dark"
          eyebrowColor="text-[#FFE2C0]"
        />

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white text-[#001837] p-6 rounded-2xl border-3 border-[#001837] shadow-[6px_6px_0px_#FFD203]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-heading font-black text-[30px] text-[#834296]">
                1. Bring up
              </span>
              <BadgeDS label="Mencionar tema" variant="yellow" />
            </div>
            <p className="font-body text-[25px] text-slate-800">
              “I’d like to <strong className="text-[#001837]">bring up</strong> the budget question before we finish.”
            </p>
          </div>

          <div className="bg-white text-[#001837] p-6 rounded-2xl border-3 border-[#001837] shadow-[6px_6px_0px_#FFD203]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-heading font-black text-[30px] text-[#834296]">
                2. Follow up
              </span>
              <BadgeDS label="Dar seguimiento" variant="cream" />
            </div>
            <p className="font-body text-[25px] text-slate-800">
              “Let’s <strong className="text-[#001837]">follow up</strong> on this next Tuesday via email.”
            </p>
          </div>

          <div className="bg-white text-[#001837] p-6 rounded-2xl border-3 border-[#001837] shadow-[6px_6px_0px_#FFD203]">
            <div className="flex items-center justify-between mb-1">
              <span className="font-heading font-black text-[30px] text-[#834296]">
                3. Wrap up
              </span>
              <BadgeDS label="Concluir sesión" variant="purple" />
            </div>
            <p className="font-body text-[25px] text-slate-800">
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
      className="bg-[#834296]"
    >
      <BrandHeader badge="ERROR COMÚN" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-7">
        <SectionHeaderDS
          eyebrow="Traducción Literal"
          title="¿Cómo dices tu edad en inglés sin equivocarte?"
          theme="dark"
          eyebrowColor="text-[#FFE2C0]"
        />

        <div className="flex flex-col gap-4">
          <div className="bg-red-950/60 border-3 border-red-500 rounded-3xl p-6 flex items-center justify-between shadow-md">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center font-bold text-2xl shrink-0">
                <X className="w-9 h-9" />
              </div>
              <div>
                <span className="text-sm font-heading font-bold uppercase tracking-wider text-red-300">
                  Don’t say:
                </span>
                <p className="font-heading font-bold text-[38px] text-white/95 line-through decoration-red-400 decoration-4">
                  “I have 35 years”
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#FFD203] border-4 border-[#001837] rounded-3xl p-6 flex items-center justify-between shadow-[8px_8px_0px_#001837] text-[#001837]">
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-2xl bg-[#001837] text-[#FFD203] flex items-center justify-center font-bold text-2xl shrink-0">
                <Check className="w-9 h-9" />
              </div>
              <div>
                <span className="text-sm font-heading font-bold uppercase tracking-wider text-[#001837]">
                  Say instead:
                </span>
                <p className="font-heading font-black text-[42px] text-[#001837]">
                  “I am 35 years old”
                </p>
              </div>
            </div>
            <BadgeDS label="Natural" variant="purple" />
          </div>
        </div>

        <div className="bg-white/15 p-6 rounded-2xl border border-white/25">
          <p className="font-body text-[26px] text-white leading-relaxed font-medium">
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

      <div className="my-auto z-10 flex flex-col gap-7">
        <SectionHeaderDS
          eyebrow="Conversación Real"
          title="Deja de responder siempre: “Fine, thanks. And you?”"
          theme="dark"
          eyebrowColor="text-[#FFE2C0]"
        />

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#001837] p-6 rounded-2xl border-2 border-white/20 shadow-md">
            <span className="text-sm font-heading font-bold text-[#FFD203] uppercase tracking-wider block">
              1. Casual
            </span>
            <p className="font-heading font-black text-[30px] text-white mt-1">
              “Can’t complain!”
            </p>
            <p className="font-body text-[20px] text-white/80 mt-1">
              Para romper el hielo.
            </p>
          </div>

          <div className="bg-[#001837] p-6 rounded-2xl border-2 border-white/20 shadow-md">
            <span className="text-sm font-heading font-bold text-[#FFD203] uppercase tracking-wider block">
              2. Profesional
            </span>
            <p className="font-heading font-black text-[30px] text-white mt-1">
              “Doing well, thanks!”
            </p>
            <p className="font-body text-[20px] text-white/80 mt-1">
              Llamadas de trabajo.
            </p>
          </div>

          <div className="bg-[#001837] p-6 rounded-2xl border-2 border-white/20 shadow-md">
            <span className="text-sm font-heading font-bold text-[#FFD203] uppercase tracking-wider block">
              3. Ocupado
            </span>
            <p className="font-heading font-black text-[30px] text-white mt-1">
              “Keeping busy!”
            </p>
            <p className="font-body text-[20px] text-white/80 mt-1">
              Transmite ritmo.
            </p>
          </div>

          <div className="bg-[#001837] p-6 rounded-2xl border-2 border-white/20 shadow-md">
            <span className="text-sm font-heading font-bold text-[#FFD203] uppercase tracking-wider block">
              4. Directo
            </span>
            <p className="font-heading font-black text-[30px] text-white mt-1">
              “All good here!”
            </p>
            <p className="font-body text-[20px] text-white/80 mt-1">
              Entre compañeros.
            </p>
          </div>
        </div>
      </div>

      <BrandFooter actionText="Clases 100% conversacionales en vivo con profesores reales" />
    </FeedFrameWrapper>
  );
}

// 05. Carrusel Educativo
export function TemplateIG05CarouselCover() {
  return (
    <FeedFrameWrapper
      id="ig-feed-05-carousel"
      title="05 · Carrusel Educativo (Portada)"
      className="bg-[#FDF8F2] text-[#001837]"
    >
      <BrandHeader badge="GUÍA PRÁCTICA" badgeVariant="purple" />

      <div className="my-auto z-10 flex flex-col gap-7 max-w-[940px]">
        <SectionHeaderDS
          eyebrow="Fluidez sin bloqueos"
          title="Cómo dejar de traducir en tu mente antes de hablar"
          theme="light"
          eyebrowColor="text-[#834296]"
        />

        <p className="font-body text-[30px] text-[#001837]/85 leading-relaxed font-medium">
          El método de 3 pasos que usan nuestros alumnos profesionales para responder en inglés con seguridad y sin quedarse en blanco.
        </p>

        <div className="pt-2">
          <div className="inline-flex items-center gap-3 bg-[#FFD203] text-[#001837] px-8 py-4 rounded-2xl font-heading font-black text-[24px] border-3 border-[#001837] shadow-[6px_6px_0px_#834296]">
            <span>Desliza para ver los 3 pasos</span>
            <ArrowRight className="w-6 h-6" />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t-2 border-[#001837]/15 pt-6 z-10 w-full">
        <span className="font-body text-[22px] text-[#001837]/75 font-medium">
          Desliza para continuar 👉
        </span>
        <span className="font-heading font-black text-[22px] text-[#834296]">
          Slide 1/5
        </span>
      </div>
    </FeedFrameWrapper>
  );
}

// 06. Caso de Éxito / Transformación
export function TemplateIG06Case() {
  return (
    <FeedFrameWrapper
      id="ig-feed-06-case"
      title="06 · Caso de Éxito / Transformación"
      className="bg-[#834296]"
    >
      <BrandHeader badge="CASO REAL" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-7">
        <SectionHeaderDS
          eyebrow="Transformación de Alumnos"
          title="De temblar antes del Zoom… a liderar la presentación en inglés."
          theme="dark"
          eyebrowColor="text-[#FFE2C0]"
        />

        <TestimonialCardDS
          quote="Pasé de congelarme cada vez que un cliente de USA me hacía una pregunta a explicar la arquitectura técnica del proyecto con total naturalidad."
          name="Valeria Morales"
          role="Gerente de Proyectos · 4 meses en YYCL"
          avatar="/images/valeria-morales.png"
          countryFlag="🇨🇴"
          variant="cream"
        />
      </div>

      <BrandFooter actionText="Agenda tu prueba de diagnóstico gratuita" />
    </FeedFrameWrapper>
  );
}

// 07. Testimonio Directo
export function TemplateIG07Testimonial() {
  return (
    <FeedFrameWrapper
      id="ig-feed-07-testimonial"
      title="07 · Testimonio de Confianza"
      className="bg-[#834296]"
    >
      <BrandHeader badge="GOOGLE REVIEWS 5.0★" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-7 max-w-[940px]">
        <SectionHeaderDS
          eyebrow="Experiencia del Estudiante"
          title="“Lo mejor de YYCL es que los profesores no te juzgan.”"
          theme="dark"
          eyebrowColor="text-[#FFE2C0]"
        />

        <TestimonialCardDS
          quote="Es el primer curso donde realmente hablo el 80% del tiempo. Jose is THE GOAT! He progresado mucho en poco tiempo con sus clases, siempre paciente y pedagógico."
          name="Nicolas Ibañez Esenarro"
          role="Profesional en Tecnología · Estudiante Modalidad Personalizada"
          avatar="/images/nicolas-ibanez.png"
          countryFlag="🇨🇴"
          variant="white"
        />
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-6 z-10 w-full text-white/80">
        <span className="font-body text-[22px]">
          +1.000 estudiantes · 94-98% satisfacción
        </span>
        <span className="font-heading font-black text-[22px] text-[#FFD203]">
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
      title="08 · Conoce a tus Profesores (Kids & Teens)"
      className="bg-[#834296]"
    >
      <BrandHeader badge="KIDS & TEENS" badgeVariant="cyan" />

      <div className="my-auto z-10 flex flex-col gap-7">
        <div className="flex items-center gap-8 bg-white text-[#001837] p-8 rounded-3xl border-3 border-[#001837] shadow-[8px_8px_0px_#4DC2DA]">
          <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-[#4DC2DA] relative shrink-0 shadow-xl">
            <UserAvatar
              src="/images/profe-jordi.png"
              alt="Profe Jordi"
              name=""
              size={192}
            />
          </div>

          <div className="flex flex-col gap-2">
            <span className="text-sm font-heading font-bold text-[#834296] uppercase tracking-widest">
              Kids & Teens Coach
            </span>
            <h2 className="font-heading font-black text-[46px] leading-tight text-[#001837]">
              Profe Jordi
            </h2>
            <p className="font-body text-[23px] text-slate-700 leading-relaxed font-medium">
              Especialista en dinámicas lúdicas y pronunciación para niños y adolescentes. Aprendizaje sin presiones.
            </p>
            <div className="flex gap-3 mt-2">
              <BadgeDS label="Dinámico & Lúdico" variant="cyan" />
              <BadgeDS label="Grupal & 1-a-1" variant="yellow" />
            </div>
          </div>
        </div>
      </div>

      <BrandFooter actionText="Aprende con profesores humanos que inspiran" />
    </FeedFrameWrapper>
  );
}

// 09. Promocional
export function TemplateIG09Promo() {
  return (
    <FeedFrameWrapper
      id="ig-feed-09-promo"
      title="09 · Promocional Empresas / Corporativo"
      className="bg-[#001837]"
    >
      <BrandHeader badge="EMPRESAS B2B" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-7">
        <SectionHeaderDS
          eyebrow="Capacitación Corporativa"
          title="Capacita a tu equipo en inglés para reuniones y ventas"
          theme="dark"
        />

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white text-[#001837] p-6 rounded-2xl border-3 border-[#001837] flex items-center gap-5 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-[#001837] text-[#FFD203] flex items-center justify-center font-black text-2xl shrink-0">
              ✓
            </div>
            <p className="font-heading font-bold text-[25px] text-[#001837]">
              Diagnóstico inicial de nivel para cada colaborador sin costo
            </p>
          </div>

          <div className="bg-white text-[#001837] p-6 rounded-2xl border-3 border-[#001837] flex items-center gap-5 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-[#001837] text-[#FFD203] flex items-center justify-center font-black text-2xl shrink-0">
              ✓
            </div>
            <p className="font-heading font-bold text-[25px] text-[#001837]">
              Enfocado en presentaciones, llamadas y reportes en inglés
            </p>
          </div>

          <div className="bg-white text-[#001837] p-6 rounded-2xl border-3 border-[#001837] flex items-center gap-5 shadow-md">
            <div className="w-12 h-12 rounded-xl bg-[#001837] text-[#FFD203] flex items-center justify-center font-black text-2xl shrink-0">
              ✓
            </div>
            <p className="font-heading font-bold text-[25px] text-[#001837]">
              Reportes mensuales de asistencia y avance conversacional
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-6 z-10 w-full">
        <span className="font-body text-[22px] text-white/80">
          Facturación corporativa disponible
        </span>
        <div className="bg-[#FFD203] text-[#001837] px-7 py-3 rounded-2xl font-heading font-black text-[20px] shadow-sm">
          Solicitar Propuesta →
        </div>
      </div>
    </FeedFrameWrapper>
  );
}

// 10. CTA Nativo
export function TemplateIG10CTA() {
  return (
    <FeedFrameWrapper
      id="ig-feed-10-cta"
      title="10 · CTA Nativo de Instagram"
      className="bg-[#834296]"
    >
      <BrandHeader badge="DIAGNÓSTICO ORAL GRATIS" badgeVariant="yellow" />

      <div className="my-auto z-10 flex flex-col gap-8 max-w-[940px]">
        <SectionHeaderDS
          eyebrow="Da el primer paso hoy"
          title="¿Listo para perder el miedo a hablar inglés?"
          theme="dark"
          eyebrowColor="text-[#FFE2C0]"
        />

        <div className="bg-[#001837] p-8 rounded-3xl border-3 border-white/20 space-y-5 shadow-2xl">
          <p className="font-heading font-bold text-[25px] text-white">
            Elige cómo agendar tu sesión de 15 min sin costo:
          </p>

          <div className="grid grid-cols-1 gap-4">
            <div className="bg-white text-[#001837] p-6 rounded-2xl flex items-center justify-between shadow-sm border-2 border-[#001837]">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#834296] text-white flex items-center justify-center font-bold text-2xl shrink-0">
                  💬
                </div>
                <div>
                  <span className="font-heading font-black text-[25px] text-[#001837] block">
                    Comenta la palabra <span className="bg-[#FFD203] px-2.5 py-0.5 rounded-lg text-[#001837]">“QUIERO”</span>
                  </span>
                  <span className="font-body text-[19px] text-slate-700 font-medium">
                    Te enviamos el link de agendamiento directo a tu DM.
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-white text-[#001837] p-6 rounded-2xl flex items-center justify-between shadow-sm border-2 border-[#001837]">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-[#001837] text-[#FFD203] flex items-center justify-center font-bold text-2xl shrink-0">
                  🔗
                </div>
                <div>
                  <span className="font-heading font-black text-[25px] text-[#001837] block">
                    Entra al enlace en nuestro perfil <span className="text-[#834296]">@yyclanguages</span>
                  </span>
                  <span className="font-body text-[19px] text-slate-700 font-medium">
                    Elige el día y horario que mejor se acomode a ti.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <UserAvatar
            src="/images/naty-sanchez.png"
            alt="Naty Sánchez"
            name="Naty Sánchez"
            role="Directora Académica · Evaluación 1-a-1 por Zoom"
            size={72}
            borderColor="border-[#FFD203]"
          />
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-white/20 pt-6 z-10 w-full text-white/85">
        <span className="font-body text-[22px]">
          Sin notas punitivas · 100% online
        </span>
        <span className="font-heading font-black text-[22px] text-[#FFD203]">
          @yyclanguages
        </span>
      </div>
    </FeedFrameWrapper>
  );
}
