import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide01_1_FiveTraps: React.FC<Props> = () => {
  const [selectedTrap, setSelectedTrap] = useState(0);

  const traps = [
    {
      id: 0,
      title: '1. REQUISITOS VAGOS',
      layer: 'ESPECIFICACIÓN',
      symptom: 'El agente no tiene telepatía: si la orden es ambigua, sólo puede adivinar.',
      harnessFix: 'Definition of Done formal con especificación de inputs, outputs y tipos exactos.',
    },
    {
      id: 1,
      title: '2. CONVENCIONES IMPLÍCITAS',
      layer: 'CONTEXTO',
      symptom: 'Reglas de arquitectura que sólo viven en la cabeza de los ingenieros o en hilos de Slack.',
      harnessFix: 'AGENTS.md modular con reglas duras y linters arquitectónicos ejecutables.',
    },
    {
      id: 2,
      title: '3. ENTORNO INCOMPLETO',
      layer: 'RUNTIME',
      symptom: 'El agente quema el 80% de sus tokens peleando con paquetes rotos de npm o pip.',
      harnessFix: 'Contenedor Docker / devcontainer reproducible con versiones congeladas.',
    },
    {
      id: 3,
      title: '4. VERIFICACIÓN AUSENTE',
      layer: 'FEEDBACK',
      symptom: 'El agente dice que terminó en cuanto "siente" que escribió algo coherente.',
      harnessFix: 'Validación en 3 capas con comandos deterministas (pytest, types, healthcheck).',
    },
    {
      id: 4,
      title: '5. PÉRDIDA DE ESTADO',
      layer: 'PERSISTENCIA',
      symptom: 'Cada nueva sesión arranca desde cero perdiendo el contexto de decisiones previas.',
      harnessFix: 'Persistencia continua con PROGRESS.md y commits atómicos con principios ACID.',
    },
  ];

  const activeTrap = traps[selectedTrap];

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-1-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-microchip text-emerald-400"></i>
            <span>SECCIÓN 01 &bull; IMPORTANCIA DEL HARNESS</span>
          </div>
          <motion.div layoutId="lecture-1-title" className="text-xl font-black text-white mt-1">
            DÓNDE MUEREN LOS AGENTES: <span className="text-red-400">LAS 5 TRAMPAS ESTRUCTURALES</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          01.1 / 01.3
        </div>
      </motion.div>

      {/* Main Grid: Interactive Traps Selector vs Structural Remedy */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-12 gap-5 flex-1 items-stretch">
        {/* Left: 5 Traps Selector */}
        <div className="md:col-span-5 flex flex-col justify-between gap-2">
          {traps.map((t, idx) => (
            <motion.div
              key={t.id}
              onClick={() => setSelectedTrap(idx)}
              whileHover={{ x: 4 }}
              className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                selectedTrap === idx
                  ? 'bg-cyan-950/70 border-cyan-400 glow-border-cyan text-white'
                  : 'bg-black/80 border-slate-800 text-slate-400 hover:border-slate-700'
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs font-bold text-cyan-400">0{idx + 1}</span>
                <span className="text-xs font-bold font-mono">{t.title}</span>
              </div>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-400">
                {t.layer}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Right: Detailed Diagnostic Artifact */}
        <motion.div
          key={activeTrap.id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.2 }}
          className="md:col-span-7 bg-black/90 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center pb-3 border-b border-slate-800 mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider">
                <i className="fa-solid fa-stethoscope mr-2"></i>DIAGNÓSTICO ESTRUCTURAL
              </span>
              <span className="text-xs font-mono text-emerald-400 font-bold">
                CAPA: {activeTrap.layer}
              </span>
            </div>

            {/* Production Symptom */}
            <div className="bg-red-950/20 border border-red-500/40 rounded-xl p-4 mb-4">
              <div className="text-[10px] font-bold text-red-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <i className="fa-solid fa-circle-xmark"></i>
                <span>Síntoma en Producción:</span>
              </div>
              <div className="text-xs text-slate-200 font-mono leading-relaxed">
                {activeTrap.symptom}
              </div>
            </div>

            {/* Harness Fix */}
            <div className="bg-emerald-950/20 border border-emerald-500/40 rounded-xl p-4 glow-border-green">
              <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <i className="fa-solid fa-circle-check"></i>
                <span>Remedio de Ingeniería de Harness:</span>
              </div>
              <div className="text-xs text-white font-mono font-semibold leading-relaxed">
                {activeTrap.harnessFix}
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800 text-[10px] font-mono text-slate-500">
            Regla: 9 de cada 10 fallos agénticos se originan en una de estas cinco capas, nunca en el modelo.
          </div>
        </motion.div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-1-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-triangle-exclamation text-red-400"></i>
          <span>Axioma de Diagnóstico:</span>
        </span>
        <span className="text-white font-semibold">
          "No digas simplemente 'el modelo no es lo bastante bueno'. Trabaja sistemáticamente las cinco capas."
        </span>
      </motion.div>
    </div>
  );
};
