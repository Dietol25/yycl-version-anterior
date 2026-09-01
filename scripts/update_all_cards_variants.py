import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. PricingCard.tsx (3 exact variants: Default Blanca, Destacado Gradiente v2, Violeta Estándar)
write_file('components/cards/PricingCard.tsx', """import React from 'react';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { PricingPlan } from '@/lib/types';
import { Button } from '@/components/ui/Button';

export interface PricingCardProps {
  plan: PricingPlan;
  variant?: 'default' | 'destacado' | 'violeta';
  hasCta?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  plan,
  variant = 'default',
  hasCta = true,
}) => {
  const isDestacado = variant === 'destacado' || plan.popular;
  const isVioleta = variant === 'violeta';

  // 1. Default (Blanca con sombra neutral)
  let containerStyle = 'bg-white text-[#001837] border border-black/10 shadow-[3px_3px_0px_#001837]';
  let isDarkText = false;
  let titleColor = 'text-[#001837]';
  let subtitleColor = 'text-[#3C4C92]';
  let checkColor = 'text-[#4DC2DA]';

  // 2. Destacado (Gradiente de marca v2 #EC9519 -> #834296)
  if (isDestacado) {
    containerStyle = 'bg-gradient-brand-v2 text-white border border-black/10 shadow-[3px_3px_0px_#000000] lg:-translate-y-1';
    isDarkText = true;
    titleColor = 'text-white';
    subtitleColor = 'text-white/90';
    checkColor = 'text-[#4DC2DA]';
  }
  // 3. Violeta (Fondo #834296 sólido)
  else if (isVioleta) {
    containerStyle = 'bg-yycl-purple text-white border border-black/10 shadow-[3px_3px_0px_#000000]';
    isDarkText = true;
    titleColor = 'text-white';
    subtitleColor = 'text-white/90';
    checkColor = 'text-[#4DC2DA]';
  }

  return (
    <div className={`relative rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-200 ${containerStyle}`}>
      {/* Popular Badge */}
      {isDestacado && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-[#FFD203] text-[#001837] text-[11px] font-heading font-extrabold px-3.5 py-1 rounded-full shadow-[2px_2px_0px_#EC9519] uppercase tracking-wider">
            {plan.badge || 'MÁS POPULAR'}
          </span>
        </div>
      )}

      <div>
        <div className="mb-4">
          <h3 className={`font-heading-h3 ${titleColor}`}>
            {plan.name}
          </h3>
          <p className={`text-xs font-body-small mt-1 min-h-[32px] ${subtitleColor}`}>
            {plan.subtitle}
          </p>
        </div>

        {/* Benefits CheckList */}
        <ul className="space-y-2.5 my-6">
          {plan.features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2.5">
              <Check className={`w-4 h-4 ${checkColor} shrink-0 mt-0.5`} />
              <span className={`text-sm font-body-regular ${isDarkText ? 'text-white' : 'text-slate-700'}`}>
                {feat}
              </span>
            </li>
          ))}
        </ul>

        {/* Link Más información */}
        <div className="pb-4">
          <Link
            href="/planes"
            className={`inline-flex items-center gap-1 text-xs font-heading font-bold hover:underline ${
              isDarkText ? 'text-white' : 'text-[#001837]'
            }`}
          >
            <span>Más información</span>
            <span>→</span>
          </Link>
        </div>
      </div>

      {/* Button CTA */}
      {hasCta && (
        <div className="pt-2">
          <Link href="/agendar">
            <Button
              variant="primary"
              size="md"
              fullWidth
              className="font-bold text-sm h-12"
            >
              Agendar entrevista
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
};
""")

# 2. TestimonialCard.tsx (Exact 3 variants: Oscuro, Default, Default con Acento Kids/Empresas)
write_file('components/cards/TestimonialCard.tsx', """import React from 'react';
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
""")

# 3. PhotoCard.tsx (Exact spec with accent top bar, image, title + green check, subtitle, link)
write_file('components/cards/PhotoCard.tsx', """import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export interface PhotoCardProps {
  title: string;
  subtitle?: string;
  description: string;
  imageUrl?: string;
  imageAlt?: string;
  category?: 'kids' | 'empresas' | 'conversacion';
  withCta?: boolean;
  linkHref?: string;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({
  title,
  subtitle = 'Aprende junto a otros',
  description,
  imageUrl,
  imageAlt = 'YYCL Card',
  category,
  withCta = false,
  linkHref = '/planes',
}) => {
  // Category top accent bar and badges
  let accentBarColor = 'bg-[#FFD203]';
  let badgeColor = 'bg-[#FFD203] text-[#001837]';
  let badgeLabel = 'CONVERSACIÓN';

  if (category === 'kids') {
    accentBarColor = 'bg-[#4DC2DA]';
    badgeColor = 'bg-[#4DC2DA] text-[#001837]';
    badgeLabel = 'KIDS';
  } else if (category === 'empresas') {
    accentBarColor = 'bg-[#001837]';
    badgeColor = 'bg-[#001837] text-[#FFFFFF]';
    badgeLabel = 'EMPRESAS';
  }

  return (
    <div className="relative bg-white border border-black/10 rounded-3xl overflow-hidden shadow-[3px_3px_0px_#001837] flex flex-col justify-between max-w-[320px] w-full">
      {/* Accent top bar */}
      <div className={`w-full h-1.5 ${accentBarColor}`} />

      {/* Top Image area with optional Badge */}
      <div className="relative w-full h-44 bg-[#E0E0E0] overflow-hidden flex items-center justify-center">
        {imageUrl ? (
          <img src={imageUrl} alt={imageAlt} className="w-full h-full object-cover" />
        ) : (
          <span className="text-slate-500 font-heading font-semibold text-sm">Foto</span>
        )}

        {category && (
          <div className="absolute top-3 left-3">
            <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-heading font-extrabold uppercase tracking-wider ${badgeColor}`}>
              {badgeLabel}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <div className="flex items-center gap-1.5">
            <h4 className="font-heading-h4 text-[#001837] text-lg font-bold">
              {title}
            </h4>
            <Check className="w-4 h-4 text-[#16A34A] shrink-0" />
          </div>

          <p className="text-xs font-heading font-semibold text-[#3C4C92]">
            {subtitle}
          </p>

          <p className="text-xs font-body-small text-slate-600 leading-relaxed pt-1">
            {description}
          </p>
        </div>

        <div className="pt-3">
          <Link
            href={linkHref}
            className="inline-flex items-center gap-1 text-xs font-heading font-bold text-[#001837] hover:underline"
          >
            <span>Más información</span>
            <span>→</span>
          </Link>
        </div>

        {withCta && (
          <div className="pt-2">
            <Link href="/planes">
              <Button variant="primary" size="sm" fullWidth className="font-bold text-xs">
                Ver curso
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
""")

# 4. Badge.tsx (3 exact variants: Kids, Empresas, Conversación)
write_file('components/ui/Badge.tsx', """import React from 'react';

export interface BadgeProps {
  variant?: 'kids' | 'empresas' | 'conversacion';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'conversacion',
  children,
  className = '',
}) => {
  const variantStyles = {
    kids: 'bg-[#4DC2DA] text-[#001837]',
    empresas: 'bg-[#001837] text-[#FFFFFF]',
    conversacion: 'bg-[#FFD203] text-[#001837]',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-heading font-extrabold tracking-wider uppercase select-none ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
""")

# 5. PlayButton.tsx (Large Ø96 / Small Ø56)
write_file('components/ui/PlayButton.tsx', """import React from 'react';

export interface PlayButtonProps {
  size?: 'sm' | 'lg'; // sm = 56px, lg = 96px
  onClick?: () => void;
}

export const PlayButton: React.FC<PlayButtonProps> = ({ size = 'lg', onClick }) => {
  const isLarge = size === 'lg';
  const diameter = isLarge ? 'w-24 h-24' : 'w-14 h-14';
  const iconSize = isLarge ? 'w-8 h-8' : 'w-5 h-5';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${diameter} rounded-full bg-[#FFD203] shadow-[3px_3px_0px_#EC9519] hover:bg-[#EC9519] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none flex items-center justify-center transition-all cursor-pointer select-none`}
      aria-label="Reproducir video"
    >
      <svg
        className={`${iconSize} text-[#001837] ml-1`}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
  );
};
""")

print("PricingCard, TestimonialCard, PhotoCard, Badge, and PlayButton updated with exact Design System variants")
