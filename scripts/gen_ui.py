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
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost' | 'yellow-outline';
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
  const baseStyles = 'inline-flex items-center justify-center font-heading font-semibold rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 cursor-pointer';

  const sizeStyles = {
    sm: 'h-10 px-4 text-sm gap-1.5',
    md: 'h-12 px-6 text-base gap-2',
    lg: 'h-14 px-8 text-lg gap-2.5 shadow-md',
  };

  const variantStyles = {
    primary: 'bg-yycl-yellow text-yycl-navy hover:bg-yycl-yellow-hover hover:shadow-yycl-yellow focus:ring-yycl-yellow font-bold border border-yellow-300/60 shadow-sm',
    secondary: 'bg-yycl-navy text-white hover:bg-yycl-navy-light focus:ring-yycl-navy shadow-sm',
    tertiary: 'bg-yycl-purple text-white hover:bg-yycl-purple-light focus:ring-yycl-purple shadow-sm',
    outline: 'border-2 border-yycl-navy text-yycl-navy hover:bg-yycl-navy/5 focus:ring-yycl-navy',
    'yellow-outline': 'border-2 border-yycl-yellow text-yycl-navy hover:bg-yycl-yellow/10 focus:ring-yycl-yellow',
    ghost: 'text-yycl-navy hover:bg-slate-100 focus:ring-slate-300',
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

write_file('components/ui/Badge.tsx', """import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'yellow' | 'purple' | 'cyan' | 'navy' | 'green' | 'gray';
  size?: 'sm' | 'md';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'yellow',
  size = 'md',
  className = '',
}) => {
  const sizeStyles = {
    sm: 'text-[11px] px-2.5 py-0.5 font-bold uppercase tracking-wider',
    md: 'text-xs px-3 py-1 font-bold uppercase tracking-wider',
  };

  const variantStyles = {
    yellow: 'bg-yycl-yellow text-yycl-navy border border-yellow-400/50 shadow-sm',
    purple: 'bg-yycl-purple text-white shadow-sm',
    cyan: 'bg-yycl-cyan text-yycl-navy font-bold',
    navy: 'bg-yycl-navy text-white',
    green: 'bg-emerald-100 text-emerald-800 border border-emerald-300',
    gray: 'bg-slate-100 text-slate-700 border border-slate-200',
  };

  return (
    <span className={`inline-flex items-center justify-center rounded-full font-heading ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
""")

write_file('components/ui/FormInput.tsx', """import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
}

export const FormInput = React.forwardRef<HTMLInputElement, InputProps>(({
  label,
  error,
  helperText,
  leftIcon,
  className = '',
  id,
  ...props
}, ref) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\\s+/g, '-') : undefined);

  return (
    <div className="w-full space-y-1.5 text-left">
      {label && (
        <label htmlFor={inputId} className="block text-sm font-semibold text-yycl-navy font-heading">
          {label}
        </label>
      )}
      <div className="relative rounded-xl shadow-xs">
        {leftIcon && (
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            {leftIcon}
          </div>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`w-full h-12 px-4 ${leftIcon ? 'pl-11' : ''} bg-white text-yycl-navy placeholder-slate-400 rounded-xl border ${
            error ? 'border-red-500 focus:ring-red-400' : 'border-slate-200 focus:border-yycl-cyan focus:ring-yycl-cyan/30'
          } focus:outline-none focus:ring-3 transition-all duration-150 text-base ${className}`}
          {...props}
        />
      </div>
      {error && <p className="text-xs text-red-500 font-medium">{error}</p>}
      {helperText && !error && <p className="text-xs text-slate-500">{helperText}</p>}
    </div>
  );
});
FormInput.displayName = 'FormInput';
""")
print("UI components done")
