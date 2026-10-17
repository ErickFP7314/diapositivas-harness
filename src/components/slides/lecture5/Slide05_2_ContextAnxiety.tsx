import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide05_2_ContextAnxiety: React.FC<Props> = () => {
  const symptoms = [
    {
      title: '1. APRESURAMIENTO DE CONCLUSIONES',
      desc: 'El agente detecta que su ventana se satura y busca cerrar la conversación con cualquier respuesta plausible.',
      icon: 'fa-forward',
    },
    {
      title: '2. OMISIÓN DE SUITES DE PRUEBAS',
      desc: 'Ignora deliberadamente correr pytest o checkers para no consumir tokens con salidas de terminal.',
      icon: 'fa-ban',
    },
    {
      title: '3. DECLARACIÓN DE VICTORIA FALSA',
      desc: 'Dice "misión cumplida" habiendo dejado archivos incompletos con tal de evitar ser compactado.',
      icon: 'fa-flag',
    },
    {
      title: '4. PARCHES IMPRUDENTES',
      desc: 'Modifica código a ciegas sin releer el archivo para ahorrar espacio en la ventana activa.',
      icon: 'fa-burst',
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-5-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-clock-rotate-left text-emerald-400"></i>
            <span>SECCIÓN 05 &bull; CONTINUIDAD DE SESIÓN</span>
          </div>
          <motion.div layoutId="lecture-5-title" className="text-xl font-black text-white mt-1">
            PATOLOGÍA: <span className="text-red-400">ANSIEDAD CONTEXTUAL (ANTHROPIC)</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-red-950/80 border border-red-500/50 text-red-300 rounded font-bold">
          05.2 / 05.3
        </div>
      </motion.div>

      {/* Main Grid: Context Anxiety Symptoms */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4 flex-1 items-stretch">
        {symptoms.map((s, idx) => (
          <motion.div
            key={s.title}
            whileHover={{ y: -3 }}
            className="p-5 rounded-2xl bg-black/80 border border-red-500/30 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-center mb-3">
                <i className={`text-lg fa-solid ${s.icon} text-red-400`}></i>
                <span className="text-[10px] font-mono text-slate-500 font-bold">SÍNTOMA 0{idx + 1}</span>
              </div>
              <div className="text-xs font-bold text-white mb-2 font-mono">{s.title}</div>
              <div className="text-[11px] text-slate-300 font-mono leading-relaxed">{s.desc}</div>
            </div>

            <div className="mt-3 pt-2 border-t border-slate-800 text-[10px] font-mono text-red-400">
              Causa raíz: Ventana &gt; 65% de capacidad
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-5-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-brain text-red-400"></i>
          <span>Misión del Arnés:</span>
        </span>
        <span className="text-white font-semibold">
          "El arnés debe evitar proactivamente que el agente alcance el umbral de ansiedad compactando el estado antes."
        </span>
      </motion.div>
    </div>
  );
};
