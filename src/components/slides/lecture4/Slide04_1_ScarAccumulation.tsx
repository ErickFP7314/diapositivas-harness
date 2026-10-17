import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide04_1_ScarAccumulation: React.FC<Props> = () => {
  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-4-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-file-code text-emerald-400"></i>
            <span>SECCIÓN 04 &bull; DISEÑO DE AGENTS.MD & SNR</span>
          </div>
          <motion.div layoutId="lecture-4-title" className="text-xl font-black text-white mt-1">
            PATOLOGÍA: <span className="text-red-400">LA ACUMULACIÓN DE CICATRICES</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          04.1 / 04.3
        </div>
      </motion.div>

      {/* Main Visual: Cycle of Instructional Bloat */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-stretch">
        {/* Left: The Toxic Cycle */}
        <div className="p-6 rounded-2xl bg-black/80 border border-red-500/40 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-red-900/40 mb-4">
              <span className="text-xs font-mono text-red-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-arrows-spin"></i> El Ciclo Vicioso del Bloatware
              </span>
              <span className="text-[10px] font-mono text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-900">
                DEGRADACIÓN PROGRESIVA
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <span className="text-red-400 font-bold block mb-0.5">1. El agente comete un bug casual</span>
                Un error común de sintaxis o importación ocurre en una sesión aislada.
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <span className="text-red-400 font-bold block mb-0.5">2. Ingeniero agrega regla reactiva</span>
                "Siempre usa X", "Nunca uses Y", "Recuerda formatear Z".
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <span className="text-red-400 font-bold block mb-0.5">3. AGENTS.md alcanza 600 líneas</span>
                Un documento monstruoso con reglas contradictorias y redundantes.
              </div>
              <div className="p-2.5 rounded-xl bg-red-950/30 border border-red-500/60 text-red-300 font-bold">
                4. Colapso: El agente se vuelve torpe, alucina y viola sus propias reglas.
              </div>
            </div>
          </div>

          <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-xl text-xs font-mono text-red-300">
            Peligro: Cuantas más reglas sueltas agregues a mano, menor será la atención que el transformador preste a cada una.
          </div>
        </div>

        {/* Right: The Solution - Structural Rules via Code */}
        <div className="p-6 rounded-2xl bg-black/80 border border-emerald-500/50 glow-border-green flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-emerald-900/40 mb-4">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-code"></i> Remedio: Convertir Cicatrices en Linters
              </span>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/50">
                MECÁNICO Y DETERMINISTA
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-cyan-400 font-bold mb-1">En lugar de escribir en texto plano:</div>
                <div className="text-slate-400 text-[11px] italic">"Recuerda no importar db en la capa de UI..."</div>
              </div>

              <div className="text-center text-slate-600 font-mono text-xs">
                <i className="fa-solid fa-arrow-down"></i> Transforma la regla en código <i className="fa-solid fa-arrow-down"></i>
              </div>

              <div className="p-3 rounded-xl bg-black border border-emerald-500/50 font-mono text-xs text-emerald-300">
                <div className="text-emerald-400 font-bold mb-1">Crea un check ejecutable en Makefile:</div>
                <div className="text-slate-200">$ ruff check src/ && eslint --max-warnings=0</div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-emerald-950/30 border border-emerald-500/40 rounded-xl text-xs font-mono text-emerald-300">
            Regla: Si un error puede ser atrapado por un compilador, un linter o un test unitario, NUNCA debe ir a AGENTS.md.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-4-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-scissors text-red-400"></i>
          <span>Axioma de Higiene:</span>
        </span>
        <span className="text-white font-semibold">
          "No conviertas tu AGENTS.md en el cementerio de todos los bugs que tu equipo ha cometido."
        </span>
      </motion.div>
    </div>
  );
};
