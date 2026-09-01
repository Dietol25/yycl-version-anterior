import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

write_file('components/booking/BookingWizard.tsx', """\"use client\";

import React, { useState } from 'react';
import { CheckCircle2, Calendar, Clock, Sparkles, Video, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { FormInput } from '@/components/ui/FormInput';
import { Badge } from '@/components/ui/Badge';

const SERVICE_OPTIONS = [
  {
    id: 'diagnostic',
    title: 'Diagnóstico de Nivel Oral 1-a-1',
    duration: '15 minutos',
    price: 'GRATIS',
    badge: 'RECOMENDADO',
    desc: 'Evaluación rápida de tus fortalezas y mapa de ruta para hablar fluido.',
    icon: '🎯'
  },
  {
    id: 'personalizado',
    title: 'Clase Demo Personalizada 1-a-1',
    duration: '45 minutos',
    price: 'COP $45.000',
    badge: '100% EXCLUSIVO',
    desc: 'Sesión intensiva con profesor nativo enfocada en tu meta laboral.',
    icon: '⚡'
  },
  {
    id: 'b2b',
    title: 'Consulta B2B para Empresas',
    duration: '30 minutos',
    price: 'GRATIS',
    badge: 'CORPORATIVO',
    desc: 'Propuesta a la medida para capacitar a tu equipo con métricas de ROI.',
    icon: '🏢'
  }
];

const TIME_SLOTS = [
  '08:00 AM', '09:00 AM', '10:30 AM', '11:30 AM',
  '02:00 PM', '03:30 PM', '05:00 PM', '06:30 PM', '08:00 PM'
];

const DATES = [
  { dayName: 'Hoy', dayNum: '31', fullDate: '2026-08-31' },
  { dayName: 'Mañana', dayNum: '01', fullDate: '2026-09-01' },
  { dayName: 'Mié', dayNum: '02', fullDate: '2026-09-02' },
  { dayName: 'Jue', dayNum: '03', fullDate: '2026-09-03' },
  { dayName: 'Vie', dayNum: '04', fullDate: '2026-09-04' },
  { dayName: 'Sáb', dayNum: '05', fullDate: '2026-09-05' },
];

export const BookingWizard = () => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState('diagnostic');
  const [selectedDate, setSelectedDate] = useState('2026-09-01');
  const [selectedTime, setSelectedTime] = useState('10:30 AM');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    whatsapp: '',
    currentLevel: 'Intermedio básico (B1)',
    goal: 'Mejorar fluidez para trabajo remoto',
  });

  const selectedServiceObj = SERVICE_OPTIONS.find(s => s.id === selectedService) || SERVICE_OPTIONS[0];

  const handleNext = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
      <div className="bg-yycl-navy text-white p-6 sm:p-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-yycl-yellow text-yycl-navy font-extrabold text-sm flex items-center justify-center font-heading">
              {step}
            </span>
            <span className="font-heading font-bold text-sm sm:text-base text-slate-200">
              Paso {step} de 4 · {
                step === 1 ? 'Elige tu tipo de sesión' :
                step === 2 ? 'Selecciona fecha y hora' :
                step === 3 ? 'Ingresa tus datos' : '¡Reserva Confirmada!'
              }
            </span>
          </div>
          <span className="text-xs text-yycl-cyan font-bold tracking-wider uppercase">
            {step === 4 ? '100% Completado' : `${step * 25}% completado`}
          </span>
        </div>

        <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
          <div
            className="bg-gradient-to-r from-yycl-yellow to-yycl-cyan h-full transition-all duration-300 rounded-full"
            style={{ width: `${step * 25}%` }}
          />
        </div>
      </div>

      <div className="p-6 sm:p-8">
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-yycl-navy">
                ¿Qué tipo de sesión deseas agendar?
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Todas nuestras sesiones son individuales y 100% en vivo a través de Google Meet o Zoom.
              </p>
            </div>

            <div className="space-y-3">
              {SERVICE_OPTIONS.map((opt) => {
                const isSelected = selectedService === opt.id;
                return (
                  <div
                    key={opt.id}
                    onClick={() => setSelectedService(opt.id)}
                    className={`cursor-pointer rounded-2xl p-5 border-2 transition-all flex items-start justify-between gap-4 ${
                      isSelected
                        ? 'border-yycl-yellow bg-amber-50/40 shadow-md ring-2 ring-yycl-yellow/20'
                        : 'border-slate-200 bg-white hover:border-slate-300'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      <span className="text-2xl mt-0.5">{opt.icon}</span>
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-heading font-bold text-base text-yycl-navy">
                            {opt.title}
                          </h3>
                          <Badge variant={opt.badge === 'RECOMENDADO' ? 'yellow' : 'purple'} size="sm">
                            {opt.badge}
                          </Badge>
                        </div>
                        <p className="text-xs text-slate-600 mt-1">{opt.desc}</p>
                        <div className="flex items-center gap-4 mt-2 text-xs font-semibold text-slate-500">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3.5 h-3.5 text-yycl-purple" />
                            {opt.duration}
                          </span>
                          <span className="text-emerald-600 font-bold">{opt.price}</span>
                        </div>
                      </div>
                    </div>

                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-1 ${
                      isSelected ? 'border-yycl-navy bg-yycl-navy text-yycl-yellow' : 'border-slate-300'
                    }`}>
                      {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-yycl-yellow" />}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex justify-end">
              <Button
                variant="primary"
                size="md"
                onClick={() => setStep(2)}
                className="font-bold"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Continuar a Horarios
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-yycl-navy">
                Elige el día y la hora más conveniente
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Zona horaria: <strong className="text-yycl-navy">América/Bogotá (GMT-5)</strong>
              </p>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                1. Selecciona el Día
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {DATES.map((d) => {
                  const active = selectedDate === d.fullDate;
                  return (
                    <button
                      key={d.fullDate}
                      type="button"
                      onClick={() => setSelectedDate(d.fullDate)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        active
                          ? 'bg-yycl-navy text-white border-yycl-navy shadow-md ring-2 ring-yycl-yellow'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span className="block text-xs font-medium opacity-80">{d.dayName}</span>
                      <span className="block text-lg font-bold font-heading mt-0.5">{d.dayNum}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                2. Selecciona la Hora
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-3 gap-2.5">
                {TIME_SLOTS.map((slot) => {
                  const active = selectedTime === slot;
                  return (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setSelectedTime(slot)}
                      className={`py-2.5 px-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                        active
                          ? 'bg-yycl-yellow text-yycl-navy border-yellow-400 font-bold shadow-md ring-2 ring-yycl-navy/20'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-400'
                      }`}
                    >
                      <Clock className="w-3.5 h-3.5 opacity-70" />
                      <span>{slot}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <Button variant="ghost" size="md" onClick={handleBack} leftIcon={<ArrowLeft className="w-4 h-4" />}>
                Atrás
              </Button>
              <Button
                variant="primary"
                size="md"
                onClick={() => setStep(3)}
                className="font-bold"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Continuar a Mis Datos
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <form onSubmit={handleNext} className="space-y-5">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold font-heading text-yycl-navy">
                Tus datos de contacto
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Te enviaremos el link de acceso a Google Meet y recordatorio por WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput
                label="Nombre"
                required
                placeholder="Ej. Juan"
                value={formData.firstName}
                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
              />
              <FormInput
                label="Apellido"
                required
                placeholder="Ej. Pérez"
                value={formData.lastName}
                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormInput
                label="Correo Electrónico"
                type="email"
                required
                placeholder="juan@empresa.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
              <FormInput
                label="WhatsApp / Teléfono"
                type="tel"
                required
                placeholder="+57 300 123 4567"
                value={formData.whatsapp}
                onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5 text-left">
                <label className="block text-sm font-semibold text-yycl-navy font-heading">
                  ¿Nivel actual de inglés?
                </label>
                <select
                  value={formData.currentLevel}
                  onChange={(e) => setFormData({ ...formData, currentLevel: e.target.value })}
                  className="w-full h-12 px-4 bg-white text-yycl-navy rounded-xl border border-slate-200 focus:outline-none focus:ring-3 focus:ring-yycl-cyan/30 text-sm"
                >
                  <option value="A1">Cero / Principiante (A1)</option>
                  <option value="A2">Básico (A2) - Entiendo poco</option>
                  <option value="B1">Intermedio (B1) - Me bloqueo al hablar</option>
                  <option value="B2">Intermedio Alto (B2) - Necesito pulir fluidez</option>
                  <option value="C1">Avanzado (C1) - Preparación específica</option>
                </select>
              </div>

              <div className="space-y-1.5 text-left">
                <label className="block text-sm font-semibold text-yycl-navy font-heading">
                  ¿Objetivo principal?
                </label>
                <select
                  value={formData.goal}
                  onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                  className="w-full h-12 px-4 bg-white text-yycl-navy rounded-xl border border-slate-200 focus:outline-none focus:ring-3 focus:ring-yycl-cyan/30 text-sm"
                >
                  <option value="trabajo">Trabajo / Entrevistas de empleo</option>
                  <option value="fluidez">Fluidez conversacional general</option>
                  <option value="certificacion">Examen TOEFL / IELTS / CELPIP</option>
                  <option value="viaje">Viajes / Inmigración</option>
                  <option value="empresa">Capacitación corporativa</option>
                </select>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 flex items-center justify-between text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <Video className="w-5 h-5 text-yycl-purple" />
                <span className="font-semibold text-slate-700">
                  {selectedServiceObj.title} · {selectedDate} ({selectedTime})
                </span>
              </div>
              <span className="font-bold text-emerald-600">{selectedServiceObj.price}</span>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <Button variant="ghost" size="md" onClick={handleBack} leftIcon={<ArrowLeft className="w-4 h-4" />}>
                Atrás
              </Button>
              <Button
                variant="primary"
                size="md"
                type="submit"
                className="font-bold"
                rightIcon={<Sparkles className="w-4 h-4" />}
              >
                Confirmar y Reservar Cita
              </Button>
            </div>
          </form>
        )}

        {step === 4 && (
          <div className="text-center py-6 space-y-6">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center shadow-md animate-bounce">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div>
              <Badge variant="green" size="md" className="mb-2">
                ¡RESERVA CONFIRMADA!
              </Badge>
              <h2 className="text-2xl sm:text-3xl font-bold font-heading text-yycl-navy">
                ¡Nos vemos en clase, {formData.firstName || 'Estudiante'}!
              </h2>
              <p className="text-sm text-slate-600 max-w-md mx-auto mt-2">
                Hemos reservado tu espacio. Te enviamos el enlace de Google Meet a <strong>{formData.email || 'tu correo'}</strong> y un recordatorio por WhatsApp.
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left max-w-md mx-auto space-y-3">
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Servicio:</span>
                <span className="font-bold text-yycl-navy">{selectedServiceObj.title}</span>
              </div>
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Fecha y Hora:</span>
                <span className="font-bold text-yycl-navy">{selectedDate} · {selectedTime} (GMT-5)</span>
              </div>
              <div className="flex items-center justify-between text-xs pb-3 border-b border-slate-200">
                <span className="text-slate-500 font-medium">Modalidad:</span>
                <span className="font-bold text-yycl-purple">Online en Vivo (Google Meet)</span>
              </div>
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Costo Total:</span>
                <span className="font-extrabold text-emerald-600 text-sm">{selectedServiceObj.price}</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <a href="https://calendar.google.com" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center">
                <Button variant="secondary" size="md" className="font-bold gap-2">
                  <Calendar className="w-4 h-4 text-yycl-yellow" />
                  Agregar a Google Calendar
                </Button>
              </a>
              <Button variant="outline" size="md" onClick={() => setStep(1)}>
                Agendar otra sesión
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
""")
print('Wizard generated successfully')
