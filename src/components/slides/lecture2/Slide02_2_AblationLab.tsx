import React, { useMemo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction, SubsystemType } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide02_2_AblationLab: React.FC<Props> = ({ state, dispatch }) => {
  const { slide2Subsystems } = state;

  const toggleSubsystem = useCallback(
    (subsystem: SubsystemType) => {
      dispatch({ type: 'TOGGLE_SLIDE_2_SUBSYSTEM', subsystem });
    },
    [dispatch]
  );

  const subsystemsList = [
    { key: 'instructions' as SubsystemType, name: 'Instrucciones', icon: 'fa-file-lines', penalty: 45 },
    { key: 'tools' as SubsystemType, name: 'Herramientas', icon: 'fa-toolbox', penalty: 88 },
    { key: 'environment' as SubsystemType, name: 'Entorno', icon: 'fa-box-archive', penalty: 55 },
    { key: 'state' as SubsystemType, name: 'Estado', icon: 'fa-database', penalty: 65 },
    { key: 'feedback' as SubsystemType, name: 'Retroalimentación', icon: 'fa-rotate-right', penalty: 78, highlight: true },
  ];

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
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-2-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-layer-group text-emerald-400"></i>
            <span>SECCIÓN 02 &bull; EL MODELO DE 5 SUBSISTEMAS</span>
          </div>
          <motion.div layoutId="lecture-2-title" className="text-xl font-black text-white mt-1">
            LABORATORIO DE ABLACIÓN: <span className="text-emerald-400">PRUEBAS DE EXCLUSIÓN</span>
          </motion.div>
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
          <div className="text-xs font-mono px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 rounded font-bold">
            02.2 / 02.3
          </div>
        </div>
      </motion.div>

      {/* Main Interactive Ablation Lab */}
      <div className="my-6 bg-black/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between flex-1">
        <div>
          <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-5">
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
              <i className="fa-solid fa-flask-vial mr-2"></i>SIMULADOR DE ABLACIÓN &bull; HAZ CLIC PARA APAGAR SUBSISTEMAS
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              PRUEBAS DE EXCLUSIÓN DE VARIABLES CONTROLADAS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-6">
            {subsystemsList.map((sub) => {
              const active = slide2Subsystems[sub.key];
              return (
                <div
                  key={sub.key}
                  onClick={() => toggleSubsystem(sub.key)}
                  className={`p-4 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                    active
                      ? sub.highlight
                        ? 'bg-emerald-950/40 border-emerald-400 glow-border-green'
                        : 'bg-black/80 border-cyan-500/50 glow-border-cyan'
                      : 'bg-black/30 border-red-900/60 opacity-40 grayscale'
                  }`}
                >
                  <div className="flex justify-between items-center mb-3">
                    <i
                      className={`text-lg fa-solid ${sub.icon} ${
                        active ? (sub.highlight ? 'text-emerald-400' : 'text-cyan-400') : 'text-red-400'
                      }`}
                    ></i>
                    <span
                      className={`text-[9px] font-mono px-1.5 py-0.5 rounded font-bold uppercase ${
                        active
                          ? 'bg-emerald-950 text-emerald-300 border border-emerald-500/40'
                          : 'bg-red-950 text-red-400 border border-red-800'
                      }`}
                    >
                      {active ? 'ACTIVO' : 'APAGADO'}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-white mb-1">{sub.name}</div>
                  <div className="text-[10px] font-mono text-slate-400">
                    Ablación: <span className="text-red-400 font-bold">-{sub.penalty}%</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Diagnostic Callout */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300">
            <span className="text-cyan-400 font-bold block mb-1">
              <i className="fa-solid fa-microscope mr-1"></i>Hallazgo Experimental:
            </span>
            Al apagar <span className="text-emerald-400 font-bold">Retroalimentación</span>, la confiabilidad se desploma al 20%. El agente pierde el bucle cerrado y genera código defectuoso que nunca verifica.
          </div>
        </div>

        <div className="pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500 flex justify-between items-center">
          <span>Metodología: Aislar el cuello de botella mediante atribución y logs de fallo, no solo intuición.</span>
          <span className="text-emerald-400 font-bold">ABLATION PROVEN</span>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-2-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-chart-line text-emerald-400"></i>
          <span>Regla de Diagnóstico:</span>
        </span>
        <span className="text-white font-semibold">
          "Utiliza pruebas de exclusión controladas para cuantificar la contribución marginal de cada subsistema."
        </span>
      </motion.div>
    </div>
  );
};
