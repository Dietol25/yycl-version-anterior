"use client";

import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

export interface NewsletterProps {
  variant?: 'light' | 'dark';
  width?: 'mobile' | 'desktop' | 'full';
  className?: string;
}

export const Newsletter: React.FC<NewsletterProps> = ({
  variant = 'dark',
  width = 'full',
  className = '',
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  const isDark = variant === 'dark';

  const widthStyles = {
    mobile: 'max-w-[353px]',
    desktop: 'max-w-[500px]',
    full: 'w-full',
  };

  return (
    <div className={`space-y-3 ${widthStyles[width]} ${className}`}>
      <p className={`text-sm font-body-regular leading-relaxed ${isDark ? 'text-white' : 'text-slate-700'}`}>
        Recibe noticias y aprende algo nuevo cada mes en tu correo.
      </p>

      {subscribed ? (
        <div className="bg-white/20 border border-white/40 rounded-2xl p-3.5 flex items-center gap-2.5 text-white animate-in fade-in duration-200">
          <CheckCircle2 className="w-5 h-5 text-yycl-yellow shrink-0" />
          <p className="text-xs font-heading font-semibold">¡Te has suscrito con éxito!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2.5">
          {/* Input field */}
          <input
            type="email"
            required
            placeholder="Tu correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-12 px-4 bg-white text-yycl-navy rounded-2xl text-sm font-body-regular placeholder-slate-400 focus:outline-none border-2 border-yycl-navy shadow-[2px_2px_0px_#001837] focus:shadow-[0_0_0_3px_#001837] transition-all"
          />

          {/* Button Secundario / Suscribir (White with navy stroke & keycap shadow) */}
          <button
            type="submit"
            className="w-full h-12 bg-white text-yycl-navy font-heading font-semibold text-sm rounded-2xl border-2 border-yycl-navy shadow-[3px_3px_0px_#001837] hover:bg-[#FFE2C0] hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-[1px_1px_0px_#001837] transition-all cursor-pointer flex items-center justify-center"
          >
            Suscribir
          </button>
        </form>
      )}

      {/* Disclaimer */}
      <p className={`text-[11px] leading-tight font-fine-print ${isDark ? 'text-white/80' : 'text-slate-400'}`}>
        Al suscribirte aceptas nuestra política de privacidad y recibir actualizaciones.
      </p>
    </div>
  );
};
