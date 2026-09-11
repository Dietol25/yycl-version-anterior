import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { BookingWizard } from '@/components/booking/BookingWizard';

export default function AgendarPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />

      <main className="flex-1 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto space-y-6">
          {/* Header Ligero y Aireado (Sin bloques oscuros pesados) */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
              <span className="w-2 h-2 rounded-full bg-[#834296]" />
              <span>Reserva fácil en 1 minuto</span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
              Agenda tu entrevista gratuita
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-body-regular max-w-md mx-auto leading-relaxed">
              30 minutos online 1 a 1 con un profesor de nuestro equipo por Google Meet. Diagnóstico y mapa de ruta sin compromiso.
            </p>
          </div>

          {/* Wizard Card */}
          <BookingWizard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
