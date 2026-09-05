import React from 'react';

// Spain flat circular flag
export const SpainFlag = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className="rounded-full overflow-hidden shrink-0">
    <rect width="32" height="32" rx="16" fill="#AA151B" />
    <rect y="8" width="32" height="16" fill="#F1BF00" />
  </svg>
);

// USA circular flag
export const UsaFlag = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className="rounded-full overflow-hidden shrink-0">
    <rect width="32" height="32" rx="16" fill="#B22234" />
    <rect y="2.5" width="32" height="2.5" fill="#FFFFFF" />
    <rect y="7.5" width="32" height="2.5" fill="#FFFFFF" />
    <rect y="12.5" width="32" height="2.5" fill="#FFFFFF" />
    <rect y="17.5" width="32" height="2.5" fill="#FFFFFF" />
    <rect y="22.5" width="32" height="2.5" fill="#FFFFFF" />
    <rect y="27.5" width="32" height="2.5" fill="#FFFFFF" />
    <rect width="16" height="16" fill="#3C3B6E" />
    <circle cx="4" cy="4" r="1.1" fill="#FFFFFF" />
    <circle cx="8" cy="4" r="1.1" fill="#FFFFFF" />
    <circle cx="12" cy="4" r="1.1" fill="#FFFFFF" />
    <circle cx="6" cy="8" r="1.1" fill="#FFFFFF" />
    <circle cx="10" cy="8" r="1.1" fill="#FFFFFF" />
    <circle cx="4" cy="12" r="1.1" fill="#FFFFFF" />
    <circle cx="8" cy="12" r="1.1" fill="#FFFFFF" />
    <circle cx="12" cy="12" r="1.1" fill="#FFFFFF" />
  </svg>
);

// France flat flag
export const FranceFlag = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className="rounded-full overflow-hidden shrink-0">
    <rect width="10.6" height="32" fill="#002654" />
    <rect x="10.6" width="10.8" height="32" fill="#FFFFFF" />
    <rect x="21.4" width="10.6" height="32" fill="#CE1126" />
  </svg>
);

// Brazil flag
export const BrazilFlag = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className="rounded-full overflow-hidden shrink-0">
    <rect width="32" height="32" fill="#009C3B" />
    <polygon points="16,4 28,16 16,28 4,16" fill="#FFDF00" />
    <circle cx="16" cy="16" r="6" fill="#002776" />
  </svg>
);

// UK flag
export const UkFlag = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className="rounded-full overflow-hidden shrink-0">
    <rect width="32" height="32" fill="#012169" />
    <path d="M0 0l32 32M32 0L0 32" stroke="#FFFFFF" strokeWidth="4" />
    <path d="M0 0l32 32M32 0L0 32" stroke="#C8102E" strokeWidth="2" />
    <path d="M16 0v32M0 16h32" stroke="#FFFFFF" strokeWidth="8" />
    <path d="M16 0v32M0 16h32" stroke="#C8102E" strokeWidth="4" />
  </svg>
);

// Colombia flat circular flag (Yellow 50%, Blue 25%, Red 25%)
export const ColombiaFlag = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className="rounded-full overflow-hidden shrink-0">
    <rect width="32" height="16" fill="#FCD116" />
    <rect y="16" width="32" height="8" fill="#003893" />
    <rect y="24" width="32" height="8" fill="#CE1126" />
  </svg>
);

// Ecuador flat circular flag (Yellow 50%, Blue 25%, Red 25% + simplified condor/coat badge)
export const EcuadorFlag = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className="rounded-full overflow-hidden shrink-0">
    <rect width="32" height="16" fill="#FFD100" />
    <rect y="16" width="32" height="8" fill="#0072CE" />
    <rect y="24" width="32" height="8" fill="#EF3340" />
    <circle cx="16" cy="16" r="3.2" fill="#0072CE" stroke="#FFD100" strokeWidth="0.8" />
  </svg>
);

// Argentina flat circular flag (Sky blue, White with Sol de Mayo, Sky blue)
export const ArgentinaFlag = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className="rounded-full overflow-hidden shrink-0">
    <rect width="32" height="10.6" fill="#74ACDF" />
    <rect y="10.6" width="32" height="10.8" fill="#FFFFFF" />
    <rect y="21.4" width="32" height="10.6" fill="#74ACDF" />
    <circle cx="16" cy="16" r="2.5" fill="#F6B40E" />
  </svg>
);

// Mexico flat circular flag (Green, White with Eagle emblem, Red)
export const MexicoFlag = ({ size = 28 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className="rounded-full overflow-hidden shrink-0">
    <rect width="10.6" height="32" fill="#006847" />
    <rect x="10.6" width="10.8" height="32" fill="#FFFFFF" />
    <rect x="21.4" width="10.6" height="32" fill="#CE1126" />
    <circle cx="16" cy="16" r="2.2" fill="#8B5A2B" />
  </svg>
);

// Helper component to render SVG flag by country code or emoji
export const CountryFlag = ({ code, size = 18 }: { code: string; size?: number }) => {
  const cleanCode = code.toUpperCase().trim();
  switch (cleanCode) {
    case 'CO':
    case 'COL':
    case 'COLOMBIA':
    case '🇨🇴':
      return <ColombiaFlag size={size} />;
    case 'EC':
    case 'ECU':
    case 'ECUADOR':
    case '🇪🇨':
      return <EcuadorFlag size={size} />;
    case 'MX':
    case 'MEX':
    case 'MÉXICO':
    case 'MEXICO':
    case '🇲🇽':
      return <MexicoFlag size={size} />;
    case 'US':
    case 'USA':
    case 'ESTADOS UNIDOS':
    case '🇺🇸':
      return <UsaFlag size={size} />;
    case 'ES':
    case 'ESP':
    case 'ESPAÑA':
    case 'ESPANA':
    case '🇪🇸':
      return <SpainFlag size={size} />;
    case 'AR':
    case 'ARG':
    case 'ARGENTINA':
    case '🇦🇷':
      return <ArgentinaFlag size={size} />;
    case 'FR':
    case 'FRA':
    case 'FRANCIA':
    case 'FRANCE':
    case '🇫🇷':
      return <FranceFlag size={size} />;
    case 'BR':
    case 'BRA':
    case 'BRASIL':
    case 'BRAZIL':
    case '🇧🇷':
      return <BrazilFlag size={size} />;
    case 'GB':
    case 'UK':
    case 'REINO UNIDO':
    case '🇬🇧':
      return <UkFlag size={size} />;
    default:
      return <span className="text-xs">{code}</span>;
  }
};
