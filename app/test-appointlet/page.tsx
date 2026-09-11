"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { 
  Clock, 
  Video, 
  ShieldCheck, 
  ExternalLink,
  Award,
  ChevronDown,
  Sparkles,
  Info
} from "lucide-react";

export default function TestAppointletPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showMobileTips, setShowMobileTips] = useState(false);
  const appointletUrl = "https://appt.link/prueba-de-diagnostico/test-diagnostico";

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />

      {/* Banner Superior */}
      <div className="bg-[#834296] text-white text-xs py-2 px-4 text-center font-heading font-bold flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#FFD203]" />
        <span>INTEGRACIÓN APPOINTLET: Con perfil de Nathi + Calendario oficial embebido</span>
      </div>

      <main className="flex-1 py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        
        {/* Header Superior */}
        <div className="text-center space-y-2 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
            <span className="w-2 h-2 rounded-full bg-[#834296]" />
            <span>Entrevista 1 a 1 sin costo</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
            Agenda tu entrevista diagnóstica
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-body-regular max-w-md mx-auto">
            30 minutos en vivo con nuestro equipo pedagógico para evaluar tu nivel sin compromiso.
          </p>
        </div>

        {/* Layout de 2 Columnas (Desktop) / Compacto y Priorizado (Mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* ========================================================================= */}
          {/* COLUMNA IZQUIERDA: Presentación Nathi + Recomendaciones Colapsables en Mobile */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-5">
            
            {/* Tarjeta de Nathi (Compacta en Mobile, completa en Desktop) */}
            <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-[#001837] shadow-[3px_3px_0px_#001837] sm:shadow-[4px_4px_0px_#001837] p-4 sm:p-6 space-y-3.5">
              <div className="flex items-center gap-3.5 sm:gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#001837] shadow-[2px_2px_0px_#FFD203] shrink-0 bg-[#FFE2C0]/40">
                  <img 
                    src="/assets/profesores/natty-sanchez.png" 
                    alt="Natty Sánchez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-0.5 sm:space-y-1">
                  <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#834296]/10 text-[#834296] text-[10px] font-heading font-extrabold uppercase tracking-wider">
                    <Award className="w-3 h-3" />
                    <span>Tu evaluadora</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-extrabold text-[#001837] leading-tight">
                    Natty Sánchez
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-medium">
                    Co-fundadora & Dir. Pedagógica
                  </p>
                </div>
              </div>

              {/* Badges Rápidos */}
              <div className="border-t border-slate-100 pt-3 grid grid-cols-3 gap-2 text-center">
                <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                  <Clock className="w-4 h-4 text-[#834296] mx-auto mb-1" />
                  <span className="text-[10px] sm:text-[11px] font-heading font-bold text-slate-700 block">30 min</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                  <Video className="w-4 h-4 text-emerald-600 mx-auto mb-1" />
                  <span className="text-[10px] sm:text-[11px] font-heading font-bold text-slate-700 block">Meet</span>
                </div>
                <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                  <ShieldCheck className="w-4 h-4 text-sky-600 mx-auto mb-1" />
                  <span className="text-[10px] sm:text-[11px] font-heading font-bold text-emerald-700 block">Gratis</span>
                </div>
              </div>
            </div>

            {/* Recomendaciones (Colapsable en Mobile para no empujar el calendario hacia abajo) */}
            <div className="bg-[#FFF8E6] rounded-2xl sm:rounded-3xl border-2 border-[#EC9519]/40 overflow-hidden">
              {/* Botón trigger para mobile */}
              <button
                type="button"
                onClick={() => setShowMobileTips(!showMobileTips)}
                className="w-full p-4 flex items-center justify-between text-left font-heading font-extrabold text-xs sm:text-sm text-[#001837] cursor-pointer lg:cursor-default"
              >
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EC9519]" />
                  <span>Ten en cuenta para tu entrevista</span>
                </div>
                <span className="lg:hidden flex items-center gap-1 text-[11px] text-[#EC9519] font-bold">
                  {showMobileTips ? 'Ocultar' : 'Ver tips'}
                  <ChevronDown className={`w-4 h-4 transition-transform ${showMobileTips ? 'rotate-180' : ''}`} />
                </span>
              </button>

              {/* Lista de tips: siempre visible en desktop (lg:block), toggle en mobile */}
              <div className={`p-4 pt-0 sm:p-6 sm:pt-0 ${showMobileTips ? 'block' : 'hidden lg:block'}`}>
                <ul className="space-y-2 text-xs text-slate-700 font-body-regular border-t lg:border-t-0 border-[#EC9519]/20 pt-3 lg:pt-0">
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                    <span><strong>Agrégalo a tu calendario:</strong> Te llegará por email.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                    <span><strong>Puntualidad:</strong> 2 min antes en Google Meet.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                    <span><strong>Lugar tranquilo:</strong> Con buena conexión.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                    <span><strong>Relájate:</strong> Conversación guiada sin presiones.</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* COLUMNA DERECHA: El Iframe de Appointlet Embebido Limpio                  */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl sm:rounded-3xl border-2 border-[#001837] shadow-[4px_4px_0px_#001837] sm:shadow-[5px_5px_0px_#001837] overflow-hidden p-2 sm:p-4 min-h-[640px] sm:min-h-[700px] flex flex-col relative">
              
              {!iframeLoaded && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 space-y-3 p-4 text-center">
                  <div className="w-8 h-8 border-3 border-[#834296] border-t-transparent rounded-full animate-spin" />
                  <p className="text-xs sm:text-sm font-medium text-slate-600 font-heading">
                    Cargando calendario oficial de Appointlet...
                  </p>
                </div>
              )}

              <iframe
                src={appointletUrl}
                title="Agendamiento Oficial Appointlet YYCL"
                width="100%"
                height="680px"
                className="w-full border-0 rounded-xl sm:rounded-2xl"
                onLoad={() => setIframeLoaded(true)}
                allow="camera; microphone; autoplay; encrypted-media"
              />

              {/* Fallback & enlace directo */}
              <div className="text-center pt-3 border-t border-slate-100 mt-2">
                <p className="text-[11px] text-slate-500">
                  ¿Prefieres ver el calendario en pantalla completa?{" "}
                  <a
                    href={appointletUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[#0284C7] font-semibold hover:underline"
                  >
                    Abrir Appointlet directamente <ExternalLink className="w-3 h-3" />
                  </a>
                </p>
              </div>

            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
