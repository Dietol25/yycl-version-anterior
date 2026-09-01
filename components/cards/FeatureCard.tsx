import React from 'react';

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, tag }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-yycl-neutral hover:shadow-yycl-hover transition-all duration-200 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-yycl-cream flex items-center justify-center text-yycl-navy">
            {icon}
          </div>
          {tag && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-yycl-purple bg-yycl-purple-bg px-2.5 py-1 rounded-full">
              {tag}
            </span>
          )}
        </div>
        <h3 className="text-lg font-bold font-heading text-yycl-navy mb-2">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};
