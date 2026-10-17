import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide10_2_VerificationHierarchy: React.FC<Props> = ({ state, dispatch }) => {
  const { slide10Layer } = state;

  const setLayer = useCallback(
    (layer: 'unit' | 'integration' | 'arch' | 'e2e') => {
      dispatch({ type: 'SET_SLIDE_10_LAYER', layer });
    },
    [dispatch]
  );

  const tiers = [
    {
      id: 'unit' as const,
      name: '1. PRUEBAS UNITARIAS',
      target: 'Segundos',
      desc: 'Validan la lógica interna de funciones y clases puras. Muy rápidas, pero ciegas a fronteras.',
      scope: 'Función / Clase',
    },
    {
      id: 'integration' as const,
      name: '2. PRUEBAS DE INTEGRACIÓN',
      target: 'Medio',
      desc: 'Validan la interacción entre módulos internos, base de datos local y serialización de DTOs.',
      scope: 'Módulo + BD',
    },
    {
      id: 'arch' as const,
      name: '3. REGLAS ARQUITECTÓNICAS',
      target: 'Automático',
      desc: 'Linters de topología: prohíben llamadas directas entre capas o violaciones de límites de dominio.',
      scope: 'Topología',
    },
    {
      id: 'e2e' as const,
      name: '4. PRUEBAS END-TO-END (E2E)',
      target: 'Exhaustivo',
      desc: 'Simulan el flujo completo del usuario final levantando todos los servicios en un entorno real.',
      scope: 'Sistema Completo',
    },
  ];

  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-10-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-network-wired text-emerald-400"></i>
            <span>SECCIÓN 10 &bull; PIPELINE DE VERIFICACIÓN E2E</span>
          </div>
          <motion.div layoutId="lecture-10-title" className="text-xl font-black text-white mt-1">
            PIRÁMIDE DE VERIFICACIÓN: <span className="text-cyan-400">EL GRADIENTE DE ADECUACIÓN</span>
          </motion.div>
        </div>
        <div className="flex gap-1.5">
          {(['unit', 'integration', 'arch', 'e2e'] as const).map((lvl) => (
            <button
              key={lvl}
              onClick={() => setLayer(lvl)}
              className={`px-2.5 py-1 rounded text-xs font-mono font-bold border transition-all ${
                slide10Layer === lvl
                  ? 'bg-cyan-950 border-cyan-400 text-cyan-300 glow-border-cyan'
                  : 'bg-black border-slate-800 text-slate-500'
              }`}
            >
              {lvl.toUpperCase()}
            </button>
          ))}
        </div>
      </motion.div>

      {/* Main Grid: 4 Tiers of the Verification Pyramid */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-4 gap-4 flex-1 items-stretch">
        {tiers.map((t) => {
          const isSelected = slide10Layer === t.id;
          return (
            <motion.div
              key={t.id}
              onClick={() => setLayer(t.id)}
              whileHover={{ y: -4 }}
              className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                isSelected
                  ? 'bg-cyan-950/40 border-cyan-400 glow-border-cyan'
                  : 'bg-black/80 border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-mono font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
                    {t.scope}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">{t.target}</span>
                </div>
                <div className="text-xs font-bold text-white mb-2 font-mono">{t.name}</div>
                <div className="text-[11px] text-slate-300 font-mono leading-relaxed">{t.desc}</div>
              </div>

              <div className="mt-4 pt-2 border-t border-slate-800/80 text-[10px] font-mono">
                {isSelected ? (
                  <span className="text-emerald-400 font-bold">★ NIVEL SELECCIONADO</span>
                ) : (
                  <span className="text-slate-500">Click para inspeccionar</span>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-10-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-layer-group text-cyan-400"></i>
          <span>Gradiente Formal:</span>
        </span>
        <span className="text-white font-semibold">
          "Tests Unitarios &le; Tests de Integración &le; Reglas Arquitectónicas &le; Pruebas End-to-End."
        </span>
      </motion.div>
    </div>
  );
};
