import React, { useMemo, useCallback } from 'react';
import { PresentationState, PresentationAction } from '../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide3_KnowledgeArchACID: React.FC<Props> = ({ state, dispatch }) => {
  const { slide3AcidState } = state;

  const setAcidState = useCallback(
    (newState: 'IDLE' | 'TRANSACTING' | 'CONSISTENCY_CHECK' | 'COMMITTED' | 'ROLLBACK') => {
      dispatch({ type: 'SET_SLIDE_3_ACID', state: newState });
    },
    [dispatch]
  );

  const acidPrinciples = useMemo(
    () => [
      {
        letter: 'A',
        name: 'ATOMICIDAD',
        desc: 'El cambio concluye al 100% o se aborta por completo. Prohibido dejar ramas o tests rotos a medias.',
        state: 'TODO_OR_NOTHING',
      },
      {
        letter: 'C',
        name: 'CONSISTENCIA',
        desc: 'Tras cada operación, el sistema queda en estado verificablemente verde: linters, tipos y suite limpia.',
        state: 'INVARIANTS_GREEN',
      },
      {
        letter: 'I',
        name: 'AISLAMIENTO',
        desc: 'Cada agente opera en su propia rama o archivo de progreso para evitar colisiones y race conditions.',
        state: 'GIT_WORKTREE_ISOLATION',
      },
      {
        letter: 'D',
        name: 'DURABILIDAD',
        desc: 'Las decisiones clave se asientan en archivos persistentes en disco, nunca en la memoria volátil del chat.',
        state: 'DISK_COMMITTED',
      },
    ],
    []
  );

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Top Banner: Single Source of Truth */}
      <div className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-code-branch text-emerald-400"></i>
            Arquitectura de Conocimiento & Visibilidad
          </div>
          <div className="text-sm font-semibold text-white mt-1">
            "La información que no existe en el repositorio, <span className="text-red-400">NO EXISTE</span> para el agente."
          </div>
        </div>
        <div className="text-xs font-mono px-3 py-1 bg-cyan-950 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          REPO COMO ESPECIFICACIÓN
        </div>
      </div>

      {/* Middle Grid: Knowledge Visibility Map vs ACID State Machine */}
      <div className="my-4 grid grid-cols-1 md:grid-cols-12 gap-4 flex-1">
        {/* Left: Visibility Contrast Map */}
        <div className="md:col-span-5 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider pb-2 border-b border-slate-800 mb-3">
              <i className="fa-solid fa-eye-slash mr-2 text-cyan-400"></i>Mapa de Visibilidad del Conocimiento
            </div>

            {/* Invisible External Tools */}
            <div className="space-y-2 mb-4">
              <div className="p-2 rounded bg-red-950/20 border border-red-500/40 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">Slack Threads / Confluence / Jira</span>
                <span className="text-[10px] font-mono font-bold text-red-400 bg-red-950 px-2 py-0.5 rounded">
                  INACCESIBLE
                </span>
              </div>
              <div className="text-center text-slate-600 font-mono text-xs">
                <i className="fa-solid fa-arrow-down"></i> Transcribir al Repositorio <i className="fa-solid fa-arrow-down"></i>
              </div>
              {/* Visible Repo Artefacts */}
              <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-500/50 flex items-center justify-between glow-border-green">
                <span className="text-xs font-mono text-white font-bold">AGENTS.md / docs/ / PROGRESS.md</span>
                <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950 px-2 py-0.5 rounded">
                  ÚNICA VERDAD
                </span>
              </div>
            </div>

            {/* Proximity Rule */}
            <div className="p-3 rounded-lg bg-slate-950 border border-cyan-500/30">
              <div className="text-[10px] font-bold text-cyan-400 uppercase tracking-wider mb-1">
                <i className="fa-solid fa-ruler-combined mr-1"></i>Regla de Oro de Proximidad:
              </div>
              <div className="text-xs text-white font-mono font-bold">
                "La proximidad importa mucho más que la longitud."
              </div>
              <div className="text-[10px] text-slate-400 mt-1">
                Un archivo ARCHITECTURE.md de 50 líneas en src/api/ supera a un manual de 500 páginas en la raíz.
              </div>
            </div>
          </div>

          <div className="mt-3 text-[10px] font-mono text-slate-500 border-t border-slate-800 pt-2">
            PRUEBA DE SESIÓN NUEVA: Un agente nuevo debe arrancar sin hacer preguntas a un humano.
          </div>
        </div>

        {/* Right: ACID Agent Governance Simulator */}
        <div className="md:col-span-7 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-network-wired mr-2"></i>Gestión de Estado Agéntico con Principios ACID
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400">
                ESTADO: {slide3AcidState}
              </span>
            </div>

            {/* 4 ACID Cards */}
            <div className="grid grid-cols-2 gap-2 mb-4">
              {acidPrinciples.map((p) => (
                <div key={p.letter} className="p-2.5 rounded-lg bg-black/60 border border-slate-800">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="h-5 w-5 rounded bg-cyan-950 border border-cyan-400 text-cyan-300 font-mono text-xs font-bold flex items-center justify-center">
                      {p.letter}
                    </span>
                    <span className="text-xs font-bold text-white">{p.name}</span>
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono leading-relaxed">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive ACID Controls */}
          <div className="pt-3 border-t border-slate-800">
            <div className="text-[10px] text-slate-400 font-mono mb-2 uppercase font-bold">
              Simular Ciclo Transaccional del Agente:
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setAcidState('TRANSACTING')}
                className={`px-3 py-1.5 rounded text-xs font-bold font-mono border ${
                  slide3AcidState === 'TRANSACTING'
                    ? 'bg-cyan-950 border-cyan-400 text-cyan-300 glow-border-cyan'
                    : 'bg-black border-slate-800 text-slate-400'
                }`}
              >
                1. Iniciar Mutación
              </button>
              <button
                onClick={() => setAcidState('CONSISTENCY_CHECK')}
                className={`px-3 py-1.5 rounded text-xs font-bold font-mono border ${
                  slide3AcidState === 'CONSISTENCY_CHECK'
                    ? 'bg-yellow-950 border-yellow-400 text-yellow-300'
                    : 'bg-black border-slate-800 text-slate-400'
                }`}
              >
                2. Chequeo Consistencia
              </button>
              <button
                onClick={() => setAcidState('COMMITTED')}
                className={`px-3 py-1.5 rounded text-xs font-bold font-mono border ${
                  slide3AcidState === 'COMMITTED'
                    ? 'bg-emerald-950 border-emerald-400 text-emerald-300 glow-border-green'
                    : 'bg-black border-slate-800 text-slate-400'
                }`}
              >
                3. Commit Atómico
              </button>
              <button
                onClick={() => setAcidState('ROLLBACK')}
                className={`px-3 py-1.5 rounded text-xs font-bold font-mono border ${
                  slide3AcidState === 'ROLLBACK'
                    ? 'bg-red-950 border-red-500 text-red-300'
                    : 'bg-black border-slate-800 text-slate-400'
                }`}
              >
                Rollback ante Fallo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Directory Architecture Preview */}
      <div className="bg-black/80 border border-slate-800 p-3 rounded-lg flex items-center justify-between font-mono text-xs">
        <span className="text-slate-400 font-bold flex items-center gap-2">
          <i className="fa-solid fa-folder-tree text-emerald-400"></i>
          <span>Estructura Canónica:</span>
        </span>
        <div className="flex gap-4 text-[11px] text-cyan-400">
          <span>AGENTS.md</span>
          <span className="text-slate-600">&bull;</span>
          <span>src/api/ARCHITECTURE.md</span>
          <span className="text-slate-600">&bull;</span>
          <span>src/db/CONSTRAINTS.md</span>
          <span className="text-slate-600">&bull;</span>
          <span>PROGRESS.md</span>
        </div>
      </div>
    </div>
  );
};
