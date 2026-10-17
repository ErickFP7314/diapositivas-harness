import React, { useMemo, useCallback } from 'react';
import { PresentationState, PresentationAction, SubsystemType } from '../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide2_FiveSubsystems: React.FC<Props> = ({ state, dispatch }) => {
  const { slide2Subsystems } = state;

  const toggleSubsystem = useCallback(
    (subsystem: SubsystemType) => {
      dispatch({ type: 'TOGGLE_SLIDE_2_SUBSYSTEM', subsystem });
    },
    [dispatch]
  );

  const subsystemsList = useMemo(
    () => [
      {
        key: 'instructions' as SubsystemType,
        name: '1. INSTRUCCIONES',
        artifact: 'AGENTS.md / CLAUDE.md',
        description: 'Propósito, restricciones duras y enlaces jerárquicos a documentación.',
        icon: 'fa-file-lines',
        penalty: 50,
      },
      {
        key: 'tools' as SubsystemType,
        name: '2. HERRAMIENTAS',
        artifact: 'Primitivas (read, write, edit, bash)',
        description: 'Manos del LLM con control estricto de timeout y sandboxing de rutas.',
        icon: 'fa-toolbox',
        penalty: 90,
      },
      {
        key: 'environment' as SubsystemType,
        name: '3. ENTORNO',
        artifact: 'Docker / devcontainers / Lockfiles',
        description: 'Ambiente reproducible con versiones fijas y dependencias herméticas.',
        icon: 'fa-box-archive',
        penalty: 60,
      },
      {
        key: 'state' as SubsystemType,
        name: '4. ESTADO',
        artifact: 'PROGRESS.md / Git Commits',
        description: 'Registro transaccional: qué está hecho, qué está en progreso y bloqueos.',
        icon: 'fa-database',
        penalty: 68,
      },
      {
        key: 'feedback' as SubsystemType,
        name: '5. RETROALIMENTACIÓN',
        artifact: 'pytest, mypy, linters, make check',
        description: 'El subsistema con el mayor ROI. Verificación en bucle cerrado.',
        icon: 'fa-rotate-right',
        penalty: 82,
        highlight: true,
      },
    ],
    []
  );

  // Reliability Score calculated dynamically with useMemo
  const reliabilityScore = useMemo(() => {
    let score = 98;
    if (!slide2Subsystems.instructions) score -= 45;
    if (!slide2Subsystems.tools) score -= 88;
    if (!slide2Subsystems.environment) score -= 55;
    if (!slide2Subsystems.state) score -= 65;
    if (!slide2Subsystems.feedback) score -= 78;
    return Math.max(score, 5);
  }, [slide2Subsystems]);

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Header Banner */}
      <div className="flex items-center justify-between bg-black/90 border border-slate-800 p-4 rounded-xl">
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase">
            <i className="fa-solid fa-cubes-stacked mr-2"></i>Arquitectura de Andamiaje
          </div>
          <div className="text-sm font-semibold text-white mt-1">
            Arnés = <span className="text-cyan-400">Instrucciones</span> + <span className="text-cyan-400">Herramientas</span> + <span className="text-cyan-400">Entorno</span> + <span className="text-cyan-400">Estado</span> + <span className="text-emerald-400 font-bold">Comentarios</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-[10px] text-slate-400 font-mono">CONFIABILIDAD CALCULADA</div>
            <div
              className={`text-xl font-mono font-black ${
                reliabilityScore > 80
                  ? 'text-emerald-400'
                  : reliabilityScore > 50
                  ? 'text-yellow-400'
                  : 'text-red-500 animate-pulse'
              }`}
            >
              {reliabilityScore}%
            </div>
          </div>
          <div className="h-8 w-1 bg-slate-800 rounded"></div>
          <div className="text-2xl text-emerald-400">
            <i className="fa-solid fa-gauge-high"></i>
          </div>
        </div>
      </div>

      {/* Main Interactive Subsystems Board */}
      <div className="my-4 grid grid-cols-1 md:grid-cols-5 gap-3 flex-1">
        {subsystemsList.map((sub) => {
          const isActive = slide2Subsystems[sub.key];
          return (
            <div
              key={sub.key}
              onClick={() => toggleSubsystem(sub.key)}
              className={`p-4 rounded-xl border flex flex-col justify-between cursor-pointer transition-all ${
                isActive
                  ? sub.highlight
                    ? 'bg-emerald-950/30 border-emerald-400 glow-border-green'
                    : 'bg-black/80 border-cyan-500/50 glow-border-cyan'
                  : 'bg-black/30 border-red-900/60 opacity-50 grayscale'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-2">
                  <i
                    className={`text-lg fa-solid ${sub.icon} ${
                      isActive ? (sub.highlight ? 'text-emerald-400' : 'text-cyan-400') : 'text-red-400'
                    }`}
                  ></i>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded font-bold uppercase ${
                      isActive ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40' : 'bg-red-950 text-red-400 border border-red-800'
                    }`}
                  >
                    {isActive ? 'ACTIVO' : 'ABLACIÓN'}
                  </span>
                </div>

                <div className="text-xs font-bold text-white mb-1">{sub.name}</div>
                <div className="text-[10px] font-mono text-cyan-300 bg-slate-950/80 px-2 py-1 rounded border border-slate-800 mb-2 truncate">
                  {sub.artifact}
                </div>
                <div className="text-[10px] text-slate-400 font-mono leading-relaxed">
                  {sub.description}
                </div>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-800/80 flex justify-between items-center text-[10px] font-mono">
                <span className="text-slate-500">Ablación:</span>
                <span className={isActive ? 'text-slate-400' : 'text-red-400 font-bold'}>
                  -{sub.penalty}% Éxito
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Insights: The Feedback ROI Rule */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-black/90 border border-slate-800 p-4 rounded-xl font-mono text-xs">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded bg-emerald-950/60 border border-emerald-500/50 text-emerald-400">
            <i className="fa-solid fa-chart-line"></i>
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase font-bold">Máximo Retorno (ROI)</div>
            <div className="text-xs font-bold text-white mt-0.5">Retroalimentación / Checks</div>
            <div className="text-[10px] text-emerald-400">Menor costo, mayor salto de confiabilidad</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded bg-cyan-950/60 border border-cyan-500/50 text-cyan-400">
            <i className="fa-solid fa-vial-circle-check"></i>
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase font-bold">Pruebas de Exclusión</div>
            <div className="text-xs font-bold text-white mt-0.5">Ablación de Variables</div>
            <div className="text-[10px] text-slate-400">Apaga un componente para medir su impacto</div>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded bg-slate-900 border border-slate-700 text-slate-300">
            <i className="fa-solid fa-recycle"></i>
          </div>
          <div>
            <div className="text-[10px] text-slate-400 uppercase font-bold">Higiene del Arnés</div>
            <div className="text-xs font-bold text-white mt-0.5">Pagar la Deuda del Arnés</div>
            <div className="text-[10px] text-slate-400">Auditar periódicamente y retirar reglas obsoletas</div>
          </div>
        </div>
      </div>
    </div>
  );
};
