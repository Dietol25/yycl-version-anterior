import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. Update TestimonialsGrid.tsx to use the 3 distinct DS variants (Oscuro Violeta, Default con Chip, Default con Acento)
write_file('components/sections/TestimonialsGrid.tsx', """import React from 'react';
import { TestimonialCard } from '@/components/cards/TestimonialCard';
import { TESTIMONIALS } from '@/lib/data';

export const TestimonialsGrid = () => {
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy tracking-tight">
            Resultados reales
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Lo que importa no es cuánto estudiaste antes, sino que esta vez sí lo lograste.
          </p>
        </div>

        {/* 2 Stat Counters */}
        <div className="flex items-center justify-center gap-12 sm:gap-20 mb-14 text-center">
          <div>
            <span className="block text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy">
              +1.000
            </span>
            <span className="block text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              estudiantes
            </span>
          </div>

          <div className="w-px h-12 bg-slate-200" />

          <div>
            <span className="block text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy">
              94-98%
            </span>
            <span className="block text-xs sm:text-sm text-slate-500 font-semibold mt-1">
              de satisfacción
            </span>
          </div>
        </div>

        {/* 3 Testimonial Cards with distinct DS variants:
            1. Card 1 (Yuliana): Variante Oscuro (#834296) con estrellas amarillas
            2. Card 2 (Nicolas): Variante Default (Blanca) con chip morado de 5 estrellas
            3. Card 3 (Diana): Variante Default con borde Cyan y chip morado de estrellas
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          <TestimonialCard
            testimonial={TESTIMONIALS[0]}
            variant="oscuro"
          />

          <TestimonialCard
            testimonial={TESTIMONIALS[1]}
            variant="default"
            accent="ninguno"
          />

          <TestimonialCard
            testimonial={TESTIMONIALS[2]}
            variant="default"
            accent="kids"
          />
        </div>
      </div>
    </section>
  );
};
""")

# 2. Update ModalidadesSection.tsx to render the 3 PricingCard variants:
#    1. Grupal -> Default Blanca (con checkmarks cyan y botón amarillo)
#    2. Personalizada -> Destacado Gradiente v2 (#EC9519 -> #834296) con badge MÁS POPULAR
#    3. Personalizada, en pareja (Dúo) -> Violeta (#834296)
write_file('components/sections/ModalidadesSection.tsx', """import React from 'react';
import Link from 'next/link';
import { PricingCard } from '@/components/cards/PricingCard';
import { PRICING_PLANS } from '@/lib/data';

export const ModalidadesSection = () => {
  return (
    <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
      <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-heading font-bold uppercase tracking-widest text-[#3C4C92]">
            Nuestros programas
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-yycl-navy tracking-tight">
            Modalidades
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            3 modalidades: grupal, personalizada o en dúo. El precio lo hablamos en tu entrevista gratuita.
          </p>
        </div>

        {/* 3 PricingCard Variants Grid:
            1. Grupal -> Variante Default (Blanca)
            2. Personalizada -> Variante Destacado (Gradiente v2 #EC9519 -> #834296) con Badge MÁS POPULAR
            3. Dúo -> Variante Violeta (#834296)
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto items-stretch">
          <PricingCard
            plan={PRICING_PLANS[0]}
            variant="default"
            hasCta={true}
          />

          <PricingCard
            plan={PRICING_PLANS[1]}
            variant="destacado"
            hasCta={true}
          />

          <PricingCard
            plan={PRICING_PLANS[2]}
            variant="violeta"
            hasCta={true}
          />
        </div>

        {/* Link Ver todos los planes */}
        <div className="text-center pt-10">
          <Link
            href="/planes"
            className="inline-flex items-center gap-1.5 font-heading font-bold text-sm text-yycl-navy hover:underline"
          >
            <span>Ver todos los planes</span>
            <span>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
""")

print("Applied 3 PricingCard variants and 3 TestimonialCard variants to Home page cleanly")
