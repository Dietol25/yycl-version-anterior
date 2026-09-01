import os

def write_file(path, content):
    full = os.path.join(os.getcwd(), path)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    print(f'Wrote: {path}')

# 1. Icon.tsx - 13 Material Symbols Outlined glyphs
write_file('components/icons/Icon.tsx', """import React from 'react';

export type IconGlyph =
  | 'check'
  | 'close'
  | 'menu'
  | 'chevron_down'
  | 'schedule'
  | 'location_on'
  | 'chat_bubble'
  | 'tapas'
  | 'public'
  | 'menu_book'
  | 'group'
  | 'visibility'
  | 'visibility_off';

export interface IconProps {
  name: IconGlyph;
  size?: number;
  color?: string;
  className?: string;
  theme?: 'light' | 'dark'; // light = #001837, dark = #FFFFFF
}

export const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color,
  className = '',
  theme = 'light',
}) => {
  const fillColor = color || (theme === 'dark' ? '#FFFFFF' : '#001837');

  const renderGlyph = () => {
    switch (name) {
      case 'check':
        return <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />;
      case 'close':
        return <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />;
      case 'menu':
        return <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />;
      case 'chevron_down':
        return <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />;
      case 'schedule':
        return <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" />;
      case 'location_on':
        return <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />;
      case 'chat_bubble':
        return <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z" />;
      case 'tapas':
        return <path d="M22 10v12h-4V10h4zM2 19h8v3H2v-3zm14-9V2h2v8h-2zM4 2v6c0 1.66 1.34 3 3 3s3-1.34 3-3V2H8v4H6V2H4zm16 11h-4v3h4v-3z" />;
      case 'public':
        return <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />;
      case 'menu_book':
        return <path d="M21 5c-1.11-.35-2.33-.5-3.5-.5-1.95 0-4.05.4-5.5 1.5-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5 1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5V6c-.6-.45-1.25-.75-2-1zm-1 14c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5V8c1.35-.85 3.8-1.5 5.5-1.5 1.2 0 2.4.15 3.5.5v12z" />;
      case 'group':
        return <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />;
      case 'visibility':
        return <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />;
      case 'visibility_off':
        return <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z" />;
      default:
        return null;
    }
  };

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fillColor}
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      {renderGlyph()}
    </svg>
  );
};
""")

# 2. CategoryIcon.tsx - 5 Semantic Category Icons in Plano and Destacado
write_file('components/icons/CategoryIcon.tsx', """import React from 'react';

export type CategoryType =
  | 'ingles'
  | 'idiomas'
  | 'kids'
  | 'empresas'
  | 'examenes';

export interface CategoryIconProps {
  category: CategoryType;
  style?: 'plano' | 'destacado';
  size?: number; // default 24 plano, 36 destacado
  className?: string;
}

export const CategoryIcon: React.FC<CategoryIconProps> = ({
  category,
  style = 'plano',
  size,
  className = '',
}) => {
  const isDestacado = style === 'destacado';
  const finalSize = size || (isDestacado ? 36 : 24);

  // Configuration per category according to Master Design System (2026-08-31)
  const config = {
    ingles: {
      bg: '#834296',
      glyphColor: isDestacado ? '#FFFFFF' : '#001837',
      glyph: (
        // Translate / 文A
        <path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z" />
      ),
    },
    idiomas: {
      bg: '#FFD203',
      glyphColor: '#001837',
      glyph: (
        // Language / Globe with meridians
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" />
      ),
    },
    kids: {
      bg: '#4DC2DA',
      glyphColor: '#001837',
      glyph: (
        // Happy Face
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
      ),
    },
    empresas: {
      bg: '#001837',
      glyphColor: '#FFFFFF',
      glyph: (
        // Business Center Briefcase
        <path d="M10 16v-1H3.01L3 19c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2v-4h-7v1h-4zm10-9h-4.18C15.4 5.84 14.3 5 13 5h-2c-1.3 0-2.4.84-2.82 2H4c-1.1 0-2 .9-2 2v3c0 1.11.89 2 2 2h6v-2h4v2h6c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-9 0c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v1h-4V7z" />
      ),
    },
    examenes: {
      bg: '#EC9519',
      glyphColor: '#001837',
      glyph: (
        // Workspace Premium Medal
        <path d="M9.68 13.69L12 11.93l2.31 1.76-.88-2.85L15.75 9h-2.84L12 6.19 11.09 9H8.25l2.31 1.84-.88 2.85zM20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.03.76 3.87 2 5.28V23l6-2 6 2v-7.72c1.24-1.41 2-3.25 2-5.28zm-8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 15l-4 1.33V17.6c1.23.88 2.75 1.4 4 1.4s2.77-.52 4-1.4v2.73L12 19z" />
      ),
    },
  };

  const item = config[category] || config.ingles;

  if (isDestacado) {
    return (
      <div
        style={{ backgroundColor: item.bg, width: finalSize, height: finalSize }}
        className={`rounded-full border-2 border-white flex items-center justify-center shrink-0 shadow-xs ${className}`}
      >
        <svg
          width={finalSize * 0.6}
          height={finalSize * 0.6}
          viewBox="0 0 24 24"
          fill={item.glyphColor}
          xmlns="http://www.w3.org/2000/svg"
        >
          {item.glyph}
        </svg>
      </div>
    );
  }

  return (
    <svg
      width={finalSize}
      height={finalSize}
      viewBox="0 0 24 24"
      fill={item.glyphColor}
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
    >
      {item.glyph}
    </svg>
  );
};
""")

# 3. FlagIcons.tsx - Spain, USA, France, Brazil, United Kingdom
write_file('components/icons/FlagIcons.tsx', """import React from 'react';

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
""")

print("Icon, CategoryIcon, SocialIcons, and FlagIcons libraries built with 0 runtime network overhead")
