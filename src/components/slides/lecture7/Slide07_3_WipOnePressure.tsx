import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide07_3_WipOnePressure: React.FC<Props> = () => {
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
            CONTROL DE PROCESO: <span className="text-emerald-400">WIP = 1 & PRESIÓN DE FINALIZACIÓN</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 rounded font-bold">
          07.3 / 07.3
        </div>
      </motion.div>

      {/* Main Visual: Kanban Flow with WIP=1 Constraint */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-4 flex-1 items-stretch">
        {/* Backlog / TODO */}
        <div className="p-5 rounded-2xl bg-black/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono font-bold text-slate-300 uppercase">TODO (COLA)</span>
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded">N TAREAS</span>
            </div>
            <div className="space-y-2 font-mono text-xs text-slate-400">
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 truncate">FEAT-043: Migración DB</div>
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 truncate">FEAT-044: Email Dispatch</div>
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 truncate">FEAT-045: Cache Layer</div>
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800">
            En espera: Bloqueadas hasta que la tarea activa termine.
          </div>
        </div>

        {/* IN_PROGRESS (Strict WIP=1) */}
        <div className="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-400 glow-border-green flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-emerald-900/40 mb-3">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase">IN_PROGRESS</span>
              <span className="text-[10px] font-mono text-black font-bold bg-emerald-400 px-2 py-0.5 rounded glow-green">
                WIP = 1 ESTRICTO
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-black/90 border border-emerald-500/50 font-mono text-xs space-y-2">
              <div className="text-white font-bold text-sm">FEAT-042: Cart Checkout</div>
              <div className="text-[11px] text-slate-300">
                El agente está 100% concentrado en esta única unidad de trabajo.
              </div>
              <div className="flex items-center gap-2 text-cyan-400 text-[10px] pt-1">
                <i className="fa-solid fa-spinner fa-spin"></i>
                <span>Ejecutando pruebas locales</span>
              </div>
            </div>
          </div>

          <div className="p-2.5 bg-emerald-950/40 rounded-xl border border-emerald-500/40 text-[11px] font-mono text-emerald-300 font-bold text-center">
            Presión de Finalización: Prohibido abrir otra tarea
          </div>
        </div>

        {/* DONE (Atomic Commits) */}
        <div className="p-5 rounded-2xl bg-black/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono font-bold text-slate-300 uppercase">DONE (CERTIFICADO)</span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">100% VERDE</span>
            </div>
            <div className="space-y-2 font-mono text-xs text-slate-400">
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-slate-300">
                <span className="truncate">FEAT-041: User Auth</span>
                <i className="fa-solid fa-check text-emerald-400 text-xs"></i>
              </div>
              <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-slate-300">
                <span className="truncate">FEAT-040: Search API</span>
                <i className="fa-solid fa-check text-emerald-400 text-xs"></i>
              </div>
            </div>
          </div>
          <div className="text-[10px] font-mono text-slate-500 pt-2 border-t border-slate-800">
            Commits atómicos listos para revisión y merge.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-7-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-hand-fist text-emerald-400"></i>
          <span>Regla de Ejecución:</span>
        </span>
        <span className="text-white font-semibold">
          "Exactamente 1 tarea en progreso. Todo lo demás espera en TODO hasta que la verificación emita GREEN."
        </span>
      </motion.div>
    </div>
  );
};
