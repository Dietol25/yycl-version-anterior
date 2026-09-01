"use client";

import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SliderControlsProps {
  total: number;
  current: number;
  onPrev: () => void;
  onNext: () => void;
  onSelect: (index: number) => void;
  className?: string;
}

export const SliderControls: React.FC<SliderControlsProps> = ({
  total,
  current,
  onPrev,
  onNext,
  onSelect,
  className = ''
}) => {
  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {/* Boton Circular Violeta Anterior (44px touch target) */}
      <button
        type="button"
        onClick={onPrev}
        className="w-11 h-11 rounded-full bg-yycl-purple hover:bg-[#6c327d] text-white flex items-center justify-center transition-all duration-200 active:scale-90 shadow-xs cursor-pointer shrink-0 touch-manipulation"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
      </button>

      {/* Dots Centrales */}
      <div className="flex items-center gap-2 px-1">
        {Array.from({ length: total }).map((_, idx) => {
          const isActive = current === idx;
          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelect(idx)}
              className={`p-1 transition-all duration-200 cursor-pointer touch-manipulation`}
              aria-label={`Ir al slide ${idx + 1}`}
            >
              <div
                className={`rounded-full transition-all ${
                  isActive
                    ? 'w-3 h-3 bg-[#001837] scale-110'
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Boton Circular Violeta Siguiente (44px touch target) */}
      <button
        type="button"
        onClick={onNext}
        className="w-11 h-11 rounded-full bg-yycl-purple hover:bg-[#6c327d] text-white flex items-center justify-center transition-all duration-200 active:scale-90 shadow-xs cursor-pointer shrink-0 touch-manipulation"
        aria-label="Slide siguiente"
      >
        <ChevronRight className="w-5 h-5 stroke-[2.5]" />
      </button>
    </div>
  );
};
