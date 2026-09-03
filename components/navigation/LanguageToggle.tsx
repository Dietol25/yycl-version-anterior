"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SpainFlag, UsaFlag } from '@/components/icons/FlagIcons';

export const LanguageToggle = () => {
  const pathname = usePathname() || '/';
  const isEn = pathname.startsWith('/en');

  // Mapeo inteligente y determinista de rutas según el idioma activo
  const getTargetHref = (toEn: boolean): string => {
    if (!toEn) {
      // Rutas en inglés a español
      if (pathname === '/en' || pathname === '/en/' || pathname === '/en/spanish-classes') return '/';
      if (pathname === '/en/english-classes') return '/planes';
      if (pathname === '/en/spanish-classes-kids') return '/kids';
      if (pathname === '/en/about-us') return '/sobre-yycl';
      if (pathname === '/en/agendar') return '/agendar';
      if (pathname === '/en/join-our-team') return '/trabaja-con-nosotros';
      return '/';
    } else {
      // Rutas en español a inglés
      if (pathname === '/' || pathname === '/como-funciona') return '/en';
      if (pathname === '/planes') return '/en/english-classes';
      if (pathname === '/kids') return '/en/spanish-classes-kids';
      if (pathname === '/sobre-yycl' || pathname === '/profesores') return '/en/about-us';
      if (pathname === '/agendar') return '/en/agendar';
      if (pathname === '/trabaja-con-nosotros') return '/en/join-our-team';
      return '/en';
    }
  };

  const targetHref = getTargetHref(!isEn);
  const titleText = isEn ? 'Switch to Spanish' : 'Cambiar a sitio en inglés (Learn Spanish & English)';
  const ariaText = isEn ? 'Switch to Spanish language website' : 'Cambiar al sitio web en inglés';

  return (
    <div className="flex items-center justify-center min-h-[44px] py-1">
      <Link
        href={targetHref}
        prefetch={true}
        title={titleText}
        aria-label={ariaText}
        className="relative inline-flex items-center w-[74px] sm:w-[82px] h-[34px] sm:h-[38px] bg-white border-2 border-[#001837] rounded-full p-[2px] cursor-pointer select-none shadow-[2px_2px_0px_#001837] hover:shadow-[1px_1px_0px_#001837] active:translate-x-[0.5px] active:translate-y-[0.5px] shrink-0 overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#834296]/40 transition-shadow"
      >
        {/* Label ES (Lado izquierdo, visible cuando está en modo EN) */}
        <span
          className={`w-1/2 text-center text-[11px] sm:text-xs font-heading font-black tracking-tight text-[#001837] transition-all duration-300 ease-out select-none ${
            isEn ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-75 -translate-x-1.5 pointer-events-none'
          }`}
        >
          ES
        </span>

        {/* Label EN (Lado derecho, visible cuando está en modo ES) */}
        <span
          className={`w-1/2 text-center text-[11px] sm:text-xs font-heading font-black tracking-tight text-[#001837] transition-all duration-300 ease-out select-none ${
            isEn ? 'opacity-0 scale-75 translate-x-1.5 pointer-events-none' : 'opacity-100 scale-100 translate-x-0'
          }`}
        >
          EN
        </span>

        {/* Sliding Tactile Knob */}
        <div
          className={`absolute top-[2px] left-[2px] w-[26px] sm:w-[30px] h-[26px] sm:h-[30px] rounded-full border border-[#001837] shadow-[1px_1px_0px_#001837] overflow-hidden flex items-center justify-center bg-white transition-transform duration-300 ease-[cubic-bezier(0.34,1.4,0.64,1)] will-change-transform ${
            isEn ? 'translate-x-[40px] sm:translate-x-[46px]' : 'translate-x-0'
          }`}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Indicador bandera España en ES */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-250 ease-out ${
                isEn ? 'opacity-0 rotate-90 scale-50 pointer-events-none' : 'opacity-100 rotate-0 scale-100'
              }`}
            >
              <SpainFlag size={26} />
            </div>

            {/* Indicador bandera USA en EN */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-250 ease-out ${
                isEn ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50 pointer-events-none'
              }`}
            >
              <UsaFlag size={26} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
