import React from 'react';

export interface PlayButtonProps {
  size?: 'sm' | 'lg'; // sm = 56px, lg = 96px
  onClick?: () => void;
}

export const PlayButton: React.FC<PlayButtonProps> = ({ size = 'lg', onClick }) => {
  const isLarge = size === 'lg';
  const diameter = isLarge ? 'w-24 h-24' : 'w-14 h-14';
  const iconSize = isLarge ? 'w-8 h-8' : 'w-5 h-5';

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${diameter} rounded-full bg-[#FFD203] shadow-[3px_3px_0px_#EC9519] hover:bg-[#EC9519] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none flex items-center justify-center transition-all cursor-pointer select-none`}
      aria-label="Reproducir video"
    >
      <svg
        className={`${iconSize} text-[#001837] ml-1`}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 5v14l11-7z" />
      </svg>
    </button>
  );
};
