import React from 'react';
import { PresentationState, PresentationAction } from '../types';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
  toggleFullscreen: () => void;
  isFullscreen: boolean;
}

export const ActivityBar: React.FC<Props> = ({ state, dispatch, toggleFullscreen, isFullscreen }) => {
  const { sidebarOpen, notesOpen, activeActivityTab } = state;

  return (
    <div className="w-12 bg-[#05080c] border-r border-slate-800/80 flex flex-col justify-between py-3 items-center z-30 select-none">
      {/* Top Icons */}
      <div className="flex flex-col gap-4 items-center w-full">
        {/* Explorer / Index Toggle */}
        <button
          title="Explorador de Lecturas (B)"
          onClick={() => {
            if (activeActivityTab === 'explorer' && sidebarOpen) {
              dispatch({ type: 'SET_SIDEBAR', open: false });
            } else {
              dispatch({ type: 'SET_ACTIVITY_TAB', tab: 'explorer' });
              dispatch({ type: 'SET_SIDEBAR', open: true });
            }
          }}
          className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all relative ${
            sidebarOpen && activeActivityTab === 'explorer'
              ? 'text-cyan-400 bg-cyan-950/40 glow-border-cyan border border-cyan-500/40'
              : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
          }`}
        >
          <i className="fa-solid fa-folder-tree text-base"></i>
          {sidebarOpen && activeActivityTab === 'explorer' && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-cyan-400 rounded-r"></div>
          )}
        </button>

        {/* Presenter Notes Toggle */}
        <button
          title="Guión del Presentador / Notas (N)"
          onClick={() => dispatch({ type: 'TOGGLE_NOTES' })}
          className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all relative ${
            notesOpen
              ? 'text-emerald-400 bg-emerald-950/40 glow-border-green border border-emerald-500/40'
              : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
          }`}
        >
          <i className="fa-solid fa-file-lines text-base"></i>
          {notesOpen && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-emerald-400 rounded-r"></div>
          )}
        </button>

        {/* Quick Matrix Overview Tab */}
        <button
          title="Atajos de Teclado & Ayuda"
          onClick={() => dispatch({ type: 'SET_ACTIVITY_TAB', tab: 'shortcuts' })}
          className={`w-9 h-9 flex items-center justify-center rounded-lg transition-all ${
            activeActivityTab === 'shortcuts'
              ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/40'
              : 'text-slate-400 hover:text-white hover:bg-slate-900/60'
          }`}
        >
          <i className="fa-solid fa-keyboard text-base"></i>
        </button>
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col gap-3 items-center w-full">
        {/* Fullscreen Toggle */}
        <button
          title="Pantalla Completa (F)"
          onClick={toggleFullscreen}
          className="w-9 h-9 flex items-center justify-center rounded-lg text-slate-400 hover:text-white hover:bg-slate-900/60 transition-all"
        >
          <i className={`fa-solid ${isFullscreen ? 'fa-compress' : 'fa-expand'} text-sm`}></i>
        </button>

        {/* Settings / Gear */}
        <div
          title="Harness Engine v2.0"
          className="w-9 h-9 flex items-center justify-center text-slate-600"
        >
          <i className="fa-solid fa-gear text-sm"></i>
        </div>
      </div>
    </div>
  );
};
