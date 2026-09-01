"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, Eye, EyeOff, MessageSquare, Lock } from 'lucide-react';
import { Logo } from '@/components/icons/Logo';
import { Button } from '@/components/ui/Button';

export default function LoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        router.push('/not-found');
      }, 500);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#FDF8F3] via-white to-slate-50 flex flex-col justify-between relative overflow-hidden py-8 px-4">
      {/* Ambient background decoration */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#834296]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#FFD203]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar with Back Link */}
      <div className="max-w-4xl w-full mx-auto flex items-center justify-between z-10">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-[#3C4C92] hover:text-[#001837] transition-colors py-2 px-3 rounded-xl hover:bg-white/80"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Volver al inicio</span>
        </Link>
      </div>

      {/* Centered Login Container */}
      <div className="max-w-[440px] w-full mx-auto z-10 py-4">
        {/* Header with official Sticker Logo */}
        <div className="text-center space-y-2 mb-6">
          <div className="flex justify-center mb-1">
            <Link href="/" className="inline-block transition-transform hover:scale-105">
              <Logo size={56} />
            </Link>
          </div>
          <div className="inline-flex items-center gap-1.5 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
            <Lock className="w-3.5 h-3.5 text-[#834296]" />
            <span>Campus YYCL</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold font-heading text-[#001837] tracking-tight">
            Plataforma de Alumnos
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-body-regular max-w-xs mx-auto">
            Accede a tu agenda de clases, ejercicios y material personalizado.
          </p>
        </div>

        {/* White Card with Design System Shadow */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#001837] shadow-[4px_4px_0px_#001837]">
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Field: Correo Electrónico */}
            <div className="space-y-1.5 text-left">
              <label className="block text-xs font-heading font-extrabold uppercase tracking-wider text-[#001837]">
                Correo Electrónico
              </label>
              <input
                type="email"
                required
                placeholder="alumno@yesyoucanlanguages.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-11 px-3.5 bg-white text-[#001837] font-body-regular rounded-xl text-xs sm:text-sm placeholder-slate-400 border border-slate-300 focus:border-[#001837] focus:ring-2 focus:ring-[#FFD203] focus:outline-none transition-colors"
              />
            </div>

            {/* Field: Contraseña */}
            <div className="space-y-1.5 text-left">
              <label className="block text-xs font-heading font-extrabold uppercase tracking-wider text-[#001837]">
                Contraseña
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-11 px-3.5 pr-11 bg-white text-[#001837] font-body-regular rounded-xl text-xs sm:text-sm placeholder-slate-400 border border-slate-300 focus:border-[#001837] focus:ring-2 focus:ring-[#FFD203] focus:outline-none transition-colors"
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
            <div className="flex items-center justify-between text-xs pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer select-none text-slate-700">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-yycl-navy focus:ring-0 accent-[#001837] cursor-pointer"
                />
                <span className="font-heading font-semibold text-[11px]">Recordarme</span>
              </label>

              <a
                href="https://wa.me/5491154207911?text=Hola%20equipo%20YYCL,%20necesito%20ayuda%20para%20recuperar%20mi%20contrase%C3%B1a%20de%20alumno"
                target="_blank"
                rel="noreferrer"
                className="font-heading font-bold text-xs text-[#834296] hover:underline"
              >
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                variant="primary"
                size="md"
                fullWidth
                isLoading={isSubmitting}
                className="font-heading font-bold text-xs sm:text-sm h-11 shadow-[3px_3px_0px_#EC9519]"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Ingresar a mi Campus
              </Button>
            </div>
          </form>

          {/* Card Footer: Agenda tu diagnóstico */}
          <div className="text-center pt-5 mt-5 border-t border-slate-100">
            <p className="text-xs text-slate-600 font-body-regular">
              ¿Aún no eres alumno de YYCL?{' '}
              <Link
                href="/agendar"
                className="font-heading font-bold text-[#834296] hover:underline block sm:inline mt-1 sm:mt-0"
              >
                Agenda tu diagnóstico gratuito ↗
              </Link>
            </p>
          </div>
        </div>

        {/* WhatsApp Student Support Badge */}
        <div className="mt-4 text-center">
          <a
            href="https://wa.me/5491154207911?text=Hola%20equipo%20YYCL,%20necesito%20asistencia%20con%20mi%20cuenta"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-[#001837] font-medium transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-[#16A34A]" />
            <span>¿Problemas para ingresar? Escríbenos a soporte</span>
          </a>
        </div>
      </div>

      {/* Subtle Bottom Copyright */}
      <div className="text-center text-[11px] text-slate-400 font-fine-print z-10">
        © 2026 Yes You Can Languages. Todos los derechos reservados.
      </div>
    </main>
  );
}
