"use client";

import { useEffect } from 'react';

export const EnLangHandler = () => {
  useEffect(() => {
    // Establecer atributo lang="en" en el elemento raíz <html> al navegar en rutas /en
    const originalLang = document.documentElement.lang || 'es';
    document.documentElement.lang = 'en';

    return () => {
      // Restaurar a español al salir del hub /en
      document.documentElement.lang = originalLang;
    };
  }, []);

  return null;
};
