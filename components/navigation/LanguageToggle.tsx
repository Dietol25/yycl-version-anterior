"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SpainFlag, UsaFlag } from '@/components/icons/FlagIcons';

export const LanguageToggle = () => {
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en');

  return (
    <Link
      href={isEn ? '/' : '/en'}
      className="relative inline-flex items-center w-[84px] h-[36px] bg-white border border-black/15 rounded-full p-1 transition-all cursor-pointer select-none shadow-xs hover:border-[#001837]"
      title={isEn ? 'Cambiar a Español' : 'Switch to English'}
    >
      {/* Background text: EN on right when ES is active, ES on left when EN is active */}
      <span
        className={`w-1/2 text-center text-xs font-heading font-bold text-[#3C4C92] transition-opacity ${
          isEn ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        ES
      </span>
      <span
        className={`w-1/2 text-center text-xs font-heading font-bold text-[#3C4C92] transition-opacity ${
          isEn ? 'opacity-0 pointer-events-none' : 'opacity-100'
        }`}
      >
        EN
      </span>

      {/* Sliding Knob (28x28 circular knob with flag and keycap shadow) */}
      <div
        className={`absolute top-[3px] w-[28px] h-[28px] rounded-full shadow-[1px_1px_0px_#001837] border border-black/10 overflow-hidden flex items-center justify-center transition-transform duration-200 ${
          isEn ? 'left-[49px]' : 'left-[3px]'
        }`}
      >
        {isEn ? <UsaFlag size={28} /> : <SpainFlag size={28} />}
      </div>
    </Link>
  );
};
