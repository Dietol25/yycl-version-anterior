# 🚀 YYCL Web — Resumen Ejecutivo y Estado del Proyecto

**Repositorio Oficial:** `https://github.com/Dietol25/yycl-prototype.git`  
**Deploy en Producción (Vercel):** [yycl-prototype.vercel.app](https://yycl-prototype.vercel.app)  
**Stack Tecnológico:** Next.js 15 (App Router), Tailwind CSS v4 (@theme), TypeScript, Lucide Icons, React.  
**IP Local para Pruebas Móviles en LAN:** `http://192.168.1.38:3000` (con `npm run start` sobre `0.0.0.0:3000`).

---

## 📌 1. Inventario de Rutas y Páginas Implementadas

### 🇪🇸 Ecosistema en Español:
1. **Home (`/`):**
   * Hero optimizado para mobile con H1 compacto (30px), F-pattern y CTA alineado a la izquierda.
   * Sección *Cómo funciona* (3 PhotoCards editoriales).
   * Sección *Resultados* con carrusel táctil de testimonios, swipe fluido y slim dots (`━ • •`).
   * Sección *Modalidades* (3 tarjetas blancas editoriales: **Grupal**, **Personalizada**, **Dúo**) con enlace ghost `Más información →` hacia `/como-funciona`.
   * Banner de Newsletter con feedback inline de éxito.
2. **Cómo Funciona (`/como-funciona`):**
   * 3 Pasos del método conversacional, showcase de plataforma interactiva y video modal.
3. **Resultados (`/resultados`):**
   * Video showcase, carrusel táctil móvil con slim dots y grid de casos de éxito reales.
4. **Planes (`/planes`):**
   * 3 Tarjetas editoriales (**Grupal**, **Personalizada**, **Dúo**), beneficios extra y FAQ interactivo.
5. **Kids & Teens (`/kids`):**
   * Maquetación con el asset oficial `YYCL_15_KIDS_JUEGO.png` y tarjetas sin tab flotante.
6. **Empresas B2B (`/empresas`):**
   * Propuesta corporativa con asset `YYCL_19_EMPRESAS_EQUIPO_COLABORACION.png` y CTAs a `Agendar reunión`.
7. **Otros Idiomas (`/idiomas`):**
   * Francés y Portugués con asset oficial `YYCL_13_IDIOMAS_FRANCES_PORTUGUES_REVISION_BANDERA.png`.
8. **Servicios Especiales (`/servicios-especiales`):**
   * Entrevistas laborales en inglés y exámenes oficiales (TOEFL, IELTS).
9. **Profesores (`/profesores`):**
   * Perfiles del equipo docente y calidad humana.
10. **Sobre YYCL (`/sobre-yycl`):**
    * Historia, valores y filosofía sin juicios.
11. **Agendamiento Inteligente (`/agendar`):**
    * Wizard de 4 pasos optimizado sin bloques oscuros redundantes.
    * Validación no intrusiva de teléfono/WhatsApp por país (`+57`, `+54`, `+52`, `+56`, `+51`, `+34`, `+1`) en `onBlur` y submit.
    * Auto-scroll hacia arriba al cambiar de paso.
12. **Plataforma / Login (`/login`):**
    * Campus YYCL y redirección a 404 para credenciales de prueba.
13. **Página 404 (`/not-found`):**
    * Ilustración oficial `404.png` optimizada a 118 KB con transparencia nativa.

### 🇬🇧 Hub en Inglés (`/en`):
1. **Home EN (`/en`):** Spanish classes for foreigners, Hero F-pattern.
2. **Spanish for Adults (`/en/spanish-classes`):** Asset `YYCL_EN_02_SPANISH_CLASSES_ADULTS.png`.
3. **Spanish for Kids (`/en/spanish-classes-kids`):** Asset `YYCL_EN_03_SPANISH_CLASSES_KIDS.png`.
4. **About Us EN (`/en/about-us`):** Asset `YYCL_EN_04_ABOUT_US_IDIOMAS_REVISION_BANDERA.png`.

---

## 🎯 2. Matriz Oficial de CTAs Estandarizada

| Página / Sección | CTA Aplicado |
|---|---|
| **1. Home** | `Agendar entrevista gratis` |
| **2. Cómo funciona** | `Agendar entrevista gratis` |
| **3. Resultados** | `Agendar entrevista gratis` |
| **4. Planes** | `Elegir mi modalidad` |
| **5. Kids & Teens** | `Agendar entrevista gratis` |
| **6. Empresas** | `Agendar reunión` |
| **7. Otros idiomas** | `Empezar mi nuevo idioma` |
| **8. Servicios especiales** | `Agendar entrevista gratis` |
| **9. Profesores** | `Agendar entrevista gratis` |
| **10. Sobre YYCL** | `Agendar entrevista gratis` |
| **11. Navbar / Header** | `Agendar gratis` |

---

## 🎨 3. Tokens y Reglas de Diseño Clave
* **Colores Primitivos:**
  * `#001837` (Navy profundo - texto principal y bordes sólidos).
  * `#FFD203` (Amarillo vibrante - botones primarios y acentos).
  * `#834296` (Violeta de marca - Grupal y títulos secundarios).
  * `#EC9519` (Ámbar - sombra física de botones y Personalizada).
  * `#4DC2DA` (Cyan - Dúo y Kids).
  * `#FDF8F3` (Crema fondo suave).
* **Sombras y Bordes:**
  * `border-2 border-[#001837]`
  * `shadow-[5px_5px_0px_#001837]` en tarjetas y `shadow-[3px_3px_0px_#EC9519]` en botones.
* **Tipografías:**
  * `font-heading`: Montserrat (`font-extrabold` / `font-bold`).
  * `font-body`: Nunito (`font-body-regular` / `font-body-large`).

---

## 🚀 4. Siguientes Pasos Sugeridos para la Próxima Sesión
1. **Revisión del Hub en Inglés (`/en`):** Validar textos finales y flujos para estudiantes angloparlantes de español.
2. **URL Oficial de Plataforma de Alumnos:** Enlazar el botón "Plataforma" a la URL real externa si ya está disponible.
3. **Testing de Producción Final:** Pasar el prototipo al equipo y recopilar feedback final.
