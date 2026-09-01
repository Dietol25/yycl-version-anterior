"use client";

import React from 'react';

export interface TeamMemberCardProps {
  name: string;
  role?: string;
  bio: string;
  image?: string;
  initials?: string;
  avatarBg?: string;
  className?: string;
}

export const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  role,
  bio,
  image,
  initials,
  avatarBg = 'bg-slate-200',
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col items-center text-center p-4 sm:p-6 transition-all duration-200 group ${className}`}
    >
      {/* 1. Circular Avatar (Matching Figma Reference) */}
      <div className="relative mb-5">
        <div
          className={`w-28 h-28 sm:w-32 sm:h-32 rounded-full overflow-hidden flex items-center justify-center border-2 border-[#001837] shadow-[3px_3px_0px_#001837] ${avatarBg} select-none group-hover:scale-105 transition-transform duration-300`}
        >
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover object-center"
            />
          ) : initials ? (
            <span className="font-heading font-extrabold text-2xl text-[#001837]">
              {initials}
            </span>
          ) : (
            <div className="w-full h-full bg-slate-300 flex items-center justify-center">
              <span className="w-12 h-12 rounded-full bg-slate-400/50" />
            </div>
          )}
        </div>
      </div>

      {/* 2. Nombre Apellido (Montserrat ExtraBold) */}
      <h3 className="text-xl sm:text-2xl font-extrabold font-heading text-[#001837] tracking-tight leading-snug">
        {name}
      </h3>

      {/* Role / Tag (Optional) */}
      {role && (
        <span className="text-xs font-heading font-bold uppercase tracking-wider text-[#834296] mt-1">
          {role}
        </span>
      )}

      {/* 3. Bio Breve del Profesor */}
      <p className="text-xs sm:text-sm font-body-regular text-slate-600 leading-relaxed mt-2.5 max-w-xs">
        {bio}
      </p>
    </div>
  );
};
