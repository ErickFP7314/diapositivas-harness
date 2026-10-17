import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide02_3_FeedbackRoi: React.FC<Props> = () => {
  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-2-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-layer-group text-emerald-400"></i>
            <span>SECCIÓN 02 &bull; EL MODELO DE 5 SUBSISTEMAS</span>
          </div>
          <motion.div layoutId="lecture-2-title" className="text-xl font-black text-white mt-1">
            RETROALIMENTACIÓN: <span className="text-emerald-400">MÁXIMO RETORNO DE INVERSIÓN</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 rounded font-bold">
          02.3 / 02.3
        </div>
      </motion.div>

      {/* Main Dual Cards: Feedback Dominance vs Harness Debt */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-stretch">
        {/* Left: Feedback Subsystem Dominance */}
        <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-400/80 glow-border-green flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-emerald-900/40 mb-4">
              <span className="text-xs font-mono text-emerald-300 font-bold uppercase tracking-wider flex items-center gap-2">
                <i className="fa-solid fa-star text-emerald-400"></i> La Inversión con Mayor ROI
              </span>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/50">
                ALTO RETORNO
              </span>
            </div>

            <div className="text-sm font-bold text-white mb-2">Comandos de Verificación Determinista</div>
            <div className="text-xs text-slate-300 font-mono mb-4 leading-relaxed">
              Configurar pytest o linters requiere minutos, pero le da al LLM un espejo exacto contra la realidad física de la ejecución.
            </div>

            <div className="p-4 rounded-xl bg-black/80 border border-emerald-500/40 font-mono text-xs space-y-2">
              <div className="text-emerald-400 font-bold">Batería de Checks en AGENTS.md:</div>
              <div className="text-slate-300">&bull; Tests: pytest tests/ -x</div>
              <div className="text-slate-300">&bull; Type check: mypy src/ --strict</div>
              <div className="text-slate-300">&bull; Lint: ruff check src/</div>
              <div className="text-cyan-300 font-bold">&bull; Full check: make check</div>
            </div>
          </div>

          <div className="text-xs font-mono text-emerald-300 pt-3 border-t border-emerald-900/40">
            Primero, ejecuta correctamente tus comandos de verificación antes de crear prompts largos.
          </div>
        </div>

        {/* Right: Paying Harness Technical Debt */}
        <div className="p-6 rounded-2xl bg-black/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
                <i className="fa-solid fa-recycle"></i> Pagar la Deuda del Arnés
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                MANTENIMIENTO
              </span>
            </div>

            <div className="text-sm font-bold text-white mb-2">El Arnés se Pudre como el Código</div>
            <div className="text-xs text-slate-300 font-mono mb-4 leading-relaxed">
              Las instrucciones envejecen, las versiones cambian y los scripts de prueba acumulan suposiciones falsas.
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 flex items-center gap-2">
                <i className="fa-solid fa-broom text-cyan-400"></i>
                <span>Auditar periódicamente y retirar reglas obsoletas</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 flex items-center gap-2">
                <i className="fa-solid fa-arrows-rotate text-cyan-400"></i>
                <span>Actualizar lockfiles y devcontainers al cambiar dependencias</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 flex items-center gap-2">
                <i className="fa-solid fa-chart-line text-cyan-400"></i>
                <span>Medir la tasa de éxito tras cada cambio en el arnés</span>
              </div>
            </div>
          </div>

          <div className="text-xs font-mono text-slate-400 pt-3 border-t border-slate-800">
            Realiza auditorías periódicas y paga la deuda del arnés igual que la deuda técnica del código.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-2-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-circle-check text-emerald-400"></i>
          <span>Conclusión Clave:</span>
        </span>
        <span className="text-white font-semibold">
          "El subsistema de retroalimentación tiene la menor inversión y el mayor rendimiento. Diseña primero tus checks."
        </span>
      </motion.div>
    </div>
  );
};
