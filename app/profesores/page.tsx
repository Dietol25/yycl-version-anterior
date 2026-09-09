"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';
import { TeamMemberCard } from '@/components/ui/TeamMemberCard';

export default function ProfesoresPage() {
  // 1. Fundadores / Dirección — Centrados en el medio arriba
  const founders = [
    {
      id: 'natty-sanchez',
      name: 'Natty Sánchez',
      role: 'Co-founder & Head of Studies / CMO',
      bio: 'Nómada y viajera por naturaleza. Desde que descubrí que enseñar transforma vidas, entrego mi corazón a cada persona que aprende conmigo. Mis estudiantes también son mis maestros; por eso, nunca dejo de aprender y crecer para ofrecer siempre algo mejor.',
      image: '/assets/profesores/natty-sanchez.png',
      avatarBg: 'bg-[#FFE2C0]',
    },
    {
      id: 'nestor-montano',
      name: 'Néstor Montaño',
      role: 'Co-founder & CFO / COO',
      bio: 'Curioso de la tecnología y de cómo aprendemos mejor. Me encanta experimentar con estrategias innovadoras y dinámicas: creo firmemente que sin diversión y motivación no hay aprendizaje efectivo.',
      image: '/assets/profesores/nestor-montano.png',
      avatarBg: 'bg-[#CAFFFF]',
    },
  ];

  // 2. Coordinación — Micaela y Carolina centradas en el siguiente bloque
  const coordinators = [
    {
      id: 'micaela-sedan',
      name: 'Micaela Sedan',
      role: 'Coordinadora Académica',
      bio: 'Hi! Mi objetivo es crear clases dinámicas, personalizadas y enfocadas en las necesidades de cada estudiante, para que puedan aprender, comunicarse y ganar confianza mientras se divierten.',
      image: '/assets/profesores/micaela-sedan.png',
      avatarBg: 'bg-[#D4B6E3]',
    },
    {
      id: 'carolina-correal',
      name: 'Carolina Correal',
      role: 'Coordinadora Administrativa y Operativa',
      bio: 'Acompaño procesos, estudiantes y cada detalle detrás de escena para que la comunidad crezca. Detrás de cada clase y meta cumplida hay un equipo que cree profundamente que sí se puede.',
      image: '/assets/profesores/carolina-correal.png',
      avatarBg: 'bg-[#E0F7FA]',
    },
  ];

  // 3. Profesores — Alternancia exacta Hombre y Mujer (5 hombres, 4 mujeres) en grilla armónica 3x3
  const teachers = [
    {
      id: 'alan-vera',
      name: 'Alan Vera',
      role: 'Profesor de Inglés',
      bio: 'Disfruto acompañando a mis alumnos en su proceso, creando clases dinámicas y personalizadas que les permitan ganar confianza y alcanzar sus metas.',
      image: '/assets/profesores/alan-vera.png',
      avatarBg: 'bg-[#FFE2C0]',
    },
    {
      id: 'catalina-fiori',
      name: 'Catalina Fiori',
      role: 'Profesora de Inglés',
      bio: 'Soy teacher en Yes You Can Languages, un espacio donde se comparte la pasión por el aprendizaje. Trabajamos la fluidez en inglés para que puedas expresarte y comprender cada vez mejor.',
      image: '/assets/profesores/catalina-fiori.png',
      avatarBg: 'bg-[#CAFFFF]',
    },
    {
      id: 'gabriel-acosta',
      name: 'Gabriel Acosta',
      role: 'Profesor de Inglés',
      bio: '¡Hola! Me apasiona el idioma y me da mucha satisfacción poder enseñarlo de la manera que más me gusta en YYCL.',
      image: '/assets/profesores/gabriel-acosta.png',
      avatarBg: 'bg-[#E0F7FA]',
    },
    {
      id: 'ana-belen-ochoa',
      name: 'Ana Belén Ochoa',
      role: 'Profesora de Inglés',
      bio: 'Me enfoco en la comunicación real y en hacer del aprendizaje una experiencia positiva. Creo un espacio de confianza donde cada estudiante pueda ganar seguridad y animarse a hablar.',
      image: '/assets/profesores/ana-belen-ochoa.png',
      avatarBg: 'bg-[#D4B6E3]',
    },
    {
      id: 'jose-funes',
      name: 'José Funes',
      role: 'Profesor de Inglés',
      bio: 'Aporto un poco de experiencia, sentido del humor y un poquito de caos a la hora de enseñar inglés. De alguna manera, ¡funciona!',
      image: '/assets/profesores/jose-funes.png',
      avatarBg: 'bg-[#FFE2C0]',
    },
    {
      id: 'sara-dominguez',
      name: 'Sara Dominguez',
      role: 'Profesora de Francés',
      bio: 'Bonjour! En YYCL hago único mi estilo integrando tecnología y materiales de vanguardia para crear clases humanas, apasionantes e innovadoras.',
      image: '/assets/profesores/sara-dominguez.png',
      avatarBg: 'bg-[#D4B6E3]',
    },
    {
      id: 'matias-villaverde',
      name: 'Matías Villaverde',
      role: 'Profesor de Inglés',
      bio: '¡Hola! Me encanta crear espacios donde mis estudiantes se sientan cómodos, ganen confianza y puedan comunicarse en inglés de manera natural. ¿Me acompañas?',
      image: '/assets/profesores/matias-villaverde.png',
      avatarBg: 'bg-[#CAFFFF]',
    },
    {
      id: 'katherin-patino',
      name: 'Katherin Patiño',
      role: 'Profesora de Portugués',
      bio: 'Bom dia!!! En YYCL creo clases dinámicas y divertidas, que aproximen a los estudiantes de la lengua y la cultura brasileña, de forma simple y en confianza, logrando avances significativos en poco tiempo.',
      image: '/assets/profesores/katherine-patino.png',
      avatarBg: 'bg-[#FFE2C0]',
    },
    {
      id: 'nicolas-malchiodi',
      name: 'Nicolás Malchiodi',
      role: 'Profesor de Inglés',
      bio: '¡Buenas! ¿Cómo están? Si están buscando un ambiente relajado, tranquilo, donde pueden equivocarse sin ningún problema, pues yo los espero en Yes You Can Languages. Bye, bye! See you soon!',
      image: '/assets/profesores/nicolas-malchiodi.png',
      avatarBg: 'bg-[#E0F7FA]',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#001837]">
      <Navbar />

      <main className="flex-1">
        {/* ========================================================================= */}
        {/* 1. HERO SECTION (Nuestro equipo / Conoce a tus profesores)                */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#F9FAFB] via-white to-white">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12 text-center space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
              <span className="w-2 h-2 rounded-full bg-[#834296]" />
              <span>Nuestro equipo</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading text-[#001837] tracking-tight leading-[1.15]">
              Conoce a tus profesores
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-body-large max-w-2xl mx-auto leading-relaxed">
              Profesores reales, con años de experiencia, apasionados por ayudarte a hablar con confianza.
            </p>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* 2. TEAM MEMBERS SECTION                                                   */}
        {/* ========================================================================= */}
        <section className="py-12 lg:py-16 bg-white border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12 space-y-12 sm:space-y-16">
            
            {/* Nivel 1: Fundadores (Natty y Néstor) centrados en el medio */}
            <div>
              <div className="text-center mb-8">
                <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#834296]">
                  Fundadores & Dirección
                </span>
              </div>
              <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                {founders.map((member) => (
                  <TeamMemberCard
                    key={member.id}
                    name={member.name}
                    role={member.role}
                    bio={member.bio}
                    image={member.image}
                    avatarBg={member.avatarBg}
                  />
                ))}
              </div>
            </div>

            <div className="w-24 h-px bg-slate-200 mx-auto" />

            {/* Nivel 2: Coordinación (Micaela y Carolina) centradas */}
            <div>
              <div className="text-center mb-8">
                <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-[#001837]">
                  Coordinación
                </span>
              </div>
              <div className="max-w-2xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
                {coordinators.map((member) => (
                  <TeamMemberCard
                    key={member.id}
                    name={member.name}
                    role={member.role}
                    bio={member.bio}
                    image={member.image}
                    avatarBg={member.avatarBg}
                  />
                ))}
              </div>
            </div>

            <div className="w-24 h-px bg-slate-200 mx-auto" />

            {/* Nivel 3: Cuerpo Docente — 9 Profesores intercalados Hombre y Mujer en grilla 3x3 */}
            <div>
              <div className="text-center mb-10">
                <span className="text-xs font-heading font-extrabold uppercase tracking-widest text-slate-500">
                  Profesores
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
                {teachers.map((teacher) => (
                  <TeamMemberCard
                    key={teacher.id}
                    name={teacher.name}
                    role={teacher.role}
                    bio={teacher.bio}
                    image={teacher.image}
                    avatarBg={teacher.avatarBg}
                  />
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* ========================================================================= */}
        {/* 3. CIERRE CTA: Agenda tu entrevista gratuita                              */}
        {/* ========================================================================= */}
        <section className="py-20 lg:py-24 bg-gradient-to-b from-[#F9FAFB] to-white border-t border-slate-100 text-center">
          <div className="max-w-2xl mx-auto px-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#001837] tracking-tight leading-tight">
              Agenda tu entrevista gratuita
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-medium">
              Sin costo, sin compromiso.
            </p>
            <div className="pt-2 flex flex-col items-center">
              <Button
                href="/agendar"
                variant="primary"
                size="md"
                className="font-heading font-bold text-sm sm:text-base px-9 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
              >
                Agendar entrevista
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
