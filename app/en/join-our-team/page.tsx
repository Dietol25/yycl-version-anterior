import React from 'react';
import type { Metadata } from 'next';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { TeacherApplicationWizard } from '@/components/application/TeacherApplicationWizard';
import { EnglishCategoryTabs } from '@/components/navigation/EnglishCategoryTabs';
import { Heart, Sparkles, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: "Join Our Teaching Team | Careers at YYCL",
  description: "We're looking for passionate language coaches who love conversation-first learning, genuine human connection, and empowering students.",
};

export default function EnglishJoinOurTeamPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />
      <EnglishCategoryTabs />

      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-10">
          
          {/* Header */}
          <div className="text-center space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
              <span className="w-2 h-2 rounded-full bg-[#834296]" />
              <span>Teaching Careers at YYCL</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#001837] tracking-tight">
              Join Our Teaching Team
            </h1>

            <p className="text-xs sm:text-base text-slate-600 font-body-regular max-w-xl mx-auto leading-relaxed">
              We're looking for passionate language coaches who love conversation-first learning, genuine human connection, and empowering students.
            </p>
          </div>

          {/* 3 Value Pillars (Compact on mobile) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-3 sm:p-5 border border-slate-200/80 shadow-2xs space-y-1 sm:space-y-2 text-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-purple-100 text-[#834296] flex items-center justify-center mx-auto">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-heading font-bold text-[11px] sm:text-sm text-[#001837] leading-tight">Human Culture</h3>
              <p className="text-[10px] sm:text-xs text-slate-600 font-body-regular hidden sm:block">
                Dynamic, non-rigid classes where making mistakes is part of growing.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-3 sm:p-5 border border-slate-200/80 shadow-2xs space-y-1 sm:space-y-2 text-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-100 text-[#EC9519] flex items-center justify-center mx-auto">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-heading font-bold text-[11px] sm:text-sm text-[#001837] leading-tight">100% Remote</h3>
              <p className="text-[10px] sm:text-xs text-slate-600 font-body-regular hidden sm:block">
                Teach from anywhere with schedules tailored to your lifestyle.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-3 sm:p-5 border border-slate-200/80 shadow-2xs space-y-1 sm:space-y-2 text-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-cyan-100 text-[#0284C7] flex items-center justify-center mx-auto">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-heading font-bold text-[11px] sm:text-sm text-[#001837] leading-tight">Real Community</h3>
              <p className="text-[10px] sm:text-xs text-slate-600 font-body-regular hidden sm:block">
                Ongoing pedagogical mentorship and team support.
              </p>
            </div>
          </div>

          {/* Wizard Form Component */}
          <TeacherApplicationWizard isEn={true} />

        </div>
      </main>

      <Footer />
    </div>
  );
}
