"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';
import { EnglishCategoryTabs } from '@/components/navigation/EnglishCategoryTabs';

export default function EnglishNotFoundPage() {
  return (
    <div className="h-dvh flex flex-col bg-white text-[#001837] overflow-hidden">
      <Navbar />

      <main className="flex-1 flex flex-col items-center justify-center px-5 py-3 sm:py-6 bg-gradient-to-b from-[#FDF8F3] via-white to-white overflow-hidden">
        <div className="max-w-xl mx-auto text-center flex flex-col items-center justify-center space-y-3 sm:space-y-4 my-auto">
          
          {/* Official 404 Illustration - Proporción equilibrada para viewport */}
          <div className="flex justify-center select-none">
            <img
              src="/assets/404.png"
              alt="404 - Page not found"
              className="w-full max-w-[190px] sm:max-w-[240px] md:max-w-[270px] h-auto object-contain"
            />
          </div>

          {/* Main Title */}
          <h1 className="text-xl sm:text-2xl md:text-3xl font-extrabold font-heading text-[#001837] tracking-tight leading-snug">
            Oops! This page took off without telling us.
          </h1>

          {/* Subtitle */}
          <div className="text-xs sm:text-sm text-slate-600 font-body-large max-w-md mx-auto leading-relaxed">
            <p>Don't worry — book your free consultation and get your language journey started.</p>
          </div>

          {/* Tagline */}
          <p className="font-heading font-bold text-xs text-[#834296]">
            Sí puedes. Yes You Can.
          </p>

          {/* CTAs Stack Balanced & No-wrap */}
          <div className="pt-1 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 w-full max-w-md mx-auto">
            <Link href="/en/agendar" className="w-full sm:w-auto">
              <Button
                variant="primary"
                size="sm"
                className="w-full sm:w-auto font-heading font-bold text-xs sm:text-sm px-6 h-10 sm:h-11 shadow-[2.5px_2.5px_0px_#EC9519] whitespace-nowrap"
              >
                Book your interview
              </Button>
            </Link>

            <Link href="/en" className="w-full sm:w-auto">
              <Button
                variant="secondary"
                size="sm"
                className="w-full sm:w-auto font-heading font-bold text-xs sm:text-sm px-6 h-10 sm:h-11 shadow-[2.5px_2.5px_0px_#001837] whitespace-nowrap"
              >
                ← Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer Minimalista de 1 sola línea para 404 (sin forzar scroll de 600px) */}
      <footer className="py-2.5 px-6 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400 shrink-0 bg-white">
        <span>© {new Date().getFullYear()} Yes You Can Languages</span>
        <Link href="/en" className="text-[#834296] font-semibold hover:underline">
          Go to Home →
        </Link>
      </footer>
    </div>
  );
}
