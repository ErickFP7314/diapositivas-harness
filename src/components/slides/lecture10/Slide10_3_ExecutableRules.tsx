import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide10_3_ExecutableRules: React.FC<Props> = () => {
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
            FEEDBACK QUIRÚRGICO: <span className="text-emerald-400">ERRORES ORIENTADOS AL AGENTE</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 rounded font-bold">
          10.3 / 10.3
        </div>
      </motion.div>

      {/* Main Grid: Vague Error vs Agent-Oriented Actionable Diagnostic */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-stretch">
        {/* Unhelpful Vague Error */}
        <div className="p-6 rounded-2xl bg-black/80 border border-red-500/40 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-red-900/40 mb-4">
              <span className="text-xs font-mono text-red-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-circle-xmark"></i> Mensaje Convencional Inútil
              </span>
              <span className="text-[10px] font-mono text-red-400 bg-red-950 px-2 py-0.5 rounded">
                PROVOCA ALUCINACIONES
              </span>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-400 space-y-2 mb-4">
              <div className="text-red-400 font-bold">Error 500: Internal Server Error</div>
              <div className="text-slate-500 text-[11px]">at Object.&lt;anonymous&gt; (/app/bundle.js:1420:12)</div>
              <div className="text-slate-500 text-[11px]">at processTicksAndRejections (node:internal:492:21)</div>
            </div>

            <div className="space-y-2 text-xs font-mono text-slate-400">
              <div>&bull; No indica qué archivo fuente originó el fallo.</div>
              <div>&bull; No especifica qué regla de arquitectura fue violada.</div>
              <div>&bull; Obliga al modelo a adivinar parches a ciegas.</div>
            </div>
          </div>

          <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-xl text-xs font-mono text-red-300">
            Consecuencia: El agente desperdicia 5 turnos modificando archivos aleatorios sin resolver el problema real.
          </div>
        </div>

        {/* Actionable Agent-Oriented Diagnostic */}
        <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-500/50 glow-border-green flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-emerald-900/40 mb-4">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-circle-check"></i> Mensaje Estructurado para el Agente
              </span>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/50">
                100% ACCIONABLE
              </span>
            </div>

            <div className="p-4 rounded-xl bg-black border border-emerald-500/40 font-mono text-xs text-slate-200 space-y-2 mb-4 leading-relaxed">
              <div className="text-red-400 font-bold">[VIOLACIÓN ARQUITECTÓNICA en src/ui/Client.ts:18]</div>
              <div><strong className="text-yellow-400">Invariante:</strong> La capa de UI requiere que los campos de respuesta estén en camelCase ('orderStatus').</div>
              <div><strong className="text-cyan-400">Acción Requerida:</strong> Modifica el serializador en src/api/dto.py para mapear 'order_status' &rarr; 'orderStatus'.</div>
            </div>

            <div className="space-y-2 text-xs font-mono text-slate-300">
              <div className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-400"></i><span>Ubicación exacta: archivo y línea física</span></div>
              <div className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-400"></i><span>Invariante rota claramente explicada</span></div>
              <div className="flex items-center gap-2"><i className="fa-solid fa-check text-emerald-400"></i><span>Acción de corrección directa y sin ambigüedad</span></div>
            </div>
          </div>

          <div className="p-3 bg-emerald-950/30 border border-emerald-500/40 rounded-xl text-xs font-mono text-emerald-300">
            Resultado: El agente se auto-corrige de forma quirúrgica en el primer intento.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-10-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-terminal text-emerald-400"></i>
          <span>Regla de Feedback:</span>
        </span>
        <span className="text-white font-semibold">
          "Un buen mensaje de error le dice al agente qué falló, por qué falló y exactamente cómo arreglarlo."
        </span>
      </motion.div>
    </div>
  );
};
