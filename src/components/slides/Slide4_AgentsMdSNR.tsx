import React, { useMemo, useCallback } from 'react';
import { PresentationState, PresentationAction } from '../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide4_AgentsMdSNR: React.FC<Props> = ({ state, dispatch }) => {
  const { slide4RuleCount } = state;

  const handleSlider = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'SET_SLIDE_4_RULES', count: parseInt(e.target.value, 10) });
    },
    [dispatch]
  );

  // Derived SNR and hallucination metrics with useMemo
  const metrics = useMemo(() => {
    // 50 to 100 lines is the sweet spot
    const snr = Math.max(10, Math.round(100 - (slide4RuleCount > 100 ? (slide4RuleCount - 100) * 0.22 : (100 - slide4RuleCount) * 0.1)));
    const hallucinationRisk = slide4RuleCount > 120 ? Math.min(85, Math.round((slide4RuleCount - 100) * 0.25)) : 8;
    const isOptimal = slide4RuleCount >= 50 && slide4RuleCount <= 100;
    return { snr, hallucinationRisk, isOptimal };
  }, [slide4RuleCount]);

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Top Banner */}
      <div className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-file-code text-emerald-400"></i>
            Diseño de AGENTS.md & Relación Señal/Ruido (SNR)
          </div>
          <div className="text-sm font-semibold text-white mt-1">
            "Proporciona un <span className="text-cyan-400">mapa</span>, no un <span className="text-red-400">manual</span>. Evita la acumulación de cicatrices."
          </div>
        </div>
        <div className="flex gap-2">
          <span className="text-xs font-mono px-3 py-1 bg-slate-900 border border-slate-700 text-slate-300 rounded font-bold">
            OBJETIVO: 50-100 LÍNEAS
          </span>
        </div>
      </div>

      {/* Main Grid: U-Curve Lost in the Middle vs SNR Interactive Simulator */}
      <div className="my-4 grid grid-cols-1 md:grid-cols-12 gap-4 flex-1">
        {/* Left: Lost in the Middle Visualizer */}
        <div className="md:col-span-6 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-chart-area mr-2"></i>Efecto "Lost in the Middle" (Liu et al.)
              </span>
              <span className="text-[10px] font-mono text-slate-400">ATENCIÓN EN CONTEXTO</span>
            </div>

            {/* SVG U-Curve of Attention */}
            <div className="h-36 w-full bg-slate-950/80 rounded-lg border border-slate-800 p-3 relative flex items-center justify-center">
              <svg className="w-full h-full overflow-visible" viewBox="0 0 400 100">
                {/* Background Guide Grid */}
                <line x1="0" y1="20" x2="400" y2="20" stroke="#1e293b" strokeDasharray="4" />
                <line x1="0" y1="50" x2="400" y2="50" stroke="#1e293b" strokeDasharray="4" />
                <line x1="0" y1="80" x2="400" y2="80" stroke="#1e293b" strokeDasharray="4" />

                {/* U-Shaped Attention Curve */}
                <path
                  d="M 10 20 Q 200 95 390 20"
                  fill="none"
                  stroke="#00f5ff"
                  strokeWidth="3"
                />
                {/* Drop Zone Highlight */}
                <circle cx="200" cy="95" r="5" fill="#ef4444" className="animate-pulse" />
                <text x="200" y="75" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="monospace">
                  Pérdida de Atención (~28%)
                </text>
                <text x="30" y="15" fill="#10b981" fontSize="10" fontFamily="monospace">
                  Inicio (98%)
                </text>
                <text x="370" y="15" textAnchor="end" fill="#10b981" fontSize="10" fontFamily="monospace">
                  Final (95%)
                </text>
              </svg>
            </div>
            <div className="text-[10px] text-slate-400 font-mono mt-2 text-center">
              Los LLM ignoran las reglas enterradas en el centro de documentos largos.
            </div>
          </div>

          {/* Progressive Disclosure Principle */}
          <div className="p-3 bg-emerald-950/20 border border-emerald-500/40 rounded-lg font-mono text-xs mt-3">
            <div className="text-emerald-400 font-bold flex items-center gap-2 mb-1">
              <i className="fa-solid fa-layer-group"></i>
              <span>Divulgación Bajo Demanda (Progressive Disclosure)</span>
            </div>
            <div className="text-[11px] text-slate-300">
              Carga general en AGENTS.md; lectura profunda de docs/ sólo cuando la tarea lo requiera.
            </div>
          </div>
        </div>

        {/* Right: SNR & Rules Inflator Simulator */}
        <div className="md:col-span-6 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-sliders mr-2"></i>Simulador de Longitud de Reglas
              </span>
              <span
                className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  metrics.isOptimal ? 'bg-emerald-950 text-emerald-400 border border-emerald-500' : 'bg-red-950 text-red-400 border border-red-800'
                }`}
              >
                {metrics.isOptimal ? 'ÓPTIMO (SNR ALTO)' : 'SATURADO (RUIDO)'}
              </span>
            </div>

            <div className="mb-4">
              <div className="flex justify-between text-xs font-mono mb-1">
                <span className="text-slate-400">Líneas en AGENTS.md:</span>
                <span className="text-cyan-400 font-bold">{slide4RuleCount} líneas</span>
              </div>
              <input
                type="range"
                min="20"
                max="400"
                value={slide4RuleCount}
                onChange={handleSlider}
                className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
              />
            </div>

            {/* Metrics Dual Display */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              <div className="p-3 rounded-lg bg-black/60 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Relación Señal/Ruido</div>
                <div
                  className={`text-xl font-mono font-black mt-1 ${
                    metrics.snr > 70 ? 'text-emerald-400' : 'text-yellow-400'
                  }`}
                >
                  {metrics.snr}%
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">Retención de instrucciones</div>
              </div>
              <div className="p-3 rounded-lg bg-black/60 border border-slate-800">
                <div className="text-[10px] text-slate-400 uppercase font-mono font-bold">Riesgo de Conflicto</div>
                <div
                  className={`text-xl font-mono font-black mt-1 ${
                    metrics.hallucinationRisk < 20 ? 'text-emerald-400' : 'text-red-400 animate-pulse'
                  }`}
                >
                  {metrics.hallucinationRisk}%
                </div>
                <div className="text-[10px] text-slate-500 font-mono mt-0.5">Reglas contradictorias</div>
              </div>
            </div>
          </div>

          {/* 4 Canonical Sections Checklist */}
          <div className="pt-2 border-t border-slate-800 text-[11px] font-mono grid grid-cols-2 gap-2 text-slate-300">
            <div className="flex items-center gap-1.5"><i className="fa-solid fa-check text-cyan-400"></i> Project Overview</div>
            <div className="flex items-center gap-1.5"><i className="fa-solid fa-check text-cyan-400"></i> Quick Start & Setup</div>
            <div className="flex items-center gap-1.5"><i className="fa-solid fa-check text-cyan-400"></i> Hard Constraints</div>
            <div className="flex items-center gap-1.5"><i className="fa-solid fa-check text-cyan-400"></i> Modular Topic Docs</div>
          </div>
        </div>
      </div>

      {/* Bottom Rule */}
      <div className="bg-black/80 border border-slate-800 p-3 rounded-lg text-xs font-mono text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-shield-cat text-cyan-400"></i>
          <span>Regla de Poda de Reglas:</span>
        </span>
        <span className="text-white font-bold">
          "Si eliminar una regla no cambia la decisión del agente, esa regla no debe existir."
        </span>
      </div>
    </div>
  );
};
