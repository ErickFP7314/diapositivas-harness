import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide11_3_ThreeAgentArchitecture: React.FC<Props> = () => {
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
            ARQUITECTURA DE TRES AGENTES: <span className="text-emerald-400">PATRÓN ANTHROPIC</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 rounded font-bold">
          11.3 / 11.3
        </div>
      </motion.div>

      {/* Main Grid: 3 Roles vs Sprint Contract & Rubric */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-stretch">
        {/* Left: 3 Agents Triangular Cards */}
        <div className="p-6 rounded-2xl bg-black/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-users-gear text-cyan-400"></i> Separación Estricta de Responsabilidades
              </span>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-900">
                TRIANGULACIÓN
              </span>
            </div>

            <div className="space-y-3.5 font-mono text-xs">
              {/* Maker */}
              <div className="p-3.5 rounded-xl bg-black/70 border border-cyan-500/40 flex items-center justify-between">
                <div>
                  <div className="text-cyan-400 font-bold flex items-center gap-2">
                    <i className="fa-solid fa-code text-cyan-400"></i>
                    <span>1. MAKER AGENT (Creador)</span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                    Escribe la implementación y resuelve la feature funcional. Sesgo natural: optimista y complaciente.
                  </div>
                </div>
              </div>

              {/* Checker */}
              <div className="p-3.5 rounded-xl bg-black/70 border border-red-500/40 flex items-center justify-between">
                <div>
                  <div className="text-red-400 font-bold flex items-center gap-2">
                    <i className="fa-solid fa-user-ninja text-red-400"></i>
                    <span>2. CHECKER AGENT (Adversario)</span>
                  </div>
                  <div className="text-[11px] text-slate-300 mt-1 leading-relaxed">
                    Agente hostil con incentivos para romper el código del Maker mediante fuzzing, inyecciones y edge cases.
                  </div>
                </div>
              </div>

              {/* Orchestrator */}
              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/50 flex items-center justify-between glow-border-green">
                <div>
                  <div className="text-emerald-400 font-bold flex items-center gap-2">
                    <i className="fa-solid fa-scale-balanced text-emerald-400"></i>
                    <span>3. ORCHESTRATOR (Árbitro)</span>
                  </div>
                  <div className="text-[11px] text-slate-200 mt-1 leading-relaxed">
                    Supervisa el contrato de sprint y evalúa la rúbrica numérica (0-100). Imparcial e incorruptible.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-xs font-mono text-slate-400 pt-3 border-t border-slate-800">
            Elimina por completo el sesgo de auto-aprobación del modelo de lenguaje.
          </div>
        </div>

        {/* Right: Sprint Contract & Quantitative Rubric Artifact */}
        <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/50 glow-border-cyan flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-cyan-900/40 mb-4">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-file-contract text-emerald-400"></i> Sprint Contract & Rúbrica
              </span>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                PUNTUACIÓN: 97 / 100
              </span>
            </div>

            {/* Contract definition */}
            <div className="p-3.5 rounded-xl bg-black/80 border border-cyan-500/30 mb-4 font-mono text-xs space-y-1.5">
              <div className="text-cyan-300 font-bold text-xs uppercase">Contrato Sprint: Feature Cart Checkout</div>
              <div className="text-[11px] text-slate-300">&bull; Alcance: Endpoints POST /checkout & DTOs</div>
              <div className="text-[11px] text-slate-400">&bull; Exclusiones: Pasarela Stripe real (usar sandbox)</div>
              <div className="text-[11px] text-emerald-400 font-bold">&bull; Criterio de Pase: Rúbrica &ge; 90 puntos</div>
            </div>

            {/* Scorecard */}
            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-300">Seguridad & Sanitización</span>
                <span className="text-emerald-400 font-bold">30 / 30 pts</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-300">Cobertura de Pruebas Unitarias</span>
                <span className="text-emerald-400 font-bold">35 / 35 pts</span>
              </div>
              <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 flex justify-between items-center">
                <span className="text-slate-300">Higiene Arquitectónica & Tipado</span>
                <span className="text-emerald-400 font-bold">32 / 35 pts</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-xs font-mono text-emerald-300 font-bold flex items-center justify-between">
            <span>Veredicto del Árbitro:</span>
            <span className="bg-emerald-900/80 px-2 py-0.5 rounded text-white">APROBADO PARA MERGE</span>
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-11-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-scale-unbalanced text-cyan-400"></i>
          <span>Separación de Poderes:</span>
        </span>
        <span className="text-white font-semibold">
          "El creador no puede ser el auditor. El arbitraje adversario garantiza software libre de complacencia."
        </span>
      </motion.div>
    </div>
  );
};
