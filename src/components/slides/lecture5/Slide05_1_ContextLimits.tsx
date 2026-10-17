import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide05_1_ContextLimits: React.FC<Props> = ({ state, dispatch }) => {
  const { slide5TokenLength } = state;

  const handleTokens = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'SET_SLIDE_5_TOKENS', tokens: parseInt(e.target.value, 10) });
    },
    [dispatch]
  );

  const stats = useMemo(() => {
    const kTokens = Math.round(slide5TokenLength / 1000);
    const latencySec = (kTokens * 0.025 + 1.2).toFixed(1);
    const costDollar = ((kTokens / 1000) * 15).toFixed(2);
    const degradationPct = Math.min(85, Math.round((kTokens / 1000) * 85));
    return { kTokens, latencySec, costDollar, degradationPct };
  }, [slide5TokenLength]);

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
            LÍMITES REALES: <span className="text-red-400">LA TRAMPA DEL MILLÓN DE TOKENS</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          05.1 / 05.3
        </div>
      </motion.div>

      {/* Main Interactive Token Inflation Simulator */}
      <div className="my-6 bg-black/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-5">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
              <i className="fa-solid fa-gauge-high mr-2"></i>SIMULADOR DE INFLACIÓN CONTEXTUAL
            </span>
            <span className="text-xs font-mono text-white font-bold">
              OCUPACIÓN: <span className="text-cyan-400">{stats.kTokens}k / 1,000k Tokens</span>
            </span>
          </div>

          <div className="mb-6">
            <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
              <span>Contexto Quirúrgico (20k)</span>
              <span>Contexto Inflado no Estructurado (1,000k)</span>
            </div>
            <input
              type="range"
              min="20000"
              max="1000000"
              step="20000"
              value={slide5TokenLength}
              onChange={handleTokens}
              className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
          </div>

          {/* 3 Metrics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-black/60 border border-slate-800 text-center">
              <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Latencia de Respuesta</div>
              <div className="text-2xl font-black font-mono text-cyan-400 mt-1">{stats.latencySec}s</div>
              <div className="text-[10px] text-slate-500 font-mono mt-1">Tiempo de espera por turno</div>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-slate-800 text-center">
              <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Costo por Llamada</div>
              <div className="text-2xl font-black font-mono text-yellow-400 mt-1">${stats.costDollar}</div>
              <div className="text-[10px] text-slate-500 font-mono mt-1">Gasto en tokens de entrada</div>
            </div>

            <div className="p-4 rounded-xl bg-black/60 border border-slate-800 text-center">
              <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Degradación de Precisión</div>
              <div className={`text-2xl font-mono font-black mt-1 ${stats.degradationPct > 40 ? 'text-red-400 animate-pulse' : 'text-emerald-400'}`}>
                {stats.degradationPct}%
              </div>
              <div className="text-[10px] text-slate-500 font-mono mt-1">Pérdida de razonamiento lógico</div>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex justify-between items-center">
          <span>Conclusión: Meter todo el código en el prompt es la estrategia más lenta y cara posible.</span>
          <span className="text-cyan-400 font-bold">CONTEXT PRUNING REQUERIDO</span>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-5-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-triangle-exclamation text-red-400"></i>
          <span>Realidad Técnica:</span>
        </span>
        <span className="text-white font-semibold">
          "Tener una ventana de un millón de tokens no significa que debas saturarla con basura."
        </span>
      </motion.div>
    </div>
  );
};
