import React, { useMemo, useCallback } from 'react';
import { PresentationState, PresentationAction } from '../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide8_FeatureList: React.FC<Props> = ({ state, dispatch }) => {
  const { slide8FeatureState } = state;

  const setState = useCallback(
    (newState: 'TODO' | 'IN_PROGRESS' | 'VERIFYING' | 'DONE') => {
      dispatch({ type: 'SET_SLIDE_8_STATE', state: newState });
    },
    [dispatch]
  );

  const statesList = useMemo(
    () => [
      { key: 'TODO', label: '1. TODO', desc: 'Especificada con inputs e invariantes claras. Código intacto.' },
      { key: 'IN_PROGRESS', label: '2. IN_PROGRESS', desc: 'El agente trabaja exclusivamente en ella (WIP=1).' },
      { key: 'VERIFYING', label: '3. VERIFYING', desc: 'Ejecutando pipeline de pruebas (pytest + linters).' },
      { key: 'DONE', label: '4. DONE', desc: 'Validación en 3 capas aprobada. Commit atómico generado.' },
    ],
    []
  );

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Top Banner */}
      <div className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-diagram-project text-emerald-400"></i>
            Lista de Features & Máquina de Estados Finita
          </div>
          <div className="text-sm font-semibold text-white mt-1">
            "Una sesión nueva debe responder en 30 segundos: <span className="text-cyan-400 font-mono">¿Qué está hecho? ¿Qué pruebas pasó? ¿Qué está bloqueando?</span>"
          </div>
        </div>
        <div className="text-xs font-mono px-3 py-1 bg-cyan-950 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          FEATURE STATE MACHINE
        </div>
      </div>

      {/* Main Grid: Interactive State Machine vs Atomic Feature Card */}
      <div className="my-4 grid grid-cols-1 md:grid-cols-12 gap-4 flex-1">
        {/* Left: State Machine Flow */}
        <div className="md:col-span-5 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-arrows-split-up-and-left mr-2"></i>Ciclo de Vida de una Feature
              </span>
              <span className="text-xs font-mono font-bold text-emerald-400">
                ACTUAL: {slide8FeatureState}
              </span>
            </div>

            <div className="space-y-2 mb-4">
              {statesList.map((st) => {
                const isCurrent = slide8FeatureState === st.key;
                return (
                  <div
                    key={st.key}
                    onClick={() => setState(st.key as any)}
                    className={`p-2.5 rounded-lg border cursor-pointer transition-all ${
                      isCurrent
                        ? st.key === 'DONE'
                          ? 'bg-emerald-950/60 border-emerald-400 glow-border-green text-white'
                          : 'bg-cyan-950/60 border-cyan-400 glow-border-cyan text-white'
                        : 'bg-black/50 border-slate-800 text-slate-400 hover:border-slate-700'
                    }`}
                  >
                    <div className="flex justify-between items-center mb-0.5">
                      <span className="font-mono text-xs font-bold">{st.label}</span>
                      <i
                        className={`text-xs fa-solid ${
                          st.key === 'TODO'
                            ? 'fa-clock'
                            : st.key === 'IN_PROGRESS'
                            ? 'fa-gear fa-spin'
                            : st.key === 'VERIFYING'
                            ? 'fa-vial'
                            : 'fa-circle-check text-emerald-400'
                        }`}
                      ></i>
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">{st.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-2.5 bg-slate-950 rounded border border-slate-800 text-[10px] font-mono text-slate-400">
            Transiciones prohibidas: Un agente no puede saltar directamente de TODO a DONE sin pasar por VERIFYING.
          </div>
        </div>

        {/* Right: Atomic Feature Card Specification */}
        <div className="md:col-span-7 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-file-contract mr-2"></i>Ficha de Especificación Atómica
              </span>
              <span className="text-xs font-mono text-cyan-400">FEAT-042: CART_CHECKOUT</span>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-2.5 rounded bg-black/70 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">1. Invariantes del Negocio:</span>
                <span className="text-slate-300 text-[11px]">
                  El total del carrito nunca puede ser negativo. Precios con IVA calculado estrictamente en el backend.
                </span>
              </div>

              <div className="p-2.5 rounded bg-black/70 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">2. Comando de Verificación Determinista:</span>
                <span className="text-emerald-400 text-[11px] font-bold">
                  $ pytest tests/cart/test_checkout.py -v && mypy src/cart/ --strict
                </span>
              </div>

              <div className="p-2.5 rounded bg-black/70 border border-slate-800">
                <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">3. Comando de Rollback Automatizado:</span>
                <span className="text-red-400 text-[11px]">
                  $ git checkout -- src/cart/ && git clean -fd
                </span>
              </div>
            </div>
          </div>

          <div className="mt-3 pt-2 border-t border-slate-800 flex justify-between items-center text-xs font-mono">
            <span className="text-slate-400">Estado de Ejecución:</span>
            <span className="text-cyan-400 font-bold">COMMIT ATÓMICO PREPARADO</span>
          </div>
        </div>
      </div>

      {/* Bottom Principle */}
      <div className="bg-black/80 border border-slate-800 p-3 rounded-lg font-mono text-xs text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-code-commit text-emerald-400"></i>
          <span>Regla de Trazabilidad:</span>
        </span>
        <span className="text-white font-semibold">
          "Cada feature en la lista debe tener un comando de verificación único que devuelva exit code 0."
        </span>
      </div>
    </div>
  );
};
