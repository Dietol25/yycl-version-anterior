# YYCL — Propuesta Estratégica: Agendamiento Nativo (API Appointlet) y Portal de Selección Docente con Carga de CV

**Para:** Equipo Directivo y Coordinación Académica de Yes You Can Languages (YYCL)  
**Fecha:** Septiembre de 2026  
**Documento:** Propuesta de Integración Técnica y Experiencia de Usuario (UX)  

---

## 1. Resumen Ejecutivo: El Por Qué de Esta Decisión

En el modelo actual, cuando un visitante decide dar el paso más importante en el sitio web —**agendar su entrevista de nivelación** o **postularse como profesor**— el sistema lo redirige fuera de la plataforma hacia interfaces externas genéricas (como la página estándar de Appointlet o un enlace de Google Forms).

### El problema de la redirección externa:
* **Fuga de conversión (Abandono de usuarios):** Hasta un **35% - 40% de los usuarios abandonan** el proceso al ser expulsados a una pestaña externa desconocida con un diseño diferente.
* **Pérdida de medición y analítica:** Las herramientas de seguimiento (Google Analytics 4, Meta Pixel) pierden el rastro del usuario al cambiar de dominio, dificultando saber qué campañas publicitarias realmente generan citas.
* **Percepción de marca:** Salir a un formulario genérico de Google le resta el valor premium, la calidez y el profesionalismo que transmite la nueva identidad de YYCL.

### La solución: Integración Nativa en Segundo Plano
Tanto el agendamiento como la selección de profesores se ejecutan **100% dentro del sitio web de YYCL**, con su propio diseño, tipografías y microinteracciones. Toda la información viaja por detrás (en segundo plano) hacia las herramientas que el equipo ya utiliza (**Appointlet, Google Calendar, Google Sheets y Google Drive**).

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                        FLUJO UNIFICADO DE CONVERSIÓN EN YYCL                           │
├───────────────────────────────┬────────────────────────────────────────────────────────┤
│ EXPERIENCIA DEL USUARIO (UX)  │ PROCESAMIENTO EN SEGUNDO PLANO (BACKEND)               │
├───────────────────────────────┼────────────────────────────────────────────────────────┤
│ 1. Alumno agenda entrevista   │ ➔ API Appointlet crea la reserva en tiempo real.       │
│    en la web de YYCL          │ ➔ Sincroniza con Google Calendar & Zoom de Admisiones. │
│    (sin salir del sitio)      │ ➔ Envía confirmación por email y recordatorio WhatsApp.│
├───────────────────────────────┼────────────────────────────────────────────────────────┤
│ 2. Docente postula en         │ ➔ Guarda el CV (PDF) en carpeta segura de Google Drive.│
│    "Trabaja con nosotros"     │ ➔ Registra la fila en Google Sheets para el equipo.    │
│    (con carga directa de CV)  │ ➔ Notifica al Coordinador Académico por email/Slack.   │
└───────────────────────────────┴────────────────────────────────────────────────────────┘
```

---

## 2. Propuesta 1: Agendamiento de Entrevistas con API de Appointlet

### ¿Cómo funciona la experiencia para el alumno?
1. El alumno entra a `/agendar` (o `/en/agendar`).
2. Elige en pantalla su idioma de interés, nivel aproximado y selecciona en un calendario visual el día y la hora de su preferencia.
3. Ingresa su nombre, correo y WhatsApp con el selector telefónico internacional.
4. Al hacer clic en **"Confirmar Entrevista Gratuita"**, la web se comunica con la API de Appointlet al instante.
5. El alumno ve una pantalla de confirmación dentro de YYCL con recomendaciones para su entrevista, y recibe su enlace de videollamada por correo.

### Beneficios para el equipo comercial y de admisiones:
* **Cero cambios en la operativa diaria:** Los asesores de YYCL siguen recibiendo las citas en su Google Calendar y en su panel habitual de Appointlet.
* **Validación de teléfonos:** El selector de código de país (`+57`, `+54`, `+52`, `+1`, etc.) evita números incompletos o erróneos para el contacto por WhatsApp.
* **Medición exacta del ROI:** Cada agendamiento dispara un evento de conversión directo en Google y Meta para optimizar el presupuesto publicitario.

---

## 3. Propuesta 2: Portal Docente "Trabaja con Nosotros" (con Carga de CV)

Para reemplazar el formulario externo de Google Forms, implementamos un **Wizard de 4 pasos optimizado** en `/trabaja-con-nosotros` y `/en/join-our-team`.

### Estructura de campos y módulos:

```
┌────────────────────────────────────────────────────────────────────────┐
│ PASO 1: Datos Personales & Contacto                                    │
│   • Nombre y apellido                                                  │
│   • Correo electrónico                                                 │
│   • WhatsApp con selector de país (+54, +57, +52, +56, etc.)           │
│   • Ciudad y País de residencia actual                                 │
├────────────────────────────────────────────────────────────────────────┤
│ PASO 2: Perfil Académico e Idiomas                                     │
│   • Idioma principal de enseñanza (Inglés, Francés, Portugués, Español)│
│   • Años de experiencia (1-3 años, 3-5 años, +5 años)                  │
│   • Público objetivo preferido (Adultos, Niños/Teens, Empresas, Todos)│
│   • Certificaciones docentes (TEFL, CELTA, TESOL, Licenciatura)        │
├────────────────────────────────────────────────────────────────────────┤
│ PASO 3: Disponibilidad & Filosofía Pedagógica                          │
│   • Disponibilidad semanal (Part-time 10-20h, Full-time +20h)          │
│   • Franjas horarias preferidas (Mañanas, Tardes, Noches)              │
│   • Enfoque conversacional: Cómo ayuda al alumno a soltarse            │
├────────────────────────────────────────────────────────────────────────┤
│ PASO 4: Carga de CV y Enlaces Profesionales                            │
│   • 📎 CARGA DIRECTA DE CV: Botón de subida de archivo (PDF / DOCX)     │
│   • Perfil de LinkedIn o enlace a portafolio                           │
│   • Video de presentación (Loom, YouTube, Drive) — Opcional            │
│   • Mensaje de motivación para unirse a YYCL                           │
└────────────────────────────────────────────────────────────────────────┘
```

### ¿Cómo recibe la información la Dirección de Estudios?
* **Almacenamiento automático de CVs:** Cuando el profesor sube su PDF, el sistema lo almacena automáticamente en una carpeta organizada de **Google Drive** (`YYCL / Candidaturas Docentes / 2026`).
* **Base de datos centralizada:** Los datos del candidato se insertan automáticamente como una nueva fila en una hoja de **Google Sheets**, con el enlace directo para abrir el CV en un solo clic.
* **Alerta inmediata:** Se envía un correo o notificación automática a la persona encargada de selección docente cuando ingresa un nuevo perfil.

---

## 4. Comparativa: Estado Anterior vs. Estado Propuesto

| Aspecto | Antes (Servicios Externos Separados) | Propuesta Unificada YYCL |
|---|---|---|
| **Experiencia de Usuario (UX)** | El usuario saltaba de la web a pestañas externas frías. | Todo el proceso ocurre dentro de YYCL, sin interrupciones. |
| **Identidad Visual** | Formularios genéricos de Google y Appointlet. | Diseño institucional, tipografías de marca y estilo scrapbook. |
| **Carga de CV** | Obligaba al profesor a tener cuenta de Google activa. | Sube el archivo directamente desde cualquier dispositivo o móvil. |
| **Retención y Conversión** | Fuga de usuarios estimada entre 35% y 40%. | Máxima retención y confirmación en tiempo real. |
| **Recepción de Datos** | Datos dispersos en distintas plataformas. | Sincronización automática con Google Calendar, Sheets y Drive. |
| **Soporte Bilingüe** | Formularios solo en español o difíciles de traducir. | 100% bilingüe nativo (`ES` y `EN`). |

---

## 5. Próximos Pasos para la Puesta en Marcha

1. **Aprobación del equipo:** Validar que los campos del Wizard docente y del flujo de agendamiento cubran todas las necesidades operativas.
2. **Conexión de credenciales API:**
   * Proporcionar la API Key de Appointlet para habilitar la sincronización directa de disponibilidad.
   * Configurar el Webhook o Google Apps Script para el volcado de CVs a Google Drive / Sheets.
3. **Pase a Producción:** Una vez validadas las pruebas, el flujo quedará activo en el dominio principal de `yesyoucanlanguages.com`.
