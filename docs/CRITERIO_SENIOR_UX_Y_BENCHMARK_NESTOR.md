# 🎯 Dictamen Senior de Producto y UX: Análisis Estratégico de las Referencias de Néstor

**Documento Interno de Dirección de Diseño y Producto — YYCL**  
**Fecha:** Septiembre 2026  
**Objetivo:** Alinear las aspiraciones visuales y de percepción de marca (Fase 2) con la rentabilidad, usabilidad móvil y tasa de conversión del embudo de agendamiento.

---

## 📌 1. Resumen Ejecutivo: La Intención vs. La Realidad Técnica

Las 5 referencias compartidas por Néstor revelan una ambición legítima y necesaria para el crecimiento de **Yes You Can Languages**:
1. **Sensación de producto tecnológico moderno y vivo** (*Jitter, Sofi Health*).
2. **Sensación de volumen, dinamismo y abundancia** (*Squarespace*).
3. **Estatura institucional y credibilidad incuestionable** (*Berlitz, Wall Street English*).

Sin embargo, desde una perspectiva **Senior de Producto**, existe una frontera crítica entre el diseño que gana premios en Awwwards/Dribbble y el diseño que **convierte visitantes en estudiantes que pagan**.

> **El único objetivo comercial que financia la academia:**  
> Visitante → Entiende la propuesta de valor en < 5 seg → Clic en «Agendar entrevista gratis» → Natty / Néstor cierran la venta en Google Meet.  
> **Cualquier elemento visual que compita con este embudo reduce la facturación.**

---

## 🔍 2. Deconstrucción Crítica de las 5 Referencias

### A. Jitter.video (`jitter.video`)
* **Lo que vio Néstor:** El efecto de tarjetas apilables (*Sticky Card Stacking*) donde una tarjeta se desliza sobre otra con un motion limpio y moderno.
* **Por qué existe en Jitter:** Jitter es una **herramienta de animación para diseñadores**. Para ellos, el movimiento *es el producto*. Su cliente juzga la web por la calidad de las curvas de aceleración.
* **El veredicto para YYCL:**
  * **En Desktop:** Funciona excelente para las 3 modalidades (Grupal, Personalizada, Dúo) porque hay altura vertical suficiente y genera un ritmo visual agradable.
  * **En Mobile (Peligro crítico):** En una pantalla de 6.1" (como un iPhone o Galaxy promedio), las tarjetas sticky provocan el fenómeno conocido como **Scroll Trapping**: el usuario siente que el scroll se "atascó" y que la página no responde con normalidad.
  * **Criterio Senior:** Implementar el apilado sticky **únicamente en pantallas de escritorio (`lg:`)**. En móviles, usar un scroll vertical nativo o un carrusel táctil suave con indicadores visuales (*slim dots*).

---

### B. Sofi Health (`sofihealth.com`)
* **Lo que vio Néstor:** Un scroll cinemático, continuo y de alta tecnología.
* **Por qué existe en Sofi:** Sofi vende un **dispositivo de hardware físico de $150+ USD** para el sueño y la ansiedad. El scroll 3D rotatorio simula tener el objeto físico en la mano antes de comprarlo por internet.
* **El veredicto para YYCL:**
  * YYCL no vende un objeto de plástico; vende **confianza humana, superación profesional y pérdida del miedo al ridículo**.
  * El scroll secuestrado (*scroll-jacking*) destruye el rendimiento en teléfonos de gama media en Latinoamérica (consumo alto de GPU/batería) y aumenta la tasa de rebote en los primeros 3 segundos.
  * **Criterio Senior:** Descartar por completo el scroll 3D invasivo. En su lugar, adoptar lo rescatable de Sofi: **transiciones de color limpias y espaciado generoso (Color Blocking)** al descender hacia las secciones de prueba social.

---

### C. Squarespace (Plantilla Lexington y Home)
* **Lo que vio Néstor:** Columnas de imágenes en bucle infinito continuo (*Infinite Marquee*) que se desplazan solas a la derecha del titular.
* **Por qué existe en Squarespace:** Squarespace vende cientos de plantillas gráficas. Necesita demostrar que tiene plantillas para todos los gustos y rubros mediante un escaparate en continuo movimiento.
* **El veredicto para YYCL:**
  * **La regla de oro del F-Pattern:** El ojo humano tiene un reflejo evolutivo inmediato: *donde hay movimiento autónomo, la vista se clava allí*.
  * Si colocamos dos columnas de fotos moviéndose solas al lado del titular principal: el usuario mira las fotos y NO lee el H1 ni hace clic en el CTA.
  * Además, viola el principio de accesibilidad **WCAG 2.2.2 (Pause, Stop, Hide)** si no ofrece control evidente para pausarlo.
  * **Criterio Senior:** El bucle infinito de Squarespace **sí es valioso, pero en el lugar correcto**. No debe vivir en el Hero (donde compite con la conversión), sino **debajo del pliegue (below the fold)** como una franja de *"Comunidad y Vida en YYCL"*, o como un mosaico interactivo donde el usuario decide interactuar.

---

### D. Berlitz y Wall Street English
* **Lo que vio Néstor:** El aura de seriedad, notoriedad y "marca grande".
* **La realidad:** Ambas webs son corporativas, frías, burocráticas y llenas de fotos de stock de modelos de oficina que no representan a un estudiante latinoamericano real.
* **El veredicto para YYCL:**
  * **La ventaja competitiva de YYCL es precisamente NO parecerse a Berlitz:**
    1. Las fotos de YYCL son de personas de carne y hueso: **Natty, Néstor, Carolina, José**.
    2. El tono no es frío institucional; es cercano, empático y sin juicios (*«Pierde el miedo», «Acá nadie te juzga»*).
    3. Ninguna gran multinacional se atreve a ofrecer un diagnóstico oral 1-a-1 de 15 minutos en vivo con la dirección pedagógica sin pedir tarjeta de crédito antes.
  * **Criterio Senior:** No imitemos la frialdad de Berlitz; incorporemos sus **sellos de rigor**:
    * Sello del **Marco Común Europeo de Referencia (CEFR A1–C1)**.
    * Mención a docentes titulados y supervisión académica continua.
    * Estadísticas visibles (+1.200 estudiantes, 5.0★ en Google Maps).

---

## ⚖️ 3. Matriz Comparativa: "Efecto Wow" vs. "Embudo de Conversión"

| Concepto Visual | Fuente | Impacto en Percepción | Riesgo en Conversión / UX | Recomendación Senior YYCL |
|---|---|---|---|---|
| **Sticky Stacking Cards** | Jitter | ⭐⭐⭐⭐⭐ Muy alto | 🔴 Crítico en móviles (scroll trapping). | **Aprobado con condición:** Solo activo en escritorio (`≥1024px`). En móvil: flujo vertical estándar. |
| **Bucle Infinito en Hero** | Squarespace | ⭐⭐⭐⭐ Alto | 🔴 Distracción del H1 y del botón principal. | **Reubicado:** Mover a una franja de comunidad intermedia, dejando el Hero con ancla humana estática. |
| **Scroll 3D / Pacing pesado** | Sofi Health | ⭐⭐⭐⭐⭐ Muy alto | 🔴 Destructivo para móviles y tiempo de carga. | **Descartado:** Reemplazado por transiciones de color sólido (Color Blocking) sin alterar la rueda del ratón. |
| **Sellos de Acreditación** | Berlitz | ⭐⭐⭐⭐ Alto | 🟢 Ninguno (construye confianza inmediata). | **Aprobado al 100%:** Ubicar justo debajo del Hero como prueba de rigor académico. |
| **Economía Visual y Espaciado** | Wall Street English | ⭐⭐⭐⭐ Alto | 🟢 Mejora la legibilidad y reduce la fatiga visual. | **Aprobado al 100%:** Mantener márgenes generosos y tipografía Montserrat contundente. |

---

## 🛠️ 4. La Arquitectura Ideal para Fase 2 (El Camino Senior)

Para satisfacer la búsqueda de Néstor de que la web se perciba de **clase mundial**, sin sabotear las ventas:

1. **HERO (Cálido, Humano & Enfocado a Conversión):**
   - Fondo: `#FDF8F3` (Crema suave).
   - Izquierda: H1 contundente + CTA (*«Agendar entrevista gratis»*).
   - Derecha: Tarjeta limpia de Natty / Clase en vivo (sin bucles que distraigan el primer clic).
2. **BARRA DE AUTORIDAD Y ACREDITACIÓN (Estilo Berlitz Moderno):**
   - CEFR (A1–C1) · Docentes Certificados · 5.0★ Google Reviews · Diagnóstico 15 min sin costo.
3. **MODALIDADES: STICKY STACKING CARDS (Inspiración Jitter):**
   - Solo en Desktop: Grupal → Personalizada → Dúo se apilan suave.
   - En Mobile: Tarjetas independientes con espaciado natural.
4. **FRANJA DE COMUNIDAD EN BUCLE SUAVE (Inspiración Squarespace):**
   - Aquí SÍ: Mosaico en movimiento continuo con momentos de clase, alumnos de Colombia, Chile, México y docentes. Demuestra vida sin tapar el Hero.
5. **RESULTADOS DE ALTO IMPACTO (Color Blocking Sofi Health):**
   - Fondo: `#001837` (Navy profundo).
   - Testimonios reales y enlaces directos a Google Maps.
6. **CIERRE: «Sí puedes. Yes You Can.»:**
   - Retorno al crema con el botón de conversión final.

---

## 💬 5. Guion Estratégico para Conversar con Néstor

> *«Néstor, analizamos a fondo las 5 referencias y entendimos perfectamente el salto de calidad que buscas: que la web se sienta tecnológica, viva y con el peso de una institución grande.*  
> 
> *Lo probamos en código real y encontramos dos conclusiones clave de negocio:*  
> 
> *1. **El bucle en movimiento continuo de Squarespace es genial para mostrar volumen**, pero ponerlo al lado del título principal hace que la gente mire las fotos y no lea la propuesta ni haga clic en el botón de agendar. Por eso lo convertimos en una franja de comunidad intermedia que demuestra toda la vida de las clases sin sabotear el primer clic.*  
> 
> *2. **El efecto de tarjetas apilables de Jitter lo implementamos para las modalidades**, pero calibrado para que en teléfonos móviles no bloquee la pantalla del usuario (el 70% de nuestros leads entra desde el celular).*  
> 
> *3. **A Berlitz y Wall Street English no les copiamos el diseño porque el nuestro es mucho más cálido y humano**, pero sí les ganamos incorporando sellos de rigor pedagógico (Marco Europeo, docentes titulados y las reseñas perfectas de Google).*  
> 
> *Con esto logramos exactamente la sensación premium y tecnológica que querías, pero protegiendo al 100% las reservas de entrevistas.»*
