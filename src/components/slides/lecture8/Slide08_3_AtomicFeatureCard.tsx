import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide08_3_AtomicFeatureCard: React.FC<Props> = () => {
  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-8-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-diagram-project text-emerald-400"></i>
            <span>SECCIÓN 08 &bull; LISTA DE FEATURES & MÁQUINA DE ESTADOS</span>
          </div>
          <motion.div layoutId="lecture-8-title" className="text-xl font-black text-white mt-1">
            ANATOMÍA: <span className="text-cyan-400">LA FICHA ATÓMICA DE FEATURE</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 rounded font-bold">
          08.3 / 08.3
        </div>
      </motion.div>

      {/* Main Visual: Atomic Feature Card Specification */}
      <div className="my-6 p-6 rounded-2xl bg-black/90 border border-slate-800 flex flex-col justify-between flex-1">
        <div>
          <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-5">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-2">
              <i className="fa-solid fa-file-contract"></i> FICHA ATÓMICA DE ESPECIFICACIÓN
            </span>
            <span className="text-xs font-mono text-emerald-400 font-bold">
              ID: FEAT-042 &bull; CART_CHECKOUT
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono text-xs">
            {/* Invariants */}
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-yellow-400 uppercase font-bold block mb-2 flex items-center gap-1.5">
                  <i className="fa-solid fa-lock"></i> 1. Invariantes del Negocio
                </span>
                <div className="text-slate-300 text-[11px] leading-relaxed">
                  El total del carrito nunca puede ser negativo. El IVA debe calcularse estrictamente en el backend. Los items sin stock no pueden transaccionar.
                </div>
              </div>
              <div className="text-[10px] text-slate-500 pt-2 border-t border-slate-800/80 mt-3">
                No negociable por el modelo
              </div>
            </div>

            {/* Verification Command */}
            <div className="p-4 rounded-xl bg-slate-950 border border-emerald-500/40 glow-border-green flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-emerald-400 uppercase font-bold block mb-2 flex items-center gap-1.5">
                  <i className="fa-solid fa-vial"></i> 2. Comando de Verificación
                </span>
                <div className="p-2 rounded bg-black border border-emerald-500/50 text-emerald-300 text-[10px] break-all mb-2">
                  $ pytest tests/cart/test_checkout.py -v && mypy src/cart/ --strict
                </div>
                <div className="text-slate-300 text-[11px]">
                  El único juez determinista que autoriza mover el estado a DONE.
                </div>
              </div>
              <div className="text-[10px] text-emerald-400 pt-2 border-t border-slate-800/80 mt-3 font-bold">
                Exit Code 0 Requerido
              </div>
            </div>

            {/* Rollback Command */}
            <div className="p-4 rounded-xl bg-slate-950 border border-red-500/40 flex flex-col justify-between">
              <div>
                <span className="text-[10px] text-red-400 uppercase font-bold block mb-2 flex items-center gap-1.5">
                  <i className="fa-solid fa-rotate-left"></i> 3. Comando de Rollback
                </span>
                <div className="p-2 rounded bg-black border border-red-500/50 text-red-300 text-[10px] break-all mb-2">
                  $ git checkout -- src/cart/ && git clean -fd
                </div>
                <div className="text-slate-300 text-[11px]">
                  Escape seguro si el agente comete fallos irreversibles en el código.
                </div>
              </div>
              <div className="text-[10px] text-red-400 pt-2 border-t border-slate-800/80 mt-3 font-bold">
                Retorno a Estado Limpio
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex justify-between items-center">
          <span>Invariante: Todo cambio se valida y commitea de forma atómica antes de pasar a la siguiente tarea.</span>
          <span className="text-cyan-400 font-bold">ATOMIC SPEC</span>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-8-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-file-shield text-cyan-400"></i>
          <span>Regla de Oro:</span>
        </span>
        <span className="text-white font-semibold">
          "Cada feature en la lista debe definir no sólo qué construir, sino cómo probarlo y cómo revertirlo."
        </span>
      </motion.div>
    </div>
  );
};
