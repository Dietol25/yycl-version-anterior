import os

def write_file(rel_path, content):
    full_path = os.path.join(os.getcwd(), rel_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Created: {rel_path}')

# 1. lib/types.ts
write_file('lib/types.ts', '''
export interface Teacher {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  languages: string[];
  certifications: string[];
  avatar: string;
  rating: number;
  classesGiven: number;
  country: string;
  countryFlag: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  price: string;
  period: string;
  popular?: boolean;
  badge?: string;
  description: string;
  features: string[];
  ctaText: string;
  highlightColor?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  avatar: string;
  country: string;
  countryFlag: string;
  quote: string;
  rating: number;
  highlight: string;
}

export interface BookingFormData {
  serviceType: string;
  date: string;
  timeSlot: string;
  firstName: string;
  lastName: string;
  email: string;
  whatsapp: string;
  currentLevel: string;
  goal: string;
  notes?: string;
}
''')

# 2. lib/data.ts
write_file('lib/data.ts', '''
import { Teacher, PricingPlan, Testimonial } from './types';

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
  },
  {
    id: '5',
    name: 'Juliana Silva',
    role: 'Profesora de Portugués',
    specialty: 'Portugués de Negocios para LATAM (Celpe-Bras)',
    bio: 'Enfocada en profesionales que hacen negocios y negociaciones con el mercado brasileño.',
    languages: ['Portugués (Nativo)', 'Español (Bilingüe)'],
    certifications: ['Lic. Letras USP', 'Celpe-Bras Trainer'],
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400',
    rating: 4.97,
    classesGiven: 1650,
    country: 'Brasil',
    countryFlag: '🇧🇷',
  },
  {
    id: '6',
    name: 'Marcus Sterling',
    role: 'Kids & Teens Lead Coach',
    specialty: 'Pedagogía Lúdica & Gamificación',
    bio: 'Crea un ambiente 100% divertido y dinámico donde los niños y jóvenes pierden la timidez de inmediato.',
    languages: ['Inglés (Nativo - Canadá)', 'Español'],
    certifications: ['TEFL Young Learners', 'Child Psychology Dip.'],
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400',
    rating: 4.96,
    classesGiven: 2200,
    country: 'Canadá',
    countryFlag: '🇨🇦',
  },
  {
    id: '7',
    name: 'Elena Gómez',
    role: 'Exams Specialist',
    specialty: 'IELTS, TOEFL & CELPIP Intensive Prep',
    bio: 'Estrategias puntuales para subir bandas de calificación en tiempo récord con simulacros reales.',
    languages: ['Inglés (C2)', 'Español (Nativo)'],
    certifications: ['Certified IELTS Trainer IDP', 'TOEFL iBT Pro'],
    avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=400',
    rating: 4.94,
    classesGiven: 1780,
    country: 'Colombia',
    countryFlag: '🇨🇴',
  },
  {
    id: '8',
    name: 'Robert Hayes',
    role: 'Corporate Training Lead',
    specialty: 'Programas B2B & Presentaciones Ejecutivas',
    bio: 'Ex-consultor de negocios en Chicago, enfocado en presentaciones de alto impacto y ventas en inglés.',
    languages: ['Inglés (Nativo - USA)'],
    certifications: ['MBA Kellogg', 'Corporate ESL Coach'],
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400',
    rating: 4.99,
    classesGiven: 2950,
    country: 'Estados Unidos',
    countryFlag: '🇺🇸',
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'grupal',
    name: 'Plan Grupal Dinámico',
    subtitle: 'Interacción grupal reducida (máximo 4 a 6 personas)',
    price: '$180.000',
    period: 'COP / mes',
    description: 'Ideal para quienes disfrutan practicar en equipo y aprender de las intervenciones de compañeros de su mismo nivel.',
    features: [
      'Clases 100% en vivo (3 sesiones por semana)',
      'Grupos ultra reducidos (máx. 4-6 personas)',
      'Mismo nivel garantizado por test inicial',
      'Club de conversación semanal sin costo extra',
      'Acceso a plataforma 24/7 y material digital',
      'Grabaciones de cada sesión disponibles',
    ],
    ctaText: 'Elegir Plan Grupal',
  },
  {
    id: 'personalizado',
    name: 'Plan 1-a-1 Personalizado',
    subtitle: 'El programa más rápido y enfocado a tus metas',
    price: '$390.000',
    period: 'COP / mes',
    popular: true,
    badge: 'MÁS POPULAR',
    description: 'Atención 100% individual enfocada en tu industria, tus bloqueos específicos y tus horarios.',
    features: [
      'Profesor exclusivo para ti en cada sesión',
      'Horarios flexibles: reprograma con 12h de aviso',
      'Contenido adaptado a tu trabajo (presentaciones, emails, entrevistas)',
      'Corrección fonética y de pronunciación personalizada',
      'Plan acelerado (habla fluido en hasta 4 meses)',
      'Feedback detallado post-clase con reporte de progreso',
      'Simulacros de entrevistas laborales en inglés',
    ],
    ctaText: 'Comenzar 1-a-1 Ahora',
    highlightColor: 'yycl-yellow',
  },
  {
    id: 'duo',
    name: 'Plan Dúo (En Pareja)',
    subtitle: 'Aprende con tu pareja, amigo o compañero de trabajo',
    price: '$280.000',
    period: 'COP / mes (por persona)',
    badge: 'RECOMENDADO',
    description: 'La combinación perfecta de atención semipersonalizada y práctica interactiva con alguien de confianza.',
    features: [
      '2 estudiantes con el mismo profesor en vivo',
      'Horarios coordinados a su conveniencia',
      'Roleplays y dinámicas de conversación real',
      'Ahorro de más del 30% vs clases individuales',
      'Seguimiento conjunto de objetivos',
      'Materiales y plataforma incluidos',
    ],
    ctaText: 'Elegir Plan Dúo',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Tatiana Becerra',
    role: 'Senior Product Manager',
    company: 'Tech Startup Colombia',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    country: 'Colombia',
    countryFlag: '🇨🇴',
    rating: 5,
    highlight: '¡Conseguí el trabajo remoto que buscaba en USD!',
    quote: 'Llevaba años estudiando gramática en institutos tradicionales y me bloqueaba al hablar con clientes de EE.UU. Con YYCL, desde el primer día me obligaron a hablar. En 3 meses pasé mis entrevistas técnicas en inglés con total tranquilidad.'
  },
  {
    id: '2',
    name: 'Carlos Mendoza',
    role: 'Director Financiero',
    company: 'Consultora Multinacional',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    country: 'Colombia',
    countryFlag: '🇨🇴',
    rating: 5,
    highlight: 'Presenté el balance anual a la junta en Londres.',
    quote: 'La paciencia de los profesores y la flexibilidad de horarios para alguien con mi agenda es invaluable. No te juzgan si cometes errores, te enseñan la frase natural que usan los nativos.'
  },
  {
    id: '3',
    name: 'María Paula Echeverry',
    role: 'Médica Especialista',
    company: 'Investigación Clínica',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    country: 'Colombia',
    countryFlag: '🇨🇴',
    rating: 5,
    highlight: 'Aprobé mi examen OET en el primer intento.',
    quote: 'Necesitaba certificar mi inglés médico para una rotación en Canadá. El enfoque 1-a-1 fue decisivo para pulir mi vocabulario científico y soltar la lengua en situaciones de emergencia.'
  },
  {
    id: '4',
    name: 'Felipe Sandoval',
    role: 'Lead Software Architect',
    company: 'Fintech LATAM',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    country: 'México',
    countryFlag: '🇲🇽',
    rating: 5,
    highlight: 'Negocié mi aumento salarial en inglés.',
    quote: 'YYCL tiene una metodología directa al grano. Te enseñan cómo hablar con soltura, cómo debatir y cómo liderar sin traducirte en la cabeza.'
  }
];

export const FAQS = [
  {
    q: '¿Cómo son las clases y qué plataforma utilizan?',
    a: 'Nuestras clases son 100% en vivo a través de Zoom o Google Meet con profesores certificados. En cada sesión tienes interacción constante con dinámicas de conversación guiada y retroalimentación inmediata.'
  },
  {
    q: '¿Qué incluye la sesión de diagnóstico gratuita de 15 minutos?',
    a: 'Un profesor evaluará tu nivel oral actual (A1 a C2), identificará tus bloqueos principales de pronunciación o vocabulario, y te diseñará un plan de estudio personalizado sin ningún compromiso.'
  },
  {
    q: '¿Qué pasa si tengo que cancelar o reprogramar una clase?',
    a: 'En las modalidades Personalizadas (1-a-1) y Dúo puedes reprogramar tu clase avisando con un mínimo de 12 horas de anticipación sin perder la sesión.'
  },
  {
    q: '¿Qué idiomas además de inglés enseñan?',
    a: 'Ofrecemos programas completos en Francés, Portugués, Español para extranjeros (Spanish for Foreigners) y programas especializados para Niños (Kids).'
  },
  {
    q: '¿Tienen opciones para capacitar al equipo de mi empresa?',
    a: 'Sí, disponemos de planes corporativos B2B con reportes de asistencia en tiempo real, medición de ROI, facturación electrónica y contenido adaptado a la industria de tu empresa.'
  }
];
