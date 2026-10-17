import React, { useMemo, useCallback } from 'react';
import { PresentationState, PresentationAction } from '../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide11_ObservableAgent: React.FC<Props> = ({ state, dispatch }) => {
  const { slide11TraceStep } = state;

  const handleStep = useCallback(
    (step: number) => {
      dispatch({ type: 'STEP_SLIDE_11', step });
    },
    [dispatch]
  );

  const spans = useMemo(
    () => [
      { id: 0, name: 'root.agent_turn', type: 'ORCHESTRATOR', duration: '4.2s', status: 'OK', color: 'text-cyan-400' },
      { id: 1, name: 'llm.completion.inference', type: 'MODEL', duration: '1.8s', status: 'OK', color: 'text-emerald-400' },
      { id: 2, name: 'tool.dispatch:execute_bash', type: 'TOOL_BUS', duration: '0.6s', status: 'OK', color: 'text-yellow-400' },
      { id: 3, name: 'verifier.pytest_suite', type: 'CHECKS', duration: '1.4s', status: 'OK', color: 'text-emerald-400' },
      { id: 4, name: 'state.commit_progress', type: 'PERSISTENCE', duration: '0.4s', status: 'OK', color: 'text-cyan-400' },
    ],
    []
  );

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Top Banner */}
      <div className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-gauge-high text-emerald-400"></i>
            Agente Observable & Telemetría OpenTelemetry
          </div>
          <div className="text-sm font-semibold text-white mt-1">
            "Transformar la caja negra en un sistema <span className="text-cyan-400">instrumentado</span> y <span className="text-emerald-400">trazable</span>."
          </div>
        </div>
        <div className="text-xs font-mono px-3 py-1 bg-cyan-950 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          OTEL TRACE SPANS
        </div>
      </div>

      {/* Main Grid: OTEL Waterfall vs Anthropic 3-Agent Architecture */}
      <div className="my-4 grid grid-cols-1 md:grid-cols-12 gap-4 flex-1">
        {/* Left: OpenTelemetry Trace Waterfall */}
        <div className="md:col-span-6 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-water mr-2"></i>Cascada de Trazas (Distributed Spans)
              </span>
              <span className="text-[10px] font-mono text-emerald-400">TRACE_ID: 7f8a9b2c</span>
            </div>

            <div className="space-y-2 mb-3">
              {spans.map((sp) => {
                const isSelected = slide11TraceStep === sp.id;
                return (
                  <div
                    key={sp.id}
                    onClick={() => handleStep(sp.id)}
                    className={`p-2 rounded-lg border cursor-pointer font-mono text-xs transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-cyan-950/60 border-cyan-400 glow-border-cyan text-white'
                        : 'bg-black/60 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] text-slate-500">#{sp.id}</span>
                      <span className={`font-bold ${sp.color}`}>{sp.name}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[10px]">
                      <span className="text-slate-500">{sp.type}</span>
                      <span className="text-white font-bold">{sp.duration}</span>
                      <span className="text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded">
                        {sp.status}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-2.5 bg-slate-950 rounded border border-slate-800 font-mono text-xs text-slate-400">
            <span className="text-cyan-400 font-bold block mb-0.5">Observabilidad Multinivel:</span>
            <span>Señales de Sistema (CPU, Memoria, Red) + Señales de Proceso (Token I/O, Tool Success Rate).</span>
          </div>
        </div>

        {/* Right: Anthropic 3-Agent Architecture & Sprint Contract */}
        <div className="md:col-span-6 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-users-gear mr-2"></i>Arquitectura de Tres Agentes (Anthropic)
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">SEPARACIÓN DE ROLES</span>
            </div>

            {/* 3 Agents Triangular Cards */}
            <div className="space-y-2.5 font-mono text-xs mb-3">
              <div className="p-2 rounded bg-black/70 border border-cyan-500/30 flex items-center justify-between">
                <div>
                  <span className="text-cyan-400 font-bold">1. MAKER AGENT (Creador)</span>
                  <div className="text-[10px] text-slate-400 mt-0.5">Su único objetivo es escribir código y resolver el problema.</div>
                </div>
                <i className="fa-solid fa-code text-cyan-400 text-sm"></i>
              </div>

              <div className="p-2 rounded bg-black/70 border border-red-500/30 flex items-center justify-between">
                <div>
                  <span className="text-red-400 font-bold">2. CHECKER AGENT (Adversario)</span>
                  <div className="text-[10px] text-slate-400 mt-0.5">Agente adversarial que busca romper el código del Maker.</div>
                </div>
                <i className="fa-solid fa-user-ninja text-red-400 text-sm"></i>
              </div>

              <div className="p-2 rounded bg-emerald-950/20 border border-emerald-500/50 flex items-center justify-between glow-border-green">
                <div>
                  <span className="text-emerald-400 font-bold">3. ORCHESTRATOR (Árbitro)</span>
                  <div className="text-[10px] text-slate-300 mt-0.5">Evalúa el Contrato Sprint y la Rúbrica Cuantitativa (0-100).</div>
                </div>
                <i className="fa-solid fa-scale-balanced text-emerald-400 text-sm"></i>
              </div>
            </div>
          </div>

          {/* Sprint Contract Card */}
          <div className="p-2.5 bg-slate-950 rounded border border-slate-800 font-mono text-xs">
            <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">Contrato Sprint: Dark Mode</div>
            <div className="text-[10px] text-slate-300 flex justify-between">
              <span>Scope: ThemeProvider &bull; Exclusions: Auth flow &bull; Rúbrica: &ge; 95 pts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="bg-black/80 border border-slate-800 p-3 rounded-lg font-mono text-xs text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-chart-pie text-emerald-400"></i>
          <span>Rúbrica del Evaluador:</span>
        </span>
        <span className="text-white font-semibold">
          "Transformar el juicio subjetivo de calidad en puntuaciones numéricas reproducibles."
        </span>
      </div>
    </div>
  );
};
