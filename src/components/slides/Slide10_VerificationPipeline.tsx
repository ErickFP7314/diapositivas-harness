import React, { useCallback } from 'react';
import { PresentationState, PresentationAction } from '../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide10_VerificationPipeline: React.FC<Props> = ({ state, dispatch }) => {
  const { slide10Layer } = state;

  const setLayer = useCallback(
    (layer: 'unit' | 'integration' | 'arch' | 'e2e') => {
      dispatch({ type: 'SET_SLIDE_10_LAYER', layer });
    },
    [dispatch]
  );

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Top Banner */}
      <div className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between">
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-network-wired text-emerald-400"></i>
            Pipeline de Verificación E2E & Límites Arquitectónicos
          </div>
          <div className="text-sm font-semibold text-white mt-1">
            "Defectos en límites: <span className="text-cyan-400">Componente A (Green)</span> + <span className="text-cyan-400">Componente B (Green)</span> = <span className="text-red-400">Frontera Rota</span>."
          </div>
        </div>
        <div className="flex gap-1.5">
          {(['unit', 'integration', 'arch', 'e2e'] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLayer(lvl)}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold border transition-all ${
                slide10Layer === lvl
                  ? 'bg-cyan-950 border-cyan-400 text-cyan-300 glow-border-cyan'
                  : 'bg-black border-slate-800 text-slate-500'
              }`}
            >
              {lvl.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Component Boundary Defect vs Agent-Oriented Error Messages */}
      <div className="my-4 grid grid-cols-1 md:grid-cols-12 gap-4 flex-1">
        {/* Left: Component Boundary Defect Simulator */}
        <div className="md:col-span-6 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-puzzle-piece mr-2"></i>Fallo en el Límite de Componentes
              </span>
              <span className="text-[10px] font-mono text-yellow-400">MISMATCH CONTRACT</span>
            </div>

            {/* Boundary Visual Schema */}
            <div className="space-y-3 font-mono text-xs">
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-500/40 text-center">
                  <div className="text-emerald-400 font-bold mb-1">MÓDULO A (UI)</div>
                  <div className="text-[10px] text-slate-300">Unit Tests: 100% GREEN</div>
                  <div className="text-[9px] text-slate-500 mt-1">Espera: camelCase payload</div>
                </div>

                <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-500/40 text-center">
                  <div className="text-emerald-400 font-bold mb-1">MÓDULO B (API)</div>
                  <div className="text-[10px] text-slate-300">Unit Tests: 100% GREEN</div>
                  <div className="text-[9px] text-slate-500 mt-1">Envía: snake_case payload</div>
                </div>
              </div>

              {/* Broken Boundary Collision */}
              <div className="p-2.5 rounded bg-red-950/30 border border-red-500/60 text-center">
                <div className="text-red-400 font-bold mb-0.5">
                  <i className="fa-solid fa-bolt mr-2"></i>COLAPSO EN LA FRONTERA (E2E FAIL)
                </div>
                <div className="text-[10px] text-slate-300">
                  Las pruebas unitarias nunca detectaron la discrepancia de serialización.
                </div>
              </div>
            </div>

            {/* Verification Hierarchy Hierarchy */}
            <div className="mt-3 p-2 bg-slate-950 rounded border border-slate-800 font-mono text-[10px] text-slate-400">
              <div className="font-bold text-cyan-400 mb-1">Gradiente de Adecuación:</div>
              <span>Tests Unitarios &le; Integración &le; Reglas Arquitectónicas &le; Tests E2E</span>
            </div>
          </div>

          <div className="text-[10px] font-mono text-slate-500 border-t border-slate-800 pt-2">
            El arnés debe incorporar obligatoriamente una suite de extremo a extremo.
          </div>
        </div>

        {/* Right: Agent-Oriented Error Messages Design */}
        <div className="md:col-span-6 bg-black/90 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-3">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase">
                <i className="fa-solid fa-terminal mr-2"></i>Diseño de Errores Orientados al Agente
              </span>
              <span className="text-xs font-mono text-emerald-400">FEEDBACK ACCIONABLE</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              {/* Bad Error */}
              <div className="p-2.5 rounded bg-red-950/20 border border-red-500/40">
                <div className="text-red-400 font-bold mb-1 flex items-center justify-between">
                  <span>Mensaje Convencional Inútil:</span>
                  <i className="fa-solid fa-xmark"></i>
                </div>
                <div className="text-[11px] text-slate-400 bg-black/80 p-2 rounded border border-slate-800">
                  TypeError: Cannot read properties of undefined (reading 'status')
                </div>
                <div className="text-[10px] text-slate-500 mt-1">Provoca alucinación y correcciones ciegas.</div>
              </div>

              {/* Good Error */}
              <div className="p-2.5 rounded bg-emerald-950/20 border border-emerald-500/50 glow-border-green">
                <div className="text-emerald-400 font-bold mb-1 flex items-center justify-between">
                  <span>Mensaje Estructurado para el Agente:</span>
                  <i className="fa-solid fa-check"></i>
                </div>
                <div className="text-[11px] text-white bg-black/80 p-2 rounded border border-emerald-500/40 leading-relaxed">
                  [REGLA ARQUITECTÓNICA VIOLADA en src/ui/Client.ts:18]<br/>
                  <span className="text-yellow-400">Invariante:</span> La UI requiere 'orderStatus' en camelCase.<br/>
                  <span className="text-cyan-400">Acción Requerida:</span> Ajusta el deserializador en src/api/dto.ts para mapear 'order_status' &rarr; 'orderStatus'.
                </div>
              </div>
            </div>
          </div>

          <div className="p-2 bg-slate-950 rounded border border-slate-800 font-mono text-[10px] text-slate-400">
            Regla de Ejecución: Convertir cada comentario de code-review recurrente en una regla ejecutable.
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="bg-black/80 border border-slate-800 p-3 rounded-lg font-mono text-xs text-slate-400 flex items-center justify-between">
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-code-compare text-cyan-400"></i>
          <span>Reglas Arquitectónicas:</span>
        </span>
        <span className="text-white font-semibold">
          "Las reglas de arquitectura deben ser scripts ejecutables en el pipeline, no buenos deseos en un wiki."
        </span>
      </div>
    </div>
  );
};
