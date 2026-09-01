"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, ChevronLeft, GraduationCap, Star, ArrowUpRight } from 'lucide-react';
import { Logo } from '@/components/icons/Logo';
import { Button } from '@/components/ui/Button';
import { LanguageToggle } from '@/components/navigation/LanguageToggle';

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const [programasOpen, setProgramasOpen] = useState(false);
  const [sobreOpen, setSobreOpen] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex justify-end animate-in fade-in duration-200">
      {/* Slide-in White Mobile Menu Drawer - Compacto y sin scroll excesivo */}
      <div className="w-full max-w-[320px] sm:max-w-[360px] h-full bg-white flex flex-col justify-between p-5 sm:p-6 shadow-2xl animate-in slide-in-from-right duration-200 overflow-y-auto">
        <div className="space-y-5">
          
          {/* 1. Header con Logo + Language Toggle + Botón Cerrar */}
          <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
            <Link href="/" onClick={onClose} className="flex items-center gap-2">
              <Logo size={40} />
            </Link>

            <div className="flex items-center gap-2">
              <LanguageToggle />
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-slate-500 hover:text-[#001837] transition-colors rounded-full hover:bg-slate-100 cursor-pointer"
                aria-label="Cerrar menú"
              >
                <ChevronLeft className="w-6 h-6 text-slate-400" />
              </button>
            </div>
          </div>

          {/* 2. Lista de Navegación Compacta con Acordeones */}
          <nav className="space-y-1">
            
            {/* Inicio */}
            <Link
              href="/"
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-xl text-[15px] font-heading font-bold transition-colors ${
                pathname === '/' ? 'text-[#834296] bg-purple-50/70' : 'text-[#001837] hover:bg-slate-50'
              }`}
            >
              Inicio
            </Link>

            {/* Cómo funciona */}
            <Link
              href="/como-funciona"
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-xl text-[15px] font-heading font-bold transition-colors ${
                pathname === '/como-funciona' ? 'text-[#834296] bg-purple-50/70' : 'text-[#001837] hover:bg-slate-50'
              }`}
            >
              Cómo funciona
            </Link>

            {/* Resultados */}
            <Link
              href="/resultados"
              onClick={onClose}
              className={`block px-3 py-2.5 rounded-xl text-[15px] font-heading font-bold transition-colors ${
                pathname === '/resultados' ? 'text-[#834296] bg-purple-50/70' : 'text-[#001837] hover:bg-slate-50'
              }`}
            >
              Resultados
            </Link>

            {/* Acordeón: Nuestros programas */}
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setProgramasOpen(!programasOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[15px] font-heading font-bold text-[#001837] hover:bg-slate-50 transition-colors cursor-pointer text-left"
              >
                <span>Nuestros programas</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${programasOpen ? 'rotate-180 text-[#834296]' : ''}`} />
              </button>

              {programasOpen && (
                <div className="pl-3 pr-1 py-1 space-y-1 animate-in fade-in-50 duration-150 border-l-2 border-[#834296]/20 ml-3">
                  <Link
                    href="/planes"
                    onClick={onClose}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-heading font-semibold text-slate-700 hover:text-[#834296] hover:bg-purple-50/40"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#834296] shrink-0" />
                    <span>Nuestros programas</span>
                  </Link>
                  <Link
                    href="/idiomas"
                    onClick={onClose}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-heading font-semibold text-slate-700 hover:text-[#834296] hover:bg-purple-50/40"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#EC9519] shrink-0" />
                    <span>Otros idiomas</span>
                  </Link>
                  <Link
                    href="/kids"
                    onClick={onClose}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-heading font-semibold text-slate-700 hover:text-[#834296] hover:bg-purple-50/40"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#4DC2DA] shrink-0" />
                    <span>Kids & Teens</span>
                  </Link>
                  <Link
                    href="/empresas"
                    onClick={onClose}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-heading font-semibold text-slate-700 hover:text-[#834296] hover:bg-purple-50/40"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#001837] shrink-0" />
                    <span>Capacitación corporativa</span>
                  </Link>
                  <Link
                    href="/servicios-especiales"
                    onClick={onClose}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-heading font-semibold text-slate-700 hover:text-[#834296] hover:bg-purple-50/40"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#EC9519] shrink-0" />
                    <span>Servicios Especiales</span>
                  </Link>
                </div>
              )}
            </div>

            {/* Acordeón: Sobre YYCL */}
            <div className="space-y-1">
              <button
                type="button"
                onClick={() => setSobreOpen(!sobreOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-[15px] font-heading font-bold text-[#001837] hover:bg-slate-50 transition-colors cursor-pointer text-left"
              >
                <span>Sobre YYCL</span>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-200 ${sobreOpen ? 'rotate-180 text-[#834296]' : ''}`} />
              </button>

              {sobreOpen && (
                <div className="pl-3 pr-1 py-1 space-y-1 animate-in fade-in-50 duration-150 border-l-2 border-[#834296]/20 ml-3">
                  <Link
                    href="/sobre-yycl"
                    onClick={onClose}
                    className="block px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-heading font-semibold text-slate-700 hover:text-[#834296] hover:bg-purple-50/40"
                  >
                    Sobre YYCL
                  </Link>
                  <Link
                    href="/profesores"
                    onClick={onClose}
                    className="block px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-heading font-semibold text-slate-700 hover:text-[#834296] hover:bg-purple-50/40"
                  >
                    Nuestro equipo
                  </Link>
                  <Link
                    href="/trabaja-con-nosotros"
                    onClick={onClose}
                    className="block px-2.5 py-1.5 rounded-lg text-xs sm:text-sm font-heading font-semibold text-slate-700 hover:text-[#834296] hover:bg-purple-50/40"
                  >
                    Trabaja con nosotros
                  </Link>
                </div>
              )}
            </div>

            {/* Acceso sobrio a Plataforma de Alumnos */}
            <div className="pt-2">
              <Link
                href="/login"
                onClick={onClose}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#3C4C92] hover:bg-slate-100 transition-colors shadow-2xs"
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-[#3C4C92]" />
                  <span className="font-heading font-bold text-xs">Plataforma de Alumnos</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </Link>
            </div>
          </nav>
        </div>

        {/* 3. Bottom CTA & Redes */}
        <div className="pt-4 border-t border-slate-100 space-y-2.5">
          <Link href="/agendar" onClick={onClose}>
            <Button
              variant="primary"
              size="md"
              fullWidth
              className="font-heading font-bold text-xs sm:text-sm h-11 shadow-[3px_3px_0px_#EC9519]"
            >
              Agenda tu entrevista gratuita
            </Button>
          </Link>

          <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400 font-medium">
            <Star className="w-3 h-3 fill-[#FFD203] text-[#FFD203]" />
            <span>5.0 en Google Reviews · @yesyoucanlanguages</span>
          </div>
        </div>
      </div>
    </div>
  );
};
