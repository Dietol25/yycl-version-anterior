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
  Maximize2,
  Users,
  Zap,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

export default function TestAppointletComparisonPage() {
  // Estrategia activa: 'team' (Página de Equipo Auto-gestionable) vs 'direct' (Reunión Maestra Fija)
  const [activeStrategy, setActiveStrategy] = useState<'team' | 'direct'>('team');
  
  // Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState<string | null>(null);
  const [modalTitle, setModalTitle] = useState<string>('Calendario Oficial YYCL · Appointlet');
  const [showTips, setShowTips] = useState(false);

  // URLs reales de prueba en Appointlet
  const teamPageUrl = "https://appt.link/entrevista-diagnostica-yycl-test-web";
  const nathiMasterUrl = "https://appt.link/entrevista-diagnostica-yycl-test-web/prueba2";
  const nestorUrl = "https://appt.link/prueba-de-diagnostico/business";

  const openAppointletModal = (url: string, title?: string) => {
    setModalUrl(url);
    if (title) setModalTitle(title);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setModalUrl(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />

      {/* Banner de Control Comparativo */}
      <div className="bg-[#001837] text-white py-3 px-4 sticky top-0 z-40 border-b-2 border-[#FFD203] shadow-md">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-heading font-bold">
            <Sparkles className="w-4 h-4 text-[#FFD203]" />
            <span>MODO COMPARATIVO DE INTEGRACIÓN:</span>
          </div>

          {/* Switcher de las dos estrategias */}
          <div className="inline-flex rounded-2xl bg-white/10 p-1 border border-white/20">
            <button
              type="button"
              onClick={() => setActiveStrategy('team')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeStrategy === 'team'
                  ? 'bg-[#FFD203] text-[#001837] shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>Estrategia A: Página de Equipo (100% Auto-gestionable)</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveStrategy('direct')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-heading font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeStrategy === 'direct'
                  ? 'bg-[#834296] text-white shadow-sm'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Zap className="w-3.5 h-3.5" />
              <span>Estrategia B: Reunión Maestra Fija (Directo a Horas)</span>
            </button>
          </div>
        </div>
      </div>

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-8">
        
        {/* Explicación de la estrategia seleccionada */}
        <div className="p-4 sm:p-5 rounded-2xl border-2 transition-all bg-white shadow-sm">
          {activeStrategy === 'team' ? (
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-300 font-bold">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-extrabold text-sm sm:text-base text-[#001837]">
                  Estrategia A: Modal con Página de Equipo Auto-Gestionable (Cero Mantenimiento)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-body-regular">
                  Al hacer clic en agendar, el modal abre la página del equipo. <strong>Si Nathi o el equipo activan, desactivan o crean nuevas reuniones en Appointlet</strong>, la web se actualiza al instante sin que nadie tenga que editar código web. <strong>Nunca dará pantalla de error</strong>.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#834296] flex items-center justify-center shrink-0 border border-purple-300 font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="font-heading font-extrabold text-sm sm:text-base text-[#001837]">
                  Estrategia B: Reunión Maestra Fija (Directo a Días y Horas)
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed font-body-regular">
                  El botón abre directo el calendario de Nathi en el modal, saltándose la selección de reunión. <strong>Condición de uso:</strong> Esta reunión debe tener un slug permanente (como <code className="bg-slate-100 px-1 py-0.5 rounded text-[11px]">/prueba2</code> o <code className="bg-slate-100 px-1 py-0.5 rounded text-[11px]">/diagnostico</code>) y el equipo <strong>nunca debe desactivarla</strong>; si no hay cupos, solo bloquean sus horarios en Google Calendar.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Header de la Página */}
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
            <span className="w-2 h-2 rounded-full bg-[#834296]" />
            <span>Entrevista 1 a 1 sin costo</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
            Agenda tu entrevista diagnóstica
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-body-regular">
            30 minutos en vivo con nuestro equipo pedagógico por Google Meet para evaluar tu nivel sin compromiso.
          </p>
        </div>

        {/* Recomendaciones Formato Editorial YYCL (Colapsable) */}
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
                    <strong className="font-heading text-[#001837]">Agrégalo a tu calendario:</strong> Te llegará la confirmación por correo.
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
                    <strong className="font-heading text-[#001837]">Lugar tranquilo:</strong> Con buena conexión y micrófono.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold mt-0.5">✓</span>
                  <div>
                    <strong className="font-heading text-[#001837]">Relájate y diviértete:</strong> Es una conversación guiada, cero exámenes.
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* ========================================================================= */}
        {/* VISTA SEGÚN LA ESTRATEGIA ACTIVA                                          */}
        {/* ========================================================================= */}

        {/* ------------------------------------------------------------- */}
        {/* ESTRATEGIA A: BOTÓN PRINCIPAL AL MODAL DE EQUIPO COMPLETO    */}
        {/* ------------------------------------------------------------- */}
        {activeStrategy === 'team' && (
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border-2 border-[#001837] shadow-[6px_6px_0px_#001837] p-6 sm:p-8 space-y-6 text-center">
              <div className="max-w-md mx-auto space-y-2">
                <span className="inline-block px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-heading font-extrabold uppercase tracking-wider">
                  Sincronización en Vivo
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#001837]">
                  Reserva tu sesión con el equipo
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-body-regular">
                  Elige la reunión activa disponible (Inglés, Francés, Tutoría o Consulta B2B).
                </p>
              </div>

              {/* Botón Principal que Abre el Modal con la Página de Equipo */}
              <div className="pt-2 max-w-sm mx-auto">
                <button
                  type="button"
                  onClick={() => openAppointletModal(teamPageUrl, 'Página de Equipo YYCL · Appointlet')}
                  className="w-full h-14 rounded-2xl bg-[#FFD203] text-[#001837] shadow-[4px_4px_0px_#EC9519] hover:bg-[#EC9519] active:translate-y-0.5 font-heading font-black text-sm sm:text-base transition-all cursor-pointer flex items-center justify-center gap-2.5"
                >
                  <Calendar className="w-5 h-5" />
                  <span>Abrir calendario de citas</span>
                </button>
                <p className="text-[11px] text-slate-500 pt-2 font-medium">
                  Se abre en una ventana modal limpia sobre la página
                </p>
              </div>

              {/* Micro resumen de qué incluye */}
              <div className="border-t border-slate-100 pt-5 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600">
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Clock className="w-4 h-4 text-[#834296]" /> 30 minutos
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <Video className="w-4 h-4 text-emerald-600" /> Vía Google Meet
                </span>
                <span className="inline-flex items-center gap-1.5 font-medium">
                  <ShieldCheck className="w-4 h-4 text-sky-600" /> Sin costo ni compromiso
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ------------------------------------------------------------- */}
        {/* ESTRATEGIA B: CARDS SEPARADAS (NATHI DIRECTA + NÉSTOR B2B)    */}
        {/* ------------------------------------------------------------- */}
        {activeStrategy === 'direct' && (
          <div className="space-y-4">
            <h2 className="text-sm font-heading font-extrabold uppercase tracking-wider text-[#001837]">
              Selecciona tu tipo de entrevista:
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              
              {/* CARD 1: NATHI (Directo al calendario de fechas y horas) */}
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
                        Entrevista Diagnóstica 1-a-1
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

                {/* Botón que abre directo el calendario de Nathi en el modal */}
                <button
                  type="button"
                  onClick={() => openAppointletModal(nathiMasterUrl, 'Entrevista con Natty Sánchez · Appointlet')}
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

                <button
                  type="button"
                  onClick={() => openAppointletModal(nestorUrl, 'Consulta Corporativa con Néstor · Appointlet')}
                  className="w-full h-12 rounded-2xl bg-white border-2 border-[#001837] text-[#001837] shadow-[3px_3px_0px_#001837] hover:bg-slate-50 font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Elegir fecha y hora con Néstor</span>
                </button>
              </div>

            </div>
          </div>
        )}

      </main>

      {/* ========================================================================= */}
      {/* MODAL POPUP AMPLIO (NO COMPRIME EL CALENDARIO)                            */}
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
                  {modalTitle}
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

            {/* Iframe 100% Ancho sin compresión */}
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
