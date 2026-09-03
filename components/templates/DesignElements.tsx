import React from "react";
import Image from "next/image";
import { Star, ArrowRight } from "lucide-react";

// 1. Logo Oficial Sticker con esquina despegada (Escala grande para móvil)
export function YYCLStickerLogo({
  size = 160,
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
      className={`relative inline-block drop-shadow-[0_10px_20px_rgba(0,0,0,0.28)] select-none shrink-0 ${className}`}
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

// 2. Badges Oficiales del Design System (Grandes y legibles en móvil)
export function BadgeDS({
  label,
  variant = "yellow",
  className = "",
}: {
  label: string;
  variant?: "yellow" | "navy" | "cyan" | "purple" | "cream" | "white";
  className?: string;
}) {
  const styles = {
    yellow: "bg-[#FFD203] text-[#001837] border-2 border-[#001837]",
    navy: "bg-[#001837] text-white border-2 border-white/30",
    cyan: "bg-[#4DC2DA] text-[#001837] border-2 border-[#001837]",
    purple: "bg-[#834296] text-white border-2 border-white",
    cream: "bg-[#FFE2C0] text-[#001837] border-2 border-[#001837]",
    white: "bg-white text-[#001837] border-2 border-[#001837]",
  };

  return (
    <span
      className={`inline-block font-heading font-black text-[22px] px-6 py-2.5 rounded-full uppercase tracking-wider select-none shadow-md ${
        styles[variant] || styles.yellow
      } ${className}`}
    >
      {label}
    </span>
  );
}

// 3. Header de Marca (Sticker Logo Grande + Badge)
export function BrandHeader({
  badge,
  badgeVariant = "yellow",
  logoSize = 160,
  className = "",
}: {
  badge?: string;
  badgeVariant?: "yellow" | "navy" | "cyan" | "purple" | "cream" | "white";
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

// 4. SectionHeader del Design System (Gran impacto en móvil)
export function SectionHeaderDS({
  eyebrow,
  title,
  theme = "dark",
  eyebrowColor,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  theme?: "dark" | "light";
  eyebrowColor?: string;
  className?: string;
}) {
  const isDark = theme === "dark";
  const defaultEyebrow = isDark ? "text-[#4DC2DA]" : "text-[#834296]";

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {eyebrow && (
        <div className="flex items-center gap-2.5">
          <span className="w-3.5 h-3.5 rounded-full bg-[#FFD203]" />
          <span
            className={`font-heading font-extrabold text-[24px] uppercase tracking-widest ${
              eyebrowColor || defaultEyebrow
            }`}
          >
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        className={`font-heading font-black text-[68px] leading-[1.12] tracking-tight ${
          isDark ? "text-white" : "text-[#001837]"
        }`}
      >
        {title}
      </h2>
    </div>
  );
}

// 5. Avatar de Usuario Oficial (Grande y legible)
export function UserAvatar({
  src,
  alt,
  name,
  role,
  size = 84,
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
    <div className={`flex items-center gap-5 ${className}`}>
      <div
        style={{ width: `${size}px`, height: `${size}px` }}
        className={`rounded-full overflow-hidden border-3 ${borderColor} relative shrink-0 shadow-lg bg-[#001837]/20`}
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
        <p className="font-heading font-black text-[28px] leading-tight text-white">
          {name}
        </p>
        {role && (
          <p className="font-body text-[22px] text-white/80 font-medium mt-0.5">
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
  variant?: "purple" | "white" | "cyan" | "cream";
  className?: string;
}) {
  const cardStyles = {
    purple: "bg-[#834296] text-white border-2 border-white/25 shadow-[6px_6px_0px_#001837]",
    white: "bg-white text-[#001837] border-3 border-[#001837] shadow-[6px_6px_0px_#001837]",
    cyan: "bg-[#4DC2DA] text-[#001837] border-3 border-[#001837] shadow-[6px_6px_0px_#001837]",
    cream: "bg-[#FFE2C0] text-[#001837] border-3 border-[#001837] shadow-[6px_6px_0px_#834296]",
  };

  const isPurple = variant === "purple";

  return (
    <div
      className={`rounded-3xl p-8 flex flex-col justify-between gap-6 ${
        cardStyles[variant] || cardStyles.purple
      } ${className}`}
    >
      <div className="space-y-4">
        {/* 5 Estrellas Grandes */}
        <div className="flex items-center gap-1.5 text-[#FFD203]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-7 h-7 fill-[#FFD203] text-[#FFD203]" />
          ))}
        </div>

        {/* Comillas Grandes */}
        <div
          className={`font-serif text-6xl leading-none ${
            isPurple ? "text-[#CAFFFF]" : "text-[#001837]"
          }`}
        >
          “
        </div>

        {/* Cita */}
        <p
          className={`font-body text-[28px] leading-[1.38] font-medium ${
            isPurple ? "text-white" : "text-[#001837]"
          }`}
        >
          {quote}
        </p>
      </div>

      {/* Footer del Testimonio */}
      <div
        className={`pt-5 border-t-2 flex items-center justify-between ${
          isPurple ? "border-white/20" : "border-black/15"
        }`}
      >
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white/80 relative shrink-0 shadow-md">
            <Image
              src={avatar}
              alt={name}
              fill
              sizes="128px"
              className="object-cover"
            />
          </div>
          <div>
            <p
              className={`font-heading font-black text-[24px] leading-tight ${
                isPurple ? "text-white" : "text-[#001837]"
              }`}
            >
              {name}
            </p>
            <p
              className={`font-body text-[19px] ${
                isPurple ? "text-white/80" : "text-slate-700"
              }`}
            >
              {role}
            </p>
          </div>
        </div>
        <span className="text-3xl select-none">{countryFlag}</span>
      </div>
    </div>
  );
}

// 7. Resaltador de Texto
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
    <span className="relative inline-block px-2.5 mx-1">
      <span
        className={`absolute inset-0 rounded-xl ${color} -rotate-0.5 -z-0`}
      />
      <span className={`relative z-10 ${textColor} font-black`}>{children}</span>
    </span>
  );
}

// 8. Footer Oficial para Redes (Grande y legible en móvil)
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
      className={`flex items-center justify-between border-t border-white/20 pt-6 z-10 w-full text-white/90 ${className}`}
    >
      <span className="font-body text-[22px] font-medium text-white/85">
        {actionText}
      </span>
      <div className="bg-[#FFD203] text-[#001837] px-6 py-2.5 rounded-2xl font-heading font-black text-[20px] shadow-sm">
        {handle}
      </div>
    </div>
  );
}
