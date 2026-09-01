import React from 'react';
import { Star } from 'lucide-react';
import { Testimonial } from '@/lib/types';

export interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'oscuro';
  accent?: 'ninguno' | 'kids' | 'empresas';
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  variant = 'default',
  accent = 'ninguno',
  className = '',
}) => {
  const isOscuro = variant === 'oscuro';

  let borderStyle = 'border border-black/10';
  if (accent === 'kids') borderStyle = 'border-2 border-[#4DC2DA]';
  if (accent === 'empresas') borderStyle = 'border-2 border-[#001837]';

  const containerStyle = isOscuro
    ? 'bg-yycl-purple text-white shadow-[3px_3px_0px_#000000]'
    : `bg-white text-[#001837] ${borderStyle} shadow-[3px_3px_0px_#001837]`;

  return (
    <div className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between space-y-6 transition-all duration-200 ${containerStyle} ${className}`}>
      <div className="space-y-4">
        {/* Stars */}
        {isOscuro ? (
          /* Oscuro: Estrellas amarillas directo sin chip */
          <div className="flex items-center gap-1">
            {[...Array(testimonial.rating || 5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-[#FFD203] text-[#FFD203]" />
            ))}
          </div>
        ) : (
          /* Default: Chip morado con 5 estrellas amarillas */
          <div className="inline-flex items-center gap-1 bg-[#834296] px-2.5 py-1 rounded-full shrink-0">
            {[...Array(testimonial.rating || 5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#FFD203] text-[#FFD203]" />
            ))}
          </div>
        )}

        {/* Large Quote Mark & Quote Text */}
        <div className="space-y-1">
          <span className={`text-4xl font-serif leading-none block ${isOscuro ? 'text-white' : 'text-[#3C4C92]'}`}>
            “
          </span>
          <blockquote className={`text-[15px] font-heading font-medium leading-relaxed ${isOscuro ? 'text-white' : 'text-slate-800'}`}>
            {testimonial.quote}
          </blockquote>
        </div>
      </div>

      {/* Author Details */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-3">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full object-cover shrink-0 bg-slate-200"
          />
          <div>
            <span className={`block font-heading font-bold text-sm leading-tight ${isOscuro ? 'text-white' : 'text-[#001837]'}`}>
              {testimonial.name}
            </span>
            <span className={`block text-xs font-medium ${isOscuro ? 'text-white/80' : 'text-[#3C4C92]'}`}>
              {testimonial.role} {testimonial.company ? `· ${testimonial.company}` : ''}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between text-xs pt-1">
          <a
            href="#"
            className={`font-heading font-bold hover:underline inline-flex items-center gap-1 ${
              isOscuro ? 'text-white' : 'text-[#001837]'
            }`}
          >
            <span>Ver reseña original</span>
            <span>→</span>
          </a>

          {testimonial.countryFlag && (
            <span className="text-sm">{testimonial.countryFlag}</span>
          )}
        </div>
      </div>
    </div>
  );
};
