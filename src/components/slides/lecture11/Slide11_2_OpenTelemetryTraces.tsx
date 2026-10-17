import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide11_2_OpenTelemetryTraces: React.FC<Props> = ({ state, dispatch }) => {
  const { slide11TraceStep } = state;

  const handleStep = useCallback(
    (step: number) => {
      dispatch({ type: 'STEP_SLIDE_11', step });
    },
    [dispatch]
  );

  const spans = useMemo(
    () => [
      {
        id: 0,
        name: 'root.agent_turn',
        type: 'ORCHESTRATOR',
        duration: '4.2s',
        status: 'OK',
        color: 'text-cyan-400',
        barWidth: '100%',
        offset: '0%',
        attributes: {
          'session.id': 'sess_99a8b1c',
          'turn.index': 3,
          'orchestrator.strategy': 'ReAct_Loop',
        },
      },
      {
        id: 1,
        name: 'llm.completion.inference',
        type: 'MODEL',
        duration: '1.8s',
        status: 'OK',
        color: 'text-emerald-400',
        barWidth: '42%',
        offset: '5%',
        attributes: {
          'gen_ai.model': 'claude-3-7-sonnet',
          'prompt_tokens': 12450,
          'completion_tokens': 380,
          'temperature': 0.1,
        },
      },
      {
        id: 2,
        name: 'tool.dispatch:execute_bash',
        type: 'TOOL_BUS',
        duration: '0.6s',
        status: 'OK',
        color: 'text-yellow-400',
        barWidth: '14%',
        offset: '48%',
        attributes: {
          'tool.name': 'execute_bash',
          'command': 'pytest tests/test_auth.py -v',
          'exit_code': 0,
        },
      },
      {
        id: 3,
        name: 'verifier.pytest_suite',
        type: 'CHECKS',
        duration: '1.4s',
        status: 'OK',
        color: 'text-emerald-400',
        barWidth: '33%',
        offset: '62%',
        attributes: {
          'tests.passed': 18,
          'tests.failed': 0,
          'assertions.total': 54,
        },
      },
      {
        id: 4,
        name: 'state.commit_progress',
        type: 'PERSISTENCE',
        duration: '0.4s',
        status: 'OK',
        color: 'text-cyan-400',
        barWidth: '10%',
        offset: '90%',
        attributes: {
          'file.path': 'PROGRESS.md',
          'git.status': 'clean',
          'commit.hash': '9f3e1a0',
        },
      },
    ],
    []
  );

  const selectedSpan = spans[slide11TraceStep] || spans[0];

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-11-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-gauge-high text-emerald-400"></i>
            <span>SECCIÓN 11 &bull; AGENTE OBSERVABLE & TELEMETRÍA OPENTELEMETRY</span>
          </div>
          <motion.div layoutId="lecture-11-title" className="text-xl font-black text-white mt-1">
            ESTANDARIZACIÓN CON OPENTELEMETRY: <span className="text-cyan-400">CASCADA DE SPANS</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          11.2 / 11.3
        </div>
      </motion.div>

      {/* Main Grid: Waterfall Spans + Span Details Inspector */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-stretch">
        {/* Left: Waterfall visualization */}
        <div className="md:col-span-7 p-6 rounded-2xl bg-black/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-water text-cyan-400"></i> OpenTelemetry Trace (OTLP Distributed)
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-900">
                TRACE: 0x7f8a9b2c
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {spans.map((sp) => {
                const isSelected = slide11TraceStep === sp.id;
                return (
                  <div
                    key={sp.id}
                    onClick={() => handleStep(sp.id)}
                    className={`p-3 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-cyan-950/60 border-cyan-400 glow-border-cyan text-white'
                        : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-slate-500 font-mono">#{sp.id}</span>
                        <span className={`font-bold ${sp.color}`}>{sp.name}</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px]">
                        <span className="text-slate-400">{sp.duration}</span>
                        <span className="text-emerald-400 bg-emerald-950 px-1.5 py-0.5 rounded">
                          {sp.status}
                        </span>
                      </div>
                    </div>

                    {/* Timeline bar */}
                    <div className="w-full bg-slate-900 h-1.5 rounded-full overflow-hidden flex relative">
                      <div
                        style={{ marginLeft: sp.offset, width: sp.barWidth }}
                        className={`h-full rounded-full transition-all duration-300 ${
                          isSelected ? 'bg-cyan-400' : 'bg-slate-600'
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="text-xs font-mono text-slate-400 pt-3 border-t border-slate-800">
            Haz clic en cualquier span para inspeccionar sus atributos de telemetría a la derecha.
          </div>
        </div>

        {/* Right: Span Inspector */}
        <div className="md:col-span-5 p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/50 glow-border-cyan flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-cyan-900/40 mb-4">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-circle-info text-emerald-400"></i> Inspector de Span
              </span>
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                {selectedSpan.type}
              </span>
            </div>

            <div className="p-3 bg-black/80 rounded-xl border border-cyan-500/30 mb-4 font-mono text-xs">
              <div className="text-cyan-300 font-bold mb-1">{selectedSpan.name}</div>
              <div className="text-[11px] text-slate-400">Duración: <span className="text-white font-bold">{selectedSpan.duration}</span> &bull; Estado: <span className="text-emerald-400">{selectedSpan.status}</span></div>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Atributos OTLP:</div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-2 text-[11px]">
                {Object.entries(selectedSpan.attributes).map(([key, val]) => (
                  <div key={key} className="flex justify-between items-center border-b border-slate-900 pb-1 last:border-0 last:pb-0">
                    <span className="text-slate-400">{key}:</span>
                    <span className="text-emerald-300 font-bold">{String(val)}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-3 bg-cyan-950/40 border border-cyan-500/40 rounded-xl text-xs font-mono text-cyan-300 font-bold">
            Permite diagnosticar instantáneamente si la latencia proviene de la API o de tests locales.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-11-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-diagram-project text-cyan-400"></i>
          <span>Estandarización OTLP:</span>
        </span>
        <span className="text-white font-semibold">
          "Spans jerárquicos y trazas distribuidas permiten diagnosticar cuellos de botella en milisegundos."
        </span>
      </motion.div>
    </div>
  );
};
