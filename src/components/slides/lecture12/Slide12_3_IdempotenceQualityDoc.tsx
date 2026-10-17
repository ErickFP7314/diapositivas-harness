import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide12_3_IdempotenceQualityDoc: React.FC<Props> = () => {
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
            LIMPIEZA IDEMPOTENTE & <span className="text-emerald-400">EL DOCUMENTO DE CALIDAD</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 rounded font-bold">
          12.3 / 12.3 &bull; FINAL
        </div>
      </motion.div>

      {/* Main Grid: Idempotence Mechanics vs Quality Document */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-stretch">
        {/* Left: Idempotent Cleanup Mechanics */}
        <div className="p-6 rounded-2xl bg-black/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-rotate text-cyan-400"></i> Limpieza Idempotente: f(f(x)) = f(x)
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                PROPIEDAD MATEMÁTICA
              </span>
            </div>

            <div className="p-4 bg-slate-950 border border-slate-800 rounded-xl mb-4 font-mono text-xs">
              <div className="text-cyan-400 font-bold mb-1">Axioma de Idempotencia:</div>
              <div className="text-[11px] text-slate-300 leading-relaxed">
                Ejecutar la rutina de limpieza una sola vez o cien veces consecutivas debe producir exactamente el mismo resultado estable sin borrar artefactos legítimos.
              </div>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="p-3 bg-black/60 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase font-bold">Script Idempotente Seguro:</div>
                <code className="text-emerald-400 block mt-1 text-[11px]">
                  rm -rf .tmp/ var/cache/ &amp;&amp; pkill -f test_server || true
                </code>
              </div>

              <div className="p-3 bg-black/60 rounded-xl border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase font-bold">Bash Trap Handler:</div>
                <code className="text-cyan-400 block mt-1 text-[11px]">
                  trap 'cleanup_session' EXIT INT TERM
                </code>
              </div>
            </div>
          </div>

          <div className="text-xs font-mono text-slate-400 pt-3 border-t border-slate-800">
            Un fallo en la mitad de la limpieza no corrompe el repositorio.
          </div>
        </div>

        {/* Right: Quality Document & Simplification */}
        <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/50 glow-border-cyan flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-cyan-900/40 mb-4">
              <span className="text-xs font-mono text-emerald-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-award text-emerald-400"></i> Documento de Calidad (Quality Document)
              </span>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950 px-2 py-0.5 rounded border border-emerald-800">
                HEALTH MONITOR
              </span>
            </div>

            {/* Quality Grade Cards */}
            <div className="space-y-3 font-mono text-xs mb-4">
              <div className="p-3 rounded-xl bg-black/70 border border-emerald-500/40 flex items-center justify-between">
                <div>
                  <div className="text-white font-bold">Auth & Security Module</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Cobertura: 98% &bull; Tipos estrictos &bull; Zero warnings</div>
                </div>
                <span className="text-xs font-mono font-black text-emerald-400 bg-emerald-950 px-2.5 py-1 rounded border border-emerald-500/50">
                  CALIDAD: A
                </span>
              </div>

              <div className="p-3 rounded-xl bg-black/70 border border-cyan-500/40 flex items-center justify-between">
                <div>
                  <div className="text-white font-bold">Search & Filtering Engine</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Cobertura: 91% &bull; Baja latencia &bull; 0 flakiness</div>
                </div>
                <span className="text-xs font-mono font-black text-cyan-400 bg-cyan-950 px-2.5 py-1 rounded border border-cyan-500/50">
                  CALIDAD: B
                </span>
              </div>

              <div className="p-3 rounded-xl bg-black/70 border border-yellow-500/40 flex items-center justify-between">
                <div>
                  <div className="text-white font-bold">Payment Gateway Module</div>
                  <div className="text-[10px] text-slate-400 mt-0.5">Cobertura: 74% &bull; Deuda técnica moderada</div>
                </div>
                <span className="text-xs font-mono font-black text-yellow-400 bg-yellow-950 px-2.5 py-1 rounded border border-yellow-500/50">
                  CALIDAD: C
                </span>
              </div>
            </div>

            {/* Periodic Simplification Callout */}
            <div className="p-3 bg-slate-950 rounded-xl border border-cyan-500/30 font-mono text-xs">
              <span className="text-cyan-400 font-bold block mb-1">Simplificación Periódica del Arnés:</span>
              <span className="text-[11px] text-slate-300 leading-relaxed">
                A medida que los modelos de IA se vuelven más capaces, retira periódicamente guardrails y comprobaciones redundantes.
              </span>
            </div>
          </div>

          <div className="p-3 bg-emerald-950/40 border border-emerald-500/40 rounded-xl text-xs font-mono text-emerald-300 font-bold mt-2">
            Regla Anti-Degradación: Si una feature baja la nota de un módulo, el merge se bloquea.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-12-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-flag-checkered text-emerald-400"></i>
          <span>Cierre de Masterclass:</span>
        </span>
        <span className="text-white font-semibold">
          "El verdadero poder de la IA en ingeniería de software no está en el chat: vive en la arquitectura del arnés."
        </span>
      </motion.div>
    </div>
  );
};
