import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide07_2_OverreachUnderfinish: React.FC<Props> = () => {
  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-7-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-list-check text-emerald-400"></i>
            <span>SECCIÓN 07 &bull; UNA TAREA A LA VEZ</span>
          </div>
          <motion.div layoutId="lecture-7-title" className="text-xl font-black text-white mt-1">
            PATOLOGÍAS OPUESTAS: <span className="text-yellow-400">OVERREACH</span> VS <span className="text-red-400">UNDER-FINISH</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          07.2 / 07.3
        </div>
      </motion.div>

      {/* Main Grid: Dual Pathology Visualizer */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-stretch">
        {/* Overreach Card */}
        <div className="p-6 rounded-2xl bg-black/80 border border-yellow-500/40 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-yellow-900/40 mb-4">
              <span className="text-xs font-mono text-yellow-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-arrows-up-to-line"></i> 1. OVERREACH (Extralimitación)
              </span>
              <span className="text-[10px] font-mono text-yellow-300 bg-yellow-950 px-2 py-0.5 rounded border border-yellow-800">
                SCOPE CREEP AGÉNTICO
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <span className="text-yellow-400 font-bold block mb-1">El Síntoma:</span>
                Le pides arreglar un botón de login y el agente refactoriza el router completo, actualiza dependencias y reescribe componentes no relacionados.
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <span className="text-yellow-400 font-bold block mb-1">Consecuencia:</span>
                Pull request de 25 archivos modificados con conflictos masivos de integración que ningún humano se atreve a aprobar.
              </div>
            </div>
          </div>

          <div className="p-3 bg-yellow-950/20 border border-yellow-500/30 rounded-xl text-xs font-mono text-yellow-300">
            Freno del Arnés: Limitar estrictamente las rutas que el agente tiene permitido editar por tarea.
          </div>
        </div>

        {/* Under-finish Card */}
        <div className="p-6 rounded-2xl bg-black/80 border border-red-500/40 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-red-900/40 mb-4">
              <span className="text-xs font-mono text-red-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-arrows-down-to-line"></i> 2. UNDER-FINISH (Incompleto)
              </span>
              <span className="text-[10px] font-mono text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-900">
                FINALIZACIÓN PREMATURA
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <span className="text-red-400 font-bold block mb-0.5">El Síntoma:</span>
                El agente escribe una función básica de 5 líneas, no ejecuta las pruebas unitarias y declara: "Listo, la tarea está implementada".
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <span className="text-red-400 font-bold block mb-0.5">Consecuencia:</span>
                Código que compila superficialmente pero falla al integrarse en la arquitectura real del sistema.
              </div>
            </div>
          </div>

          <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-xl text-xs font-mono text-red-300">
            Freno del Arnés: La tarea no se considera cerrada hasta que el test suite emita exit code 0.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-7-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-scale-unbalanced text-yellow-400"></i>
          <span>Diagnóstico Dual:</span>
        </span>
        <span className="text-white font-semibold">
          "Overreach y Under-finish son dos caras de la misma moneda: la ausencia de restricciones claras en el arnés."
        </span>
      </motion.div>
    </div>
  );
};
