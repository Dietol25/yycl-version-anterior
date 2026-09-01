import React from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'dark' | 'violeta' | 'outline';
  size?: 'sm' | 'md' | 'lg'; // sm = 40px, md = 48px, lg = 56px
  fullWidth?: boolean;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  href?: string;
  target?: string;
  rel?: string;
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
  href,
  target,
  rel,
  ...props
}) => {
  // Base styles: rounded-xl (12px), SemiBold font, touch-friendly
  const baseStyles = [
    'inline-flex items-center justify-center font-heading font-semibold rounded-xl',
    'transition-all duration-150 cursor-pointer touch-manipulation',
    'focus:outline-none focus:ring-0 focus:shadow-[0_0_0_3px_#001837]',
    'disabled:opacity-50 disabled:pointer-events-none disabled:shadow-none disabled:bg-[#A3ABB8] disabled:text-white disabled:border-transparent',
  ].join(' ');

  // Exact sizes: 40px, 48px, 56px
  const sizeStyles = {
    sm: 'min-h-[40px] h-10 px-4 text-sm font-label-button gap-2',
    md: 'min-h-[44px] h-12 px-6 text-base font-label-large gap-2.5',
    lg: 'min-h-[48px] h-14 px-8 text-base font-label-large gap-3',
  };

  const variantStyles = {
    primary: [
      'bg-[#FFD203] text-[#001837]',
      'shadow-[3px_3px_0px_#EC9519]',
      'hover:bg-[#EC9519] hover:shadow-[3px_3px_0px_#C7760A]',
      'active:bg-[#EC9519] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#EC9519]',
    ].join(' '),

    secondary: [
      'bg-[#FFFFFF] text-[#001837] border border-[#001837]',
      'shadow-[3px_3px_0px_#001837]',
      'hover:bg-[#FFE2C0] hover:shadow-[3px_3px_0px_#001837]',
      'active:bg-[#FFE2C0] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#001837]',
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
      'active:bg-[#3C4C92] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#000000]',
    ].join(' '),

    violeta: [
      'bg-[#834296] text-[#FFFFFF]',
      'shadow-[3px_3px_0px_#000000]',
      'hover:bg-[#001837] hover:shadow-[3px_3px_0px_#000000]',
      'active:bg-[#001837] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_#001837]',
    ].join(' '),

    outline: [
      'bg-transparent text-white border border-white/30',
      'hover:bg-white/10 active:bg-white/20',
    ].join(' '),
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`;

  const content = (
    <>
      {isLoading ? (
        <Loader2 className="w-5 h-5 animate-spin" />
      ) : (
        <>
          {leftIcon && <span className="shrink-0 flex items-center">{leftIcon}</span>}
          <span>{children}</span>
          {rightIcon && <span className="shrink-0 flex items-center">{rightIcon}</span>}
        </>
      )}
    </>
  );

  // If href is provided, render as Next.js Link for 100% native mobile touch navigation
  if (href) {
    return (
      <Link href={href} target={target} rel={rel} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={combinedClasses}
      disabled={disabled || isLoading}
      {...props}
    >
      {content}
    </button>
  );
};
