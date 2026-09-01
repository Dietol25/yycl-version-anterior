import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. Update Button.tsx with exact shadow colors (Sombra/Amarillo = #EC9519, Sombra/Neutral = #001837, Sombra/Oscura = #000000)
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
  // Base styles: rounded-xl (12px), SemiBold font, focus ring Foco/Anillo (X0 Y0 Blur0 Spread3 #001837)
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

  // Exact color fills, hovers, pressed states, and keycap shadows from DS inspector:
  // - Primario: Fill #FFD203, Shadow X3 Y3 Blur0 Spread0 #EC9519 (primitivo/amarillo-oscuro), Hover #EC9519
  // - Secundario: Fill #FFFFFF, Stroke 1.5px #001837, Shadow X3 Y3 Blur0 Spread0 #001837, Hover #FFE2C0
  // - Ghost: Transparent, Text #3C4C92, Hover #FFE2C0, No shadow
  // - Dark: Fill #001837, Shadow X3 Y3 Blur0 Spread0 #000000, Hover #3C4C92
  // - Violeta: Fill #834296, Shadow X3 Y3 Blur0 Spread0 #000000, Hover #001837
  const variantStyles = {
    primary: [
      'bg-[#FFD203] text-[#001837]',
      'shadow-[3px_3px_0px_#EC9519]',
      'hover:bg-[#EC9519] hover:shadow-[3px_3px_0px_#C7760A]',
      'active:bg-[#EC9519] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0px_0px_0px_#EC9519]',
    ].join(' '),

    secondary: [
      'bg-[#FFFFFF] text-[#001837] border border-[#001837]',
      'shadow-[3px_3px_0px_#001837]',
      'hover:bg-[#FFE2C0] hover:shadow-[3px_3px_0px_#001837]',
      'active:bg-[#FFE2C0] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0px_0px_0px_#001837]',
    ].join(' '),

    ghost: [
      'bg-transparent text-[#3C4C92] shadow-none',
      'hover:bg-[#FFE2C0] hover:text-[#001837]',
      'active:bg-[#FFE2C0] active:text-[#001837]',
    ].join(' '),

    dark: [
      'bg-[#001837] text-[#FFFFFF]',
      'shadow-[3px_3px_0px_#000000]',
      'hover:bg-[#3C4C92] hover:shadow-[3px_3px_0px_#000000]',
      'active:bg-[#3C4C92] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0px_0px_0px_#000000]',
    ].join(' '),

    violeta: [
      'bg-[#834296] text-[#FFFFFF]',
      'shadow-[3px_3px_0px_#000000]',
      'hover:bg-[#001837] hover:shadow-[3px_3px_0px_#000000]',
      'active:bg-[#001837] active:translate-x-[3px] active:translate-y-[3px] active:shadow-[0px_0px_0px_#000000]',
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

# 2. Update FormInput.tsx with exact 5 state strokes (Default, Hover, Focus, Error, Disabled)
write_file('components/ui/FormInput.tsx', """import React from 'react';

export interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const FormInput: React.FC<FormInputProps> = ({
  label,
  error,
  helperText,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <div className="w-full space-y-1.5 text-left">
      {label && (
        <label className="block text-xs font-heading font-semibold text-yycl-navy">
          {label}
        </label>
      )}

      <input
        disabled={disabled}
        className={`w-full h-12 px-4 bg-white text-[#001837] font-body-regular rounded-xl text-sm placeholder-[#001837]/50 transition-all duration-150 focus:outline-none disabled:opacity-60 disabled:bg-slate-50 disabled:cursor-not-allowed ${
          error
            ? 'border-2 border-[#DC2626] focus:shadow-[0_0_0_3px_#DC2626]'
            : 'border border-black/10 hover:border-2 hover:border-[#3C4C92] focus:border-2 focus:border-[#4DC2DA] focus:shadow-[0_0_0_3px_#001837]'
        } ${className}`}
        {...props}
      />

      {error && (
        <p className="text-xs text-[#DC2626] font-body-small">
          {error}
        </p>
      )}

      {helperText && !error && (
        <p className="text-xs text-slate-500 font-body-small">
          {helperText}
        </p>
      )}
    </div>
  );
};
""")

print("Button shadows and Input states updated with exact Figma parameters")
