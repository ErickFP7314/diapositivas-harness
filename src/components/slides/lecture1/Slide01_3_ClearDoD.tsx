import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide01_3_ClearDoD: React.FC<Props> = () => {
  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-1-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-microchip text-emerald-400"></i>
            <span>SECCIÓN 01 &bull; IMPORTANCIA DEL HARNESS</span>
          </div>
          <motion.div layoutId="lecture-1-title" className="text-xl font-black text-white mt-1">
            DEFINITION OF DONE: <span className="text-cyan-400">CRITERIOS DETERMINISTAS</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 rounded font-bold">
          01.3 / 01.3
        </div>
      </motion.div>

      {/* Main Visual: Executable DoD Contract vs Ambiguous Prompts */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-stretch">
        {/* Ambiguous Bad Spec */}
        <div className="p-6 rounded-2xl bg-black/80 border border-red-500/40 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-red-900/40 mb-4">
              <span className="text-xs font-mono text-red-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-circle-xmark"></i> Especificación Ambigua (Fallo Seguro)
              </span>
              <span className="text-[10px] font-mono text-red-400 bg-red-950 px-2 py-0.5 rounded">
                INDETERMINISTA
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 font-mono text-xs text-slate-300 border border-slate-800 space-y-2">
              <div className="text-slate-500">// Prompt vago del desarrollador:</div>
              <div className="text-red-300">"Agrega un buscador rápido de usuarios y haz que el código quede limpio y probado."</div>
            </div>

            <div className="mt-4 space-y-2 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2 text-red-400">
                <i className="fa-solid fa-xmark"></i>
                <span>¿Qué significa "rápido"? (¿50ms? ¿500ms? ¿cacheado?)</span>
              </div>
              <div className="flex items-center gap-2 text-red-400">
                <i className="fa-solid fa-xmark"></i>
                <span>¿Qué pruebas debe pasar? (El agente inventará pruebas triviales)</span>
              </div>
              <div className="flex items-center gap-2 text-red-400">
                <i className="fa-solid fa-xmark"></i>
                <span>¿Qué formato de respuesta se espera?</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-xl text-xs font-mono text-red-300">
            Consecuencia: El agente escribe 10 líneas, no corre tests reales y jura que cumplió.
          </div>
        </div>

        {/* Crisp Executable Contract */}
        <div className="p-6 rounded-2xl bg-black/80 border border-emerald-500/50 glow-border-green flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-emerald-900/40 mb-4">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-circle-check"></i> Contrato de Completitud Ejecutable
              </span>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/40">
                VERIFICABLE
              </span>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-200">1. Endpoint GET /api/search?q=xxx</span>
                <i className="fa-solid fa-check text-emerald-400"></i>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-200">2. Paginación soportada (default 20 items)</span>
                <i className="fa-solid fa-check text-emerald-400"></i>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-slate-200">3. Resultados incluyen highlighted snippets</span>
                <i className="fa-solid fa-check text-emerald-400"></i>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-emerald-300 font-bold">4. pytest tests/test_search.py == 100% OK</span>
                <i className="fa-solid fa-check text-emerald-400"></i>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between">
                <span className="text-emerald-300 font-bold">5. mypy --strict src/search/ (0 warnings)</span>
                <i className="fa-solid fa-check text-emerald-400"></i>
              </div>
            </div>
          </div>

          <div className="p-3 bg-emerald-950/30 border border-emerald-500/40 rounded-xl text-xs font-mono text-emerald-300">
            Resultado: Cero ambigüedad. El arnés solo aprueba la tarea si los 5 criterios son booleanamente verdaderos.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-1-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-gavel text-emerald-400"></i>
          <span>Regla de Oro:</span>
        </span>
        <span className="text-white font-semibold">
          "Si una tarea no tiene un comando ejecutable que devuelva exit code 0, no está especificada."
        </span>
      </motion.div>
    </div>
  );
};
