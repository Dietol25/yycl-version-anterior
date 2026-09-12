"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { 
  ChevronDown, 
  ExternalLink,
  ShieldCheck,
  Clock,
  Video
} from "lucide-react";

export default function AppointletEmbedDirectPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showTips, setShowTips] = useState(false);

  // La URL oficial de la página de equipo con todas las reuniones de prueba:
  const teamPageUrl = "https://appt.link/entrevista-diagnostica-yycl-test-web";

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />

      <main className="flex-1 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-5">
        
        {/* Header Ultra Limpio & Directo (Sin textos redundantes ni repetición) */}
        <div className="text-center space-y-1.5 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-1.5 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
            <span className="w-2 h-2 rounded-full bg-[#834296]" />
            <span>Entrevista 1 a 1 sin costo</span>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
            Agenda tu entrevista diagnóstica
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-body-regular">
            30 min online por Google Meet con nuestro equipo pedagógico · Evaluación de nivel y plan a tu medida.
          </p>
        </div>

        {/* Acordeón Sutil de Recomendaciones (Cerrado por defecto para dar prioridad absoluta al calendario) */}
        <div className="bg-white/80 hover:bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-2xs">
          <button
            type="button"
            onClick={() => setShowTips(!showTips)}
            className="w-full px-4 py-3 flex items-center justify-between text-left font-heading font-bold text-xs text-slate-700 hover:text-[#001837] cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EC9519]" />
              <span>Ten en cuenta para tu entrevista (4 recomendaciones breves)</span>
            </div>
            <span className="flex items-center gap-1 text-[11px] text-[#834296] font-bold">
              {showTips ? 'Ocultar' : 'Ver tips'}
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showTips ? 'rotate-180' : ''}`} />
            </span>
          </button>

          {showTips && (
            <div className="p-4 pt-0 sm:p-5 sm:pt-0 animate-in fade-in-50 duration-200 border-t border-slate-100 mt-2">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-600 font-body-regular pt-3">
                <li className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="text-[#001837]">Agrégalo a tu calendario:</strong> Te llegará la confirmación al correo.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="text-[#001837]">Puntualidad:</strong> Te pedimos estar 2 min antes en la videollamada.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="text-[#001837]">Lugar tranquilo:</strong> Con buena conexión y auriculares si tienes.
                  </div>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="text-[#001837]">Cero exámenes:</strong> Es una conversación relajada para conocerte.
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* CONTENEDOR DEL CALENDARIO (Prioridad visual inmediata)                    */}
        {/* ========================================================================= */}
        <div className="bg-white rounded-3xl border-2 border-[#001837] shadow-[5px_5px_0px_#001837] overflow-hidden p-2 sm:p-4 min-h-[640px] sm:min-h-[720px] flex flex-col relative">
          
          {!iframeLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 space-y-3 p-4 text-center">
              <div className="w-8 h-8 border-3 border-[#834296] border-t-transparent rounded-full animate-spin" />
              <p className="text-xs sm:text-sm font-medium text-slate-600 font-heading">
                Cargando calendario de disponibilidad de YYCL...
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

          {/* Enlace de soporte discreto */}
          <div className="text-center pt-2.5 border-t border-slate-100 mt-1">
            <p className="text-[11px] text-slate-500">
              ¿Inconvenientes visualizando el calendario?{" "}
              <a
                href={teamPageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#0284C7] font-semibold hover:underline"
              >
                Abrir en ventana completa <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
