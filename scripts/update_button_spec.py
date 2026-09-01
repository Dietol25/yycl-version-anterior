import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

write_file('components/ui/Button.tsx', """import React from 'react';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark' | 'violeta';
  size?: 'sm' | 'md'; // sm = 40px (Desktop denso, Label/Button 14px 600), md = 48px (Mobile default, Label/Large 16px 600)
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
  // Base styles: rounded-xl (12px), SemiBold font, transition, focus ring Foco/Anillo
  const baseStyles = [
    'inline-flex items-center justify-center font-heading font-semibold rounded-xl select-none',
    'transition-all duration-150 cursor-pointer',
    'focus:outline-none focus:ring-0 focus:shadow-[0_0_0_3px_#001837]',
    'disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none disabled:bg-[#A3ABB8] disabled:text-white disabled:border-transparent',
  ].join(' ');

  // Exact sizes: 40px (16px padding, 14px font) vs 48px (24px padding, 16px font)
  const sizeStyles = {
    sm: 'h-10 px-4 text-sm font-label-button gap-2',
    md: 'h-12 px-6 text-base font-label-large gap-2.5',
  };

  // Exact color fills, hovers, pressed states, and keycap shadows from DS code.ts
  const variantStyles = {
    primary: [
      'bg-[#FFD203] text-[#001837] border-2 border-[#001837]',
      'shadow-[3px_3px_0px_#001837]',
      'hover:bg-[#EC9519] hover:shadow-[4px_4px_0px_#001837] hover:-translate-x-0.5 hover:-translate-y-0.5',
      'active:bg-[#EC9519] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_#001837]',
    ].join(' '),

    secondary: [
      'bg-[#FFFFFF] text-[#001837] border-2 border-[#001837]',
      'shadow-[3px_3px_0px_#001837]',
      'hover:bg-[#FFE2C0] hover:shadow-[4px_4px_0px_#001837] hover:-translate-x-0.5 hover:-translate-y-0.5',
      'active:bg-[#FFE2C0] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_#001837]',
    ].join(' '),

    ghost: [
      'bg-transparent text-[#3C4C92] border-2 border-transparent shadow-none',
      'hover:bg-[#FFE2C0] hover:text-[#001837]',
      'active:bg-[#FFE2C0] active:text-[#001837]',
    ].join(' '),

    dark: [
      'bg-[#001837] text-[#FFFFFF] border-2 border-[#001837]',
      'shadow-[3px_3px_0px_#001837]',
      'hover:bg-[#3C4C92] hover:shadow-[4px_4px_0px_#001837] hover:-translate-x-0.5 hover:-translate-y-0.5',
      'active:bg-[#3C4C92] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_#001837]',
    ].join(' '),

    violeta: [
      'bg-[#834296] text-[#FFFFFF] border-2 border-[#001837]',
      'shadow-[3px_3px_0px_#001837]',
      'hover:bg-[#001837] hover:shadow-[4px_4px_0px_#001837] hover:-translate-x-0.5 hover:-translate-y-0.5',
      'active:bg-[#001837] active:translate-x-0.5 active:translate-y-0.5 active:shadow-[0px_0px_0px_#001837]',
    ].join(' '),
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
          {leftIcon && <span className="shrink-0 flex items-center">{leftIcon}</span>}
          <span className="truncate">{children}</span>
          {rightIcon && <span className="shrink-0 flex items-center">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};
""")

print("Button component updated with full Design System spec")
