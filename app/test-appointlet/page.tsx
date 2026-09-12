"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { 
  Clock, 
  Video, 
  ShieldCheck, 
  ChevronDown, 
  ExternalLink,
  Sparkles,
  CheckCircle2
} from "lucide-react";

export default function AppointletEmbedDirectPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showTips, setShowTips] = useState(false);

  // La URL oficial de la página de equipo con todas las reuniones de prueba:
  const teamPageUrl = "https://appt.link/entrevista-diagnostica-yycl-test-web";

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />

      <main className="flex-1 py-6 sm:py-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-6">
        
        {/* Header Superior */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
            <span className="w-2 h-2 rounded-full bg-[#834296]" />
            <span>Entrevista 1 a 1 sin costo</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
            Agenda tu entrevista diagnóstica
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-body-regular">
            30 minutos online con nuestro equipo pedagógico por Google Meet. Diagnóstico y mapa de ruta sin compromiso.
          </p>
        </div>

        {/* Badges de Confianza Rápidos */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 font-medium">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-[#834296]" /> 30 minutos
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Video className="w-4 h-4 text-emerald-600" /> Google Meet
          </span>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-sky-600" /> 100% Gratuita y sin compromiso
          </span>
        </div>

        {/* Recomendaciones Formato Editorial YYCL (Colapsable / Limpio) */}
        <div className="bg-[#FFF8E6] rounded-2xl sm:rounded-3xl border-2 border-[#EC9519]/40 overflow-hidden shadow-xs">
          <button
            type="button"
            onClick={() => setShowTips(!showTips)}
            className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-heading font-extrabold text-xs sm:text-sm text-[#001837] cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EC9519]" />
              <span>Ten en cuenta para tu entrevista (Recomendaciones útiles)</span>
            </div>
            <span className="flex items-center gap-1 text-[11px] text-[#EC9519] font-bold">
              {showTips ? 'Ocultar' : 'Ver recomendaciones'}
              <ChevronDown className={`w-4 h-4 transition-transform ${showTips ? 'rotate-180' : ''}`} />
            </span>
          </button>

          {showTips && (
            <div className="p-5 pt-0 sm:p-6 sm:pt-0 animate-in fade-in-50 duration-200">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700 font-body-regular border-t border-[#EC9519]/20 pt-4">
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="font-heading text-[#001837]">Agrégalo a tu calendario:</strong> Te llegará la confirmación y acceso por correo.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="font-heading text-[#001837]">Puntualidad:</strong> Te pedimos estar 2 min antes en la videollamada.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="font-heading text-[#001837]">Lugar tranquilo:</strong> Con buena conexión y auriculares si es posible.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="font-heading text-[#001837]">Relájate y diviértete:</strong> Es una conversación sin presiones para conocerte.
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* EL APPOINTLET OFICIAL EMBEBIDO DIRECTAMENTE EN PANTALLA (SIN MODAL NI BOTÓN EXTRA) */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-3xl border-2 border-[#001837] shadow-[6px_6px_0px_#001837] overflow-hidden p-3 sm:p-5 min-h-[640px] sm:min-h-[720px] flex flex-col relative">
          
          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 space-y-3 p-4 text-center">
              <div className="w-8 h-8 border-3 border-[#834296] border-t-transparent rounded-full animate-spin" />
              <p className="text-xs sm:text-sm font-medium text-slate-600 font-heading">
                Cargando reuniones de Yes You Can Languages...
              </p>
            </div>
          )}

          <iframe
            src={teamPageUrl}
            title="Agendamiento Oficial Appointlet YYCL"
            width="100%"
            height="720px"
            className="w-full border-0 rounded-2xl"
            onLoad={() => setIframeLoaded(true)}
            allow="camera; microphone; autoplay; encrypted-media"
          />

          {/* Enlace de contingencia */}
          <div className="text-center pt-3 border-t border-slate-100 mt-2">
            <p className="text-[11px] text-slate-500">
              ¿Tienes algún inconveniente visualizando el calendario?{" "}
              <a
                href={teamPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#0284C7] font-semibold hover:underline"
              >
                Abrir en pestaña nueva <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
