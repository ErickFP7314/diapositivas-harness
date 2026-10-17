import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide06_1_CombinedSessionHazard: React.FC<Props> = () => {
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
            ANTIPATRÓN: <span className="text-red-400">LA SESIÓN COMBINADA (85% FALLO)</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-red-950/80 border border-red-500/50 text-red-300 rounded font-bold">
          06.1 / 06.3
        </div>
      </motion.div>

      {/* Main Visual: Combined Session Breakdown */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-stretch">
        <div className="md:col-span-6 p-6 rounded-2xl bg-black/80 border border-red-500/40 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-red-900/40 mb-4">
              <span className="text-xs font-mono text-red-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-skull-crossbones"></i> Anatomía de una Sesión Condenada
              </span>
              <span className="text-[10px] font-mono text-red-400 bg-red-950 px-2 py-0.5 rounded">
                85% FRACASO
              </span>
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300 mb-4">
              <span className="text-slate-500">// La orden combinada:</span>
              <div className="text-red-300 mt-1">
                "Instala dependencias, soluciona versiones incompatibles y programa el módulo de autenticación."
              </div>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-black/60 border border-red-900/50 text-slate-300">
                <span className="text-red-400 font-bold block">1. Fallo de Dependencias</span>
                pip/npm tira un error de compilación C o versión deprecada.
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-red-900/50 text-slate-300">
                <span className="text-red-400 font-bold block">2. Quema de Contexto</span>
                El agente intenta comandos aleatorios, gastando el 80% de sus tokens.
              </div>
              <div className="p-2.5 rounded-lg bg-black/60 border border-red-900/50 text-slate-300">
                <span className="text-red-400 font-bold block">3. Lógica Defectuosa</span>
                Llega a la lógica de negocio sin espacio en la ventana y con memoria saturada.
              </div>
            </div>
          </div>

          <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-xl text-xs font-mono text-red-300">
            Consecuencia: El agente agota su presupuesto en infraestructura y entrega código roto.
          </div>
        </div>

        {/* Right: Why combining goals creates an NP-hard optimization problem */}
        <div className="md:col-span-6 p-6 rounded-2xl bg-black/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-calculator"></i> Conflicto de Optimización Multiobjetivo
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                SOBRECARGA COGNITIVA
              </span>
            </div>

            <div className="text-xs font-mono text-slate-300 leading-relaxed mb-4">
              Cuando combinas inicialización e implementación, el agente enfrenta dos funciones objetivo contradictorias:
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-cyan-400 font-bold block mb-1">Objetivo 1: Estabilizar el entorno</span>
                <span className="text-slate-400 text-[11px]">Requiere comandos bash, lockfiles y permisos de sistema.</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-emerald-400 font-bold block mb-1">Objetivo 2: Desarrollar lógica</span>
                <span className="text-slate-400 text-[11px]">Requiere análisis de dominio, diseño de clases y aserciones.</span>
              </div>
            </div>
          </div>

          <div className="p-3 bg-cyan-950/20 border border-cyan-500/30 rounded-xl text-xs font-mono text-cyan-300">
            Axioma de Desacoplamiento: Si el entorno no es 100% estable y reproducible, está prohibido escribir código de negocio.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-6-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-triangle-exclamation text-red-400"></i>
          <span>Regla de Oro:</span>
        </span>
        <span className="text-white font-semibold">
          "Nunca mezcles en un mismo turno la resolución de infraestructura con el desarrollo de features."
        </span>
      </motion.div>
    </div>
  );
};
