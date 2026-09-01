"use client";

import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, ArrowLeft, Video, AlertCircle, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const SERVICE_OPTIONS = [
  {
    id: 'diagnostic',
    title: 'Diagnóstico de Nivel Oral 1-a-1',
    host: 'Nathi & Equipo YYCL',
    hostAvatar: '/assets/avatares/mujer.png',
    duration: '15 minutos',
    price: 'GRATIS',
    badge: 'RECOMENDADO',
    badgeVariant: 'conversacion' as const,
    desc: 'Evaluación rápida de tus fortalezas y mapa de ruta personalizado para hablar con fluidez.',
    icon: '🎯'
  },
  {
    id: 'b2b',
    title: 'Consulta B2B para Empresas',
    host: 'Néstor & Equipo Corporativo',
    hostAvatar: '/assets/avatares/hombre.png',
    duration: '30 minutos',
    price: 'GRATIS',
    badge: 'CORPORATIVO',
    badgeVariant: 'empresas' as const,
    desc: 'Propuesta a la medida para capacitar a tu equipo con reportes de avance y seguimiento.',
    icon: '🏢'
  }
];

const COUNTRY_CODES = [
  { code: '+57', name: '+57 (Colombia)' },
  { code: '+54', name: '+54 (Argentina)' },
  { code: '+52', name: '+52 (México)' },
  { code: '+56', name: '+56 (Chile)' },
  { code: '+51', name: '+51 (Perú)' },
  { code: '+34', name: '+34 (España)' },
  { code: '+1', name: '+1 (USA / Canadá)' },
  { code: '+593', name: '+593 (Ecuador)' },
  { code: '+598', name: '+598 (Uruguay)' },
  { code: '+507', name: '+507 (Panamá)' },
  { code: '+506', name: '+506 (Costa Rica)' },
  { code: '+591', name: '+591 (Bolivia)' },
  { code: '+595', name: '+595 (Paraguay)' },
];

const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM'
];

const DATES = [
  { dayName: 'Hoy', dayNum: '01', fullDate: '2026-09-01' },
  { dayName: 'Mié', dayNum: '02', fullDate: '2026-09-02' },
  { dayName: 'Jue', dayNum: '03', fullDate: '2026-09-03' },
  { dayName: 'Vie', dayNum: '04', fullDate: '2026-09-04' },
  { dayName: 'Sáb', dayNum: '05', fullDate: '2026-09-05' },
  { dayName: 'Lun', dayNum: '07', fullDate: '2026-09-07' },
];

export const BookingWizard = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('diagnostic');
  const [selectedDate, setSelectedDate] = useState('2026-09-02');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  
  // Validation States
  const [nameError, setNameError] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: '+57',
    phoneNumber: '',
    language: 'Inglés',
    currentLevel: 'Cero / Principiante (A1)',
    goal: 'Viajes / Inmigración',
    audience: 'Para mí (un adulto)',
    referral: 'Instagram',
  });

  const selectedServiceObj = SERVICE_OPTIONS.find(s => s.id === selectedService) || SERVICE_OPTIONS[0];

  const validateName = (val: string) => {
    if (!val.trim()) {
      setNameError('Por favor ingresa tu nombre');
      return false;
    }
    setNameError(null);
    return true;
  };

  const validateLastName = (val: string) => {
    if (!val.trim()) {
      setLastNameError('Por favor ingresa tu apellido');
      return false;
    }
    setLastNameError(null);
    return true;
  };

  const validateEmail = (value: string) => {
    const cleaned = value.trim();
    if (!cleaned) {
      setEmailError('Por favor ingresa tu correo electrónico');
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(cleaned)) {
      setEmailError('Ingresa un correo electrónico válido (ej: nombre@correo.com)');
      return false;
    }
    setEmailError(null);
    return true;
  };

  const validatePhone = (value: string, code = formData.phoneCode) => {
    const cleaned = value.trim();
    if (!cleaned) {
      setPhoneError('Por favor ingresa tu número de WhatsApp');
      return false;
    }
    const digitsOnly = cleaned.replace(/\D/g, '');
    if (/[a-zA-Z]/.test(cleaned)) {
      setPhoneError('Ingresa solo números');
      return false;
    }

    // Validaciones amigables según país (solo se disparan al terminar de escribir o al continuar):
    if (code === '+57') {
      // Colombia: 10 dígitos obligatorios e inicio con 3
      if (digitsOnly.length < 10) {
        setPhoneError('En Colombia (+57) falta algún dígito (debe tener 10 dígitos, ej: 300 123 4567)');
        return false;
      }
      if (digitsOnly.length > 10) {
        setPhoneError('En Colombia (+57) el número no debe superar 10 dígitos');
        return false;
      }
      if (!digitsOnly.startsWith('3')) {
        setPhoneError('En Colombia (+57) los celulares inician con 3 (ej: 300 123 4567)');
        return false;
      }
    } else if (code === '+54') {
      // Argentina: Acepta entre 8 y 11 dígitos (código de área + celular con o sin 9 / 15)
      if (digitsOnly.length < 8) {
        setPhoneError('En Argentina (+54) faltan dígitos en el número telefónico');
        return false;
      }
      if (digitsOnly.length > 12) {
        setPhoneError('El número ingresado supera la longitud permitida');
        return false;
      }
    } else if (code === '+52') {
      // México: 10 dígitos
      if (digitsOnly.length < 10) {
        setPhoneError('En México (+52) faltan dígitos (debe tener 10 dígitos, ej: 55 1234 5678)');
        return false;
      }
      if (digitsOnly.length > 10) {
        setPhoneError('En México (+52) el número tiene 10 dígitos');
        return false;
      }
    } else if (code === '+56') {
      // Chile: 9 dígitos
      if (digitsOnly.length !== 9) {
        setPhoneError('En Chile (+56) los móviles deben tener 9 dígitos (ej: 9 1234 5678)');
        return false;
      }
    } else if (code === '+51') {
      // Perú: 9 dígitos
      if (digitsOnly.length !== 9) {
        setPhoneError('En Perú (+51) los celulares deben tener 9 dígitos (ej: 912 345 678)');
        return false;
      }
    } else if (code === '+34') {
      // España: 9 dígitos
      if (digitsOnly.length !== 9) {
        setPhoneError('En España (+34) los móviles deben tener 9 dígitos (ej: 612 345 678)');
        return false;
      }
    } else if (code === '+1') {
      // USA / Canadá: 10 dígitos
      if (digitsOnly.length !== 10) {
        setPhoneError('En USA / Canadá (+1) debe tener 10 dígitos (ej: 202 555 0199)');
        return false;
      }
    } else {
      // Otros países
      if (digitsOnly.length < 7 || digitsOnly.length > 15) {
        setPhoneError('Ingresa un número telefónico válido');
        return false;
      }
    }

    setPhoneError(null);
    return true;
  };

  const handleNext = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (step === 3) {
      const isNameValid = validateName(formData.firstName);
      const isLastNameValid = validateLastName(formData.lastName);
      const isEmailValid = validateEmail(formData.email);
      const isPhoneValid = validatePhone(formData.phoneNumber);

      if (!isNameValid || !isLastNameValid || !isEmailValid || !isPhoneValid) {
        return;
      }
    }
    if (step < 4) setStep(step + 1);
  };

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [step]);

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const generateGoogleCalendarUrl = () => {
    const title = encodeURIComponent(`YYCL · ${selectedServiceObj.title} (${formData.firstName || 'Estudiante'})`);
    const details = encodeURIComponent(
      `Sesión online individual en vivo con Yes You Can Languages.\nIdioma: ${formData.language}\nNivel: ${formData.currentLevel}\nObjetivo: ${formData.goal}\nWhatsApp: ${formData.phoneCode} ${formData.phoneNumber}\nEnlace de Google Meet enviado a ${formData.email || 'tu correo'}.`
    );
    const location = encodeURIComponent('Google Meet (Online)');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-[#001837] shadow-[5px_5px_0px_#001837] overflow-hidden">
      {/* Header Wizard Status - Minimalista & Aireado */}
      <div className="p-4 sm:p-6 border-b border-slate-100 bg-white">
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <div className="flex items-center gap-2.5">
            <span className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#FFD203] text-[#001837] font-black text-xs flex items-center justify-center font-heading shrink-0">
              {step}
            </span>
            <span className="font-heading font-extrabold text-xs sm:text-sm text-[#001837] truncate">
              Paso {step} de 4 · {
                step === 1 ? 'Elige tu tipo de sesión' :
                step === 2 ? 'Selecciona fecha y hora' :
                step === 3 ? 'Tus datos de contacto' : '¡Reserva Confirmada!'
              }
            </span>
          </div>
          <span className="text-[11px] text-[#834296] font-heading font-extrabold tracking-wider shrink-0">
            {step === 4 ? '100%' : `${step * 25}%`}
          </span>
        </div>

        {/* Slim Progress Bar */}
        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
          <div
            className="bg-[#FFD203] h-full transition-all duration-300 rounded-full"
            style={{ width: `${step * 25}%` }}
          />
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {/* ========================================================================= */}
        {/* PASO 1: SELECCIÓN DE REUNIÓN + REGLAS DEL DS LIMPIAS                      */}
        {/* ========================================================================= */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
                Entrevista gratuita
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#001837] tracking-tight mt-1">
                Elige una reunión
              </h2>
            </div>

            {/* Caja de Recomendaciones Oficiales estilizada con el Design System */}
            <div className="p-5 rounded-2xl bg-[#FFE2C0]/35 border border-[#EC9519]/40 text-[#001837] space-y-2.5">
              <h4 className="font-heading font-bold text-sm text-[#001837]">
                Ten en cuenta para tu entrevista:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 font-body-regular">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                  <span><strong>Agrégalo a tu calendario</strong> para no olvidarlo.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                  <span>Sé puntual por si tu entrevista es en dúo.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                  <span>Lugar tranquilo y con buena conexión.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                  <span>Si no puedes asistir, avísanos con tiempo por favor.</span>
                </li>
                <li className="flex items-center gap-2 sm:col-span-2">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                  <span><strong>Relájate y diviértete:</strong> es una conversación sin presiones.</span>
                </li>
              </ul>
            </div>

            {/* Opciones de Reunión */}
            <div className="space-y-3.5 pt-1">
              {SERVICE_OPTIONS.map((opt) => {
                const isSelected = selectedService === opt.id;
                return (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedService(opt.id)}
                    className={`cursor-pointer rounded-2xl p-5 sm:p-6 border transition-all flex items-center justify-between gap-4 ${
                      isSelected
                        ? 'border-[#001837] bg-[#FFE2C0]/25 shadow-[3px_3px_0px_#001837]'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border border-[#001837] shrink-0 bg-slate-100 shadow-xs">
                        <img src={opt.hostAvatar} alt={opt.host} className="w-full h-full object-cover" />
                      </div>
                      <div className="space-y-0.5">
                        <div className="flex items-center gap-2.5 flex-wrap">
                          <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#001837]">
                            {opt.title}
                          </h3>
                          <Badge variant={opt.badgeVariant}>
                            {opt.badge}
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-500 font-medium">Con {opt.host}</p>
                        <div className="flex items-center gap-4 pt-1 text-xs font-heading font-bold text-slate-600">
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-[#834296]" />
                            {opt.duration}
                          </span>
                          <span className="text-emerald-700 font-black tracking-wide">{opt.price}</span>
                        </div>
                      </div>
                    </div>

                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${
                      isSelected ? 'border-[#001837] bg-[#FFD203]' : 'border-slate-300 bg-white'
                    }`}>
                      {isSelected && <div className="w-2 h-2 rounded-full bg-[#001837]" />}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => handleNext()}
                className="h-11 px-6 rounded-2xl bg-[#FFD203] text-[#001837] border border-[#001837] shadow-[3px_3px_0px_#001837] font-heading font-bold text-xs sm:text-sm hover:bg-[#FFE2C0] transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>Continuar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PASO 2: SELECCIÓN DE HORA                                                 */}
        {/* ========================================================================= */}
        {step === 2 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
                  {selectedServiceObj.title}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#001837] tracking-tight mt-1">
                  Elige una hora
                </h2>
              </div>
              <span className="text-xs font-body-regular text-slate-500 bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200">
                🌐 Horarios en tu zona
              </span>
            </div>

            {/* Días */}
            <div className="space-y-2.5">
              <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-slate-700 block">
                1. Elige el día
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2.5">
                {DATES.map((d) => {
                  const isSel = selectedDate === d.fullDate;
                  return (
                    <button
                      key={d.fullDate}
                      type="button"
                      onClick={() => setSelectedDate(d.fullDate)}
                      className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                        isSel
                          ? 'border-[#001837] bg-[#FFD203] text-[#001837] font-black shadow-[3px_3px_0px_#001837]'
                          : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      <span className="text-[11px] font-heading font-bold block uppercase">{d.dayName}</span>
                      <span className="text-lg font-heading font-extrabold block mt-0.5">{d.dayNum}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Horas */}
            <div className="space-y-2.5">
              <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-slate-700 block">
                2. Elige la hora disponible
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
                {TIME_SLOTS.map((time) => {
                  const isSel = selectedTime === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        isSel
                          ? 'border-[#001837] bg-[#001837] text-white shadow-[3px_3px_0px_#834296]'
                          : 'border-slate-200 bg-white text-[#001837] hover:border-slate-300'
                      }`}
                    >
                      <Clock className={`w-3.5 h-3.5 ${isSel ? 'text-[#FFD203]' : 'text-slate-400'}`} />
                      <span>{time}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Barra de Navegación con Botón Atrás Ghost Pequeño */}
            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="text-slate-500 hover:text-[#001837] font-heading font-bold text-xs sm:text-sm px-3 py-2 rounded-xl hover:bg-slate-100 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Atrás</span>
              </button>

              <button
                type="button"
                onClick={() => handleNext()}
                className="h-11 px-6 rounded-2xl bg-[#FFD203] text-[#001837] border border-[#001837] shadow-[3px_3px_0px_#001837] font-heading font-bold text-xs sm:text-sm hover:bg-[#FFE2C0] transition-colors cursor-pointer inline-flex items-center gap-2"
              >
                <span>Continuar</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PASO 3: TUS DATOS DE CONTACTO (Validaciones en Tiempo Real de Email y Tel) */}
        {/* ========================================================================= */}
        {step === 3 && (
          <form onSubmit={handleNext} className="space-y-5">
            <div>
              <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
                Paso final
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#001837] tracking-tight mt-0.5">
                Tus datos de contacto
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-body-regular">
                Te enviaremos el link de acceso a Google Meet y recordatorio por WhatsApp.
              </p>
            </div>

            {/* Nombre y Apellido con validación */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-heading font-extrabold text-[#001837] uppercase tracking-wider block">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  placeholder="Diego"
                  value={formData.firstName}
                  onChange={(e) => {
                    setFormData({ ...formData, firstName: e.target.value });
                    if (nameError) validateName(e.target.value);
                  }}
                  onBlur={() => validateName(formData.firstName)}
                  className={`w-full h-11 px-3.5 bg-white text-slate-800 rounded-xl border text-xs sm:text-sm font-medium focus:outline-none transition-colors ${
                    nameError
                      ? 'border-red-500 ring-2 ring-red-100 bg-red-50/20 text-red-900'
                      : 'border-slate-300 focus:ring-2 focus:ring-[#FFD203] focus:border-[#001837]'
                  }`}
                />
                {nameError && (
                  <div className="flex items-center gap-1 text-xs text-red-600 font-medium pt-0.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{nameError}</span>
                  </div>
                )}
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-heading font-extrabold text-[#001837] uppercase tracking-wider block">
                  Apellido
                </label>
                <input
                  type="text"
                  required
                  placeholder="Torres"
                  value={formData.lastName}
                  onChange={(e) => {
                    setFormData({ ...formData, lastName: e.target.value });
                    if (lastNameError) validateLastName(e.target.value);
                  }}
                  onBlur={() => validateLastName(formData.lastName)}
                  className={`w-full h-11 px-3.5 bg-white text-slate-800 rounded-xl border text-xs sm:text-sm font-medium focus:outline-none transition-colors ${
                    lastNameError
                      ? 'border-red-500 ring-2 ring-red-100 bg-red-50/20 text-red-900'
                      : 'border-slate-300 focus:ring-2 focus:ring-[#FFD203] focus:border-[#001837]'
                  }`}
                />
                {lastNameError && (
                  <div className="flex items-center gap-1 text-xs text-red-600 font-medium pt-0.5">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{lastNameError}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Email y WhatsApp con Validación de Error en Ambos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Campo Email con Validación */}
              <div className="space-y-1.5">
                <label className="text-xs font-heading font-extrabold text-[#001837] uppercase tracking-wider block">
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  required
                  placeholder="dietol25@hotmail.com"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (emailError) setEmailError(null);
                  }}
                  onBlur={() => {
                    if (formData.email) validateEmail(formData.email);
                  }}
                  className={`w-full h-11 px-3.5 bg-white text-slate-800 rounded-xl border text-xs sm:text-sm font-medium focus:outline-none transition-colors ${
                    emailError
                      ? 'border-red-500 ring-2 ring-red-100 bg-red-50/20 text-red-900'
                      : 'border-slate-300 focus:ring-2 focus:ring-[#FFD203] focus:border-[#001837]'
                  }`}
                />
                {emailError && (
                  <div className="flex items-center gap-1 text-xs text-red-600 font-medium pt-0.5 animate-in fade-in-50 duration-150">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{emailError}</span>
                  </div>
                )}
              </div>

              {/* Campo WhatsApp con Indicativo y Validación */}
              <div className="space-y-1.5">
                <label className="text-xs font-heading font-extrabold text-[#001837] uppercase tracking-wider block">
                  WhatsApp / Teléfono
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.phoneCode}
                    onChange={(e) => {
                      const newCode = e.target.value;
                      setFormData({ ...formData, phoneCode: newCode });
                      if (phoneError) setPhoneError(null);
                    }}
                    className="w-24 shrink-0 h-11 px-2.5 bg-slate-50 text-[#001837] rounded-xl border border-slate-300 text-xs sm:text-sm font-heading font-bold focus:outline-none focus:ring-2 focus:ring-[#FFD203] focus:border-[#001837]"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.code}
                      </option>
                    ))}
                  </select>

                  <input
                    type="tel"
                    required
                    placeholder={
                      formData.phoneCode === '+57' ? '300 123 4567' :
                      formData.phoneCode === '+54' ? '11 2542 0791' :
                      formData.phoneCode === '+52' ? '55 1234 5678' :
                      formData.phoneCode === '+56' ? '9 1234 5678' :
                      formData.phoneCode === '+51' ? '912 345 678' :
                      formData.phoneCode === '+34' ? '612 345 678' :
                      formData.phoneCode === '+1' ? '202 555 0199' :
                      '300 123 4567'
                    }
                    value={formData.phoneNumber}
                    onChange={(e) => {
                      setFormData({ ...formData, phoneNumber: e.target.value });
                      if (phoneError) setPhoneError(null);
                    }}
                    onBlur={() => {
                      if (formData.phoneNumber) validatePhone(formData.phoneNumber, formData.phoneCode);
                    }}
                    className={`flex-1 h-11 px-3.5 bg-white text-slate-800 rounded-xl border text-xs sm:text-sm font-medium focus:outline-none transition-colors ${
                      phoneError
                        ? 'border-red-500 ring-2 ring-red-100 bg-red-50/20 text-red-900'
                        : 'border-slate-300 focus:ring-2 focus:ring-[#FFD203] focus:border-[#001837]'
                    }`}
                  />
                </div>

                {phoneError && (
                  <div className="flex items-center gap-1 text-xs text-red-600 font-medium pt-0.5 animate-in fade-in-50 duration-150">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{phoneError}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Dropdowns Elegantes: Nivel actual & Objetivo Principal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-heading font-extrabold text-[#001837] uppercase tracking-wider block">
                  ¿Nivel actual de inglés?
                </label>
                <select
                  value={formData.currentLevel}
                  onChange={(e) => setFormData({ ...formData, currentLevel: e.target.value })}
                  className="w-full h-11 px-3.5 bg-white text-slate-800 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FFD203] focus:border-[#001837]"
                >
                  <option value="Cero / Principiante (A1)">Cero / Principiante (A1)</option>
                  <option value="Básico (A2)">Básico (A2)</option>
                  <option value="Intermedio básico (B1)">Intermedio básico (B1)</option>
                  <option value="Intermedio alto (B2)">Intermedio alto (B2)</option>
                  <option value="Avanzado (C1)">Avanzado (C1)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-heading font-extrabold text-[#001837] uppercase tracking-wider block">
                  ¿Objetivo principal?
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full h-11 px-3.5 bg-white text-slate-800 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FFD203] focus:border-[#001837]"
                >
                  <option value="Viajes / Inmigración">Viajes / Inmigración</option>
                  <option value="Trabajo remoto / Empleo internacional">Trabajo remoto / Empleo internacional</option>
                  <option value="Rendir Examen (TOEFL / IELTS)">Rendir Examen (TOEFL / IELTS)</option>
                  <option value="Capacitación corporativa de equipo">Capacitación corporativa de equipo</option>
                  <option value="Hablar sin miedo ni vergüenza">Hablar sin miedo ni vergüenza</option>
                </select>
              </div>
            </div>

            {/* Dropdowns: Idioma de Interés & ¿Para quién son las clases? */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-heading font-extrabold text-[#001837] uppercase tracking-wider block">
                  Idioma de interés
                </label>
                <select
                  value={formData.language}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                  className="w-full h-11 px-3.5 bg-white text-slate-800 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FFD203] focus:border-[#001837]"
                >
                  <option value="Inglés">Inglés</option>
                  <option value="Francés">Francés</option>
                  <option value="Portugués">Portugués</option>
                  <option value="Español (para extranjeros)">Español (para extranjeros)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-heading font-extrabold text-[#001837] uppercase tracking-wider block">
                  Las clases son para:
                </label>
                <select
                  value={formData.audience}
                  onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                  className="w-full h-11 px-3.5 bg-white text-slate-800 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FFD203] focus:border-[#001837]"
                >
                  <option value="Para mí (un adulto)">Para mí (un adulto)</option>
                  <option value="Para un adolescente (Kids & Teens)">Para un adolescente (Kids & Teens)</option>
                  <option value="Para niñ@s (Kids & Teens)">Para niñ@s (Kids & Teens)</option>
                  <option value="Para mi empresa / equipo de trabajo">Para mi empresa / equipo de trabajo</option>
                </select>
              </div>
            </div>

            {/* Resumen Badge de la Cita */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Video className="w-5 h-5 text-[#834296] shrink-0" />
                <div className="text-xs sm:text-sm">
                  <span className="font-heading font-bold text-[#001837] block">
                    {selectedServiceObj.title} · {selectedDate} ({selectedTime})
                  </span>
                  <span className="text-slate-500">Sesión 100% online por Google Meet</span>
                </div>
              </div>
              <span className="text-xs font-heading font-black text-emerald-700 uppercase bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                GRATIS
              </span>
            </div>

            {/* Botón Atrás Ghost + Botón Confirmar Compacto */}
            <div className="pt-3 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="text-slate-500 hover:text-[#001837] font-heading font-bold text-xs sm:text-sm px-3 py-2 rounded-xl hover:bg-slate-100 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Atrás</span>
              </button>

              <button
                type="submit"
                className="h-11 px-6 rounded-2xl bg-[#FFD203] text-[#001837] border border-[#001837] shadow-[3px_3px_0px_#001837] font-heading font-bold text-xs sm:text-sm hover:bg-[#FFE2C0] transition-colors cursor-pointer"
              >
                Confirmar cita
              </button>
            </div>
          </form>
        )}

        {/* ========================================================================= */}
        {/* PASO 4: CONFIRMACIÓN COMPACTA Y ELEGANTE (Optimizado para Mobile)         */}
        {/* ========================================================================= */}
        {step === 4 && (
          <div className="text-center py-4 sm:py-6 space-y-5 animate-in zoom-in-95 duration-300">
            
            {/* Animated Celebration Icon */}
            <div className="relative w-16 h-16 mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-emerald-400/25 animate-ping duration-1000" />
              <div className="relative w-14 h-14 rounded-full bg-emerald-600 text-white flex items-center justify-center shadow-md border-2 border-white">
                <svg
                  className="w-7 h-7"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
            </div>

            {/* Title */}
            <div className="space-y-1">
              <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
                ¡Cita Confirmada!
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#001837] tracking-tight">
                ¡Nos vemos en clase, {formData.firstName || 'Diego'}!
              </h2>
            </div>

            {/* Clean, Compact Date & Channel Pill */}
            <div className="max-w-sm mx-auto bg-slate-50/90 rounded-2xl p-4 border border-slate-200 text-center space-y-1.5 shadow-xs">
              <div className="flex items-center justify-center gap-2 text-sm font-heading font-bold text-[#001837]">
                <Calendar className="w-4 h-4 text-[#834296]" />
                <span>{selectedDate} · {selectedTime}</span>
              </div>
              <p className="text-xs text-slate-500 font-body-regular leading-relaxed">
                Enviamos el enlace de Google Meet a <strong className="text-[#001837]">{formData.email}</strong> y recordatorio a tu WhatsApp.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={generateGoogleCalendarUrl()}
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto"
              >
                <button
                  type="button"
                  className="w-full sm:w-auto h-11 px-6 rounded-2xl bg-[#FFD203] text-[#001837] border border-[#001837] shadow-[3px_3px_0px_#001837] font-heading font-bold text-xs sm:text-sm hover:bg-[#FFE2C0] transition-colors cursor-pointer inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4 text-[#001837]" />
                  <span>Agregar a Google Calendar</span>
                </button>
              </a>

              <button
                type="button"
                onClick={() => {
                  setStep(1);
                  setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phoneCode: '+57',
                    phoneNumber: '',
                    language: 'Inglés',
                    currentLevel: 'Cero / Principiante (A1)',
                    goal: 'Viajes / Inmigración',
                    audience: 'Para mí (un adulto)',
                    referral: 'Instagram',
                  });
                }}
                className="h-9 px-3 rounded-xl text-slate-500 hover:text-[#001837] font-heading font-bold text-xs hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Agendar otra sesión
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
