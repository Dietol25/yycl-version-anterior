"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { Logo } from '@/components/icons/Logo';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Acceso a plataforma en demostración');
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 flex flex-col justify-between relative overflow-hidden py-10 px-4">
      {/* Ambient background decoration */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#834296]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FFD203]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar with Back Link */}
      <div className="max-w-4xl w-full mx-auto flex items-center justify-between z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-heading font-bold text-[#3C4C92] hover:text-[#001837] transition-colors py-2 px-3 rounded-xl hover:bg-white/80"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </Link>
      </div>

      {/* Centered Login Container */}
      <div className="max-w-[460px] w-full mx-auto z-10 py-6">
        {/* Header with official Sticker Logo */}
        <div className="text-center space-y-3 mb-6">
          <div className="flex justify-center">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <Logo size={64} />
            </Link>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#001837] tracking-tight">
            Portal de Alumnos YYCL
          </h1>
          <p className="text-xs sm:text-sm text-[#3C4C92] font-body-regular max-w-xs mx-auto">
            Accede a tu agenda de clases y material de estudio.
          </p>
        </div>

        {/* White Card */}
        <div className="bg-white rounded-3xl p-7 sm:p-9 border border-black/10 shadow-[0_10px_30px_rgba(0,24,55,0.06),3px_3px_0px_#001837]">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Field: Correo Electrónico */}
            <div className="space-y-1.5 text-left">
              <label className="block text-xs font-heading font-bold text-[#001837]">
                Correo Electrónico
              </label>
              <input
                type="email"
                required
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-4 bg-white text-[#001837] font-body-regular rounded-xl text-sm placeholder-slate-400 border border-black/15 hover:border-[#3C4C92] focus:border-[#4DC2DA] focus:outline-none focus:shadow-[0_0_0_3px_#001837] transition-all"
              />
            </div>

            {/* Field: Contraseña */}
            <div className="space-y-1.5 text-left">
              <label className="block text-xs font-heading font-bold text-[#001837]">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-12 px-4 pr-11 bg-white text-[#001837] font-body-regular rounded-xl text-sm placeholder-slate-400 border border-black/15 hover:border-[#3C4C92] focus:border-[#4DC2DA] focus:outline-none focus:shadow-[0_0_0_3px_#001837] transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-[#001837] transition-colors cursor-pointer"
                  aria-label={showPassword ? 'Ocultar contraseña' : 'Ver contraseña'}
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Remember Me + Forgot Password */}
            <div className="flex items-center justify-between text-xs pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-yycl-navy focus:ring-0 accent-yycl-navy cursor-pointer"
                />
                <span className="font-heading font-semibold">Recordarme</span>
              </label>

              <Link
                href="#"
                className="font-heading font-bold text-[#834296] hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="md"
                fullWidth
                className="font-heading font-bold text-sm h-12 shadow-[3px_3px_0px_#EC9519]"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Iniciar Sesión
              </Button>
            </div>
          </form>

          {/* Card Footer: Agenda tu diagnóstico */}
          <div className="text-center pt-6 mt-6 border-t border-black/5">
            <p className="text-xs text-slate-600 font-body-regular">
              ¿Aún no eres alumno?{' '}
              <Link
                href="/agendar"
                className="font-heading font-bold text-[#834296] hover:underline"
              >
                Agenda tu diagnóstico gratuito
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Subtle Bottom Copyright */}
      <div className="text-center text-[11px] text-slate-400 font-fine-print z-10">
        © 2026 Yes You Can Languages. Todos los derechos reservados.
      </div>
    </main>
  );
}
