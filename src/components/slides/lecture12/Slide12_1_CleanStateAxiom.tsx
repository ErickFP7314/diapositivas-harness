import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide12_1_CleanStateAxiom: React.FC<Props> = () => {
  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-12-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-broom text-emerald-400"></i>
            <span>SECCIÓN 12 &bull; FINAL DE SESIÓN LIMPIO & IDEMPOTENCIA</span>
          </div>
          <motion.div layoutId="lecture-12-title" className="text-xl font-black text-white mt-1">
            EL AXIOMA DEL ESTADO LIMPIO: <span className="text-red-400">LA SESIÓN COMO TRANSACCIÓN</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-red-950/80 border border-red-500/50 text-red-300 rounded font-bold">
          12.1 / 12.3
        </div>
      </motion.div>

      {/* Main Grid: Axiom Warning & Transaction Cycle */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-stretch">
        {/* Left: The Axiom of Clean State */}
        <div className="p-6 rounded-2xl bg-black/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-triangle-exclamation text-yellow-400"></i> Axioma Fundamental de Higiene
              </span>
              <span className="text-[10px] font-mono text-yellow-400 bg-yellow-950 px-2 py-0.5 rounded border border-yellow-800">
                REGLA INQUEBRANTABLE
              </span>
            </div>

            <div className="p-4 bg-red-950/30 border border-red-500/50 rounded-xl mb-4 font-mono">
              <div className="text-base text-red-300 font-black mb-1">
                "LIMPIAR MÁS TARDE SIGNIFICA NUNCA LIMPIAR."
              </div>
              <div className="text-xs text-slate-300 leading-relaxed mt-2">
                Si un agente deja cambios residuales, archivos temporales sin rastrear o procesos en background al salir, la siguiente sesión iniciará en un estado contaminado y fallará en los primeros 30 segundos.
              </div>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex items-center gap-2">
                <i className="fa-solid fa-skull text-red-400"></i>
                <span className="text-slate-300">Procesos zombies bloqueando puertos de red (3000, 8000)</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex items-center gap-2">
                <i className="fa-solid fa-file-circle-xmark text-yellow-400"></i>
                <span className="text-slate-300">Archivos .tmp y logs volcados en carpetas de código fuente</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex items-center gap-2">
                <i className="fa-solid fa-code-compare text-red-400"></i>
                <span className="text-slate-300">Tests comentados temporalmente que se olvidaron restaurar</span>
              </div>
            </div>
          </div>

          <div className="text-xs font-mono text-slate-400 pt-3 border-t border-slate-800">
            Consecuencia: El envenenamiento del repositorio destruye la reproducibilidad del arnés.
          </div>
        </div>

        {/* Right: The Session Transaction Lifecycle */}
        <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/50 glow-border-cyan flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-cyan-900/40 mb-4">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-arrows-rotate text-emerald-400"></i> Ciclo Transaccional de la Sesión
              </span>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                ACID EN REPO
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-black/80 rounded-xl border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <div className="text-cyan-400 font-bold">1. INICIO: WORKTREE LIMPIO</div>
                  <div className="text-[10px] text-slate-400">git status --porcelain == 0</div>
                </div>
                <i className="fa-solid fa-check text-cyan-400"></i>
              </div>

              <div className="p-3 bg-black/80 rounded-xl border border-yellow-500/30 flex items-center justify-between">
                <div>
                  <div className="text-yellow-400 font-bold">2. MUTACIÓN: CAMBIOS EN ISLA</div>
                  <div className="text-[10px] text-slate-400">Edición atómica bajo WIP = 1</div>
                </div>
                <i className="fa-solid fa-pen-nib text-yellow-400"></i>
              </div>

              <div className="grid grid-cols-2 gap-2 mt-2">
                <div className="p-3 bg-emerald-950/40 rounded-xl border border-emerald-500/40">
                  <div className="text-emerald-400 font-bold text-xs mb-1">SALIDA A: COMMIT</div>
                  <div className="text-[10px] text-slate-300">Todos los tests verdes & checklist 100% aprobada.</div>
                </div>
                <div className="p-3 bg-red-950/40 rounded-xl border border-red-500/40">
                  <div className="text-red-400 font-bold text-xs mb-1">SALIDA B: ROLLBACK</div>
                  <div className="text-[10px] text-slate-300">Fallo irrecuperable: git reset --hard HEAD y retorno a cero.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
            Regla de Cierre: Prohibido terminar una sesión en un estado intermedio indefinido.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-12-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-shield-halved text-cyan-400"></i>
          <span>Axioma Transaccional:</span>
        </span>
        <span className="text-white font-semibold">
          "Toda sesión agéntica debe ser atómica: o se confirma íntegramente en verde o se revierte a cero."
        </span>
      </motion.div>
    </div>
  );
};
