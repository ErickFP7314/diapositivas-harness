import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide01_2_RoiMatrix: React.FC<Props> = ({ state, dispatch }) => {
  const { slide1CostRatio } = state;

  const handleSlider = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'SET_SLIDE_1_RATIO', ratio: parseInt(e.target.value, 10) });
    },
    [dispatch]
  );

  const roiMetrics = useMemo(() => {
    const modelMultiplier = slide1CostRatio; // 1 to 10
    const modelCost = modelMultiplier * 15;
    const modelGain = Math.min(2 + modelMultiplier * 0.4, 6);
    const harnessCost = 15;
    const harnessGain = 320;
    return { modelCost, modelGain, harnessCost, harnessGain };
  }, [slide1CostRatio]);

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
            BINDING CONSTRAINT: <span className="text-emerald-400">LA DISPARIDAD DE ROI</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          01.2 / 01.3
        </div>
      </motion.div>

      {/* Main Interactive ROI Simulator */}
      <div className="my-6 bg-black/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-5">
            <div>
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                <i className="fa-solid fa-sliders mr-2"></i>SIMULADOR FINANCIERO &bull; TASA DE ÉXITO VS COSTO
              </span>
              <span className="text-xs text-slate-400 font-mono mt-0.5">
                Factor de Escalado de Modelo: <span className="text-cyan-400 font-bold">{slide1CostRatio}x más caro</span>
              </span>
            </div>
            <div className="text-xs font-mono px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 rounded font-bold">
              SWE-BENCH BENCHMARK
            </div>
          </div>

          {/* Interactive Range Slider */}
          <div className="mb-6">
            <div className="flex justify-between text-xs font-mono text-slate-400 mb-2">
              <span>Modelo Económico (GPT-4o-mini / Haiku)</span>
              <span>Modelo Frontera Extremo (Opus / o1-pro)</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={slide1CostRatio}
              onChange={handleSlider}
              className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
            />
          </div>

          {/* Dual Comparative Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Model Upgrade Path */}
            <div className="p-5 rounded-xl bg-black/60 border border-red-500/40 relative overflow-hidden">
              <div className="text-xs font-mono font-bold text-red-400 uppercase mb-2 flex items-center justify-between">
                <span>Opción A: Actualizar Modelo LLM</span>
                <i className="fa-solid fa-arrow-trend-up"></i>
              </div>
              <div className="text-2xl font-black font-mono text-white mt-1">
                +{roiMetrics.modelGain.toFixed(1)}% <span className="text-xs text-slate-400 font-normal">Éxito marginal</span>
              </div>
              <div className="text-xs font-mono text-red-400 mt-2">
                Costo Token: ${roiMetrics.modelCost} / Millón (Factura multiplicada x{slide1CostRatio})
              </div>
              <div className="text-[11px] text-slate-400 font-mono mt-3 border-t border-slate-800/80 pt-2">
                Rendimientos decrecientes: El modelo sigue chocando contra el mismo entorno roto.
              </div>
            </div>

            {/* Harness Optimization Path */}
            <div className="p-5 rounded-xl bg-emerald-950/30 border border-emerald-400 glow-border-green relative overflow-hidden">
              <div className="text-xs font-mono font-bold text-emerald-400 uppercase mb-2 flex items-center justify-between">
                <span>Opción B: Ingeniería del Harness</span>
                <i className="fa-solid fa-rocket"></i>
              </div>
              <div className="text-2xl font-black font-mono text-emerald-400 mt-1">
                +{roiMetrics.harnessGain}% <span className="text-xs text-emerald-300 font-normal">Éxito en producción</span>
              </div>
              <div className="text-xs font-mono text-emerald-300 mt-2">
                Costo Token: ${roiMetrics.harnessCost} / Millón (Costo Fijo y Estable)
              </div>
              <div className="text-[11px] text-slate-300 font-mono mt-3 border-t border-emerald-800/60 pt-2">
                Retorno masivo: Un AGENTS.md claro y pytest ejecutable desatan el verdadero poder del modelo.
              </div>
            </div>
          </div>
        </div>

        <div className="text-[11px] font-mono text-slate-400 border-t border-slate-800 pt-3 flex justify-between items-center">
          <span>Tesis Anthropic/OpenAI: El modelo es la variable más cara; el arnés es la palanca con mayor ROI.</span>
          <span className="text-emerald-400 font-bold">1x COST &bull; 3x TASK SUCCESS</span>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-1-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-scale-balanced text-cyan-400"></i>
          <span>Regla de Inversión:</span>
        </span>
        <span className="text-white font-semibold">
          "Un archivo AGENTS.md de 80 líneas puede ser más efectivo que saltar a un modelo 10x más costoso."
        </span>
      </motion.div>
    </div>
  );
};
