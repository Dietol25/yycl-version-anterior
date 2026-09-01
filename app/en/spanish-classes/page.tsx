import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function SpanishClassesPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="bg-yycl-navy text-white py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-yycl-yellow block">
            Spanish Immersion Program
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
            Learn Conversational Spanish with Native Latin American Coaches
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Tailored for expats, digital nomads, and executives living in or doing business with Latin America.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold font-heading text-yycl-navy">
                Speak Real Spanish from Day 1
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Forget dusty textbooks. Practice practical conversations for restaurants, business meetings, travel, and cultural integration in Colombia, Mexico, Argentina, and beyond.
              </p>
              <ul className="space-y-2 text-sm text-slate-700">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> 1-on-1 personalized private tutoring</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Flexible scheduling across all timezones (US & EU)</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> Colombian & Latin American native teachers</li>
              </ul>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-slate-100 h-80">
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=600"
                alt="Spanish Coach"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="text-center pt-8">
            <Link href="/en/agendar">
              <Button variant="primary" size="lg" className="font-bold">
                Book a Free 15-Minute Spanish Diagnostic
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
