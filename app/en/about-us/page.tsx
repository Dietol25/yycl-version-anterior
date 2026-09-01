import React from 'react';
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
