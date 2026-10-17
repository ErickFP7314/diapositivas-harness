import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide05_3_SessionHandoff: React.FC<Props> = () => {
  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-5-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-clock-rotate-left text-emerald-400"></i>
            <span>SECCIÓN 05 &bull; CONTINUIDAD DE SESIÓN</span>
          </div>
          <motion.div layoutId="lecture-5-title" className="text-xl font-black text-white mt-1">
            CONTINUIDAD: <span className="text-emerald-400">PROGRESS.MD & SPEEDUP 5X</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 rounded font-bold">
          05.3 / 05.3
        </div>
      </motion.div>

      {/* Main Grid: Reconstitution Time Comparison & Hand-off Pipeline */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-stretch">
        {/* Left: 15 min vs 3 min Visual Bars */}
        <div className="p-6 rounded-2xl bg-black/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-stopwatch"></i> Tiempo de Reconstitución de Contexto
              </span>
              <span className="text-[10px] font-mono text-emerald-400 font-bold">5X SPEEDUP</span>
            </div>

            <div className="space-y-5 my-4">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-red-400 font-bold">Sin Persistencia (Amnesia del Chat):</span>
                  <span className="text-red-400 font-bold">15 - 20 min</span>
                </div>
                <div className="h-6 w-full bg-slate-900 rounded-lg overflow-hidden p-0.5 border border-red-900/60">
                  <div className="h-full bg-red-500/80 rounded w-full flex items-center px-2 text-[10px] text-black font-bold font-mono">
                    Lecturas redundantes y quema ciega de tokens
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-emerald-400 font-bold">Con Harness (PROGRESS.md & Git State):</span>
                  <span className="text-emerald-400 font-bold">3 min</span>
                </div>
                <div className="h-6 w-full bg-slate-900 rounded-lg overflow-hidden p-0.5 border border-emerald-900/60">
                  <div className="h-full bg-emerald-400 rounded w-1/5 flex items-center px-2 text-[10px] text-black font-bold font-mono glow-green">
                    Boot Rápido
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-slate-300">
            Un buen arnés comprime el costo de reconstrucción contextual de 15 minutos a 3 minutos en cada sesión.
          </div>
        </div>

        {/* Right: 3-Step Hand-off Pipeline */}
        <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/40 glow-border-green flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-emerald-900/40 mb-4">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-arrow-right-arrow-left"></i> Protocolo de Traspaso (Session Hand-off)
              </span>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded">
                DETERMINISTA
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-black/80 border border-slate-800">
                <div className="text-emerald-400 font-bold mb-1">Paso 1: Serialización de Estado</div>
                <div className="text-slate-300 text-[11px]">
                  Antes de cerrar, escribe en PROGRESS.md: qué se completó con tests, qué está en curso y qué bloquea.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/80 border border-slate-800">
                <div className="text-cyan-400 font-bold mb-1">Paso 2: Compactación & Reset</div>
                <div className="text-slate-300 text-[11px]">
                  Cierre limpio de la sesión. Se borra la memoria volátil saturada de la ventana.
                </div>
              </div>

              <div className="p-3 rounded-xl bg-black/80 border border-emerald-500/40">
                <div className="text-emerald-300 font-bold mb-1">Paso 3: Arranque de Sesión N+1</div>
                <div className="text-slate-200 text-[11px]">
                  La nueva sesión lee AGENTS.md + PROGRESS.md y continúa con la memoria al 5% de uso.
                </div>
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-emerald-300 pt-2 border-t border-emerald-900/40">
            Regla: Actualizar PROGRESS.md antes de cerrar; leer PROGRESS.md apenas se inicia.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-5-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-floppy-disk text-emerald-400"></i>
          <span>Persistencia en Acción:</span>
        </span>
        <span className="text-white font-semibold">
          "La continuidad no depende de tener una ventana infinita, sino de tener un traspaso disciplinado."
        </span>
      </motion.div>
    </div>
  );
};
