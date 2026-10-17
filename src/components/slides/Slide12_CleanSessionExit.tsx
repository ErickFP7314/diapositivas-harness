import React, { useCallback, useMemo } from 'react';
import { PresentationState, PresentationAction } from '../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide12_CleanSessionExit: React.FC<Props> = ({ state, dispatch }) => {
  const { slide12Checklist } = state;

  const toggleItem = useCallback(
    (check: 'gitClean' | 'testsPass' | 'progressWritten' | 'noZombies' | 'idempotentClean') => {
      dispatch({ type: 'TOGGLE_SLIDE_12_CHECK', check });
    },
    [dispatch]
  );

  const isSessionClean = useMemo(
    () =>
      slide12Checklist.gitClean &&
      slide12Checklist.testsPass &&
      slide12Checklist.progressWritten &&
      slide12Checklist.noZombies &&
      slide12Checklist.idempotentClean,
    [slide12Checklist]
  );

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Top Banner */}
      <div className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-broom text-emerald-400"></i>
            Final de Sesión Limpio & Transaccionalidad
          </div>
          <div className="text-sm font-semibold text-white mt-1">
            "Limpiar más tarde significa <span className="text-red-400">nunca limpiar</span>. Operaciones de limpieza estrictamente idempotentes."
          </div>
        </div>
        <div
          className={`text-xs font-mono px-3 py-1 rounded font-bold border ${
            isSessionClean
              ? 'bg-emerald-950 border-emerald-400 text-emerald-300 glow-border-green'
              : 'bg-red-950 border-red-500 text-red-300'
          }`}
        >
          {isSessionClean ? 'SESIÓN CERRADA: COMMIT PERMITIDO' : 'SESIÓN BLOQUEADA: WORKSPACE SUCIO'}
        </div>
      </div>

      {/* Main Grid: 5-Point Session Exit Checklist vs Quality Document */}
      <div className="my-4 grid grid-cols-1 md:grid-cols-12 gap-4 flex-1">
        {/* Left: Session Exit Checklist */}
        <div className="md:col-span-6 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-list-check mr-2"></i>Checklist de Salida de Sesión (5 Condiciones)
              </span>
              <span className="text-[10px] font-mono text-slate-400">CLICK PARA TOGGLEAR</span>
            </div>

            <div className="space-y-2 font-mono text-xs">
              <div
                onClick={() => toggleItem('gitClean')}
                className={`p-2 rounded border cursor-pointer flex items-center justify-between transition-all ${
                  slide12Checklist.gitClean
                    ? 'bg-emerald-950/20 border-emerald-500/40 text-white'
                    : 'bg-black/60 border-red-900/60 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  <i
                    className={`fa-solid ${
                      slide12Checklist.gitClean ? 'fa-square-check text-emerald-400' : 'fa-square text-slate-600'
                    }`}
                  ></i>
                  <span>1. Árbol de Git limpio (git status vacío)</span>
                </div>
                <span className="text-[10px] text-slate-500">NO UNTRACKED</span>
              </div>

              <div
                onClick={() => toggleItem('testsPass')}
                className={`p-2 rounded border cursor-pointer flex items-center justify-between transition-all ${
                  slide12Checklist.testsPass
                    ? 'bg-emerald-950/20 border-emerald-500/40 text-white'
                    : 'bg-black/60 border-red-900/60 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  <i
                    className={`fa-solid ${
                      slide12Checklist.testsPass ? 'fa-square-check text-emerald-400' : 'fa-square text-slate-600'
                    }`}
                  ></i>
                  <span>2. Suite de pruebas pasando al 100%</span>
                </div>
                <span className="text-[10px] text-slate-500">PYTEST GREEN</span>
              </div>

              <div
                onClick={() => toggleItem('progressWritten')}
                className={`p-2 rounded border cursor-pointer flex items-center justify-between transition-all ${
                  slide12Checklist.progressWritten
                    ? 'bg-emerald-950/20 border-emerald-500/40 text-white'
                    : 'bg-black/60 border-red-900/60 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  <i
                    className={`fa-solid ${
                      slide12Checklist.progressWritten ? 'fa-square-check text-emerald-400' : 'fa-square text-slate-600'
                    }`}
                  ></i>
                  <span>3. PROGRESS.md actualizado con cambios</span>
                </div>
                <span className="text-[10px] text-slate-500">HANDOFF OK</span>
              </div>

              <div
                onClick={() => toggleItem('noZombies')}
                className={`p-2 rounded border cursor-pointer flex items-center justify-between transition-all ${
                  slide12Checklist.noZombies
                    ? 'bg-emerald-950/20 border-emerald-500/40 text-white'
                    : 'bg-black/60 border-red-900/60 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  <i
                    className={`fa-solid ${
                      slide12Checklist.noZombies ? 'fa-square-check text-emerald-400' : 'fa-square text-slate-600'
                    }`}
                  ></i>
                  <span>4. Sin procesos zombies en background</span>
                </div>
                <span className="text-[10px] text-slate-500">PORTS FREE</span>
              </div>

              <div
                onClick={() => toggleItem('idempotentClean')}
                className={`p-2 rounded border cursor-pointer flex items-center justify-between transition-all ${
                  slide12Checklist.idempotentClean
                    ? 'bg-emerald-950/20 border-emerald-500/40 text-white'
                    : 'bg-black/60 border-red-900/60 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  <i
                    className={`fa-solid ${
                      slide12Checklist.idempotentClean ? 'fa-square-check text-emerald-400' : 'fa-square text-slate-600'
                    }`}
                  ></i>
                  <span>5. Limpieza idempotente ejecutada</span>
                </div>
                <span className="text-[10px] text-slate-500">IDEMPOTENT</span>
              </div>
            </div>
          </div>

          <div className="p-2.5 bg-slate-950 rounded border border-slate-800 font-mono text-[10px] text-slate-400">
            Idempotencia: Ejecutar la limpieza 1 vez o 100 veces produce el mismo resultado estable.
          </div>
        </div>

        {/* Right: Quality Document Module Matrix */}
        <div className="md:col-span-6 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-award mr-2"></i>Documento de Calidad (Quality Document)
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">HEALTH MONITOR</span>
            </div>

            {/* Quality Grade Cards */}
            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-2.5 rounded bg-black/60 border border-emerald-500/40 flex items-center justify-between">
                <div>
                  <span className="text-white font-bold">Auth & Security Module</span>
                  <div className="text-[10px] text-slate-400 mt-0.5">Cobertura: 98% &bull; Tipos estrictos &bull; Zero warnings</div>
                </div>
                <span className="text-xs font-mono font-black text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-500/50">
                  CALIDAD: A
                </span>
              </div>

              <div className="p-2.5 rounded bg-black/60 border border-yellow-500/40 flex items-center justify-between">
                <div>
                  <span className="text-white font-bold">Payment Gateway Module</span>
                  <div className="text-[10px] text-slate-400 mt-0.5">Cobertura: 74% &bull; Deuda técnica moderada</div>
                </div>
                <span className="text-xs font-mono font-black text-yellow-400 bg-yellow-950 px-2.5 py-1 rounded border border-yellow-500/50">
                  CALIDAD: C
                </span>
              </div>

              <div className="p-2.5 rounded bg-black/60 border border-slate-800 flex items-center justify-between">
                <div>
                  <span className="text-white font-bold">Search & Filtering Engine</span>
                  <div className="text-[10px] text-slate-400 mt-0.5">Cobertura: 91% &bull; Optimizado para baja latencia</div>
                </div>
                <span className="text-xs font-mono font-black text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-500/50">
                  CALIDAD: B
                </span>
              </div>
            </div>
          </div>

          {/* Harness Simplification Callout */}
          <div className="p-2.5 bg-slate-950 rounded border border-cyan-500/30 font-mono text-xs mt-3">
            <span className="text-cyan-400 font-bold block mb-0.5">Simplificación Periódica del Arnés:</span>
            <span className="text-[11px] text-slate-300">
              A medida que los modelos base evolucionan, retira periódicamente guardrails y reglas redundantes para mantener el arnés ágil.
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="bg-black/80 border border-slate-800 p-3 rounded-lg font-mono text-xs text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-flag-checkered text-emerald-400"></i>
          <span>Cierre de Masterclass:</span>
        </span>
        <span className="text-white font-semibold">
          "El verdadero poder de la IA en ingeniería de software no está en el chat: vive en la arquitectura del arnés."
        </span>
      </div>
    </div>
  );
};
