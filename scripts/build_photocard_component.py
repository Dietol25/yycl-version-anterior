import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

write_file('components/ui/PhotoCard.tsx', """import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge, BadgeType } from '@/components/ui/Badge';

export type PhotoCardCategory = 'default' | 'kids' | 'empresas' | 'conversacion';

export interface PhotoCardProps {
  category?: PhotoCardCategory;
  imageSrc?: string;
  imageAlt?: string;
  badgeText?: string;
  title: string;
  hasCheckmark?: boolean;
  subtitle?: string;
  description: string;
  href: string;
  linkText?: string;
  hasButton?: boolean;
  buttonText?: string;
  className?: string;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({
  category = 'default',
  imageSrc,
  imageAlt = 'YYCL Modalidad',
  badgeText,
  title,
  hasCheckmark = true,
  subtitle,
  description,
  href,
  linkText = 'Más información →',
  hasButton = false,
  buttonText = 'Ver curso',
  className = '',
}) => {
  // Top accent stripe per category
  const getTopStripeColor = () => {
    switch (category) {
      case 'kids':
        return 'border-t-[#4DC2DA]';
      case 'empresas':
        return 'border-t-[#001837]';
      case 'conversacion':
      case 'default':
      default:
        return 'border-t-[#FFD203]';
    }
  };

  // Badge mapping
  const renderBadge = () => {
    if (!badgeText) return null;

    let badgeVariant: BadgeType = 'conversacion';
    if (category === 'kids') badgeVariant = 'kids';
    if (category === 'empresas') badgeVariant = 'empresas';

    return (
      <div className="absolute top-3.5 left-3.5 z-10">
        <Badge type={badgeVariant} label={badgeText} size="sm" />
      </div>
    );
  };

  return (
    <div
      className={`bg-white rounded-3xl overflow-hidden border border-black/10 border-t-4 ${getTopStripeColor()} shadow-[3px_3px_0px_#001837] flex flex-col justify-between hover:-translate-y-1 transition-all duration-200 ${className}`}
    >
      {/* 1. Top Media Area */}
      <div className="relative w-full h-48 sm:h-52 bg-slate-100/80 flex items-center justify-center overflow-hidden p-3 select-none">
        {renderBadge()}

        {imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-400">
            <span className="text-xs font-heading font-medium uppercase tracking-wider">Foto</span>
          </div>
        )}
      </div>

      {/* 2. Body Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          {/* Title with Checkmark */}
          <div className="flex items-center gap-1.5">
            <h3 className="text-xl font-heading font-extrabold text-[#001837] tracking-tight">
              {title}
            </h3>
            {hasCheckmark && (
              <span className="text-[#16A34A] flex items-center" aria-label="Verificado">
                <Check className="w-5 h-5 stroke-[2.5]" />
              </span>
            )}
          </div>

          {/* Subtitle / Eyebrow */}
          {subtitle && (
            <p className="text-xs font-heading font-semibold text-[#3C4C92]">
              {subtitle}
            </p>
          )}

          {/* Description */}
          <p className="text-xs sm:text-[13px] font-body-regular text-slate-600 leading-relaxed pt-1">
            {description}
          </p>
        </div>

        {/* 3. Footer Action */}
        <div className="pt-2 flex items-center justify-between">
          <Link
            href={href}
            className="text-xs font-heading font-semibold text-[#3C4C92] hover:text-[#001837] transition-colors"
          >
            {linkText}
          </Link>

          {hasButton && (
            <Link href={href}>
              <Button
                variant="primary"
                size="sm"
                className="font-heading font-bold text-xs h-9 px-4 py-1.5 shadow-[2px_2px_0px_#EC9519]"
              >
                {buttonText}
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
""")

print("PhotoCard component built with all variants, categories, badges, checkmarks and button states")
