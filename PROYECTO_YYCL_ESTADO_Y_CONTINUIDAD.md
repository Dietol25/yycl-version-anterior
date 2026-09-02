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
9. **Profesores & Equipo (`/profesores`):**
   * Roster completo de 11 integrantes encabezado por los fundadores: **Natty Sánchez** (Co-founder & Head of Studies / CMO), **Néstor Montaño** (Co-founder & CFO / COO) y **Carolina Correal** (Coordinadora Administrativa y Operativa), seguidos por el equipo de docentes.
10. **Sobre YYCL (`/sobre-yycl`):**
    * Historia, valores y filosofía sin juicios.
11. **Agendamiento Inteligente (`/agendar` y `/en/agendar`):**
    * **Sustitución de Appointlet externo:** Wizard nativo de 4 pasos optimizado, sin salir del sitio web.
    * Slider horizontal interactivo de fechas (más de 20 días disponibles) con navegación fluida y scroll-snap.
    * Selector visual de horarios con botón violeta activo (`#834296`).
    * Validación no intrusiva de teléfono/WhatsApp por país (`+57`, `+54`, `+52`, `+56`, `+51`, `+34`, `+1`) en `onBlur` y submit.
12. **Trabaja con Nosotros (`/trabaja-con-nosotros` y `/en/join-our-team`):**
    * **Sustitución de Google Forms externo:** Formulario nativo de postulación docente en 4 pasos.
    * Captura de contacto internacional, idiomas/perfil docente, disponibilidad horaria, metodología de enseñanza y enlaces a CV / LinkedIn / Video.
    * Conector automático en segundo plano para volcar la información en tiempo real a **Google Sheets / Google Forms**.
13. **Plataforma / Login (`/login`):**
    * Campus YYCL y redirección a 404 para credenciales de prueba.
14. **Brochazos de Marca Estilizados (`components/ui/BrushStroke.tsx`):**
    * Vectorización caligráfica orgánica con variación de presión y terminación texturizada (`variant="brush"` y `variant="playful"`).
    * Variante recta y minimalista para el tono corporativo B2B en Empresas (`variant="straight"`).

### 🇬🇧 Hub en Inglés (`/en`):
1. **Home / Spanish Classes (`/en` o `/en/spanish-classes`):**
   * Category Pills: `Spanish Classes`, `English Classes`, `Kids & Teens`, `About Us`.
   * Hero: *"Learn Spanish, live with real teachers"* con asset `YYCL_EN_02_SPANISH_CLASSES_ADULTS.png`.
   * Sección *"Why YYCL — More than grammar"* con 3 PhotoCards editoriales.
   * Cierre: *"Start speaking Spanish"* con CTA `Book your no-cost interview`.
2. **English Classes (`/en/english-classes`):**
   * Dirigido a estudiantes internacionales no hispanohablantes (asiáticos, africanos, etc.).
   * Hero: *"The English course you'll actually finish"* con asset `YYCL_EN_01_ENGLISH_CLASSES_MODALIDADES.png`.
   * Sección *"How it works — Speak from day one"* con 2 PhotoCards.
   * Cierre: *"Ready to start speaking?"* con CTA `Book your no-cost interview`.
3. **Kids & Teens EN (`/en/spanish-classes-kids`):**
   * Hero: *"English (or Spanish) for kids"* con asset `YYCL_EN_03_SPANISH_CLASSES_KIDS.png`.
   * Sección *"Built for them — A program made for kids"* con 3 PhotoCards.
   * Cierre: *"Give your kid a head start"* con CTA `Book an interview`.
4. **About Us EN (`/en/about-us`):**
   * Hero: *"Who we are"* con asset `YYCL_EN_04_ABOUT_US_IDIOMAS_REVISION_BANDERA.png`.
   * Sección *"What we teach — One method, three languages"* con 3 PhotoCards.
   * Cierre: *"Sí puedes. Yes You Can."* con CTA `Book your no-cost interview`.
5. **Página 404 en Inglés (`/en/not-found` y `/en/[...catchAll]`):**
   * Ilustración oficial optimizada sin marcos ni bordes.
   * Titular: *"Oops! This page took off without telling us."*
   * CTAs: `Book your interview` y `← Back to Home`.
6. **Menú Móvil y Navbar Bilingüe (`Navbar.tsx` & `MobileMenu.tsx`):**
   * Links en inglés y botón primario `Book interview` / `Book an interview`.

---

## 🎯 2. Matriz Oficial de CTAs Estandarizada

| # | Página / Sección | CTA Hero (Cabecera) | CTA Cierre Inferior |
|---|---|---|---|
| **1** | **Home** | `Quiero hablar` | `Agendar entrevista gratis` |
| **2** | **Cómo funciona** | `Probar el método` | `Agendar entrevista gratis` |
| **3** | **Resultados** | `Quiero esos resultados` | `Agendar entrevista gratis` |
| **4** | **Planes** | `Agendar entrevista gratis` | `Agendar entrevista gratis` |
| **5** | **Kids & Teens** | `Encontrar el plan ideal` | `Agendar entrevista gratis` |
| **6** | **Empresas** | `Agendar reunión` | `Agendar reunión` |
| **7** | **Otros idiomas** | `Elegir idioma` | `Empezar mi nuevo idioma` |
| **8** | **Servicios especiales** | `Prepararme ahora` | `Agendar entrevista gratis` |
| **9** | **Profesores** | — | `Agendar entrevista gratis` |
| **10** | **Sobre YYCL** | — | `Agendar entrevista gratis` |
| **11** | **Navbar / Header Sticky** | `Agendar gratis` | `Agendar gratis` |

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
