import React, { useMemo, useCallback } from 'react';
import { PresentationState, PresentationAction } from '../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide7_WipLimit: React.FC<Props> = ({ state, dispatch }) => {
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
      {/* Top Banner */}
      <div className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-list-check text-emerald-400"></i>
            Una Tarea a la Vez: Límite Estricto WIP = 1
          </div>
          <div className="text-sm font-semibold text-white mt-1">
            "Capacidad contextual <span className="text-cyan-400 font-mono">C</span> dividida entre <span className="text-red-400 font-mono">k</span> tareas simultáneas: <span className="text-emerald-400 font-mono">C / k</span> diluye el razonamiento."
          </div>
        </div>
        <div className="text-xs font-mono px-3 py-1 bg-emerald-950 border border-emerald-500/50 text-emerald-300 rounded font-bold">
          KANBAN HARNESS CONSTRAINT
        </div>
      </div>

      {/* Main Grid: C/k Formula Interactive Gauge vs Overreach/Under-finish Balance */}
      <div className="my-4 grid grid-cols-1 md:grid-cols-12 gap-4 flex-1">
        {/* Left: C/k Attention Dilution Calculator */}
        <div className="md:col-span-6 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-calculator mr-2"></i>Simulador de Concurrencia (k)
              </span>
              <span
                className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  stats.isWipOne ? 'bg-emerald-950 text-emerald-400 border border-emerald-500' : 'bg-red-950 text-red-400 border border-red-800'
                }`}
              >
                {stats.isWipOne ? 'WIP=1 (ÓPTIMO)' : `WIP=${stats.k} (DILUIDO)`}
              </span>
            </div>

            <div className="mb-4">
              <div className="text-xs text-slate-400 font-mono mb-2">Selecciona Tareas Activas Simultáneas (k):</div>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleWip(num)}
                    className={`flex-1 py-2 rounded font-mono font-bold text-xs border transition-all ${
                      slide7WipCount === num
                        ? num === 1
                          ? 'bg-emerald-950 border-emerald-400 text-emerald-300 glow-border-green'
                          : 'bg-red-950 border-red-500 text-red-300'
                        : 'bg-black border-slate-800 text-slate-500'
                    }`}
                  >
                    k = {num}
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Token Attention Distribution Bars */}
            <div className="p-3 bg-black/60 rounded-lg border border-slate-800 space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Atención por Tarea:</span>
                <span className={stats.isWipOne ? 'text-emerald-400 font-bold' : 'text-yellow-400 font-bold'}>
                  {stats.attentionPerTask}%
                </span>
              </div>
              <div className="h-3 w-full bg-slate-900 rounded overflow-hidden flex">
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
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>Riesgo de Fallo: {stats.failureProb}%</span>
                <span>{stats.isWipOne ? 'Atención Focalizada' : 'Atención Fragmentada'}</span>
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-2">
            La "Presión de Finalización" del arnés prohíbe abrir una nueva feature hasta certificar la actual.
          </div>
        </div>

        {/* Right: Overreach vs Under-finish Two-sided Pathology */}
        <div className="md:col-span-6 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-scale-unbalanced mr-2"></i>Las Dos Caras de la Moneda
              </span>
              <span className="text-xs font-mono text-slate-400">PATOLOGÍAS AGÉNTICAS</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {/* Overreach */}
              <div className="p-3 rounded-lg bg-yellow-950/20 border border-yellow-500/30">
                <div className="text-yellow-400 font-bold flex items-center justify-between mb-1">
                  <span>1. OVERREACH (Extralimitación)</span>
                  <i className="fa-solid fa-arrows-up-to-line"></i>
                </div>
                <div className="text-[11px] text-slate-300 leading-relaxed">
                  El agente intenta resolver más de lo pedido: refactoriza archivos ajenos, toca configuraciones globales y genera pull requests gigantescos que rompen el build.
                </div>
              </div>

              {/* Under-finish */}
              <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/30">
                <div className="text-red-400 font-bold flex items-center justify-between mb-1">
                  <span>2. UNDER-FINISH (Incompleto)</span>
                  <i className="fa-solid fa-arrows-down-to-line"></i>
                </div>
                <div className="text-[11px] text-slate-300 leading-relaxed">
                  El agente escribe el código superficial pero omite la suite de pruebas, no comprueba la integración y se retira declarando victoria falsa sin validar.
                </div>
              </div>
            </div>
          </div>

          {/* Solution: Harness Completion Pressure */}
          <div className="p-2.5 rounded bg-emerald-950/30 border border-emerald-400/50 glow-border-green font-mono text-xs">
            <span className="text-emerald-300 font-bold block mb-0.5">Solución: Superficie de Alcance DAG</span>
            <span className="text-[11px] text-slate-300">
              Descomponer en nodos atómicos con verificación obligatoria antes del handoff.
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="bg-black/80 border border-slate-800 p-3 rounded-lg font-mono text-xs text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-hand-fist text-cyan-400"></i>
          <span>Regla Operativa:</span>
        </span>
        <span className="text-white font-semibold">
          "Exactamente 1 tarea en progreso. Todo lo demás espera en TODO hasta que la verificación emita GREEN."
        </span>
      </div>
    </div>
  );
};
