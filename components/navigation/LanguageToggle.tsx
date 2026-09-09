"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { SpainFlag, UsaFlag } from '@/components/icons/FlagIcons';

export const LanguageToggle = () => {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const isEn = pathname.startsWith('/en');

  // Estado optimista para reproducir la microanimación ANTES de la navegación
  const [optimisticEn, setOptimisticEn] = useState(isEn);
  const [isSliding, setIsSliding] = useState(false);

  // Sincronizar si cambia de ruta por el navegador
  useEffect(() => {
    setOptimisticEn(isEn);
    setIsSliding(false);
  }, [isEn]);

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

  // Pre-cargar la ruta de destino para transición instantánea
  useEffect(() => {
    router.prefetch(targetHref);
  }, [targetHref, router]);

  const handleToggleClick = (e: React.MouseEvent) => {
    // Permitir apertura en nueva pestaña si presiona Ctrl o Cmd
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;

    e.preventDefault();
    if (isSliding) return;

    setIsSliding(true);
    setOptimisticEn(!optimisticEn);

    // Ejecutar transición con View Transition API (Figma Smart Animate Dissolve)
    setTimeout(() => {
      if (typeof document !== 'undefined' && 'startViewTransition' in document) {
        (document as any).startViewTransition(() => {
          router.push(targetHref);
        });
      } else {
        router.push(targetHref);
      }
    }, 240);
  };

  return (
    <div className="flex items-center justify-center">
      <Link
        href={targetHref}
        prefetch={true}
        onClick={handleToggleClick}
        title={titleText}
        aria-label={ariaText}
        className="relative inline-flex items-center w-[74px] sm:w-[88px] h-[36px] sm:h-[44px] bg-slate-100/90 border-2 border-[#001837] rounded-full p-[2px] cursor-pointer select-none shadow-[2px_2px_0px_#001837] hover:shadow-[3px_3px_0px_#001837] active:shadow-[1px_1px_0px_#001837] active:translate-x-[1px] active:translate-y-[1px] shrink-0 overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#834296]/50 transition-all duration-200 touch-manipulation"
      >
        {/* Label ES (Visible en modo EN cuando el switch viaja a la derecha) */}
        <span
          className={`w-1/2 text-center text-xs font-heading font-black tracking-wider text-[#001837] transition-all duration-250 ease-out select-none ${
            optimisticEn ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-90 -translate-x-1 pointer-events-none'
          }`}
        >
          ES
        </span>

        {/* Label EN (Visible en modo ES cuando el switch está a la izquierda) */}
        <span
          className={`w-1/2 text-center text-xs font-heading font-black tracking-wider text-[#001837] transition-all duration-250 ease-out select-none ${
            optimisticEn ? 'opacity-0 scale-90 translate-x-1 pointer-events-none' : 'opacity-100 scale-100 translate-x-0'
          }`}
        >
          EN
        </span>

        {/* Sliding Tactile Knob con Smart Animate Glide */}
        <div
          className={`absolute top-[2px] left-[2px] w-[28px] sm:w-[36px] h-[28px] sm:h-[36px] rounded-full border-2 border-[#001837] shadow-[1px_1px_0px_rgba(0,24,55,0.3)] overflow-hidden flex items-center justify-center bg-white transition-transform duration-280 ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform ${
            optimisticEn ? 'translate-x-[38px] sm:translate-x-[44px]' : 'translate-x-0'
          }`}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Bandera de España con Smart Dissolve */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-250 ease-out ${
                optimisticEn
                  ? 'opacity-0 scale-90 pointer-events-none'
                  : 'opacity-100 scale-100'
              }`}
            >
              <SpainFlag size={32} />
            </div>

            {/* Bandera de USA con Smart Dissolve */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-250 ease-out ${
                optimisticEn
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-90 pointer-events-none'
              }`}
            >
              <UsaFlag size={32} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};
