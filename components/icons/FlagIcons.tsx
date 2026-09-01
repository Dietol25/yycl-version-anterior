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
