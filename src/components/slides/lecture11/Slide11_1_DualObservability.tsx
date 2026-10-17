import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide11_1_DualObservability: React.FC<Props> = () => {
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
            OBSERVABILIDAD MULTINIVEL: <span className="text-cyan-400">SISTEMA Y PROCESO</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          11.1 / 11.3
        </div>
      </motion.div>

      {/* Main Visual: Two Dimensions of Observability */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-stretch">
        {/* Left: Runtime System Observability */}
        <div className="p-6 rounded-2xl bg-black/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-server text-cyan-400"></i>1. Observabilidad de Sistema (Runtime)
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                INFRAESTRUCTURA
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-slate-300">CPU & Memoria del Runner</span>
                <span className="text-emerald-400 font-bold">14% CPU &bull; 412 MB</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-slate-300">Procesos & Códigos de Retorno</span>
                <span className="text-emerald-400 font-bold">exit_code == 0</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-slate-300">Llamadas de Red & Tráfico HTTP</span>
                <span className="text-cyan-400 font-bold">2.4 MB / 18 calls</span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center">
                <span className="text-slate-300">Operaciones de Disco (I/O)</span>
                <span className="text-cyan-400 font-bold">42 ops &bull; 0 lock contention</span>
              </div>
            </div>
          </div>

          <div className="text-xs font-mono text-slate-400 pt-3 border-t border-slate-800">
            Responde: "¿El entorno de ejecución está saludable y los procesos terminan limpiamente?"
          </div>
        </div>

        {/* Right: Process & Agentic Observability */}
        <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/50 glow-border-cyan flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-cyan-900/40 mb-4">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-brain text-emerald-400"></i>2. Observabilidad de Proceso (Agéntica)
              </span>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                INFERENCIA & DECISIÓN
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 bg-black/80 rounded-xl border border-emerald-500/40 flex justify-between items-center">
                <span className="text-slate-300">Consumo de Tokens (In / Out)</span>
                <span className="text-emerald-400 font-bold">14,280 in / 1,420 out</span>
              </div>
              <div className="p-3 bg-black/80 rounded-xl border border-emerald-500/40 flex justify-between items-center">
                <span className="text-slate-300">Tasa de Acierto de Tools</span>
                <span className="text-cyan-400 font-bold">94.2% (16/17 exitosas)</span>
              </div>
              <div className="p-3 bg-black/80 rounded-xl border border-emerald-500/40 flex justify-between items-center">
                <span className="text-slate-300">Profundidad de Turnos & Bucles</span>
                <span className="text-yellow-400 font-bold">Turno 4/12 &bull; Loop Risk: 0%</span>
              </div>
              <div className="p-3 bg-black/80 rounded-xl border border-emerald-500/40 flex justify-between items-center">
                <span className="text-slate-300">Latencia de Razonamiento (TTFT)</span>
                <span className="text-emerald-400 font-bold">420 ms TTFT &bull; 1.8s gen</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-cyan-950/40 border border-cyan-500/40 rounded-xl text-xs font-mono text-cyan-300 font-bold">
            Responde: "¿Por qué el agente eligió esta herramienta y si está atrapado en un bucle cognitivo?"
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-11-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-eye text-cyan-400"></i>
          <span>Dualidad Observacional:</span>
        </span>
        <span className="text-white font-semibold">
          "Un agente de software no es solo un proceso de Linux; es una máquina de inferencia estocástica con herramientas."
        </span>
      </motion.div>
    </div>
  );
};
