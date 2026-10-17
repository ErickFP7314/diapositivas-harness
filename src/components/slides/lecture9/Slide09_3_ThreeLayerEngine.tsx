import React, { useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide09_3_ThreeLayerEngine: React.FC<Props> = ({ state, dispatch }) => {
  const { slide9Checklist } = state;

  const toggleCheck = useCallback(
    (layer: 'l1' | 'l2' | 'l3') => {
      dispatch({ type: 'TOGGLE_SLIDE_9_CHECK', layer });
    },
    [dispatch]
  );

  const isAllApproved = useMemo(
    () => slide9Checklist.l1 && slide9Checklist.l2 && slide9Checklist.l3,
    [slide9Checklist]
  );

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
            MOTOR DE VALIDACIÓN EN TRES CAPAS &bull; <span className="text-emerald-400">RUNTIME SMOKE TEST</span>
          </motion.div>
        </div>
        <div
          className={`text-xs font-mono px-3 py-1.5 rounded font-bold border transition-all ${
            isAllApproved
              ? 'bg-emerald-950 border-emerald-400 text-emerald-300 glow-border-green'
              : 'bg-red-950 border-red-500 text-red-300'
          }`}
        >
          {isAllApproved ? 'VEREDICTO: DONE CERTIFICADO' : 'VEREDICTO: RECHAZADO (CAPA ROTA)'}
        </div>
      </motion.div>

      {/* Main Interactive 3-Layer Board */}
      <div className="my-6 bg-black/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-5">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
              <i className="fa-solid fa-layer-group mr-2"></i>TRES CAPAS INDEPENDIENTES &bull; CLICK PARA SIMULAR CHECKS
            </span>
            <span className="text-xs font-mono text-slate-400">
              EVALUACIÓN EXTERNA DETERMINISTA
            </span>
          </div>

          <div className="space-y-3 font-mono text-xs">
            {/* Layer 1 */}
            <div
              onClick={() => toggleCheck('l1')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                slide9Checklist.l1
                  ? 'bg-emerald-950/20 border-emerald-500/50 glow-border-green'
                  : 'bg-black/80 border-red-900/60'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-white text-xs">CAPA 1: ANÁLISIS ESTÁTICO & COMPROBACIÓN DE TIPOS</span>
                <i
                  className={`fa-solid ${
                    slide9Checklist.l1 ? 'fa-check text-emerald-400' : 'fa-xmark text-red-400'
                  }`}
                ></i>
              </div>
              <div className="text-[11px] text-slate-400">
                Comandos: <span className="text-cyan-300">mypy --strict src/</span> &bull; <span className="text-cyan-300">ruff check</span> &bull; <span className="text-cyan-300">tsc --noEmit</span>
              </div>
            </div>

            {/* Layer 2 */}
            <div
              onClick={() => toggleCheck('l2')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                slide9Checklist.l2
                  ? 'bg-emerald-950/20 border-emerald-500/50 glow-border-green'
                  : 'bg-black/80 border-red-900/60'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-white text-xs">CAPA 2: SUITE UNITARIA & INTEGRACIÓN DE COMPONENTES</span>
                <i
                  className={`fa-solid ${
                    slide9Checklist.l2 ? 'fa-check text-emerald-400' : 'fa-xmark text-red-400'
                  }`}
                ></i>
              </div>
              <div className="text-[11px] text-slate-400">
                Comandos: <span className="text-cyan-300">pytest tests/ -x</span> (100% aserciones de integración verdes)
              </div>
            </div>

            {/* Layer 3 */}
            <div
              onClick={() => toggleCheck('l3')}
              className={`p-4 rounded-xl border cursor-pointer transition-all ${
                slide9Checklist.l3
                  ? 'bg-emerald-950/30 border-emerald-400 glow-border-green'
                  : 'bg-black/80 border-red-500/80'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-emerald-300 text-xs">CAPA 3: SEÑALES DE RUNTIME (SMOKE TEST EN VIVO)</span>
                <i
                  className={`fa-solid ${
                    slide9Checklist.l3 ? 'fa-check text-emerald-400' : 'fa-xmark text-red-400'
                  }`}
                ></i>
              </div>
              <div className="text-[11px] text-slate-300">
                Comandos: <span className="text-cyan-300">curl -f http://localhost:8000/healthz == 200 OK</span> (Proceso vivo respondiendo)
              </div>
            </div>
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex justify-between items-center">
          <span>Feedback procesable: Si una capa falla, inyectar el stacktrace exacto de regreso al modelo.</span>
          <span className="text-emerald-400 font-bold">ALL 3 MUST PASS</span>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-9-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-vial-circle-check text-emerald-400"></i>
          <span>Regla de Producción:</span>
        </span>
        <span className="text-white font-semibold">
          "Solo cuando las tres capas están en verde simultáneamente, el arnés autoriza el commit de cierre."
        </span>
      </motion.div>
    </div>
  );
};
