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
