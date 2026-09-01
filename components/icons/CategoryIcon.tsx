import React from 'react';

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
