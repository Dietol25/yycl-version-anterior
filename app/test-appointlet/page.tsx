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
  Calendar,
  X,
  Maximize2
} from "lucide-react";

export default function TestAppointletPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState<string | null>(null);
  const [showTips, setShowTips] = useState(false);

  // La nueva página de equipo aislada que creaste:
  const teamPageUrl = "https://appt.link/entrevista-diagnostica-yycl-test-web";
  
  // Enlace directo a Nathi dentro de esa página:
  const nathiUrl = "https://appt.link/entrevista-diagnostica-yycl-test-web/test-web";
  
  // Enlace directo a Néstor (B2B):
  const nestorUrl = "https://appt.link/prueba-de-diagnostico/business";

  const openAppointletModal = (url: string) => {
    setModalUrl(url);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalUrl(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />

      {/* Banner Superior */}
      <div className="bg-[#834296] text-white text-xs py-2 px-4 text-center font-heading font-bold flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#FFD203]" />
        <span>NUEVA PÁGINA DE EQUIPO APPOINTLET: Elige reunión y ábrela en Modal Popup oficial</span>
      </div>

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-8">
        
        {/* Header Superior Limpio */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
            <span className="w-2 h-2 rounded-full bg-[#834296]" />
            <span>Elige tu tipo de sesión</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
            Agenda tu entrevista diagnóstica
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-body-regular">
            Sesión online 1 a 1 por Google Meet con nuestro equipo pedagógico. Sin costo ni compromiso comercial.
          </p>
        </div>

        {/* Recomendaciones Formato Editorial YYCL (Colapsable/Elegante) */}
        <div className="bg-[#FFF8E6] rounded-2xl sm:rounded-3xl border-2 border-[#EC9519]/40 overflow-hidden shadow-xs">
          <button
            type="button"
            onClick={() => setShowTips(!showTips)}
            className="w-full p-4 sm:p-5 flex items-center justify-between text-left font-heading font-extrabold text-xs sm:text-sm text-[#001837] cursor-pointer"
          >
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#EC9519]" />
              <span>Ten en cuenta para tu entrevista (Recomendaciones)</span>
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
                    <strong className="font-heading text-[#001837]">Agrégalo a tu calendario:</strong> Te llegará la invitación por correo.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="font-heading text-[#001837]">Puntualidad:</strong> Te pedimos estar 2 min antes en Google Meet.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="font-heading text-[#001837]">Lugar tranquilo:</strong> Con buena conexión y micrófono funcional.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="font-heading text-[#001837]">Relájate y diviértete:</strong> Es una conversación relajada para evaluar tu nivel, cero exámenes.
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* OPCIONES DE SESIÓN: NATHI (INDIVIDUAL/DÚO) + NÉSTOR (B2B EMPRESAS)         */}
        {/* ========================================================================= */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-heading font-extrabold uppercase tracking-wider text-[#001837]">
              Selecciona quién te evaluará:
            </h2>
            <button
              type="button"
              onClick={() => openAppointletModal(teamPageUrl)}
              className="text-xs font-heading font-bold text-[#834296] hover:underline inline-flex items-center gap-1"
            >
              <span>Ver todas en Appointlet</span>
              <ExternalLink className="w-3 h-3" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            
            {/* CARD 1: NATHI (Estudiantes Adultos / Dúo / Individual) */}
            <div className="bg-white rounded-3xl border-2 border-[#001837] shadow-[4px_4px_0px_#001837] p-6 flex flex-col justify-between space-y-5 hover:-translate-y-1 transition-all">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#001837] shadow-[2px_2px_0px_#FFD203] shrink-0 bg-[#FFE2C0]/40">
                    <img 
                      src="/assets/profesores/natty-sanchez.png" 
                      alt="Natty Sánchez" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#834296]/10 text-[#834296] text-[10px] font-heading font-extrabold uppercase tracking-wider">
                      <Award className="w-3 h-3" />
                      <span>Recomendado Estudiantes</span>
                    </div>
                    <h3 className="text-xl font-heading font-extrabold text-[#001837] leading-tight">
                      Agendar con Nathi
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Entrevista Diagnóstica (Inglés & Idiomas)
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body-regular">
                  Evaluación rápida de fluidez oral 1-a-1. Identificamos tu nivel y diseñamos tu plan de estudio personalizado.
                </p>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pt-1">
                  <span className="inline-flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#834296]" /> 30 minutos
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium">
                    <Video className="w-3.5 h-3.5 text-emerald-600" /> Google Meet
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Gratis
                  </span>
                </div>
              </div>

              {/* Botón que lanza el Modal de Appointlet */}
              <button
                type="button"
                onClick={() => openAppointletModal(nathiUrl)}
                className="w-full h-12 rounded-2xl bg-[#FFD203] text-[#001837] shadow-[3px_3px_0px_#EC9519] hover:bg-[#EC9519] font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Elegir fecha y hora con Nathi</span>
              </button>
            </div>

            {/* CARD 2: NÉSTOR (B2B Empresas & Equipos) */}
            <div className="bg-white rounded-3xl border-2 border-[#001837] shadow-[4px_4px_0px_#001837] p-6 flex flex-col justify-between space-y-5 hover:-translate-y-1 transition-all">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#001837] shadow-[2px_2px_0px_#001837] shrink-0 bg-slate-100">
                    <img 
                      src="/assets/profesores/nestor-montano.png" 
                      alt="Néstor Montaño" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-1 flex-1">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#001837]/10 text-[#001837] text-[10px] font-heading font-extrabold uppercase tracking-wider">
                      <span>Corporativo / B2B</span>
                    </div>
                    <h3 className="text-xl font-heading font-extrabold text-[#001837] leading-tight">
                      Agendar con Néstor
                    </h3>
                    <p className="text-xs text-slate-500 font-medium">
                      Consulta B2B & Equipos de Trabajo
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-body-regular">
                  Reunión estratégica para capacitar a tu equipo corporativo, con analíticas de avance y propuesta a medida.
                </p>

                <div className="flex flex-wrap items-center gap-3 text-xs text-slate-600 pt-1">
                  <span className="inline-flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#834296]" /> 30 min / 1 hora
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium">
                    <Video className="w-3.5 h-3.5 text-emerald-600" /> Google Meet
                  </span>
                  <span className="inline-flex items-center gap-1 font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    Gratis
                  </span>
                </div>
              </div>

              {/* Botón que lanza el Modal de Appointlet para Néstor */}
              <button
                type="button"
                onClick={() => openAppointletModal(nestorUrl)}
                className="w-full h-12 rounded-2xl bg-white border-2 border-[#001837] text-[#001837] shadow-[3px_3px_0px_#001837] hover:bg-slate-50 font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Elegir fecha y hora con Néstor</span>
              </button>
            </div>

          </div>
        </div>

      </main>

      {/* ========================================================================= */}
      {/* MODAL OFICIAL DE APPOINTLET A PANTALLA COMPLETA (SIN COMPRESIÓN)           */}
      {/* ========================================================================= */}
      {isModalOpen && modalUrl && (
        <div 
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-xs flex items-center justify-center p-2 sm:p-6 animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div 
            className="bg-white rounded-3xl border-2 border-[#001837] shadow-[8px_8px_0px_#001837] w-full max-w-4xl h-[90vh] max-h-[820px] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Barra Superior del Modal */}
            <div className="bg-[#FDF8F3] border-b-2 border-[#001837]/15 px-4 sm:px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#834296]" />
                <span className="font-heading font-extrabold text-xs sm:text-sm text-[#001837]">
                  Calendario Oficial YYCL · Appointlet
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={modalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-full hover:bg-slate-200 text-slate-600 transition-colors hidden sm:inline-flex"
                  title="Abrir en pestaña nueva"
                >
                  <Maximize2 className="w-4 h-4" />
                </a>
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-slate-200 hover:bg-[#001837] hover:text-white flex items-center justify-center font-bold text-xs transition-colors cursor-pointer"
                  aria-label="Cerrar modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Iframe de Appointlet con 100% de Ancho (No se comprime) */}
            <div className="flex-1 w-full h-full bg-white relative">
              <iframe
                src={modalUrl}
                title="Calendario Oficial Appointlet"
                width="100%"
                height="100%"
                className="w-full h-full border-0"
                allow="camera; microphone; autoplay; encrypted-media"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
