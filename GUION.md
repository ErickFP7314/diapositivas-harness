# 🎙️ GUION MAESTRO DEL PRESENTADOR: HARNESS ENGINEERING (40 SUBDIAPOSITIVAS)

> **Documento de Referencia Técnica y Discurso Paso a Paso para la Masterclass.**  
> Este guion acompaña a la aplicación interactiva de diapositivas en React 19 SPA (`presentation/`).  
> Diseñado bajo el principio de **atomicidad estricta**: 40 subdiapositivas distribuidas en 13 secciones temáticas (Lecturas 0 a 12), con soporte para transiciones tipo **Morph ("Transformar")** dentro de la misma sección y transiciones de panel al cambiar de capítulo.

---

## 🎛️ ESTRUCTURA Y NAVEGACIÓN DE LA PRESENTACIÓN
- **Stack Tecnológico:** React 19 + Framer Motion (Morphing con `LayoutGroup` y `layoutId`) + Tailwind CSS v4 + FontAwesome Icons (Cero Emojis).
- **Estética Visual:** Dark Theme Cyber-Grid (`#000000`, `#020408`, `#05080c`), acentos en Cyan Neón (`#00f5ff`) y Verde Terminal (`#00ff88`, `#10b981`), tipografía monosespaciada (JetBrains Mono / Consolas).
- **Controles de Teclado:**
  - `[←]` / `[→]` o `[Espacio]`: Subdiapositiva anterior / siguiente.
  - `[B]`: Mostrar / Ocultar barra lateral interactiva (Explorador jerárquico tipo VS Code).
  - `[N]`: Abrir / Cerrar el panel del Guión del Presentador dentro de la propia app.
  - `[F]`: Alternar modo pantalla completa.

---

## 📑 MAPA GENERAL DE LAS 40 SUBDIAPOSITIVAS

### SECCIÓN 00: MINI HARNESS & DESACOPLAMIENTO DEL CHAT
- **00.1** `00.1_equation.ag` — La Ecuación Fundamental: Agente = Modelo + Arnés
- **00.2** `00.2_three_paths.ag` — Tres Vías Técnicas: API REST, SDK Tipado & Modelos Locales
- **00.3** `00.3_react_loop.ag` — El Bucle ReAct en Código: Python `subprocess` & Despacho de Herramientas
- **00.4** `00.4_pi_agent.ag` — Ecosistema de Arneses: Claude Code, Antigravity & La Razón de Pi Agent

### SECCIÓN 01: LA TESIS DEL BINDING CONSTRAINT
- **01.1** `01.1_five_traps.ag` — Diagnóstico del Fracaso: Las 5 Trampas Estructurales
- **01.2** `01.2_roi_matrix.ag` — Retorno de Inversión (ROI): Modelo Caro vs Arnés Robusto
- **01.3** `01.3_clear_dod.ag` — Definition of Done (DoD): Contrato Formal de Cierre

### SECCIÓN 02: EL MODELO DE 5 SUBSISTEMAS DEL HARNESS
- **02.1** `02.1_subsystems.ag` — La Anatomía del Arnés: Los 5 Pilares Fundamentales
- **02.2** `02.2_ablation_lab.ag` — Laboratorio de Ablación: Cuantificación del Impacto por Componente
- **02.3** `02.3_feedback_roi.ag` — El Subsistema Crítico: Retroalimentación y Retorno Máximo

### SECCIÓN 03: ARQUITECTURA DE CONOCIMIENTO & PRINCIPIOS ACID
- **03.1** `03.1_repo_as_spec.ag` — El Repositorio como Única Fuente de Verdad
- **03.2** `03.2_proximity_rule.ag` — La Regla de Oro: Proximidad Física vs Longitud
- **03.3** `03.3_acid_governance.ag` — Gobernanza ACID del Repositorio Agéntico

### SECCIÓN 04: AGENTS.MD & RELACIÓN SEÑAL/RUIDO (SNR)
- **04.1** `04.1_scar_accumulation.ag` — La Patología de la Acumulación de Cicatrices
- **04.2** `04.2_lost_in_middle.ag` — Lost in the Middle & Relación Señal/Ruido (SNR)
- **04.3** `04.3_progressive_disclosure.ag` — Los 4 Bloques Canónicos & Divulgación Progresiva

### SECCIÓN 05: CONTINUIDAD DE SESIÓN & ANSIEDAD CONTEXTUAL
- **05.1** `05.1_context_limits.ag` — La Trampa del Millón de Tokens: Costo y Degradación
- **05.2** `05.2_context_anxiety.ag` — Patología de Ansiedad Contextual (Anthropic)
- **05.3** `05.3_session_handoff.ag` — Protocolo de Continuidad: PROGRESS.md (15m a 3m)

### SECCIÓN 06: INICIALIZACIÓN EN DOS FASES
- **06.1** `06.1_combined_session_hazard.ag` — El Antipatrón de la Sesión Combinada
- **06.2** `06.2_two_phase_protocol.ag` — El Protocolo de Inicialización en Dos Fases
- **06.3** `06.3_readiness_checklist.ag` — Startup Readiness Checklist & Reproducibilidad

### SECCIÓN 07: UNA TAREA A LA VEZ (LÍMITES WIP = 1)
- **07.1** `07.1_context_dilution.ag` — Dilución Contextual Matemática: C / k
- **07.2** `07.2_overreach_underfinish.ag` — Las Dos Caras: Overreach vs Under-finish
- **07.3** `07.3_wip_one_pressure.ag` — Límite Estricto WIP = 1 & Presión de Finalización

### SECCIÓN 08: LISTA DE FEATURES & MÁQUINA DE ESTADOS
- **08.1** `08.1_feature_list_contract.ag` — La Feature List como Especificación Estructurada
- **08.2** `08.2_finite_state_machine.ag` — Máquina de Estados Finita: TODO -> IN_PROGRESS -> VERIFYING -> DONE
- **08.3** `08.3_atomic_feature_card.ag` — Anatomía de la Ficha Atómica de Feature

### SECCIÓN 09: COMPROBAR DEFINITION OF DONE (DOD)
- **09.1** `09.1_premature_victory.ag` — El Peligro de la Victoria Prematura
- **09.2** `09.2_external_arbiter.ag` — Externalizar la Sentencia de Terminación
- **09.3** `09.3_three_layer_engine.ag` — Motor de Validación en Tres Capas & Runtime Smoke Test

### SECCIÓN 10: PIPELINE DE VERIFICACIÓN COMPLETO & LÍMITES
- **10.1** `10.1_boundary_defects.ag` — Defectos en los Límites de Componentes
- **10.2** `10.2_verification_hierarchy.ag` — Jerarquía y Gradiente de Adecuación de Pruebas
- **10.3** `10.3_executable_rules.ag` — Reglas Arquitectónicas Ejecutables & Errores Accionables

### SECCIÓN 11: AGENTE OBSERVABLE & TELEMETRÍA OPENTELEMETRY
- **11.1** `11.1_dual_observability.ag` — Observabilidad Multinivel: Sistema y Proceso
- **11.2** `11.2_opentelemetry_traces.ag` — Estandarización con OpenTelemetry (OTEL)
- **11.3** `11.3_three_agent_architecture.ag` — Arquitectura de Tres Agentes de Anthropic

### SECCIÓN 12: FINAL DE SESIÓN LIMPIO & IDEMPOTENCIA
- **12.1** `12.1_clean_state_axiom.ag` — El Axioma del Estado Limpio & Transaccionalidad
- **12.2** `12.2_session_exit_checklist.ag` — Session Exit Checklist: Las 5 Condiciones No Negociables
- **12.3** `12.3_idempotence_quality_doc.ag` — Limpieza Idempotente & El Documento de Calidad

---

## 🎙️ DESARROLLO EXHAUSTIVO POR SUBDIAPOSITIVA

---

### 🔹 SUBDIAPOSITIVA 00.1: LA ECUACIÓN FUNDAMENTAL
- **Archivo:** `00.1_equation.ag`
- **Duración:** 4 minutos
- **Objetivo Pedagógico:** Establecer con fuerza matemática y conceptual que un modelo de lenguaje no es un agente. Un modelo es solo un motor de predicción probabilística de tokens.
- **Guía Visual:**
  - El encabezado morphing destaca la Sección 00 y la insignia `00.1 / 00.4`.
  - En el centro, la tarjeta de la Ecuación Fundamental: `AGENTE = MODELO (LLM) + HARNESS`.
  - Muestra las dos tarjetas comparativas: El Modelo como CPU estocástica vs El Arnés como Sistema Operativo.
- **Discurso del Presentador:**
  "Bienvenidos a todos a esta masterclass sobre Harness Engineering.
  Quiero empezar con una pregunta muy honesta: ¿Cuántos de ustedes han pasado horas frente a una ventana de chat de ChatGPT o Claude, copiando un código, probándolo en su consola, viendo que explota con un error, copiando el error de regreso al chat, recibiendo una disculpa del modelo, pegando la nueva versión y viendo que vuelve a explotar?
  Lo que estaban haciendo en ese momento tiene un nombre muy claro en ciencias de la computación: ustedes estaban actuando como el arnés biológico del modelo.
  Un modelo de lenguaje, por sí solo, no tiene cuerpo, no tiene manos, no puede tocar el disco duro ni ejecutar una terminal.
  La ecuación fundamental que gobernará toda esta presentación es:
  `AGENTE = MODELO (LLM) + HARNESS`.
  El modelo es simplemente una unidad de procesamiento probabilística. El arnés es el sistema operativo: la capa de software determinista que le entrega herramientas, ejecuta sus comandos en el sistema operativo, captura las salidas reales, gestiona su memoria y valida sus resultados.
  Si el arnés es frágil, el agente es inútil, sin importar cuán inteligente sea el modelo."
- **Puntos Clave:**
  - El modelo aislado solo predice tokens; no puede interactuar con el entorno.
  - El arnés aporta determinismo, ejecución en el sistema operativo y validación.
  - La autonomía agéntica es una propiedad del sistema completo, no del LLM.
- **Q&A Hints:**
  - *¿Por qué llamar arnés y no simplemente wrapper o framework?* Respuesta: Un wrapper solo cambia la sintaxis; un arnés (harness) restringe físicamente el movimiento del modelo, amortigua impactos y dirige su tracción hacia un objetivo seguro.

---

### 🔹 SUBDIAPOSITIVA 00.2: TRES VÍAS DE DESACOPLAMIENTO
- **Archivo:** `00.2_three_paths.ag`
- **Duración:** 4 minutos
- **Objetivo Pedagógico:** Explicar cómo liberar al LLM de la prisión del chat mediante las tres opciones de conexión: API REST, SDK Tipado o Inferencia Local.
- **Guía Visual:**
  - Observa la transición Morph: El encabezado y el pie de página se mantienen en posición mientras las tarjetas internas fluyen suavemente.
  - Haz clic en los tres selectores: `[1. API DIRECTA]`, `[2. SDK PROGRAMÁTICO]`, `[3. MODELO LOCAL]`.
  - Muestra el badge dinámico cambiando según la vía seleccionada.
- **Discurso del Presentador:**
  "Para que un modelo de lenguaje pueda programar software real, lo primero que debemos hacer es sacarlo de la interfaz de chat.
  Y para lograrlo, la ingeniería de software nos ofrece tres vías técnicas:
  1. API Directa (REST / cURL): Enviar peticiones POST a `/v1/chat/completions`. Nos da control absoluto de bajo nivel sobre headers, streaming server-sent events y proxies.
  2. SDK Programático: Usar librerías tipadas en Python o TypeScript como `openai` o `anthropic`. Maneja automáticamente la serialización de JSON, los reintentos exponenciales y el tipado estricto de herramientas.
  3. Modelos Locales (Ollama / vLLM): Correr modelos abiertos como Qwen 2.5 Coder o DeepSeek en GPUs locales. Costo cero por token, privacidad empresarial y latencia ultra baja.
  Cualquiera de estas tres vías nos permite desacoplar al modelo del chat y ponerlo a disposición de nuestro código en un bucle autónomo."
- **Puntos Clave:**
  - Salir del chat es la precondición obligatoria para la autonomía agéntica.
  - El SDK programático es la opción recomendada para desarrollo rápido y tipado.
  - Los modelos locales permiten experimentación offline con costo marginal cero.
- **Q&A Hints:**
  - *¿Se puede alternar entre API y Local en un mismo arnés?* Respuesta: Sí, un arnés bien diseñado desacopla el cliente de inferencia mediante interfaces abstractas.

---

### 🔹 SUBDIAPOSITIVA 00.3: EL BUCLE REACT EN CÓDIGO
- **Archivo:** `00.3_react_loop.ag`
- **Duración:** 5 minutos
- **Objetivo Pedagógico:** Demostrar el funcionamiento paso a paso del bucle Reasoning + Action (ReAct) en un mini harness en Python con llamadas al sistema operativo.
- **Guía Visual:**
  - Usa los botones `[Paso Anterior]` y `[Siguiente Paso]` para avanzar en el simulador de 6 fases (`INPUT` -> `PROMPT` -> `INTENT` -> `EXECUTE` -> `FEEDBACK` -> `DONE`).
  - Señala la terminal interactiva inferior que imprime los logs de ejecución de `subprocess.run()`.
- **Discurso del Presentador:**
  "Miren la simulación en pantalla. Este es el corazón de un arnés: el bucle ReAct.
  Fíjense bien en el paso 3: el modelo NO ejecuta código. El modelo emite una intención estructurada: un objeto JSON llamado `tool_call` que dice: `execute_bash("pytest tests/")`.
  En el paso 4, nuestro arnés captura ese JSON, valida los permisos de seguridad y utiliza la librería estándar de Python `subprocess.run()` para invocar la terminal física del sistema operativo.
  En el paso 5, el arnés toma el código de salida y la salida estándar, y se lo inyecta de regreso al modelo en un mensaje de rol `tool`.
  El modelo 've' lo que pasó en la máquina real y decide su siguiente movimiento.
  Este ciclo cerrado de retroalimentación es lo que transforma la inferencia estática en acción deliberada."
- **Puntos Clave:**
  - El modelo solo genera llamadas estructuradas (`tool_calls`); la ejecución física la hace el arnés.
  - `subprocess.run` conecta el razonamiento del modelo con la terminal real.
  - El rol `tool` cierra el circuito devolviendo la realidad del sistema al LLM.
- **Q&A Hints:**
  - *¿Qué pasa si el comando bash se cuelga?* Respuesta: El arnés debe configurar un `timeout` explícito en `subprocess.run` para evitar que un proceso zombie congele la sesión.

---

### 🔹 SUBDIAPOSITIVA 00.4: ECOSISTEMA & ELECCIÓN DE PI AGENT
- **Archivo:** `00.4_pi_agent.ag`
- **Duración:** 4 minutos
- **Objetivo Pedagógico:** Comparar los arneses de frontera comerciales (Claude Code, Codex, Antigravity) y justificar la elección de Pi Agent como base pedagógica y extensible.
- **Guía Visual:**
  - Examina las 4 tarjetas de arneses: Claude Code, OpenAI Codex CLI, Google Antigravity y la tarjeta central destacada en verde neón de **Pi Agent**.
  - Destaca las métricas de Pi Agent: 4 herramientas atómicas (`read`, `write`, `edit`, `bash`) y prompt ultra limpio de menos de 1000 tokens.
- **Discurso del Presentador:**
  "Muchos desarrolladores piensan que herramientas famosas como Claude Code de Anthropic, Codex de OpenAI o Antigravity de Google DeepMind son modelos milagrosos completamente nuevos.
  No lo son: son arneses altamente sofisticados construidos alrededor de modelos existentes. Tienen sus propios SDKs, sus gestores de contexto y sus pipelines de ejecución.
  Podemos personalizar cualquiera de ellos, pero la mayoría son productos comerciales con miles de líneas de código opaco y prompts saturados de instrucciones propietarias.
  Por eso, en esta masterclass vamos a usar como referencia fundamental **Pi Agent**, diseñado por Mario Zechner.
  Pi Agent es el arnés agéntico más elegante y transparente de la industria: viene casi con cero configuración previa, un prompt de menos de 1000 tokens y solo 4 herramientas atómicas universales: `read`, `write`, `edit` y `bash`.
  Es el laboratorio perfecto para aprender a construir y extender nuestro propio arnés de ingeniería."
- **Puntos Clave:**
  - Claude Code y Antigravity son arneses construidos sobre modelos existentes.
  - Pi Agent ofrece una base de código abierta, minimalista y libre de bloatware.
  - Las 4 primitivas esenciales: lectura, escritura atómica, parcheo y ejecución bash.
- **Q&A Hints:**
  - *¿Pi Agent sirve para proyectos grandes?* Respuesta: Absolutamente; su filosofía de herramientas primitivas permite acoplar cualquier linter, runner de pruebas o pipeline CI/CD externo.

---

### 🔹 SUBDIAPOSITIVA 01.1: LAS 5 TRAMPAS ESTRUCTURALES
- **Archivo:** `01.1_five_traps.ag`
- **Duración:** 4 minutos
- **Objetivo Pedagógico:** Diagnosticar por qué fracasan los agentes de software. Desmontar el sesgo de atribuir los fallos al modelo y evidenciar las 5 fallas del arnés.
- **Guía Visual:**
  - Observa la transición de sección: El banner superior anuncia la llegada a la Sección 01 (Binding Constraint).
  - Explora las 5 tarjetas de trampas: Requisitos vagos, Convenciones implícitas, Entorno roto, Verificación ausente y Amnesia de estado.
- **Discurso del Presentador:**
  "Entramos a la Sección 1: La Tesis del Binding Constraint.
  Cuando un agente de desarrollo comete un error en un repositorio, el 90% de los líderes técnicos reacciona diciendo: 'El modelo es tonto. Necesitamos un modelo más grande'.
  Ese es un error de diagnóstico garrafal.
  En el 80% de los casos analizados en SWE-bench, el agente fracasa en una de estas cinco trampas estructurales:
  1. Requisitos vagos: El humano le dice 'hazlo más moderno'.
  2. Convenciones implícitas: Reglas no escritas que solo conocen los desarrolladores senior.
  3. Entorno roto: Dependencias rotas en npm o pip que devoran los tokens del agente.
  4. Verificación ausente: El agente no tiene tests para comprobar si lo que hizo funciona.
  5. Amnesia de estado: La sesión se corta y todo el progreso se pierde.
  Ninguna de estas cinco causas se soluciona cambiando de GPT-4o a Claude 3.7. Se solucionan construyendo un arnés riguroso."
- **Puntos Clave:**
  - El fracaso del agente rara vez proviene de una deficiencia de razonamiento del LLM.
  - Las convenciones no documentadas en el repo son invisibles para la IA.
  - La falta de verificación conduce a alucinaciones de finalización.
- **Q&A Hints:**
  - *¿Qué hacer si un desarrollador insiste en que el modelo es el culpable?* Respuesta: Someter el código a una prueba de ablación; casi siempre falta un comando de validación o un archivo de dependencias fijo.

---

### 🔹 SUBDIAPOSITIVA 01.2: MATRIZ DE ROI (MODELO VS HARNESS)
- **Archivo:** `01.2_roi_matrix.ag`
- **Duración:** 4 minutos
- **Objetivo Pedagógico:** Demostrar con datos cuantitativos el retorno de inversión masivo de optimizar el arnés frente a la quema de dinero en modelos de frontera más costosos.
- **Guía Visual:**
  - Morphing suave de la cabecera dentro de la Sección 01.
  - Mueve el slider interactivo del factor de costo del modelo (1x a 10x). Observa cómo el costo por token salta 10x mientras el porcentaje de éxito apenas sube un modesto 3%.
  - Contrasta con la tarjeta derecha de Arnés Optimizado: +320% de ganancia en tasa de éxito con costo plano.
- **Discurso del Presentador:**
  "Miren la evidencia económica en pantalla.
  Multiplicar por 10 el costo del modelo contratando el plan de suscripción más caro de cualquier proveedor comercial apenas les otorga entre un 2% y un 5% de incremento en la tasa de resolución de problemas en SWE-bench.
  Pero miren la columna de la derecha:
  Invertir un día de ingeniería en escribir un `AGENTS.md` de 80 líneas, configurar un comando determinista de tests en un Makefile y agregar un linter que devuelva errores tipados multiplica la tasa de éxito de su equipo en un **+320%**, manteniendo exactamente el mismo modelo económico.
  Invertir en arnés tiene el mejor retorno de inversión de toda la industria de inteligencia artificial."
- **Puntos Clave:**
  - Ley de rendimientos decrecientes al escalar únicamente el tamaño del modelo.
  - El arnés actúa como un multiplicador de fuerza de la inteligencia base.
  - Costo plano con saltos exponenciales en confiabilidad y velocidad de entrega.
- **Q&A Hints:**
  - *¿Significa esto que podemos usar modelos muy pequeños?* Respuesta: Sí, modelos como Claude 3.5 Haiku o Qwen 2.5 Coder rinden mejor con un arnés de primera que modelos gigantescos sin arnés.

---

### 🔹 SUBDIAPOSITIVA 01.3: DEFINITION OF DONE (DOD)
- **Archivo:** `01.3_clear_dod.ag`
- **Duración:** 4 minutos
- **Objetivo Pedagógico:** Definir la importancia de la Definition of Done como contrato inquebrantable de aceptación antes de permitir que el agente toque una sola línea de código.
- **Guía Visual:**
  - Morphing de la cabecera hacia la subdiapositiva 01.3.
  - Muestra la tarjeta del Contrato DoD con sus 4 requerimientos: Código limpio, tests verdes, documentación de progreso y commit atómico.
  - Destaca el axioma inferior: 'Sin una DoD explícita, el modelo decide su propio fin; y el modelo siempre busca complacer cerrando rápido'.
- **Discurso del Presentador:**
  "Para cerrar la Sección 1: ¿Cómo sabe el agente cuándo ha terminado su trabajo?
  Si no le damos una Definition of Done (DoD) formal, el modelo recurrirá a su entrenamiento de asistente conversacional: su instinto será complacer al usuario cerrando la tarea lo antes posible.
  Una Definition of Done agéntica no es un deseo; es un contrato ejecutable:
  1. `ruff check .` debe emitir cero advertencias.
  2. `pytest tests/` debe devolver código de salida 0 con todas las aserciones pasando.
  3. El archivo `PROGRESS.md` debe estar serializado.
  4. Los cambios deben estar empaquetados en un commit atómico de Git.
  Si una de estas condiciones no se cumple, la tarea NO está terminada, sin importar cuántas veces el LLM nos diga que todo está listo."
- **Puntos Clave:**
  - La complacencia del LLM es un riesgo si no se restringe con una DoD estricta.
  - La DoD debe ser comprobable mediante scripts sin intervención humana.
  - El commit de Git es la garantía transaccional de cierre.
- **Q&A Hints:**
  - *¿Quién escribe la DoD?* Respuesta: El arnés en su fase de inicialización o el desarrollador al definir el ticket o la especificación en la Feature List.

---

### 🔹 SUBDIAPOSITIVAS 02.1 A 02.3: EL MODELO DE 5 SUBSISTEMAS DEL HARNESS
- **02.1 Anatomía del Arnés:** Desglosa los 5 pilares: Instrucciones, Herramientas, Entorno, Estado y Retroalimentación. Enfatiza que un arnés incompleto cojea en producción.
- **02.2 Laboratorio de Ablación:** Muestra el panel interactivo de ablación. Apaga el subsistema de Feedback y observa cómo la confiabilidad cae al 20%. Apagar Estado induce amnesia inmediata. Demuestra que todos los subsistemas deben interactuar armónicamente.
- **02.3 Retroalimentación & ROI:** Explica por qué el subsistema de Feedback es el rey indiscutible: el LLM es un generador de hipótesis; el feedback del compilador y el test runner es la única fuerza que transforma hipótesis en verdad fáctica verificada.

---

### 🔹 SUBDIAPOSITIVAS 03.1 A 03.3: ARQUITECTURA DE CONOCIMIENTO & PRINCIPIOS ACID
- **03.1 Repo como Única Fuente de Verdad:** Desmiente la ilusión de usar Slack, Jira o Confluence para guiar agentes. Si una regla no vive en un archivo dentro del árbol de Git, no existe para el agente.
- **03.2 Regla de Proximidad vs Longitud:** Demuestra que colocar un archivo `ARCHITECTURE.md` de 30 líneas dentro de `src/api/` es infinitamente superior a un README de 1000 líneas en la raíz. El agente lee bajo demanda según el directorio donde opera.
- **03.3 Gobernanza ACID del Repositorio:** Aplica las propiedades de bases de datos al ciclo de vida del agente: Atomicidad (commit completo o rollback total), Consistencia (tests verdes al salir), Aislamiento (worktrees separados por agente) y Durabilidad (archivos planos en disco).

---

### 🔹 SUBDIAPOSITIVAS 04.1 A 04.3: AGENTS.MD & RELACIÓN SEÑAL/RUIDO (SNR)
- **04.1 La Acumulación de Cicatrices:** Alerta sobre el mal hábito de inflar `AGENTS.md` con una nueva regla de texto cada vez que ocurre un bug casual. El archivo se convierte en un basurero de reglas contradictorias.
- **04.2 Lost in the Middle & SNR:** Analiza el paper de Liu et al. (2023). Muestra la curva en U en el gráfico SVG interactivo donde la atención colapsa al 28% en el tercio central. Mover el slider de reglas evidencia la dilución de la señal.
- **04.3 Los 4 Bloques Canónicos & Divulgación Progresiva:** Establece el estándar de oro: `AGENTS.md` de 50 a 100 líneas dividido en Project Overview, Quick Start, Hard Constraints y Topic Docs con lectura bajo demanda. Aplica la regla de poda sistemática.

---

### 🔹 SUBDIAPOSITIVAS 05.1 A 05.3: CONTINUIDAD DE SESIÓN & ANSIEDAD CONTEXTUAL
- **05.1 La Trampa del Millón de Tokens:** Desmitifica las ventanas masivas de contexto. A mayor cantidad de tokens acumulados, el costo explota linealmente, la latencia se dispara y la precisión del razonamiento decae.
- **05.2 Patología de Ansiedad Contextual (Anthropic):** Explica el fenómeno psicológico documentado por Anthropic: al acercarse al 70% de la ventana, el modelo entra en pánico funcional, omite pruebas y apresura victorias falsas para evitar ser truncado.
- **05.3 Protocolo de Continuidad (PROGRESS.md):** Demuestra cómo el archivo `PROGRESS.md` comprime el tiempo de reconstitución de 15 minutos a menos de 3 minutos mediante el ciclo Serializar -> Compactar -> Reanudar.

---

### 🔹 SUBDIAPOSITIVAS 06.1 A 06.3: INICIALIZACIÓN EN DOS FASES
- **06.1 Antipatrón de la Sesión Combinada:** Señala el desastre de pedirle al agente configurar Docker, resolver dependencias y programar lógica de negocio en el mismo prompt. 85% de tasa de fallo catastrófico.
- **06.2 Protocolo en Dos Fases:** Separa estrictamente la micro-sesión de infraestructura (Fase 1: dejar el build reproducible y lockfiles congelados) de las sesiones de implementación (Fase 2: contexto limpio y 100% enfocado en negocio).
- **06.3 Startup Readiness Checklist:** Define las tres condiciones de arranque: build determinista (`make init`), tests smoke pasando en verde y versiones congeladas en lockfiles.

---

### 🔹 SUBDIAPOSITIVAS 07.1 A 07.3: UNA TAREA A LA VEZ (LÍMITES WIP = 1)
- **07.1 Dilución Contextual Matemática ($C/k$):** Demuestra por qué la concurrencia degrada el rendimiento de los agentes. Si la atención es $C$ y abres $k$ tareas, la atención por tarea cae a $C/k$. Al subir a $k=4$, la probabilidad de fallo se eleva al 88%.
- **07.2 Overreach vs Under-finish:** Describe las dos caras de la moneda: el Overreach (agente que refactoriza 15 archivos ajenos sin permiso) versus el Under-finish (agente que escribe 4 líneas y no prueba nada).
- **07.3 Límite Estricto WIP = 1 & Presión de Finalización:** Enseña cómo el arnés impone límites Kanban a nivel de runtime: el agente no puede abrir una nueva tarea hasta certificar que la actual está 100% verde y comiteada.

---

### 🔹 SUBDIAPOSITIVAS 08.1 A 08.3: LISTA DE FEATURES & MÁQUINA DE ESTADOS
- **08.1 Feature List como Contrato:** Destierra las listas informales en texto plano. Cada elemento es una estructura con entradas, salidas, dependencias e invariantes de negocio.
- **08.2 Máquina de Estados Finita:** Explica los 4 estados: `TODO` -> `IN_PROGRESS` -> `VERIFYING` -> `DONE` / `BLOCKED`. Prohibición absoluta de saltar de `TODO` a `DONE` sin pasar por `VERIFYING`.
- **08.3 Ficha Atómica de Feature:** Analiza los tres componentes de la ficha FEAT-042: invariantes de negocio, comando de verificación determinista y comando de rollback automatizado.

---

### 🔹 SUBDIAPOSITIVAS 09.1 A 09.3: COMPROBAR DEFINITION OF DONE (DOD)
- **09.1 El Peligro de la Victoria Prematura:** Ilustra el caso común de tests unitarios pasando con mocks mientras la aplicación real no levanta por falta de variables de entorno o migraciones pendientes.
- **09.2 Externalizar la Sentencia de Terminación:** Fija el principio de oro: el generador jamás puede ser el juez de su propia obra. El árbitro debe ser el arnés de verificación externo.
- **09.3 Motor de Validación en Tres Capas:** Explica la ejecución jerárquica: Capa 1 (Análisis estático y tipos), Capa 2 (Tests unitarios) y Capa 3 (Runtime Smoke Test con proceso vivo respondiendo HTTP 200 OK).

---

### 🔹 SUBDIAPOSITIVAS 10.1 A 10.3: PIPELINE DE VERIFICACIÓN COMPLETO & LÍMITES
- **10.1 Defectos en los Límites de Componentes:** Demuestra cómo dos módulos con pruebas unitarias al 100% colapsan en producción debido a desajustes de esquema (`camelCase` vs `snake_case`).
- **10.2 Jerarquía y Gradiente de Adecuación:** Recorre la pirámide de pruebas: Unitarias $\le$ Integración $\le$ Reglas Arquitectónicas $\le$ End-to-End (E2E). Falla rápido en segundos y reserva E2E para el cierre.
- **10.3 Reglas Ejecutables & Errores Accionables:** Convierte directrices pasivas en linters ejecutables y diseña mensajes de error que incluyan archivo, línea, invariante violada y acción sugerida para auto-corrección inmediata.

---

### 🔹 SUBDIAPOSITIVAS 11.1 A 11.3: AGENTE OBSERVABLE & TELEMETRÍA OPENTELEMETRY
- **11.1 Observabilidad Multinivel (Sistema y Proceso):** Contrasta las señales de infraestructura (CPU, memoria, red, exit codes) con las señales agénticas (consumo de tokens, tasa de éxito de herramientas, profundidad de turnos y detección de bucles).
- **11.2 Cascada de Spans OpenTelemetry:** Presenta la traza jerárquica con 5 spans OTLP (`agent_turn`, `llm_inference`, `tool_dispatch`, `verifier_suite`, `commit_progress`) para diagnosticar cuellos de botella en milisegundos.
- **11.3 Arquitectura de Tres Agentes de Anthropic:** Explica el modelo Maker (Creador) $\leftrightarrow$ Checker (Adversario hostil) $\leftrightarrow$ Orchestrator (Árbitro del Sprint Contract y Rúbrica Cuantitativa de 0 a 100).

---

### 🔹 SUBDIAPOSITIVAS 12.1 A 12.3: FINAL DE SESIÓN LIMPIO & IDEMPOTENCIA
- **12.1 El Axioma del Estado Limpio:** Proclama el principio inquebrantable: 'Limpiar más tarde significa nunca limpiar'. Toda sesión debe comportarse como una transacción ACID: commit limpio o rollback a cero.
- **12.2 Session Exit Checklist (5 Condiciones):** Revisa las 5 casillas de control obligatorias antes de autorizar el cierre: Git limpio, tests 100% verdes, PROGRESS.md actualizado, cero procesos zombies y limpieza ejecutada.
- **12.3 Limpieza Idempotente & El Documento de Calidad:** Enseña scripts con propiedad matemática $f(f(x)) = f(x)$, presenta el Quality Document con calificaciones por módulo (A, B, C, F) y cierra la masterclass recordando que el verdadero poder de la IA en ingeniería reside en la arquitectura del arnés.

---

## 🚀 CÓMO INICIAR LA PRESENTACIÓN
1. Navega a la carpeta de la aplicación:
   ```bash
   cd presentation
   npm run dev
   ```
2. Abre tu navegador web en `http://localhost:5173`.
3. Presiona `[F]` para activar pantalla completa y `[B]` para desplegar el explorador jerárquico.
4. Presiona `[N]` para desplegar este guión completo en el cajón lateral sincronizado con cada subdiapositiva en tiempo real.
