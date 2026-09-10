import React from 'react';
import Link from 'next/link';

export const HomeAboutTeaser = () => {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/60 border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12 text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296] block">
            Sobre YYCL
          </span>

          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
            No vienes a aprender solo.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-body leading-relaxed max-w-xl mx-auto">
            Somos profesionales de la enseñanza, con criterio pedagógico y experiencia, que creemos que hablar un idioma se aprende hablándolo.
          </p>

          <div className="pt-2">
            <Link
              href="/sobre-yycl"
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-heading font-bold text-[#834296] hover:text-[#001837] hover:underline transition-all group cursor-pointer"
            >
              <span>Conoce a las personas detrás de YYCL</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
