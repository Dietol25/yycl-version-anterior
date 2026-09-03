"use client";

import React from 'react';
import Link from 'next/link';
import { Star, ShieldCheck, ExternalLink, Quote, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const PreviewDarkResults = () => {
  const reviews = [
    {
      name: "Yuliana Navarro",
      role: "Alumna de inglés conversacional",
      rating: 5,
      comment: "Me han encantado las clases. Me he permitido preguntar, hablar y lanzarme sin miedo. Lo que más valoro es que no hay juzgamientos; por eso aprovecho cada minuto de clase.",
      highlight: "No hay juzgamientos",
      date: "Hace 2 meses",
      avatar: "/assets/profesores/carolina-correal.png"
    },
    {
      name: "Nicolás Ibáñez",
      role: "Profesional en tecnología",
      rating: 5,
      comment: "Lo puedo decir en inglés: 'Jose is THE GOAT'. He progresado mucho en poco tiempo con sus clases. Es súper paciente y pedagógico; me ayudó a soltarme en reuniones laborales.",
      highlight: "He progresado mucho en poco tiempo",
      date: "Hace 3 meses",
      avatar: "/assets/profesores/jose-montoya.png"
    },
    {
      name: "Diana Proaño",
      role: "Estudiante de nivel intermedio",
      rating: 5,
      comment: "YYCL me ayudó a refrescar mis conocimientos y a poner en práctica toda la teoría que había estudiado hace tiempo. Todo de una manera fácil, dinámica y con horarios flexibles.",
      highlight: "Poner en práctica toda la teoría",
      date: "Hace 1 mes",
      avatar: "/assets/profesores/natty-sanchez.png"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-[#001837] text-white relative overflow-hidden transition-colors duration-500">
      
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[radial-gradient(ellipse_at_top,rgba(131,66,150,0.25),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-12 space-y-16 sm:space-y-20">
        
        {/* Encabezado de Sección en Contraste Oscuro (Sofi Health + Lexington) */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xs border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-heading font-extrabold text-[#FFD203]">
            <ShieldCheck className="w-4 h-4 text-[#FFD203]" />
            <span>Prueba Social Verificada</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
            Resultados reales, <br />
            <span className="text-[#FFD203]">no promesas vacías.</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-body-regular leading-relaxed">
            Lo que importa no es cuánto estudiaste antes, sino que esta vez <strong>sí lo consigas</strong>. Esto es lo que dicen quienes ya se soltaron a hablar con nosotros.
          </p>

          {/* Estadísticas de Autoridad (Estilo Berlitz / Wall Street English) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 max-w-2xl mx-auto text-center">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <span className="text-2xl sm:text-3xl font-extrabold font-heading text-[#FFD203] block">5.0 ★</span>
              <span className="text-[11px] font-heading font-semibold text-slate-400">Google Reviews</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <span className="text-2xl sm:text-3xl font-extrabold font-heading text-white block">+1.200</span>
              <span className="text-[11px] font-heading font-semibold text-slate-400">Alumnos formados</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <span className="text-2xl sm:text-3xl font-extrabold font-heading text-[#4DC2DA] block">100%</span>
              <span className="text-[11px] font-heading font-semibold text-slate-400">En vivo con docentes</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <span className="text-2xl sm:text-3xl font-extrabold font-heading text-[#EC9519] block">8+</span>
              <span className="text-[11px] font-heading font-semibold text-slate-400">Países de origen</span>
            </div>
          </div>
        </div>

        {/* Grid de 3 Reseñas Reales en Tarjetas Oscuras Elegantes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="bg-white/5 border border-white/15 rounded-3xl p-6 sm:p-7 flex flex-col justify-between hover:border-[#FFD203]/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#FFD203]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFD203]" />
                    ))}
                  </div>
                  <span className="text-[11px] text-slate-400 font-body-regular">{item.date}</span>
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-heading font-extrabold text-[#FFD203] block">
                    «{item.highlight}»
                  </span>
                  <p className="text-xs sm:text-sm text-slate-200 font-body-regular leading-relaxed">
                    "{item.comment}"
                  </p>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-white/10 flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/10 border border-white/20 overflow-hidden shrink-0">
                  <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-0.5">
                  <h4 className="font-heading font-extrabold text-xs sm:text-sm text-white">
                    {item.name}
                  </h4>
                  <p className="text-[10px] text-slate-400 font-body-regular">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cierre del Bloque Oscuro hacia Google Maps Reviews Oficial */}
        <div className="text-center pt-4 space-y-4">
          <a
            href="https://maps.app.goo.gl/yX3Y8K61r9F4oTFA6"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-heading font-bold text-[#FFD203] hover:underline"
          >
            <span>Ver todas las reseñas verificadas en Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>

          <div className="pt-2">
            <Link href="/agendar">
              <Button
                variant="primary"
                size="lg"
                className="font-heading font-extrabold text-sm sm:text-base px-9 py-4 h-13 shadow-[4px_4px_0px_#EC9519]"
              >
                <span>Quiero estos resultados para mí</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
