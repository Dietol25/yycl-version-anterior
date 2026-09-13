"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { 
  Mail, 
  MessageCircle, 
  Clock, 
  Send, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  HelpCircle,
  Building2,
  Calendar
} from "lucide-react";

export default function ContactoPage() {
  const [enviado, setEnviado] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    whatsapp: "",
    motivo: "clases",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de envío exitoso
    setEnviado(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />

      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-10">
        
        {/* Header Principal */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#834296]/10 text-[#834296] text-xs font-bold uppercase tracking-wider font-heading">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Estamos para ayudarte</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#001837] tracking-tight">
            Contáctanos
          </h1>
          <p className="text-sm sm:text-base text-[#001837]/75 font-body leading-relaxed">
            ¿Tienes dudas sobre los programas, horarios, formas de pago o capacitación para tu empresa? Elige el canal que prefieras y conversemos.
          </p>
        </div>

        {/* Tarjetas de Canales Rápidos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          
          {/* Canal 1: WhatsApp Oficial */}
          <div className="bg-white rounded-2xl border-2 border-[#001837] p-5 sm:p-6 shadow-[4px_4px_0px_#001837] flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-wider font-heading">
                  Respuesta Inmediata
                </span>
                <h2 className="text-lg font-bold font-heading text-[#001837]">
                  WhatsApp Oficial
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#001837]/70 leading-relaxed">
                Escríbenos directamente a nuestro canal oficial para resolver cualquier duda en minutos.
              </p>
            </div>

            <a
              href="https://wa.me/573105799650?text=Hola%20YYCL,%20tengo%20una%20consulta%20sobre%20sus%20cursos"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs sm:text-sm hover:bg-emerald-700 transition-all shadow-sm active:scale-95"
            >
              <span>Escribir por WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Canal 2: Correo Electrónico Oficial */}
          <div className="bg-white rounded-2xl border-2 border-[#001837] p-5 sm:p-6 shadow-[4px_4px_0px_#001837] flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-[#834296]/10 text-[#834296] border border-[#834296]/20 flex items-center justify-center">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#834296] uppercase tracking-wider font-heading">
                  Consultas y Alianzas
                </span>
                <h2 className="text-lg font-bold font-heading text-[#001837]">
                  Correo Oficial
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#001837]/70 leading-relaxed">
                Para propuestas institucionales, convenios o consultas detalladas:
              </p>
              <div className="p-2.5 rounded-lg bg-[#FDF8F3] border border-[#001837]/10 font-mono text-xs text-[#001837] font-semibold break-all">
                info@yesyoucanlanguages.com
              </div>
            </div>

            <a
              href="mailto:info@yesyoucanlanguages.com?subject=Consulta%20desde%20la%20web%20YYCL"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#001837]/20 text-[#001837] font-bold text-xs sm:text-sm hover:bg-slate-50 transition-all shadow-sm active:scale-95"
            >
              <span>Enviar un correo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Canal 3: Entrevista Diagnóstica (Atajo Inteligente) */}
          <div className="bg-gradient-to-br from-[#834296] to-[#5c246b] text-white rounded-2xl border-2 border-[#001837] p-5 sm:p-6 shadow-[4px_4px_0px_#001837] flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-transform">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white/20 text-[#FDC300] flex items-center justify-center border border-white/20">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#FDC300] uppercase tracking-wider font-heading">
                  100% Sin Costo
                </span>
                <h2 className="text-lg font-bold font-heading text-white">
                  ¿Quieres saber tu nivel?
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                No tienes que esperar respuesta. Agenda tu sesión diagnóstica 1 a 1 de 30 min y arma tu plan ahora.
              </p>
            </div>

            <Link
              href="/agendar"
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#FDC300] text-[#001837] font-bold text-xs sm:text-sm hover:brightness-105 transition-all shadow-sm active:scale-95"
            >
              <span>Agendar entrevista</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* Sección: Formulario de Mensaje Directo */}
        <div className="bg-white rounded-3xl border-2 border-[#001837] shadow-[5px_5px_0px_#001837] p-6 sm:p-10">
          <div className="max-w-2xl mx-auto space-y-6">
            
            <div className="text-center space-y-1.5">
              <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-[#001837]">
                Envíanos un mensaje directo
              </h2>
              <p className="text-xs sm:text-sm text-[#001837]/70">
                Te responderemos al correo o a tu WhatsApp en menos de 24 horas hábiles.
              </p>
            </div>

            {enviado ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 sm:p-8 text-center space-y-3 animate-in fade-in zoom-in-95">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold font-heading text-emerald-900">
                  ¡Mensaje enviado con éxito!
                </h3>
                <p className="text-xs sm:text-sm text-emerald-800/80 max-w-md mx-auto">
                  Gracias por escribirnos, <strong>{formData.nombre}</strong>. Nuestro equipo pedagógico revisará tu consulta y te responderá a <strong>{formData.email}</strong> a la brevedad.
                </p>
                <button
                  onClick={() => {
                    setEnviado(false);
                    setFormData({ nombre: "", email: "", whatsapp: "", motivo: "clases", mensaje: "" });
                  }}
                  className="mt-2 text-xs text-[#834296] font-bold underline hover:opacity-80"
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#001837] uppercase tracking-wider font-heading">
                      Tu Nombre *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Camila Morales"
                      value={formData.nombre}
                      onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                      className="w-full h-11 px-3.5 bg-[#FDF8F3] border border-[#001837]/15 rounded-xl text-sm focus:outline-none focus:border-[#834296] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#001837] uppercase tracking-wider font-heading">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="camila@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full h-11 px-3.5 bg-[#FDF8F3] border border-[#001837]/15 rounded-xl text-sm focus:outline-none focus:border-[#834296] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#001837] uppercase tracking-wider font-heading">
                      WhatsApp (con indicativo)
                    </label>
                    <input
                      type="tel"
                      placeholder="Ej. +57 300 123 4567"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="w-full h-11 px-3.5 bg-[#FDF8F3] border border-[#001837]/15 rounded-xl text-sm focus:outline-none focus:border-[#834296] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-[#001837] uppercase tracking-wider font-heading">
                      Motivo de consulta *
                    </label>
                    <select
                      value={formData.motivo}
                      onChange={(e) => setFormData({ ...formData, motivo: e.target.value })}
                      className="w-full h-11 px-3.5 bg-[#FDF8F3] border border-[#001837]/15 rounded-xl text-sm focus:outline-none focus:border-[#834296] focus:bg-white transition-all"
                    >
                      <option value="clases">Información de clases particulares / grupales</option>
                      <option value="idiomas">Otros idiomas (Francés, Portugués, etc.)</option>
                      <option value="kids">Programa Kids & Teens</option>
                      <option value="empresas">Capacitación para empresas / Corporativo</option>
                      <option value="pagos">Métodos de pago y facturación</option>
                      <option value="otro">Otra consulta</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-[#001837] uppercase tracking-wider font-heading">
                    ¿En qué podemos ayudarte? *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Cuéntanos sobre tus metas, dudas con horarios o lo que necesites saber..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    className="w-full p-3.5 bg-[#FDF8F3] border border-[#001837]/15 rounded-xl text-sm focus:outline-none focus:border-[#834296] focus:bg-white transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full h-12 bg-[#834296] text-white font-heading font-extrabold text-sm rounded-xl border border-black/10 shadow-[3px_3px_0px_#001837] hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Enviar mensaje</span>
                </button>

              </form>
            )}

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
