import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide04_3_ProgressiveDisclosure: React.FC<Props> = () => {
  const blocks = [
    {
      title: '1. PROJECT OVERVIEW',
      target: '3 a 5 líneas',
      desc: 'Qué es el sistema, qué problema resuelve y qué arquitectura general implementa. Cero relleno.',
      icon: 'fa-compass',
    },
    {
      title: '2. QUICK START',
      target: 'Comandos exactos',
      desc: 'Cómo levantar el entorno, instalar dependencias y correr el servidor con una sola orden determinista.',
      icon: 'fa-bolt',
    },
    {
      title: '3. HARD CONSTRAINTS',
      target: 'Reglas no negociables',
      desc: 'Restricciones duras: nunca hacer push a main, no tocar credenciales, linters obligatorios.',
      icon: 'fa-shield-halved',
    },
    {
      title: '4. TOPIC DOCS',
      target: 'Progressive Disclosure',
      desc: 'Punteros a subarchivos en docs/ para que el agente los lea bajo demanda según el módulo.',
      icon: 'fa-layer-group',
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-4-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-file-code text-emerald-400"></i>
            <span>SECCIÓN 04 &bull; DISEÑO DE AGENTS.MD & SNR</span>
          </div>
          <motion.div layoutId="lecture-4-title" className="text-xl font-black text-white mt-1">
            ESTRUCTURA CANÓNICA: <span className="text-emerald-400">LOS 4 BLOQUES & DIVULGACIÓN PROGRESIVA</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 rounded font-bold">
          04.3 / 04.3
        </div>
      </motion.div>

      {/* Main Grid: 4 Blocks Cards */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-4 gap-4 flex-1 items-stretch">
        {blocks.map((b, idx) => (
          <motion.div
            key={b.title}
            whileHover={{ y: -4 }}
            className="p-5 rounded-2xl bg-black/80 border border-slate-800 hover:border-cyan-400/60 flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <i className={`text-lg fa-solid ${b.icon} text-cyan-400`}></i>
                <span className="text-[10px] font-mono text-slate-500 font-bold">BLOQUE 0{idx + 1}</span>
              </div>
              <div className="text-xs font-bold text-white mb-1 font-mono">{b.title}</div>
              <div className="text-[10px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-900/40 mb-3 w-fit">
                {b.target}
              </div>
              <div className="text-[11px] text-slate-300 font-mono leading-relaxed">{b.desc}</div>
            </div>

            <div className="mt-4 pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-500">
              Objetivo: Cero ambigüedad
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-4-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-map text-emerald-400"></i>
          <span>Filosofía del Arnés:</span>
        </span>
        <span className="text-white font-semibold">
          "Proporciona un mapa de alta fidelidad, no un manual de mil páginas que nadie mantendrá."
        </span>
      </motion.div>
    </div>
  );
};
