import React, { useCallback } from 'react';
import { PresentationState, PresentationAction } from '../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide6_TwoPhaseInit: React.FC<Props> = ({ state, dispatch }) => {
  const { slide6Phase } = state;

  const setPhase = useCallback(
    (phase: 1 | 2) => {
      dispatch({ type: 'SET_SLIDE_6_PHASE', phase });
    },
    [dispatch]
  );

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Top Banner */}
      <div className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-play text-emerald-400"></i>
            Inicialización en Dos Fases: El Protocolo de Arranque
          </div>
          <div className="text-sm font-semibold text-white mt-1">
            "Nunca mezcles la <span className="text-red-400">configuración del entorno</span> con la <span className="text-cyan-400">implementación de features</span>."
          </div>
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
            FASE 1: INFRAESTRUCTURA
          </button>
          <button
            onClick={() => setPhase(2)}
            className={`px-3 py-1 rounded text-xs font-mono font-bold border transition-all ${
              slide6Phase === 2
                ? 'bg-emerald-950 border-emerald-400 text-emerald-300 glow-border-green'
                : 'bg-black border-slate-800 text-slate-500'
            }`}
          >
            FASE 2: IMPLEMENTACIÓN
          </button>
        </div>
      </div>

      {/* Main Grid: Antipattern vs 2-Phase Protocol */}
      <div className="my-4 grid grid-cols-1 md:grid-cols-12 gap-4 flex-1">
        {/* Antipattern Box */}
        <div className="md:col-span-5 bg-red-950/10 border border-red-900/40 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-red-900/40 mb-3">
              <span className="text-xs font-mono text-red-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-skull-crossbones"></i> Antipatrón: Sesión Combinada
              </span>
              <span className="text-[10px] font-mono text-red-400 bg-red-950 px-2 py-0.5 rounded">
                85% FALLO
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-2.5 rounded bg-black/60 border border-red-900/60 text-slate-300">
                <span className="text-red-400 font-bold block mb-1">Paso 1: Orden Mixta</span>
                "Instala dependencias, configura Docker y programa el checkout."
              </div>
              <div className="p-2.5 rounded bg-black/60 border border-red-900/60 text-slate-300">
                <span className="text-red-400 font-bold block mb-1">Paso 2: Quema de Tokens</span>
                El agente lucha con errores de pip/npm en bucle, saturando el 80% de su contexto.
              </div>
              <div className="p-2.5 rounded bg-black/60 border border-red-900/60 text-slate-300">
                <span className="text-red-400 font-bold block mb-1">Paso 3: Colapso</span>
                Llega agotado al código de negocio, escribe código roto y declara victoria falsa.
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-red-400 mt-3 pt-2 border-t border-red-900/40">
            Consecuencia: Ruido excesivo en el contexto y código no verificado.
          </div>
        </div>

        {/* 2-Phase Architecture Detail */}
        <div className="md:col-span-7 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-shield-halved text-emerald-400"></i>
                Protocolo en Dos Fases
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">
                {slide6Phase === 1 ? 'SESIÓN 1: ENVIRONMENT GREEN' : 'SESIÓN 2: CODE DEVELOPMENT'}
              </span>
            </div>

            {slide6Phase === 1 ? (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-black/60 border border-cyan-500/40 glow-border-cyan">
                  <div className="text-cyan-400 font-bold uppercase mb-1">Misión Exclusiva de Fase 1:</div>
                  <div className="text-slate-300 leading-relaxed">
                    Lograr que el entorno sea ejecutable, reproducible y que una prueba de ejemplo pase en verde. Cero lógica de negocio.
                  </div>
                </div>

                {/* Startup Readiness Checklist */}
                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Startup Readiness Checklist:
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <i className="fa-solid fa-square-check"></i>
                    <span>make init / setup script reproducible</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <i className="fa-solid fa-square-check"></i>
                    <span>Prueba dummy pasa: pytest tests/test_smoke.py == OK</span>
                  </div>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <i className="fa-solid fa-square-check"></i>
                    <span>Lockfile y versiones de paquetes congeladas</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-black/60 border border-emerald-500/40 glow-border-green">
                  <div className="text-emerald-400 font-bold uppercase mb-1">Misión Exclusiva de Fase 2:</div>
                  <div className="text-slate-300 leading-relaxed">
                    Implementar las features una por una sobre un terreno validado, con contexto al 100% libre de ruido de dependencias.
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 space-y-2">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                    Condiciones de Ejecución en Fase 2:
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <i className="fa-solid fa-check"></i>
                    <span>Memoria limpia: solo el mapa AGENTS.md y la feature actual</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <i className="fa-solid fa-check"></i>
                    <span>Ejecución directa de comandos de prueba (make check)</span>
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400">
                    <i className="fa-solid fa-check"></i>
                    <span>Commits atómicos al terminar cada verificación</span>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-400 flex justify-between items-center">
            <span>ROI: Ahorra más del 60% de tokens gastados en depuración innecesaria.</span>
            <span className="text-emerald-400 font-bold">100% REPRODUCIBLE</span>
          </div>
        </div>
      </div>

      {/* Bottom Script Command */}
      <div className="bg-black/80 border border-slate-800 p-3 rounded-lg font-mono text-xs flex items-center justify-between text-slate-400">
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-terminal text-cyan-400"></i>
          <span>Comando de Verificación de Arranque:</span>
        </span>
        <span className="text-cyan-400 font-bold bg-slate-950 px-2 py-1 rounded border border-slate-800">
          $ make verify-init && git status --porcelain
        </span>
      </div>
    </div>
  );
};
