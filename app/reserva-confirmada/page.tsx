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

      <main className="flex-1 py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto w-full">
        {/* Card Principal de Confirmación */}
        <div className="bg-white rounded-3xl border border-[#001837]/10 p-6 sm:p-10 shadow-xl space-y-8 text-center relative overflow-hidden">
          
          {/* Acento decorativo superior */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#834296] via-[#FDC300] to-[#834296]" />

          {/* Ícono de Éxito */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-50 border-4 border-emerald-100 text-emerald-500 shadow-inner">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          {/* Encabezado */}
          <div className="space-y-2">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#834296]/10 text-[#834296] text-xs font-bold tracking-wide uppercase font-heading">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Entrevista Confirmada</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#001837]">
              {firstName ? `¡Todo listo, ${firstName}!` : "¡Tu entrevista está confirmada!"}
            </h1>
            <p className="text-sm sm:text-base text-[#001837]/70 max-w-lg mx-auto leading-relaxed">
              Te enviamos todos los detalles y el acceso a Google Meet a tu correo
              {email ? <strong className="text-[#001837]"> ({email})</strong> : ""}.
            </p>
          </div>

          {/* Tarjeta de Resumen de la Cita */}
          <div className="bg-[#FDF8F3] border border-[#001837]/10 rounded-2xl p-5 sm:p-6 text-left grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#834296] border border-[#001837]/10 shrink-0 shadow-sm">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#001837]/60 font-semibold uppercase">Duración</p>
                <p className="text-sm font-bold text-[#001837]">30 minutos</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#834296] border border-[#001837]/10 shrink-0 shadow-sm">
                <Video className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#001837]/60 font-semibold uppercase">Modalidad</p>
                <p className="text-sm font-bold text-[#001837]">Google Meet (Online)</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-9 h-9 rounded-xl bg-white flex items-center justify-center text-[#834296] border border-[#001837]/10 shrink-0 shadow-sm">
                <Calendar className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs text-[#001837]/60 font-semibold uppercase">Fecha y Hora</p>
                <p className="text-sm font-bold text-[#001837]">
                  {formattedDate ? `${formattedDate}, ${formattedTime}` : "Revisa tu correo"}
                </p>
              </div>
            </div>
          </div>

          {/* Tips de preparación */}
          <div className="text-left space-y-3 pt-2 border-t border-[#001837]/10">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#001837]/50 font-heading">
              Cómo prepararte para tu entrevista
            </h3>
            
            <div className="space-y-2.5">
              <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-[#001837]/5 text-xs sm:text-sm text-[#001837]/80">
                <Mail className="w-4 h-4 text-[#834296] shrink-0 mt-0.5" />
                <span>
                  <strong>Revisa tu bandeja de entrada:</strong> Si no ves el correo en 2 minutos, revisa tu carpeta de <em>Spam</em> o <em>Promociones</em>.
                </span>
              </div>

              <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-[#001837]/5 text-xs sm:text-sm text-[#001837]/80">
                <Headphones className="w-4 h-4 text-[#834296] shrink-0 mt-0.5" />
                <span>
                  <strong>Conéctate con auriculares y cámara:</strong> Estaremos en un espacio conversacional 1 a 1 para evaluar tu nivel y armar tu plan.
                </span>
              </div>
            </div>
          </div>

          {/* Acciones Finales */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#FDC300] text-[#001837] font-bold text-sm hover:brightness-105 transition-all shadow-md active:scale-95"
            >
              <span>Volver a la web</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="https://wa.me/573105799650?text=Hola%20YYCL,%20acabo%20de%20agendar%20mi%20entrevista%20diagn%C3%B3stica"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-white border border-[#001837]/15 text-[#001837] font-bold text-sm hover:bg-[#FDF8F3] transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span>¿Dudas? Escríbenos por WhatsApp</span>
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
