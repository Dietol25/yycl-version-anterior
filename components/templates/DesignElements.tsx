import React from "react";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

// 1. Logo Oficial Sticker con esquina despegada
export function YYCLStickerLogo({
  size = 96,
  className = "",
  rotate = "-2deg",
}: {
  size?: number;
  className?: string;
  rotate?: string;
}) {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `rotate(${rotate})`,
      }}
      className={`relative inline-block drop-shadow-[0_8px_16px_rgba(0,0,0,0.25)] select-none shrink-0 ${className}`}
    >
      <Image
        src="/yycl-logo-sticker.png"
        alt="Yes You Can Languages"
        width={size * 2}
        height={size * 2}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
}

// 2. SectionHeader del Design System (Eyebrow con bullet + Título)
export function SectionHeaderDS({
  eyebrow,
  title,
  theme = "dark",
  className = "",
}: {
  eyebrow?: string;
  title: string;
  theme?: "dark" | "light";
  className?: string;
}) {
  const isDark = theme === "dark";
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFD203]" />
          <span
            className={`font-heading font-extrabold text-[15px] uppercase tracking-widest ${
              isDark ? "text-[#4DC2DA]" : "text-[#834296]"
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`font-heading font-extrabold text-[54px] leading-[1.14] tracking-tight ${
          isDark ? "text-white" : "text-[#001837]"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

// 3. Badges Oficiales del Design System (Pills limpias)
export function BadgeDS({
  label,
  variant = "yellow",
  className = "",
}: {
  label: string;
  variant?: "yellow" | "navy" | "cyan" | "purple" | "white";
  className?: string;
}) {
  const styles = {
    yellow: "bg-[#FFD203] text-[#001837]",
    navy: "bg-[#001837] text-white",
    cyan: "bg-[#4DC2DA] text-[#001837]",
    purple: "bg-[#834296] text-white",
    white: "bg-white text-[#001837]",
  };

  return (
    <span
      className={`inline-block font-heading font-black text-xs md:text-sm px-4 py-1.5 rounded-full uppercase tracking-wider select-none shadow-xs ${
        styles[variant] || styles.yellow
      } ${className}`}
    >
      {label}
    </span>
  );
}

// 4. Header de Marca con Logo Sticker Oficial + Badge
export function BrandHeader({
  badge,
  badgeVariant = "yellow",
  logoSize = 96,
  className = "",
}: {
  badge?: string;
  badgeVariant?: "yellow" | "navy" | "cyan" | "purple" | "white";
  logoSize?: number;
  className?: string;
}) {
  return (
    <div className={`flex items-center justify-between w-full z-10 ${className}`}>
      <YYCLStickerLogo size={logoSize} />
      {badge && <BadgeDS label={badge} variant={badgeVariant} />}
    </div>
  );
}

// 5. Avatar de Usuario Oficial
export function UserAvatar({
  src,
  alt,
  name,
  role,
  size = 64,
  borderColor = "border-[#FFD203]",
  className = "",
}: {
  src: string;
  alt: string;
  name: string;
  role?: string;
  size?: number;
  borderColor?: string;
  className?: string;
}) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className={`rounded-full overflow-hidden border-2 ${borderColor} relative shrink-0 shadow-md bg-[#001837]/20`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${size * 2}px`}
          className="object-cover"
        />
      </div>
      <div>
        <p className="font-heading font-extrabold text-[22px] leading-tight text-white">
          {name}
        </p>
        {role && (
          <p className="font-body text-[16px] text-white/80 font-normal">
            {role}
          </p>
        )}
      </div>
    </div>
  );
}

// 6. TestimonialCard Oficial del Design System
export function TestimonialCardDS({
  quote,
  name,
  role,
  avatar,
  countryFlag = "🇨🇴",
  variant = "purple",
  className = "",
}: {
  quote: string;
  name: string;
  role: string;
  avatar: string;
  countryFlag?: string;
  variant?: "purple" | "white" | "cyan";
  className?: string;
}) {
  const cardStyles = {
    purple: "bg-[#834296] text-white border border-white/20 shadow-[4px_4px_0px_#001837]",
    white: "bg-white text-[#001837] border-2 border-[#001837] shadow-[4px_4px_0px_#001837]",
    cyan: "bg-white text-[#001837] border-2 border-[#4DC2DA] shadow-[4px_4px_0px_#4DC2DA]",
  };

  const isPurple = variant === "purple";

  return (
    <div
      className={`rounded-3xl p-8 flex flex-col justify-between gap-6 ${
        cardStyles[variant] || cardStyles.purple
      } ${className}`}
    >
      <div className="space-y-4">
        {/* 5 Estrellas */}
        <div className="flex items-center gap-1 text-[#FFD203]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-[#FFD203] text-[#FFD203]" />
          ))}
        </div>

        {/* Comillas Grandes del DS */}
        <div
          className={`font-serif text-5xl leading-none ${
            isPurple ? "text-[#CAFFFF]" : "text-[#001837]"
          }`}
        >
          “
        </div>

        {/* Cita */}
        <p
          className={`font-body text-[22px] leading-[1.4] ${
            isPurple ? "text-white/95" : "text-[#001837]/90"
          }`}
        >
          {quote}
        </p>
      </div>

      {/* Footer del Testimonio */}
      <div
        className={`pt-4 border-t flex items-center justify-between ${
          isPurple ? "border-white/15" : "border-slate-200"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-white/80 relative shrink-0 shadow-sm">
            <Image
              src={avatar}
              alt={name}
              fill
              sizes="112px"
              className="object-cover"
            />
          </div>
          <div>
            <p
              className={`font-heading font-extrabold text-[19px] leading-tight ${
                isPurple ? "text-white" : "text-[#001837]"
              }`}
            >
              {name}
            </p>
            <p
              className={`font-body text-[15px] ${
                isPurple ? "text-white/80" : "text-slate-600"
              }`}
            >
              {role}
            </p>
          </div>
        </div>
        <span className="text-2xl select-none">{countryFlag}</span>
      </div>
    </div>
  );
}

// 7. Resaltador de Texto del Design System
export function MarkerHighlight({
  children,
  color = "bg-[#FFD203]",
  textColor = "text-[#001837]",
}: {
  children: React.ReactNode;
  color?: string;
  textColor?: string;
}) {
  return (
    <span className="relative inline-block px-2 mx-0.5">
      <span
        className={`absolute inset-0 rounded-lg ${color} -rotate-0.5 -z-0`}
      />
      <span className={`relative z-10 ${textColor} font-black`}>{children}</span>
    </span>
  );
}

// 8. Botón Oficial del Design System
export function ButtonDS({
  label,
  variant = "primary",
  size = "md",
  className = "",
}: {
  label: string;
  variant?: "primary" | "secondary" | "dark" | "violet";
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const styles = {
    primary:
      "bg-[#FFD203] text-[#001837] font-heading font-extrabold border-2 border-[#001837] shadow-[3px_3px_0px_#001837]",
    secondary:
      "bg-white text-[#001837] font-heading font-bold border-2 border-[#001837] shadow-[3px_3px_0px_#001837]",
    dark:
      "bg-[#001837] text-white font-heading font-bold border-2 border-[#001837] shadow-[3px_3px_0px_#FFD203]",
    violet:
      "bg-[#834296] text-white font-heading font-bold border-2 border-white shadow-[3px_3px_0px_rgba(0,0,0,0.3)]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-xl",
  };

  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-xl transition-transform active:translate-x-0.5 active:translate-y-0.5 cursor-pointer ${
        styles[variant]
      } ${sizes[size]} ${className}`}
    >
      <span>{label}</span>
      <ArrowRight className="w-5 h-5" />
    </button>
  );
}

// 9. Footer Oficial para Redes
export function BrandFooter({
  actionText = "Agenda tu diagnóstico gratis en el link de la bio",
  handle = "@yyclanguages",
  className = "",
}: {
  actionText?: string;
  handle?: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-between border-t border-white/15 pt-6 z-10 w-full text-white/80 ${className}`}
    >
      <span className="font-body text-[17px] font-normal text-white/80">
        {actionText}
      </span>
      <div className="bg-[#FFD203] text-[#001837] px-4 py-1.5 rounded-full font-heading font-extrabold text-[15px] shadow-xs">
        {handle}
      </div>
    </div>
  );
}
