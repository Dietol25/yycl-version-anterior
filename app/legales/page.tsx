import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Shield, FileText, Cookie, ChevronRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Avisos Legales | Yes You Can Languages (YYCL)',
  description: 'Términos del servicio, política de privacidad y política de cookies de Yes You Can Languages.',
};

export default function LegalesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />

      <main className="flex-1 py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1000px] mx-auto px-5 lg:px-8">
          
          {/* Header */}
          <div className="mb-10 sm:mb-14 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
              <span className="w-2 h-2 rounded-full bg-[#834296]" />
              <span>Marco Legal e Institucional</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-[#001837] tracking-tight">
              Avisos Legales
            </h1>
            <p className="text-sm sm:text-base text-slate-600 font-body max-w-2xl">
              Información clara sobre cómo cuidamos tus datos, las condiciones de nuestros programas y el uso responsable de nuestra plataforma en Yes You Can Languages.
            </p>

            {/* Quick Navigation Anchors */}
            <div className="flex flex-wrap items-center gap-2 pt-4">
              <a
                href="#privacidad"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-heading font-bold text-slate-700 hover:text-[#834296] hover:bg-purple-50/50 hover:border-purple-200 transition-all cursor-pointer"
              >
                <Shield className="w-4 h-4 text-[#834296]" />
                <span>Privacidad</span>
              </a>
              <a
                href="#terminos"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-heading font-bold text-slate-700 hover:text-[#834296] hover:bg-purple-50/50 hover:border-purple-200 transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-[#834296]" />
                <span>Términos del servicio</span>
              </a>
              <a
                href="#cookies"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-heading font-bold text-slate-700 hover:text-[#834296] hover:bg-purple-50/50 hover:border-purple-200 transition-all cursor-pointer"
              >
                <Cookie className="w-4 h-4 text-[#834296]" />
                <span>Cookies</span>
              </a>
            </div>
          </div>

          <div className="space-y-12 sm:space-y-16">

            {/* 1. SECCIÓN: POLÍTICA DE PRIVACIDAD */}
            <section id="privacidad" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[3px_3px_0px_#001837] space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-9 h-9 rounded-xl bg-purple-100/80 text-[#834296] flex items-center justify-center">
                  <Shield className="w-5 h-5 stroke-[2.2]" />
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-[#001837] tracking-tight">
                  Política de Privacidad
                </h2>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                <p>
                  En <strong>Yes You Can Languages</strong> nos comprometemos a proteger y respetar la privacidad de los usuarios que se comunican con nosotros, solicitan información o participan en nuestros programas.
                </p>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#001837] pt-2">
                  1. Información que recopilamos
                </h3>
                <p>
                  Recopilamos únicamente los datos necesarios para coordinar entrevistas diagnósticas, gestionar la relación formativa e impartir clases (por ejemplo: nombre, dirección de correo electrónico, teléfono de contacto y nivel orientativo de idioma).
                </p>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#001837] pt-2">
                  2. Uso de la información
                </h3>
                <p>
                  Tus datos personales se utilizan exclusivamente para:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Agendar, confirmar y recordar sesiones de entrevista o clases con tu profesor.</li>
                  <li>Brindarte seguimiento pedagógico y acceso a recursos didácticos.</li>
                  <li>Enviar comunicaciones estrictamente relacionadas con el servicio o actualizaciones relevantes.</li>
                </ul>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#001837] pt-2">
                  3. Confidencialidad y derechos
                </h3>
                <p>
                  No comercializamos ni cedemos tus datos personales a terceros con propósitos publicitarios. En cualquier momento puedes solicitar la actualización o supresión de tus datos escribiéndonos a nuestro canal de soporte y coordinación académica.
                </p>
              </div>
            </section>

            {/* 2. SECCIÓN: TÉRMINOS DEL SERVICIO */}
            <section id="terminos" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[3px_3px_0px_#001837] space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-9 h-9 rounded-xl bg-amber-100/80 text-[#EC9519] flex items-center justify-center">
                  <FileText className="w-5 h-5 stroke-[2.2]" />
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-[#001837] tracking-tight">
                  Términos del Servicio
                </h2>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                <p>
                  El acceso a las actividades y programas formativos brindados por <strong>Yes You Can Languages</strong> implica el acuerdo con las siguientes pautas de convivencia y compromiso académico.
                </p>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#001837] pt-2">
                  1. Modalidades y sesiones
                </h3>
                <p>
                  Nuestros cursos se imparten en vivo a través de plataformas virtuales con profesores reales. La duración, frecuencia y metodología responden al plan acordado (Personalizada, Dúo, Grupal o Corporativa).
                </p>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#001837] pt-2">
                  2. Puntualidad y reprogramaciones
                </h3>
                <p>
                  Para preservar el ritmo pedagógico y el respeto por el tiempo de estudiantes y docentes, las reprogramaciones de sesiones individuales deben solicitarse con la antelación mínima estipulada en la bienvenida al curso.
                </p>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#001837] pt-2">
                  3. Uso respetuoso del entorno educativo
                </h3>
                <p>
                  Promovemos un espacio seguro, empático y libre de juzgamientos donde equivocarse es bienvenido como parte del aprendizaje. No se toleran conductas discriminatorias ni faltas de respeto entre estudiantes o hacia el equipo docente.
                </p>
              </div>
            </section>

            {/* 3. SECCIÓN: POLÍTICA DE COOKIES */}
            <section id="cookies" className="scroll-mt-28 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-[3px_3px_0px_#001837] space-y-4">
              <div className="flex items-center gap-3 pb-2 border-b border-slate-100">
                <span className="w-9 h-9 rounded-xl bg-sky-100/80 text-[#0284C7] flex items-center justify-center">
                  <Cookie className="w-5 h-5 stroke-[2.2]" />
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold font-heading text-[#001837] tracking-tight">
                  Política de Cookies
                </h2>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 font-body leading-relaxed">
                <p>
                  Este sitio web utiliza cookies técnicas y funcionales esenciales para asegurar una correcta navegación y recordar preferencias de visualización.
                </p>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#001837] pt-2">
                  1. ¿Qué tipos de cookies usamos?
                </h3>
                <ul className="list-disc pl-5 space-y-1">
                  <li><strong>Cookies técnicas esenciales:</strong> Necesarias para permitir la carga correcta de componentes interactivos y navegación segura.</li>
                  <li><strong>Cookies de preferencias:</strong> Recuerdan tu selección de idioma (Español / Inglés) entre visitas.</li>
                  <li><strong>Cookies de análisis anónimo:</strong> Nos ayudan a entender el volumen de visitas y mejorar la usabilidad del sitio web sin identificar individualmente al usuario.</li>
                </ul>
                <h3 className="font-heading font-bold text-sm sm:text-base text-[#001837] pt-2">
                  2. Control y configuración
                </h3>
                <p>
                  Puedes bloquear o eliminar las cookies en cualquier momento a través de la configuración de privacidad de tu navegador web (Chrome, Safari, Firefox, Edge).
                </p>
              </div>
            </section>

          </div>

          {/* Contact note */}
          <div className="mt-12 p-6 rounded-2xl bg-slate-50 border border-slate-100 text-center space-y-2">
            <p className="text-xs sm:text-sm font-heading font-bold text-[#001837]">
              ¿Tienes consultas sobre nuestras políticas o términos?
            </p>
            <p className="text-xs text-slate-500">
              Escríbenos a nuestro equipo en Yes You Can Languages para resolver cualquier duda con total claridad.
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
