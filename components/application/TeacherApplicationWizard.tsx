"use client";

import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Clock, 
  Link as LinkIcon, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Send,
  Globe,
  Sparkles,
  Heart,
  UploadCloud,
  FileText,
  X,
  Briefcase,
  Users
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

interface ApplicationFormData {
  // Paso 1: Contacto
  fullName: string;
  email: string;
  countryCode: string;
  phone: string;
  cityCountry: string;
  
  // Paso 2: Idiomas & Perfil
  primaryLanguage: string;
  otherLanguages: string[];
  audiencePreference: string[];
  certifications: string;
  experienceYears: string;
  
  // Paso 3: Disponibilidad & Metodología
  availabilityHours: string;
  preferredTimeSlot: string[];
  methodologyAlignment: string;
  
  // Paso 4: Enlaces & CV
  cvFileName: string;
  linkedinOrCvUrl: string;
  videoIntroUrl: string;
  motivationMessage: string;
}

const INITIAL_DATA: ApplicationFormData = {
  fullName: '',
  email: '',
  countryCode: '+57',
  phone: '',
  cityCountry: '',
  primaryLanguage: 'Inglés',
  otherLanguages: [],
  audiencePreference: ['Adultos'],
  certifications: '',
  experienceYears: '1 a 3 años',
  availabilityHours: '10 a 20 horas / semana (Part-time)',
  preferredTimeSlot: ['Tardes (2:00 PM - 7:00 PM)'],
  methodologyAlignment: '',
  cvFileName: '',
  linkedinOrCvUrl: '',
  videoIntroUrl: '',
  motivationMessage: '',
};

const COUNTRY_CODES = [
  { code: '+57', flag: '🇨🇴', name: 'Colombia' },
  { code: '+54', flag: '🇦🇷', name: 'Argentina' },
  { code: '+52', flag: '🇲🇽', name: 'México' },
  { code: '+56', flag: '🇨🇱', name: 'Chile' },
  { code: '+51', flag: '🇵🇪', name: 'Perú' },
  { code: '+34', flag: '🇪🇸', name: 'España' },
  { code: '+1', flag: '🇺🇸', name: 'USA / Can' },
];

export const TeacherApplicationWizard: React.FC<{ isEn?: boolean }> = ({ isEn = false }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<ApplicationFormData>(INITIAL_DATA);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToFormTop = () => {
    if (containerRef.current) {
      const yOffset = -90;
      const y = containerRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: Math.max(0, y), behavior: 'smooth' });
    }
  };

  const updateField = (field: keyof ApplicationFormData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleArrayItem = (field: 'otherLanguages' | 'audiencePreference' | 'preferredTimeSlot', item: string) => {
    setFormData(prev => {
      const arr = prev[field];
      const exists = arr.includes(item);
      return {
        ...prev,
        [field]: exists ? arr.filter(i => i !== item) : [...arr, item]
      };
    });
  };

  const handleNext = () => {
    if (step < 4) {
      setStep(prev => prev + 1);
      scrollToFormTop();
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(prev => prev - 1);
      scrollToFormTop();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulación de envío a Google Sheets / Webhook API
    try {
      await new Promise(resolve => setTimeout(resolve, 1200));
      setIsSubmitted(true);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // =========================================================================
  // MODAL CON OVERLAY DE CONFIRMACIÓN COMPACTO & ELEGANTE
  // =========================================================================
  const renderConfirmationModal = () => {
    if (!isSubmitted) return null;

    const homeUrl = isEn ? "/en" : "/";

    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/65 backdrop-blur-xs animate-in fade-in duration-200">
        <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-7 border-2 border-[#001837] shadow-[8px_8px_0px_#001837] text-center space-y-4 animate-in zoom-in-95 duration-300">
          
          {/* Botón cerrar ✕ -> Lleva al Home */}
          <Link
            href={homeUrl}
            aria-label="Cerrar modal e ir al inicio"
            className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-[#001837] flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </Link>

          {/* Animated Celebration Icon Compact */}
          <div className="relative w-12 h-12 mx-auto flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-emerald-400/25 animate-ping duration-1000" />
            <div className="relative w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center border-2 border-emerald-600 shadow-xs">
              <CheckCircle2 className="w-7 h-7 stroke-[2.5]" />
            </div>
          </div>

          <div className="space-y-1">
            <span className="text-[11px] font-heading font-extrabold uppercase tracking-widest text-[#834296]">
              {isEn ? 'Application Received' : 'Postulación Recibida'}
            </span>
            <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-[#001837] tracking-tight">
              {isEn ? `Thank you, ${formData.fullName.split(' ')[0] || 'Teacher'}!` : `¡Muchas gracias, ${formData.fullName.split(' ')[0] || 'Docente'}!`}
            </h2>
            <p className="text-xs text-slate-600 font-body-regular leading-relaxed">
              {isEn 
                ? "We've received your profile. Natty, Néstor, and the academic team will review your application."
                : "Registramos tu información. Natty, Néstor y el equipo académico revisarán tu perfil."}
            </p>
          </div>

          <div className="bg-[#FFE2C0]/35 rounded-2xl p-3.5 sm:p-4 border border-[#EC9519]/40 text-left space-y-1.5">
            <p className="text-[11px] font-heading font-extrabold uppercase tracking-wider text-[#EC9519]">
              {isEn ? 'What happens next?' : '¿Qué sigue ahora?'}
            </p>
            <ul className="text-xs text-slate-700 font-body-regular space-y-1 list-disc pl-4">
              <li>{isEn ? 'Application review (24 to 48 business hours).' : 'Revisión de tu perfil y experiencia (24 a 48 hs hábiles).'}</li>
              <li>{isEn ? 'We will contact you via WhatsApp or Email.' : 'Te contactaremos vía WhatsApp o correo electrónico.'}</li>
              <li>{isEn ? 'Brief conversational interview with our Academic Director.' : 'Entrevista conversacional breve con nuestra Dirección de Estudios.'}</li>
            </ul>
          </div>

          <div className="pt-2">
            <Link href={homeUrl} className="block w-full">
              <Button
                variant="primary"
                size="md"
                className="w-full font-heading font-bold text-xs sm:text-sm h-11 shadow-[3px_3px_0px_#EC9519]"
              >
                {isEn ? '← Back to Home' : '← Volver al inicio'}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      {renderConfirmationModal()}
      <div ref={containerRef} className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#001837] shadow-[6px_6px_0px_#001837] space-y-8 max-w-3xl mx-auto scroll-mt-24">
      
      {/* Barra de Progreso de Pasos (1 a 4) */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-heading font-extrabold text-[#001837]">
          <span>{isEn ? `Step ${step} of 4` : `Paso ${step} de 4`}</span>
          <span className="text-[#834296]">
            {step === 1 && (isEn ? 'Contact Info' : 'Datos Personales')}
            {step === 2 && (isEn ? 'Teaching Profile' : 'Perfil Docente')}
            {step === 3 && (isEn ? 'Availability & Style' : 'Disponibilidad')}
            {step === 4 && (isEn ? 'CV & Submission' : 'CV y Envío')}
          </span>
        </div>
        <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden border border-black/10">
          <div 
            className="h-full bg-[#FFD203] transition-all duration-300 rounded-full"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* ========================================================================= */}
        {/* PASO 1: DATOS PERSONALES & CONTACTO                                       */}
        {/* ========================================================================= */}
        {step === 1 && (
          <div className="space-y-5 animate-in fade-in-50 duration-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-[#001837]">
                {isEn ? 'Tell us about yourself' : 'Cuéntanos sobre ti'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {isEn ? 'Basic details so we can get in touch with you.' : 'Tus datos básicos de contacto para comunicarnos contigo.'}
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#001837] block mb-1.5">
                  {isEn ? 'Full Name *' : 'Nombre Completo *'}
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder={isEn ? "e.g. Maria Gonzalez" : "ej. María González"}
                    value={formData.fullName}
                    onChange={e => updateField('fullName', e.target.value)}
                    className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-[#001837] focus:bg-white focus:outline-none focus:border-[#834296] focus:ring-2 focus:ring-[#834296]/20 transition-all font-body-regular"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#001837] block mb-1.5">
                  {isEn ? 'Email Address *' : 'Correo Electrónico *'}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    placeholder="maria@ejemplo.com"
                    value={formData.email}
                    onChange={e => updateField('email', e.target.value)}
                    className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-[#001837] focus:bg-white focus:outline-none focus:border-[#834296] focus:ring-2 focus:ring-[#834296]/20 transition-all font-body-regular"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#001837] block mb-1.5">
                  {isEn ? 'WhatsApp Phone *' : 'WhatsApp / Teléfono *'}
                </label>
                <div className="flex gap-2">
                  <select
                    value={formData.countryCode}
                    onChange={e => updateField('countryCode', e.target.value)}
                    className="h-11 px-2.5 rounded-xl border border-slate-200 bg-slate-50 text-xs sm:text-sm font-heading font-bold text-[#001837] focus:bg-white focus:outline-none focus:border-[#834296] shrink-0"
                  >
                    {COUNTRY_CODES.map(c => (
                      <option key={c.code} value={c.code}>
                        {c.flag} {c.code}
                      </option>
                    ))}
                  </select>
                  <div className="relative flex-1">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                    <input
                      type="tel"
                      required
                      placeholder="300 123 4567"
                      value={formData.phone}
                      onChange={e => updateField('phone', e.target.value)}
                      className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-[#001837] focus:bg-white focus:outline-none focus:border-[#834296] focus:ring-2 focus:ring-[#834296]/20 transition-all font-body-regular"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#001837] block mb-1.5">
                  {isEn ? 'City & Country of Residence *' : 'Ciudad y País de Residencia *'}
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    placeholder={isEn ? "e.g. Buenos Aires, Argentina" : "ej. Bogotá, Colombia / Buenos Aires, Argentina"}
                    value={formData.cityCountry}
                    onChange={e => updateField('cityCountry', e.target.value)}
                    className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-[#001837] focus:bg-white focus:outline-none focus:border-[#834296] focus:ring-2 focus:ring-[#834296]/20 transition-all font-body-regular"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={handleNext}
                disabled={!formData.fullName || !formData.email || !formData.phone}
                className="h-11 px-7 rounded-2xl bg-[#FFD203] text-[#001837] shadow-[3px_3px_0px_#EC9519] hover:bg-[#EC9519] active:translate-x-[1px] active:translate-y-[1px] font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer inline-flex items-center gap-2 disabled:opacity-50 disabled:pointer-events-none"
              >
                <span>{isEn ? 'Continue' : 'Continuar'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PASO 2: IDIOMAS & PERFIL DOCENTE                                          */}
        {/* ========================================================================= */}
        {step === 2 && (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-[#001837]">
                {isEn ? 'Teaching Profile & Languages' : 'Idiomas y Perfil Docente'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {isEn ? 'What languages and formats do you specialize in?' : '¿Qué idiomas enseñas y con qué modalidades te sientes más cómodo/a?'}
              </p>
            </div>

            {/* Idioma Principal (Dropdown) */}
            <div>
              <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#001837] block mb-1.5">
                {isEn ? 'Primary Language you Teach *' : 'Idioma Principal que Enseñas *'}
              </label>
              <div className="relative">
                <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <select
                  value={formData.primaryLanguage}
                  onChange={e => updateField('primaryLanguage', e.target.value)}
                  className="w-full h-11 pl-10 pr-8 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-[#001837] focus:bg-white focus:outline-none focus:border-[#834296] font-body-regular cursor-pointer appearance-none transition-all"
                >
                  <option value="Inglés">Inglés</option>
                  <option value="Francés">Francés</option>
                  <option value="Portugués">Portugués</option>
                  <option value="Español (para extranjeros)">Español (para extranjeros)</option>
                </select>
                <div className="absolute right-3.5 top-4 pointer-events-none border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-500" />
              </div>
            </div>

            {/* Años de Experiencia (Dropdown) */}
            <div>
              <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#001837] block mb-1.5">
                {isEn ? 'Teaching Experience *' : 'Años de Experiencia Docente *'}
              </label>
              <div className="relative">
                <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <select
                  value={formData.experienceYears}
                  onChange={e => updateField('experienceYears', e.target.value)}
                  className="w-full h-11 pl-10 pr-8 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-[#001837] focus:bg-white focus:outline-none focus:border-[#834296] font-body-regular cursor-pointer appearance-none transition-all"
                >
                  <option value="Menos de 1 año">Menos de 1 año (Iniciando en docencia)</option>
                  <option value="1 a 3 años">1 a 3 años (Experiencia comprobada)</option>
                  <option value="3 a 5 años">3 a 5 años (Experiencia sólida)</option>
                  <option value="Más de 5 años">Más de 5 años (Docente Senior / Coach)</option>
                </select>
                <div className="absolute right-3.5 top-4 pointer-events-none border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-500" />
              </div>
            </div>

            {/* Público de Preferencia (Chips Compactos Multi-select) */}
            <div className="space-y-1.5">
              <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#001837] block">
                {isEn ? 'Target Audience (Select all that apply)' : 'Público Objetivo con el que te gusta trabajar'}
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {['Adultos', 'Niños y Teens', 'Empresas / Corporativo', 'Todos'].map(aud => {
                  const isSel = formData.audiencePreference.includes(aud);
                  return (
                    <button
                      key={aud}
                      type="button"
                      onClick={() => toggleArrayItem('audiencePreference', aud)}
                      className={`py-2 px-2 rounded-xl text-xs font-heading font-bold transition-all text-center cursor-pointer ${
                        isSel
                          ? 'bg-[#4DC2DA] text-[#001837] shadow-[2px_2px_0px_#001837] border-0'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {aud} {isSel && '✓'}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Certificaciones o Título */}
            <div>
              <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#001837] block mb-1.5">
                {isEn ? 'Certifications or Degrees' : 'Certificaciones o Títulos (Opcional)'}
              </label>
              <div className="relative">
                <GraduationCap className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder={isEn ? "e.g. TEFL, CELTA, TESOL, Bachelor in Languages" : "ej. TEFL, CELTA, Licenciatura en Lenguas Modernas, Traductorado"}
                  value={formData.certifications}
                  onChange={e => updateField('certifications', e.target.value)}
                  className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-[#001837] focus:bg-white focus:outline-none focus:border-[#834296] transition-all"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-100">
              <button
                type="button"
                onClick={handleBack}
                className="text-slate-500 hover:text-[#001837] font-heading font-bold text-xs sm:text-sm px-3 py-2 rounded-xl transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{isEn ? 'Back' : 'Atrás'}</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="h-11 px-7 rounded-2xl bg-[#FFD203] text-[#001837] shadow-[3px_3px_0px_#EC9519] hover:bg-[#EC9519] font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>{isEn ? 'Continue' : 'Continuar'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PASO 3: DISPONIBILIDAD & FILOSOFÍA                                        */}
        {/* ========================================================================= */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-[#001837]">
                {isEn ? 'Availability & Style' : 'Disponibilidad y Estilo de Enseñanza'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {isEn ? 'Help us match you with the right schedule and students.' : 'Cuéntanos tus horarios disponibles y cómo te gusta conectar con tus alumnos.'}
              </p>
            </div>

            {/* Disponibilidad semanal (Dropdown Selector) */}
            <div>
              <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#001837] block mb-1.5">
                {isEn ? 'Weekly Hours Available *' : 'Horas Semanales Disponibles *'}
              </label>
              <div className="relative">
                <Clock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                <select
                  value={formData.availabilityHours}
                  onChange={e => updateField('availabilityHours', e.target.value)}
                  className="w-full h-11 pl-10 pr-8 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-[#001837] focus:bg-white focus:outline-none focus:border-[#834296] font-body-regular cursor-pointer appearance-none transition-all"
                >
                  <option value="5 a 10 hs (Part-time flexible)">5 a 10 hs / semana (Part-time flexible)</option>
                  <option value="10 a 20 horas / semana (Part-time)">10 a 20 horas / semana (Part-time regular)</option>
                  <option value="Más de 20 horas / semana">Más de 20 horas / semana (Dedicación amplia)</option>
                </select>
                <div className="absolute right-3.5 top-4 pointer-events-none border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-500" />
              </div>
            </div>

            {/* Franja horaria preferida */}
            <div className="space-y-1.5">
              <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#001837] block">
                {isEn ? 'Preferred Time Slots' : 'Franjas Horarias Preferidas'}
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {[
                  'Mañanas (7:00 AM - 12:00 PM)',
                  'Tardes (2:00 PM - 7:00 PM)',
                  'Noches (7:00 PM - 10:00 PM)'
                ].map(slot => {
                  const isSel = formData.preferredTimeSlot.includes(slot);
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => toggleArrayItem('preferredTimeSlot', slot)}
                      className={`py-2.5 px-2 rounded-xl text-xs font-heading font-bold transition-all text-center cursor-pointer ${
                        isSel
                          ? 'bg-[#834296] text-white shadow-[2px_2px_0px_#001837] border-0'
                          : 'bg-white text-slate-700 border border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {slot} {isSel && '✓'}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Enfoque / Filosofía */}
            <div>
              <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#001837] block mb-1.5">
                {isEn 
                  ? 'What makes your teaching style human and engaging?' 
                  : '¿Qué hace único tu estilo de enseñanza y cómo ayudas a perder el miedo a hablar?'}
              </label>
              <textarea
                rows={3}
                placeholder={isEn 
                  ? "Share a brief note about your conversation approach..." 
                  : "Cuéntanos brevemente cómo creas un ambiente de confianza en tus clases..."}
                value={formData.methodologyAlignment}
                onChange={e => updateField('methodologyAlignment', e.target.value)}
                className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-[#001837] focus:bg-white focus:outline-none focus:border-[#834296] transition-all resize-none font-body-regular"
              />
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-100">
              <button
                type="button"
                onClick={handleBack}
                className="text-slate-500 hover:text-[#001837] font-heading font-bold text-xs sm:text-sm px-3 py-2 rounded-xl transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{isEn ? 'Back' : 'Atrás'}</span>
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="h-11 px-7 rounded-2xl bg-[#FFD203] text-[#001837] shadow-[3px_3px_0px_#EC9519] hover:bg-[#EC9519] font-heading font-bold text-xs sm:text-sm transition-all cursor-pointer inline-flex items-center gap-2"
              >
                <span>{isEn ? 'Continue' : 'Continuar'}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* PASO 4: CV, LINKEDIN & ENVÍO FINAL                                        */}
        {/* ========================================================================= */}
        {step === 4 && (
          <div className="space-y-6 animate-in fade-in-50 duration-200">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-[#001837]">
                {isEn ? 'CV & Final Submission' : 'CV, Enlaces y Envío'}
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                {isEn ? 'Almost done! Share your professional profile link.' : '¡Casi listo! Comparte tu perfil profesional o enlace a tu hoja de vida.'}
              </p>
            </div>

            <div className="space-y-4">
              {/* Direct File Upload for CV */}
              <div>
                <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#001837] block mb-1.5">
                  {isEn ? 'Upload your CV / Resume (PDF, DOCX) *' : 'Cargar Hoja de Vida / CV (PDF, DOCX) *'}
                </label>
                <div className="relative border-2 border-dashed border-slate-300 hover:border-[#834296] rounded-2xl p-5 bg-slate-50/60 hover:bg-[#FAF5FC] transition-all text-center cursor-pointer group">
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={e => {
                      if (e.target.files && e.target.files[0]) {
                        updateField('cvFileName', e.target.files[0].name);
                        if (!formData.linkedinOrCvUrl) {
                          updateField('linkedinOrCvUrl', `Archivo cargado: ${e.target.files[0].name}`);
                        }
                      }
                    }}
                    className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                  />
                  {formData.cvFileName ? (
                    <div className="flex items-center justify-center gap-2.5 text-[#834296]">
                      <FileText className="w-6 h-6 shrink-0" />
                      <div className="text-left">
                        <span className="font-heading font-bold text-xs sm:text-sm block text-[#001837]">{formData.cvFileName}</span>
                        <span className="text-[11px] text-[#834296] font-medium">
                          {isEn ? 'Click or drag to change file' : 'Clic o arrastra para cambiar archivo'}
                        </span>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-[#16A34A] ml-2 shrink-0" />
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center space-y-1.5">
                      <div className="w-10 h-10 rounded-full bg-white shadow-xs flex items-center justify-center text-[#834296] group-hover:scale-110 transition-transform">
                        <UploadCloud className="w-5 h-5" />
                      </div>
                      <p className="text-xs sm:text-sm font-heading font-bold text-[#001837]">
                        {isEn ? 'Click to upload your CV' : 'Haz clic o arrastra tu CV aquí'}
                      </p>
                      <p className="text-[11px] text-slate-500 font-body-regular">
                        {isEn ? 'Supported formats: PDF, DOCX (Max. 10MB)' : 'Formatos soportados: PDF, DOCX (Máx. 10MB)'}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* O Enlace Alternativo a LinkedIn o Google Drive */}
              <div>
                <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-slate-600 block mb-1.5">
                  {isEn ? 'Or share your LinkedIn / Google Drive link' : 'O comparte tu enlace de LinkedIn / Google Drive'}
                </label>
                <div className="relative">
                  <LinkIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    placeholder="https://linkedin.com/in/tu-perfil o https://drive.google.com/..."
                    value={formData.linkedinOrCvUrl}
                    onChange={e => updateField('linkedinOrCvUrl', e.target.value)}
                    className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-[#001837] focus:bg-white focus:outline-none focus:border-[#834296] transition-all font-body-regular"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#001837] block mb-1.5">
                  {isEn ? 'Video Introduction Link (Loom/YouTube/Drive) - Optional' : 'Video de Presentación Breve (Loom / YouTube / Drive) - Opcional'}
                </label>
                <div className="relative">
                  <Globe className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="url"
                    placeholder="https://www.loom.com/share/..."
                    value={formData.videoIntroUrl}
                    onChange={e => updateField('videoIntroUrl', e.target.value)}
                    className="w-full h-11 pl-10 pr-4 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-[#001837] focus:bg-white focus:outline-none focus:border-[#834296] transition-all font-body-regular"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-heading font-extrabold uppercase tracking-wider text-[#001837] block mb-1.5">
                  {isEn ? 'Why do you want to join Yes You Can Languages?' : '¿Por qué te gustaría sumarte a Yes You Can Languages?'}
                </label>
                <textarea
                  rows={2}
                  placeholder={isEn ? "Anything else you'd like to share with the team..." : "Un mensaje breve para el equipo de selección..."}
                  value={formData.motivationMessage}
                  onChange={e => updateField('motivationMessage', e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-slate-50/50 text-xs sm:text-sm text-[#001837] focus:bg-white focus:outline-none focus:border-[#834296] transition-all resize-none font-body-regular"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-slate-100">
              <button
                type="button"
                onClick={handleBack}
                className="text-slate-500 hover:text-[#001837] font-heading font-bold text-xs sm:text-sm px-3 py-2 rounded-xl transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>{isEn ? 'Back' : 'Atrás'}</span>
              </button>

              <button
                type="submit"
                disabled={isSubmitting || !formData.linkedinOrCvUrl}
                className="h-12 px-8 rounded-2xl bg-[#FFD203] text-[#001837] shadow-[3px_3px_0px_#EC9519] hover:bg-[#EC9519] active:translate-x-[1px] active:translate-y-[1px] font-heading font-extrabold text-sm transition-all cursor-pointer inline-flex items-center gap-2.5 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>{isEn ? 'Submitting...' : 'Enviando postulación...'}</span>
                ) : (
                  <>
                    <span>{isEn ? 'Submit Application' : 'Enviar mi postulación'}</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
    </>
  );
};
