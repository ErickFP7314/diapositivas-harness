import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide00_1_Equation: React.FC<Props> = () => {
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
            AGENTE = <span className="text-cyan-400">MODELO (LLM)</span> + <span className="text-emerald-400">HARNESS</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          00.1 / 00.4
        </div>
      </motion.div>

      {/* Main Visual: Isolated LLM in the Chat Cage vs Autonomous Agent */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-center">
        {/* Left: Golden Cage of Chat Web */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-black/80 border border-red-500/30 rounded-2xl p-6 flex flex-col justify-between h-[380px] relative overflow-hidden"
        >
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-red-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-red-900/40">
              <span className="text-xs font-mono text-red-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <i className="fa-solid fa-lock"></i> La Jaula Dorada del Chat Web
              </span>
              <span className="text-[10px] font-mono text-red-400 bg-red-950 px-2 py-0.5 rounded border border-red-800">
                SANDBOX PASIVO
              </span>
            </div>

            <div className="h-44 bg-slate-950/90 rounded-xl border border-slate-800/80 p-4 flex flex-col items-center justify-center text-center relative">
              <div className="h-16 w-16 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 flex items-center justify-center text-2xl text-cyan-400 mb-3">
                <i className="fa-solid fa-brain"></i>
              </div>
              <div className="text-xs font-bold text-white">Modelo LLM Aislado</div>
              <div className="text-[11px] text-slate-400 mt-1">
                Razonamiento probabilístico sin ojos, manos ni acceso a terminal.
              </div>
              <div className="mt-3 flex gap-2 text-[10px] font-mono text-red-400">
                <span className="bg-red-950/50 px-2 py-0.5 rounded border border-red-900">Sin disco</span>
                <span className="bg-red-950/50 px-2 py-0.5 rounded border border-red-900">Sin compilador</span>
                <span className="bg-red-950/50 px-2 py-0.5 rounded border border-red-900">Sin tests</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-xl text-xs font-mono text-slate-300">
            <span className="text-red-400 font-bold block mb-1">
              <i className="fa-solid fa-triangle-exclamation mr-1"></i>El Cuello de Botella Humano:
            </span>
            El desarrollador se convierte en un arnés manual: copiar código, pegar, compilar, ver el error y volver a copiar.
          </div>
        </motion.div>

        {/* Right: The Complete Agent with Harness */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-black/80 border border-emerald-500/40 rounded-2xl p-6 flex flex-col justify-between h-[380px] glow-border-green relative overflow-hidden"
        >
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div>
            <div className="flex justify-between items-center mb-4 pb-2 border-b border-emerald-900/40">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <i className="fa-solid fa-network-wired"></i> Agente de Software Autónomo
              </span>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/40">
                CICLO CERRADO
              </span>
            </div>

            <div className="h-44 bg-slate-950/90 rounded-xl border border-emerald-500/30 p-4 flex flex-col justify-between relative">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="p-2 rounded bg-black/60 border border-cyan-500/40">
                  <i className="fa-solid fa-toolbox text-cyan-400 text-sm mb-1 block"></i>
                  <div className="text-[10px] font-bold text-white">Herramientas</div>
                  <div className="text-[9px] text-slate-400">read, write, bash</div>
                </div>
                <div className="p-2 rounded bg-black/60 border border-emerald-500/40">
                  <i className="fa-solid fa-microchip text-emerald-400 text-sm mb-1 block"></i>
                  <div className="text-[10px] font-bold text-white">LLM Inferencia</div>
                  <div className="text-[9px] text-slate-400">tool_call JSON</div>
                </div>
                <div className="p-2 rounded bg-black/60 border border-cyan-500/40">
                  <i className="fa-solid fa-rotate text-cyan-400 text-sm mb-1 block"></i>
                  <div className="text-[10px] font-bold text-white">Feedback</div>
                  <div className="text-[9px] text-slate-400">stdout & stderr</div>
                </div>
              </div>

              <div className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-500/50 text-[11px] font-mono text-emerald-300">
                <span>Interacción determinista con el SO</span>
                <i className="fa-solid fa-check-double text-emerald-400"></i>
              </div>
            </div>
          </div>

          <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-xl text-xs font-mono text-slate-300">
            <span className="text-emerald-400 font-bold block mb-1">
              <i className="fa-solid fa-circle-check mr-1"></i>Autonomía Verificable:
            </span>
            El arnés gobierna contexto, permisos, persistencia de estado y validación sin intervención manual.
          </div>
        </motion.div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-0-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-quote-left text-cyan-400"></i>
          <span>Tesis Central:</span>
        </span>
        <span className="text-white font-semibold">
          "El modelo es solo el motor; el harness es la transmisión, los frenos y la instrumentación."
        </span>
      </motion.div>
    </div>
  );
};
