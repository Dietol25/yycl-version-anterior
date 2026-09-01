import React from 'react';

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
