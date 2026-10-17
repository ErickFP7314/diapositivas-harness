import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide00_3_ReactLoop: React.FC<Props> = ({ state, dispatch }) => {
  const { slide0Step } = state;

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

  const currentStep = useMemo(() => stepsData[slide0Step], [stepsData, slide0Step]);

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-0-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-terminal text-emerald-400"></i>
            <span>SECCIÓN 00 &bull; FUNDAMENTOS DEL HARNESS</span>
          </div>
          <motion.div layoutId="lecture-0-equation" className="text-xl font-black text-white mt-1">
            ANATOMÍA DEL MINI HARNESS: <span className="text-emerald-400">LOOP REACT & RUNTIME</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          00.3 / 00.4
        </div>
      </motion.div>

      {/* Main Interactive ReAct Loop Simulator */}
      <div className="my-5 bg-black/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 animate-ping"></span>
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase">
                <i className="fa-solid fa-circle-nodes mr-2"></i>Runtime Simulator &bull; Subprocess Loop
              </span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={prevStep}
                className="px-3 py-1.5 text-xs bg-slate-900 border border-slate-700 rounded-lg text-slate-300 hover:border-cyan-400"
              >
                <i className="fa-solid fa-backward-step"></i>
              </button>
              <span className="text-xs font-mono text-cyan-400 px-3 font-bold">
                PASO {slide0Step + 1} / 6
              </span>
              <button
                onClick={nextStep}
                className="px-3 py-1.5 text-xs bg-cyan-950 border border-cyan-500 rounded-lg text-cyan-300 hover:bg-cyan-900 font-bold"
              >
                <i className="fa-solid fa-forward-step mr-1"></i> Siguiente Paso
              </button>
            </div>
          </div>

          {/* 6 Steps Progress Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-6 gap-2 my-5">
            {stepsData.map((s, idx) => (
              <div
                key={idx}
                onClick={() => dispatch({ type: 'STEP_SLIDE_0', step: idx })}
                className={`p-3 rounded-xl border cursor-pointer transition-all ${
                  slide0Step === idx
                    ? 'bg-cyan-950/60 border-cyan-400 glow-border-cyan'
                    : idx < slide0Step
                    ? 'bg-emerald-950/20 border-emerald-500/50 text-emerald-400'
                    : 'bg-black/50 border-slate-800 text-slate-600'
                }`}
              >
                <div className="flex justify-between items-center mb-1 text-[10px] font-mono font-bold">
                  <span>0{idx + 1}</span>
                  <span className="text-slate-400">{s.phase}</span>
                </div>
                <div className="text-[11px] font-bold truncate text-white">{s.label}</div>
                <div className="text-[9px] font-mono mt-1 opacity-70 truncate">{s.target}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Terminal & Trace Inspector */}
        <div className="bg-[#05080c] border border-cyan-500/30 rounded-xl p-4 font-mono text-xs">
          <div className="flex justify-between text-slate-500 text-[10px] pb-2 border-b border-slate-800/80 mb-2">
            <span>TERMINAL RUNTIME &bull; STDOUT STREAM</span>
            <span className="text-emerald-400 font-bold">STATUS: {currentStep.status}</span>
          </div>
          <div className="text-cyan-400 font-semibold mb-1.5 text-sm">
            <span className="text-slate-600">$ </span>
            {currentStep.code}
          </div>
          <div className="text-slate-400 text-xs flex items-center gap-2">
            <i className="fa-solid fa-angle-right text-emerald-400"></i>
            <span>Dirección: {currentStep.target} &bull; Protocolo ReAct en Ciclo Cerrado</span>
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-0-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-gear text-emerald-400"></i>
          <span>Mecanismo Central:</span>
        </span>
        <span className="text-white font-semibold">
          "El LLM emite tool_calls estructurados en JSON; el harness en Python ejecuta la acción en la máquina física."
        </span>
      </motion.div>
    </div>
  );
};
