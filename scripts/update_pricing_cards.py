import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

write_file('components/cards/PricingCard.tsx', """import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PricingPlan } from '@/lib/types';
import { Button } from '@/components/ui/Button';
import { CheckList } from '@/components/ui/CheckList';

export interface PricingCardProps {
  plan: PricingPlan;
  variant?: 'default' | 'destacado' | 'violeta';
}

export const PricingCard: React.FC<PricingCardProps> = ({ plan, variant = 'default' }) => {
  // Check if plan has popular tag or explicit variant
  const isDestacado = variant === 'destacado' || plan.popular;
  const isVioleta = variant === 'violeta';

  let containerStyle = 'bg-white text-yycl-navy border-2 border-yycl-navy shadow-[4px_4px_0px_#001837]';
  let isDarkText = false;

  if (isDestacado) {
    // Gradient v2 (#EC9519 -> #834296, 135deg)
    containerStyle = 'bg-gradient-brand-v2 text-white border-2 border-yycl-navy shadow-[4px_4px_0px_#FFD203] lg:-translate-y-2';
    isDarkText = true;
  } else if (isVioleta) {
    containerStyle = 'bg-yycl-purple text-white border-2 border-yycl-navy shadow-[4px_4px_0px_#001837]';
    isDarkText = true;
  }

  return (
    <div className={`relative rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-200 ${containerStyle}`}>
      {isDestacado && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-yycl-yellow text-yycl-navy text-[11px] font-heading font-extrabold px-3 py-1 rounded-full border-2 border-yycl-navy shadow-[2px_2px_0px_#001837] uppercase tracking-wider">
            {plan.badge || 'MÁS POPULAR'}
          </span>
        </div>
      )}

      <div>
        <div className="mb-4">
          <h3 className={`font-heading-h3 ${isDarkText ? 'text-white' : 'text-yycl-navy'}`}>
            {plan.name}
          </h3>
          <p className={`text-xs font-body-small mt-1 min-h-[32px] ${isDarkText ? 'text-slate-100' : 'text-slate-500'}`}>
            {plan.subtitle}
          </p>
        </div>

        {/* Pricing text note without numeric price */}
        <div className={`my-4 pb-4 border-b ${isDarkText ? 'border-white/20' : 'border-slate-100'}`}>
          <span className={`text-sm font-heading font-bold ${isDarkText ? 'text-yycl-yellow' : 'text-yycl-navy'}`}>
            Precio personalizado
          </span>
          <p className={`text-xs font-body-small mt-1 ${isDarkText ? 'text-slate-200' : 'text-slate-600'}`}>
            {plan.description}
          </p>
        </div>

        <CheckList items={plan.features} variant={isDarkText ? 'dark' : 'light'} className="mb-6" />
      </div>

      <div className="pt-2">
        <Link href="/agendar">
          <Button
            variant={isDestacado ? 'primary' : (isDarkText ? 'primary' : 'secondary')}
            size="md"
            fullWidth
            className="font-bold text-sm h-12"
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            Agenda tu entrevista gratuita
          </Button>
        </Link>
      </div>
    </div>
  );
};
""")

print("PricingCard updated with Gradient v2 and exact variants")
