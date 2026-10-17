import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide08_2_FiniteStateMachine: React.FC<Props> = ({ state, dispatch }) => {
  const { slide8FeatureState } = state;

  const setState = useCallback(
    (newState: 'TODO' | 'IN_PROGRESS' | 'VERIFYING' | 'DONE') => {
      dispatch({ type: 'SET_SLIDE_8_STATE', state: newState });
    },
    [dispatch]
  );

  const states = [
    { key: 'TODO', label: '1. TODO', desc: 'Especificada con inputs, outputs e invariantes. Código intacto.' },
    { key: 'IN_PROGRESS', label: '2. IN_PROGRESS', desc: 'El agente trabaja exclusivamente en ella (WIP=1).' },
    { key: 'VERIFYING', label: '3. VERIFYING', desc: 'Ejecutando batería de pruebas unitarias y linters.' },
    { key: 'DONE', label: '4. DONE', desc: 'Validación en 3 capas aprobada. Commit atómico generado.' },
  ];

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
            MÁQUINA DE ESTADOS: <span className="text-emerald-400">CICLO DE VIDA RIGUROSO</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          08.2 / 08.3
        </div>
      </motion.div>

      {/* Main Interactive State Machine Visualizer */}
      <div className="my-6 bg-black/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-6">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
              <i className="fa-solid fa-arrows-split-up-and-left mr-2"></i>TRANSICIONES DE ESTADO &bull; HAZ CLIC PARA NAVEGAR
            </span>
            <span className="text-xs font-mono font-bold text-emerald-400">
              ESTADO ACTUAL: {slide8FeatureState}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {states.map((st) => {
              const isCurrent = slide8FeatureState === st.key;
              return (
                <div
                  key={st.key}
                  onClick={() => setState(st.key as any)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                    isCurrent
                      ? st.key === 'DONE'
                        ? 'bg-emerald-950/60 border-emerald-400 glow-border-green'
                        : 'bg-cyan-950/60 border-cyan-400 glow-border-cyan'
                      : 'bg-black/80 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-mono text-xs font-bold text-white">{st.label}</span>
                      <i
                        className={`text-sm fa-solid ${
                          st.key === 'TODO'
                            ? 'fa-clock text-slate-500'
                            : st.key === 'IN_PROGRESS'
                            ? 'fa-gear fa-spin text-cyan-400'
                            : st.key === 'VERIFYING'
                            ? 'fa-vial text-yellow-400'
                            : 'fa-circle-check text-emerald-400'
                        }`}
                      ></i>
                    </div>
                    <div className="text-[11px] text-slate-300 font-mono leading-relaxed mt-2">{st.desc}</div>
                  </div>

                  <div className="mt-4 pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
                    {isCurrent ? <span className="text-cyan-400 font-bold">ESTADO ACTIVO</span> : <span>Click para simular</span>}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
            <span className="text-red-400 font-bold block mb-1">Transición Prohibida:</span>
            Un agente jamás puede saltar directamente de TODO a DONE sin haber ejecutado la fase VERIFYING.
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex justify-between items-center">
          <span>Invariante: Si la verificación falla repetidamente, el estado transiciona a BLOCKED y se lanza rollback.</span>
          <span className="text-emerald-400 font-bold">FSM CONTROLLED</span>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-8-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-code-commit text-emerald-400"></i>
          <span>Gobernanza de Proceso:</span>
        </span>
        <span className="text-white font-semibold">
          "Cada tarea debe recorrer la máquina de estados completa antes de que el arnés conceda el commit final."
        </span>
      </motion.div>
    </div>
  );
};
