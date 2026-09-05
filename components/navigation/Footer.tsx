"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '@/components/icons/Logo';
import { InstagramIcon, TikTokIcon, LinkedinIcon, YoutubeIcon, FacebookIcon, XIcon } from '@/components/icons/SocialIcons';
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
      {/* ========================================================================= */}
      {/* DESKTOP FOOTER (>= lg screens)                                            */}
      {/* ========================================================================= */}
      <div className="hidden lg:block max-w-[1280px] mx-auto px-8 lg:px-12 pt-14 pb-8">
        <div className="grid grid-cols-12 gap-6 xl:gap-8 pb-12 border-b border-white/15">
          {/* Col 1: Marca + Tagline + Newsletter (4 cols) */}
          <div className="col-span-4 space-y-3.5 pr-2">
            <Link href={isEn ? "/en" : "/"} className="flex items-center gap-3">
              <Logo size={44} />
              <span className="font-heading font-extrabold text-2xl text-yycl-yellow tracking-tight">
                Yes You Can Languages
              </span>
            </Link>

            <p className="text-sm font-heading font-semibold text-white/90 pl-0.5">
              Sí puedes. Yes You Can.
            </p>

            {/* Newsletter Compacto */}
            <div className="max-w-[280px] space-y-2 pt-1">
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
                    className="w-full h-10 px-3.5 bg-white text-[#001837] rounded-xl text-xs placeholder-slate-400 focus:outline-none border border-black/10"
                  />
                  <button
                    type="submit"
                    className="w-full h-10 bg-white text-[#001837] font-heading font-bold text-xs rounded-xl border border-black/10 shadow-[2px_2px_0px_#001837] hover:bg-[#FFE2C0] transition-colors cursor-pointer touch-manipulation"
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

          {/* Col 2: EXPLORA / EXPLORE (3 cols) */}
          <div className="col-span-3 space-y-3.5 pl-4">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-[11px]">
              {isEn ? "EXPLORE" : "EXPLORA"}
            </h4>
            {isEn ? (
              <div className="flex flex-col space-y-2 text-[13px] font-body-regular text-white/90">
                <Link href="/en" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Home</Link>
                <Link href="/en/english-classes" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">English Classes</Link>
                <Link href="/en" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Spanish Classes</Link>
                <Link href="/en/spanish-classes-kids" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Kids & Teens</Link>
                <Link href="/en/about-us" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">About Us</Link>
                <Link href="/en/join-our-team" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Join Our Team</Link>
              </div>
            ) : (
              <div className="flex flex-col space-y-2 text-[13px] font-body-regular text-white/90">
                <Link href="/" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Inicio</Link>
                <Link href="/como-funciona" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Cómo funciona</Link>
                <Link href="/resultados" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Resultados</Link>
                <Link href="/profesores" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Nuestro equipo</Link>
                <Link href="/sobre-yycl" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Sobre YYCL</Link>
                <Link href="/login" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Plataforma</Link>
                <Link href="/trabaja-con-nosotros" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Trabaja con nosotros</Link>
              </div>
            )}
          </div>

          {/* Col 3: NUESTROS PROGRAMAS / PROGRAMS (3 cols) */}
          <div className="col-span-3 space-y-3.5">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-[11px]">
              {isEn ? "PROGRAMS" : "NUESTROS PROGRAMAS"}
            </h4>
            {isEn ? (
              <div className="flex flex-col space-y-2 text-[13px] font-body-regular text-white/90">
                <Link href="/en" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Spanish for Adults</Link>
                <Link href="/en/english-classes" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">English for Non-Spanish Speakers</Link>
                <Link href="/en/spanish-classes-kids" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Kids & Teens Program</Link>
                <Link href="/en/about-us" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Our Methodology</Link>
              </div>
            ) : (
              <div className="flex flex-col space-y-2 text-[13px] font-body-regular text-white/90">
                <Link href="/planes" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Nuestros programas</Link>
                <Link href="/idiomas" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Otros idiomas</Link>
                <Link href="/kids" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Kids & Teens</Link>
                <Link href="/empresas" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Capacitación corporativa en idiomas</Link>
                <Link href="/servicios-especiales" className="hover:text-yycl-yellow transition-colors whitespace-nowrap">Servicios Especiales</Link>
              </div>
            )}
          </div>

          {/* Col 4: SÍGUENOS / FOLLOW US (2 cols) */}
          <div className="col-span-2 space-y-3.5 pl-2">
            <h4 className="font-heading font-bold text-white uppercase tracking-wider text-[11px]">
              {isEn ? "FOLLOW US" : "SÍGUENOS"}
            </h4>
            <div className="flex items-center gap-3.5 text-white pt-1">
              <a href="https://www.instagram.com/yesyoucanlanguages" target="_blank" rel="noreferrer" className="text-white/90 hover:text-yycl-yellow transition-colors flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/10" aria-label="Instagram">
                <InstagramIcon size={20} />
              </a>
              <a href="https://www.tiktok.com/@yesyoucan_languages" target="_blank" rel="noreferrer" className="text-white/90 hover:text-yycl-yellow transition-colors flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/10" aria-label="TikTok">
                <TikTokIcon size={19} />
              </a>
              <a href="https://www.facebook.com/yesyoucan.languages.7" target="_blank" rel="noreferrer" className="text-white/90 hover:text-yycl-yellow transition-colors flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/10" aria-label="Facebook">
                <FacebookIcon size={19} />
              </a>
              <a href="https://www.linkedin.com/company/yes-you-can-languages/" target="_blank" rel="noreferrer" className="text-white/90 hover:text-yycl-yellow transition-colors flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/10" aria-label="LinkedIn">
                <LinkedinIcon size={19} />
              </a>
              <a href="https://www.youtube.com/@yesyoucanlanguages" target="_blank" rel="noreferrer" className="text-white/90 hover:text-yycl-yellow transition-colors flex items-center justify-center w-8 h-8 rounded-lg hover:bg-white/10" aria-label="YouTube">
                <YoutubeIcon size={21} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legales */}
        <div className="pt-6 flex items-center justify-between text-[11px] font-fine-print text-white">
          <p>© 2026 Yes You Can Languages. {isEn ? "All rights reserved." : "Todos los derechos reservados."}</p>
          <div className="flex items-center gap-6 text-white/90">
            <Link href={isEn ? "/en/about-us" : "/sobre-yycl"} className="hover:underline hover:text-white">
              {isEn ? "Privacy Policy" : "Privacidad"}
            </Link>
            <Link href={isEn ? "/en/about-us" : "/sobre-yycl"} className="hover:underline hover:text-white">
              {isEn ? "Terms of Service" : "Términos del servicio"}
            </Link>
            <Link href={isEn ? "/en/about-us" : "/sobre-yycl"} className="hover:underline hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE FOOTER (< lg screens)                                              */}
      {/* ========================================================================= */}
      <div className="block lg:hidden px-5 py-8 space-y-6 max-w-sm mx-auto">
        <div className="flex items-center gap-2.5">
          <Logo size={40} />
          <span className="font-heading font-extrabold text-lg text-yycl-yellow tracking-tight">
            Yes You Can Languages
          </span>
        </div>

        {/* Mobile Newsletter Form */}
        <div className="space-y-2">
          <p className="text-xs font-body-regular text-white leading-snug">
            {isEn
              ? "Get tips and learn something new every month in your inbox."
              : "Recibe noticias y aprende algo nuevo cada mes en tu correo."}
          </p>

          {subscribed ? (
            <div className="bg-white text-[#001837] border border-black/10 shadow-[3px_3px_0px_#001837] rounded-2xl p-4 flex items-center gap-3 animate-in fade-in zoom-in-95 duration-200">
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

        <div className="space-y-2 pt-1">
          <h4 className="font-heading font-bold text-white text-[11px] uppercase tracking-wider">
            {isEn ? "Explore" : "Explora"}
          </h4>
          {isEn ? (
            <div className="flex flex-col space-y-2 text-xs font-body-regular text-white/90">
              <Link href="/en" className="hover:text-yycl-yellow py-0.5">Home</Link>
              <Link href="/en/english-classes" className="hover:text-yycl-yellow py-0.5">English Classes</Link>
              <Link href="/en" className="hover:text-yycl-yellow py-0.5">Spanish Classes</Link>
              <Link href="/en/spanish-classes-kids" className="hover:text-yycl-yellow py-0.5">Kids & Teens</Link>
              <Link href="/en/about-us" className="hover:text-yycl-yellow py-0.5">About Us</Link>
              <Link href="/en/join-our-team" className="hover:text-yycl-yellow py-0.5">Join Our Team</Link>
            </div>
          ) : (
            <div className="flex flex-col space-y-2 text-xs font-body-regular text-white/90">
              <Link href="/" className="hover:text-yycl-yellow py-0.5">Inicio</Link>
              <Link href="/como-funciona" className="hover:text-yycl-yellow py-0.5">Cómo funciona</Link>
              <Link href="/resultados" className="hover:text-yycl-yellow py-0.5">Resultados</Link>
              <Link href="/profesores" className="hover:text-yycl-yellow py-0.5">Nuestro equipo</Link>
              <Link href="/sobre-yycl" className="hover:text-yycl-yellow py-0.5">Sobre YYCL</Link>
              <Link href="/login" className="hover:text-yycl-yellow py-0.5">Plataforma</Link>
              <Link href="/trabaja-con-nosotros" className="hover:text-yycl-yellow py-0.5">Trabaja con nosotros</Link>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h4 className="font-heading font-bold text-white text-[11px] uppercase tracking-wider">
            {isEn ? "Programs" : "Nuestros programas"}
          </h4>
          {isEn ? (
            <div className="flex flex-col space-y-2 text-xs font-body-regular text-white/90">
              <Link href="/en" className="hover:text-yycl-yellow py-0.5">Spanish for Adults</Link>
              <Link href="/en/english-classes" className="hover:text-yycl-yellow py-0.5">English for Non-Spanish Speakers</Link>
              <Link href="/en/spanish-classes-kids" className="hover:text-yycl-yellow py-0.5">Kids & Teens</Link>
              <Link href="/en/about-us" className="hover:text-yycl-yellow py-0.5">About Our Method</Link>
            </div>
          ) : (
            <div className="flex flex-col space-y-2 text-xs font-body-regular text-white/90">
              <Link href="/planes" className="hover:text-yycl-yellow py-0.5">Nuestros programas</Link>
              <Link href="/idiomas" className="hover:text-yycl-yellow py-0.5">Otros idiomas</Link>
              <Link href="/kids" className="hover:text-yycl-yellow py-0.5">Kids & Teens</Link>
              <Link href="/empresas" className="hover:text-yycl-yellow py-0.5">Capacitación corporativa en idiomas</Link>
              <Link href="/servicios-especiales" className="hover:text-yycl-yellow py-0.5">Servicios Especiales</Link>
            </div>
          )}
        </div>

        <div className="space-y-2">
          <h4 className="font-heading font-bold text-white text-[11px] uppercase tracking-wider">
            {isEn ? "Follow us" : "Síguenos"}
          </h4>
          <div className="flex items-center gap-3 text-white pt-1">
            <a href="https://www.instagram.com/yesyoucanlanguages" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow p-2 rounded-lg bg-white/10" aria-label="Instagram">
              <InstagramIcon size={20} />
            </a>
            <a href="https://www.tiktok.com/@yesyoucan_languages" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow p-2 rounded-lg bg-white/10" aria-label="TikTok">
              <TikTokIcon size={19} />
            </a>
            <a href="https://www.facebook.com/yesyoucan.languages.7" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow p-2 rounded-lg bg-white/10" aria-label="Facebook">
              <FacebookIcon size={19} />
            </a>
            <a href="https://www.linkedin.com/company/yes-you-can-languages/" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow p-2 rounded-lg bg-white/10" aria-label="LinkedIn">
              <LinkedinIcon size={19} />
            </a>
            <a href="https://www.youtube.com/@yesyoucanlanguages" target="_blank" rel="noreferrer" className="text-white hover:text-yycl-yellow p-2 rounded-lg bg-white/10" aria-label="YouTube">
              <YoutubeIcon size={21} />
            </a>
          </div>
        </div>

        <div className="pt-4 border-t border-white/15 space-y-2 text-[11px] text-white">
          <div className="flex flex-col space-y-1 text-white/80">
            <Link href={isEn ? "/en/about-us" : "/sobre-yycl"} className="hover:underline">
              {isEn ? "Privacy Policy" : "Privacidad"}
            </Link>
            <Link href={isEn ? "/en/about-us" : "/sobre-yycl"} className="hover:underline">
              {isEn ? "Terms of Service" : "Términos del servicio"}
            </Link>
            <Link href={isEn ? "/en/about-us" : "/sobre-yycl"} className="hover:underline">
              Cookies
            </Link>
          </div>
          <p className="pt-1 text-[10px] text-white/90">
            © 2026 Yes You Can Languages. {isEn ? "All rights reserved." : "Todos los derechos reservados."}
          </p>
        </div>
      </div>
    </footer>
  );
};
