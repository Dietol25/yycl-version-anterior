import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. Update app/globals.css with exact 19 DS tokens, typography, shadows, spacing, radius, motion
write_file('app/globals.css', """@import "tailwindcss";

@theme {
  /* Primitivos */
  --color-violeta: #834296;
  --color-lila-claro: #D4B6E3;
  --color-navy: #001837;
  --color-azul-medio: #3C4C92;
  --color-cyan: #4DC2DA;
  --color-celeste-palido: #CAFFFF;
  --color-amarillo: #FFD203;
  --color-amarillo-oscuro: #EC9519;
  --color-crema: #FFE2C0;
  --color-blanco: #FFFFFF;
  --color-gris-disabled: #A3ABB8;
  --color-verde: #16A34A;
  --color-rojo: #DC2626;

  /* Aliases para compatibilidad con código */
  --color-yycl-navy: #001837;
  --color-yycl-yellow: #FFD203;
  --color-yycl-purple: #834296;
  --color-yycl-cyan: #4DC2DA;
  --color-yycl-blue-medium: #3C4C92;
  --color-yycl-amber: #EC9519;
  --color-yycl-cream: #FFE2C0;

  /* Semánticos */
  --color-bg-surface: #FFFFFF;
  --color-bg-dark-card: #834296;
  --color-text-default: #001837;
  --color-text-inverse: #FFFFFF;
  --color-text-muted: #3C4C92;
  --color-border-default: rgba(0, 0, 0, 0.10);
  --color-state-disabled: #A3ABB8;
  --color-state-success: #16A34A;
  --color-state-error: #DC2626;
  --color-accent-kids: #4DC2DA;
  --color-accent-empresas: #001837;
  --color-accent-conversacion: #FFD203;

  /* Fuentes */
  --font-montserrat: var(--font-montserrat), sans-serif;
  --font-nunito: var(--font-nunito), sans-serif;

  /* Spacing Scale (9 pasos) */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 12px;
  --spacing-base: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-2xl: 48px;
  --spacing-3xl: 64px;
  --spacing-4xl: 96px;

  /* Radius Scale (6 pasos) */
  --radius-sm: 4px;
  --radius-md: 8px;
  --radius-lg: 12px;
  --radius-xl: 16px;
  --radius-2xl: 24px;
  --radius-pill: 9999px;

  /* Keycap Hard Shadows (X3, Y3, Blur 0, Spread 0) */
  --shadow-keycap-amarillo: 3px 3px 0px #FFD203;
  --shadow-keycap-neutral: 3px 3px 0px #001837;
  --shadow-keycap-oscura: 3px 3px 0px #001837;
  --shadow-foco-anillo: 0 0 0 3px #001837;
}

:root {
  --background: #FFFFFF;
  --foreground: #001837;
}

body {
  background-color: var(--background);
  color: var(--foreground);
  font-family: var(--font-nunito), sans-serif;
  font-size: 16px;
  line-height: 24px;
}

/* Gradiente de marca v2 (135deg, #EC9519 -> #834296) */
.bg-gradient-brand-v2 {
  background: linear-gradient(135deg, #EC9519, #834296);
}

/* 14 Text Styles Exactos */
.font-display-hero {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 800;
  font-size: 56px;
  line-height: 60px;
  letter-spacing: -0.02em;
}

.font-heading-h1 {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 800;
  font-size: 40px;
  line-height: 48px;
  letter-spacing: -0.015em;
}

.font-heading-h2 {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 40px;
}

.font-heading-h3 {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
}

.font-heading-h4 {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 28px;
}

.font-label-bold {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
}

.font-label-button {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
}

.font-label-large {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
}

.font-label-regular {
  font-family: var(--font-montserrat), sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
}

.font-body-large {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
}

.font-body-regular {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
}

.font-body-small {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
}

.font-body-bold {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
}

.font-link {
  font-family: var(--font-nunito), sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-decoration: underline;
}
""")

# 2. Update Button.tsx (50 variants: 5 variants x 2 sizes x 5 states) with exact Label/Button & Label/Large SemiBold 600
write_file('components/ui/Button.tsx', """import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark' | 'violeta';
  size?: 'sm' | 'md'; // sm = 40px (Label/Button 14px 600), md = 48px (Label/Large 16px 600, default mobile)
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
  const baseStyles = 'inline-flex items-center justify-center font-heading font-semibold rounded-xl transition-all duration-150 focus:outline-none focus:ring-0 focus:shadow-[0_0_0_3px_#001837] disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none';

  // Size 40px (desktop dense) vs 48px (mobile default)
  const sizeStyles = {
    sm: 'h-10 px-4 text-sm font-label-button gap-2',
    md: 'h-12 px-6 text-base font-label-large gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-yycl-yellow text-yycl-navy border-2 border-yycl-navy shadow-[3px_3px_0px_#001837] hover:shadow-[4px_4px_0px_#001837] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#001837]',
    secondary: 'bg-yycl-navy text-white border-2 border-yycl-navy shadow-[3px_3px_0px_#FFD203] hover:shadow-[4px_4px_0px_#FFD203] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#FFD203]',
    dark: 'bg-yycl-navy text-white border-2 border-yycl-navy shadow-[3px_3px_0px_#001837] hover:shadow-[4px_4px_0px_#001837] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#001837]',
    violeta: 'bg-yycl-purple text-white border-2 border-yycl-navy shadow-[3px_3px_0px_#001837] hover:shadow-[4px_4px_0px_#001837] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#001837]',
    ghost: 'bg-transparent text-yycl-navy border-2 border-transparent hover:bg-slate-100 shadow-none',
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

# 3. Create LanguageToggle.tsx (Slider switch with circular flag knob: Spain / USA)
write_file('components/navigation/LanguageToggle.tsx', """\"use client\";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const LanguageToggle = () => {
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en');

  return (
    <Link
      href={isEn ? '/' : '/en'}
      className="relative inline-flex items-center w-[84px] h-[36px] bg-slate-100 border-2 border-yycl-navy rounded-full p-1 transition-colors cursor-pointer select-none"
      title={isEn ? 'Cambiar a Español' : 'Switch to English'}
    >
      {/* Background Labels */}
      <span className="w-1/2 text-center text-xs font-heading font-bold text-[#3C4C92] z-0">
        ES
      </span>
      <span className="w-1/2 text-center text-xs font-heading font-bold text-[#3C4C92] z-0">
        EN
      </span>

      {/* Sliding Knob with Flag (28px circle) */}
      <div
        className={`absolute top-[2px] w-[28px] h-[28px] rounded-full border border-yycl-navy shadow-[1px_1px_0px_#001837] flex items-center justify-center overflow-hidden transition-transform duration-200 z-10 ${
          isEn ? 'left-[46px] bg-[#001837]' : 'left-[2px] bg-red-600'
        }`}
      >
        {isEn ? (
          /* USA Flag mini */
          <span className="text-[16px] leading-none">🇺🇸</span>
        ) : (
          /* Spain Flag mini */
          <span className="text-[16px] leading-none">🇪🇸</span>
        )}
      </div>
    </Link>
  );
};
""")

# 4. Create SectionHeader.tsx (Default / Oscuro variants with WCAG 4.5:1 text/muted)
write_file('components/ui/SectionHeader.tsx', """import React from 'react';

export interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  variant?: 'default' | 'oscuro';
  centered?: boolean;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  eyebrow,
  title,
  subtitle,
  variant = 'default',
  centered = true,
  className = '',
}) => {
  const isDark = variant === 'oscuro';

  return (
    <div className={`${centered ? 'text-center max-w-2xl mx-auto' : 'text-left'} space-y-2 mb-10 ${className}`}>
      {eyebrow && (
        <div className={`inline-flex items-center gap-2 text-xs font-heading font-bold uppercase tracking-wider ${
          isDark ? 'text-yycl-amber' : 'text-[#3C4C92]'
        }`}>
          <span className="w-2 h-2 rounded-full bg-yycl-yellow shrink-0" />
          <span>{eyebrow}</span>
        </div>
      )}

      <h2 className={`font-heading-h2 tracking-tight ${isDark ? 'text-white' : 'text-yycl-navy'}`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`font-body-regular ${isDark ? 'text-slate-200' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};
""")

# 5. Create CheckList.tsx
write_file('components/ui/CheckList.tsx', """import React from 'react';
import { Check } from 'lucide-react';

export interface CheckListProps {
  items: string[];
  variant?: 'light' | 'dark';
  className?: string;
}

export const CheckList: React.FC<CheckListProps> = ({ items, variant = 'light', className = '' }) => {
  const isDark = variant === 'dark';

  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item, idx) => (
        <li key={idx} className="flex items-start gap-2.5">
          <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
            isDark ? 'bg-yycl-yellow text-yycl-navy' : 'bg-emerald-100 text-emerald-700'
          }`}>
            <Check className="w-3.5 h-3.5" />
          </span>
          <span className={`text-sm font-body-regular ${isDark ? 'text-white' : 'text-slate-700'}`}>
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
};
""")

# 6. Update Navbar.tsx using LanguageToggle component
write_file('components/navigation/Navbar.tsx', """\"use client\";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/icons/Logo';
import { LanguageToggle } from '@/components/navigation/LanguageToggle';

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [sobreDropdownOpen, setSobreDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Cómo Funciona', href: '/como-funciona' },
    { label: 'Resultados', href: '/resultados' },
    { label: 'Planes', href: '/planes' },
    { label: 'Servicios Especiales', href: '/servicios-especiales' },
    { label: 'Otros Idiomas', href: '/idiomas' },
    { label: 'Kids & Teens', href: '/kids' },
    { label: 'Capacitación corporativa', href: '/empresas' },
    {
      label: 'Sobre YYCL',
      href: '/sobre-yycl',
      hasDropdown: true,
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200/80 transition-all duration-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo Sticker */}
        <Link href="/" className="flex items-center gap-3">
          <Logo size={48} />
        </Link>

        {/* Center Nav Links (Desktop) */}
        <nav className="hidden xl:flex items-center gap-5 2xl:gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            if (link.hasDropdown) {
              return (
                <div
                  key={link.label}
                  className="relative group"
                  onMouseEnter={() => setSobreDropdownOpen(true)}
                  onMouseLeave={() => setSobreDropdownOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="text-[14px] font-heading font-semibold text-slate-800 hover:text-yycl-navy transition-colors inline-flex items-center gap-1 py-2"
                  >
                    <span>{link.label}</span>
                    <ChevronDown className="w-3.5 h-3.5 text-slate-500 group-hover:rotate-180 transition-transform duration-200" />
                  </Link>

                  {sobreDropdownOpen && (
                    <div className="absolute top-full left-0 w-48 bg-white rounded-2xl border-2 border-yycl-navy shadow-[4px_4px_0px_#001837] p-2 space-y-1 animate-in fade-in slide-in-from-top-1 duration-150">
                      <Link href="/sobre-yycl" className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-yycl-cream">
                        Sobre Nosotros
                      </Link>
                      <Link href="/profesores" className="block px-3 py-2 rounded-xl text-sm font-semibold text-slate-800 hover:bg-yycl-cream">
                        Nuestro equipo
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[14px] font-heading font-semibold transition-colors hover:text-yycl-navy ${
                  isActive ? 'text-yycl-navy font-bold' : 'text-slate-800'
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Side (Desktop) */}
        <div className="hidden lg:flex items-center gap-5">
          <Link
            href="/login"
            className="text-[14px] font-heading font-semibold text-slate-800 hover:text-yycl-navy transition-colors"
          >
            Plataforma
          </Link>

          {/* Switch real con perilla y bandera */}
          <LanguageToggle />

          {/* CTA Nav (Button SemiBold 600) */}
          <Link href="/agendar">
            <Button
              variant="primary"
              size="sm"
              className="font-bold text-sm px-5 py-2 h-10 shadow-[2px_2px_0px_#001837]"
            >
              Agendar
            </Button>
          </Link>
        </div>

        {/* Right Side (Mobile View 393px) */}
        <div className="flex xl:hidden items-center gap-3">
          <LanguageToggle />

          <Link href="/agendar">
            <Button variant="primary" size="sm" className="font-bold text-xs h-9 px-3.5 shadow-[2px_2px_0px_#001837]">
              Agendar
            </Button>
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-yycl-navy hover:bg-slate-100 rounded-lg focus:outline-none"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200 px-5 pt-4 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-150 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-xl text-base font-heading font-semibold text-slate-800 hover:bg-yycl-cream hover:text-yycl-navy transition-all"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/profesores"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-xl text-base font-heading font-semibold text-slate-800 hover:bg-yycl-cream hover:text-yycl-navy transition-all pl-6"
            >
              ↳ Nuestro equipo
            </Link>
          </div>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-3">
            <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" size="md" fullWidth className="font-bold">
                Plataforma (Ingresar)
              </Button>
            </Link>

            <Link href="/agendar" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="primary" size="md" fullWidth className="font-bold">
                Agenda tu entrevista gratuita
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};
""")

print("Design System spec applied cleanly")
