"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />

      <main className="flex-1 flex items-center justify-center py-20 lg:py-28 bg-gradient-to-b from-[#FDF8F3] via-white to-white">
        <div className="max-w-2xl mx-auto px-5 text-center space-y-7">
          {/* 404 Large Display */}
          <div className="font-heading font-black text-7xl sm:text-8xl lg:text-9xl text-[#FFD203] tracking-tight leading-none select-none drop-shadow-sm">
            404
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
            ¡Ups! Esta página se fue de viaje sin avisar.
          </h1>

          {/* Subtitle */}
          <div className="space-y-1 text-base sm:text-lg text-slate-600 font-body-large max-w-lg mx-auto leading-relaxed">
            <p>Pero tú no tienes que perderte el rumbo.</p>
            <p>Agenda tu entrevista y arrancá el tuyo.</p>
          </div>

          {/* Tagline */}
          <p className="font-heading font-bold text-sm sm:text-base text-[#3C4C92]">
            Sí puedes. Yes You Can.
          </p>

          {/* CTAs Stack */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link href="/agendar" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto font-heading font-bold text-sm sm:text-base px-8 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
              >
                Agenda tu entrevista gratuita
              </Button>
            </Link>

            <Link href="/" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="md"
                className="w-full sm:w-auto font-heading font-bold text-sm sm:text-base px-8 py-3.5 h-12 shadow-[3px_3px_0px_#001837]"
              >
                ← Volver al inicio
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
