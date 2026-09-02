"use client";

import React, { useState } from 'react';
import { FAQS } from '@/lib/data';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FaqSection = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-yycl-purple block mb-1">
            Preguntas Frecuentes
          </span>
          <h2 className="text-3xl font-extrabold font-heading text-yycl-navy">
            Resolvemos todas tus dudas
          </h2>
          <p className="text-sm text-slate-600 mt-2">
            Todo lo que necesitas saber antes de comenzar tu viaje hacia la fluidez.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-heading font-bold text-base text-yycl-navy hover:text-yycl-purple transition-colors cursor-pointer"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-yycl-yellow shrink-0" />
                    <span>{faq.q}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-yycl-purple' : ''
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 text-sm text-slate-600 border-t border-slate-100 leading-relaxed">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
