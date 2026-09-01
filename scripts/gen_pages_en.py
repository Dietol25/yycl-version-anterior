import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. app/en/page.tsx
write_file('app/en/page.tsx', """import React from 'react';
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
""")

# 2. app/en/spanish-classes/page.tsx
write_file('app/en/spanish-classes/page.tsx', """import React from 'react';
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
""")

# 3. app/en/spanish-classes-kids/page.tsx
write_file('app/en/spanish-classes-kids/page.tsx', """import React from 'react';
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
""")

# 4. app/en/about-us/page.tsx
write_file('app/en/about-us/page.tsx', """import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { CtaBanner } from '@/components/sections/CtaBanner';
import { TEACHERS } from '@/lib/data';
import { TeamMemberCard } from '@/components/cards/TeamMemberCard';

export default function AboutUsPage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <section className="bg-yycl-navy text-white py-16 lg:py-20 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-yycl-yellow block">
            About Yes You Can Languages
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold font-heading">
            Empowering professionals to speak with confidence
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
            We are an online language academy committed to helping people unlock life-changing opportunities through conversational fluency.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-bold font-heading text-yycl-navy">
              Meet Our Certified Coaches
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEACHERS.map((t) => (
              <TeamMemberCard key={t.id} teacher={t} />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
      <Footer />
    </main>
  );
}
""")

# 5. app/en/agendar/page.tsx
write_file('app/en/agendar/page.tsx', """import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { BookingWizard } from '@/components/booking/BookingWizard';

export default function EnAgendarPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50">
      <Navbar />

      <section className="bg-yycl-navy text-white py-12 text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-yycl-yellow block">
            Fast 1-Minute Booking
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold font-heading">
            Book Your Live 1-on-1 Session
          </h1>
          <p className="text-sm text-slate-200">
            Select the time that best suits your routine. Live individual session on Google Meet.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <BookingWizard />
      </section>

      <Footer />
    </main>
  );
}
""")

print("English pages generated successfully")
