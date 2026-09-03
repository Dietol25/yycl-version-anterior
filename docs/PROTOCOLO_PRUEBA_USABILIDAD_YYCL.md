# 🧪 Guía Rápida: Protocolo de Pruebas de Usabilidad — YYCL Web

**Objetivo:** Evaluar si un usuario real comprende la propuesta pedagógica de YYCL, encuentra la modalidad adecuada para su perfil y completa el proceso de reserva (`/agendar`) sin fricción, dudas ni asistencia externa.  
**Formato:** Sesiones de 25 a 30 minutos (por Google Meet / Zoom con pantalla compartida, o presencial).  
**Muestra recomendada:** 5 participantes (detectan el 85% de los problemas de usabilidad según el estándar Nielsen Norman Group).  
**URL de prueba:** [https://yycl-prototype.vercel.app](https://yycl-prototype.vercel.app)

---

## 🎯 1. Perfil de los Participantes

* **Grupo A (3 personas - Core):** Adultos trabajadores (22 a 45 años) que necesitan inglés para su trabajo, entrevistas o viajes, y que hayan tenido frustraciones previas con apps o cursos tradicionales.
* **Grupo B (2 personas - Expansión / Bilingüe):** Hablantes no nativos de español (o bilingües) para evaluar la sección `/en` y la facilidad de entender la oferta de *Spanish Classes*.

> [!IMPORTANT]
> **Regla de oro de reclutamiento:** No uses miembros del equipo, amigos íntimos o personas que ya conozcan el proyecto de antemano. Necesitamos ojos frescos y honestidad sin filtro.

---

## 🧭 2. Reglas del Moderador (Cómo conducir la sesión)

1. **El usuario comparte pantalla:** El facilitador nunca maneja el cursor ni proyecta la web.
2. **Pensamiento en voz alta (*Think-Aloud Protocol*):** Pídele al usuario: *«Por favor, narra todo lo que estás pensando, mirando y sintiendo mientras navegas, como si pensaras en voz alta»*.
3. **No justifiques ni defiendas el diseño:** Si el usuario no encuentra un botón, **no le digas dónde está**. El error nunca es del usuario, es de la interfaz.
4. **Haz preguntas neutras:**  
   * ❌ *«¿Te gusta el botón amarillo?»*  
   * ✅ *«¿Qué esperarías que ocurra si haces clic en esa opción?»*  
   * ✅ *«¿Qué estás buscando en este momento?»*

---

## 📋 3. Guion de la Sesión (Paso a Paso)

### Fase 1: Bienvenida y Calentamiento (3 minutos)
> *«Hola [Nombre], gracias por sumarte. Hoy estamos probando una nueva versión de la web de una academia de idiomas. Queremos dejar muy claro que **estamos evaluando la página web, no a ti**. No hay respuestas correctas ni incorrectas. Si algo resulta confuso, difícil o no se entiende, nos ayuda muchísimo que nos lo digas abiertamente porque es un error del diseño que debemos corregir. ¿Nos autorizas a tomar notas / grabar la pantalla para uso interno?»*

---

### Tarea 1: Prueba de Primera Impresión (5-Second Test) (3 minutos)
* **Instrucción:** Entra al enlace y mira la primera pantalla sin hacer scroll por 10 segundos.
* **Preguntas inmediatas:**
  1. *«En tus propias palabras, ¿qué ofrece esta empresa?»*
  2. *«¿Qué fue lo primero que llamó tu atención visualmente?»*
  3. *«¿Qué tipo de sensación o tono te transmite la marca?»*

---

### Tarea 2: Descubrimiento de Metodología y Planes (7 minutos)
* **Escenario:** *«Imagínate que trabajas y necesitas soltarte a hablar en inglés porque tienes reuniones o entrevistas, pero tienes poco tiempo disponible.»*
* **Instrucción:** *«Explora la página y encuentra cuál de las opciones o modalidades de clase se adapta mejor a tu situación.»*
* **Puntos clave a observar por el equipo:**
  * ¿Hace scroll o busca menús en el header?
  * ¿Entiende la diferencia entre modalidad **Grupal, Personalizada y Dúo**?
  * ¿Los beneficios de los 3 pilares («hablas desde el minuto uno», «corrección sin juzgar») le generan confianza o le parecen cliché?

---

### Tarea 3: Flujo Crítico de Conversión / Reserva (8 minutos)
* **Escenario:** *«Decidiste que quieres probar cómo es una clase y hablar con alguien de la academia para que evalúen tu nivel.»*
* **Instrucción:** *«Avanza en la web para reservar esa entrevista o diagnóstico.»*
* **Puntos clave a observar por el equipo:**
  * ¿Dónde hace clic primero? (¿Botón del Hero, Header, o final de página?).
  * Al entrar a `/agendar`, ¿comprende los 4 pasos del wizard?
  * ¿Siente fricción en alguna pregunta (nivel actual, objetivo, horario)?
  * Al llegar a la pantalla final de confirmación: *«¿Te queda claro qué va a pasar después de este paso?»*

---

### Tarea 4: Prueba Bilingüe / Navegación Cruzada (4 minutos)
* **Escenario:** *«Un compañero de trabajo de EE.UU. que no habla español se muda a Latinoamérica y quiere aprender español online.»*
* **Instrucción:** *«Desde la web, fíjate si YYCL ofrece clases de español para él y cómo le compartirías esa información.»*
* **Puntos clave a observar por el equipo:**
  * ¿Usa el selector de idioma (ES/EN)? ¿Comprende el toggle?
  * ¿O busca en el menú de navegación «Otros idiomas»?
  * Al aterrizar en `/en`, ¿entiende de inmediato que es una oferta de *Spanish Classes* para angloparlantes?

---

### Fase 5: Cierre y Preguntas de Percepción (4 minutos)
1. *«Si tuvieras que describir esta web en 3 palabras, ¿cuáles serían?»*
2. *«¿Qué fue lo más claro y qué fue lo más confuso de todo lo que viste?»*
3. *«Si estuvieras buscando clases de inglés hoy mismo, ¿te daría confianza agendar aquí o qué información te faltó para decidirte?»*

---

## 📊 4. Plantilla de Registro de Hallazgos (Para el Evaluador)

Copia esta tabla simple para cada sesión con un tester:

| Participante | Tarea 1: Propuesta clara | Tarea 2: Modalidad entendida | Tarea 3: Agendamiento sin trabas | Tarea 4: Switch a /en intuitivo | Cita textual destacada (*Quote*) | Severidad (Alta/Media/Baja) |
|---|---|---|---|---|---|---|
| **P1** (Ej: Dev 28a) | ✅ Sí | ⚠️ Dudó entre Dúo y Personalizada | ✅ Completó en 1:20 min | ✅ Usó el toggle rápido | *«Pensé que me iban a cobrar antes de la llamada»* | Media |
| **P2** | | | | | | |
| **P3** | | | | | | |
| **P4** | | | | | | |
| **P5** | | | | | | |

---

## ⚡ 5. Semáforo de Priorización Post-Pruebas
* 🔴 **Crítico (Bloqueante):** El usuario no logra agendar o cree que el servicio es algo completamente diferente. Se corrige antes de cualquier lanzamiento.
* 🟡 **Medio (Fricción):** El usuario completa la tarea pero duda, relee 3 veces o pregunta qué significa un término. Se ajusta copy o contraste.
* 🟢 **Bajo (Preferencia):** Cuestiones subjetivas de gusto de color o tamaño de fuente secundario. Se evalúa con calma.
