import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { PRICING_PLANS, TESTIMONIALS } from '@/lib/data';
import { PricingCard } from '@/components/cards/PricingCard';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { ArrowRight, CheckCircle, Play, Star, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function EnglishHomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* Hero EN */}
      <section className="relative overflow-hidden bg-gradient-to-b from-yycl-navy via-yycl-navy-light to-yycl-navy py-16 lg:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs font-semibold text-slate-200">
                <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
                <span>Rated 4.9/5 by 1,200+ professionals across LATAM & worldwide</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-white tracking-tight leading-[1.15]">
                Lose the <span className="text-transparent bg-clip-text bg-gradient-to-r from-yycl-yellow via-amber-300 to-yycl-yellow">fear</span> of speaking English.
              </h1>

              <p className="text-base sm:text-lg text-slate-200 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Stuck when speaking in meetings or job interviews? At <strong>Yes You Can Languages (YYCL)</strong> you speak from minute 1 with certified native and bilingual coaches.
              </p>

              <div className="flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start pt-2">
                <Link href="/en/agendar">
                  <Button variant="primary" size="lg" className="font-bold shadow-yycl-yellow" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    Book Free 15-min Diagnostic Class
                  </Button>
                </Link>
                <Link href="/como-funciona">
                  <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                    See How It Works
                  </Button>
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl p-4 bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                  alt="Online English Coach"
                  className="rounded-2xl w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy">
              Flexible Plans for Every Career Goal
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-2">
              No long-term contracts. 100% live video classes with verified certified instructors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRICING_PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
