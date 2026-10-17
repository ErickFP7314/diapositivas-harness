import React, { useMemo, useCallback } from 'react';
import { PresentationState, PresentationAction } from '../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide0_MiniHarness: React.FC<Props> = ({ state, dispatch }) => {
  const { slide0Path, slide0Step } = state;

  const setPath = useCallback(
    (path: 'api' | 'sdk' | 'local') => {
      dispatch({ type: 'SET_SLIDE_0_PATH', path });
    },
    [dispatch]
  );

  const nextStep = useCallback(() => {
    dispatch({ type: 'STEP_SLIDE_0', step: (slide0Step + 1) % 6 });
  }, [dispatch, slide0Step]);

  const prevStep = useCallback(() => {
    dispatch({ type: 'STEP_SLIDE_0', step: (slide0Step + 5) % 6 });
  }, [dispatch, slide0Step]);

  const stepsData = useMemo(
    () => [
      {
        phase: 'INPUT',
        label: 'OBJETIVO USUARIO',
        code: 'goal = "Inspeccionar directorio y crear reporte hello.txt"',
        target: 'HUMAN -> HARNESS',
        status: 'DISPATCHED',
      },
      {
        phase: 'PROMPT',
        label: 'INYECCIÓN HARNESS',
        code: 'messages = [SYSTEM_PROMPT, {role: "user", content: goal}]',
        target: 'HARNESS -> LLM',
        status: 'CONTEXT_BUILT',
      },
      {
        phase: 'INTENT',
        label: 'TOOL CALL EMITIDO',
        code: '{"name": "execute_bash", "args": {"command": "ls -la"}}',
        target: 'LLM -> HARNESS',
        status: 'TOOL_REQUESTED',
      },
      {
        phase: 'RUNTIME',
        label: 'EJECUCIÓN LOCAL',
        code: 'subprocess.run("ls -la", shell=True, capture_output=True)',
        target: 'HARNESS -> OS SHELL',
        status: 'SUBPROCESS_OK',
      },
      {
        phase: 'FEEDBACK',
        label: 'RETROALIMENTACIÓN',
        code: 'messages.append({"role": "tool", "content": stdout})',
        target: 'OS -> LLM CONTEXT',
        status: 'FEEDBACK_INJECTED',
      },
      {
        phase: 'DONE',
        label: 'CIERRE DETERMINISTA',
        code: 'finish_reason == "stop" -> [hello.txt CREADO & VERIFICADO]',
        target: 'AGENT -> SUCCESS',
        status: 'GOAL_ACHIEVED',
      },
    ],
    []
  );

  const currentStepData = useMemo(() => stepsData[slide0Step], [stepsData, slide0Step]);

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Top Banner: Core Equation */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-black/80 border border-cyan-500/40 p-4 rounded-lg flex items-center justify-between">
          <div>
            <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase">
              <i className="fa-solid fa-calculator mr-2"></i>Ecuación Fundamental
            </div>
            <div className="text-xl font-black text-white mt-1">
              AGENTE = <span className="text-cyan-400">MODELO</span> + <span className="text-emerald-400">HARNESS</span>
            </div>
          </div>
          <div className="text-2xl text-emerald-400 font-mono">
            <i className="fa-solid fa-infinity"></i>
          </div>
        </div>

        {/* 3 Paths Selector */}
        <div className="md:col-span-2 bg-black/80 border border-slate-800 p-2 rounded-lg flex items-center justify-between">
          <div className="text-xs text-slate-400 px-3 uppercase tracking-wider font-bold">
            <i className="fa-solid fa-arrow-right-from-bracket mr-2 text-cyan-400"></i>Vías de Desacoplamiento:
          </div>
          <div className="flex gap-2">
            {(['api', 'sdk', 'local'] as const).map((mode) => (
              <button
                key={mode}
                onClick={() => setPath(mode)}
                className={`px-3 py-1.5 rounded text-xs font-bold transition-all border ${
                  slide0Path === mode
                    ? 'bg-cyan-950/80 border-cyan-400 text-cyan-300 glow-border-cyan'
                    : 'bg-black/60 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <i
                  className={`mr-2 fa-solid ${
                    mode === 'api'
                      ? 'fa-cloud'
                      : mode === 'sdk'
                      ? 'fa-code'
                      : 'fa-server'
                  }`}
                ></i>
                {mode === 'api' ? '1. API REST' : mode === 'sdk' ? '2. SDK PYTHON' : '3. LOCAL (OLLAMA)'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Centerpiece: Interactive Mini-Harness ReAct Loop Pipeline */}
      <div className="my-4 bg-black/90 border border-slate-800 rounded-xl p-5 relative overflow-hidden">
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
              <i className="fa-solid fa-circle-nodes mr-2"></i>Mini Harness Runtime Simulator (Python SDK)
            </span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={prevStep}
              className="px-2.5 py-1 text-xs bg-slate-900 border border-slate-700 rounded text-slate-300 hover:border-cyan-400"
            >
              <i className="fa-solid fa-backward-step"></i>
            </button>
            <span className="text-xs font-mono text-cyan-400 px-2 font-bold">
              FASE {slide0Step + 1} / 6
            </span>
            <button
              onClick={nextStep}
              className="px-2.5 py-1 text-xs bg-cyan-950 border border-cyan-500 rounded text-cyan-300 hover:bg-cyan-900 font-bold"
            >
              <i className="fa-solid fa-forward-step mr-1"></i> Avanzar Paso
            </button>
          </div>
        </div>

        {/* Dynamic ReAct Nodes Track */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-2 my-5">
          {stepsData.map((s, idx) => (
            <div
              key={idx}
              onClick={() => dispatch({ type: 'STEP_SLIDE_0', step: idx })}
              className={`p-3 rounded-lg border cursor-pointer transition-all ${
                slide0Step === idx
                  ? 'bg-cyan-950/60 border-cyan-400 glow-cyan'
                  : idx < slide0Step
                  ? 'bg-emerald-950/20 border-emerald-500/50 text-emerald-400'
                  : 'bg-black/50 border-slate-800 text-slate-600'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="text-[10px] font-bold font-mono">0{idx + 1}</span>
                <i
                  className={`text-xs fa-solid ${
                    idx === 0
                      ? 'fa-user'
                      : idx === 1
                      ? 'fa-microchip'
                      : idx === 2
                      ? 'fa-code-branch'
                      : idx === 3
                      ? 'fa-terminal'
                      : idx === 4
                      ? 'fa-rotate'
                      : 'fa-check-double'
                  }`}
                ></i>
              </div>
              <div className="text-[11px] font-bold truncate">{s.label}</div>
              <div className="text-[9px] opacity-70 mt-1 font-mono truncate">{s.target}</div>
            </div>
          ))}
        </div>

        {/* Simulated Execution Terminal */}
        <div className="bg-[#05080c] border border-cyan-500/30 rounded-lg p-3 font-mono text-xs">
          <div className="flex justify-between text-slate-500 text-[10px] pb-1 border-b border-slate-800/80 mb-2">
            <span>TERMINAL RUNTIME &bull; STDOUT FEEDBACK</span>
            <span className="text-emerald-400 font-bold">STATUS: {currentStepData.status}</span>
          </div>
          <div className="text-cyan-400 font-semibold mb-1">
            <span className="text-slate-500">$ </span>
            {currentStepData.code}
          </div>
          <div className="text-slate-400 text-[11px] flex items-center gap-2">
            <i className="fa-solid fa-angle-right text-emerald-400"></i>
            <span>Flujo: {currentStepData.target} &bull; {slide0Path.toUpperCase()} Runtime</span>
          </div>
        </div>
      </div>

      {/* Bottom Comparison Grid: Commercial Harnesses vs Pi Agent */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="bg-black/60 border border-slate-800/80 p-3 rounded-lg">
          <div className="text-[11px] text-slate-400 font-bold flex items-center justify-between">
            <span>Claude Code</span>
            <i className="fa-solid fa-lock text-slate-600"></i>
          </div>
          <div className="text-[10px] text-slate-500 mt-1">Anthropic CLI &bull; TypeScript</div>
          <div className="text-[10px] text-cyan-400 mt-1 font-mono font-bold">Harness Cerrado + Hooks</div>
        </div>

        <div className="bg-black/60 border border-slate-800/80 p-3 rounded-lg">
          <div className="text-[11px] text-slate-400 font-bold flex items-center justify-between">
            <span>OpenAI Codex</span>
            <i className="fa-solid fa-cloud text-slate-600"></i>
          </div>
          <div className="text-[10px] text-slate-500 mt-1">Assistants API &bull; Cloud Sandbox</div>
          <div className="text-[10px] text-cyan-400 mt-1 font-mono font-bold">Caja Negra Hospedada</div>
        </div>

        <div className="bg-black/60 border border-slate-800/80 p-3 rounded-lg">
          <div className="text-[11px] text-slate-400 font-bold flex items-center justify-between">
            <span>Antigravity</span>
            <i className="fa-solid fa-robot text-slate-600"></i>
          </div>
          <div className="text-[10px] text-slate-500 mt-1">DeepMind &bull; Multi-Agente</div>
          <div className="text-[10px] text-cyan-400 mt-1 font-mono font-bold">Orquestador de Skills</div>
        </div>

        {/* Selected Target: Pi Agent */}
        <div className="bg-emerald-950/30 border border-emerald-400/80 p-3 rounded-lg glow-border-green">
          <div className="text-[11px] text-emerald-300 font-bold flex items-center justify-between">
            <span>Pi Agent (Elección)</span>
            <i className="fa-solid fa-star text-emerald-400"></i>
          </div>
          <div className="text-[10px] text-emerald-400 mt-1 font-bold">4 Primitivas: read, write, edit, bash</div>
          <div className="text-[10px] text-white mt-1 font-mono font-bold">0% Bloatware &bull; 100% Hackeable</div>
        </div>
      </div>
    </div>
  );
};
