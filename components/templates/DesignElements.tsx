import React from "react";
import Image from "next/image";

// Logo Oficial Sticker con la esquina despegada/doblada
export function YYCLStickerLogo({
  size = 80,
  className = "",
  rotate = "-3deg",
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
        alt="Yes You Can Languages Logo"
        width={size * 2}
        height={size * 2}
        className="w-full h-full object-contain"
        priority
      />
    </div>
  );
}

// Logo Header con Sticker + Texto de marca
export function YYCLLogoMark({
  variant = "default",
  className = "",
  stickerSize = 56,
}: {
  variant?: "default" | "white" | "yellow";
  className?: string;
  stickerSize?: number;
}) {
  const textColors: Record<string, string> = {
    default: "text-[#001837]",
    white: "text-white",
    yellow: "text-[#FFD203]",
  };

  return (
    <div className={`flex items-center gap-3.5 ${className}`}>
      <YYCLStickerLogo size={stickerSize} rotate="-4deg" />
      <div className="flex flex-col leading-tight">
        <span
          className={`font-heading font-black tracking-tight text-2xl ${
            textColors[variant] || textColors.default
          }`}
        >
          YYCL
        </span>
        <span className="text-[11px] font-extrabold tracking-widest uppercase text-[#4DC2DA]">
          Yes You Can Languages
        </span>
      </div>
    </div>
  );
}

// Sticker temático con efecto de relieve y borde grueso
export function StickerBadge({
  text,
  variant = "yellow",
  rotate = "3deg",
  className = "",
}: {
  text: string;
  variant?:
    | "yellow"
    | "purple"
    | "cyan"
    | "navy"
    | "white"
    | "red"
    | "lila"
    | "amber";
  rotate?: string;
  className?: string;
}) {
  const styles: Record<string, string> = {
    yellow:
      "bg-[#FFD203] text-[#001837] border-3 border-[#001837] shadow-[4px_4px_0px_#001837]",
    purple:
      "bg-[#834296] text-white border-3 border-white shadow-[4px_4px_0px_rgba(0,0,0,0.35)]",
    cyan:
      "bg-[#4DC2DA] text-[#001837] border-3 border-[#001837] shadow-[4px_4px_0px_#001837]",
    navy:
      "bg-[#001837] text-[#FFD203] border-3 border-[#FFD203] shadow-[4px_4px_0px_#FFD203]",
    white:
      "bg-white text-[#001837] border-3 border-[#001837] shadow-[4px_4px_0px_#001837]",
    red:
      "bg-[#DC2626] text-white border-3 border-white shadow-[4px_4px_0px_rgba(0,0,0,0.35)]",
    lila:
      "bg-[#D4B6E3] text-[#001837] border-3 border-[#001837] shadow-[4px_4px_0px_#001837]",
    amber:
      "bg-[#EC9519] text-white border-3 border-[#001837] shadow-[4px_4px_0px_#001837]",
  };

  return (
    <span
      style={{ transform: `rotate(${rotate})` }}
      className={`inline-block font-heading font-black uppercase tracking-wider text-xs md:text-sm px-4 py-2 rounded-xl select-none ${
        styles[variant] || styles.yellow
      } ${className}`}
    >
      {text}
    </span>
  );
}

// Cinta adhesiva / Washi Tape
export function Tape({
  className = "",
  color = "bg-[#FFE2C0]/90",
  rotate = "-2deg",
}: {
  className?: string;
  color?: string;
  rotate?: string;
}) {
  return (
    <div
      style={{ transform: `rotate(${rotate})` }}
      className={`h-8 w-32 backdrop-blur-xs shadow-xs border-y border-black/10 opacity-90 z-20 ${color} ${className}`}
    />
  );
}

// Resaltador de marcador
export function MarkerHighlight({
  children,
  color = "bg-[#FFD203]/75",
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span className="relative inline-block px-1">
      <span
        className={`absolute inset-x-0 bottom-1.5 h-4 -z-0 -rotate-1 rounded-xs ${color}`}
      />
      <span className="relative z-10">{children}</span>
    </span>
  );
}

// Pincelada / Mancha de pintura en SVG
export function BrushStroke({
  color = "#FFD203",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 280 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-48 h-12 ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M5 25C40 18 120 12 275 22C250 35 180 48 5 40C-2 35 0 28 5 25Z"
        fill={color}
      />
      <path
        d="M20 18C70 14 190 8 260 16C230 25 150 30 20 25Z"
        fill={color}
        opacity="0.8"
      />
    </svg>
  );
}

// Flecha dibujada a mano
export function DoodleArrow({
  color = "#FFD203",
  rotate = "0deg",
  className = "",
}: {
  color?: string;
  rotate?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotate})` }}
      className={`w-16 h-10 ${className}`}
    >
      <path
        d="M10 45C30 20 65 15 85 25"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M70 12L88 26L78 42"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Chispas dibujadas a mano
export function DoodleSpark({
  color = "#FFD203",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-8 h-8 ${className}`}
    >
      <path
        d="M20 2V38M2 20H38M7 7L33 33M7 33L33 7"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Círculo dibujado a mano para encerrar palabras clave
export function DoodleCircle({
  color = "#4DC2DA",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M20 40C20 18 60 8 100 8C160 8 190 25 185 50C180 72 130 75 70 72C30 70 10 55 15 35"
        stroke={color}
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeDasharray="4 2"
      />
    </svg>
  );
}

// Nota manuscrita tipo anotación
export function HandwrittenNote({
  text,
  rotate = "-3deg",
  className = "",
  color = "text-[#FFD203]",
}: {
  text: string;
  rotate?: string;
  className?: string;
  color?: string;
}) {
  return (
    <span
      style={{ transform: `rotate(${rotate})` }}
      className={`font-handwritten text-2xl md:text-3xl font-bold tracking-wide select-none inline-block ${color} ${className}`}
    >
      {text}
    </span>
  );
}

// Nota adhesiva tipo Post-It
export function StickyNote({
  title,
  text,
  rotate = "-2deg",
  color = "bg-[#FFD203]",
  className = "",
}: {
  title?: string;
  text: string;
  rotate?: string;
  color?: string;
  className?: string;
}) {
  return (
    <div
      style={{ transform: `rotate(${rotate})` }}
      className={`p-6 rounded-xs shadow-[5px_5px_15px_rgba(0,0,0,0.15)] border-t-4 border-black/10 text-[#001837] relative ${color} ${className}`}
    >
      <Tape
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-20 h-5"
        color="bg-white/60"
      />
      {title && (
        <p className="font-heading font-black text-sm uppercase tracking-wider mb-1">
          {title}
        </p>
      )}
      <p className="font-handwritten text-2xl leading-tight font-bold text-[#001837]">
        {text}
      </p>
    </div>
  );
}

// Borde de papel rasgado inferior
export function TornPaperEdge({
  color = "#FFFFFF",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 1200 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-full h-8 block ${className}`}
      preserveAspectRatio="none"
    >
      <path
        d="M0 0H1200V25L1180 18L1160 30L1130 15L1100 28L1060 14L1020 26L980 12L940 28L900 15L860 27L820 13L780 29L740 16L700 28L660 14L620 27L580 12L540 29L500 15L460 28L420 13L380 27L340 14L300 29L260 15L220 28L180 12L140 27L100 14L60 28L20 15L0 25V0Z"
        fill={color}
      />
    </svg>
  );
}

// Calificación de estrellas
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
