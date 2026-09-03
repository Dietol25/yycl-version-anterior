import React from 'react';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { TeacherApplicationWizard } from '@/components/application/TeacherApplicationWizard';
import { Heart, Sparkles, Users, Coffee } from 'lucide-react';

export default function TrabajaConNosotrosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDF8F3] text-[#001837]">
      <Navbar />

      <main className="flex-1 py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-10">
          
          {/* Header Ligero y Cálido */}
          <div className="text-center space-y-2 sm:space-y-3">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
              <span className="w-2 h-2 rounded-full bg-[#834296]" />
              <span>Convocatoria Docente YYCL</span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#001837] tracking-tight">
              Trabaja con nosotros
            </h1>

            <p className="text-xs sm:text-base text-slate-600 font-body-regular max-w-xl mx-auto leading-relaxed">
              Buscamos profesores y facilitadores apasionados por la enseñanza humana y conversacional. Un equipo cercano donde enseñar cambia vidas.
            </p>
          </div>

          {/* 3 Value Pillars (Ultra Compactos en Móvil, Expandidos en Desktop) */}
          <div className="grid grid-cols-3 gap-2 sm:gap-6 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-3 sm:p-5 border border-slate-200/80 shadow-2xs space-y-1 sm:space-y-2 text-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-purple-100 text-[#834296] flex items-center justify-center mx-auto">
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-heading font-bold text-[11px] sm:text-sm text-[#001837] leading-tight">Cultura Humana</h3>
              <p className="text-[10px] sm:text-xs text-slate-600 font-body-regular hidden sm:block">
                Clases dinámicas sin rigidez, donde el error es bienvenido.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-3 sm:p-5 border border-slate-200/80 shadow-2xs space-y-1 sm:space-y-2 text-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-100 text-[#EC9519] flex items-center justify-center mx-auto">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-heading font-bold text-[11px] sm:text-sm text-[#001837] leading-tight">100% Remoto</h3>
              <p className="text-[10px] sm:text-xs text-slate-600 font-body-regular hidden sm:block">
                Enseña desde donde estés con horarios adaptados a tu vida.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-3 sm:p-5 border border-slate-200/80 shadow-2xs space-y-1 sm:space-y-2 text-center">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-cyan-100 text-[#0284C7] flex items-center justify-center mx-auto">
                <Users className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <h3 className="font-heading font-bold text-[11px] sm:text-sm text-[#001837] leading-tight">Comunidad Real</h3>
              <p className="text-[10px] sm:text-xs text-slate-600 font-body-regular hidden sm:block">
                Acompañamiento pedagógico constante entre colegas.
              </p>
            </div>
          </div>

          {/* Wizard Form Component */}
          <TeacherApplicationWizard />

        </div>
      </main>

      <Footer />
    </div>
  );
}
