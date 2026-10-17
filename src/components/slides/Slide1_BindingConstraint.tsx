import React, { useMemo, useCallback, useState } from 'react';
import { PresentationState, PresentationAction } from '../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide1_BindingConstraint: React.FC<Props> = ({ state, dispatch }) => {
  const [selectedTrap, setSelectedTrap] = useState<number>(0);
  const { slide1CostRatio } = state;

  const traps = useMemo(
    () => [
      {
        id: 0,
        title: 'REQUISITOS VAGOS',
        symptom: 'El agente sólo puede adivinar la intención.',
        remedy: 'Definition of Done formal con especificación de inputs y outputs exactos.',
        layer: 'CAPA 1: ESPECIFICACIÓN',
      },
      {
        id: 1,
        title: 'CONVENCIONES IMPLÍCITAS',
        symptom: 'Reglas de arquitectura no escritas que viven en la cabeza del equipo.',
        remedy: 'AGENTS.md modular con reglas duras y linters ejecutables.',
        layer: 'CAPA 2: CONTEXTO',
      },
      {
        id: 2,
        title: 'ENTORNO INCOMPLETO',
        symptom: 'El agente quema el 80% de sus tokens peleando con paquetes rotos.',
        remedy: 'Contenedor Docker / devcontainer reproducible con dependencias fijas.',
        layer: 'CAPA 3: RUNTIME',
      },
      {
        id: 3,
        title: 'VERIFICACIÓN AUSENTE',
        symptom: 'El agente dice que terminó cuando "siente" que terminó.',
        remedy: 'Validación en 3 capas con comandos deterministas (pytest, types, healthcheck).',
        layer: 'CAPA 4: FEEDBACK',
      },
      {
        id: 4,
        title: 'PÉRDIDA DE ESTADO',
        symptom: 'Cada sesión arranca ciega desde cero perdiendo el contexto previo.',
        remedy: 'Persistencia con PROGRESS.md y commits atómicos con principios ACID.',
        layer: 'CAPA 5: PERSISTENCIA',
      },
    ],
    []
  );

  const activeTrap = useMemo(() => traps[selectedTrap], [traps, selectedTrap]);

  // Derived ROI calculations
  const roiMetrics = useMemo(() => {
    const modelMultiplier = slide1CostRatio; // 1 to 10
    const modelCost = modelMultiplier * 15;
    const modelGain = Math.min(2 + modelMultiplier * 0.4, 6);
    const harnessCost = 15;
    const harnessGain = 320;
    return { modelCost, modelGain, harnessCost, harnessGain };
  }, [slide1CostRatio]);

  const handleSlider = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch({ type: 'SET_SLIDE_1_RATIO', ratio: parseInt(e.target.value, 10) });
    },
    [dispatch]
  );

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Top Banner: Binding Constraint Thesis */}
      <div className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-triangle-exclamation text-emerald-400"></i>
            Tesis del Límite Vinculante (Binding Constraint Thesis)
          </div>
          <div className="text-sm font-semibold text-white mt-1">
            "Cuando las cosas fallen, revisa primero el <span className="text-emerald-400">arnés</span> y luego el <span className="text-cyan-400">modelo</span>. Cambiar de modelo es el parche más caro."
          </div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 rounded font-bold">
          SWE-BENCH VERIFIED
        </div>
      </div>

      {/* Main Grid: 5 Failure Traps vs Interactive Diagnostic Detail */}
      <div className="my-4 grid grid-cols-1 md:grid-cols-12 gap-4 flex-1">
        {/* Left: 5 Failure Traps Selector */}
        <div className="md:col-span-5 flex flex-col gap-2">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
            <i className="fa-solid fa-list-ol mr-2 text-cyan-400"></i>Las 5 Capas Donde Mueren los Agentes:
          </div>
          {traps.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setSelectedTrap(idx)}
              className={`p-2.5 rounded-lg border cursor-pointer transition-all flex items-center justify-between ${
                selectedTrap === idx
                  ? 'bg-cyan-950/70 border-cyan-400 glow-border-cyan text-white'
                  : 'bg-black/60 border-slate-800/80 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-cyan-400">0{idx + 1}</span>
                <span className="text-xs font-bold">{t.title}</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400">
                {t.layer.split(':')[0]}
              </span>
            </div>
          ))}
        </div>

        {/* Right: Active Trap Diagnostic & Remedy Artifact */}
        <div className="md:col-span-7 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-stethoscope mr-2"></i>Diagnóstico Estructural
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">
                {activeTrap.layer}
              </span>
            </div>

            <div className="bg-red-950/20 border border-red-500/30 rounded-lg p-3 mb-3">
              <div className="text-[10px] font-bold text-red-400 tracking-wider uppercase mb-1">
                <i className="fa-solid fa-circle-xmark mr-1"></i>Síntoma en Producción:
              </div>
              <div className="text-xs text-slate-300 font-mono">{activeTrap.symptom}</div>
            </div>

            <div className="bg-emerald-950/20 border border-emerald-500/40 rounded-lg p-3">
              <div className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase mb-1">
                <i className="fa-solid fa-circle-check mr-1"></i>Remedio del Harness Engineering:
              </div>
              <div className="text-xs text-white font-mono font-semibold">{activeTrap.remedy}</div>
            </div>
          </div>

          {/* Interactive ROI Comparison Gauge */}
          <div className="mt-4 pt-3 border-t border-slate-800/80">
            <div className="flex justify-between items-center text-xs font-bold mb-2">
              <span className="text-slate-400">Simulador de ROI: Modelo vs Harness</span>
              <span className="text-cyan-400 font-mono">Factor de Costo Modelo: {slide1CostRatio}x</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              value={slide1CostRatio}
              onChange={handleSlider}
              className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg mb-3"
            />
            <div className="grid grid-cols-2 gap-3 text-center">
              <div className="p-2 rounded bg-black/60 border border-cyan-500/30">
                <div className="text-[10px] text-slate-400 uppercase font-bold">Actualizar Modelo LLM</div>
                <div className="text-sm font-black text-cyan-400 mt-1">+{roiMetrics.modelGain.toFixed(1)}% Éxito</div>
                <div className="text-[10px] text-red-400 font-mono mt-0.5">Costo Token: ${roiMetrics.modelCost} / M</div>
              </div>
              <div className="p-2 rounded bg-emerald-950/30 border border-emerald-400/50 glow-border-green">
                <div className="text-[10px] text-emerald-300 uppercase font-bold">Optimizar Harness</div>
                <div className="text-sm font-black text-emerald-400 mt-1">+{roiMetrics.harnessGain}% Éxito</div>
                <div className="text-[10px] text-emerald-300 font-mono mt-0.5">Costo Token: ${roiMetrics.harnessCost} / M (Fijo)</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Checklist: Clear Definition of Done (DoD) */}
      <div className="bg-black/80 border border-slate-800 p-3 rounded-lg flex items-center justify-between font-mono text-xs">
        <div className="text-slate-400 font-bold flex items-center gap-2">
          <i className="fa-solid fa-list-check text-cyan-400"></i>
          <span>Definition of Done (DoD) Requerida:</span>
        </div>
        <div className="flex gap-4 text-[11px]">
          <span className="text-emerald-400 font-semibold"><i className="fa-solid fa-check mr-1"></i>Endpoint GET /api/search</span>
          <span className="text-emerald-400 font-semibold"><i className="fa-solid fa-check mr-1"></i>Pagination (20 items)</span>
          <span className="text-emerald-400 font-semibold"><i className="fa-solid fa-check mr-1"></i>Pytest 100% Green</span>
          <span className="text-emerald-400 font-semibold"><i className="fa-solid fa-check mr-1"></i>Mypy --strict Pass</span>
        </div>
      </div>
    </div>
  );
};
