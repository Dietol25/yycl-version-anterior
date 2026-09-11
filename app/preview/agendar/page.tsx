"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/navigation/Footer";
import { 
  Clock, 
  ArrowRight, 
  ArrowLeft, 
  Video, 
  CheckCircle2, 
  ShieldCheck, 
  ChevronLeft, 
  ChevronRight,
  Sparkles,
  Award
} from "lucide-react";

const COUNTRY_CODES = [
  { code: '+57', flag: '🇨🇴', abbr: 'CO', label: 'Colombia' },
  { code: '+1', flag: '🇺🇸', abbr: 'US', label: 'EE.UU.' },
  { code: '+52', flag: '🇲🇽', abbr: 'MX', label: 'México' },
  { code: '+54', flag: '🇦🇷', abbr: 'AR', label: 'Argentina' },
  { code: '+56', flag: '🇨🇱', abbr: 'CL', label: 'Chile' },
  { code: '+51', flag: '🇵🇪', abbr: 'PE', label: 'Perú' },
  { code: '+593', flag: '🇪🇨', abbr: 'EC', label: 'Ecuador' },
  { code: '+34', flag: '🇪🇸', abbr: 'ES', label: 'España' },
  { code: '+598', flag: '🇺🇾', abbr: 'UY', label: 'Uruguay' },
  { code: '+507', flag: '🇵🇦', label: 'Panamá', abbr: 'PA' },
  { code: '+506', flag: '🇨🇷', abbr: 'CR', label: 'Costa Rica' },
  { code: '+591', flag: '🇧🇴', abbr: 'BO', label: 'Bolivia' },
  { code: '+595', flag: '🇵🇾', abbr: 'PY', label: 'Paraguay' },
  { code: '+55', flag: '🇧🇷', abbr: 'BR', label: 'Brasil' },
];

const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM'
];

const EXTENDED_DATES = [
  { dayName: 'Hoy', dayNum: '11', fullDate: '2026-09-11' },
  { dayName: 'Sáb', dayNum: '12', fullDate: '2026-09-12' },
  { dayName: 'Lun', dayNum: '14', fullDate: '2026-09-14' },
  { dayName: 'Mar', dayNum: '15', fullDate: '2026-09-15' },
  { dayName: 'Mié', dayNum: '16', fullDate: '2026-09-16' },
  { dayName: 'Jue', dayNum: '17', fullDate: '2026-09-17' },
  { dayName: 'Vie', dayNum: '18', fullDate: '2026-09-18' },
  { dayName: 'Sáb', dayNum: '19', fullDate: '2026-09-19' },
  { dayName: 'Lun', dayNum: '21', fullDate: '2026-09-21' },
  { dayName: 'Mar', dayNum: '22', fullDate: '2026-09-22' },
];

export default function PreviewAgendarPage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState('2026-09-14');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  const daysSliderRef = useRef<HTMLDivElement>(null);

  // Form states matching Appointlet exactly
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneCode, setPhoneCode] = useState('+57');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [language, setLanguage] = useState('Inglés');
  const [targetAudience, setTargetAudience] = useState('Para mí (un adulto)');
  const [referral, setReferral] = useState('Instagram');

  // Validation
  const [errors, setErrors] = useState<Record<string, string>>({});

  const scrollDays = (direction: 'left' | 'right') => {
    if (daysSliderRef.current) {
      const scrollAmount = direction === 'left' ? -260 : 260;
      daysSliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const validateStep2 = () => {
    const errs: Record<string, string> = {};
    if (!firstName.trim()) errs.firstName = 'Por favor ingresa tu nombre';
    if (!lastName.trim()) errs.lastName = 'Por favor ingresa tu apellido';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = 'Ingresa un correo electrónico válido';
    }
    if (!phoneNumber.trim() || phoneNumber.length < 7) {
      errs.phoneNumber = 'Ingresa tu número de WhatsApp';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } else if (step === 2) {
      if (validateStep2()) {
        setStep(3);
        window.scrollTo({ top: 120, behavior: 'smooth' });
      }
    }
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />

      {/* Banner Preview */}
      <div className="bg-[#834296] text-white text-xs py-2 px-4 text-center font-heading font-bold flex items-center justify-center gap-2">
        <Sparkles className="w-3.5 h-3.5 text-[#FFD203]" />
        <span>VISTA PREVIA DE AGENDAMIENTO OPTIMIZADO: Entrada directa a fecha/hora + Presentación de Nathi</span>
      </div>

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto w-full">
        
        {/* Header Superior Limpio */}
        <div className="text-center space-y-2 mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
            <span className="w-2 h-2 rounded-full bg-[#834296]" />
            <span>Entrevista 1 a 1 sin costo</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
            Agenda tu entrevista diagnóstica
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-body-regular max-w-lg mx-auto">
            30 minutos en vivo con nuestro equipo pedagógico para evaluar tu nivel y diseñar tu ruta de fluidez sin ningún compromiso.
          </p>
        </div>

        {/* Layout Editorial de 2 Columnas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* ========================================================================= */}
          {/* COLUMNA IZQUIERDA: Tarjeta de Nathi + Recomendaciones Editoriales         */}
          {/* ========================================================================= */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Tarjeta de Nathi */}
            <div className="bg-white rounded-3xl border-2 border-[#001837] shadow-[4px_4px_0px_#001837] p-6 space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-[#001837] shadow-[2px_2px_0px_#FFD203] shrink-0 bg-[#FFE2C0]/40">
                  <img 
                    src="/assets/profesores/natty-sanchez.png" 
                    alt="Natty Sánchez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#834296]/10 text-[#834296] text-[10px] font-heading font-extrabold uppercase tracking-wider">
                    <Award className="w-3 h-3" />
                    <span>Tu evaluadora</span>
                  </div>
                  <h3 className="text-xl font-heading font-extrabold text-[#001837] leading-tight">
                    Natty Sánchez
                  </h3>
                  <p className="text-xs text-slate-500 font-medium">
                    Co-fundadora & Directora Pedagógica en YYCL
                  </p>
                </div>
              </div>

              <div className="border-t border-slate-100 pt-3 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2 font-medium">
                  <Clock className="w-4 h-4 text-[#834296]" />
                  <span><strong>Duración:</strong> 30 minutos</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <Video className="w-4 h-4 text-emerald-600" />
                  <span><strong>Plataforma:</strong> Google Meet (videollamada)</span>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                  <span><strong>Costo:</strong> 100% Gratuita y sin compromiso comercial</span>
                </div>
              </div>
            </div>

            {/* Recomendaciones Formato Editorial YYCL (Sin cajas amarillas toscas) */}
            <div className="bg-[#FFF8E6] rounded-3xl border-2 border-[#EC9519]/40 p-6 space-y-3.5">
              <div className="flex items-center gap-2 text-[#001837]">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EC9519]" />
                <h4 className="font-heading font-extrabold text-sm text-[#001837] tracking-tight">
                  Ten en cuenta para tu entrevista:
                </h4>
              </div>

              <ul className="space-y-2.5 text-xs text-slate-700 font-body-regular">
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs shrink-0 font-bold mt-0.5 shadow-2xs">✓</span>
                  <div>
                    <strong className="font-heading text-[#001837]">Agrégalo a tu calendario:</strong> Te llegará la invitación por email para que no lo olvides.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs shrink-0 font-bold mt-0.5 shadow-2xs">✓</span>
                  <div>
                    <strong className="font-heading text-[#001837]">Puntualidad:</strong> Te pedimos estar 2 min antes en Google Meet.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs shrink-0 font-bold mt-0.5 shadow-2xs">✓</span>
                  <div>
                    <strong className="font-heading text-[#001837]">Lugar tranquilo:</strong> Con buena conexión y auriculares si es posible.
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="w-5 h-5 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-xs shrink-0 font-bold mt-0.5 shadow-2xs">✓</span>
                  <div>
                    <strong className="font-heading text-[#001837]">Relájate y diviértete:</strong> Es una conversación relajada para conocerte, cero exámenes ni presiones.
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* COLUMNA DERECHA: El Agendamiento Directo (Día/Hora -> Datos -> Listo)     */}
          {/* ========================================================================= */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl border-2 border-[#001837] shadow-[5px_5px_0px_#001837] overflow-hidden">
              
              {/* Stepper Superior */}
              <div className="bg-slate-50 border-b-2 border-[#001837]/15 p-5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="w-7 h-7 rounded-full bg-[#FFD203] text-[#001837] font-heading font-black text-xs flex items-center justify-center border-2 border-[#001837] shadow-[1.5px_1.5px_0px_#EC9519] shrink-0">
                    {step}
                  </span>
                  <span className="font-heading font-extrabold text-xs sm:text-sm text-[#001837]">
                    {step === 1 && "Paso 1 de 2: Elige fecha y hora"}
                    {step === 2 && "Paso 2 de 2: Tus datos de contacto"}
                    {step === 3 && "¡Cita Confirmada con Éxito!"}
                  </span>
                </div>
                <span className="text-[11px] text-[#834296] font-heading font-extrabold">
                  {step === 1 ? "50%" : step === 2 ? "90%" : "100%"}
                </span>
              </div>

              {/* Contenido según el paso */}
              <div className="p-6 sm:p-8">
                
                {/* ------------------------------------------------------------- */}
                {/* PASO 1: SELECCIÓN DE DÍA Y HORA DIRECTO                       */}
                {/* ------------------------------------------------------------- */}
                {step === 1 && (
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
                        Disponibilidad en tiempo real
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[#001837] tracking-tight mt-0.5">
                        Selecciona el día y la hora
                      </h3>
                    </div>

                    {/* Días con Slider Horizontal */}
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#001837]">
                          1. Selecciona el día
                        </label>
                        <div className="flex items-center gap-1.5">
                          <span className="text-[11px] font-heading font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">
                            Sep 2026
                          </span>
                          <button
                            type="button"
                            onClick={() => scrollDays('left')}
                            className="w-7 h-7 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-[#001837] cursor-pointer"
                          >
                            <ChevronLeft className="w-3.5 h-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => scrollDays('right')}
                            className="w-7 h-7 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-[#001837] cursor-pointer"
                          >
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div
                        ref={daysSliderRef}
                        className="flex items-center gap-2.5 overflow-x-auto scroll-smooth pb-2 pt-1 no-scrollbar select-none"
                      >
                        {EXTENDED_DATES.map((d) => {
                          const isSel = selectedDate === d.fullDate;
                          return (
                            <button
                              key={d.fullDate}
                              type="button"
                              onClick={() => setSelectedDate(d.fullDate)}
                              className={`shrink-0 w-[78px] sm:w-[86px] py-3 px-2 rounded-2xl text-center transition-all cursor-pointer ${
                                isSel
                                  ? 'bg-[#FFD203] text-[#001837] font-black shadow-[3px_3px_0px_#EC9519] border-2 border-[#001837] scale-102'
                                  : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
                              }`}
                            >
                              <span className="text-[10px] font-heading font-bold block uppercase tracking-wider">{d.dayName}</span>
                              <span className="text-lg font-heading font-black block mt-0.5">{d.dayNum}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Horarios */}
                    <div className="space-y-2.5">
                      <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#001837] block">
                        2. Elige una hora disponible
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                        {TIME_SLOTS.map((time) => {
                          const isSel = selectedTime === time;
                          return (
                            <button
                              key={time}
                              type="button"
                              onClick={() => setSelectedTime(time)}
                              className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                                isSel
                                  ? 'bg-[#834296] text-white shadow-[3px_3px_0px_#001837] border-0 scale-102'
                                  : 'bg-white text-[#001837] border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-2xs'
                              }`}
                            >
                              <Clock className={`w-3.5 h-3.5 ${isSel ? 'text-[#FFD203]' : 'text-slate-400'}`} />
                              <span>{time}</span>
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Botón Continuar */}
                    <div className="pt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={handleNext}
                        className="h-11 px-6 rounded-2xl bg-[#FFD203] text-[#001837] shadow-[3px_3px_0px_#EC9519] hover:bg-[#EC9519] font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer inline-flex items-center gap-2"
                      >
                        <span>Continuar a tus datos</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}

                {/* ------------------------------------------------------------- */}
                {/* PASO 2: FORMULARIO DE ADMISIÓN (IDÉNTICO AL DE APPOINTLET)    */}
                {/* ------------------------------------------------------------- */}
                {step === 2 && (
                  <div className="space-y-5">
                    <div>
                      <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
                        Reserva para {selectedDate} a las {selectedTime}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[#001837] tracking-tight mt-0.5">
                        Ingrese su información
                      </h3>
                      <p className="text-xs text-slate-500 font-medium">
                        Te enviaremos el enlace de Google Meet y los detalles a tu correo y WhatsApp.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Primer Nombre */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-700 block">
                          Primer nombre *
                        </label>
                        <input
                          type="text"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                          placeholder="Ej. Camila"
                          className={`w-full h-11 px-3.5 bg-white text-slate-800 rounded-xl border text-xs sm:text-sm font-medium focus:outline-none ${
                            errors.firstName ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-[#001837]'
                          }`}
                        />
                        {errors.firstName && <span className="text-[11px] text-red-600 font-medium">{errors.firstName}</span>}
                      </div>

                      {/* Apellido */}
                      <div className="space-y-1">
                        <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-700 block">
                          Apellido *
                        </label>
                        <input
                          type="text"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                          placeholder="Ej. Gómez"
                          className={`w-full h-11 px-3.5 bg-white text-slate-800 rounded-xl border text-xs sm:text-sm font-medium focus:outline-none ${
                            errors.lastName ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-[#001837]'
                          }`}
                        />
                        {errors.lastName && <span className="text-[11px] text-red-600 font-medium">{errors.lastName}</span>}
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-700 block">
                        Email *
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="tu@email.com"
                        className={`w-full h-11 px-3.5 bg-white text-slate-800 rounded-xl border text-xs sm:text-sm font-medium focus:outline-none ${
                          errors.email ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-[#001837]'
                        }`}
                      />
                      {errors.email && <span className="text-[11px] text-red-600 font-medium">{errors.email}</span>}
                    </div>

                    {/* Idioma de interés */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-700 block">
                        Idioma de interés *
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        {['Inglés', 'Francés', 'Portugués', 'Español'].map((lang) => (
                          <button
                            key={lang}
                            type="button"
                            onClick={() => setLanguage(lang)}
                            className={`py-2 px-3 rounded-xl border text-center font-heading font-bold transition-all ${
                              language === lang
                                ? 'bg-[#834296] text-white border-[#834296] shadow-xs'
                                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            {lang}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Las clases son: */}
                    <div className="space-y-1.5">
                      <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-700 block">
                        Las clases son para: *
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                        {['Para mí (un adulto)', 'Para un adolescente', 'Para niñ@s'].map((aud) => (
                          <button
                            key={aud}
                            type="button"
                            onClick={() => setTargetAudience(aud)}
                            className={`py-2 px-3 rounded-xl border text-center font-heading font-bold transition-all ${
                              targetAudience === aud
                                ? 'bg-[#001837] text-white border-[#001837] shadow-xs'
                                : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                            }`}
                          >
                            {aud}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* WhatsApp */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-700 block">
                        Tu número de WhatsApp *
                      </label>
                      <div className="flex gap-2">
                        <select
                          value={phoneCode}
                          onChange={(e) => setPhoneCode(e.target.value)}
                          className="w-28 shrink-0 h-11 px-2.5 bg-slate-50 text-[#001837] rounded-xl border border-slate-300 text-xs font-heading font-semibold"
                        >
                          {COUNTRY_CODES.map((c) => (
                            <option key={c.code} value={c.code}>
                              {c.abbr} {c.code}
                            </option>
                          ))}
                        </select>
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="300 123 4567"
                          className={`flex-1 h-11 px-3.5 bg-white text-slate-800 rounded-xl border text-xs sm:text-sm font-medium focus:outline-none ${
                            errors.phoneNumber ? 'border-red-500 bg-red-50/30' : 'border-slate-300 focus:border-[#001837]'
                          }`}
                        />
                      </div>
                      <span className="text-[10px] text-slate-500 block">No olvides ubicar tu código de área o país</span>
                      {errors.phoneNumber && <span className="text-[11px] text-red-600 font-medium">{errors.phoneNumber}</span>}
                    </div>

                    {/* ¿Quién te refirió? */}
                    <div className="space-y-1">
                      <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-700 block">
                        ¿Quién te refirió?
                      </label>
                      <select
                        value={referral}
                        onChange={(e) => setReferral(e.target.value)}
                        className="w-full h-11 px-3.5 bg-white text-slate-800 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none cursor-pointer"
                      >
                        <option value="Instagram">Instagram</option>
                        <option value="Facebook">Facebook</option>
                        <option value="TikTok">TikTok</option>
                        <option value="Recomendación de un amigo/estudiante">Recomendación de un amigo / estudiante YYCL</option>
                        <option value="Google / Búsqueda web">Google / Búsqueda web</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>

                    {/* Acciones */}
                    <div className="pt-4 flex items-center justify-between border-t border-slate-100">
                      <button
                        type="button"
                        onClick={handleBack}
                        className="h-11 px-5 rounded-2xl border-2 border-slate-200 text-slate-700 hover:border-[#001837] font-heading font-bold text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Atrás</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleNext}
                        className="h-11 px-7 rounded-2xl bg-[#834296] text-white shadow-[3px_3px_0px_#001837] hover:bg-[#6c2c80] font-heading font-bold text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer"
                      >
                        <span>Confirmar mi entrevista</span>
                        <CheckCircle2 className="w-4 h-4 text-[#FFD203]" />
                      </button>
                    </div>
                  </div>
                )}

                {/* ------------------------------------------------------------- */}
                {/* PASO 3: CONFIRMACIÓN EXITOSA                                  */}
                {/* ------------------------------------------------------------- */}
                {step === 3 && (
                  <div className="text-center space-y-5 py-4 animate-in fade-in zoom-in-95 duration-200">
                    <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto border-2 border-emerald-500 shadow-[2px_2px_0px_#001837]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div className="space-y-1">
                      <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
                        ¡Reserva confirmada!
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#001837] tracking-tight">
                        Nos vemos el {selectedDate} a las {selectedTime}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                        Hemos enviado el enlace de acceso de <strong>Google Meet</strong> y todos los detalles a <strong>{email}</strong> y recordatorio a tu WhatsApp.
                      </p>
                    </div>

                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 max-w-md mx-auto text-left text-xs space-y-1.5">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Evaluadora:</span>
                        <span className="font-bold text-[#001837]">Natty Sánchez</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Idioma:</span>
                        <span className="font-bold text-[#001837]">{language}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Modalidad:</span>
                        <span className="font-bold text-[#001837]">{targetAudience}</span>
                      </div>
                    </div>

                    <div className="pt-3 flex flex-wrap justify-center gap-3">
                      <Link
                        href="/"
                        className="px-6 py-2.5 rounded-xl bg-[#001837] text-white font-heading font-bold text-xs sm:text-sm hover:bg-slate-800 transition-colors"
                      >
                        Volver al inicio
                      </Link>
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-heading font-bold text-xs hover:bg-slate-100"
                      >
                        Hacer otra reserva
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
