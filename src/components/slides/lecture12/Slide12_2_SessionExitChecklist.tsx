import React, { useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide12_2_SessionExitChecklist: React.FC<Props> = ({ state, dispatch }) => {
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
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-12-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-broom text-emerald-400"></i>
            <span>SECCIÓN 12 &bull; FINAL DE SESIÓN LIMPIO & IDEMPOTENCIA</span>
          </div>
          <motion.div layoutId="lecture-12-title" className="text-xl font-black text-white mt-1">
            SESSION EXIT CHECKLIST: <span className="text-cyan-400">5 CONDICIONES NO NEGOCIABLES</span>
          </motion.div>
        </div>
        <div
          className={`text-xs font-mono px-3 py-1.5 rounded font-bold border transition-all ${
            isSessionClean
              ? 'bg-emerald-950 border-emerald-400 text-emerald-300 glow-border-green'
              : 'bg-red-950/80 border-red-500/50 text-red-300'
          }`}
        >
          {isSessionClean ? 'SESIÓN CERRADA: COMMIT PERMITIDO' : 'SESIÓN BLOQUEADA: WORKSPACE SUCIO'}
        </div>
      </motion.div>

      {/* Main Grid: Interactive 5 Conditions vs Verification Engine Status */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-stretch">
        {/* Left: Interactive Checklist */}
        <div className="md:col-span-7 p-6 rounded-2xl bg-black/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-list-check text-cyan-400"></i> Condiciones de Salida de Sesión
              </span>
              <span className="text-[10px] font-mono text-slate-400">CLICK PARA TOGGLEAR</span>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div
                onClick={() => toggleItem('gitClean')}
                className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                  slide12Checklist.gitClean
                    ? 'bg-emerald-950/20 border-emerald-500/50 text-white'
                    : 'bg-black/60 border-red-900/60 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <i
                    className={`fa-solid ${
                      slide12Checklist.gitClean ? 'fa-square-check text-emerald-400' : 'fa-square text-slate-600'
                    }`}
                  ></i>
                  <span className="font-semibold">1. Árbol de Git limpio (git status vacío)</span>
                </div>
                <span className="text-[10px] text-slate-500">NO UNTRACKED</span>
              </div>

              <div
                onClick={() => toggleItem('testsPass')}
                className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                  slide12Checklist.testsPass
                    ? 'bg-emerald-950/20 border-emerald-500/50 text-white'
                    : 'bg-black/60 border-red-900/60 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <i
                    className={`fa-solid ${
                      slide12Checklist.testsPass ? 'fa-square-check text-emerald-400' : 'fa-square text-slate-600'
                    }`}
                  ></i>
                  <span className="font-semibold">2. Suite de pruebas pasando al 100%</span>
                </div>
                <span className="text-[10px] text-slate-500">PYTEST GREEN</span>
              </div>

              <div
                onClick={() => toggleItem('progressWritten')}
                className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                  slide12Checklist.progressWritten
                    ? 'bg-emerald-950/20 border-emerald-500/50 text-white'
                    : 'bg-black/60 border-red-900/60 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <i
                    className={`fa-solid ${
                      slide12Checklist.progressWritten ? 'fa-square-check text-emerald-400' : 'fa-square text-slate-600'
                    }`}
                  ></i>
                  <span className="font-semibold">3. PROGRESS.md actualizado con cambios</span>
                </div>
                <span className="text-[10px] text-slate-500">HANDOFF OK</span>
              </div>

              <div
                onClick={() => toggleItem('noZombies')}
                className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                  slide12Checklist.noZombies
                    ? 'bg-emerald-950/20 border-emerald-500/50 text-white'
                    : 'bg-black/60 border-red-900/60 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <i
                    className={`fa-solid ${
                      slide12Checklist.noZombies ? 'fa-square-check text-emerald-400' : 'fa-square text-slate-600'
                    }`}
                  ></i>
                  <span className="font-semibold">4. Sin procesos zombies en background</span>
                </div>
                <span className="text-[10px] text-slate-500">PORTS FREE</span>
              </div>

              <div
                onClick={() => toggleItem('idempotentClean')}
                className={`p-3 rounded-xl border cursor-pointer flex items-center justify-between transition-all ${
                  slide12Checklist.idempotentClean
                    ? 'bg-emerald-950/20 border-emerald-500/50 text-white'
                    : 'bg-black/60 border-red-900/60 text-slate-400'
                }`}
              >
                <div className="flex items-center gap-3">
                  <i
                    className={`fa-solid ${
                      slide12Checklist.idempotentClean ? 'fa-square-check text-emerald-400' : 'fa-square text-slate-600'
                    }`}
                  ></i>
                  <span className="font-semibold">5. Limpieza idempotente ejecutada</span>
                </div>
                <span className="text-[10px] text-slate-500">IDEMPOTENT</span>
              </div>
            </div>
          </div>

          <div className="text-xs font-mono text-slate-400 pt-3 border-t border-slate-800">
            El arnés intercepta automáticamente el comando `git commit` y aborta si falta algún check.
          </div>
        </div>

        {/* Right: Arbiter Gate status */}
        <div className="md:col-span-5 p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/50 glow-border-cyan flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-cyan-900/40 mb-4">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-lock text-emerald-400"></i> Guardrail de Salida del Arnés
              </span>
              <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                GATE ARBITER
              </span>
            </div>

            <div className={`p-4 rounded-xl border mb-4 font-mono text-xs ${
              isSessionClean
                ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-300 glow-border-green'
                : 'bg-red-950/40 border-red-500/50 text-red-300'
            }`}>
              <div className="font-bold text-sm mb-1">
                {isSessionClean ? 'VEREDICTO: COMMIT HABILITADO' : 'VEREDICTO: SALIDA DENEGADA'}
              </div>
              <div className="text-[11px] opacity-90 leading-relaxed">
                {isSessionClean
                  ? 'Todos los invariantes satisfechos. El estado es reproducible y apto para ser tomado por la siguiente sesión.'
                  : 'Existen condiciones pendientes. El arnés impide persistir un estado que degrade la higiene del repositorio.'}
              </div>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-400 space-y-1">
              <div className="text-[10px] text-slate-500 font-bold uppercase">Pre-Commit Hook Agéntico:</div>
              <div className="text-cyan-300 text-[11px]">agy harness verify-exit-clean --strict</div>
            </div>
          </div>

          <div className="p-3 bg-cyan-950/40 border border-cyan-500/40 rounded-xl text-xs font-mono text-cyan-300 font-bold">
            Garantiza que ninguna sesión deje una trampa silenciosa a la siguiente.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-12-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-clipboard-check text-cyan-400"></i>
          <span>Guardrail de Salida:</span>
        </span>
        <span className="text-white font-semibold">
          "Ningún agente puede emitir un commit si el repositorio presenta la más mínima suciedad."
        </span>
      </motion.div>
    </div>
  );
};
