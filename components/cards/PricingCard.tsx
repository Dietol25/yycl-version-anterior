import React from 'react';
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
