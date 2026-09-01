import React from 'react';

export const Logo = ({ size = 48, className = "" }: { size?: number; className?: string }) => (
  <div
    style={{ width: size, height: size }}
    className={`relative shrink-0 select-none cursor-pointer transition-transform hover:scale-105 ${className}`}
  >
    <img
      src="/assets/logo.png"
      alt="Yes You Can Languages"
      className="w-full h-full object-contain drop-shadow-xs"
    />
  </div>
);
