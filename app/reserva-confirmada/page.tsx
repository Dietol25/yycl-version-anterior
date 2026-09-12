"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { 
  CheckCircle2, 
  Calendar, 
  Clock, 
  Video, 
  Mail, 
  Headphones, 
  ArrowRight,
  Sparkles,
  MessageCircle
} from "lucide-react";

function ReservaConfirmadaContent() {
  const searchParams = useSearchParams();

  // Appointlet pasa parámetros como: first_name, last_name, email, start_time, end_time, etc.
  const firstName = searchParams.get("first_name") || searchParams.get("name") || "";
  const email = searchParams.get("email") || "";
  const startTimeRaw = searchParams.get("start_time") || searchParams.get("start") || "";

  // Formateo de fecha y hora si viene el parámetro ISO
  let formattedDate = "";
  let formattedTime = "";

  if (startTimeRaw) {
    try {
      const dateObj = new Date(startTimeRaw);
      if (!isNaN(dateObj.getTime())) {
        formattedDate = dateObj.toLocaleDateString("es-ES", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        });
        // Capitalizar primera letra del día
        formattedDate = formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);

        formattedTime = dateObj.toLocaleTimeString("es-ES", {
          hour: "2-digit",
          minute: "2-digit",
        });
      }
    } catch {
      // Si el parseo falla, dejamos valores amigables por defecto
    }
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />

      <main className="flex-1 py-4 sm:py-8 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto w-full flex items-center justify-center">
        {/* Card Principal de Confirmación Compacta */}
        <div className="bg-white rounded-2xl sm:rounded-3xl border border-[#001837]/10 p-5 sm:p-7 shadow-lg space-y-4 text-center relative overflow-hidden w-full">
          
          {/* Acento decorativo superior */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#834296] via-[#FDC300] to-[#834296]" />

          {/* Badge + Ícono Compactos */}
          <div className="flex flex-col items-center gap-2 pt-1">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-50 border-2 border-emerald-100 text-emerald-500 shadow-sm">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#834296]/10 text-[#834296] text-[11px] font-bold tracking-wide uppercase font-heading">
              <Sparkles className="w-3 h-3" />
              <span>Entrevista Confirmada</span>
            </div>
          </div>

          {/* Encabezado */}
          <div className="space-y-1">
            <h1 className="text-xl sm:text-2xl font-extrabold font-heading text-[#001837]">
              {firstName ? `¡Todo listo, ${firstName}!` : "¡Tu entrevista está confirmada!"}
            </h1>
            <p className="text-xs sm:text-sm text-[#001837]/70 max-w-md mx-auto leading-normal">
              Te enviamos los accesos de Google Meet a tu correo
              {email ? <strong className="text-[#001837]"> ({email})</strong> : ""}.
            </p>
          </div>

          {/* Tarjeta de Resumen Adaptable (1 col en móvil con iconos, 3 cols en desktop) */}
          <div className="bg-[#FDF8F3] border border-[#001837]/10 rounded-2xl p-4 sm:p-5 text-left grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="flex items-center sm:items-start gap-3 bg-white/70 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border border-[#001837]/5 sm:border-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white flex items-center justify-center text-[#834296] border border-[#001837]/10 shrink-0 shadow-sm">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-[#001837]/60 font-semibold uppercase">Duración</p>
                <p className="text-xs sm:text-sm font-bold text-[#001837]">30 minutos</p>
              </div>
            </div>

            <div className="flex items-center sm:items-start gap-3 bg-white/70 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border border-[#001837]/5 sm:border-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white flex items-center justify-center text-[#834296] border border-[#001837]/10 shrink-0 shadow-sm">
                <Video className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-[#001837]/60 font-semibold uppercase">Modalidad</p>
                <p className="text-xs sm:text-sm font-bold text-[#001837]">Google Meet (Online)</p>
              </div>
            </div>

            <div className="flex items-center sm:items-start gap-3 bg-white/70 sm:bg-transparent p-2.5 sm:p-0 rounded-xl sm:rounded-none border border-[#001837]/5 sm:border-0">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-white flex items-center justify-center text-[#834296] border border-[#001837]/10 shrink-0 shadow-sm">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-[10px] sm:text-xs text-[#001837]/60 font-semibold uppercase">Fecha y Hora</p>
                <p className="text-xs sm:text-sm font-bold text-[#001837]">
                  {formattedDate ? `${formattedDate}, ${formattedTime}` : "Revisa tu correo"}
                </p>
              </div>
            </div>
          </div>

          {/* Tips de preparación ultra compactos */}
          <div className="text-left bg-[#001837]/[0.02] border border-[#001837]/5 rounded-xl p-3 space-y-1.5 text-xs text-[#001837]/75">
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#834296] shrink-0" />
              <span><strong>Correo:</strong> Si no lo ves en tu bandeja, revisa <em>Spam</em> o <em>Promociones</em>.</span>
            </div>
            <div className="flex items-center gap-2">
              <Headphones className="w-3.5 h-3.5 text-[#834296] shrink-0" />
              <span><strong>Conexión:</strong> Conéctate puntual con auriculares y cámara desde un lugar tranquilo.</span>
            </div>
          </div>

          {/* Acciones Finales Compactas */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 pt-2">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-[#FDC300] text-[#001837] font-bold text-xs sm:text-sm hover:brightness-105 transition-all shadow-sm active:scale-95"
            >
              <span>Volver a la web</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href="https://wa.me/573105799650?text=Hola%20YYCL,%20acabo%20de%20agendar%20mi%20entrevista%20diagn%C3%B3stica"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white border border-[#001837]/15 text-[#001837] font-semibold text-xs sm:text-sm hover:bg-[#FDF8F3] transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
              <span>¿Dudas? WhatsApp YYCL</span>
            </a>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

export default function ReservaConfirmadaPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-[#FDF8F3]">
        <div className="w-8 h-8 border-4 border-[#834296] border-t-transparent rounded-full animate-spin" />
      </div>
    }>
      <ReservaConfirmadaContent />
    </Suspense>
  );
}
