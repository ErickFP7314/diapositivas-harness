import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide08_1_FeatureListContract: React.FC<Props> = () => {
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
            ESPECIFICACIÓN: <span className="text-cyan-400">LA FEATURE LIST COMO CONTRATO</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          08.1 / 08.3
        </div>
      </motion.div>

      {/* Main Grid: Informal Text List vs Structured Feature Contract */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-stretch">
        {/* Informal Bad Text List */}
        <div className="p-6 rounded-2xl bg-black/80 border border-red-500/40 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-red-900/40 mb-4">
              <span className="text-xs font-mono text-red-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-file-circle-xmark"></i> Lista Informal en Texto Plano
              </span>
              <span className="text-[10px] font-mono text-red-400 bg-red-950 px-2 py-0.5 rounded">
                AMBIVALENCIA
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 font-mono text-xs text-slate-300 border border-slate-800 space-y-2 mb-4">
              <div>- [ ] Hacer el carrito de compras</div>
              <div>- [x] Casi listo el checkout</div>
              <div>- [ ] Arreglar pagos</div>
            </div>

            <div className="space-y-2 text-xs font-mono text-slate-400">
              <div className="text-red-400">&bull; ¿Qué significa "casi listo"?</div>
              <div className="text-red-400">&bull; ¿Qué pruebas pasó el carrito?</div>
              <div className="text-red-400">&bull; ¿Qué está bloqueando la pasarela de pagos?</div>
            </div>
          </div>

          <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-xl text-xs font-mono text-red-300">
            Consecuencia: Cuando arranca una nueva sesión, no tiene idea de qué estado real tiene el software.
          </div>
        </div>

        {/* Structured Feature Contract */}
        <div className="p-6 rounded-2xl bg-black/80 border border-emerald-500/50 glow-border-green flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-emerald-900/40 mb-4">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-file-contract"></i> Feature List Tipada & Estructurada
              </span>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/50">
                100% TRAZABLE
              </span>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between items-center">
                <span className="text-white font-bold">FEAT-042: Cart Checkout</span>
                <span className="text-yellow-400 bg-yellow-950/80 px-2 py-0.5 rounded text-[10px]">IN_PROGRESS</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-300">FEAT-043: Stripe Webhook</span>
                <span className="text-slate-500 bg-slate-900 px-2 py-0.5 rounded text-[10px]">TODO</span>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800 flex justify-between items-center">
                <span className="text-slate-300">FEAT-041: User Auth OAuth</span>
                <span className="text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded text-[10px]">DONE (TESTS OK)</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-emerald-950/30 border border-emerald-500/40 rounded-xl text-xs font-mono text-emerald-300">
            Prueba de 30 Segundos: Una nueva sesión de agente entiende el estado exacto en menos de medio minuto.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-8-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-list-check text-cyan-400"></i>
          <span>Regla de Planificación:</span>
        </span>
        <span className="text-white font-semibold">
          "La lista de features es un contrato de software con estados formales, no una lista de supermercado."
        </span>
      </motion.div>
    </div>
  );
};
