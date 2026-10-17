import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide06_3_ReadinessChecklist: React.FC<Props> = () => {
  const checks = [
    {
      num: '01',
      title: 'Comando de Setup Determinista',
      cmd: '$ make init',
      desc: 'Levanta el runtime completo, descarga dependencias congeladas y verifica permisos sin intervención interactiva.',
    },
    {
      num: '02',
      title: 'Smoke Test Base en Verde',
      cmd: '$ pytest tests/test_smoke.py',
      desc: 'Comprueba que el intérprete, base de datos y librerías clave pueden instanciarse sin fallos de importación.',
    },
    {
      num: '03',
      title: 'Lockfiles & Versiones Congeladas',
      cmd: 'package-lock.json / uv.lock / Dockerfile',
      desc: 'Prohíbe estrictamente la instalación de versiones dinámicas ("latest") que introduzcan derivas incompatibles.',
    },
    {
      num: '04',
      title: 'Lista de Tareas Inicializada',
      cmd: 'PROGRESS.md / tasks.json',
      desc: 'El plan de trabajo contiene la primera tarea en TODO con especificación e invariantes claras.',
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-6-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-play text-emerald-400"></i>
            <span>SECCIÓN 06 &bull; INICIALIZACIÓN EN DOS FASES</span>
          </div>
          <motion.div layoutId="lecture-6-title" className="text-xl font-black text-white mt-1">
            VERIFICACIÓN: <span className="text-cyan-400">STARTUP READINESS CHECKLIST</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 rounded font-bold">
          06.3 / 06.3
        </div>
      </motion.div>

      {/* Main Grid: 4 Readiness Checks */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 items-stretch">
        {checks.map((c) => (
          <div
            key={c.num}
            className="p-5 rounded-2xl bg-black/80 border border-slate-800 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold font-mono text-white flex items-center gap-2">
                  <i className="fa-solid fa-square-check text-emerald-400"></i>
                  <span>{c.title}</span>
                </span>
                <span className="text-[10px] font-mono text-slate-500 font-bold">{c.num}</span>
              </div>
              <div className="text-[11px] font-mono text-cyan-300 bg-slate-950 p-2 rounded-lg border border-slate-800 mb-2">
                {c.cmd}
              </div>
              <div className="text-[11px] text-slate-300 font-mono leading-relaxed">{c.desc}</div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800/80 text-[10px] font-mono text-emerald-400 flex items-center gap-1.5">
              <i className="fa-solid fa-circle-check"></i>
              <span>REQUISITO PREVIO CUMPLIDO</span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-6-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-terminal text-cyan-400"></i>
          <span>Comando de Verificación de Arranque:</span>
        </span>
        <span className="text-cyan-400 font-bold bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
          $ make verify-init && git status --porcelain == OK
        </span>
      </motion.div>
    </div>
  );
};
