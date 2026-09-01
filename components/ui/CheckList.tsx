import React from 'react';
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
