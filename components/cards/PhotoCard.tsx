import React from 'react';
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
