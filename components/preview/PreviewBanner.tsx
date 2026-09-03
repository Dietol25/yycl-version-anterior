"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sparkles, ArrowRight, Eye, ArrowLeft } from 'lucide-react';

export const PreviewBanner = () => {
  const pathname = usePathname();
  const isComoFunciona = pathname?.includes('como-funciona');

  return (
    <div className="sticky top-0 z-50 bg-[#001837] text-white border-b-2 border-[#FFD203] px-3 sm:px-4 py-2 shadow-md">
      <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 bg-[#FFD203] text-[#001837] font-heading font-black px-2 py-0.5 rounded-full text-[10px] tracking-wide uppercase">
            <Sparkles className="w-3 h-3" />
            Fase 2 Preview
          </span>
          <span className="font-heading font-semibold text-slate-200 truncate">
            Propuesta Alternativa: <strong>Jitter (Motion) + Sofi Health + Lexington</strong>
          </span>
        </div>

        <div className="flex items-center gap-2.5 shrink-0">
          <Link
            href={isComoFunciona ? '/preview' : '/preview/como-funciona'}
            className="inline-flex items-center gap-1 text-[#FFD203] hover:underline font-heading font-bold"
          >
            <span>{isComoFunciona ? 'Ver Home alternativo' : 'Ver Cómo Funciona alternativo'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
          <span className="text-white/30">|</span>
          <Link
            href={isComoFunciona ? '/como-funciona' : '/'}
            className="inline-flex items-center gap-1 text-slate-300 hover:text-white font-medium"
          >
            <ArrowLeft className="w-3 h-3" />
            <span>Volver a versión actual</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
