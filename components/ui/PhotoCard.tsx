import React from 'react';
import Link from 'next/link';
import { Check } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';

export type PhotoCardCategory = 'default' | 'kids' | 'empresas' | 'conversacion';

export interface PhotoCardProps {
  id?: string;
  category?: PhotoCardCategory;
  imageSrc?: string;
  imageAlt?: string;
  badgeText?: string;
  title: string;
  hasCheckmark?: boolean;
  subtitle?: string;
  description: string;
  referralNote?: string;
  href?: string;
  linkText?: string;
  hasButton?: boolean;
  buttonText?: string;
  className?: string;
  imageContainerClassName?: string;
  contentClassName?: string;
}

export const PhotoCard: React.FC<PhotoCardProps> = ({
  id,
  category = 'default',
  imageSrc,
  imageAlt = 'YYCL Modalidad',
  badgeText,
  title,
  hasCheckmark = true,
  subtitle,
  description,
  referralNote,
  href = '#',
  linkText,
  hasButton = false,
  buttonText = 'Ver curso',
  className = '',
  imageContainerClassName = 'h-56 sm:h-64',
  contentClassName = 'p-6 sm:p-7',
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

    if (badgeText === 'PERSONALIZADA' || badgeText === 'DÚO' || badgeText === 'GRUPAL') {
      return (
        <span className="inline-block text-[11px] font-heading font-extrabold uppercase tracking-wider px-3.5 py-1 rounded-full bg-white text-[#834296] shadow-xs border border-black/5">
          {badgeText}
        </span>
      );
    }

    let badgeVariant: 'kids' | 'empresas' | 'conversacion' = 'conversacion';
    if (category === 'kids') badgeVariant = 'kids';
    else if (category === 'empresas') badgeVariant = 'empresas';

    return (
      <Badge variant={badgeVariant}>
        {badgeText}
      </Badge>
    );
  };

  return (
    <div
      id={id}
      className={`bg-white rounded-3xl overflow-hidden border border-[#001837] border-t-4 ${getTopStripeColor()} shadow-[3px_3px_0px_#001837] flex flex-col justify-between hover:-translate-y-1 transition-all duration-200 ${className}`}
    >
      {/* 1. Photo Container */}
      <div className={`${imageContainerClassName} bg-slate-50 relative overflow-hidden flex items-center justify-center p-4 border-b border-[#001837]/15`}>
        {renderBadge() && (
          <div className="absolute top-4 left-4 z-10">
            {renderBadge()}
          </div>
        )}

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
      <div className={`${contentClassName} flex-1 flex flex-col justify-between space-y-4`}>
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

          {/* Secondary Referral Note */}
          {referralNote && (
            <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-snug pt-1 italic border-t border-slate-100 mt-2">
              {referralNote}
            </p>
          )}
        </div>

        {/* 3. Footer Action */}
        {(linkText || hasButton) && (
          <div className="pt-3 border-t border-slate-100 mt-2 flex items-center justify-between">
            {linkText && (
              <Link
                href={href}
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-heading font-bold text-[#3C4C92] hover:text-[#001837] hover:underline transition-colors"
              >
                <span>{linkText}</span>
              </Link>
            )}

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
        )}
      </div>
    </div>
  );
};
