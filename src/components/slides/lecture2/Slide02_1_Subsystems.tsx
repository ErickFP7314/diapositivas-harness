import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide02_1_Subsystems: React.FC<Props> = () => {
  const subsystems = [
    {
      num: '01',
      name: 'INSTRUCCIONES',
      file: 'AGENTS.md / CLAUDE.md',
      desc: 'Propósito del sistema, restricciones duras no negociables y punteros modulares a docs/.',
      icon: 'fa-file-lines',
      color: 'text-cyan-400',
    },
    {
      num: '02',
      name: 'HERRAMIENTAS',
      file: 'Tool Bus (read, write, edit, bash)',
      desc: 'Las manos del LLM. Primitivas con sandboxing de rutas, límites de tamaño y timeouts estrictos.',
      icon: 'fa-toolbox',
      color: 'text-cyan-400',
    },
    {
      num: '03',
      name: 'ENTORNO',
      file: 'Docker / devcontainers / Lockfiles',
      desc: 'Tiempo de ejecución hermético con versiones fijas y dependencias 100% reproducibles.',
      icon: 'fa-box-archive',
      color: 'text-cyan-400',
    },
    {
      num: '04',
      name: 'ESTADO',
      file: 'PROGRESS.md / Git Commits',
      desc: 'La memoria transaccional: qué está hecho, qué está en curso y qué bloqueos existen.',
      icon: 'fa-database',
      color: 'text-cyan-400',
    },
    {
      num: '05',
      name: 'RETROALIMENTACIÓN',
      file: 'pytest, mypy, linters, make check',
      desc: 'Comandos de verificación determinista en bucle cerrado. El subsistema de mayor ROI.',
      icon: 'fa-rotate-right',
      color: 'text-emerald-400',
      highlight: true,
    },
  ];

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
            TOPOLOGÍA: <span className="text-cyan-400">LOS CINCO SUBSISTEMAS ESENCIALES</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          02.1 / 02.3
        </div>
      </motion.div>

      {/* Main 5 Subsystems Cards Grid */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-5 gap-3 flex-1 items-stretch">
        {subsystems.map((sub) => (
          <motion.div
            key={sub.num}
            whileHover={{ y: -4 }}
            className={`p-4 rounded-2xl border flex flex-col justify-between ${
              sub.highlight
                ? 'bg-emerald-950/30 border-emerald-400 glow-border-green'
                : 'bg-black/80 border-slate-800 hover:border-slate-700'
            }`}
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <i className={`text-xl fa-solid ${sub.icon} ${sub.color}`}></i>
                <span className="text-[10px] font-mono text-slate-500 font-bold">{sub.num}</span>
              </div>
              <div className="text-xs font-bold text-white mb-1">{sub.name}</div>
              <div className="text-[10px] font-mono text-cyan-300 bg-slate-950 px-2 py-1 rounded border border-slate-800/80 mb-2 truncate">
                {sub.file}
              </div>
              <div className="text-[10px] text-slate-400 font-mono leading-relaxed">{sub.desc}</div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
              {sub.highlight ? (
                <span className="text-emerald-400 font-bold">★ MÁXIMO ROI</span>
              ) : (
                <span>PILAR OBLIGATORIO</span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-2-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-cubes-stacked text-cyan-400"></i>
          <span>Fórmula de Arquitectura:</span>
        </span>
        <span className="text-white font-semibold">
          "Arnés = Instrucciones + Herramientas + Entorno + Estado + Retroalimentación. Los cinco son innegociables."
        </span>
      </motion.div>
    </div>
  );
};
