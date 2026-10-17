import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide07_1_ContextDilution: React.FC<Props> = ({ state, dispatch }) => {
  const { slide7WipCount } = state;

  const handleWip = useCallback(
    (count: number) => {
      dispatch({ type: 'SET_SLIDE_7_WIP', count });
    },
    [dispatch]
  );

  const stats = useMemo(() => {
    const k = slide7WipCount;
    const attentionPerTask = Math.round(100 / k);
    const failureProb = k === 1 ? 5 : Math.min(95, k * 22);
    const isWipOne = k === 1;
    return { k, attentionPerTask, failureProb, isWipOne };
  }, [slide7WipCount]);

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
            DILUCIÓN MATEMÁTICA: <span className="text-red-400">FÓRMULA C / K</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          07.1 / 07.3
        </div>
      </motion.div>

      {/* Main Interactive C/k Calculator */}
      <div className="my-6 bg-black/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-5">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
              <i className="fa-solid fa-calculator mr-2"></i>SIMULADOR DE FRAGMENTACIÓN DE ATENCIÓN (k TAREAS)
            </span>
            <span
              className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                stats.isWipOne ? 'bg-emerald-950 text-emerald-400 border border-emerald-500' : 'bg-red-950 text-red-400 border border-red-800'
              }`}
            >
              {stats.isWipOne ? 'WIP = 1 (ÓPTIMO)' : `WIP = ${stats.k} (DILUIDO)`}
            </span>
          </div>

          {/* Selector of Active Tasks k */}
          <div className="mb-6">
            <div className="text-xs text-slate-400 font-mono mb-2">Selecciona Número de Tareas Concurrentes (k):</div>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((num) => (
                <button
                  key={num}
                  onClick={() => handleWip(num)}
                  className={`flex-1 py-2.5 rounded-xl font-mono font-bold text-xs border transition-all ${
                    slide7WipCount === num
                      ? num === 1
                        ? 'bg-emerald-950 border-emerald-400 text-emerald-300 glow-border-green'
                        : 'bg-red-950 border-red-500 text-red-300'
                      : 'bg-black/60 border-slate-800 text-slate-500 hover:border-slate-700'
                  }`}
                >
                  k = {num}
                </button>
              ))}
            </div>
          </div>

          {/* Attention Bar Visualization */}
          <div className="p-5 bg-black/60 rounded-xl border border-slate-800 space-y-3">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Atención de Razonamiento por Tarea:</span>
              <span className={stats.isWipOne ? 'text-emerald-400 font-bold' : 'text-yellow-400 font-bold'}>
                {stats.attentionPerTask}% de C
              </span>
            </div>
            <div className="h-4 w-full bg-slate-900 rounded-lg overflow-hidden flex">
              {Array.from({ length: stats.k }).map((_, i) => (
                <div
                  key={i}
                  style={{ width: `${100 / stats.k}%` }}
                  className={`h-full border-r border-black ${
                    stats.isWipOne ? 'bg-emerald-400 glow-green' : 'bg-red-500/80'
                  }`}
                ></div>
              ))}
            </div>
            <div className="flex justify-between text-xs font-mono text-slate-400">
              <span>Probabilidad de Fallo Cruzado: <strong className={stats.isWipOne ? 'text-emerald-400' : 'text-red-400'}>{stats.failureProb}%</strong></span>
              <span>{stats.isWipOne ? 'Atención Focalizada' : 'Atención Fragmentada y Confusión'}</span>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex justify-between items-center">
          <span>Axioma: Toda tarea adicional degrada exponencialmente la capacidad de resolución de la anterior.</span>
          <span className="text-emerald-400 font-bold">KANBAN APPLIED TO LLM</span>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-7-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-divide text-red-400"></i>
          <span>Ley Matemática de Contexto:</span>
        </span>
        <span className="text-white font-semibold">
          "Capacidad C dividida entre k tareas activas: C/k destruye la coherencia de razonamiento."
        </span>
      </motion.div>
    </div>
  );
};
