import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide04_2_LostInMiddle: React.FC<Props> = ({ state, dispatch }) => {
  const { slide4RuleCount } = state;

  const handleSlider = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'SET_SLIDE_4_RULES', count: parseInt(e.target.value, 10) });
    },
    [dispatch]
  );

  const metrics = useMemo(() => {
    const snr = Math.max(10, Math.round(100 - (slide4RuleCount > 100 ? (slide4RuleCount - 100) * 0.22 : (100 - slide4RuleCount) * 0.1)));
    const hallucinationRisk = slide4RuleCount > 120 ? Math.min(85, Math.round((slide4RuleCount - 100) * 0.25)) : 8;
    const isOptimal = slide4RuleCount >= 50 && slide4RuleCount <= 100;
    return { snr, hallucinationRisk, isOptimal };
  }, [slide4RuleCount]);

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
            CIENCIA DEL CONTEXTO: <span className="text-cyan-400">LOST IN THE MIDDLE & SNR</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          04.2 / 04.3
        </div>
      </motion.div>

      {/* Main Grid: Attention Curve SVG vs Dynamic SNR Simulator */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-stretch">
        {/* Left: U-Curve SVG */}
        <div className="md:col-span-6 p-6 rounded-2xl bg-black/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-chart-area"></i> Curva en U de Atención (Liu et al. 2023)
              </span>
              <span className="text-[10px] font-mono text-slate-400">PAPER EMPÍRICO</span>
            </div>

            <div className="h-44 w-full bg-slate-950/90 rounded-xl border border-slate-800 p-3 flex items-center justify-center relative">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100">
                <line x1="0" y1="20" x2="400" y2="20" stroke="#1e293b" strokeDasharray="4" />
                <line x1="0" y1="50" x2="400" y2="50" stroke="#1e293b" strokeDasharray="4" />
                <line x1="0" y1="80" x2="400" y2="80" stroke="#1e293b" strokeDasharray="4" />

                <path d="M 10 20 Q 200 95 390 20" fill="none" stroke="#00f5ff" strokeWidth="3" />
                <circle cx="200" cy="95" r="5" fill="#ef4444" className="animate-pulse" />
                <text x="200" y="75" textAnchor="middle" fill="#ef4444" fontSize="11" fontFamily="monospace">
                  Zona Muerta (~28% Recuperación)
                </text>
                <text x="25" y="15" fill="#10b981" fontSize="10" fontFamily="monospace">Inicio (98%)</text>
                <text x="375" y="15" textAnchor="end" fill="#10b981" fontSize="10" fontFamily="monospace">Final (95%)</text>
              </svg>
            </div>
          </div>

          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300">
            Los transformadores atienden con altísima fidelidad al inicio y al final; las instrucciones enterradas en el centro sufren amnesia severa.
          </div>
        </div>

        {/* Right: SNR & Rules Inflator Simulator */}
        <div className="md:col-span-6 p-6 rounded-2xl bg-black/90 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-sliders mr-2"></i>Calibrador de Longitud de AGENTS.md
              </span>
              <span
                className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  metrics.isOptimal ? 'bg-emerald-950 text-emerald-400 border border-emerald-500' : 'bg-red-950 text-red-400 border border-red-800'
                }`}
              >
                {metrics.isOptimal ? 'ÓPTIMO (ALTO SNR)' : 'SATURADO (RUIDO)'}
              </span>
            </div>

            <div className="mb-5">
              <div className="flex justify-between text-xs font-mono mb-1.5">
                <span className="text-slate-400">Líneas en AGENTS.md:</span>
                <span className="text-cyan-400 font-bold">{slide4RuleCount} líneas</span>
              </div>
              <input
                type="range"
                min="20"
                max="400"
                value={slide4RuleCount}
                onChange={handleSlider}
                className="w-full accent-cyan-400 cursor-pointer h-2 bg-slate-800 rounded-lg"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/60 border border-slate-800 text-center">
                <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Relación Señal/Ruido</div>
                <div className={`text-2xl font-mono font-black mt-1 ${metrics.snr > 70 ? 'text-emerald-400' : 'text-yellow-400'}`}>
                  {metrics.snr}%
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-1">Densidad de instrucción</div>
              </div>

              <div className="p-4 rounded-xl bg-black/60 border border-slate-800 text-center">
                <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Riesgo de Conflicto</div>
                <div className={`text-2xl font-mono font-black mt-1 ${metrics.hallucinationRisk < 20 ? 'text-emerald-400' : 'text-red-400 animate-pulse'}`}>
                  {metrics.hallucinationRisk}%
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-1">Alucinación de reglas</div>
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800">
            Regla: Mantén el archivo raíz estrictamente entre 50 y 100 líneas para preservar el 90%+ de atención.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-4-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-bullseye text-cyan-400"></i>
          <span>Conclusión Científica:</span>
        </span>
        <span className="text-white font-semibold">
          "A mayor número de reglas no estructuradas, menor probabilidad de que el modelo cumpla las esenciales."
        </span>
      </motion.div>
    </div>
  );
};
