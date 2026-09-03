const fs = require('fs');
const path = require('path');

const targetDir = path.join(process.cwd(), 'components/templates');
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// 1. DesignElements.tsx
const designElements = import React from  react;

export function Tape({
  className = ",
  color = bg-[#FFE2C0]/90,
  rotate = -2deg,
}: {
  className?: string;
  color?: string;
  rotate?: string;
}) {
  return (
    <div
      style={{ transform: \otate(\)\ }}
      className={\h-7 w-28 backdrop-blur-xs shadow-xs border-y border-black/10 opacity-90 z-20 \ \\}
    />
  );
}

export function StickerBadge({
  text,
  variant = yellow,
  rotate = 3deg,
  className = ",
}: {
  text: string;
  variant?: yellow | purple | cyan | navy | white;
  rotate?: string;
  className?: string;
}) {
  const styles = {
    yellow: bg-[#FFD203] text-[#001837] border-2 border-[#001837] shadow-[3px_3px_0px_#001837],
    purple: bg-[#834296] text-white border-2 border-white shadow-[3px_3px_0px_rgba 0 0 0 0.3 ] ,
    cyan:  bg-[#4DC2DA] text-[#001837] border-2 border-[#001837] shadow-[3px_3px_0px_#001837],
    navy: bg-[#001837] text-[#FFD203] border-2 border-[#FFD203] shadow-[3px_3px_0px_#FFD203],
    white: bg-white text-[#001837] border-2 border-[#001837] shadow-[3px_3px_0px_#001837],
  };

  return (
    <span
      style={{ transform: \otate(\)\ }}
      className={\inline-block font-heading font-extrabold uppercase tracking-wider text-xs md:text-sm px-3.5 py-1.5 rounded-md \ \\}
    >
      {text}
    </span>
  );
}

export function MarkerHighlight({
  children,
  color = bg-[#FFD203]/70,
}: {
  children: React.ReactNode;
  color?: string;
}) {
  return (
    <span className=relative inline-block px-1>
      <span
        className={\bsolute inset-x-0 bottom-1.5 h-3.5 -z-0 -rotate-1 rounded-sm \\}
      />
      <span className=relative z-10>{children}</span>
    </span>
  );
}

export function YYCLLogoMark({
  variant = default,
  className = ",
}: {
  variant?: default | white | yellow;
  className?: string;
}) {
  const textColors = {
    default: text-[#001837],
    white: text-white,
    yellow: text-[#FFD203],
  };

  return (
    <div className={\lex items-center gap-2.5 \\}>
      <div className=w-9 h-9 rounded-xl bg-[#FFD203] flex items-center justify-center font-heading font-black text-[#001837] text-base shadow-sm border border-[#001837]/20>
        YY
      </div>
      <div className=flex flex-col leading-tight>
        <span
          className={\ont-heading font-extrabold tracking-tight text-lg \\}
        >
          YYCL
        </span>
        <span className=text-[9px] font-bold tracking-widest uppercase text-[#4DC2DA]>
          Languages
        </span>
      </div>
    </div>
  );
}
;

fs.writeFileSync(path.join(targetDir, 'DesignElements.tsx'), designElements);
console.log('Created DesignElements.tsx');
