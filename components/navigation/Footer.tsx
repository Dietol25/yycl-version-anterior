"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/icons/Logo';
import { InstagramIcon, TikTokIcon, LinkedinIcon, YoutubeIcon, FacebookIcon } from '@/components/icons/SocialIcons';
import { CheckCircle2 } from 'lucide-react';

export const Footer = () => {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState('');
  const pathname = usePathname();
  const isEn = pathname?.startsWith('/en');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim().includes('@')) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-yycl-purple text-white transition-colors">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-8 lg:px-12 pt-12 lg:pt-14 pb-8">
        {/* Main Grid: Responsive 1 Col Mobile -> 2 Col Tablet -> 12 Col Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-10 border-b border-white/15">
          
          {/* Col 1: Brand + Tagline + Newsletter (Mobile: full width, Desktop: 4 cols) */}
          <div className="md:col-span-2 lg:col-span-4 space-y-4 pr-0 lg:pr-4">
            <Link href={isEn ? "/en" : "/"} className="inline-flex items-center gap-3">
              <Logo size={42} />
              <span className="font-heading font-extrabold text-xl sm:text-2xl text-yycl-yellow tracking-tight">
                Yes You Can Languages
              </span>
            </Link>

            <p className="text-sm font-heading font-semibold text-white/90 pl-0.5">
              Sí puedes. Yes You Can.
            </p>

            {/* Newsletter */}
            <div className="max-w-sm space-y-2 pt-1">
              <p className="text-xs text-white/85 font-body-regular leading-snug">
                {isEn
                  ? "Get tips and learn something new every month in your inbox."
                  : "Recibe noticias y aprende algo nuevo cada mes en tu correo."}
              </p>

              {subscribed ? (
                <div className="bg-white text-[#001837] border border-black/10 shadow-[3px_3px_0px_#001837] rounded-2xl p-3.5 flex items-center gap-3 animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-heading font-extrabold text-[#001837]">
                      {isEn ? "Subscription confirmed!" : "¡Suscripción confirmada!"}
                    </p>
                    <p className="text-[11px] text-slate-600 font-body-regular">
                      {isEn ? "We sent a welcome message to your email." : "Te enviamos la bienvenida a tu correo."}
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="space-y-2">
                  <input
                    type="email"
                    required
                    placeholder={isEn ? "Your email address" : "Tu correo electrónico"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-11 px-3.5 bg-white text-[#001837] rounded-xl text-xs placeholder-slate-400 focus:outline-none border border-black/10"
                  />
                  <button
                    type="submit"
                    className="w-full h-11 bg-white text-[#001837] font-heading font-bold text-xs rounded-xl border border-black/10 shadow-[2px_2px_0px_#001837] hover:bg-[#FFE2C0] transition-colors cursor-pointer touch-manipulation flex items-center justify-center"
                  >
                    {isEn ? "Subscribe" : "Suscribirme"}
                  </button>
                </form>
              )}

              <p className="text-[10px] text-white/70 leading-tight">
                {isEn
                  ? "By subscribing you accept our privacy policy and receiving updates."
                  : "Al suscribirte aceptas nuestra política de privacidad y recibir actualizaciones."}
              </p>
            </div>
          </div>

          {/* Col 2: EXPLORA / EXPLORE (Desktop: 3 cols) */}
          <div className="space-y-3.5 lg:pl-4 lg:col-span-3">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-[11px]">
              {isEn ? "EXPLORE" : "EXPLORA"}
            </h4>
            {isEn ? (
              <div className="flex flex-col space-y-2 text-xs sm:text-[13px] font-body-regular text-white/90">
                <Link href="/en" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Home</Link>
                <Link href="/en/english-classes" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">English Classes</Link>
                <Link href="/en" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Spanish Classes</Link>
                <Link href="/en/spanish-classes-kids" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Kids & Teens</Link>
                <Link href="/en/about-us" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">About Us</Link>
                <Link href="/en/join-our-team" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Join Our Team</Link>
              </div>
            ) : (
              <div className="flex flex-col space-y-2 text-xs sm:text-[13px] font-body-regular text-white/90">
                <Link href="/" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Inicio</Link>
                <Link href="/como-funciona" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Cómo funciona</Link>
                <Link href="/resultados" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Resultados</Link>
                <Link href="/profesores" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Nuestro equipo</Link>
                <Link href="/sobre-yycl" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Sobre YYCL</Link>
                <Link href="/contacto" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Contacto</Link>
                <Link href="/login" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Plataforma</Link>
                <Link href="/trabaja-con-nosotros" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Trabaja con nosotros</Link>
              </div>
            )}
          </div>

          {/* Col 3: PROGRAMAS / PROGRAMS (Desktop: 3 cols) */}
          <div className="space-y-3.5 lg:col-span-3">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-[11px]">
              {isEn ? "PROGRAMS" : "PROGRAMAS"}
            </h4>
            {isEn ? (
              <div className="flex flex-col space-y-2 text-xs sm:text-[13px] font-body-regular text-white/90">
                <Link href="/en" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Spanish for Adults</Link>
                <Link href="/en/english-classes" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">English for Non-Spanish Speakers</Link>
                <Link href="/en/spanish-classes-kids" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Kids & Teens Program</Link>
                <Link href="/en/about-us" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Our Methodology</Link>
              </div>
            ) : (
              <div className="flex flex-col space-y-2 text-xs sm:text-[13px] font-body-regular text-white/90">
                <Link href="/planes" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Planes de inglés</Link>
                <Link href="/idiomas" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Otros idiomas</Link>
                <Link href="/kids" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Kids & Teens (Niños y adolescentes)</Link>
                <Link href="/empresas" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Capacitación corporativa en idiomas</Link>
                <Link href="/servicios-especiales" className="hover:text-yycl-yellow transition-colors whitespace-nowrap py-0.5">Servicios Especiales</Link>
              </div>
            )}
          </div>

          {/* Col 4: SÍGUENOS / FOLLOW US (Desktop: 2 cols) */}
          <div className="space-y-3.5 lg:pl-2 lg:col-span-2">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-[11px]">
              {isEn ? "FOLLOW US" : "SÍGUENOS"}
            </h4>
            <div className="flex items-center gap-3 text-white pt-1">
              <a href="https://www.instagram.com/yesyoucanlanguages" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow transition-colors flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20" aria-label="Instagram">
                <InstagramIcon size={18} />
              </a>
              <a href="https://www.tiktok.com/@yesyoucan_languages" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow transition-colors flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20" aria-label="TikTok">
                <TikTokIcon size={17} />
              </a>
              <a href="https://www.facebook.com/yesyoucanlanguages" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow transition-colors flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20" aria-label="Facebook">
                <FacebookIcon size={17} />
              </a>
              <a href="https://www.linkedin.com/company/yes-you-can-languages/" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow transition-colors flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20" aria-label="LinkedIn">
                <LinkedinIcon size={17} />
              </a>
              <a href="https://www.youtube.com/@yesyoucanlanguages" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow transition-colors flex items-center justify-center w-8 h-8 rounded-lg bg-white/10 hover:bg-white/20" aria-label="YouTube">
                <YoutubeIcon size={19} />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Single Copyright & Legal */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-fine-print text-white/90">
          <p>© 2026 Yes You Can Languages (YYCL). {isEn ? "All rights reserved." : "Todos los derechos reservados."}</p>
          <div className="flex items-center gap-5 text-white/85">
            <Link href="/legales#privacidad" className="hover:underline hover:text-white">
              {isEn ? "Privacy Policy" : "Privacidad"}
            </Link>
            <Link href="/legales#terminos" className="hover:underline hover:text-white">
              {isEn ? "Terms of Service" : "Términos del servicio"}
            </Link>
            <Link href="/legales#cookies" className="hover:underline hover:text-white">
              Cookies
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
