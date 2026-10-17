import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide00_2_ThreePaths: React.FC<Props> = ({ state, dispatch }) => {
  const { slide0Path } = state;

  const setPath = useCallback(
    (path: 'api' | 'sdk' | 'local') => {
      dispatch({ type: 'SET_SLIDE_0_PATH', path });
    },
    [dispatch]
  );

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
            DESACOPLAMIENTO: <span className="text-cyan-400">3 VÍAS PARA SALIR DEL CHAT</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          00.2 / 00.4
        </div>
      </motion.div>

      {/* Main Interactive Comparison Grid for the 3 Decoupling Paths */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-3 gap-4 flex-1">
        {/* Path 1: Direct API */}
        <motion.div
          onClick={() => setPath('api')}
          whileHover={{ y: -4 }}
          className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
            slide0Path === 'api'
              ? 'bg-cyan-950/40 border-cyan-400 glow-border-cyan'
              : 'bg-black/80 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="h-8 w-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 text-sm">
                <i className="fa-solid fa-cloud"></i>
              </span>
              <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                HTTP / REST
              </span>
            </div>

            <div className="text-sm font-bold text-white mb-1">1. API Directa (REST)</div>
            <div className="text-xs text-slate-400 font-mono mb-3">
              POST /v1/chat/completions con streaming de eventos SSE.
            </div>

            <div className="space-y-2 text-[11px] font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-cyan-400"></i>
                <span>Control total de headers y payloads</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-cyan-400"></i>
                <span>Cero dependencias externas pesadas</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-cyan-400"></i>
                <span>Streaming SSE evento por evento</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
            Casos: Gateways corporativos, microservicios en Go/Rust.
          </div>
        </motion.div>

        {/* Path 2: Programmatic SDK */}
        <motion.div
          onClick={() => setPath('sdk')}
          whileHover={{ y: -4 }}
          className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
            slide0Path === 'sdk'
              ? 'bg-emerald-950/40 border-emerald-400 glow-border-green'
              : 'bg-black/80 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="h-8 w-8 rounded-lg bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400 text-sm">
                <i className="fa-solid fa-code"></i>
              </span>
              <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-800">
                PYTHON / TS
              </span>
            </div>

            <div className="text-sm font-bold text-white mb-1">2. SDK Programático</div>
            <div className="text-xs text-slate-400 font-mono mb-3">
              Librerías oficiales tipadas (openai, anthropic, google-genai).
            </div>

            <div className="space-y-2 text-[11px] font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-emerald-400"></i>
                <span>Reintentos automáticos con backoff</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-emerald-400"></i>
                <span>Validación estricta de Function Calling</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-emerald-400"></i>
                <span>Tipado estricto con Pydantic / TypeScript</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-emerald-400 font-bold">
            Recomendado para pipelines de ingeniería e integración rápida.
          </div>
        </motion.div>

        {/* Path 3: Local LLMs */}
        <motion.div
          onClick={() => setPath('local')}
          whileHover={{ y: -4 }}
          className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
            slide0Path === 'local'
              ? 'bg-cyan-950/40 border-cyan-400 glow-border-cyan'
              : 'bg-black/80 border-slate-800 hover:border-slate-700'
          }`}
        >
          <div>
            <div className="flex justify-between items-center mb-3">
              <span className="h-8 w-8 rounded-lg bg-cyan-950 border border-cyan-500/40 flex items-center justify-center text-cyan-400 text-sm">
                <i className="fa-solid fa-server"></i>
              </span>
              <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                OLLAMA / VLLM
              </span>
            </div>

            <div className="text-sm font-bold text-white mb-1">3. Modelos Locales</div>
            <div className="text-xs text-slate-400 font-mono mb-3">
              Inferencia en infraestructura propia vía localhost:11434.
            </div>

            <div className="space-y-2 text-[11px] font-mono text-slate-300">
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-cyan-400"></i>
                <span>Soberanía total de datos y código fuente</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-cyan-400"></i>
                <span>Costo nulo por token y ejecución offline</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fa-solid fa-check text-cyan-400"></i>
                <span>Latencia de red = 0 milisegundos</span>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
            Casos: Código propietario confidencial, air-gapped environments.
          </div>
        </motion.div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-0-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-network-wired text-cyan-400"></i>
          <span>Vía Activa:</span>
        </span>
        <span className="text-white font-semibold">
          {slide0Path === 'api'
            ? 'API REST Directa &bull; Endpoint crudo /v1/chat/completions'
            : slide0Path === 'sdk'
            ? 'SDK Programático Tipado &bull; Abstracción de Tool Dispatching'
            : 'Modelos Locales &bull; Inferencia Privada con Ollama / vLLM'}
        </span>
      </motion.div>
    </div>
  );
};
