import React from "react";
import Image from "next/image";

// Logo Oficial Sticker con la esquina despegada
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
      className={`relative inline-block drop-shadow-[0_8px_18px_rgba(0,0,0,0.3)] select-none shrink-0 ${className}`}
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

// Header de Marca Limpio (Logo Sticker Grande + Badge opcional)
export function BrandHeader({
  badge,
  badgeVariant = "yellow",
  logoSize = 105,
  className = "",
}: {
  badge?: string;
  badgeVariant?: "yellow" | "purple" | "cyan" | "white";
  logoSize?: number;
  className?: string;
}) {
  const badgeStyles: Record<string, string> = {
    yellow: "bg-[#FFD203] text-[#001837]",
    purple: "bg-[#834296] text-white",
    cyan: "bg-[#4DC2DA] text-[#001837]",
    white: "bg-white text-[#001837]",
  };

  return (
    <div className={`flex items-center justify-between w-full z-10 ${className}`}>
      <YYCLStickerLogo size={logoSize} />
      {badge && (
        <span
          className={`font-heading font-black text-sm md:text-base px-5 py-2 rounded-full uppercase tracking-wider shadow-sm border border-black/10 ${
            badgeStyles[badgeVariant] || badgeStyles.yellow
          }`}
        >
          {badge}
        </span>
      )}
    </div>
  );
}

// Avatar Circular Limpio (Igual a la web)
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
        <p className="font-heading font-black text-[22px] leading-tight text-white">
          {name}
        </p>
        {role && (
          <p className="font-body text-[16px] text-white/80 font-medium">
            {role}
          </p>
        )}
      </div>
    </div>
  );
}

// Resaltador de marcador limpio
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
    <span className="relative inline-block px-1.5 mx-0.5">
      <span
        className={`absolute inset-0 rounded-md ${color} -rotate-0.5 -z-0`}
      />
      <span className={`relative z-10 ${textColor} font-black`}>{children}</span>
    </span>
  );
}

// Rating con estrellas de Google Reviews
export function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-1 text-[#FFD203]">
      {[...Array(count)].map((_, i) => (
        <span key={i} className="text-xl">
          ★
        </span>
      ))}
    </div>
  );
}

// Footer de Marca Limpio para Redes Sociales
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
      <span className="font-body font-medium text-[18px]">
        {actionText}
      </span>
      <div className="bg-[#FFD203] text-[#001837] px-5 py-2 rounded-xl font-heading font-black text-[16px] shadow-sm">
        {handle}
      </div>
    </div>
  );
}
