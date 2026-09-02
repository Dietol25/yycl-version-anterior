import React from 'react';

export interface BrushStrokeProps {
  color?: string; // e.g. '#FFD203', '#4DC2DA', '#834296', '#001837'
  variant?: 'brush' | 'playful' | 'marker' | 'straight';
  className?: string;
}

export const BrushStroke: React.FC<BrushStrokeProps> = ({
  color = '#FFD203',
  variant = 'brush',
  className = 'w-44 sm:w-56 h-3.5 sm:h-4',
}) => {
  if (variant === 'straight') {
    return (
      <svg
        className={className}
        viewBox="0 0 200 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="200" height="4" rx="2" fill={color} />
      </svg>
    );
  }

  if (variant === 'playful') {
    return (
      <svg
        className={className}
        viewBox="0 0 220 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Playful curved hand-drawn brush with pressure taper */}
        <path
          d="M4 12.5C32 5.2 82 3.8 138 6.5C168 8.0 196 11.2 216 13.5C218 13.8 219.5 12.8 218 11.2C198 4.8 152 1.5 112 1.8C66 2.1 24 6.2 3 11.2C1.8 11.8 2.2 12.9 4 12.5Z"
          fill={color}
        />
        {/* Secondary micro-accent dot/flick */}
        <circle cx="216" cy="7" r="1.5" fill={color} opacity="0.8" />
      </svg>
    );
  }

  if (variant === 'marker') {
    return (
      <svg
        className={className}
        viewBox="0 0 220 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 12C36 5.8 88 4.2 144 6.8C174 8.2 202 11.5 217 13.2C219 13.4 219.8 12.2 218 10.8C198 4.2 152 1.2 110 1.5C64 1.8 22 5.8 2 10.8C1.2 11.4 1.8 12.2 3 12Z"
          fill={color}
        />
      </svg>
    );
  }

  // Default: Organic Calligraphic Brush Stroke (Brochazo estilizado de alta estética)
  return (
    <svg
      className={className}
      viewBox="0 0 240 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Primary dynamic calligraphic brush stroke */}
      <path
        d="M4 14C38 6.2 96 4.2 158 7.2C188 8.6 218 12.2 236 14.5C238.5 14.8 239.5 13.2 237.5 11.6C216 4.2 164 1.2 120 1.5C68 1.8 22 6.2 3 12C1.5 12.7 2 14.4 4 14Z"
        fill={color}
      />
      {/* Subtle organic dry-brush texture stroke at the end */}
      <path
        d="M175 14C195 15.2 220 16.5 235 16C236.2 15.9 236.5 15.2 235.2 14.8C222 13.5 198 12.8 178 12.5C174.5 12.4 174 13.9 175 14Z"
        fill={color}
        opacity="0.65"
      />
    </svg>
  );
};
