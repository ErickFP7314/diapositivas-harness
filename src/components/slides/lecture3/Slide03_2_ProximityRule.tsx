import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide03_2_ProximityRule: React.FC<Props> = () => {
  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-3-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-database text-emerald-400"></i>
            <span>SECCIÓN 03 &bull; ARQUITECTURA DE CONOCIMIENTO</span>
          </div>
          <motion.div layoutId="lecture-3-title" className="text-xl font-black text-white mt-1">
            TOPOLOGÍA: <span className="text-emerald-400">LA PROXIMIDAD IMPORTA MÁS QUE LA LONGITUD</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-cyan-950/80 border border-cyan-500/50 text-cyan-300 rounded font-bold">
          03.2 / 03.3
        </div>
      </motion.div>

      {/* Main Grid: Directory Tree vs The 4 Principles of a Good Map */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-12 gap-6 flex-1 items-stretch">
        {/* Left: Canonical Directory Tree */}
        <div className="md:col-span-5 p-5 rounded-2xl bg-black/80 border border-slate-800 flex flex-col justify-between font-mono text-xs">
          <div>
            <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider pb-2 border-b border-slate-800 mb-3 flex items-center gap-2">
              <i className="fa-solid fa-folder-tree"></i> Árbol Modular del Repositorio
            </div>

            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800/80 text-[11px] leading-relaxed space-y-1">
              <div className="text-cyan-300 font-bold">project/</div>
              <div className="text-emerald-400 pl-3">├── AGENTS.md <span className="text-slate-500"># Mapa: 50-100 líneas</span></div>
              <div className="text-slate-300 pl-3">├── src/</div>
              <div className="text-slate-300 pl-6">├── api/</div>
              <div className="text-cyan-400 pl-9 font-bold">│   ├── ARCHITECTURE.md <span className="text-slate-500"># 50 líneas</span></div>
              <div className="text-slate-400 pl-9">│   └── endpoints.py</div>
              <div className="text-slate-300 pl-6">├── db/</div>
              <div className="text-cyan-400 pl-9 font-bold">│   ├── CONSTRAINTS.md <span className="text-slate-500"># Reglas duras</span></div>
              <div className="text-slate-400 pl-9">│   └── schema.sql</div>
              <div className="text-emerald-400 pl-3">├── PROGRESS.md <span className="text-slate-500"># Estado vivo</span></div>
              <div className="text-yellow-400 pl-3">└── Makefile <span className="text-slate-500"># make check, test</span></div>
            </div>
          </div>

          <div className="mt-3 p-3 bg-cyan-950/20 border border-cyan-500/30 rounded-xl text-[11px] text-cyan-300">
            Cada archivo de código ya contiene sus propias restricciones; documenta solo las decisiones arquitectónicas que el código no puede expresar.
          </div>
        </div>

        {/* Right: The 4 Principles of a Good Map */}
        <div className="md:col-span-7 p-6 rounded-2xl bg-black/80 border border-emerald-500/40 glow-border-green flex flex-col justify-between">
          <div>
            <div className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider pb-2 border-b border-emerald-900/40 mb-4 flex items-center justify-between">
              <span>Los 4 Principios de un Buen Mapa</span>
              <span className="text-[10px] text-slate-400">METODOLOGÍA OPENAI</span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-emerald-400 font-bold block mb-0.5">Principio 1: Índices Locales en Submódulos</span>
                <span className="text-slate-300 text-[11px]">Un archivo markdown en cada subcarpeta que actúe como índice natural del dominio.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-emerald-400 font-bold block mb-0.5">Principio 2: AGENTS.md entre 50 y 100 Líneas</span>
                <span className="text-slate-300 text-[11px]">Responde: qué es, cómo se organiza, cómo se corre, cómo se verifica y dónde estamos.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-emerald-400 font-bold block mb-0.5">Principio 3: Poda Inmediata de Reglas Neutras</span>
                <span className="text-slate-300 text-[11px]">Si eliminar una regla no afecta la decisión del modelo, esa regla debe eliminarse ya.</span>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800">
                <span className="text-emerald-400 font-bold block mb-0.5">Principio 4: Sincronización en CI al Modificar Código</span>
                <span className="text-slate-300 text-[11px]">El pipeline de integración revisa si los markdown de arquitectura se actualizaron con el código.</span>
              </div>
            </div>
          </div>

          <div className="text-[11px] font-mono text-slate-400 pt-3 border-t border-slate-800">
            Un mapa modular permite cargar contexto quirúrgico bajo demanda sin saturar la ventana.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-3-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-ruler-combined text-emerald-400"></i>
          <span>Máxima de Diseño:</span>
        </span>
        <span className="text-white font-semibold">
          "La proximidad física de la regla al código que regula es diez veces más efectiva que la longitud del documento."
        </span>
      </motion.div>
    </div>
  );
};
