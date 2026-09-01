import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. Update app/globals.css with exact typography scale and keycap shadows
write_file('app/globals.css', """@import "tailwindcss";

@theme {
  --color-yycl-navy: #001837;
  --color-yycl-yellow: #FFD203;
  --color-yycl-purple: #834296;
  --color-yycl-cyan: #4DC2DA;
  --color-yycl-blue-medium: #3C4C92;
  --color-yycl-amber: #EC9519;
  --color-yycl-cream: #FFE2C0;
  --color-yycl-white: #FFFFFF;
  --color-yycl-black-dark: #0D0D0D;

  --font-montserrat: var(--font-montserrat), sans-serif;
  --font-nunito: var(--font-nunito), sans-serif;

  /* Keycap Hard Shadows (sin difuminado, offset diagonal) */
  --shadow-keycap-sm: 2px 2px 0px #001837;
  --shadow-keycap: 4px 4px 0px #001837;
  --shadow-keycap-lg: 6px 6px 0px #001837;
  --shadow-keycap-yellow: 4px 4px 0px #FFD203;
  --shadow-keycap-purple: 4px 4px 0px #834296;
}

:root {
  --background: #ffffff;
  --foreground: #001837;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: var(--font-nunito), sans-serif;
  font-size: 16px;
  line-height: 1.6;
  overflow-x: hidden;
}

/* Escala Tipográfica Oficial Auditada (14 estilos reales) */
.font-display-hero {
  font-family: var(--font-montserrat), sans-serif;
  font-size: 56px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.02em;
}

.font-heading-h1 {
  font-family: var(--font-montserrat), sans-serif;
  font-size: 40px;
  font-weight: 800;
  line-height: 1.25;
  letter-spacing: -0.015em;
}

.font-heading-h2 {
  font-family: var(--font-montserrat), sans-serif;
  font-size: 32px;
  font-weight: 700;
  line-height: 1.3;
}

.font-heading-h3 {
  font-family: var(--font-montserrat), sans-serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.35;
}

.font-heading-h4 {
  font-family: var(--font-montserrat), sans-serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
}

.text-body-reg {
  font-family: var(--font-nunito), sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;
}

.text-body-small {
  font-family: var(--font-nunito), sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
}

/* Keycap effect helper */
.keycap-card {
  border: 2px solid #001837;
  box-shadow: 4px 4px 0px #001837;
  border-radius: 16px;
}

.keycap-card-hover {
  border: 2px solid #001837;
  box-shadow: 4px 4px 0px #001837;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.keycap-card-hover:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0px #001837;
}

.keycap-button {
  border: 2px solid #001837;
  box-shadow: 3px 3px 0px #001837;
  transition: all 0.1s ease;
}
.keycap-button:hover {
  transform: translate(-1px, -1px);
  box-shadow: 4px 4px 0px #001837;
}
.keycap-button:active {
  transform: translate(2px, 2px);
  box-shadow: 1px 1px 0px #001837;
}
""")

# 2. Update Button.tsx with exact Keycap Hard Shadow behavior
write_file('components/ui/Button.tsx', """import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  leftIcon,
  rightIcon,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-heading font-bold rounded-xl transition-all duration-150 focus:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none';

  const sizeStyles = {
    sm: 'h-10 px-4 text-sm gap-2',
    md: 'h-12 px-6 text-base gap-2.5',
    lg: 'h-14 px-8 text-lg gap-3',
  };

  const variantStyles = {
    primary: 'bg-yycl-yellow text-yycl-navy border-2 border-yycl-navy shadow-[3px_3px_0px_#001837] hover:shadow-[4px_4px_0px_#001837] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#001837]',
    secondary: 'bg-yycl-navy text-white border-2 border-yycl-navy shadow-[3px_3px_0px_#FFD203] hover:shadow-[4px_4px_0px_#FFD203] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#FFD203]',
    tertiary: 'bg-yycl-purple text-white border-2 border-yycl-navy shadow-[3px_3px_0px_#001837] hover:shadow-[4px_4px_0px_#001837] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#001837]',
    outline: 'bg-transparent text-yycl-navy border-2 border-yycl-navy shadow-[3px_3px_0px_#001837] hover:bg-slate-50 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#001837]',
    ghost: 'bg-transparent text-yycl-navy hover:bg-slate-100',
  };

  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};
""")

# 3. Update Inicio Page (6 audited sections)
write_file('app/page.tsx', """import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';
import { Star, ArrowRight, Check, Briefcase, Globe, Users, Award, Building2 } from 'lucide-react';

export default function HomePage() {
  const categories = [
    {
      title: 'Inglés para Profesionales',
      desc: 'Pierde el miedo a hablar en reuniones de trabajo y entrevistas laborales.',
      icon: <Briefcase className="w-6 h-6 text-yycl-navy" />,
      tag: 'Más Popular'
    },
    {
      title: 'Francés Conversacional',
      desc: 'Preparación para inmigración a Canadá (TEF) o viajes.',
      icon: <Globe className="w-6 h-6 text-yycl-navy" />,
      tag: 'Canadá & Francia'
    },
    {
      title: 'Portugués de Negocios',
      desc: 'Enfocado en el mercado brasileño y exámenes Celpe-Bras.',
      icon: <Globe className="w-6 h-6 text-yycl-navy" />,
      tag: 'LATAM B2B'
    },
    {
      title: 'Kids & Teens (6-16 años)',
      desc: 'Pedagogía lúdica sin presión para desarrollar fluidez temprana.',
      icon: <Users className="w-6 h-6 text-yycl-navy" />,
      tag: 'Lúdico'
    },
    {
      title: 'Inglés Corporativo B2B',
      desc: 'Capacitación a la medida para equipos y empresas.',
      icon: <Building2 className="w-6 h-6 text-yycl-navy" />,
      tag: 'Empresas'
    }
  ];

  return (
    <main className="min-h-screen flex flex-col bg-white">
      <Navbar />

      {/* SECCIÓN 1: HERO (56px Montserrat 800 + CTA Amarillo) */}
      <section className="bg-yycl-navy text-white py-16 lg:py-24 border-b-4 border-yycl-yellow">
        <div className="max-w-7xl mx-auto px-5 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <h1 className="font-display-hero text-white tracking-tight">
              Pierde el <span className="text-yycl-yellow">miedo</span> a hablar inglés.
            </h1>
            <p className="text-body-reg text-slate-200 max-w-xl">
              ¿Te bloqueas en reuniones o entrevistas? En YYCL hablas desde el minuto 1 con coaches nativos y bilingües en sesiones 100% en vivo.
            </p>
            <div className="pt-2">
              <Link href="/agendar">
                <Button variant="primary" size="lg" className="w-full sm:w-auto" rightIcon={<ArrowRight className="w-5 h-5" />}>
                  Agendar Mi Clase Gratis
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white p-3 rounded-2xl border-2 border-yycl-navy shadow-[6px_6px_0px_#FFD203]">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
                alt="Coach YYCL en sesión"
                className="w-full h-72 sm:h-80 object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 2: TODO LO QUE OFRECEMOS (5 tarjetas por categoría) */}
      <section className="py-16 lg:py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-5 lg:px-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-heading-h2 text-yycl-navy">
              Todo lo que ofrecemos
            </h2>
            <p className="text-body-small text-slate-600 mt-2">
              Programas diseñados para tus metas laborales y personales.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] hover:-translate-y-1 hover:shadow-[6px_6px_0px_#001837] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-yycl-cream flex items-center justify-center border-2 border-yycl-navy">
                      {cat.icon}
                    </div>
                    <span className="text-[13px] font-bold text-yycl-navy bg-yycl-yellow/60 px-3 py-1 rounded-full border border-yycl-navy">
                      {cat.tag}
                    </span>
                  </div>
                  <h3 className="font-heading-h3 text-yycl-navy mb-2">
                    {cat.title}
                  </h3>
                  <p className="text-body-small text-slate-600">
                    {cat.desc}
                  </p>
                </div>
                <div className="pt-6">
                  <Link href="/planes" className="text-sm font-bold text-yycl-navy hover:underline inline-flex items-center gap-1">
                    Ver programa <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN 3: CÓMO FUNCIONA (PREVIEW — Una frase contundente) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-5 text-center space-y-6">
          <span className="text-sm font-extrabold uppercase tracking-widest text-yycl-purple">
            Metodología Directa
          </span>
          <h2 className="font-heading-h2 text-yycl-navy">
            Aprende a hablar, no solo a estudiar.
          </h2>
          <p className="text-body-reg text-slate-700 max-w-2xl mx-auto">
            Desde 2021, enseñamos inglés directo a la conversación con corrección en el momento 24/7 y prácticas guiadas hasta que hablar te sale natural.
          </p>
          <div>
            <Link href="/como-funciona">
              <Button variant="outline" size="md">
                Conoce el proceso completo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN 4: TESTIMONIOS (1 Testimonio Destacado) */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-8">
            <h2 className="font-heading-h2 text-yycl-navy">
              Resultados reales
            </h2>
          </div>

          <div className="bg-yycl-purple text-white p-8 sm:p-10 rounded-3xl border-2 border-yycl-navy shadow-[6px_6px_0px_#001837] space-y-6">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yycl-yellow text-yycl-yellow" />
              ))}
            </div>
            <blockquote className="text-lg sm:text-xl font-heading font-medium leading-relaxed">
              "Me ha encantado... me ha permitido preguntar, hablar y equivocarme. ¡Me gusta que no hay juzgamiento, por eso aprovecho todo!"
            </blockquote>
            <div className="flex items-center gap-3 pt-4 border-t border-white/20">
              <div className="w-12 h-12 rounded-full bg-yycl-yellow text-yycl-navy font-bold flex items-center justify-center font-heading text-lg border border-yycl-navy">
                TB
              </div>
              <div>
                <span className="block font-heading font-bold text-base">Tatiana Becerra</span>
                <span className="block text-xs text-slate-200">Product Manager · 🇨🇴 Colombia</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN 5: MODALIDADES (3 Cards sin precio visible) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-5 lg:px-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-extrabold uppercase tracking-widest text-yycl-purple">
              Nuestros Programas
            </span>
            <h2 className="font-heading-h2 text-yycl-navy mt-1">
              Modalidades
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-yycl-purple text-white p-6 sm:p-8 rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] space-y-4">
              <h3 className="font-heading-h3 text-yycl-yellow">Grupal</h3>
              <p className="text-body-small text-slate-100">Grupos reducidos (máx. 4-6 personas) con estudiantes de tu mismo nivel.</p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow" /> Clases en vivo 3x/semana</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow" /> Club de conversación</li>
              </ul>
            </div>

            <div className="bg-yycl-purple-dark text-white p-6 sm:p-8 rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#FFD203] space-y-4">
              <span className="text-xs font-bold bg-yycl-yellow text-yycl-navy px-2.5 py-0.5 rounded-full border border-yycl-navy inline-block">
                MÁS POPULAR
              </span>
              <h3 className="font-heading-h3 text-white">Personalizado (1-a-1)</h3>
              <p className="text-body-small text-slate-200">Profesor exclusivo enfocado 100% en tu industria y objetivos.</p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow" /> Horarios flexibles</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow" /> Simulacro de entrevistas</li>
              </ul>
            </div>

            <div className="bg-yycl-purple text-white p-6 sm:p-8 rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] space-y-4">
              <h3 className="font-heading-h3 text-yycl-yellow">Dúo (En Pareja)</h3>
              <p className="text-body-small text-slate-100">Aprende con tu pareja, amigo o colega con un plan coordinado.</p>
              <ul className="space-y-2 text-sm text-slate-200">
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow" /> 2 alumnos por profesor</li>
                <li className="flex items-center gap-2"><Check className="w-4 h-4 text-yycl-yellow" /> Ahorro de más del 30%</li>
              </ul>
            </div>
          </div>

          <div className="text-center pt-8">
            <Link href="/planes" className="text-sm font-bold text-yycl-navy hover:underline inline-flex items-center gap-1">
              Ver todos los planes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* SECCIÓN 6: CIERRE (Sí puedes. Yes you can. + CTA) */}
      <section className="py-16 bg-gradient-to-r from-yycl-purple-dark to-yycl-purple text-white text-center border-t-4 border-yycl-yellow">
        <div className="max-w-3xl mx-auto px-5 space-y-6">
          <h2 className="font-display-hero text-white text-4xl sm:text-5xl">
            Sí puedes. Yes you can.
          </h2>
          <p className="text-body-reg text-slate-200">
            Agenda tu entrevista gratuita de 15 minutos y comienza hoy mismo.
          </p>
          <div>
            <Link href="/agendar">
              <Button variant="primary" size="lg" className="font-extrabold" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Agendar Mi Entrevista Gratuita
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
""")

print("Audit fixes applied successfully")
