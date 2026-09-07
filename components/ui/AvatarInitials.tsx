import React from 'react';

interface AvatarInitialsProps {
  name: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

// Colores armoniosos del Design System de YYCL (Figma)
const AVATAR_PALETTES = [
  { bg: 'bg-[#FFE2C0]', text: 'text-[#001837]', border: 'border-[#EC9519]/30' }, // Crema / Ámbar
  { bg: 'bg-[#FFD203]', text: 'text-[#001837]', border: 'border-[#001837]/20' }, // Amarillo YYCL
  { bg: 'bg-[#CAFFFF]', text: 'text-[#001837]', border: 'border-[#4DC2DA]/30' }, // Celeste pálido
  { bg: 'bg-[#F5E6F8]', text: 'text-[#834296]', border: 'border-[#834296]/30' }, // Lila claro
  { bg: 'bg-[#E2E8F0]', text: 'text-[#001837]', border: 'border-[#001837]/15' }, // Slate neutro
];

function getInitials(name: string): string {
  if (!name) return 'Y';
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

function getPalette(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % AVATAR_PALETTES.length;
  return AVATAR_PALETTES[index];
}

export const AvatarInitials: React.FC<AvatarInitialsProps> = ({
  name,
  className = '',
  size = 'md',
}) => {
  const initials = getInitials(name);
  const palette = getPalette(name);

  const sizeClasses = {
    sm: 'w-9 h-9 text-xs',
    md: 'w-11 h-11 text-sm',
    lg: 'w-14 h-14 text-base',
  };

  return (
    <div
      className={`rounded-full shrink-0 select-none flex items-center justify-center font-heading font-bold tracking-tight border shadow-xs ${palette.bg} ${palette.text} ${palette.border} ${sizeClasses[size]} ${className}`}
      aria-label={`Avatar de ${name}`}
      title={name}
    >
      {initials}
    </div>
  );
};
