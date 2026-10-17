import React, { useMemo, useCallback } from 'react';
import { PresentationState, PresentationAction } from '../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide5_SessionContinuity: React.FC<Props> = ({ state, dispatch }) => {
  const { slide5TokenLength } = state;

  const handleTokens = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'SET_SLIDE_5_TOKENS', tokens: parseInt(e.target.value, 10) });
    },
    [dispatch]
  );

  const anxietyLevel = useMemo(() => {
    // 0 to 1M tokens
    const pct = Math.round((slide5TokenLength / 1000000) * 100);
    const anxiety = pct > 65 ? 'CRÍTICA' : pct > 35 ? 'MODERADA' : 'BAJA';
    const degradation = Math.min(85, Math.round(pct * 0.85));
    return { pct, anxiety, degradation };
  }, [slide5TokenLength]);

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Top Banner */}
      <div className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-clock-rotate-left text-emerald-400"></i>
            Continuidad de Sesión & Ansiedad Contextual
          </div>
          <div className="text-sm font-semibold text-white mt-1">
            "Comprimir el costo de reconstitución de contexto de <span className="text-red-400 font-mono">15 minutos</span> a <span className="text-emerald-400 font-mono">3 minutos</span>."
          </div>
        </div>
        <span className="text-xs font-mono px-3 py-1 bg-emerald-950 border border-emerald-500/50 text-emerald-300 rounded font-bold">
          ROLLING STATE &bull; ACID HANDOFF
        </span>
      </div>

      {/* Main Grid: Context Anxiety Meter vs Reconstitution Benchmark */}
      <div className="my-4 grid grid-cols-1 md:grid-cols-12 gap-4 flex-1">
        {/* Left: Context Anxiety Gauge & Token Window */}
        <div className="md:col-span-6 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-brain mr-2"></i>Patología: "Ansiedad Contextual" (Anthropic)
              </span>
              <span
                className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  anxietyLevel.anxiety === 'BAJA'
                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-500'
                    : anxietyLevel.anxiety === 'MODERADA'
                    ? 'bg-yellow-950 text-yellow-400 border border-yellow-500'
                    : 'bg-red-950 text-red-400 border border-red-500 animate-pulse'
                }`}
              >
                ANSIEDAD: {anxietyLevel.anxiety}
              </span>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-slate-400">Ventana de Contexto Ocupada:</span>
                <span className="text-cyan-400 font-bold">
                  {(slide5TokenLength / 1000).toFixed(0)}k / 1,000k Tokens ({anxietyLevel.pct}%)
                </span>
              </div>
              <input
                type="range"
                min="20000"
                max="1000000"
                step="20000"
                value={slide5TokenLength}
                onChange={handleTokens}
                className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
            </div>

            {/* Diagnostic Alert */}
            <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-lg font-mono text-xs mb-3">
              <div className="text-[10px] text-red-400 uppercase font-bold mb-1">
                <i className="fa-solid fa-triangle-exclamation mr-1"></i>Comportamiento Inducido por Saturación:
              </div>
              <div className="text-[11px] text-slate-300">
                Cuando la ventana supera el 70%, el agente acelera conclusiones, omite tests y toma atajos desesperados para no ser compactado.
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 border-t border-slate-800 pt-2">
            La memoria volátil no es confiable: debe volcarse a disco antes de que la ventana colapse.
          </div>
        </div>

        {/* Right: Reconstitution Time Benchmark (15 min vs 3 min) */}
        <div className="md:col-span-6 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-stopwatch mr-2"></i>Tiempo de Reconstitución de Contexto
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">5x SPEEDUP</span>
            </div>

            {/* Visual Time Comparison Bars */}
            <div className="space-y-4 my-3">
              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-red-400 font-bold">Sin Persistencia (Chat Tradicional / Amnesia):</span>
                  <span className="text-red-400 font-bold font-mono">15 - 20 min</span>
                </div>
                <div className="h-6 w-full bg-slate-900 rounded overflow-hidden p-0.5 border border-red-900/60">
                  <div className="h-full bg-red-500/80 rounded w-full flex items-center px-2 text-[10px] text-black font-bold font-mono">
                    Lecturas redundantes, exploración a ciegas, quema de tokens
                  </div>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-mono mb-1">
                  <span className="text-emerald-400 font-bold">Con Harness (PROGRESS.md & Hand-off):</span>
                  <span className="text-emerald-400 font-bold font-mono">3 min</span>
                </div>
                <div className="h-6 w-full bg-slate-900 rounded overflow-hidden p-0.5 border border-emerald-900/60">
                  <div className="h-full bg-emerald-400 rounded w-1/5 flex items-center px-2 text-[10px] text-black font-bold font-mono glow-green">
                    Boot Rápido
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Session Hand-off Pipeline */}
          <div className="bg-slate-950 p-3 rounded-lg border border-slate-800 font-mono text-xs">
            <div className="text-[10px] font-bold text-cyan-400 uppercase mb-2">
              <i className="fa-solid fa-arrow-right-arrow-left mr-1"></i>Protocolo de Traspaso (Session Hand-off):
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-[10px]">
              <div className="p-1.5 bg-black rounded border border-slate-800">1. Serializar Estado</div>
              <div className="p-1.5 bg-black rounded border border-slate-800">2. Compactar Contexto</div>
              <div className="p-1.5 bg-emerald-950/60 rounded border border-emerald-500/50 text-emerald-300 font-bold">3. Sesión N+1 Reanuda</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="bg-black/80 border border-slate-800 p-3 rounded-lg font-mono text-xs text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-floppy-disk text-emerald-400"></i>
          <span>Regla de Persistencia:</span>
        </span>
        <span className="text-white font-semibold">
          "Actualizar PROGRESS.md antes de cerrar la sesión; leer PROGRESS.md apenas arranca la nueva."
        </span>
      </div>
    </div>
  );
};
