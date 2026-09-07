"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Calendar, Clock, ArrowRight, ArrowLeft, Video, AlertCircle, ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';

const SERVICE_OPTIONS_ES = [
  {
    id: 'diagnostic',
    title: 'Diagnóstico de Nivel Oral 1-a-1',
    host: 'Natty',
    hostAvatar: '/assets/profesores/natty-sanchez.png',
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
    host: 'Néstor',
    hostAvatar: '/assets/profesores/nestor-montano.png',
    duration: '30 minutos',
    price: 'GRATIS',
    badge: 'CORPORATIVO',
    badgeVariant: 'empresas' as const,
    desc: 'Propuesta a la medida para capacitar a tu equipo con reportes de avance y seguimiento.',
    icon: '🏢'
  }
];

const SERVICE_OPTIONS_EN = [
  {
    id: 'diagnostic',
    title: '1-on-1 Oral Level Assessment',
    host: 'Natty',
    hostAvatar: '/assets/profesores/natty-sanchez.png',
    duration: '15 minutes',
    price: 'FREE',
    badge: 'RECOMMENDED',
    badgeVariant: 'conversacion' as const,
    desc: 'Quick assessment of your speaking level and a personalized roadmap to fluency.',
    icon: '🎯'
  },
  {
    id: 'b2b',
    title: 'B2B Consultation for Companies',
    host: 'Néstor',
    hostAvatar: '/assets/profesores/nestor-montano.png',
    duration: '30 minutes',
    price: 'FREE',
    badge: 'CORPORATE',
    badgeVariant: 'empresas' as const,
    desc: 'Tailored proposal to train your team with progress tracking and analytics.',
    icon: '🏢'
  }
];

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
  { code: '+44', flag: '🇬🇧', abbr: 'GB', label: 'Reino Unido' },
  { code: '+33', flag: '🇫🇷', abbr: 'FR', label: 'Francia' },
];

const TIME_SLOTS = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM',
  '06:00 PM', '07:00 PM'
];

const EXTENDED_DATES_ES = [
  { dayName: 'Hoy', dayNum: '01', fullDate: '2026-09-01' },
  { dayName: 'Mié', dayNum: '02', fullDate: '2026-09-02' },
  { dayName: 'Jue', dayNum: '03', fullDate: '2026-09-03' },
  { dayName: 'Vie', dayNum: '04', fullDate: '2026-09-04' },
  { dayName: 'Sáb', dayNum: '05', fullDate: '2026-09-05' },
  { dayName: 'Lun', dayNum: '07', fullDate: '2026-09-07' },
  { dayName: 'Mar', dayNum: '08', fullDate: '2026-09-08' },
  { dayName: 'Mié', dayNum: '09', fullDate: '2026-09-09' },
  { dayName: 'Jue', dayNum: '10', fullDate: '2026-09-10' },
  { dayName: 'Vie', dayNum: '11', fullDate: '2026-09-11' },
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

const EXTENDED_DATES_EN = [
  { dayName: 'Today', dayNum: '01', fullDate: '2026-09-01' },
  { dayName: 'Wed', dayNum: '02', fullDate: '2026-09-02' },
  { dayName: 'Thu', dayNum: '03', fullDate: '2026-09-03' },
  { dayName: 'Fri', dayNum: '04', fullDate: '2026-09-04' },
  { dayName: 'Sat', dayNum: '05', fullDate: '2026-09-05' },
  { dayName: 'Mon', dayNum: '07', fullDate: '2026-09-07' },
  { dayName: 'Tue', dayNum: '08', fullDate: '2026-09-08' },
  { dayName: 'Wed', dayNum: '09', fullDate: '2026-09-09' },
  { dayName: 'Thu', dayNum: '10', fullDate: '2026-09-10' },
  { dayName: 'Fri', dayNum: '11', fullDate: '2026-09-11' },
  { dayName: 'Sat', dayNum: '12', fullDate: '2026-09-12' },
  { dayName: 'Mon', dayNum: '14', fullDate: '2026-09-14' },
  { dayName: 'Tue', dayNum: '15', fullDate: '2026-09-15' },
  { dayName: 'Wed', dayNum: '16', fullDate: '2026-09-16' },
  { dayName: 'Thu', dayNum: '17', fullDate: '2026-09-17' },
  { dayName: 'Fri', dayNum: '18', fullDate: '2026-09-18' },
  { dayName: 'Sat', dayNum: '19', fullDate: '2026-09-19' },
  { dayName: 'Mon', dayNum: '21', fullDate: '2026-09-21' },
  { dayName: 'Tue', dayNum: '22', fullDate: '2026-09-22' },
];

export const BookingWizard = () => {
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en');

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('diagnostic');
  const [selectedDate, setSelectedDate] = useState('2026-09-02');
  const [selectedTime, setSelectedTime] = useState('10:00 AM');
  
  const daysSliderRef = useRef<HTMLDivElement>(null);

  // Validation States
  const [nameError, setNameError] = useState<string | null>(null);
  const [lastNameError, setLastNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [phoneError, setPhoneError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneCode: isEn ? '+1' : '+57',
    phoneNumber: '',
    language: isEn ? 'Spanish' : 'Inglés',
    currentLevel: isEn ? 'Zero / Absolute Beginner (A1)' : 'Cero / Principiante (A1)',
    goal: isEn ? 'Travel / Cultural Immersion' : 'Viajes / Inmigración',
    audience: isEn ? 'For myself (Adult)' : 'Para mí (un adulto)',
    referral: 'Instagram',
  });

  const services = isEn ? SERVICE_OPTIONS_EN : SERVICE_OPTIONS_ES;
  const dates = isEn ? EXTENDED_DATES_EN : EXTENDED_DATES_ES;
  const selectedServiceObj = services.find(s => s.id === selectedService) || services[0];

  const scrollDays = (direction: 'left' | 'right') => {
    if (daysSliderRef.current) {
      const scrollAmount = direction === 'left' ? -280 : 280;
      daysSliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const validateName = (val: string) => {
    if (!val.trim()) {
      setNameError(isEn ? 'Please enter your first name' : 'Por favor ingresa tu nombre');
      return false;
    }
    setNameError(null);
    return true;
  };

  const validateLastName = (val: string) => {
    if (!val.trim()) {
      setLastNameError(isEn ? 'Please enter your last name' : 'Por favor ingresa tu apellido');
      return false;
    }
    setLastNameError(null);
    return true;
  };

  const validateEmail = (value: string) => {
    const cleaned = value.trim();
    if (!cleaned) {
      setEmailError(isEn ? 'Please enter your email address' : 'Por favor ingresa tu correo electrónico');
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(cleaned)) {
      setEmailError(isEn ? 'Please enter a valid email (e.g. name@example.com)' : 'Ingresa un correo electrónico válido (ej: nombre@correo.com)');
      return false;
    }
    setEmailError(null);
    return true;
  };

  const validatePhone = (value: string, code = formData.phoneCode) => {
    const cleaned = value.trim();
    if (!cleaned) {
      setPhoneError(isEn ? 'Please enter your phone/WhatsApp number' : 'Por favor ingresa tu número de WhatsApp');
      return false;
    }
    const digitsOnly = cleaned.replace(/\D/g, '');
    if (/[a-zA-Z]/.test(cleaned)) {
      setPhoneError(isEn ? 'Please enter digits only' : 'Ingresa solo números');
      return false;
    }

    if (code === '+57') {
      if (digitsOnly.length < 10) {
        setPhoneError('En Colombia (+57) debe tener 10 dígitos (ej: 300 123 4567)');
        return false;
      }
      if (digitsOnly.length > 10) {
        setPhoneError('El número no debe superar 10 dígitos');
        return false;
      }
      if (!digitsOnly.startsWith('3')) {
        setPhoneError('En Colombia los celulares inician con 3 (ej: 300 123 4567)');
        return false;
      }
    } else if (code === '+1') {
      if (digitsOnly.length < 10) {
        setPhoneError(isEn ? 'US/Canada numbers require 10 digits (e.g. 555 123 4567)' : 'El número en USA/Canadá requiere 10 dígitos');
        return false;
      }
    } else {
      if (digitsOnly.length < 7) {
        setPhoneError(isEn ? 'Please enter a valid phone number' : 'Ingresa un número válido');
        return false;
      }
    }

    setPhoneError(null);
    return true;
  };

  const scrollToWizardTop = () => {
    const wizardEl = document.getElementById('wizard-container');
    if (wizardEl) {
      wizardEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNext = (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    if (step === 3) {
      const isNameValid = validateName(formData.firstName);
      const isLastNameValid = validateLastName(formData.lastName);
      const isEmailValid = validateEmail(formData.email);
      const isPhoneValid = validatePhone(formData.phoneNumber, formData.phoneCode);

      if (!isNameValid || !isLastNameValid || !isEmailValid || !isPhoneValid) {
        return;
      }
    }

    setStep(prev => Math.min(prev + 1, 4));
    scrollToWizardTop();
  };

  const handleBack = () => {
    setStep(prev => Math.max(prev - 1, 1));
    scrollToWizardTop();
  };

  const generateGoogleCalendarUrl = () => {
    const title = encodeURIComponent(
      isEn
        ? `YYCL Live Session: ${selectedServiceObj.title}`
        : `Sesión YYCL: ${selectedServiceObj.title}`
    );
    const details = encodeURIComponent(
      isEn
        ? `Live 1-on-1 language session with ${selectedServiceObj.host}.\nGoogle Meet link will be provided.\nAcademy: Yes You Can Languages (YYCL)`
        : `Sesión 1-a-1 en vivo con ${selectedServiceObj.host}.\nEnlace de Google Meet enviado a ${formData.email}.\nAcademia: Yes You Can Languages (YYCL)`
    );
    const location = encodeURIComponent('Google Meet (Online)');
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}`;
  };

  return (
    <div id="wizard-container" className="max-w-3xl mx-auto bg-white rounded-3xl border-2 border-[#001837] shadow-[5px_5px_0px_#001837] overflow-hidden">
      
      {/* ========================================================================= */}
      {/* TOP STEPPER & PROGRESS HEADER                                             */}
      {/* ========================================================================= */}
      <div className="bg-white border-b-2 border-[#001837]/15 p-5 sm:p-6 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="w-7 h-7 rounded-full bg-[#FFD203] text-[#001837] font-heading font-black text-xs flex items-center justify-center border-2 border-[#001837] shadow-[1.5px_1.5px_0px_#EC9519] shrink-0">
              {step}
            </span>
            <span className="font-heading font-extrabold text-xs sm:text-sm text-[#001837] truncate">
              {isEn ? `Step ${step} of 4 · ` : `Paso ${step} de 4 · `}
              {
                step === 1 ? (isEn ? 'Choose your session type' : 'Elige tu tipo de sesión') :
                step === 2 ? (isEn ? 'Select date and time' : 'Selecciona fecha y hora') :
                step === 3 ? (isEn ? 'Your contact details' : 'Tus datos de contacto') :
                (isEn ? 'Booking Confirmed!' : '¡Reserva Confirmada!')
              }
            </span>
          </div>
          <span className="text-[11px] text-[#834296] font-heading font-extrabold tracking-wider shrink-0">
            {step === 4 ? '100%' : `${step * 25}%`}
          </span>
        </div>

        {/* Slim Progress Bar */}
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-black/5">
          <div
            className="bg-[#FFD203] h-full transition-all duration-300 rounded-full"
            style={{ width: `${step * 25}%` }}
          />
        </div>
      </div>

      <div className="p-6 sm:p-8">
        
        {/* ========================================================================= */}
        {/* PASO 1: SELECCIÓN DE REUNIÓN + RECOMENDACIONES                            */}
        {/* ========================================================================= */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
                {isEn ? 'Free Interview' : 'Entrevista gratuita'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#001837] tracking-tight mt-1">
                {isEn ? 'Select a session' : 'Elige una reunión'}
              </h2>
            </div>

            {/* Recommendations Box */}
            <div className="p-5 rounded-2xl bg-[#FFE2C0]/35 border border-[#EC9519]/40 text-[#001837] space-y-2.5">
              <h4 className="font-heading font-bold text-sm text-[#001837]">
                {isEn ? 'Things to keep in mind for your interview:' : 'Ten en cuenta para tu entrevista:'}
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-700 font-body-regular">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                  <span>{isEn ? <strong>Add it to your calendar</strong> : <strong>Agrégalo a tu calendario</strong>} {isEn ? "so you don't miss it." : 'para no olvidarlo.'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                  <span>{isEn ? 'Be punctual in case your session is in duo format.' : 'Sé puntual por si tu entrevista es en dúo.'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                  <span>{isEn ? 'Choose a quiet place with a stable connection.' : 'Lugar tranquilo y con buena conexión.'}</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                  <span>{isEn ? "If you can't make it, please notify us in advance." : 'Si no puedes asistir, avísanos con tiempo por favor.'}</span>
                </li>
                <li className="flex items-center gap-2 sm:col-span-2">
                  <span className="w-4 h-4 rounded-full bg-[#16A34A] text-white flex items-center justify-center text-[10px] shrink-0 font-bold">✓</span>
                  <span>{isEn ? <strong>Relax and enjoy:</strong> : <strong>Relájate y diviértete:</strong>} {isEn ? "it's a zero-pressure conversation." : 'es una conversación sin presiones.'}</span>
                </li>
              </ul>
            </div>

            {/* Session Options Cards */}
            <div
              role="radiogroup"
              aria-label={isEn ? "Select a session type" : "Elige un tipo de sesión"}
              className="space-y-3.5 pt-1"
            >
              {services.map((opt) => {
                const isSelected = selectedService === opt.id;
                return (
                  <button
                    key={opt.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    tabIndex={0}
                    onClick={() => setSelectedService(opt.id)}
                    onKeyDown={(e) => {
                      if (e.key === ' ' || e.key === 'Enter') {
                        e.preventDefault();
                        setSelectedService(opt.id);
                      }
                    }}
                    className={`w-full text-left cursor-pointer rounded-2xl p-5 sm:p-6 border-2 transition-all flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-[#834296] ${
                      isSelected
                        ? 'border-[#001837] bg-[#FFE2C0]/25 shadow-[4px_4px_0px_#001837]'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#001837] shrink-0 bg-slate-100 shadow-xs">
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
                          {isSelected && (
                            <span className="inline-flex items-center gap-1 text-[11px] font-heading font-black text-[#834296] bg-[#834296]/10 px-2.5 py-0.5 rounded-full border border-[#834296]/20">
                              ✓ {isEn ? 'Selected' : 'Seleccionado'}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 font-medium">
                          {isEn ? `With ${opt.host}` : `Con ${opt.host}`}
                        </p>
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
                  </button>
                );
              })}
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => handleNext()}
                className="h-11 px-6 rounded-2xl bg-[#FFD203] text-[#001837] shadow-[3px_3px_0px_#EC9519] hover:bg-[#EC9519] hover:shadow-[3px_3px_0px_#C7760A] active:translate-x-[1px] active:translate-y-[1px] font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>{isEn ? 'Continue' : 'Continuar'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PASO 2: SELECCIÓN DE DÍA Y HORA CON SLIDER HORIZONTAL                     */}
        {/* ========================================================================= */}
        {step === 2 && (
          <div className="space-y-7 sm:space-y-8">
            
            {/* Step 2 Header Responsive */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-1 border-b border-slate-100">
              <div>
                <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
                  {selectedServiceObj.title}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#001837] tracking-tight mt-0.5">
                  {isEn ? 'Select a time' : 'Elige una hora'}
                </h2>
              </div>
              <span className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-heading font-bold text-slate-600 bg-slate-100 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-2xs">
                🌐 {isEn ? 'Times in your timezone' : 'Horarios en tu zona'}
              </span>
            </div>

            {/* 1. SELECCIÓN DE DÍA CON SLIDER HORIZONTAL & ARROWS ORDENADOS */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <label className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-wider text-[#001837] truncate">
                  {isEn ? '1. Select the date' : '1. Elige el día'}
                </label>

                {/* Integrated Month Badge + Arrows Controls */}
                <div className="flex items-center gap-1.5 shrink-0">
                  <span className="text-[11px] sm:text-xs font-heading font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200/80">
                    {isEn ? 'Sep 2026' : 'Sep 2026'}
                  </span>
                  <button
                    type="button"
                    onClick={() => scrollDays('left')}
                    aria-label="Previous days"
                    className="w-7 h-7 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-[#001837] transition-all cursor-pointer active:scale-95 shadow-2xs"
                  >
                    <ChevronLeft className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollDays('right')}
                    aria-label="Next days"
                    className="w-7 h-7 rounded-full border border-slate-200 bg-white hover:bg-slate-100 flex items-center justify-center text-[#001837] transition-all cursor-pointer active:scale-95 shadow-2xs"
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Horizontal Scrollable Days Slider Container (Sin stroke negro en seleccionado) */}
              <div
                ref={daysSliderRef}
                className="flex items-center gap-3 overflow-x-auto scroll-smooth pb-2 pt-1 no-scrollbar select-none"
                style={{ scrollSnapType: 'x mandatory' }}
              >
                {dates.map((d) => {
                  const isSel = selectedDate === d.fullDate;
                  return (
                    <button
                      key={d.fullDate}
                      type="button"
                      onClick={() => setSelectedDate(d.fullDate)}
                      style={{ scrollSnapAlign: 'start' }}
                      className={`shrink-0 w-[84px] sm:w-[94px] py-3.5 px-2 rounded-2xl text-center transition-all cursor-pointer ${
                        isSel
                          ? 'bg-[#FFD203] text-[#001837] font-black shadow-[3px_3px_0px_#EC9519] border-0 scale-[1.02]'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 shadow-2xs'
                      }`}
                    >
                      <span className="text-[11px] font-heading font-bold block uppercase tracking-wider">{d.dayName}</span>
                      <span className="text-lg sm:text-xl font-heading font-black block mt-0.5">{d.dayNum}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. SELECCIÓN DE HORA (Con botón violeta activo #834296 sin stroke negro) */}
            <div className="space-y-3">
              <label className="text-xs sm:text-sm font-heading font-extrabold uppercase tracking-wider text-[#001837] block">
                {isEn ? '2. Choose an available time slot' : '2. Elige la hora disponible'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 sm:gap-3">
                {TIME_SLOTS.map((time) => {
                  const isSel = selectedTime === time;
                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`py-3 px-3 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
                        isSel
                          ? 'bg-[#834296] text-white shadow-[3px_3px_0px_#001837] border-0 scale-[1.02]'
                          : 'bg-white text-[#001837] border border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 shadow-2xs'
                      }`}
                    >
                      <Clock className={`w-3.5 h-3.5 ${isSel ? 'text-[#FFD203]' : 'text-slate-400'}`} />
                      <span>{time}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Navigation Actions */}
            <div className="pt-4 flex items-center justify-between border-t border-slate-100">
              <button
                type="button"
                onClick={handleBack}
                className="text-slate-500 hover:text-[#001837] font-heading font-bold text-xs sm:text-sm px-3.5 py-2 rounded-xl hover:bg-slate-100 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{isEn ? 'Back' : 'Atrás'}</span>
              </button>

              <button
                type="button"
                onClick={() => handleNext()}
                className="h-11 px-6 rounded-2xl bg-[#FFD203] text-[#001837] shadow-[3px_3px_0px_#EC9519] hover:bg-[#EC9519] hover:shadow-[3px_3px_0px_#C7760A] active:translate-x-[1px] active:translate-y-[1px] font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>{isEn ? 'Continue' : 'Continuar'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* PASO 3: TUS DATOS DE CONTACTO (Bilingüe & Validado)                       */}
        {/* ========================================================================= */}
        {step === 3 && (
          <form onSubmit={handleNext} className="space-y-5">
            <div>
              <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
                {isEn ? 'Final step' : 'Paso final'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#001837] tracking-tight mt-0.5">
                {isEn ? 'Your contact details' : 'Tus datos de contacto'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-1 font-body-regular">
                {isEn
                  ? "We'll send your Google Meet access link and WhatsApp reminder."
                  : 'Te enviaremos el link de acceso a Google Meet y recordatorio por WhatsApp.'}
              </p>
            </div>

            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                  {isEn ? 'First Name' : 'Nombre'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isEn ? 'e.g. Maria' : 'Ej. Camila'}
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

              <div className="space-y-1">
                <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                  {isEn ? 'Last Name' : 'Apellido'}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isEn ? 'e.g. Miller' : 'Ej. Gómez'}
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

            {/* Email & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                  {isEn ? 'Email Address' : 'Correo Electrónico'}
                </label>
                <input
                  type="email"
                  required
                  placeholder={isEn ? 'name@example.com' : 'ejemplo@correo.com'}
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

              <div className="space-y-1">
                <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                  {isEn ? 'WhatsApp / Phone Number' : 'WhatsApp / Teléfono'}
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.phoneCode}
                    onChange={(e) => {
                      const newCode = e.target.value;
                      setFormData({ ...formData, phoneCode: newCode });
                      if (phoneError) setPhoneError(null);
                    }}
                    className="w-32 sm:w-36 shrink-0 h-11 px-2.5 bg-slate-50 text-[#001837] rounded-xl border border-slate-300 text-xs sm:text-sm font-heading font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFD203] focus:border-[#001837] cursor-pointer"
                    aria-label="Código de país"
                  >
                    {COUNTRY_CODES.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.abbr} {c.code}
                      </option>
                    ))}
                  </select>

                  <input
                    type="tel"
                    required
                    placeholder={
                      formData.phoneCode === '+1' ? '555 123 4567' :
                      formData.phoneCode === '+57' ? '300 123 4567' :
                      formData.phoneCode === '+54' ? '11 2345 6789' :
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

            {/* Dropdowns: Level & Goal */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                  {isEn ? 'Current language level?' : '¿Nivel actual de idioma?'}
                </label>
                <select
                  value={formData.currentLevel}
                  onChange={(e) => setFormData({ ...formData, currentLevel: e.target.value })}
                  className="w-full h-11 px-3.5 bg-white text-slate-800 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FFD203] focus:border-[#001837] cursor-pointer"
                >
                  {isEn ? (
                    <>
                      <option value="Zero / Absolute Beginner (A1)">Zero / Absolute Beginner (A1)</option>
                      <option value="Elementary (A2)">Elementary (A2)</option>
                      <option value="Intermediate (B1)">Intermediate (B1)</option>
                      <option value="Upper Intermediate (B2)">Upper Intermediate (B2)</option>
                      <option value="Advanced / Fluent (C1)">Advanced / Fluent (C1)</option>
                    </>
                  ) : (
                    <>
                      <option value="Cero / Principiante (A1)">Cero / Principiante (A1)</option>
                      <option value="Básico (A2)">Básico (A2)</option>
                      <option value="Intermedio básico (B1)">Intermedio básico (B1)</option>
                      <option value="Intermedio alto (B2)">Intermedio alto (B2)</option>
                      <option value="Avanzado (C1)">Avanzado (C1)</option>
                    </>
                  )}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                  {isEn ? 'Main goal?' : '¿Objetivo principal?'}
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full h-11 px-3.5 bg-white text-slate-800 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FFD203] focus:border-[#001837] cursor-pointer"
                >
                  {isEn ? (
                    <>
                      <option value="Travel / Cultural Immersion">Travel / Cultural Immersion</option>
                      <option value="Remote Work & Global Career">Remote Work & Global Career</option>
                      <option value="Exam Prep (DELE / SIELE / IELTS)">Exam Prep (DELE / SIELE / IELTS)</option>
                      <option value="Corporate Team Training">Corporate Team Training</option>
                      <option value="Speaking with confidence and zero fear">Speaking with confidence and zero fear</option>
                    </>
                  ) : (
                    <>
                      <option value="Viajes / Inmigración">Viajes / Inmigración</option>
                      <option value="Trabajo remoto / Empleo internacional">Trabajo remoto / Empleo internacional</option>
                      <option value="Rendir Examen (TOEFL / IELTS)">Rendir Examen (TOEFL / IELTS)</option>
                      <option value="Capacitación corporativa de equipo">Capacitación corporativa de equipo</option>
                      <option value="Hablar sin miedo ni vergüenza">Hablar sin miedo ni vergüenza</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            {/* Dropdowns: Language & Audience */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                  {isEn ? 'Language you want to learn' : 'Idioma de interés'}
                </label>
                <select
                  value={formData.language}
                  onChange={(e) => setFormData({ ...formData, language: e.target.value })}
                  className="w-full h-11 px-3.5 bg-white text-slate-800 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FFD203] focus:border-[#001837] cursor-pointer"
                >
                  {isEn ? (
                    <>
                      <option value="Spanish (for foreigners)">Spanish (for foreigners)</option>
                      <option value="English (100% in English)">English (100% in English)</option>
                      <option value="Portuguese">Portuguese</option>
                      <option value="French">French</option>
                    </>
                  ) : (
                    <>
                      <option value="Inglés">Inglés</option>
                      <option value="Francés">Francés</option>
                      <option value="Portugués">Portugués</option>
                      <option value="Español (para extranjeros)">Español (para extranjeros)</option>
                    </>
                  )}
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-heading font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                  {isEn ? 'Classes are for:' : 'Las clases son para:'}
                </label>
                <select
                  value={formData.audience}
                  onChange={(e) => setFormData({ ...formData, audience: e.target.value })}
                  className="w-full h-11 px-3.5 bg-white text-slate-800 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-[#FFD203] focus:border-[#001837] cursor-pointer"
                >
                  {isEn ? (
                    <>
                      <option value="For myself (an adult)">For myself (an adult)</option>
                      <option value="For a teen (Kids & Teens)">For a teen (Kids & Teens)</option>
                      <option value="For a child (Kids & Teens)">For a child (Kids & Teens)</option>
                      <option value="For my company / team">For my company / team</option>
                    </>
                  ) : (
                    <>
                      <option value="Para mí (un adulto)">Para mí (un adulto)</option>
                      <option value="Para un adolescente (Kids & Teens)">Para un adolescente (Kids & Teens)</option>
                      <option value="Para niñ@s (Kids & Teens)">Para niñ@s (Kids & Teens)</option>
                      <option value="Para mi empresa / equipo de trabajo">Para mi empresa / equipo de trabajo</option>
                    </>
                  )}
                </select>
              </div>
            </div>

            {/* Meeting Summary Pill */}
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Video className="w-5 h-5 text-[#834296] shrink-0" />
                <div className="text-xs sm:text-sm">
                  <span className="font-heading font-bold text-[#001837] block">
                    {selectedServiceObj.title} · {selectedDate} ({selectedTime})
                  </span>
                  <span className="text-slate-500">
                    {isEn ? '100% online session on Google Meet' : 'Sesión 100% online por Google Meet'}
                  </span>
                </div>
              </div>
              <span className="text-xs font-heading font-black text-emerald-700 uppercase bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                {selectedServiceObj.price}
              </span>
            </div>

            {/* Form Buttons */}
            <div className="pt-3 flex items-center justify-between">
              <button
                type="button"
                onClick={handleBack}
                className="text-slate-500 hover:text-[#001837] font-heading font-bold text-xs sm:text-sm px-3.5 py-2 rounded-xl hover:bg-slate-100 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{isEn ? 'Back' : 'Atrás'}</span>
              </button>

              <button
                type="submit"
                className="h-11 px-6 rounded-2xl bg-[#FFD203] text-[#001837] shadow-[3px_3px_0px_#EC9519] hover:bg-[#EC9519] hover:shadow-[3px_3px_0px_#C7760A] active:translate-x-[1px] active:translate-y-[1px] font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                {isEn ? 'Confirm Booking' : 'Confirmar cita'}
              </button>
            </div>
          </form>
        )}

        {/* ========================================================================= */}
        {/* PASO 4: MODAL CON OVERLAY DE CONFIRMACIÓN COMPACTO & ELEGANTE             */}
        {/* ========================================================================= */}
        {step === 4 && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
            <div className="relative w-full max-w-sm bg-white rounded-3xl p-5 sm:p-6 border-2 border-[#001837] shadow-[6px_6px_0px_#001837] text-center space-y-3.5 animate-in zoom-in-95 duration-300">
              
              {/* Botón cerrar ✕ -> Lleva al Home */}
              <Link
                href={isEn ? "/en" : "/"}
                aria-label="Cerrar modal e ir al inicio"
                className="absolute top-3 right-3 w-7 h-7 rounded-full bg-slate-100 hover:bg-slate-200 text-[#001837] flex items-center justify-center transition-colors cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </Link>

              {/* Animated Celebration Icon Compact */}
              <div className="relative w-10 h-10 mx-auto flex items-center justify-center">
                <div className="absolute inset-0 rounded-full bg-emerald-400/25 animate-ping duration-1000" />
                <div className="relative w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center border-2 border-emerald-600 shadow-2xs">
                  <svg
                    className="w-5 h-5 stroke-[3]"
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
                <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-[#834296] block">
                  {isEn ? 'Booking Confirmed!' : '¡Cita Confirmada!'}
                </span>
                <h2 className="text-xl font-extrabold font-heading text-[#001837] tracking-tight">
                  {isEn
                    ? `See you in class, ${formData.firstName || 'Student'}!`
                    : `¡Nos vemos en clase, ${formData.firstName || 'Diego'}!`}
                </h2>
              </div>

              {/* Clean Summary Pill */}
              <div className="bg-slate-50/90 rounded-xl p-2.5 sm:p-3 border border-slate-200 text-center space-y-1 shadow-2xs">
                <div className="flex items-center justify-center gap-2 text-xs font-heading font-bold text-[#001837]">
                  <Calendar className="w-3.5 h-3.5 text-[#834296]" />
                  <span>{selectedDate} · {selectedTime}</span>
                </div>
                <p className="text-[11px] text-slate-500 font-body-regular leading-snug max-w-[260px] mx-auto">
                  {isEn ? (
                    <>We sent Google Meet access to <strong className="text-[#001837]">{formData.email || 'your email'}</strong> and WhatsApp reminder.</>
                  ) : (
                    <>Enviamos enlace de Google Meet a <strong className="text-[#001837]">{formData.email || 'tu correo'}</strong> y WhatsApp.</>
                  )}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-col gap-2">
                <a
                  href={generateGoogleCalendarUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full"
                >
                  <button
                    type="button"
                    className="w-full h-10 px-4 rounded-2xl bg-[#FFD203] text-[#001837] shadow-[3px_3px_0px_#EC9519] hover:bg-[#EC9519] active:translate-x-[1px] active:translate-y-[1px] font-heading font-bold text-xs transition-all cursor-pointer inline-flex items-center justify-center gap-1.5"
                  >
                    <Calendar className="w-3.5 h-3.5 text-[#001837]" />
                    <span>{isEn ? 'Add to Google Calendar' : 'Agregar a Google Calendar'}</span>
                  </button>
                </a>

                <Link href={isEn ? "/en" : "/"} className="w-full">
                  <button
                    type="button"
                    className="w-full h-9 px-4 rounded-2xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-600 font-heading font-bold text-xs transition-colors cursor-pointer"
                  >
                    {isEn ? '← Back to Home' : '← Volver al inicio'}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
