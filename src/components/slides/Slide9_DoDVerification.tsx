import React, { useCallback, useMemo } from 'react';
import { PresentationState, PresentationAction } from '../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide9_DoDVerification: React.FC<Props> = ({ state, dispatch }) => {
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
      {/* Top Banner */}
      <div className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-shield-halved text-emerald-400"></i>
            Comprobar Definition of Done (DoD): Validación en 3 Capas
          </div>
          <div className="text-sm font-semibold text-white mt-1">
            "Externalizar la sentencia de terminación: <span className="text-red-400">El modelo no puede ser juez de su propia obra</span>."
          </div>
        </div>
        <div
          className={`text-xs font-mono px-3 py-1 rounded font-bold border ${
            isAllApproved
              ? 'bg-emerald-950 border-emerald-400 text-emerald-300 glow-border-green'
              : 'bg-red-950 border-red-500 text-red-300'
          }`}
        >
          {isAllApproved ? 'VEREDICTO: DONE CERTIFICADO' : 'VEREDICTO: VICTORTIA PREMATURA RECHAZADA'}
        </div>
      </div>

      {/* Main Grid: Hazard Flow vs 3-Layer Validation Engine */}
      <div className="my-4 grid grid-cols-1 md:grid-cols-12 gap-4 flex-1">
        {/* Left: Premature Victory Hazard Flow */}
        <div className="md:col-span-5 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-triangle-exclamation mr-2 text-yellow-400"></i>Peligro: Victoria Prematura
              </span>
              <span className="text-[10px] font-mono text-red-400">TRAMPA CLÁSICA</span>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-2.5 rounded bg-black/60 border border-slate-800">
                <div className="text-emerald-400 font-bold mb-1">1. Código escrito & tests unitarios verdes</div>
                <div className="text-[11px] text-slate-400">El agente asume que todo funciona con mocks.</div>
              </div>

              <div className="text-center text-slate-600 font-mono text-xs">
                <i className="fa-solid fa-arrow-down"></i> Pero...
              </div>

              <div className="p-2.5 rounded bg-red-950/20 border border-red-500/40">
                <div className="text-red-400 font-bold mb-1">2. La aplicación real ni siquiera arranca</div>
                <div className="text-[11px] text-slate-300">
                  Falta de variables de entorno, migraciones de base de datos pendientes o puertos colisionados.
                </div>
              </div>

              <div className="text-center text-slate-600 font-mono text-xs">
                <i className="fa-solid fa-arrow-down"></i> Resultado
              </div>

              <div className="p-2.5 rounded bg-red-950 border border-red-500 text-red-300 font-bold text-center">
                El agente declara victoria prematura y rompe producción.
              </div>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-400 border-t border-slate-800 pt-2">
            Solución: El harness debe levantar el proceso real antes de autorizar el cierre.
          </div>
        </div>

        {/* Right: 3-Layer Validation Engine */}
        <div className="md:col-span-7 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-bars-staggered mr-2"></i>Motor de Validación de 3 Capas
              </span>
              <span className="text-xs font-mono text-slate-400">EVALUACIÓN EXTERNA</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {/* Layer 1 */}
              <div
                onClick={() => toggleCheck('l1')}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  slide9Checklist.l1
                    ? 'bg-emerald-950/20 border-emerald-500/50 glow-border-green'
                    : 'bg-black/60 border-red-900/60'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-white">CAPA 1: ANÁLISIS ESTÁTICO & TIPOS</span>
                  <i
                    className={`fa-solid ${
                      slide9Checklist.l1 ? 'fa-check text-emerald-400' : 'fa-xmark text-red-400'
                    }`}
                  ></i>
                </div>
                <div className="text-[11px] text-slate-400">
                  Comandos: <span className="text-cyan-300">mypy --strict src/</span> &bull; <span className="text-cyan-300">ruff check</span>
                </div>
              </div>

              {/* Layer 2 */}
              <div
                onClick={() => toggleCheck('l2')}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  slide9Checklist.l2
                    ? 'bg-emerald-950/20 border-emerald-500/50 glow-border-green'
                    : 'bg-black/60 border-red-900/60'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-white">CAPA 2: SUITE UNITARIA & INTEGRACIÓN</span>
                  <i
                    className={`fa-solid ${
                      slide9Checklist.l2 ? 'fa-check text-emerald-400' : 'fa-xmark text-red-400'
                    }`}
                  ></i>
                </div>
                <div className="text-[11px] text-slate-400">
                  Comandos: <span className="text-cyan-300">pytest tests/ -x</span> (100% de aserciones pasando)
                </div>
              </div>

              {/* Layer 3 */}
              <div
                onClick={() => toggleCheck('l3')}
                className={`p-3 rounded-lg border cursor-pointer transition-all ${
                  slide9Checklist.l3
                    ? 'bg-emerald-950/30 border-emerald-400 glow-border-green'
                    : 'bg-black/60 border-red-500/80'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="font-bold text-emerald-300">CAPA 3: SEÑALES DE TIEMPO DE EJECUCIÓN (SMOKE TEST)</span>
                  <i
                    className={`fa-solid ${
                      slide9Checklist.l3 ? 'fa-check text-emerald-400' : 'fa-xmark text-red-400'
                    }`}
                  ></i>
                </div>
                <div className="text-[11px] text-slate-300">
                  Comandos: <span className="text-cyan-300">curl -f http://localhost:8000/healthz == 200 OK</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-3 p-2 bg-slate-950 rounded border border-slate-800 text-[10px] font-mono text-slate-400 flex justify-between items-center">
            <span>Feedback Procesable: Si falla, devolver stacktrace exacto y archivo afectado.</span>
            <span className="text-cyan-400 font-bold">CLICK PARA TOGGLEAR CAPAS</span>
          </div>
        </div>
      </div>

      {/* Bottom Axiom */}
      <div className="bg-black/80 border border-slate-800 p-3 rounded-lg font-mono text-xs text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-gavel text-cyan-400"></i>
          <span>Axioma del Árbitro Externo:</span>
        </span>
        <span className="text-white font-semibold">
          "El agente solicita la verificación; sólo el arnés concede la aprobación."
        </span>
      </div>
    </div>
  );
};
