import React from 'react';

export interface BadgeProps {
  variant?: 'kids' | 'empresas' | 'conversacion';
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'conversacion',
  children,
  className = '',
}) => {
  const variantStyles = {
    kids: 'bg-[#4DC2DA] text-[#001837]',
    empresas: 'bg-[#001837] text-[#FFFFFF]',
    conversacion: 'bg-[#FFD203] text-[#001837]',
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-heading font-extrabold tracking-wider uppercase select-none ${variantStyles[variant]} ${className}`}
    >
      {children}
    </span>
  );
};
