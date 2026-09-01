"use client";

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navigation/Navbar';
import { Footer } from '@/components/navigation/Footer';
import { Button } from '@/components/ui/Button';
import { TeamMemberCard } from '@/components/ui/TeamMemberCard';

export default function ProfesoresPage() {
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
      bio: 'Mi nombre es Gabriel y soy profesor de Inglés. Me apasiona el idioma y me da mucha satisfacción poder enseñarlo de la manera que más me gusta en YYCL.',
      image: '/assets/profesores/gabriel-acosta.png',
      avatarBg: 'bg-[#E0F7FA]',
    },
    {
      id: 'jose-funes',
      name: 'José Funes',
      role: 'Profesor de Inglés',
      bio: 'I bring a little know-how, a sense of humor, and a bit of chaos to teaching English. Somehow, it works.',
      image: '/assets/profesores/jose-funes.png',
      avatarBg: 'bg-[#D4B6E3]',
    },
    {
      id: 'matias-villaverde',
      name: 'Matías Villaverde',
      role: 'Profesor de Inglés',
      bio: 'Hola, soy Matías. Me encanta crear espacios donde mis estudiantes se sientan cómodos, ganen confianza y puedan comunicarse en inglés de manera natural. ¿Me acompañas?',
      image: '/assets/profesores/matias-villaverde.png',
      avatarBg: 'bg-[#FFE2C0]',
    },
    {
      id: 'ana-belen-ochoa',
      name: 'Ana Belén Ochoa',
      role: 'Profesora de Inglés',
      bio: 'Me enfoco en la comunicación real y en hacer del aprendizaje una experiencia positiva. Creo un espacio de confianza donde cada estudiante pueda ganar seguridad y animarse a hablar.',
      image: '/assets/profesores/ana-belen-ochoa.png',
      avatarBg: 'bg-[#CAFFFF]',
    },
    {
      id: 'micaela-sedan',
      name: 'Micaela Sedan',
      role: 'Profesora de Inglés y Español',
      bio: 'Hi! Mi objetivo es crear clases dinámicas, personalizadas y enfocadas en las necesidades de cada estudiante, para que puedan aprender, comunicarse y ganar confianza mientras se divierten.',
      image: '/assets/profesores/micaela-sedan.png',
      avatarBg: 'bg-[#E0F7FA]',
    },
    {
      id: 'sara-dominguez',
      name: 'Sara Dominguez',
      role: 'Profesora de Francés',
      bio: 'Bonjour! En YYCL hago único mi estilo integrando tecnología y materiales de vanguardia para crear clases humanas, apasionantes e innovadoras.',
      image: '/assets/profesores/sara-dominguez.png',
      avatarBg: 'bg-[#D4B6E3]',
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
        {/* 2. TEAM MEMBERS GRID (4 Columnas Desktop / 2 Tablet / 1 Mobile)           */}
        {/* ========================================================================= */}
        <section className="py-12 lg:py-16 bg-white border-t border-slate-100">
          <div className="max-w-[1280px] mx-auto px-5 lg:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
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
            <div className="pt-2">
              <Link href="/agendar">
                <Button
                  variant="primary"
                  size="md"
                  className="font-heading font-bold text-sm sm:text-base px-9 py-3.5 h-12 shadow-[3px_3px_0px_#EC9519]"
                >
                  Agendar entrevista gratis
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
