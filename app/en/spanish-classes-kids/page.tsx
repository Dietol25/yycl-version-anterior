import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { Sparkles, Gamepad2, Heart, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function SpanishClassesKidsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="bg-gradient-to-b from-yycl-navy to-yycl-purple-dark text-white py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-yycl-yellow block">
            Kids & Teens Program
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
            Spanish for Kids & Teens (Ages 6 to 16)
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            Gamified and fun 1-on-1 sessions designed to help children build lifelong bilingual fluency without stress.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
              <Gamepad2 className="w-8 h-8 text-yycl-yellow mx-auto mb-2" />
              <h3 className="font-bold font-heading text-yycl-navy text-lg">Interactive Play</h3>
              <p className="text-xs text-slate-600 mt-1">Games, songs, and storytelling tailored to young minds.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
              <Heart className="w-8 h-8 text-yycl-purple mx-auto mb-2" />
              <h3 className="font-bold font-heading text-yycl-navy text-lg">Patient Teachers</h3>
              <p className="text-xs text-slate-600 mt-1">Certified instructors trained in child pedagogy.</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-3xl border border-slate-200">
              <Sparkles className="w-8 h-8 text-yycl-cyan mx-auto mb-2" />
              <h3 className="font-bold font-heading text-yycl-navy text-lg">Parent Updates</h3>
              <p className="text-xs text-slate-600 mt-1">Clear progress reports after every learning milestone.</p>
            </div>
          </div>

          <Link href="/en/agendar">
            <Button variant="primary" size="lg" className="font-bold">
              Book a Free Trial Class for Your Child
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
