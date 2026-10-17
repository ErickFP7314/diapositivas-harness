import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide09_2_ExternalArbiter: React.FC<Props> = () => {
  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-9-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-shield-halved text-emerald-400"></i>
            <span>SECCIÓN 09 &bull; COMPROBAR DEFINITION OF DONE</span>
          </div>
          <motion.div layoutId="lecture-9-title" className="text-xl font-black text-white mt-1">
            EL ÁRBITRO EXTERNO: <span className="text-emerald-400">EXTERNALIZAR LA TERMINACIÓN</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          09.2 / 09.3
        </div>
      </motion.div>

      {/* Main Visual: Separation of Concerns (Maker vs Arbiter) */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-stretch">
        {/* Model's Self Evaluation (Forbidden) */}
        <div className="p-6 rounded-2xl bg-black/80 border border-red-500/40 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-red-900/40 mb-4">
              <span className="text-xs font-mono text-red-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-user-xmark"></i> Auto-Evaluación del Modelo (Prohibido)
              </span>
              <span className="text-[10px] font-mono text-red-400 bg-red-950 px-2 py-0.5 rounded">
                SESGO DE AUTO-APROBACIÓN
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-red-400 font-bold mb-1">El generador califica su propia obra:</div>
                <div className="text-[11px] text-slate-400">
                  El mismo modelo que escribió el código decide si el código está bien. Es como permitir que un estudiante califique su propio examen de cálculo.
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-red-400 font-bold mb-1">Ceguera a sus propios errores:</div>
                <div className="text-[11px] text-slate-400">
                  Si el modelo asumió una premisa falsa al programar, validará esa misma premisa falsa al autoevaluarse.
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-xl text-xs font-mono text-red-300">
            Regla de Oro: El modelo propone; el arnés dispone.
          </div>
        </div>

        {/* External Harness Arbiter */}
        <div className="p-6 rounded-2xl bg-black/80 border border-emerald-500/50 glow-border-green flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-emerald-900/40 mb-4">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-gavel text-emerald-400"></i> Árbitro Externo Incorruptible
              </span>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/50">
                DETERMINISTA
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs text-slate-300">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-emerald-400 font-bold mb-1">Ejecución Independiente:</div>
                <div className="text-[11px] text-slate-300">
                  El arnés ejecuta el runner de pruebas en un subproceso aislado, sin intervención ni persuasión por parte del modelo.
                </div>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="text-emerald-400 font-bold mb-1">Criterio Booleano Incorruptible:</div>
                <div className="text-[11px] text-slate-300">
                  Exit code == 0. No hay debate ni explicaciones poéticas: o pasa la aserción o el cierre es denegado.
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 bg-emerald-950/30 border border-emerald-500/40 rounded-xl text-xs font-mono text-emerald-300">
            El agente solo solicita la verificación; el arnés tiene el monopolio de la aprobación.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-9-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-shield-halved text-emerald-400"></i>
          <span>Axioma de Verificación:</span>
        </span>
        <span className="text-white font-semibold">
          "Externalizar la sentencia de terminación: La frontera entre un prototipo roto y un agente de producción."
        </span>
      </motion.div>
    </div>
  );
};
