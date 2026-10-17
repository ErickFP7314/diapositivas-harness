import React from 'react';
import { motion } from 'framer-motion';
import { PresentationState, PresentationAction } from '../../../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Slide09_1_PrematureVictory: React.FC<Props> = () => {
  return (
    <div className="h-full flex flex-col justify-between p-6 cyber-grid">
      {/* Morphing Persistent Header */}
      <motion.div
        layoutId="lecture-9-header"
        className="bg-black/90 border border-slate-800 p-4 rounded-xl flex items-center justify-between"
      >
        <div>
          <div className="text-xs text-cyan-400 font-bold tracking-widest uppercase flex items-center gap-2">
            <i className="fa-solid fa-shield-halved text-emerald-400"></i>
            <span>SECCIÓN 09 &bull; COMPROBAR DEFINITION OF DONE</span>
          </div>
          <motion.div layoutId="lecture-9-title" className="text-xl font-black text-white mt-1">
            PELIGRO: <span className="text-red-400">LA TRAMPA DE LA VICTORIA PREMATURA</span>
          </motion.div>
        </div>
        <div className="text-xs font-mono px-3 py-1.5 bg-red-950/80 border border-red-500/50 text-red-300 rounded font-bold">
          09.1 / 09.3
        </div>
      </motion.div>

      {/* Main Visual: Premature Victory Breakdown */}
      <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 items-stretch">
        <div className="p-6 rounded-2xl bg-black/80 border border-red-500/40 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-red-900/40 mb-4">
              <span className="text-xs font-mono text-red-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-triangle-exclamation"></i> Ilusión de Éxito en Mocks
              </span>
              <span className="text-[10px] font-mono text-red-400 bg-red-950 px-2 py-0.5 rounded">
                SESGO COGNITIVO
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <span className="text-emerald-400 font-bold block mb-1">1. Código escrito & tests unitarios en verde</span>
                El agente escribe tests unitarios aislados con mocks para todas las dependencias externas.
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <span className="text-red-400 font-bold block mb-1">2. Pero la app real ni siquiera levanta</span>
                Falta de variables de entorno, migraciones no corridas o puertos de red colisionados.
              </div>

              <div className="p-3 rounded-xl bg-red-950/30 border border-red-500/50 text-red-300 font-bold">
                3. El agente se auto-felicita: "Listo, todo perfecto".
              </div>
            </div>
          </div>

          <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-xl text-xs font-mono text-red-300">
            Los LLMs son naturalmente complacientes: buscan cerrar la interacción lo antes posible.
          </div>
        </div>

        {/* Right: Why Unit Tests alone are not enough */}
        <div className="p-6 rounded-2xl bg-black/80 border border-slate-800 flex flex-col justify-between">
          <div>
            <div className="flex justify-between items-center pb-2 border-b border-slate-800 mb-4">
              <span className="text-xs font-mono text-cyan-400 font-bold uppercase flex items-center gap-2">
                <i className="fa-solid fa-server"></i> La Brecha entre Mocks y Runtime
              </span>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                REALIDAD FÍSICA
              </span>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <span className="text-cyan-400 font-bold block mb-1">Los Mocks mienten:</span>
                Simulan un comportamiento idealizado que puede no coincidir con la versión real de la base de datos o API.
              </div>
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-slate-300">
                <span className="text-cyan-400 font-bold block mb-1">La Configuración oculta:</span>
                Un error en .env o en el Dockerfile pasa desapercibido en tests que no levantan el servidor.
              </div>
            </div>
          </div>

          <div className="p-3 bg-cyan-950/20 border border-cyan-500/30 rounded-xl text-xs font-mono text-cyan-300">
            Axioma: Nunca confíes en un agente que declara victoria sin haber lanzado una petición HTTP real a un proceso vivo.
          </div>
        </div>
      </div>

      {/* Bottom Summary Bar */}
      <motion.div
        layoutId="lecture-9-bottom"
        className="bg-black/90 border border-slate-800 p-3 rounded-xl font-mono text-xs text-slate-400 flex items-center justify-between"
      >
        <span className="flex items-center gap-2">
          <i className="fa-solid fa-triangle-exclamation text-red-400"></i>
          <span>Alerta de Producción:</span>
        </span>
        <span className="text-white font-semibold">
          "Un test unitario verde solo demuestra que el código satisface sus propios supuestos, no que el sistema funcione."
        </span>
      </motion.div>
    </div>
  );
};
