import { Teacher, PricingPlan, Testimonial } from './types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Diana Proaño',
    role: 'Guía de Turismo',
    company: 'Google Reviews 5.0★',
    avatar: '/assets/avatares/mujer.png',
    country: 'Ecuador',
    countryFlag: '🇪🇨',
    rating: 5,
    highlight: 'Pude mejorar la gramática, vocabulario y habla con total soltura.',
    quote: 'YYCL me ayudó a refrescar mis conocimientos y a practicar toda la teoría. Pude soltarme al hablar, perder la pena y mejorar mi vocabulario con un horario súper flexible.'
  },
  {
    id: '2',
    name: 'Clara Reinoso',
    role: 'Profesional en Finanzas',
    company: 'Google Reviews 5.0★',
    avatar: '/assets/avatares/mujer.png',
    country: 'México',
    countryFlag: '🇲🇽',
    rating: 5,
    highlight: 'Gané seguridad para expresarme con soltura.',
    quote: 'Las clases son súper dinámicas y personalizadas. Pasé de tener temor a hablar en juntas de trabajo a expresarme con fluidez y confianza total.'
  },
  {
    id: '3',
    name: 'Jefferson González',
    role: 'Desarrollador de Software',
    company: 'Google Reviews 5.0★',
    avatar: '/assets/avatares/hombre.png',
    country: 'Estados Unidos',
    countryFlag: '🇺🇸',
    rating: 5,
    highlight: 'El método conversacional me ayudó a integrarme rápido.',
    quote: 'Vivir en USA exige comunicarse sin trabas. Con el enfoque 100% conversacional de YYCL logré soltarme en reuniones técnicas y el día a día sin miedo a equivocarme.'
  },
  {
    id: '4',
    name: 'Nicolás Ibáñez',
    role: 'Profesional en Tecnología',
    company: 'Google Reviews 5.0★',
    avatar: '/assets/avatares/hombre.png',
    country: 'Argentina',
    countryFlag: '🇦🇷',
    rating: 5,
    highlight: 'Jose is THE GOAT!',
    quote: 'Lo puedo decir en inglés: "Jose is THE GOAT". He progresado mucho en poco tiempo con sus clases! Siempre muy paciente y pedagógico.'
  },
  {
    id: '5',
    name: 'Yulian Sentani',
    role: 'Especialista en Marketing Digital',
    company: 'Google Reviews 5.0★',
    avatar: '/assets/avatares/hombre.png',
    country: 'España',
    countryFlag: '🇪🇸',
    rating: 5,
    highlight: 'Clases prácticas desde el primer minuto.',
    quote: 'Me encanta que no hay juzgamientos ni teoría aburrida; te lanzas a hablar desde la primera clase. Es el empujón práctico que necesitaba para dar el salto profesional.'
  },
  {
    id: '6',
    name: 'Yuliana Navarro',
    role: 'Estudiante YYCL',
    company: 'Google Reviews 5.0★',
    avatar: '/assets/avatares/mujer.png',
    country: 'Colombia',
    countryFlag: '🇨🇴',
    rating: 5,
    highlight: 'Me he permitido preguntar, hablar y lanzarme sin juzgamientos.',
    quote: 'Me han encantado... Me he permitido preguntar, hablar y lanzarme. Me gusta que no hay juzgamientos; por eso aprovecho todo.'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'grupal',
    name: 'Grupal',
    subtitle: 'Aprende con otros, se contagia la energía de un grupo chico (máx. 8 personas).',
    price: 'A consultar',
    period: 'en tu entrevista',
    description: 'El precio lo conversamos con calma en tu entrevista gratuita según tu frecuencia y objetivos.',
    features: [
      'Grupos reducidos de máximo 8 alumnos',
      'Clases 100% en vivo con profesores reales',
      'Club de Conversación semanal incluido',
      'Acceso a plataforma de práctica 24/7',
      'Llamadas simuladas e invitados internacionales',
    ],
    ctaText: 'Agenda tu entrevista gratuita',
  },
  {
    id: 'personalizado',
    name: 'Personalizada (1-a-1)',
    subtitle: 'Un profesor solo para ti, un plan pensado a tu medida.',
    price: 'A consultar',
    period: 'en tu entrevista',
    popular: true,
    badge: 'MÁS POPULAR',
    description: 'El precio lo conversamos con calma en tu entrevista gratuita según tu disponibilidad y requerimientos.',
    features: [
      'Profesor exclusivo para ti en cada sesión',
      'Horarios flexibles adaptados a tu agenda',
      'Contenido enfocado en tu trabajo y metas',
      'Club de Conversación semanal incluido',
      'Acceso a plataforma de práctica 24/7',
      'Preparación de entrevistas y presentaciones',
    ],
    ctaText: 'Agenda tu entrevista gratuita',
    highlightColor: 'yycl-yellow',
  },
  {
    id: 'duo',
    name: 'Dúo (En Pareja)',
    subtitle: 'La Personalizada en pareja: mismo profesor exclusivo, compartido con alguien que va por lo mismo.',
    price: 'A consultar',
    period: 'en tu entrevista',
    badge: 'RECOMENDADO',
    description: 'El precio lo conversamos con calma en tu entrevista gratuita con descuento para ambos.',
    features: [
      '2 estudiantes con el mismo docente en vivo',
      'Mismo plan a medida y profesor exclusivo',
      'Horarios coordinados a su conveniencia',
      'Club de Conversación semanal incluido',
      'Acceso a plataforma de práctica 24/7',
    ],
    ctaText: 'Agenda tu entrevista gratuita',
  }
];

export const TEACHERS: Teacher[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'Lead English Coach',
    specialty: 'Inglés de Negocios & Fluidez Conversacional',
    bio: 'Más de 8 años ayudando a ejecutivos en América Latina a liderar reuniones internacionales sin bloqueos.',
    languages: ['Inglés (Nativo - USA)', 'Español (Avanzado)'],
    certifications: ['CELTA Certified', 'MA Applied Linguistics'],
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400',
    rating: 4.98,
    classesGiven: 2450,
    country: 'Estados Unidos',
    countryFlag: '🇺🇸',
  },
  {
    id: '2',
    name: "David O'Connor",
    role: 'Senior Speaking Coach',
    specialty: 'Reducción de Acento & Entrevistas de Trabajo',
    bio: 'Especialista en preparar a ingenieros y profesionales de tecnología para entrevistas en empresas globales.',
    languages: ['Inglés (Nativo - UK)', 'Español (Intermedio)'],
    certifications: ['DELTA Cambridge', 'Interview Coach Pro'],
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400',
    rating: 4.95,
    classesGiven: 1890,
    country: 'Reino Unido',
    countryFlag: '🇬🇧',
  },
  {
    id: '3',
    name: 'Camila Restrepo',
    role: 'Bilingual Accent Coach',
    specialty: 'Inglés desde Cero & Desbloqueo Mental',
    bio: 'Comprende exactamente las dificultades de los hispanohablantes al pronunciar fonemas complejos en inglés.',
    languages: ['Español (Nativo)', 'Inglés (C2 Bilingüe)'],
    certifications: ['TESOL Advanced', 'Neurolanguage Coach'],
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=400',
    rating: 4.99,
    classesGiven: 3100,
    country: 'Colombia',
    countryFlag: '🇨🇴',
  },
  {
    id: '4',
    name: 'Jean-Luc Moreau',
    role: 'Profesor de Francés',
    specialty: 'Francés Conversacional & Inmigración Canadá (TEF)',
    bio: 'Nativo de Lyon, especialista en preparar a familias y profesionales para sus exámenes oficiales de inmigración.',
    languages: ['Francés (Nativo)', 'Español (Fluido)', 'Inglés'],
    certifications: ['DAEFLE Paris', 'Examinador TEF/DELF'],
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400',
    rating: 4.92,
    classesGiven: 1420,
    country: 'Francia',
    countryFlag: '🇫🇷',
  }
];

export const FAQS = [
  {
    q: '¿Por qué no publican los precios exactos en la web?',
    a: 'Porque cada plan se ajusta a tu frecuencia semanal, tu nivel y si requieres preparación específica (ej. entrevistas o exámenes internacionales). En tu entrevista gratuita de 30 minutos te damos el valor exacto sin ningún compromiso.'
  },
  {
    q: '¿Qué incluye la entrevista gratuita?',
    a: 'Un diagnóstico oral de 30 minutos donde conversamos para conocer tu nivel real, tus bloqueos y trazamos tu plan personalizado.'
  },
  {
    q: '¿El Club de Conversación tiene costo extra?',
    a: 'No. El Club de Conversación semanal y el acceso a la plataforma de práctica están incluidos en todas las modalidades.'
  },
  {
    q: '¿Puedo reprogramar mis clases?',
    a: 'Sí. En modalidad personalizada y en dúo puedes reprogramar avisando con anticipación para no perder tu sesión.'
  }
];
