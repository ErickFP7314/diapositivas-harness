import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide00_4_PiAgent: React.FC<Props> = () => {
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
            ECOSISTEMA: <span className="text-cyan-400">CLAUDE / CODEX</span> VS <span className="text-emerald-400">PI AGENT</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 rounded font-bold">
          00.4 / 00.4
        </div>
      </motion.div>

      {/* Main Comparison Grid */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-4 gap-4 flex-1 items-stretch">
        {/* Claude Code */}
        <div className="bg-black/80 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold text-white">Claude Code</span>
              <i className="fa-solid fa-lock text-slate-500"></i>
            </div>
            <div className="text-xs text-slate-400 font-mono mb-3">Anthropic &bull; TypeScript CLI</div>
            <div className="text-[11px] text-slate-300 space-y-2 font-mono">
              <div>&bull; Harness CLI cerrado de frontera</div>
              <div>&bull; Compactación automática</div>
              <div>&bull; Opinionado y acoplado a Sonnet</div>
            </div>
          </div>
          <div className="text-[10px] text-yellow-400 font-mono bg-yellow-950/30 p-2 rounded border border-yellow-900/50">
            Bloatware: Medio &bull; Extensible con Hooks
          </div>
        </div>

        {/* OpenAI Codex */}
        <div className="bg-black/80 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold text-white">OpenAI Codex</span>
              <i className="fa-solid fa-cloud text-slate-500"></i>
            </div>
            <div className="text-xs text-slate-400 font-mono mb-3">Assistants API &bull; Cloud Runtime</div>
            <div className="text-[11px] text-slate-300 space-y-2 font-mono">
              <div>&bull; Sandbox en nube efímero</div>
              <div>&bull; Code Interpreter Jupyter</div>
              <div>&bull; Servidor 100% inaccesible</div>
            </div>
          </div>
          <div className="text-[10px] text-red-400 font-mono bg-red-950/30 p-2 rounded border border-red-900/50">
            Caja Negra Hospedada en la Nube
          </div>
        </div>

        {/* Antigravity */}
        <div className="bg-black/80 border border-slate-800 p-5 rounded-2xl flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold text-white">Antigravity</span>
              <i className="fa-solid fa-robot text-slate-500"></i>
            </div>
            <div className="text-xs text-slate-400 font-mono mb-3">Google DeepMind &bull; Multi-Agente</div>
            <div className="text-[11px] text-slate-300 space-y-2 font-mono">
              <div>&bull; Subagentes especializados</div>
              <div>&bull; Integración con Engram / MCP</div>
              <div>&bull; Orquestador robusto</div>
            </div>
          </div>
          <div className="text-[10px] text-cyan-400 font-mono bg-cyan-950/30 p-2 rounded border border-cyan-900/50">
            Sistema Completo de Alta Complejidad
          </div>
        </div>

        {/* Pi Agent - Selected Target */}
        <div className="bg-emerald-950/30 border border-emerald-400 rounded-2xl p-5 flex flex-col justify-between glow-border-green">
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-black text-emerald-300">Pi Agent</span>
              <i className="fa-solid fa-star text-emerald-400"></i>
            </div>
            <div className="text-xs text-emerald-400 font-mono mb-3 font-bold">Mario Zechner &bull; Cero Bloat</div>
            <div className="text-[11px] text-slate-100 space-y-2 font-mono">
              <div className="flex items-center gap-1.5 text-emerald-300 font-bold">
                <i className="fa-solid fa-check"></i>
                <span>4 Primitivas Atómicas:</span>
              </div>
              <div className="text-[10px] text-slate-300 pl-4 space-y-0.5">
                <div>&bull; read (inspección de archivos)</div>
                <div>&bull; write (escritura atómica)</div>
                <div>&bull; edit (parches quirúrgicos)</div>
                <div>&bull; bash (ejecución de shell)</div>
              </div>
              <div>&bull; Prompt base &lt; 1000 tokens</div>
              <div>&bull; 100% código abierto y auditable</div>
            </div>
          </div>
          <div className="text-[10px] text-black font-bold font-mono bg-emerald-400 p-2 rounded text-center glow-green">
            NUESTRO LABORATORIO DE ESTUDIO
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-0-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-award text-emerald-400"></i>
          <span>Decisión Arquitectónica:</span>
        </span>
        <span className="text-white font-semibold">
          "Usamos Pi Agent por su pureza minimalista: dominar las 4 primitivas atómicas sin la opacidad del software inflado."
        </span>
      </motion.div>
    </div>
  );
};
