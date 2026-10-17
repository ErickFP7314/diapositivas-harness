# ⚡ Harness Engineering — Masterclass Presentation

> **Presentación Interactiva en React 19 SPA & Guión Maestro del Presentador**  
> Exploración rigurosa de la ingeniería de arneses para agentes de inteligencia artificial en desarrollo de software, desde el desacoplamiento del chat hasta la observabilidad y los cierres limpios de sesión.

🌐 **Sitio Web en Vivo (GitHub Pages):**  
👉 **[https://erickfp7314.github.io/diapositivas-harness/](https://erickfp7314.github.io/diapositivas-harness/)**

---

## 🚀 Características Principales

- **40 Subdiapositivas Atómicas:** Estructuradas en 13 conferencias temáticas (Lecturas 00 a 12), dividiendo cada concepto en unidades mínimas verificables con mínima saturación de texto y máxima interacción visual.
- **Transición PowerPoint Morph ("Transformar"):**
  - **Intra-sección:** Las diapositivas de una misma conferencia comparten `layoutId` en cabeceras, títulos y pies de página mediante Framer Motion, logrando una animación fluida y continua donde los elementos se reposicionan suavemente.
  - **Inter-sección:** Al cruzar la frontera entre conferencias, se despliega una transición de panel distintiva con aviso holográfico y barrido de capítulo.
- **Explorador Agéntico (Estilo VS Code):**
  - Menú lateral interactivo con árbol jerárquico colapsable (`00` a `12`).
  - Navegación directa por subdiapositiva (`00.1`, `00.2`, `01.1`, etc.).
  - Filtro de búsqueda en tiempo real, barra de progreso global y botones de expansión masiva.
- **Cajón de Notas del Orador Integrado:**
  - Presiona `[N]` en cualquier momento para desplegar el guión exhaustivo, objetivos pedagógicos, guías visuales de artefactos y manejo de preguntas difíciles (Q&A).
- **Estética Cyber-Grid Sobria:**
  - Paleta de color oscura profunda (`#000000`, `#020408`, `#05080c`), acentos en Cyan Neón (`#00f5ff`) y Verde Terminal (`#00ff88`).
  - Tipografía monoespaciada (JetBrains Mono / Consolas / Fira Code).
  - Cero emojis en la interfaz; iconografía técnica exclusiva con FontAwesome 6/7.
- **Rendimiento React 19:**
  - Gestión de estado global con `useReducer`.
  - Memoización rigurosa de vistas y cálculos con `useMemo` y `useCallback`.

---

## 📑 Índice de Secciones (Lecturas 0 a 12)

1. **Sección 00: Mini Harness & Desacoplamiento del Chat**  
   - `00.1` La Ecuación Fundamental: $\text{Agente} = \text{Modelo} + \text{Arnés}$  
   - `00.2` Tres Vías Técnicas: API REST, SDK Tipado & Modelos Locales  
   - `00.3` El Bucle ReAct en Código: Python `subprocess` & Despacho de Herramientas  
   - `00.4` Ecosistema de Arneses: Claude Code, Codex, Antigravity y Pi Agent  
2. **Sección 01: La Tesis del Binding Constraint** (`01.1` Las 5 Trampas, `01.2` Matriz de ROI, `01.3` Clear DoD)
3. **Sección 02: El Modelo de 5 Subsistemas del Harness** (`02.1` Anatomía, `02.2` Laboratorio de Ablación, `02.3` Feedback ROI)
4. **Sección 03: Arquitectura de Conocimiento & Principios ACID** (`03.1` Repo como Única Verdad, `03.2` Regla de Proximidad, `03.3` ACID Repo)
5. **Sección 04: AGENTS.md & Relación Señal/Ruido (SNR)** (`04.1` Acumulación de Cicatrices, `04.2` Lost in the Middle & SNR, `04.3` 4 Bloques Canónicos)
6. **Sección 05: Continuidad de Sesión & Ansiedad Contextual** (`05.1` Trampa del Millón de Tokens, `05.2` Ansiedad Contextual, `05.3` Handoff PROGRESS.md)
7. **Sección 06: Inicialización en Dos Fases** (`06.1` Antipatrón Sesión Combinada, `06.2` Protocolo Dos Fases, `06.3` Readiness Checklist)
8. **Sección 07: Una Tarea a la Vez (Límites WIP = 1)** (`07.1` Dilución Contextual $C/k$, `07.2` Overreach vs Under-finish, `07.3` Presión de Cierre)
9. **Sección 08: Lista de Features & Máquina de Estados** (`08.1` Feature List como Contrato, `08.2` FSM TODO/DONE, `08.3` Ficha Atómica FEAT)
10. **Sección 09: Comprobar Definition of Done (DoD)** (`09.1` Victoria Prematura, `09.2` Árbitro Externo, `09.3` Validación en 3 Capas)
11. **Sección 10: Pipeline de Verificación Completo & Límites** (`10.1` Defectos de Frontera, `10.2` Jerarquía de Pruebas, `10.3` Reglas Ejecutables)
12. **Sección 11: Agente Observable & Telemetría OpenTelemetry** (`11.1` Observabilidad Multinivel, `11.2` Cascada OTEL, `11.3` Maker-Checker-Orchestrator)
13. **Sección 12: Final de Sesión Limpio & Idempotencia** (`12.1` Axioma Estado Limpio, `12.2` Session Exit Checklist, `12.3` Limpieza Idempotente & Documento de Calidad)

---

## ⌨️ Controles de Teclado

| Tecla | Acción |
| :--- | :--- |
| `[←]` o `[PageUp]` | Subdiapositiva anterior |
| `[→]`, `[PageDown]` o `[Espacio]` | Subdiapositiva siguiente |
| `[B]` | Mostrar / Ocultar Explorador de diapositivas |
| `[N]` | Abrir / Cerrar Guión del Orador |
| `[F]` | Alternar Pantalla Completa |
| `[Home]` / `[End]` | Ir a la primera / última diapositiva |

---

## 🛠️ Instalación y Desarrollo Local

```bash
# 1. Clonar el repositorio
git clone https://github.com/ErickFP7314/diapositivas-harness.git
cd diapositivas-harness

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Compilar para producción
npm run build

# 5. Previsualizar compilación local
npm run preview
```

---

## 📚 Documentación Adicional

- [GUION.md](./GUION.md): Guión completo palabra por palabra para las 40 subdiapositivas.
- [Apuntes/Apuntes.md](./Apuntes/Apuntes.md): Notas técnicas de las lecturas y código del mini harness.
