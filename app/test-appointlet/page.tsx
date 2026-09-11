"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { ExternalLink, CheckCircle2, ShieldCheck, Clock } from "lucide-react";

export default function TestAppointletPage() {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const appointletUrl = "https://appt.link/prueba-de-diagnostico/prueba2-AMvh1YA9";

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6">
          
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
              <span className="w-2 h-2 rounded-full bg-[#834296]" />
              <span>Prueba de Integración Appointlet</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
              Agenda tu entrevista diagnóstica
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-body-regular max-w-md mx-auto leading-relaxed">
              Prueba en tiempo real del calendario oficial de Appointlet de Yes You Can Languages.
            </p>
          </div>

          {/* Badges de Confianza */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-600" /> 20-30 minutos
            </span>
            <span className="inline-flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-sky-600" /> Sin costo ni compromiso
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#834296]" /> Redirección automática al terminar
            </span>
          </div>

          {/* Contenedor del Iframe Embebido */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden p-2 sm:p-4 min-h-[720px] flex flex-col relative">
            {!iframeLoaded && (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10 space-y-3">
                <div className="w-8 h-8 border-3 border-[#001837] border-t-transparent rounded-full animate-spin" />
                <p className="text-sm font-medium text-slate-600 font-heading">
                  Cargando calendario de disponibilidad de YYCL...
                </p>
              </div>
            )}

            <iframe
              src={appointletUrl}
              title="Agendamiento de Entrevista YYCL"
              width="100%"
              height="750px"
              className="w-full border-0 rounded-xl"
              onLoad={() => setIframeLoaded(true)}
              allow="camera; microphone; autoplay; encrypted-media"
            />
          </div>

          {/* Fallback */}
          <div className="text-center pt-2">
            <p className="text-xs text-slate-500">
              ¿Tienes algún inconveniente visualizando el calendario?{" "}
              <a
                href={appointletUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-[#0284C7] font-semibold hover:underline"
              >
                Abrir en ventana completa <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
