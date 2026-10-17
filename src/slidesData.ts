import { LectureSection, LectureSubSlide } from './types';

export const LECTURE_SECTIONS: LectureSection[] = [
  {
    id: 0,
    number: 0,
    title: 'API, SDK & MINI HARNESS: DESACOPLAMIENTO DEL CHAT',
    shortTitle: '00. Mini Harness & SDK',
    category: 'FOUNDATION',
    icon: 'fa-terminal',
    slides: [
      {
        globalIndex: 0,
        lectureId: 0,
        subIndex: 1,
        code: '00.1',
        fileName: '00.1_llm_cage.ag',
        title: 'LA ECUACIÓN FUNDAMENTAL & LA JAULA DORADA DEL CHAT',
        tagline: 'Agente = Modelo (LLM) + Harness. Un cerebro sin extremidades no es un agente.',
        speakerNotes: {
          duration: '3 - 4 min',
          objective: 'Desmontar el mito de que el LLM es un agente autónomo y definir el harness como el sistema operativo periférico.',
          visualGuide: 'Muestra la ecuación fundamental en la caja superior y contrasta la silueta del LLM aislado en el chat frente al agente con arnés.',
          script: `Bienvenidos a la masterclass de Harness Engineering.
Empecemos con una pregunta provocadora: ¿Cuántos de ustedes han usado ChatGPT, Claude o Gemini en la web para programar y han sentido que pasan más tiempo copiando y pegando errores que construyendo software?
En ese momento, ustedes eran el arnés manual del modelo.
El chat web es una jaula dorada: el modelo es un cerebro brillante en una cubeta, pero carece de manos, ojos y terminal. No puede ver el disco, no puede compilar y no puede probar.
La ecuación fundamental que rige este curso es: AGENTE = MODELO + HARNESS.
El modelo aporta inferencia probabilística; el harness aporta el andamiaje determinista de ejecución.`,
          keyPoints: [
            'Agente = Modelo + Harness.',
            'El chat web es un sandbox pasivo que convierte al humano en un operador manual.',
            'El modelo no tiene capacidad de ejecución ni persistencia determinista.',
            'El harness es el sistema nervioso periférico y chasis operativo.'
          ],
          qaHints: 'Si preguntan si GPT-5 resolverá esto solo: responde que un motor de 1000 HP necesita más chasis, mejores frenos y mejor telemetría, no menos.'
        }
      },
      {
        globalIndex: 1,
        lectureId: 0,
        subIndex: 2,
        code: '00.2',
        fileName: '00.2_three_paths.ag',
        title: 'LAS TRES VÍAS PARA SACAR AL LLM DEL CHAT',
        tagline: 'API REST, SDK Programático y Modelos Locales (Ollama / vLLM).',
        speakerNotes: {
          duration: '3 - 4 min',
          objective: 'Explicar las tres rutas técnicas para interactuar con modelos fuera del navegador.',
          visualGuide: 'Interactúa con los tres botones superiores: API REST, SDK Python y Local Ollama para ver el flujo de red y soberanía.',
          script: `Para que el LLM trabaje como un verdadero ingeniero de software, debemos sacarlo del chat. Existen tres vías de desacoplamiento:
1. API Directa (REST HTTP): Envíos de JSON a endpoints como /v1/chat/completions con control total de streaming de eventos SSE.
2. SDK Programático: Librerías tipadas en Python o TypeScript que manejan reintentos, validación de esquemas y llamadas a funciones.
3. Modelos Locales: Servir modelos abiertos con Ollama, vLLM o llama.cpp con costo cero, latencia de red nula y soberanía de datos.
Cualquiera de estas tres vías nos da acceso al modelo, pero aún necesitamos el runtime que ejecute sus intenciones.`,
          keyPoints: [
            '1. API Directa: Control de streaming y payloads crudos.',
            '2. SDK: Tipado, reintentos y abstracción de herramientas.',
            '3. Modelos Locales: Soberanía de datos, latencia cero y coste nulo.',
            'Las tres vías son simplemente conductos; el harness es el motor de ejecución.'
          ],
          qaHints: '¿Cuál es mejor para desarrollo corporativo? Modelos locales u OpenAI con endpoints privados según regulaciones de compliance.'
        }
      },
      {
        globalIndex: 2,
        lectureId: 0,
        subIndex: 3,
        code: '00.3',
        fileName: '00.3_react_loop.ag',
        title: 'ANATOMÍA DEL MINI HARNESS EN PYTHON',
        tagline: 'El bucle ReAct: Tool Schemas, Despachador y Ejecución en el Sistema Operativo.',
        speakerNotes: {
          duration: '4 - 5 min',
          objective: 'Mostrar el funcionamiento paso a paso de un harness real en Python con subprocess y feedback.',
          visualGuide: 'Utiliza los botones de Avanzar Paso para correr las 6 fases del ciclo ReAct: Input -> Prompt -> Intent -> Runtime -> Feedback -> Done.',
          script: `Miren este simulador de un mini harness en Python de 120 líneas.
El usuario le da una meta: 'Crear reporte hello.txt'.
El harness prepara los mensajes e inyecta la definición de herramientas: execute_bash, read_file y write_file.
El modelo no ejecuta el bash; emite un tool_call en formato JSON.
Es nuestro despachador en Python el que captura esa orden, ejecuta subprocess.run en el sistema operativo, captura stdout y stderr, y se los devuelve al LLM como un mensaje de rol 'tool'.
El bucle continúa en ciclo cerrado hasta que la condición de fin se satisface.`,
          keyPoints: [
            'Tool Registry: Mapeo dinámico de nombres JSON a funciones ejecutables.',
            'Subprocess OS: El código Python corre en la máquina física real.',
            'Bucle ReAct: Pensamiento -> Acción -> Observación -> Conclusión.',
            'El modelo propone; el arnés dispone y verifica.'
          ],
          qaHints: '¿Qué pasa si el comando bash se cuelga? El arnés debe implementar timeouts estrictos (ej. 30s) para evitar bloqueos infinitos.'
        }
      },
      {
        globalIndex: 3,
        lectureId: 0,
        subIndex: 4,
        code: '00.4',
        fileName: '00.4_pi_agent.ag',
        title: 'CLAUDE CODE, CODEX, ANTIGRAVITY Y LA FILOSOFÍA PI AGENT',
        tagline: 'Por qué elegimos Pi Agent: 4 primitivas atómicas y cero bloatware.',
        speakerNotes: {
          duration: '3 - 4 min',
          objective: 'Comparar los harnesses comerciales cerrados con Pi Agent y justificar su elección para este curso.',
          visualGuide: 'Compara las tarjetas de Claude Code, Codex, Antigravity y resalta en verde neón la arquitectura minimalista de Pi Agent.',
          script: `Muchos creen que Claude Code, Codex o Antigravity son modelos milagrosos. No lo son: son arneses avanzados construidos sobre modelos existentes.
Cada uno se puede personalizar, pero vienen atados a sus propios ecosistemas cerrados y prompts gigantescos.
En cambio, Pi Agent (creado por Mario Zechner) es el arnés agéntico más puro y minimalista del mercado:
- Prompt base menor a 1000 tokens.
- Desacoplamiento total mediante pi-ai.
- Solo 4 primitivas atómicas: read, write, edit y bash.
Con esas 4 herramientas atómicas se puede construir cualquier software. Por eso Pi Agent será nuestro laboratorio central.`,
          keyPoints: [
            'Claude Code, Codex y Antigravity son arneses de software, no modelos en sí.',
            'Pi Agent: Filosofía de cero configuración y transparencia total.',
            '4 Primitivas Atómicas: read (inspección), write (creación), edit (parches), bash (ejecución).',
            'Máxima ventana de contexto libre para el código del usuario.'
          ],
          qaHints: '¿Por qué no usar LangChain o CrewAI? Tienen capas de abstracción opacas y bloatware que ocultan el comportamiento real del runtime.'
        }
      }
    ]
  },
  {
    id: 1,
    number: 1,
    title: 'LA IMPORTANCIA DEL HARNESS & BINDING CONSTRAINT',
    shortTitle: '01. Binding Constraint',
    category: 'FOUNDATION',
    icon: 'fa-microchip',
    slides: [
      {
        globalIndex: 4,
        lectureId: 1,
        subIndex: 1,
        code: '01.1',
        fileName: '01.1_five_traps.ag',
        title: 'DÓNDE SE ATASCAN LOS AGENTES: LAS 5 TRAMPAS',
        tagline: 'Vaguedad, convenciones implícitas, entorno roto, falta de verificación y amnesia.',
        speakerNotes: {
          duration: '3 - 4 min',
          objective: 'Identificar las cinco capas de fallo donde los agentes se quedan bloqueados en producción.',
          visualGuide: 'Haz clic en las 5 trampas para mostrar el diagnóstico estructural y su remedio correspondiente en el panel derecho.',
          script: `En la Lectura 1 examinamos por qué mueren los agentes en producción.
El 90% de los fallos ocurre exactamente en una de estas 5 capas:
1. Requisitos vagos: El agente tiene que adivinar la intención.
2. Convenciones implícitas: Reglas no escritas que viven en la cabeza de los seniors.
3. Entorno incompleto: El agente quema todos sus tokens peleando con paquetes de npm o pip.
4. Falta de verificación: Dice que terminó cuando 'siente' que terminó.
5. Pérdida de estado: Cada sesión comienza de cero.
Ninguna de estas fallas se soluciona cambiando de modelo. Se solucionan con ingeniería de arnés.`,
          keyPoints: [
            'Las 5 capas de fallo: Especificación, Contexto, Runtime, Feedback y Persistencia.',
            'Los agentes no tienen clarividencia para requisitos vagos.',
            'Las convenciones no documentadas en el repo son invisibles.',
            'Los fallos de entorno agotan la ventana de contexto antes de empezar.'
          ],
          qaHints: '¿Cómo identificar cuál de las 5 capas causó el fallo? Analiza los logs de ejecución y las llamadas a herramientas previas al error.'
        }
      },
      {
        globalIndex: 5,
        lectureId: 1,
        subIndex: 2,
        code: '01.2',
        fileName: '01.2_binding_constraint.ag',
        title: 'LA TESIS DEL LÍMITE VINCULANTE & DISPARIDAD DE ROI',
        tagline: 'Actualizar el modelo cuesta 10x y mejora 2%. Optimizar el arnés cuesta 1x y mejora 300%.',
        speakerNotes: {
          duration: '4 - 5 min',
          objective: 'Fundamentar matemáticamente la tesis del límite vinculante y el retorno de inversión de la ingeniería de arneses.',
          visualGuide: 'Mueve el slider del factor de costo del modelo de 1x a 10x y compara el salto de rendimiento contra el arnés.',
          script: `Los estudios de SWE-bench y los laboratorios de Anthropic y OpenAI demuestran la Tesis del Límite Vinculante (Binding Constraint Thesis):
En tareas de desarrollo de software complejas, la limitación para el éxito no es la inteligencia del LLM, sino la estructura del harness.
Miren el gráfico interactivo de ROI:
Actualizar a un modelo 10 veces más caro suele mejorar entre un 2% y un 5% el éxito, mientras multiplica exponencialmente la factura de tokens y la latencia.
En cambio, dotar al mismo modelo de un AGENTS.md claro, comandos de verificación y entorno reproducible eleva el éxito del 25% a más del 80% con el mismo costo.
Cuando algo falle, revisa primero tu arnés y luego el modelo.`,
          keyPoints: [
            'Binding Constraint Thesis: El arnés es el límite vinculante en producción.',
            'Actualizar modelo: Ganancia marginal (2-5%), costo exponencial (10x).',
            'Optimizar arnés: Salto cuántico de éxito (+320%), costo constante.',
            'Cambiar de modelo es el parche más caro; calibrar el arnés es la solución.'
          ],
          qaHints: '¿Cuándo sí vale la pena cambiar de modelo? Cuando el arnés esté al 100% calibrado y el fallo sea puramente de razonamiento lógico intrínseco.'
        }
      },
      {
        globalIndex: 6,
        lectureId: 1,
        subIndex: 3,
        code: '01.3',
        fileName: '01.3_clear_dod.ag',
        title: 'DEFINITION OF DONE (DOD) CLARA Y DETERMINISTA',
        tagline: 'Contratos ejecutables: Endpoints, paginación, pruebas unitarias y comprobación estricta de tipos.',
        speakerNotes: {
          duration: '3 min',
          objective: 'Establecer cómo formular criterios de completitud verificables para evitar interpretaciones ambiguas.',
          visualGuide: 'Señala los 4 criterios de completitud en la tarjeta interactiva con sus estados verificados.',
          script: `Para que un agente no se quede estancado, la Definition of Done (DoD) debe ser un contrato estricto y ejecutable.
Miren este ejemplo:
- Nuevo endpoint GET /api/search?q=xxx
- Soporta paginación, default 20 items
- Resultados incluyen snippets resaltados
- Pasa la suite de pytest al 100%
- mypy --strict pasa sin advertencias
Si la especificación no tiene comandos ejecutables de verificación, el agente asumirá que cualquier texto que genere es suficiente.`,
          keyPoints: [
            'DoD determinista: Criterios booleanos verificables mediante comandos.',
            'Eliminación de adjetivos vagos como "rápido" o "limpio".',
            'Inclusión obligatoria de linters y pruebas automáticas.',
            'El agente debe saber exactamente qué comando debe devolver exit code 0.'
          ],
          qaHints: '¿Quién escribe la DoD? El usuario o un agente orquestador en la fase de propuesta.'
        }
      }
    ]
  },
  {
    id: 2,
    number: 2,
    title: 'EL MODELO DE 5 SUBSISTEMAS DEL HARNESS',
    shortTitle: '02. Los 5 Subsistemas',
    category: 'ARCHITECTURE',
    icon: 'fa-layer-group',
    slides: [
      {
        globalIndex: 7,
        lectureId: 2,
        subIndex: 1,
        code: '02.1',
        fileName: '02.1_subsystems_architecture.ag',
        title: 'LOS 5 SUBSISTEMAS DEL ANDAMIAJE AGÉNTICO',
        tagline: 'Arnés = Instrucciones + Herramientas + Entorno + Estado + Retroalimentación.',
        speakerNotes: {
          duration: '4 min',
          objective: 'Describir los 5 componentes interconectados del arnés y sus artefactos de soporte.',
          visualGuide: 'Muestra las 5 tarjetas de los subsistemas y cómo cada una interactúa con el repositorio de código.',
          script: `En la Lectura 2 formalizamos el Modelo de Cinco Subsistemas. Un arnés profesional no es un script suelto; se compone de:
1. Instrucciones (Contexto): AGENTS.md con mapa general y restricciones duras.
2. Herramientas: Las manos operativas (read, write, edit, bash) con sandboxing.
3. Entorno: Runtime hermético en Docker o devcontainers con dependencias fijas.
4. Estado: Memoria transaccional en PROGRESS.md y commits de git.
5. Retroalimentación: Batería determinista de checks (pytest, mypy, linters).
Los cinco subsistemas son esenciales para que el sistema funcione en ciclo cerrado.`,
          keyPoints: [
            'Descomposición modular en 5 subsistemas independientes.',
            'El repositorio es la única fuente de verdad para todos los subsistemas.',
            'Cada subsistema tiene artefactos específicos de soporte.',
            'Un defecto en cualquiera de los 5 degrada el sistema completo.'
          ],
          qaHints: '¿Se pueden agregar más subsistemas? Sí (ej. seguridad, observabilidad), pero estos 5 son el núcleo mínimo irreductible.'
        }
      },
      {
        globalIndex: 8,
        lectureId: 2,
        subIndex: 2,
        code: '02.2',
        fileName: '02.2_ablation_laboratory.ag',
        title: 'LABORATORIO DE ABLACIÓN: PRUEBAS CONTROLADAS',
        tagline: 'Apagar variables sistemáticamente para medir la contribución marginal de cada componente.',
        speakerNotes: {
          duration: '4 min',
          objective: 'Enseñar la técnica de ablación controlada para identificar el cuello de botella real del arnés.',
          visualGuide: 'Apaga individualmente cada subsistema y observa el medidor de confiabilidad calculada en la esquina superior.',
          script: `¿Cómo sabemos qué componente de nuestro arnés está fallando? Mediante pruebas de ablación de variables controladas.
Apagamos un subsistema a la vez y corremos la suite de tareas.
Si apagamos las herramientas: el agente se convierte en un simple bot conversacional pasivo.
Si apagamos el estado: el agente sufre amnesia entre turnos.
Y si apagamos la retroalimentación: la confiabilidad cae al 20%, porque el modelo genera alucinaciones que nadie desmiente.
La ablación nos da evidencia cuantitativa para justificar en qué invertir tiempo de ingeniería.`,
          keyPoints: [
            'Pruebas de exclusión de variables controladas en el arnés.',
            'Cuantificación marginal del impacto de cada componente.',
            'Identificación precisa de cuellos de botella mediante logs de atribución.',
            'Evitar cambios ciegos: medir antes de refactorizar el arnés.'
          ],
          qaHints: '¿Con cuántas tareas se debe medir la ablación? Al menos 20-30 tareas representativas de tu codebase.'
        }
      },
      {
        globalIndex: 9,
        lectureId: 2,
        subIndex: 3,
        code: '02.3',
        fileName: '02.3_feedback_dominance.ag',
        title: 'LA DOMINANCIA DEL SUBSISTEMA DE RETROALIMENTACIÓN',
        tagline: 'El componente con la menor inversión y el mayor retorno de inversión (ROI).',
        speakerNotes: {
          duration: '3 min',
          objective: 'Demostrar que la inversión en comandos de verificación supera a cualquier otra optimización en el arnés.',
          visualGuide: 'Destaca la tarjeta de Feedback con borde verde brillante y los tres pilares de higiene del arnés.',
          script: `De los cinco subsistemas, la Retroalimentación tiene el mayor retorno de inversión (ROI).
Escribir un comando como 'pytest tests/ -x' o 'mypy src/ --strict' cuesta apenas unos minutos de configuración, pero transforma radicalmente el comportamiento del modelo: le proporciona un espejo implacable contra la realidad.
Además, recuerden esto: El arnés se pudre exactamente igual que el código.
Hay que auditarlo periódicamente y pagar la deuda técnica del arnés eliminando instrucciones obsoletas.`,
          keyPoints: [
            'Feedback = Mayor ROI con menor costo de implementación.',
            'Los comandos de verificación devuelven el stacktrace que guía la auto-corrección.',
            'Deuda del arnés: Acumulación de reglas viejas que ya no aplican.',
            'Auditorías periódicas de higiene en los 5 subsistemas.'
          ],
          qaHints: '¿Qué pasa si los tests son lentos? Diseña un comando rápido de sanity check para el bucle y deja la suite completa para la verificación final.'
        }
      }
    ]
  },
  {
    id: 3,
    number: 3,
    title: 'ARQUITECTURA DE CONOCIMIENTO & PRINCIPIOS ACID',
    shortTitle: '03. Arquitectura & ACID',
    category: 'ARCHITECTURE',
    icon: 'fa-database',
    slides: [
      {
        globalIndex: 10,
        lectureId: 3,
        subIndex: 1,
        code: '03.1',
        fileName: '03.1_repo_as_spec.ag',
        title: 'EL REPOSITORIO COMO ÚNICA FUENTE DE VERDAD',
        tagline: 'La información que no existe en el repositorio, no existe para el agente.',
        speakerNotes: {
          duration: '4 min',
          objective: 'Establecer el principio de invisibilidad del conocimiento externo y el repositorio como única especificación.',
          visualGuide: 'Muestra el contraste entre las fuentes externas invisibles (Slack/Jira) y los archivos visibles en el repo.',
          script: `En la Lectura 3 abordamos la arquitectura de conocimiento.
Tanto OpenAI como Anthropic afirman lo mismo: Para un agente autónomo, la información que no existe dentro del repositorio no existe en absoluto.
Muchos equipos tienen reglas en Confluence, Jira o hilos de Slack. Para el agente, eso es humo.
El agente solo puede leer lo que está en su disco de trabajo.
Por tanto, toda regla de arquitectura o restricción debe transcribirse directamente al repositorio en archivos versionados.`,
          keyPoints: [
            'Principio del repositorio como especificación (OpenAI / Anthropic).',
            'Invisibilidad: Slack, Jira y Confluence no existen para el agente.',
            'Centralización de decisiones en archivos de texto versionados en git.',
            'Prueba de la nueva sesión: ¿Puede un agente nuevo arrancar sin ayuda humana?'
          ],
          qaHints: '¿Cómo sincronizar cambios en Jira? Mediante automatizaciones de CI que actualicen archivos markdown en el repo.'
        }
      },
      {
        globalIndex: 11,
        lectureId: 3,
        subIndex: 2,
        code: '03.2',
        fileName: '03.2_proximity_rule.ag',
        title: 'REGLA DE PROXIMIDAD > LONGITUD & MAPA MODULAR',
        tagline: 'Un ARCHITECTURE.md de 50 líneas en src/api/ supera a un manual de 500 páginas en la raíz.',
        speakerNotes: {
          duration: '3 - 4 min',
          objective: 'Explicar por qué la ubicación física de la documentación en el árbol de directorios importa más que su extensión.',
          visualGuide: 'Explora la estructura de carpetas canónica con AGENTS.md en la raíz y ARCHITECTURE.md en subdirectorios.',
          script: `Esto no se resuelve escribiendo más documentación, sino colocando la información en el lugar correcto.
Grábense esta máxima: 'La proximidad importa más que la longitud'.
Un archivo ARCHITECTURE.md de 50 líneas dentro de src/api/ es infinitamente más útil que un documento de 500 páginas en la raíz.
El agente descubre la información bajo demanda cuando entra al módulo a editar código, ahorrando ventana de contexto y evitando confusiones.`,
          keyPoints: [
            'Proximidad > Longitud: Documentación modular cerca del código que afecta.',
            'El código ya tiene sus propias restricciones; documenta solo las decisiones arquitectónicas.',
            'Estructura modular con índices locales en cada carpeta clave.',
            'Cero redundancia: información quirúrgica en el punto de impacto.'
          ],
          qaHints: '¿Cómo evitar que la documentación se desactualice? Agrega un check de CI que revise si los markdown de arquitectura se tocaron al cambiar el código del módulo.'
        }
      },
      {
        globalIndex: 12,
        lectureId: 3,
        subIndex: 3,
        code: '03.3',
        fileName: '03.3_acid_state_machine.ag',
        title: 'GESTIÓN DEL ESTADO AGÉNTICO CON PRINCIPIOS ACID',
        tagline: 'Atomicidad, Consistencia, Aislamiento y Durabilidad en cada turno de ejecución.',
        speakerNotes: {
          duration: '4 min',
          objective: 'Aplicar los principios ACID tradicionales de bases de datos a la gestión de cambios de los agentes de software.',
          visualGuide: 'Activa los 4 botones del simulador de ciclo transaccional: Iniciar Mutación -> Chequeo -> Commit -> Rollback.',
          script: `Para evitar que el agente deje el repositorio en un estado inconsistente, aplicamos principios ACID:
- Atomicidad: La tarea concluye al 100% con tests o se revierte totalmente. Nada de commits parciales rotos.
- Consistencia: Al finalizar, linters y tests deben estar en verde verificable.
- Aislamiento: Cada agente opera en su propio git worktree o archivo de progreso para evitar race conditions.
- Durabilidad: Las decisiones clave se asientan en disco, no en la memoria volátil del chat.`,
          keyPoints: [
            'Atomicidad: Todo o nada; prohibido dejar código a medio compilar.',
            'Consistencia: Estado verificable con cero errores tras cada mutación.',
            'Aislamiento: Git worktrees y ramas separadas por agente.',
            'Durabilidad: Persistencia en archivos planos en el disco duro.'
          ],
          qaHints: '¿Qué pasa si una tarea toma horas? Se divide en sub-transacciones atómicas más pequeñas, cada una con su commit verde.'
        }
      }
    ]
  },
  {
    id: 4,
    number: 4,
    title: 'AGENTS.MD & RELACIÓN SEÑAL/RUIDO (SNR)',
    shortTitle: '04. AGENTS.md & SNR',
    category: 'ARCHITECTURE',
    icon: 'fa-file-code',
    slides: [
      {
        globalIndex: 13,
        lectureId: 4,
        subIndex: 1,
        code: '04.1',
        fileName: '04.1_scar_accumulation.ag',
        title: 'LA PATOLOGÍA DE LA ACUMULACIÓN DE CICATRICES',
        tagline: 'Agregar una regla por cada bug genera documentos monstruosos y reglas contradictorias.',
        speakerNotes: {
          duration: '3 min',
          objective: 'Alertar sobre el vicio común de sobrecargar AGENTS.md con reglas reactivas ad-hoc.',
          visualGuide: 'Muestra el ciclo de degradación donde cada bug agrega una regla hasta causar colapso de atención.',
          script: `En la Lectura 4 analizamos el diseño del archivo AGENTS.md.
Cuando un agente comete un bug, muchos desarrolladores entran furiosos a agregar una regla: 'Nunca hagas esto', 'Siempre haz aquello'.
A esto lo llamamos 'acumulación de cicatrices'.
Al cabo de unas semanas, el archivo tiene 600 líneas de advertencias desordenadas que a menudo se contradicen entre sí.
El agente se vuelve lento, confundido y empieza a alucinar. Menos reglas bien calibradas superan a cientos de advertencias reactivas.`,
          keyPoints: [
            'Acumulación de cicatrices: Vicio de inflar AGENTS.md ante cada error casual.',
            'Reglas contradictorias que colapsan la coherencia del modelo.',
            'Peligro de convertir el arnés en un basurero de instrucciones ad-hoc.',
            'Cada instrucción debe tener una justificación documentada o eliminarse.'
          ],
          qaHints: '¿Cómo evitar acumular cicatrices? En lugar de agregar una regla de texto, crea un linter o un test unitario que impida el bug automáticamente.'
        }
      },
      {
        globalIndex: 14,
        lectureId: 4,
        subIndex: 2,
        code: '04.2',
        fileName: '04.2_lost_in_middle.ag',
        title: 'LOST IN THE MIDDLE & RELACIÓN SEÑAL/RUIDO (SNR)',
        tagline: 'La atención colapsa al 28% en el tercio central. Cuida la densidad de señal.',
        speakerNotes: {
          duration: '4 min',
          objective: 'Presentar la evidencia empírica de Liu et al. (2023) sobre la caída de atención en Transformadores.',
          visualGuide: 'Muestra la curva en U en el gráfico SVG y el slider de líneas de reglas afectando el porcentaje de SNR.',
          script: `Hay dos bases científicas que gobiernan el diseño de instrucciones:
1. Signal-to-Noise Ratio (SNR): La atención del modelo es un recurso finito. Si el 80% del archivo es ruido, la señal crítica se diluye.
2. Lost in the Middle (Liu et al., 2023): Los modelos atienden con un 98% al inicio del contexto y un 95% al final, pero su atención cae al 28% en el tercio central.
Si entierras reglas críticas en medio de un AGENTS.md de 400 líneas, el modelo simplemente las pasará por alto.`,
          keyPoints: [
            'Lost in the Middle: Caída drástica de atención en el centro del contexto.',
            'Ubicación estratégica: Reglas no negociables al inicio o al final.',
            'SNR alto: Maximizar la densidad de información útil por token.',
            'Reducir texto narrativo y priorizar listas de restricciones claras.'
          ],
          qaHints: '¿Los modelos modernos con 2M de tokens superaron Lost in the Middle? No; la degradación en el medio persiste en todas las familias de transformadores.'
        }
      },
      {
        globalIndex: 15,
        lectureId: 4,
        subIndex: 3,
        code: '04.3',
        fileName: '04.3_progressive_disclosure.ag',
        title: 'LOS 4 BLOQUES CANÓNICOS & DIVULGACIÓN PROGRESIVA',
        tagline: '50 a 100 líneas en raíz: Overview, Quick Start, Hard Constraints y Topic Docs.',
        speakerNotes: {
          duration: '3 - 4 min',
          objective: 'Enseñar la estructura óptima de 4 secciones para AGENTS.md y la lectura bajo demanda.',
          visualGuide: 'Explora los 4 bloques canónicos y muestra la regla de poda en la barra inferior.',
          script: `La regla de diseño es: Proporciona un mapa, no un manual de 1000 páginas.
Un AGENTS.md profesional debe tener entre 50 y 100 líneas estructuradas en cuatro bloques:
1. Project Overview: Qué es el proyecto en 3 líneas.
2. Quick Start: Comandos exactos de setup y ejecución.
3. Hard Constraints: Restricciones duras de arquitectura y seguridad.
4. Topic Docs: Punteros a subarchivos en docs/ para lectura bajo demanda (Progressive Disclosure).
Regla de poda: Si eliminar una regla no afecta la decisión del agente, esa regla no debe existir.`,
          keyPoints: [
            'Objetivo: AGENTS.md de 50 a 100 líneas limpias.',
            '4 Secciones Canónicas: Overview, Quick Start, Hard Constraints, Topic Docs.',
            'Progressive Disclosure: Cargar detalles solo cuando la tarea lo requiera.',
            'Regla de poda sistemática para mantener la higiene instruccional.'
          ],
          qaHints: '¿Qué poner en Hard Constraints? Cosas que romperían producción: prohibición de push a main, no tocar credenciales, linters obligatorios.'
        }
      }
    ]
  },
  {
    id: 5,
    number: 5,
    title: 'CONTINUIDAD DE SESIÓN & ANSIEDAD CONTEXTUAL',
    shortTitle: '05. Continuidad de Sesión',
    category: 'EXECUTION',
    icon: 'fa-clock-rotate-left',
    slides: [
      {
        globalIndex: 16,
        lectureId: 5,
        subIndex: 1,
        code: '05.1',
        fileName: '05.1_context_limits.ag',
        title: 'LA TRAMPA DEL MILLÓN DE TOKENS: COSTO Y DEGRADACIÓN',
        tagline: 'Tener una ventana de 1M de tokens no significa que debas saturarla sin control.',
        speakerNotes: {
          duration: '3 min',
          objective: 'Desmitificar las ventanas de contexto gigantescas y explicar sus costos ocultos de razonamiento y latencia.',
          visualGuide: 'Mueve el control de tokens hacia 1 millón y muestra la barra de degradación de razonamiento.',
          script: `En la Lectura 5 tratamos la continuidad de sesión.
Hoy los proveedores nos anuncian ventanas de 1M o 2M de tokens. Muchos piensan que el contexto ya está resuelto.
Falso. A medida que la ventana se llena de tokens y logs irrelevantes:
- El costo por llamada se dispara linealmente.
- La latencia por turno pasa de 2 segundos a más de 20 segundos.
- La precisión del razonamiento decae notablemente.
La memoria volátil del chat es cara y frágil; la persistencia estructurada en disco es barata y determinista.`,
          keyPoints: [
            'Ventanas de 1M sufren degradación de precisión y latencia exponencial.',
            'Costo financiero: Quema masiva de tokens en lecturas redundantes.',
            'La memoria en el chat es volátil; se pierde al compactar o reiniciar.',
            'Separar razonamiento efímero de artefactos persistentes.'
          ],
          qaHints: '¿No ayuda el Prompt Caching? Ayuda con el costo y latencia de entrada, pero no evita la pérdida de atención del modelo en contextos gigantescos.'
        }
      },
      {
        globalIndex: 17,
        lectureId: 5,
        subIndex: 2,
        code: '05.2',
        fileName: '05.2_context_anxiety.ag',
        title: 'PATOLOGÍA DE ANSIEDAD CONTEXTUAL (ANTHROPIC)',
        tagline: 'Al acercarse al límite de tokens, el agente apresura conclusiones y toma atajos peligrosos.',
        speakerNotes: {
          duration: '4 min',
          objective: 'Explicar el fenómeno de ansiedad contextual documentado en modelos de frontera al saturar su contexto.',
          visualGuide: 'Muestra la tarjeta de alerta roja de Ansiedad Contextual y el comportamiento patológico inducido.',
          script: `En los experimentos de Anthropic se descubrió una patología fascinante: la 'ansiedad contextual'.
Cuando un agente detecta que su ventana de contexto se está llenando y se acerca al límite de compactación o truncamiento, su comportamiento cambia para mal:
- Apresura conclusiones para terminar antes de que lo corten.
- Omite la ejecución de pruebas unitarias.
- Declara victorias prematuras diciendo 'todo está listo' cuando apenas escribió un borrador.
El arnés debe evitar que el agente alcance este umbral crítico mediante podas proactivas y traspasos limpios de sesión.`,
          keyPoints: [
            'Ansiedad contextual: Comportamiento errático inducido por saturación de tokens.',
            'Atajos peligrosos: Omisión de tests y finalización falsa de tareas.',
            'El modelo percibe su propio límite de tokens y entra en pánico funcional.',
            'Misión del arnés: Mantener la ventana siempre por debajo del umbral de ansiedad.'
          ],
          qaHints: '¿A qué porcentaje de ventana aparece la ansiedad? Típicamente por encima del 65-70% de la capacidad de la ventana.'
        }
      },
      {
        globalIndex: 18,
        lectureId: 5,
        subIndex: 3,
        code: '05.3',
        fileName: '05.3_session_handoff.ag',
        title: 'PROTOCOLO DE CONTINUIDAD: PROGRESS.MD (15M A 3M)',
        tagline: 'Comprimir el tiempo de reconstitución de 15 minutos a 3 minutos con traspasos estructurados.',
        speakerNotes: {
          duration: '4 min',
          objective: 'Presentar el protocolo de Session Hand-off mediante PROGRESS.md y medir su aceleración 5x.',
          visualGuide: 'Compara las barras de tiempo de 15 min sin persistencia contra los 3 min con PROGRESS.md y el pipeline de 3 pasos.',
          script: `¿Cómo resolvemos la continuidad? Con un archivo estructurado de seguimiento: PROGRESS.md.
Sin persistencia, una sesión nueva gasta entre 15 y 20 minutos de lecturas ciegas para reconstruir el estado.
Con PROGRESS.md, el arnés comprime ese costo a menos de 3 minutos.
El protocolo de Session Hand-off funciona en tres pasos:
1. Serializar: ¿Qué está hecho con tests? ¿Qué está en curso? ¿Qué bloqueos existen?
2. Compactar: Volcar el estado a disco y reiniciar la ventana.
3. Boot rápido: La nueva sesión lee PROGRESS.md y continúa con la memoria fresca al 5% de uso.`,
          keyPoints: [
            'PROGRESS.md: Registro vivo de tareas terminadas, en progreso y bloqueos.',
            'Aceleración 5x en tiempo de arranque de nuevas sesiones.',
            'Session Hand-off: Serializar estado -> Compactar -> Reanudar.',
            'La nueva sesión arranca inmediatamente productiva.'
          ],
          qaHints: '¿Se debe comitear PROGRESS.md en git? Sí, es parte integral del repositorio y la historia del proyecto.'
        }
      }
    ]
  },
  {
    id: 6,
    number: 6,
    title: 'INICIALIZACIÓN EN DOS FASES',
    shortTitle: '06. Inicialización',
    category: 'EXECUTION',
    icon: 'fa-play',
    slides: [
      {
        globalIndex: 19,
        lectureId: 6,
        subIndex: 1,
        code: '06.1',
        fileName: '06.1_combined_session_hazard.ag',
        title: 'EL ANTIPATRÓN DE LA SESIÓN COMBINADA',
        tagline: 'Mezclar configuración del entorno con desarrollo de lógica provoca un 85% de fallos.',
        speakerNotes: {
          duration: '3 min',
          objective: 'Evidenciar por qué pedirle al agente resolver dependencias y lógica de negocio a la vez colapsa la sesión.',
          visualGuide: 'Muestra la caja roja del antipatrón y el flujo de los 3 pasos hacia el colapso.',
          script: `En la Lectura 6 atacamos un antipatrón sumamente destructivo: La sesión combinada.
Un desarrollador le dice al agente: 'Instala Docker, arregla las dependencias de pip y programa el checkout con Stripe'.
¿Qué ocurre?
El agente se topa con errores de instalación de librerías, quema el 80% de su contexto tirando comandos en la terminal, y cuando por fin logra compilar, llega a programar la lógica exhausto y con el contexto lleno de logs rotos.
Resultado: 85% de probabilidad de fallo catastrófico.`,
          keyPoints: [
            'Antipatrón: Ordenar resolver entorno y programar lógica en un mismo prompt.',
            'Quema de tokens en resolución errática de dependencias.',
            'Contaminación del contexto con stacktraces de instalación.',
            'El agente llega sin capacidad de atención a la lógica de negocio.'
          ],
          qaHints: '¿Qué hacer si un desarrollador insiste en dar órdenes mixtas? El arnés debe interceptar el prompt y desglosarlo automáticamente en dos fases.'
        }
      },
      {
        globalIndex: 20,
        lectureId: 6,
        subIndex: 2,
        code: '06.2',
        fileName: '06.2_two_phase_protocol.ag',
        title: 'EL PROTOCOLO DE INICIALIZACIÓN EN DOS FASES',
        tagline: 'Fase 1: Entorno reproducible y tests green. Fase 2: Desarrollo con contexto limpio.',
        speakerNotes: {
          duration: '4 min',
          objective: 'Explicar la separación estricta entre la sesión de infraestructura y las sesiones de implementación.',
          visualGuide: 'Alterna entre los botones de Fase 1 y Fase 2 para ver las misiones exclusivas de cada una.',
          script: `En Harness Engineering aplicamos el protocolo de Inicialización en Dos Fases:
- Fase 1 (Infraestructura Dedicada): Su único objetivo es dejar el entorno reproducible, fijar lockfiles y validar que un test dummy pase en verde. Cero código de negocio.
- Fase 2 (Implementación de Features): Arranca sobre un terreno 100% verificado y estable. El contexto está completamente limpio y disponible para resolver la tarea.
Esta separación ahorra más del 60% de tokens gastados en depuración innecesaria.`,
          keyPoints: [
            'Fase 1: Entorno ejecutable, dependencias congeladas y test dummy verde.',
            'Fase 2: Implementación de features con contexto limpio y sin ruido.',
            'Ahorro del 60% en tokens de depuración.',
            'Garantía de arranque determinista para todas las sesiones posteriores.'
          ],
          qaHints: '¿Cuánto tiempo debe durar la Fase 1? Solo lo necesario para dejar el build reproducible; típicamente una micro-sesión de 2 a 5 minutos.'
        }
      },
      {
        globalIndex: 21,
        lectureId: 6,
        subIndex: 3,
        code: '06.3',
        fileName: '06.3_readiness_checklist.ag',
        title: 'STARTUP READINESS CHECKLIST & REPRODUCIBILIDAD',
        tagline: 'Comandos de arranque estandarizados: make init y congelamiento estricto de dependencias.',
        speakerNotes: {
          duration: '3 min',
          objective: 'Definir la lista de verificación previa al inicio de cualquier sesión de código.',
          visualGuide: 'Muestra los 3 puntos de la Startup Readiness Checklist en la tarjeta verde con el comando make verify-init.',
          script: `Para autorizar el paso a la Fase 2, el arnés exige la aprobación de la Startup Readiness Checklist:
1. ¿El entorno levanta con un solo comando determinista (ej. make init o docker compose up)?
2. ¿El pipeline de pruebas corre y pasa en verde (test_smoke.py == OK)?
3. ¿Las versiones de paquetes están fijas en un lockfile?
Solo cuando esta checklist está al 100% aprobada se permite al agente tocar el código de la aplicación.`,
          keyPoints: [
            'Startup Readiness Checklist como guardrail previo al desarrollo.',
            'make init / package scripts estandarizados para reproducibilidad.',
            'Lockfiles obligatorios para evitar derivas de versiones.',
            'Verificación automática antes de escribir la primera línea de negocio.'
          ],
          qaHints: '¿Qué pasa si falla el test dummy? La sesión se aborta inmediatamente y se corrige la configuración de base antes de continuar.'
        }
      }
    ]
  },
  {
    id: 7,
    number: 7,
    title: 'UNA TAREA A LA VEZ: LÍMITES WIP = 1',
    shortTitle: '07. WIP = 1',
    category: 'EXECUTION',
    icon: 'fa-list-check',
    slides: [
      {
        globalIndex: 22,
        lectureId: 7,
        subIndex: 1,
        code: '07.1',
        fileName: '07.1_context_dilution.ag',
        title: 'DILUCIÓN CONTEXTUAL MATEMÁTICA: C / K',
        tagline: 'A mayor número de tareas concurrentes (k), menor atención efectiva por tarea y mayor riesgo de fallo.',
        speakerNotes: {
          duration: '3 - 4 min',
          objective: 'Demostrar matemáticamente por qué la multitarea degrada el rendimiento de los agentes de software.',
          visualGuide: 'Haz clic en los selectores k=1 a k=5 y muestra cómo la atención se divide y el riesgo de fallo salta al 88%.',
          script: `En la Lectura 7 abordamos una restricción operativa estricta: Una sola tarea a la vez (WIP = 1).
La justificación es puramente matemática:
Si la capacidad efectiva de atención del modelo es C, y activamos k tareas en paralelo en la misma sesión, la atención disponible por tarea es C dividido entre k.
Con k=1: 100% de atención enfocada.
Con k=4: apenas 25% de atención por tarea.
El agente empieza a mezclar variables, olvida qué archivos modificó y comete errores infantiles. La multitarea en una sola sesión de LLM es una ilusión destructiva.`,
          keyPoints: [
            'Fórmula C/k: Fragmentación proporcional de la atención por tarea.',
            'Concurrencia en la misma sesión multiplica los errores cruzados.',
            'k=1 garantiza la máxima profundidad de razonamiento por problema.',
            'El arnés debe impedir la activación de múltiples tareas simultáneas.'
          ],
          qaHints: '¿Y los sistemas multiagente? Los subagentes trabajan en ramas separadas, pero cada agente individual opera con WIP=1 en su propio contexto.'
        }
      },
      {
        globalIndex: 23,
        lectureId: 7,
        subIndex: 2,
        code: '07.2',
        fileName: '07.2_overreach_underfinish.ag',
        title: 'LAS DOS CARAS DE LA MONEDA: OVERREACH VS UNDER-FINISH',
        tagline: 'Overreach: Modificar 15 archivos ajenos. Under-finish: Declarar victoria sin pruebas.',
        speakerNotes: {
          duration: '4 min',
          objective: 'Describir las dos patologías opuestas en la ejecución de tareas agénticas.',
          visualGuide: 'Muestra las tarjetas comparativas de Overreach (extralimitación) y Under-finish (incompleto).',
          script: `Los agentes no regulados sufren dos patologías que son dos caras de la misma moneda:
1. Overreach (Extralimitación de alcance): Le pides arreglar un botón y decide refactorizar la configuración de Tailwind, actualizar librerías y modificar 15 archivos ajenos. Terminas con un PR inmanejable.
2. Under-finish (Finalización prematura): El agente escribe 4 líneas de código, no corre los tests y se retira diciendo 'misión cumplida'.
Ambas patologías destruyen la confiabilidad del software.`,
          keyPoints: [
            'Overreach: Tendencia a tocar archivos fuera del alcance estricto de la tarea.',
            'Under-finish: Abandono de la tarea antes de completar la verificación.',
            'Ambas patologías surgen de la falta de límites explícitos en el arnés.',
            'Solución: Delimitar el alcance en un grafo de tareas atómicas.'
          ],
          qaHints: '¿Cómo frena el arnés el Overreach? Mediante permisos de archivo que impidan al agente editar rutas no autorizadas en esa tarea.'
        }
      },
      {
        globalIndex: 24,
        lectureId: 7,
        subIndex: 3,
        code: '07.3',
        fileName: '07.3_wip_one_pressure.ag',
        title: 'LÍMITE ESTRICTO WIP = 1 & PRESIÓN DE FINALIZACIÓN',
        tagline: 'El arnés prohíbe abrir una nueva feature hasta certificar que la actual está en verde.',
        speakerNotes: {
          duration: '3 min',
          objective: 'Enseñar el mecanismo de Completion Pressure impuesto por el arnés para forzar el cierre de tareas.',
          visualGuide: 'Muestra la regla operativa inferior y la tarjeta de solución con Superficie de Alcance DAG.',
          script: `El arnés soluciona ambas patologías aplicando Presión de Finalización (Completion Pressure) con límite estricto de WIP=1:
El sistema le prohíbe al agente abrir o reclamar una nueva tarea mientras la tarea en curso no pase todas las pruebas y esté formalmente cerrada.
Si el agente intenta dispersarse, el arnés lo devuelve a su tarea activa.
Un solo foco, ejecución quirúrgica, verificación completa y cierre atómico.`,
          keyPoints: [
            'Límite Kanban WIP=1 forzado a nivel de runtime.',
            'Presión de Finalización: Restricción que impide dispersión de esfuerzos.',
            'Descomposición de features en unidades mínimas verificables (DAG).',
            'Cada unidad debe emitir verde antes de desbloquear la siguiente.'
          ],
          qaHints: '¿Qué pasa si el agente se bloquea? Debe marcar la tarea como BLOCKED con el motivo exacto antes de poder tomar otra.'
        }
      }
    ]
  },
  {
    id: 8,
    number: 8,
    title: 'LISTA DE FEATURES & MÁQUINA DE ESTADOS',
    shortTitle: '08. Máquina de Estados',
    category: 'EXECUTION',
    icon: 'fa-diagram-project',
    slides: [
      {
        globalIndex: 25,
        lectureId: 8,
        subIndex: 1,
        code: '08.1',
        fileName: '08.1_feature_list_contract.ag',
        title: 'LA FEATURE LIST COMO ESPECIFICACIÓN ESTRUCTURADA',
        tagline: 'Desterrar las listas en texto plano: Cada feature es un contrato formal con estados y pruebas.',
        speakerNotes: {
          duration: '3 min',
          objective: 'Diferenciar una lista informal de tareas de una Feature List estructurada para agentes.',
          visualGuide: 'Muestra las preguntas clave que una sesión nueva debe poder responder en 30 segundos leyendo la lista.',
          script: `En la Lectura 8 aprendemos cómo planificar el trabajo mediante la Feature List.
Muchos le pasan al agente una lista en texto plano: 'hacer el carrito', 'hacer el pago'.
Cuando una nueva sesión arranca, no sabe responder:
- ¿Qué significa 'casi hecho'?
- ¿Qué pruebas pasó el carrito?
- ¿Por qué está bloqueado el pago?
Una Feature List en Harness Engineering es una estructura de datos donde cada elemento tiene estados, dependencias, invariantes y comandos de validación.`,
          keyPoints: [
            'Desterrar listas informales de texto plano en los prompts.',
            'Trazabilidad instantánea para sesiones nuevas en menos de 30 segundos.',
            'Cada feature especifica entradas, salidas e invariantes no negociables.',
            'Desacoplamiento entre el plan estratégico y la ejecución táctica.'
          ],
          qaHints: '¿En qué formato se almacena la Feature List? En PROGRESS.md, features.json o el sistema de estado de SDD.'
        }
      },
      {
        globalIndex: 26,
        lectureId: 8,
        subIndex: 2,
        code: '08.2',
        fileName: '08.2_finite_state_machine.ag',
        title: 'MÁQUINA DE ESTADOS FINITA: TODO, IN_PROGRESS, VERIFYING, DONE',
        tagline: 'Transiciones rigurosas: Prohibido saltar de TODO a DONE sin pasar por VERIFYING.',
        speakerNotes: {
          duration: '4 min',
          objective: 'Describir el ciclo de vida de cuatro estados que toda tarea debe recorrer obligatoriamente.',
          visualGuide: 'Haz clic en los 4 estados (TODO -> IN_PROGRESS -> VERIFYING -> DONE) para ver la transición en vivo.',
          script: `Cada característica se gobierna mediante una Máquina de Estados Finita:
- TODO: Especificada formalmente, pero con código intacto.
- IN_PROGRESS: El agente está trabajando exclusivamente en ella (respetando WIP=1).
- VERIFYING: El código está escrito y el agente está ejecutando la batería de pruebas.
- DONE: Todas las pruebas han pasado al 100% y se generó el commit atómico.
Si algo falla externamente, pasa a BLOCKED.
Transición prohibida: Un agente jamás puede mover una tarea de TODO a DONE directamente sin pasar por VERIFYING.`,
          keyPoints: [
            'Estados formales: TODO -> IN_PROGRESS -> VERIFYING -> DONE / BLOCKED.',
            'VERIFYING es un estado intermedio obligatorio antes del cierre.',
            'Imposibilidad de auto-aprobarse sin correr la validación.',
            'Trazabilidad del ciclo de vida en tiempo real para humanos y arnés.'
          ],
          qaHints: '¿Quién mueve el estado de VERIFYING a DONE? El arnés tras verificar que los comandos devolvieron exit code 0.'
        }
      },
      {
        globalIndex: 27,
        lectureId: 8,
        subIndex: 3,
        code: '08.3',
        fileName: '08.3_atomic_feature_card.ag',
        title: 'ANATOMÍA DE LA FICHA ATÓMICA DE FEATURE',
        tagline: 'Invariantes de negocio, comando de verificación determinista y rollback automático.',
        speakerNotes: {
          duration: '3 - 4 min',
          objective: 'Analizar los campos obligatorios de una ficha atómica de feature.',
          visualGuide: 'Examina los 3 bloques de la ficha atómica FEAT-042: Invariantes, Comando de Verificación y Comando de Rollback.',
          script: `Miren la ficha de especificación atómica en pantalla:
Cada feature define:
1. Invariantes de negocio: Reglas lógicas que no pueden romperse (ej. total del carrito nunca negativo).
2. Comando de verificación determinista: El comando exacto que debe correrse (pytest tests/cart/test_checkout.py).
3. Comando de rollback automatizado: El comando de escape (git checkout -- src/cart/) si la verificación falla repetidamente.
Si el agente entra en un callejón sin salida, el arnés ejecuta el rollback y devuelve el repo a un estado limpio.`,
          keyPoints: [
            'Invariantes: Reglas funcionales que el código debe preservar siempre.',
            'Comando de verificación determinista asociado a cada tarea.',
            'Rollback automatizado ante fallos irreversibles.',
            'Preservación de la higiene del repositorio ante experimentos fallidos.'
          ],
          qaHints: '¿Cuántos reintentos se permiten antes del rollback? Típicamente entre 3 y 5 turnos de auto-corrección.'
        }
      }
    ]
  },
  {
    id: 9,
    number: 9,
    title: 'COMPROBAR DEFINITION OF DONE (DOD)',
    shortTitle: '09. Comprobar DoD',
    category: 'VERIFICATION',
    icon: 'fa-shield-halved',
    slides: [
      {
        globalIndex: 28,
        lectureId: 9,
        subIndex: 1,
        code: '09.1',
        fileName: '09.1_premature_victory.ag',
        title: 'EL PELIGRO DE LA VICTORIA PREMATURA',
        tagline: 'Los tests unitarios pasan con mocks, pero la aplicación real ni siquiera levanta en runtime.',
        speakerNotes: {
          duration: '3 - 4 min',
          objective: 'Advertir sobre la trampa más común: el agente declara victoria apoyado en pruebas aisladas con mocks.',
          visualGuide: 'Muestra el flujo de la trampa clásica: código escrito -> tests unitarios verdes -> pero app no levanta -> victoria falsa.',
          script: `En la Lectura 9 entramos a la comprobación de la Definition of Done.
¿A cuántos les ha pasado que el agente les dice: '¡Listo! Misión cumplida, todas las pruebas unitarias pasan', y cuando corren el servidor, la aplicación crashea de inmediato?
Esto es la 'victoria prematura'.
El agente usó mocks en los tests unitarios, pero se le olvidó agregar la variable de entorno, correr la migración de base de datos o verificar la llamada HTTP real.
Declarar victoria sin comprobar el comportamiento en tiempo de ejecución es el mayor peligro en desarrollo agéntico.`,
          keyPoints: [
            'Victoria prematura: El agente se auto-declara terminado con visión miope.',
            'Los tests unitarios con mocks no garantizan que el sistema levante.',
            'Peligro de dependencias y variables de entorno no configuradas.',
            'La auto-evaluación del LLM es sesgada y complaciente.'
          ],
          qaHints: '¿Por qué los LLMs declaran victoria tan fácil? Porque están entrenados para ser complacientes y agradar al usuario cerrando tareas rápido.'
        }
      },
      {
        globalIndex: 29,
        lectureId: 9,
        subIndex: 2,
        code: '09.2',
        fileName: '09.2_external_arbiter.ag',
        title: 'EXTERNALIZAR LA SENTENCIA DE TERMINACIÓN',
        tagline: 'El generador jamás puede ser el evaluador. El árbitro debe ser el arnés de verificación.',
        speakerNotes: {
          duration: '3 min',
          objective: 'Fijar el principio fundamental de que el modelo nunca debe juzgar si su propio trabajo es satisfactorio.',
          visualGuide: 'Señala la tarjeta del Axioma del Árbitro Externo y el veredicto superior que rechaza victorias prematuras.',
          script: `Por eso, la regla de oro de la verificación es:
Externalizar la sentencia de terminación fuera del control del modelo.
NUNCA dejen que el modelo decida si su código está listo. El generador no puede ser el juez de su propia obra.
El arnés es el árbitro externo e incorruptible: ejecuta las pruebas de forma independiente y, solo si todos los checks devuelven exit code 0, emite la certificación de DONE.
El agente solicita la verificación; el arnés concede la aprobación.`,
          keyPoints: [
            'Externalización obligatoria de la sentencia de fin.',
            'Separación entre el agente creador y el verificador determinista.',
            'El modelo solicita revisión; el arnés emite el veredicto.',
            'Incorruptibilidad: El LLM no puede alterar los criterios de aceptación.'
          ],
          qaHints: '¿Puede el agente reescribir los tests para que pasen? No; los tests deben tener permisos de solo lectura durante la implementación.'
        }
      },
      {
        globalIndex: 30,
        lectureId: 9,
        subIndex: 3,
        code: '09.3',
        fileName: '09.3_three_layer_engine.ag',
        title: 'MOTOR DE VALIDACIÓN EN TRES CAPAS & RUNTIME SMOKE TEST',
        tagline: 'Capa 1: Linters y Tipos. Capa 2: Tests Unitarios. Capa 3: Señales de Runtime (Smoke Test).',
        speakerNotes: {
          duration: '4 min',
          objective: 'Describir la arquitectura de validación en 3 capas y la necesidad innegociable del smoke test en tiempo de ejecución.',
          visualGuide: 'Haz clic en las 3 capas para alternar su estado y observa cómo el veredicto superior pasa a DONE CERTIFICADO.',
          script: `Para externalizar la sentencia construimos una Validación de Terminación en Tres Capas:
- Capa 1 (Análisis Estático y Tipos): mypy --strict y linters. Si hay un error de tipos, se detiene de inmediato.
- Capa 2 (Suite Unitaria e Integración): pytest tests/ -x con 100% de aserciones verdes.
- Capa 3 (Señales de Tiempo de Ejecución / Smoke Test): El arnés levanta el proceso real de la app, hace una petición HTTP real y comprueba que responda 200 OK sin excepciones en stderr.
Solo cuando las 3 capas están verdes simultáneamente se considera terminado el trabajo.`,
          keyPoints: [
            'Capa 1: Análisis estático y verificación estricta de tipos (mypy, ruff).',
            'Capa 2: Suite unitaria e integración de componentes (pytest).',
            'Capa 3: Runtime Smoke Test: proceso vivo respondiendo 200 OK.',
            'Feedback accionable con stacktraces exactos ante cualquier fallo.'
          ],
          qaHints: '¿El Smoke Test corre en producción? No, corre en un contenedor efímero local o ambiente de staging idéntico a producción.'
        }
      }
    ]
  },
  {
    id: 10,
    number: 10,
    title: 'PIPELINE DE VERIFICACIÓN COMPLETO & LÍMITES',
    shortTitle: '10. Pipeline & Límites',
    category: 'VERIFICATION',
    icon: 'fa-network-wired',
    slides: [
      {
        globalIndex: 31,
        lectureId: 10,
        subIndex: 1,
        code: '10.1',
        fileName: '10.1_boundary_defects.ag',
        title: 'DEFECTOS EN LOS LÍMITES DE COMPONENTES',
        tagline: 'Componente A (Green) + Componente B (Green) = Frontera Rota por desacoplamiento de esquemas.',
        speakerNotes: {
          duration: '4 min',
          objective: 'Explicar cómo dos componentes con pruebas unitarias perfectas pueden fallar estrepitosamente al integrarse.',
          visualGuide: 'Muestra el esquema de colapso en la frontera donde el Módulo A espera camelCase y el Módulo B envía snake_case.',
          script: `En la Lectura 10 profundizamos en los límites arquitectónicos.
El bug más costoso en desarrollo con agentes es el 'defecto en los límites de componentes'.
Miren el gráfico:
El Módulo A (UI) pasa sus tests unitarios al 100%.
El Módulo B (API) pasa sus tests unitarios al 100%.
Pero en producción explota porque el frontend espera 'orderStatus' en camelCase y el backend envía 'order_status' en snake_case.
Las pruebas unitarias fueron completamente ciegas a este desacoplamiento. Por eso el arnés debe incluir verificación E2E obligatoria.`,
          keyPoints: [
            'Defectos de frontera: Componentes aislados funcionan pero fallan en conjunto.',
            'Ceguera de los tests unitarios ante desajustes de interfaces y contratos.',
            'Necesidad de validación en la frontera de comunicación entre subsistemas.',
            'El arnés debe probar los flujos reales de punta a punta.'
          ],
          qaHints: '¿Cómo prevenir esto antes de E2E? Mediante tipado compartido o generación automática de contratos OpenAPI/Protobuf.'
        }
      },
      {
        globalIndex: 32,
        lectureId: 10,
        subIndex: 2,
        code: '10.2',
        fileName: '10.2_verification_hierarchy.ag',
        title: 'JERARQUÍA Y GRADIENTE DE ADECUACIÓN DE PRUEBAS',
        tagline: 'Tests Unitarios <= Integración <= Reglas Arquitectónicas <= Pruebas End-to-End (E2E).',
        speakerNotes: {
          duration: '3 min',
          objective: 'Presentar el gradiente formal de adecuación de pruebas y la pirámide de verificación del arnés.',
          visualGuide: 'Usa los botones superiores (UNIT, INTEGRATION, ARCH, E2E) para recorrer los niveles de la pirámide.',
          script: `El Gradiente de Adecuación de Pruebas establece:
Defectos detectables en tests unitarios <= Defectos en integración <= Defectos en reglas arquitectónicas <= Defectos en pruebas E2E.
Las pruebas unitarias son rápidas pero miopes.
Las pruebas de integración validan contratos internos.
Las reglas arquitectónicas validan la topología del sistema.
Y las pruebas E2E validan la experiencia real del usuario final.
El arnés organiza la ejecución en cascada: falla rápido en unitarios, y solo llega a E2E cuando las bases están verdes.`,
          keyPoints: [
            'Gradiente de adecuación: Cobertura progresiva de diferentes tipos de defectos.',
            'Ejecución en cascada: Unitarias en segundos, E2E al final.',
            'Optimización del tiempo de bucle del agente.',
            'Detección temprana de roturas antes de comprometer ramas principales.'
          ],
          qaHints: '¿Las pruebas E2E no ralentizan al agente? Sí, por eso se ejecutan solo como guardrail final antes de pasar la feature a DONE.'
        }
      },
      {
        globalIndex: 33,
        lectureId: 10,
        subIndex: 3,
        code: '10.3',
        fileName: '10.3_executable_rules.ag',
        title: 'REGLAS ARQUITECTÓNICAS EJECUTABLES & ERRORES ACCIONABLES',
        tagline: 'Convertir reglas pasivas en linters automáticos y diseñar mensajes de error con invariantes.',
        speakerNotes: {
          duration: '4 min',
          objective: 'Enseñar a codificar reglas de arquitectura en scripts ejecutables y formatear mensajes de error orientados al agente.',
          visualGuide: 'Compara el mensaje de error inútil convencional frente al mensaje estructurado con invariante y acción requerida.',
          script: `Dos principios cruciales para cerrar esta lectura:
1. Convierte reglas de arquitectura en controles ejecutables: Si tu regla dice 'la UI jamás debe importar la BD directamente', no lo dejes en un wiki; escribe un custom linter o script de bash que analice los imports y falle si se viola.
2. Diseña errores orientados al agente: Un error que dice 'TypeError: undefined' hace que el agente alucine.
Un error orientado al agente debe decir: '[VIOLACIÓN ARQUITECTÓNICA en Client.ts:18] Invariante: La UI requiere orderStatus en camelCase. Acción requerida: Ajusta el deserializador en dto.ts'.
Ese feedback quirúrgico permite corregir el problema en el primer intento.`,
          keyPoints: [
            'Las reglas arquitectónicas deben ser linters ejecutables, no deseos en un wiki.',
            'Promoción de comentarios: Si un humano detecta un patrón repetitivo, se codifica en un script.',
            'Errores orientados al agente: Indicar archivo, línea, invariante violada y acción sugerida.',
            'Ahorro masivo de tokens al evitar correcciones a ciegas.'
          ],
          qaHints: '¿Qué herramientas sirven para linters de arquitectura? eslint-plugin-import, archunit, pytest-archon o scripts personalizados con AST.'
        }
      }
    ]
  },
  {
    id: 11,
    number: 11,
    title: 'AGENTE OBSERVABLE & TELEMETRÍA OPENTELEMETRY',
    shortTitle: '11. Agente Observable',
    category: 'OBSERVABILITY',
    icon: 'fa-gauge-high',
    slides: [
      {
        globalIndex: 34,
        lectureId: 11,
        subIndex: 1,
        code: '11.1',
        fileName: '11.1_dual_observability.ag',
        title: 'OBSERVABILIDAD MULTINIVEL: SISTEMA Y PROCESO',
        tagline: 'Observabilidad de runtime (CPU, memoria, red) + Observabilidad de proceso (tokens, herramientas, razonamiento).',
        speakerNotes: {
          duration: '3 min',
          objective: 'Distinguir entre la observabilidad tradicional de infraestructura y la observabilidad de decisiones agénticas.',
          visualGuide: 'Muestra la tarjeta de observabilidad multinivel y explica la dualidad entre señales de sistema y proceso.',
          script: `En la Lectura 11 entramos a la Observabilidad del Agente.
Para entender qué hace un agente dentro de un sistema complejo, necesitamos dos dimensiones de observabilidad simultáneas:
1. Observabilidad de tiempo de ejecución (Runtime): Métricas estándar de sistemas: consumo de memoria, tiempos de CPU, llamadas de red, códigos de retorno.
2. Observabilidad de proceso (Process): Registro estructurado de la cadena de razonamiento del agente, herramientas solicitadas, consumo de tokens de entrada y salida, y tasa de acierto de herramientas.
Sin ambas dimensiones, el agente sigue siendo una caja negra impredecible.`,
          keyPoints: [
            'Dualidad observacional: Señales de sistema + Señales de proceso.',
            'Mapeo de la ruta de decisión desde el inicio hasta el fin de la tarea.',
            'Tasa de acierto de herramientas como indicador de salud del arnés.',
            'Detección de bucles de razonamiento antes de que consuman presupuesto.'
          ],
          qaHints: '¿Dónde se almacenan estos logs? En colectores de telemetría o en archivos estructurados de auditoría (audit.jsonl).'
        }
      },
      {
        globalIndex: 35,
        lectureId: 11,
        subIndex: 2,
        code: '11.2',
        fileName: '11.2_opentelemetry_traces.ag',
        title: 'ESTANDARIZACIÓN CON OPENTELEMETRY (OTEL)',
        tagline: 'Cascada de spans distribuidos: Inferencia LLM, despacho de bash, diffs de archivos y verificación.',
        speakerNotes: {
          duration: '4 min',
          objective: 'Mostrar cómo estandarizar la telemetría agéntica mediante trazas distribuidas y spans de OpenTelemetry.',
          visualGuide: 'Haz clic en los 5 spans de la cascada OpenTelemetry para inspeccionar duraciones y estados individuales.',
          script: `El estándar de la industria para instrumentar agentes es OpenTelemetry.
Cada turno del agente genera una traza raíz con spans distribuidos:
- Span 1: Inferencia LLM (duración, tokens de prompt y de respuesta).
- Span 2: Despacho de herramientas (execute_bash con argumentos y exit code).
- Span 3: Ejecución de verificación (pytest con número de aserciones pasadas).
- Span 4: Commit de progreso y serialización de estado.
Con esta cascada podemos diagnosticar de inmediato si la lentitud viene de la API del modelo o de una prueba mal optimizada en el runner local.`,
          keyPoints: [
            'OpenTelemetry como estándar agnóstico de instrumentación agéntica.',
            'Trazas raíz compuestas por spans jerárquicos por cada llamada a herramienta.',
            'Medición precisa de latencias y consumo de tokens por operación.',
            'Diagnóstico visual e instantáneo de cuellos de botella en producción.'
          ],
          qaHints: '¿Se puede conectar esto a Datadog, Jaeger o Grafana? Sí, cualquier backend compatible con OTLP puede ingerir estas trazas.'
        }
      },
      {
        globalIndex: 36,
        lectureId: 11,
        subIndex: 3,
        code: '11.3',
        fileName: '11.3_three_agent_architecture.ag',
        title: 'ARQUITECTURA DE TRES AGENTES DE ANTHROPIC',
        tagline: 'Maker (Crea) <-> Checker (Adversario) <-> Orchestrator (Árbitro del Contrato Sprint).',
        speakerNotes: {
          duration: '4 min',
          objective: 'Enseñar el diseño multiagente de Anthropic basado en división de roles y contratos de sprint cuantitativos.',
          visualGuide: 'Examina las 3 tarjetas de roles (Maker, Checker, Orchestrator) y el contrato sprint en la tarjeta inferior.',
          script: `Para cerrar la Lectura 11, analizamos el experimento de arquitectura de tres agentes de Anthropic:
Nunca dejen que un solo agente se auto-evalúe. Dividan las responsabilidades:
- El Maker Agent (Creador): Su único trabajo es escribir código y resolver la tarea funcional.
- El Checker Agent (Revisor): Un agente adversario cuyo único objetivo es encontrar vulnerabilidades, escribir tests de estrés e intentar romper el código del Maker.
- El Orchestrator (Árbitro): Supervisa el Contrato de Sprint y evalúa la Rúbrica Cuantitativa (0 a 100 puntos en seguridad, rendimiento y cobertura).
Esta división elimina sesgos y garantiza software de calidad empresarial.`,
          keyPoints: [
            'Separación de roles: Creador vs Comprobador Adversario vs Árbitro.',
            'Contrato Sprint: Delimitación de alcance, exclusiones y estándares antes de codificar.',
            'Rúbrica cuantitativa: Evaluación objetiva con puntuación numérica reproducible.',
            'Eliminación de sesgos de auto-aprobación del modelo.'
          ],
          qaHints: '¿No gasta más tokens usar tres agentes? Al contrario: el Checker atrapa bugs temprano y evita bucles infinitos en producción.'
        }
      }
    ]
  },
  {
    id: 12,
    number: 12,
    title: 'FINAL DE SESIÓN LIMPIO & IDEMPOTENCIA',
    shortTitle: '12. Salida Limpia & ACID',
    category: 'OBSERVABILITY',
    icon: 'fa-broom',
    slides: [
      {
        globalIndex: 37,
        lectureId: 12,
        subIndex: 1,
        code: '12.1',
        fileName: '12.1_clean_state_axiom.ag',
        title: 'EL AXIOMA DEL ESTADO LIMPIO & TRANSACCIONALIDAD',
        tagline: 'Limpiar más tarde significa nunca limpiar. La sesión agéntica como una transacción.',
        speakerNotes: {
          duration: '3 min',
          objective: 'Establecer el principio de estado limpio obligatorio como precondición de cierre de sesión.',
          visualGuide: 'Muestra el banner de advertencia con la frase "Limpiar más tarde significa nunca limpiar" y el estado de bloqueo de sesión.',
          script: `Llegamos a la Lectura 12, la última lección del curso: Final de sesión limpio.
En ingeniería de software hay un refrán muy sabio: 'Limpiar más tarde significa nunca limpiar'.
En sistemas agénticos, dejar el repositorio sucio al terminar una sesión es fatal para la siguiente sesión:
Archivos temporales olvidados, ramas huérfanas, tests comentados o puertos bloqueados por procesos zombies harán que el siguiente agente se estrelle de inmediato.
Toda sesión agéntica debe tratarse como una transacción de base de datos: o se confirma limpiamente (COMMIT) o se revierte (ROLLBACK).`,
          keyPoints: [
            'Axioma: Limpiar más tarde significa nunca limpiar.',
            'Integridad transaccional: Toda sesión debe terminar en un estado verificable.',
            'Los residuos de una sesión corrupta envenenan el contexto de la siguiente sesión.',
            'Prohibición de salir con cambios no confirmados o workspace sucio.'
          ],
          qaHints: '¿Qué pasa si la sesión se interrumpe por timeout? El arnés debe ejecutar automáticamente un rollback seguro para proteger el repo.'
        }
      },
      {
        globalIndex: 38,
        lectureId: 12,
        subIndex: 2,
        code: '12.2',
        fileName: '12.2_session_exit_checklist.ag',
        title: 'SESSION EXIT CHECKLIST: LAS 5 CONDICIONES NO NEGOCIABLES',
        tagline: 'Git limpio, tests 100% green, PROGRESS.md asentado, sin zombies y limpieza ejecutada.',
        speakerNotes: {
          duration: '4 min',
          objective: 'Revisar las cinco condiciones técnicas obligatorias para que el arnés autorice el commit final.',
          visualGuide: 'Marca las 5 casillas de la Session Exit Checklist para ver el veredicto cambiar a SESIÓN CERRADA: COMMIT PERMITIDO.',
          script: `El arnés solo autoriza el cierre y merge de la sesión si se satisfacen estas cinco condiciones:
1. El árbol de Git está limpio: git status --porcelain está totalmente vacío.
2. La suite de pruebas pasa al 100%: Cero tests fallando o ignorados.
3. PROGRESS.md actualizado: Resumen de lo logrado y próximos pasos documentados.
4. Sin procesos zombies: Ningún servidor de prueba quedó corriendo en segundo plano bloqueando puertos.
5. Limpieza idempotente ejecutada: Archivos temporales purgados.
Solo con las cinco casillas marcadas se autoriza el cierre.`,
          keyPoints: [
            'Checklist de salida de 5 puntos como guardrail final de sesión.',
            'Verificación automática de git status y procesos huérfanos.',
            'Actualización obligatoria de PROGRESS.md para el handoff.',
            'Cero tolerancia a pruebas comentadas o ignoradas ad-hoc.'
          ],
          qaHints: '¿Cómo mata el arnés los procesos zombies? Con scripts de trap en bash o terminando los subprocesos por Process Group ID (PGID).'
        }
      },
      {
        globalIndex: 39,
        lectureId: 12,
        subIndex: 3,
        code: '12.3',
        fileName: '12.3_idempotence_quality_doc.ag',
        title: 'LIMPIEZA IDEMPOTENTE & EL DOCUMENTO DE CALIDAD',
        tagline: 'Operaciones de limpieza idempotentes y seguimiento continuo de la salud técnica de módulos (A, B, C, F).',
        speakerNotes: {
          duration: '4 min',
          objective: 'Explicar el concepto de idempotencia en limpieza y el uso del Quality Document para evitar la degradación silenciosa.',
          visualGuide: 'Examina la matriz de calificaciones técnicas en el Documento de Calidad (Módulo Auth: A, Search: B, Payment: C) y la simplificación periódica.',
          script: `Dos conceptos fundamentales para cerrar con broche de oro:
1. Limpieza Idempotente: Las operaciones de limpieza deben ser estrictamente idempotentes. Ejecutar el script una vez o cien veces debe producir exactamente el mismo resultado seguro sin borrar datos legítimos.
2. El Documento de Calidad (Quality Document): Un artefacto vivo que registra la calificación de madurez técnica de cada módulo (A, B, C o F).
Si un agente introduce una nueva funcionalidad pero degrada la calidad del módulo de pagos de B a C, el arnés rechaza el merge hasta que se pague la deuda técnica.
Y finalmente: a medida que los modelos de IA se vuelven más inteligentes, debemos simplificar periódicamente el arnés, retirando guardrails redundantes.
El poder no está en el chat: vive en la arquitectura del arnés. ¡Muchas gracias!`,
          keyPoints: [
            'Idempotencia: Ejecutar la limpieza N veces produce el mismo resultado estable.',
            'Documento de Calidad: Mapeo continuo de la salud técnica de los módulos.',
            'Prevención de degradación silenciosa de la arquitectura.',
            'Simplificación periódica del arnés a medida que los modelos base evolucionan.'
          ],
          qaHints: '¿Cada cuánto auditar el arnés? Al menos una vez al mes o cada vez que se actualice el modelo de lenguaje base.'
        }
      }
    ]
  }
];

// Flat array of all slides for global indexing
export const ALL_SLIDES: LectureSubSlide[] = LECTURE_SECTIONS.flatMap((sec) => sec.slides);
