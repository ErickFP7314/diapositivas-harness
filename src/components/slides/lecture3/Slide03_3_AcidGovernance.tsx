import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide03_3_AcidGovernance: React.FC<Props> = ({ state, dispatch }) => {
  const { slide3AcidState } = state;

  const setAcidState = useCallback(
    (newState: 'IDLE' | 'TRANSACTING' | 'CONSISTENCY_CHECK' | 'COMMITTED' | 'ROLLBACK') => {
      dispatch({ type: 'SET_SLIDE_3_ACID', state: newState });
    },
    [dispatch]
  );

  const acidList = [
    {
      letter: 'A',
      name: 'ATOMICIDAD',
      rule: 'Todo o Nada',
      desc: 'El cambio concluye al 100% con tests pasando o se revierte por completo. Prohibido dejar ramas rotas.',
    },
    {
      letter: 'C',
      name: 'CONSISTENCIA',
      rule: 'Invariantes Verdes',
      desc: 'Tras cada operación, el sistema queda en un estado verificablemente correcto con linters y pruebas en verde.',
    },
    {
      letter: 'I',
      name: 'AISLAMIENTO',
      rule: 'Git Worktrees',
      desc: 'Cada agente opera en su propia rama o espacio de trabajo aislado para evitar colisiones y race conditions.',
    },
    {
      letter: 'D',
      name: 'DURABILIDAD',
      rule: 'Persistencia en Disco',
      desc: 'Las decisiones clave y el progreso se escriben en archivos planos en el disco duro, no en la memoria volátil.',
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-3-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-database text-emerald-400"></i>
            <span>SECCIÓN 03 &bull; ARQUITECTURA DE CONOCIMIENTO</span>
          </div>
          <motion.div layoutId="lecture-3-title" className="text-xl font-black text-white mt-1">
            GOBERNANZA ACID: <span className="text-cyan-400">GESTIÓN TRANSACCIONAL DEL AGENTE</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 rounded font-bold">
          03.3 / 03.3
        </div>
      </motion.div>

      {/* Main Grid: 4 ACID Cards + Interactive Transaction Simulator */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-stretch">
        {/* Left: 4 ACID Cards */}
        <div className="md:col-span-7 grid grid-cols-2 gap-3">
          {acidList.map((a) => (
            <div key={a.letter} className="p-4 rounded-2xl bg-black/80 border border-slate-800 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="h-7 w-7 rounded-lg bg-cyan-950 border border-cyan-400 text-cyan-300 font-mono text-xs font-bold flex items-center justify-center">
                    {a.letter}
                  </span>
                  <div>
                    <div className="text-xs font-bold text-white font-mono">{a.name}</div>
                    <div className="text-[10px] text-emerald-400 font-mono">{a.rule}</div>
                  </div>
                </div>
                <div className="text-[11px] text-slate-300 font-mono leading-relaxed mt-2">{a.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Interactive Transactional State Controller */}
        <div className="md:col-span-5 p-5 rounded-2xl bg-black/90 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-code-compare mr-2"></i>Estado Transaccional
              </span>
              <span
                className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  slide3AcidState === 'COMMITTED'
                    ? 'bg-emerald-950 text-emerald-400 border border-emerald-500'
                    : slide3AcidState === 'ROLLBACK'
                    ? 'bg-red-950 text-red-400 border border-red-500'
                    : 'bg-cyan-950 text-cyan-300 border border-cyan-500'
                }`}
              >
                {slide3AcidState}
              </span>
            </div>

            <div className="space-y-2 mb-4 font-mono text-xs">
              <button
                onClick={() => setAcidState('TRANSACTING')}
                className={`w-full py-2 px-3 rounded-lg border text-left flex items-center justify-between ${
                  slide3AcidState === 'TRANSACTING'
                    ? 'bg-cyan-950 border-cyan-400 text-cyan-300 glow-border-cyan'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <span>1. Iniciar Mutación</span>
                <i className="fa-solid fa-pen-nib"></i>
              </button>
              <button
                onClick={() => setAcidState('CONSISTENCY_CHECK')}
                className={`w-full py-2 px-3 rounded-lg border text-left flex items-center justify-between ${
                  slide3AcidState === 'CONSISTENCY_CHECK'
                    ? 'bg-yellow-950 border-yellow-400 text-yellow-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <span>2. Chequeo de Consistencia</span>
                <i className="fa-solid fa-vial"></i>
              </button>
              <button
                onClick={() => setAcidState('COMMITTED')}
                className={`w-full py-2 px-3 rounded-lg border text-left flex items-center justify-between ${
                  slide3AcidState === 'COMMITTED'
                    ? 'bg-emerald-950 border-emerald-400 text-emerald-300 glow-border-green'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <span>3. Commit Atómico en Git</span>
                <i className="fa-solid fa-check"></i>
              </button>
              <button
                onClick={() => setAcidState('ROLLBACK')}
                className={`w-full py-2 px-3 rounded-lg border text-left flex items-center justify-between ${
                  slide3AcidState === 'ROLLBACK'
                    ? 'bg-red-950 border-red-500 text-red-300'
                    : 'bg-slate-950 border-slate-800 text-slate-400'
                }`}
              >
                <span>Rollback ante Fallo</span>
                <i className="fa-solid fa-rotate-left"></i>
              </button>
            </div>
          </div>

          <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-[10px] text-slate-400">
            Aislamiento: Múltiples agentes en paralelo sin worktrees provocan colisiones destructivas en git.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-3-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-shield-halved text-emerald-400"></i>
          <span>Gobernanza de Estado:</span>
        </span>
        <span className="text-white font-semibold">
          "Trata cada sesión como una transacción ACID: confirmación integral verificada o rollback completo."
        </span>
      </motion.div>
    </div>
  );
};
