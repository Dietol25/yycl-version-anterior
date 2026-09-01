"use client";

import React from 'react';

export interface CompanyLogosSliderProps {
  title?: string;
  className?: string;
}

export const CompanyLogosSlider: React.FC<CompanyLogosSliderProps> = ({
  title = 'Empresas que confían en nosotros',
  className = '',
}) => {
  const logos = [
    { src: '/assets/logos/s4n.png', alt: 'S4N', desktopHeight: 'max-h-11', mobileHeight: 'max-h-9' },
    { src: '/assets/logos/srk-mexico.png', alt: 'SRK México', desktopHeight: 'max-h-13', mobileHeight: 'max-h-10' },
    { src: '/assets/logos/srk-argentina.png', alt: 'SRK Argentina', desktopHeight: 'max-h-13', mobileHeight: 'max-h-10' },
    { src: '/assets/logos/integrity.png', alt: 'Integrity Seguros', desktopHeight: 'max-h-12', mobileHeight: 'max-h-10' },
    { src: '/assets/logos/epam.png', alt: 'EPAM', desktopHeight: 'max-h-11', mobileHeight: 'max-h-9' },
    { src: '/assets/logos/ncc.png', alt: 'Net Connection Corp', desktopHeight: 'max-h-14', mobileHeight: 'max-h-11' },
  ];

  return (
    <section className={`py-12 sm:py-16 bg-white border-y border-[#D9E0E8] ${className}`}>
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12 text-center space-y-8">
        <p className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
          {title}
        </p>

        {/* Desktop View: Symmetrical 2 Rows of 3 Cards Grid (3x2) */}
        <div className="hidden md:grid grid-cols-3 gap-5 lg:gap-6 max-w-4xl mx-auto items-stretch">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="h-20 w-full px-6 py-2.5 bg-white rounded-2xl border border-[#D9E0E8] shadow-xs flex items-center justify-center hover:border-[#001837]/40 hover:-translate-y-0.5 transition-all duration-200"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className={`${logo.desktopHeight} w-auto max-w-[155px] object-contain select-none`}
              />
            </div>
          ))}
        </div>

        {/* Mobile View: Horizontal Smooth Auto-Scroll */}
        <div className="md:hidden relative overflow-hidden w-full mask-edges py-2">
          <div className="flex items-center gap-4 w-max animate-infinite-scroll">
            {[...logos, ...logos].map((logo, idx) => (
              <div
                key={idx}
                className="h-16 w-40 shrink-0 bg-white rounded-2xl border border-[#D9E0E8] shadow-xs px-4 py-2 flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className={`${logo.mobileHeight} max-w-[130px] object-contain select-none`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Instituciones y Voluntariado */}
        <div className="pt-6 border-t border-slate-100 max-w-2xl mx-auto space-y-1.5">
          <p className="text-xs font-heading font-extrabold uppercase tracking-wider text-slate-500">
            Voluntariado con:
          </p>
          <p className="text-xs sm:text-sm font-heading font-bold text-[#001837] leading-relaxed">
            Consulado de Colombia en San Francisco <span className="text-[#EC9519] mx-1 font-bold">·</span> Consulado de Colombia en Newark
          </p>
        </div>
      </div>
    </section>
  );
};
