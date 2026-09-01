"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';

export default function SpanishClassesKidsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-14 sm:py-18 lg:py-20 bg-gradient-to-b from-[#FDF8F3] via-white to-white">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-6 space-y-5 text-left">
                <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#4DC2DA]">
                  <span className="w-2 h-2 rounded-full bg-[#4DC2DA]" />
                  <span>Kids & Teens Spanish</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.12]">
                  Fun, Interactive Spanish for Kids & Teens
                </h1>

                <p className="text-base sm:text-lg text-slate-600 font-body-large max-w-lg leading-relaxed">
                  Games, storytelling, and natural conversations led by specialized coaches who make learning Spanish an engaging adventure.
                </p>

                <div className="pt-2">
                  <Link href="/agendar">
                    <Button
                      variant="primary"
                      size="md"
                      className="font-heading font-bold text-sm sm:text-base px-8 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                    >
                      Book Free Kids Diagnostic
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-6 flex justify-center">
                <div className="relative w-full max-w-[500px]">
                  <img
                    src="/assets/11_ENGLISH_VERSION/YYCL_EN_03_SPANISH_CLASSES_KIDS.png"
                    alt="Kids and teenagers learning Spanish playfully at YYCL"
                    className="w-full h-auto object-contain select-none"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 bg-slate-50 border-t border-slate-100 text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight">
              Give your child the lifelong gift of bilingualism.
            </h2>
            <div className="pt-2">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="md"
                  className="font-heading font-bold text-sm sm:text-base px-9 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                >
                  Book Free Kids Diagnostic
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
