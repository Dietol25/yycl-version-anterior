import React from 'react';

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
