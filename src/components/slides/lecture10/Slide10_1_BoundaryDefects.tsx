import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide10_1_BoundaryDefects: React.FC<Props> = () => {
  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-10-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-network-wired text-emerald-400"></i>
            <span>SECCIÓN 10 &bull; PIPELINE DE VERIFICACIÓN E2E</span>
          </div>
          <motion.div layoutId="lecture-10-title" className="text-xl font-black text-white mt-1">
            DEFECTOS DE FRONTERA: <span className="text-red-400">CUANDO DOS COMPONENTES VERDES COLAPSAN</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-red-950/80 border border-red-500/50 text-red-300 rounded font-bold">
          10.1 / 10.3
        </div>
      </motion.div>

      {/* Main Visual: Boundary Defect Schematic */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-stretch">
        {/* Left: Disconnected Green Components */}
        <div className="p-6 rounded-2xl bg-black/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-puzzle-piece mr-2"></i>Módulos Aislados
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
                UNIT TESTS 100% GREEN
              </span>
            </div>

            <div className="space-y-4 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/40">
                <div className="text-emerald-400 font-bold mb-1">MÓDULO A (UI React)</div>
                <div className="text-[11px] text-slate-300">Unit Tests: 14/14 pasando en verde.</div>
                <div className="text-[10px] text-yellow-400 mt-1">Suposición: El payload viene en camelCase (orderStatus)</div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-emerald-500/40">
                <div className="text-emerald-400 font-bold mb-1">MÓDULO B (API FastAPI)</div>
                <div className="text-[11px] text-slate-300">Unit Tests: 22/22 pasando en verde.</div>
                <div className="text-[10px] text-yellow-400 mt-1">Suposición: El payload se serializa en snake_case (order_status)</div>
              </div>
            </div>
          </div>

          <div className="text-xs font-mono text-slate-400 pt-2 border-t border-slate-800">
            Ambos módulos son perfectos en aislamiento; ninguno sabe que el otro espera un contrato distinto.
          </div>
        </div>

        {/* Right: The Boundary Collapse in Integration */}
        <div className="p-6 rounded-2xl bg-red-950/20 border border-red-500/50 glow-border-cyan flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-red-900/40 mb-4">
              <span className="text-xs font-mono text-red-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-bolt text-red-400"></i> Colapso en la Frontera (E2E FAIL)
              </span>
              <span className="text-[10px] font-mono text-red-300 bg-red-950 px-2 py-0.5 rounded border border-red-900">
                RUNTIME CRASH
              </span>
            </div>

            <div className="p-4 rounded-xl bg-black/80 border border-red-500/40 font-mono text-xs space-y-2 mb-4">
              <div className="text-red-400 font-bold">TypeError: Cannot read properties of undefined</div>
              <div className="text-[11px] text-slate-300">
                La UI intentó leer <code className="text-cyan-300">data.orderStatus</code>, pero recibió <code className="text-yellow-300">data.order_status</code>.
              </div>
            </div>

            <div className="text-xs font-mono text-slate-300 leading-relaxed">
              Las pruebas unitarias nunca detectaron el problema porque cada una mockeaba la frontera con su propia suposición subjetiva.
            </div>
          </div>

          <div className="p-3 bg-red-950/40 border border-red-500/40 rounded-xl text-xs font-mono text-red-300 font-bold">
            Solución: El arnés debe incluir una suite de extremo a extremo que pruebe la frontera real.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-10-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-triangle-exclamation text-red-400"></i>
          <span>Axioma de Integración:</span>
        </span>
        <span className="text-white font-semibold">
          "Los componentes más peligrosos son aquellos que pasan sus pruebas aisladas y rompen el sistema al unirse."
        </span>
      </motion.div>
    </div>
  );
};
