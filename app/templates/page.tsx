"use client";

import React, { useState } from "react";
import {
  TemplateIG01Quote,
  TemplateIG02Tip,
  TemplateIG03Error,
  TemplateIG04MiniClass,
  TemplateIG05CarouselCover,
  TemplateIG06Case,
  TemplateIG07Testimonial,
  TemplateIG08Teacher,
  TemplateIG09Promo,
  TemplateIG10CTA,
} from "@/components/templates/InstagramFeedTemplates";
import {
  TemplateStory01ThisOrThat,
  TemplateStory02Quiz,
  TemplateStory03Poll,
  TemplateStory04Question,
  TemplateStory05DailyTip,
  TemplateStory06CTA,
} from "@/components/templates/StoriesTemplates";
import {
  TemplateLinkedIn01Insight,
  TemplateLinkedIn02Carousel,
  TemplateLinkedIn03ThoughtLeadership,
  TemplateLinkedIn04B2BCase,
  TemplateLinkedIn05ProfessionalTestimonial,
  TemplateLinkedIn06Announcement,
} from "@/components/templates/LinkedInTemplates";
import {
  TemplateTikTok01Hook,
  TemplateTikTok02Vocabulary,
  TemplateTikTok03BeforeAfter,
  TemplateTikTok04TeacherExplains,
  TemplateTikTok05Storytelling,
  TemplateTikTok06EndCard,
} from "@/components/templates/TikTokTemplates";
import {
  TemplateInternal01Welcome,
  TemplateInternal02Workshop,
  TemplateInternal03Pricing,
  TemplateInternal04Certificate,
} from "@/components/templates/InternalCommercialTemplates";
import {
  HighlightsProfileBar,
  HighlightStoryCover,
  HIGHLIGHTS_DATA,
} from "@/components/templates/InstagramHighlightsTemplates";
import { YYCLStickerLogo } from "@/components/templates/DesignElements";
import {
  Layers,
  Video,
  FileText,
  Camera,
  Share2,
  Sparkles,
} from "lucide-react";

type CategoryKey =
  | "all"
  | "ig-feed"
  | "ig-stories"
  | "ig-highlights"
  | "linkedin"
  | "tiktok"
  | "commercial";

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState<CategoryKey>("all");

  const categories = [
    { id: "all", label: "Todas las piezas (37)", icon: Layers },
    { id: "ig-feed", label: "Instagram Feed (10)", icon: Camera },
    { id: "ig-stories", label: "Instagram Stories (6)", icon: Camera },
    { id: "ig-highlights", label: "Historias Destacadas (9)", icon: Sparkles },
    { id: "linkedin", label: "LinkedIn (6)", icon: Share2 },
    { id: "tiktok", label: "TikTok & Reels (6)", icon: Video },
    { id: "commercial", label: "Interno & Comercial (4)", icon: FileText },
  ];

  return (
    <div className="min-h-screen bg-[#F4F5F7] text-[#001837] selection:bg-[#FFD203] selection:text-[#001837]">
      {/* Header flotante de control */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 px-6 py-4 shadow-xs">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <YYCLStickerLogo size={52} rotate="-2deg" />
            <div>
              <h1 className="font-heading font-black text-2xl leading-tight text-[#001837]">
                YYCL 2026 · Suite de Piezas Gráficas
              </h1>
              <p className="text-xs text-slate-500 font-body">
                Sistema oficial de templates modulares y piezas de marca
              </p>
            </div>
          </div>
        </div>

        {/* Selector de Categorías */}
        <div className="max-w-7xl mx-auto mt-4 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as CategoryKey)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-heading font-bold flex items-center gap-2 transition-all shrink-0 cursor-pointer ${
                  isActive
                    ? "bg-[#834296] text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>
      </header>


      {/* Contenedor Principal */}
      <main className="p-6 md:p-12">


        {/* ======================================================== */}
        {/* SECCIÓN 1: INSTAGRAM FEED (1080 x 1350 px · Ratio 4:5) */}
        {/* ======================================================== */}
        {(selectedCategory === "all" || selectedCategory === "ig-feed") && (
          <section className="mb-20 max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
              <Camera className="w-8 h-8 text-[#834296]" />
              <div>
                <h2 className="text-3xl font-heading font-black text-[#001837]">
                  1. Instagram Feed & Carruseles
                </h2>
                <p className="text-sm text-slate-600">
                  Formato vertical 4:5 (1080 × 1350 px) · Máximo impacto visual y retención en feed
                </p>
              </div>
            </div>

            <div
              className={
                exportMode
                  ? "flex flex-col gap-16 items-center"
                  : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              }
            >
              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  01 · Quote / Frase de Impacto
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateIG01Quote />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  02 · Tip de Inglés (Vocabulario)
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateIG02Tip />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  03 · Error Común (Don&apos;t Say X → Say Y)
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateIG03Error />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  04 · Mini Clase Rápida
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateIG04MiniClass />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  05 · Carrusel Educativo (Portada)
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateIG05CarouselCover />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  06 · Caso Real / Transformación
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateIG06Case />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  07 · Testimonio de Confianza
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateIG07Testimonial />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  08 · Presentación de Profesores
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateIG08Teacher />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  09 · Promocional / Club de Conversación
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateIG09Promo />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  10 · CTA Directo / Cierre
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateIG10CTA />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* SECCIÓN 2: INSTAGRAM STORIES (1080 x 1920 px · Ratio 9:16) */}
        {/* ======================================================== */}
        {(selectedCategory === "all" || selectedCategory === "ig-stories") && (
          <section className="mb-20 max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8 border-b border-white/15 pb-4">
              <Camera className="w-8 h-8 text-[#4DC2DA]" />
              <div>
                <h2 className="text-3xl font-heading font-black text-[#001837]">
                  2. Instagram Stories (Interactivas)
                </h2>
                <p className="text-sm text-slate-600">
                  Formato vertical 9:16 (1080 × 1920 px) · Diseñadas para stickers de votación, encuestas y engagement
                </p>
              </div>
            </div>

            <div
              className={
                exportMode
                  ? "flex flex-col gap-16 items-center"
                  : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              }
            >
              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#4DC2DA]">
                  Story 01 · This or That (Votación)
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.32] w-[1080px] h-[1920px] -mb-[1300px] -mr-[730px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateStory01ThisOrThat />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#4DC2DA]">
                  Story 02 · Quiz Interactivo
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.32] w-[1080px] h-[1920px] -mb-[1300px] -mr-[730px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateStory02Quiz />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#4DC2DA]">
                  Story 03 · Encuesta / Poll Anónima
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.32] w-[1080px] h-[1920px] -mb-[1300px] -mr-[730px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateStory03Poll />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#4DC2DA]">
                  Story 04 · Caja de Preguntas Abiertas
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.32] w-[1080px] h-[1920px] -mb-[1300px] -mr-[730px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateStory04Question />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#4DC2DA]">
                  Story 05 · Flash Tip del Día
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.32] w-[1080px] h-[1920px] -mb-[1300px] -mr-[730px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateStory05DailyTip />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#4DC2DA]">
                  Story 06 · CTA / Cupos Diagnóstico
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.32] w-[1080px] h-[1920px] -mb-[1300px] -mr-[730px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateStory06CTA />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* SECCIÓN NUEVA: HISTORIAS DESTACADAS (HIGHLIGHTS COVERS)  */}
        {/* ======================================================== */}
        {(selectedCategory === "all" || selectedCategory === "ig-highlights") && (
          <section className="mb-20 max-w-7xl mx-auto space-y-8">
            <div className="flex items-center gap-3 border-b border-white/15 pb-4">
              <Sparkles className="w-8 h-8 text-[#FFD203]" />
              <div>
                <h2 className="text-3xl font-heading font-black text-[#001837]">
                  3. Historias Destacadas (Highlight Covers)
                </h2>
                <p className="text-sm text-slate-600">
                  Sistema de 9 iconos oficiales con código semántico de color (Amarillo, Cyan, Navy, Violeta y Crema)
                </p>
              </div>
            </div>

            {/* Simulador de Barra de Perfil de Instagram */}
            {!exportMode && <HighlightsProfileBar />}

            {/* Portadas Completas 9:16 (1080 x 1920 px) */}
            <div
              className={
                exportMode
                  ? "flex flex-col gap-16 items-center"
                  : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pt-4"
              }
            >
              {HIGHLIGHTS_DATA.map((item, idx) => (
                <div key={item.id} className="flex flex-col gap-3">
                  <span className="text-xs font-heading font-bold text-[#FFD203]">
                    {`Highlight 0${idx + 1} · ${item.title}`}
                  </span>
                  <div
                    className={
                      exportMode
                        ? ""
                        : "origin-top-left transform scale-[0.32] w-[1080px] h-[1920px] -mb-[1300px] -mr-[730px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                    }
                  >
                    <HighlightStoryCover item={item} />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* SECCIÓN 3: LINKEDIN (1080 x 1350 px · Ejecutivo) */}
        {/* ======================================================== */}
        {(selectedCategory === "all" || selectedCategory === "linkedin") && (
          <section className="mb-20 max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8 border-b border-white/15 pb-4">
              <Share2 className="w-8 h-8 text-[#4DC2DA]" />
              <div>
                <h2 className="text-3xl font-heading font-black text-[#001837]">
                  3. LinkedIn (Posts & Carruseles PDF)
                </h2>
                <p className="text-sm text-slate-600">
                  Formato editorial sobrio (1080 × 1350 px) · Pensado para tomadores de decisión, B2B y directivos
                </p>
              </div>
            </div>

            <div
              className={
                exportMode
                  ? "flex flex-col gap-16 items-center"
                  : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              }
            >
              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#CAFFFF]">
                  01 · Insight Profesional
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateLinkedIn01Insight />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#CAFFFF]">
                  02 · Carrusel PDF Ejecutivo
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateLinkedIn02Carousel />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#CAFFFF]">
                  03 · Thought Leadership (Fundadores)
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateLinkedIn03ThoughtLeadership />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#CAFFFF]">
                  04 · Caso Corporativo B2B (SRK)
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateLinkedIn04B2BCase />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#CAFFFF]">
                  05 · Testimonio Profesional Senior
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateLinkedIn05ProfessionalTestimonial />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#CAFFFF]">
                  06 · Announcement Corporativo
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateLinkedIn06Announcement />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* SECCIÓN 4: TIKTOK & REELS (1080 x 1920 px · Overlays) */}
        {/* ======================================================== */}
        {(selectedCategory === "all" || selectedCategory === "tiktok") && (
          <section className="mb-20 max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8 border-b border-white/15 pb-4">
              <Video className="w-8 h-8 text-[#FFD203]" />
              <div>
                <h2 className="text-3xl font-heading font-black text-[#001837]">
                  4. TikTok & Reels (Overlays Dinámicos)
                </h2>
                <p className="text-sm text-slate-600">
                  Formato vertical 9:16 (1080 × 1920 px) · Hooks de retención, marcos para video de profesores y end cards
                </p>
              </div>
            </div>

            <div
              className={
                exportMode
                  ? "flex flex-col gap-16 items-center"
                  : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8"
              }
            >
              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  01 · Hook Viral de Apertura
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.32] w-[1080px] h-[1920px] -mb-[1300px] -mr-[730px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateTikTok01Hook />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  02 · Vocabulario Express (3 Niveles)
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.32] w-[1080px] h-[1920px] -mb-[1300px] -mr-[730px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateTikTok02Vocabulary />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  03 · Before & After Directo
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.32] w-[1080px] h-[1920px] -mb-[1300px] -mr-[730px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateTikTok03BeforeAfter />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  04 · Marco para Video del Profesor
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.32] w-[1080px] h-[1920px] -mb-[1300px] -mr-[730px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateTikTok04TeacherExplains />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  05 · Storytelling de Impacto
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.32] w-[1080px] h-[1920px] -mb-[1300px] -mr-[730px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateTikTok05Storytelling />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  06 · End Card Oficial
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.32] w-[1080px] h-[1920px] -mb-[1300px] -mr-[730px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateTikTok06EndCard />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ======================================================== */}
        {/* SECCIÓN 5: INTERNO & COMERCIAL */}
        {/* ======================================================== */}
        {(selectedCategory === "all" || selectedCategory === "commercial") && (
          <section className="mb-20 max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8 border-b border-white/15 pb-4">
              <FileText className="w-8 h-8 text-[#834296]" />
              <div>
                <h2 className="text-3xl font-heading font-black text-[#001837]">
                  5. Piezas Internas y Material Comercial
                </h2>
                <p className="text-sm text-slate-600">
                  Formatos institucionales, bienvenida, workshops, planes y certificados
                </p>
              </div>
            </div>

            <div
              className={
                exportMode
                  ? "flex flex-col gap-16 items-center"
                  : "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-8"
              }
            >
              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  01 · Bienvenida de Nuevos Alumnos
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateInternal01Welcome />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  02 · Workshop / Live Masterclass
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateInternal02Workshop />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  03 · Matriz de Planes y Beneficios
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateInternal03Pricing />
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <span className="text-xs font-heading font-bold text-[#FFD203]">
                  04 · Certificado de Nivel Oficial
                </span>
                <div
                  className={
                    exportMode
                      ? ""
                      : "origin-top-left transform scale-[0.34] w-[1080px] h-[1350px] -mb-[890px] -mr-[710px] rounded-3xl overflow-hidden shadow-2xl border border-white/20"
                  }
                >
                  <TemplateInternal04Certificate />
                </div>
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
