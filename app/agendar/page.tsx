"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { 
  ChevronDown, 
  ExternalLink,
  ShieldCheck,
  Clock,
  Video
} from "lucide-react";

export default function AgendarPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showTips, setShowTips] = useState(false);
  const [appointletFinalUrl, setAppointletFinalUrl] = useState(
    "https://appt.link/entrevista-diagnostica-yycl-test-web"
  );

  // Inyección inteligente del indicativo de WhatsApp según zona horaria / país
  useEffect(() => {
    try {
      const baseUrl = "https://appt.link/entrevista-diagnostica-yycl-test-web";
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
      
      let defaultPrefix = "+57"; // Colombia por defecto
      let defaultCountry = "Colombia";

      if (timeZone.includes("Argentina") || timeZone.includes("Buenos_Aires")) {
        defaultPrefix = "+54";
        defaultCountry = "Argentina";
      } else if (timeZone.includes("Mexico") || timeZone.includes("Monterrey") || timeZone.includes("Cancun")) {
        defaultPrefix = "+52";
        defaultCountry = "México";
      } else if (timeZone.includes("Santiago") || timeZone.includes("Chile")) {
        defaultPrefix = "+56";
        defaultCountry = "Chile";
      } else if (timeZone.includes("Lima") || timeZone.includes("Peru")) {
        defaultPrefix = "+51";
        defaultCountry = "Perú";
      } else if (timeZone.includes("Madrid") || timeZone.includes("Europe")) {
        defaultPrefix = "+34";
        defaultCountry = "España";
      } else if (timeZone.includes("Bogota")) {
        defaultPrefix = "+57";
        defaultCountry = "Colombia";
      } else if (timeZone.includes("New_York") || timeZone.includes("Chicago") || timeZone.includes("Los_Angeles") || timeZone.includes("America/")) {
        defaultPrefix = "+1";
        defaultCountry = "Estados Unidos";
      }

      // Pre-llenado del campo WhatsApp (API: qbz16QsC2o) y País (API: en_que_pais_vives)
      const encodedPrefix = encodeURIComponent(defaultPrefix + " ");
      const encodedCountry = encodeURIComponent(defaultCountry);
      setAppointletFinalUrl(
        `${baseUrl}?field__qbz16QsC2o=${encodedPrefix}&field__en_que_pais_vives=${encodedCountry}`
      );
    } catch {
      // Fallback seguro a la URL estándar
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />

      <main className="flex-1 py-6 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-5">
        
        {/* Header Ultra Limpio & Directo */}
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
        {/* CONTENEDOR DEL CALENDARIO (Con indicativo de WhatsApp inyectado por API)   */}
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
            key={appointletFinalUrl}
            src={appointletFinalUrl}
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
                href={appointletFinalUrl}
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
