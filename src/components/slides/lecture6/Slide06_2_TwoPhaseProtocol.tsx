import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide06_2_TwoPhaseProtocol: React.FC<Props> = ({ state, dispatch }) => {
  const { slide6Phase } = state;

  const setPhase = useCallback(
    (phase: 1 | 2) => {
      dispatch({ type: 'SET_SLIDE_6_PHASE', phase });
    },
    [dispatch]
  );

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-6-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-play text-emerald-400"></i>
            <span>SECCIÓN 06 &bull; INICIALIZACIÓN EN DOS FASES</span>
          </div>
          <motion.div layoutId="lecture-6-title" className="text-xl font-black text-white mt-1">
            ARQUITECTURA: <span className="text-emerald-400">EL PROTOCOLO EN DOS FASES</span>
          </motion.div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setPhase(1)}
            className={`px-3 py-1 rounded text-xs font-mono font-bold border transition-all ${
              slide6Phase === 1
                ? 'bg-cyan-950 border-cyan-400 text-cyan-300 glow-border-cyan'
                : 'bg-black border-slate-800 text-slate-500'
            }`}
          >
            FASE 1: ENTORNO
          </button>
          <button
            onClick={() => setPhase(2)}
            className={`px-3 py-1 rounded text-xs font-mono font-bold border transition-all ${
              slide6Phase === 2
                ? 'bg-emerald-950 border-emerald-400 text-emerald-300 glow-border-green'
                : 'bg-black border-slate-800 text-slate-500'
            }`}
          >
            FASE 2: FEATURES
          </button>
        </div>
      </motion.div>

      {/* Main Interactive Comparison between Phase 1 and Phase 2 */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-stretch">
        {/* Phase 1 Box */}
        <div
          className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
            slide6Phase === 1
              ? 'bg-cyan-950/20 border-cyan-400 glow-border-cyan'
              : 'bg-black/60 border-slate-800 opacity-60'
          }`}
        >
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-cyan-900/40 mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-screwdriver-wrench"></i> Fase 1: Sesión de Entorno Dedicada
              </span>
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-500/40">
                INFRAESTRUCTURA
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-black/80 border border-slate-800">
                <span className="text-cyan-400 font-bold block mb-1">Misión Exclusiva:</span>
                <span className="text-slate-300 text-[11px]">
                  Lograr que el entorno sea ejecutable, reproducible y que una prueba dummy pase en verde.
                </span>
              </div>
              <div className="p-3 rounded-xl bg-black/80 border border-slate-800">
                <span className="text-cyan-400 font-bold block mb-1">Entregables:</span>
                <span className="text-slate-300 text-[11px]">
                  devcontainer.json, lockfile congelado, test_smoke.py == OK, Makefile estandarizado.
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-950/30 border border-emerald-500/40 text-emerald-300 text-[11px] font-bold">
                Cero código de lógica de negocio en esta fase.
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-cyan-400 pt-3 border-t border-slate-800">
            Resultado: Terreno 100% fértil y validado antes de gastar tokens en negocio.
          </div>
        </div>

        {/* Phase 2 Box */}
        <div
          className={`p-6 rounded-2xl border transition-all flex flex-col justify-between ${
            slide6Phase === 2
              ? 'bg-emerald-950/20 border-emerald-400 glow-border-green'
              : 'bg-black/60 border-slate-800 opacity-60'
          }`}
        >
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-emerald-900/40 mb-4">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-code"></i> Fase 2: Sesiones de Implementación
              </span>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-500/40">
                LÓGICA LIMPIA
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-black/80 border border-slate-800">
                <span className="text-emerald-400 font-bold block mb-1">Misión Exclusiva:</span>
                <span className="text-slate-300 text-[11px]">
                  Resolver las features de la lista una a una con el 100% del contexto libre de ruido de paquetes.
                </span>
              </div>
              <div className="p-3 rounded-xl bg-black/80 border border-slate-800">
                <span className="text-emerald-400 font-bold block mb-1">Garantías de Ejecución:</span>
                <span className="text-slate-300 text-[11px]">
                  El entorno levanta en segundos; las pruebas unitarias y linters corren de inmediato.
                </span>
              </div>
              <div className="p-2.5 rounded-lg bg-cyan-950/30 border border-cyan-500/40 text-cyan-300 text-[11px] font-bold">
                Commits atómicos tras verificar cada feature.
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-emerald-400 pt-3 border-t border-slate-800">
            Ahorro: Reduce en más del 60% el consumo total de tokens de desarrollo.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-6-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-shield-halved text-emerald-400"></i>
          <span>Protocolo de Éxito:</span>
        </span>
        <span className="text-white font-semibold">
          "Fase 1 deja la pista de aterrizaje impecable; Fase 2 despega el avión sin turbulencias."
        </span>
      </motion.div>
    </div>
  );
};
