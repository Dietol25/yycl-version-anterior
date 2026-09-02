"use client";

import React, { useState, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { SpainFlag, UsaFlag } from '@/components/icons/FlagIcons';

export const LanguageToggle = () => {
  const pathname = usePathname();
  const router = useRouter();
  const currentIsEn = pathname?.startsWith('/en');

  // Estado optimista para reproducir la Smart Animation instantánea antes y durante el cambio de página
  const [animatingIsEn, setAnimatingIsEn] = useState<boolean>(currentIsEn);

  useEffect(() => {
    setAnimatingIsEn(currentIsEn);
  }, [pathname, currentIsEn]);

  // Mapeo inteligente de ruta para no perder el contexto al cambiar de idioma
  const getTargetHref = (toEn: boolean) => {
    if (!toEn) {
      if (pathname === '/en' || pathname === '/en/spanish-classes') return '/';
      if (pathname === '/en/english-classes') return '/planes';
      if (pathname === '/en/spanish-classes-kids') return '/kids';
      if (pathname === '/en/about-us') return '/sobre-yycl';
      if (pathname === '/en/agendar') return '/agendar';
      if (pathname === '/en/join-our-team') return '/trabaja-con-nosotros';
      return '/';
    } else {
      if (pathname === '/' || pathname === '/como-funciona') return '/en';
      if (pathname === '/planes') return '/en/english-classes';
      if (pathname === '/kids') return '/en/spanish-classes-kids';
      if (pathname === '/sobre-yycl' || pathname === '/profesores') return '/en/about-us';
      if (pathname === '/agendar') return '/en/agendar';
      if (pathname === '/trabaja-con-nosotros') return '/en/join-our-team';
      return '/en';
    }
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    const nextIsEn = !animatingIsEn;
    setAnimatingIsEn(nextIsEn);
    const target = getTargetHref(nextIsEn);
    
    // Navegación fluida de Next.js
    router.push(target);
  };

  return (
    <button
      type="button"
      onClick={handleToggle}
      className="relative inline-flex items-center w-[70px] sm:w-[78px] h-[32px] sm:h-[36px] bg-white border-2 border-[#001837] rounded-full p-[2px] cursor-pointer select-none shadow-[2px_2px_0px_#001837] hover:shadow-[1px_1px_0px_#001837] active:translate-x-[0.5px] active:translate-y-[0.5px] shrink-0 overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#834296]/30"
      title={animatingIsEn ? 'Cambiar a Español' : 'Switch to English'}
      aria-label={animatingIsEn ? 'Cambiar a Español' : 'Switch to English'}
    >
      {/* Label ES (Lado izquierdo, visible cuando está en modo EN) */}
      <span
        className={`w-1/2 text-center text-[11px] sm:text-xs font-heading font-black tracking-tight text-[#001837] transition-all duration-300 ease-out select-none ${
          animatingIsEn ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-75 -translate-x-1.5 pointer-events-none'
        }`}
      >
        ES
      </span>

      {/* Label EN (Lado derecho, visible cuando está en modo ES) */}
      <span
        className={`w-1/2 text-center text-[11px] sm:text-xs font-heading font-black tracking-tight text-[#001837] transition-all duration-300 ease-out select-none ${
          animatingIsEn ? 'opacity-0 scale-75 translate-x-1.5 pointer-events-none' : 'opacity-100 scale-100 translate-x-0'
        }`}
      >
        EN
      </span>

      {/* Sliding Tactile Knob con Smart Animate Spring Physics */}
      <div
        className={`absolute top-[2px] left-[2px] w-[24px] sm:w-[28px] h-[24px] sm:h-[28px] rounded-full border border-[#001837] shadow-[1px_1px_0px_#001837] overflow-hidden flex items-center justify-center bg-white transition-transform duration-400 ease-[cubic-bezier(0.34,1.4,0.64,1)] will-change-transform ${
          animatingIsEn ? 'translate-x-[38px] sm:translate-x-[44px]' : 'translate-x-0'
        }`}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          {/* Bandera España */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-350 ease-out ${
              animatingIsEn ? 'opacity-0 rotate-90 scale-50 pointer-events-none' : 'opacity-100 rotate-0 scale-100'
            }`}
          >
            <SpainFlag size={26} />
          </div>

          {/* Bandera USA */}
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-350 ease-out ${
              animatingIsEn ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50 pointer-events-none'
            }`}
          >
            <UsaFlag size={26} />
          </div>
        </div>
      </div>
    </button>
  );
};
