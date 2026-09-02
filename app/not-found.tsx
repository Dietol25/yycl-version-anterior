"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';
import { EnglishCategoryTabs } from '@/components/navigation/EnglishCategoryTabs';

export default function NotFound() {
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en');

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />
      {isEn && <EnglishCategoryTabs />}

      <main className="flex-1 flex items-center justify-center py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#FDF8F3] via-white to-white">
        <div className="max-w-2xl mx-auto px-5 text-center space-y-6">
          
          {/* Official 404 Illustration from Miscelanea */}
          <div className="flex justify-center select-none">
            <img
              src="/assets/404.png"
              alt={isEn ? "404 - Page not found" : "404 - Página no encontrada"}
              className="w-full max-w-[360px] sm:max-w-[440px] h-auto object-contain"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
            {isEn ? "Oops! This page took off without telling us." : "¡Ups! Esta página se fue de viaje sin avisar."}
          </h1>

          {/* Subtitle */}
          <div className="space-y-1 text-sm sm:text-base text-slate-600 font-body-large max-w-lg mx-auto leading-relaxed">
            {isEn ? (
              <>
                <p>Don't worry — you don't have to lose your way.</p>
                <p>Book your no-cost interview and get your language journey started.</p>
              </>
            ) : (
              <>
                <p>Pero tú no tienes que perderte el rumbo.</p>
                <p>Agenda tu entrevista y arrancá el tuyo.</p>
              </>
            )}
          </div>

          {/* Tagline */}
          <p className="font-heading font-bold text-xs sm:text-sm text-[#834296]">
            Sí puedes. Yes You Can.
          </p>

          {/* CTAs Stack Balanced & No-wrap */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto">
            <Link href={isEn ? "/en/agendar" : "/agendar"} className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto font-heading font-bold text-xs sm:text-sm px-7 h-12 shadow-[3px_3px_0px_#EC9519] whitespace-nowrap"
              >
                {isEn ? "Book your interview" : "Agenda tu entrevista gratuita"}
              </Button>
            </Link>

            <Link href={isEn ? "/en" : "/"} className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="md"
                className="w-full sm:w-auto font-heading font-bold text-xs sm:text-sm px-7 h-12 shadow-[3px_3px_0px_#001837] whitespace-nowrap"
              >
                {isEn ? "← Back to Home" : "← Volver al inicio"}
              </Button>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
