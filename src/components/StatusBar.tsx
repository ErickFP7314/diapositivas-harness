import React from 'react';
import { PresentationState, PresentationAction } from '../types';
import { ALL_SLIDES, LECTURE_SECTIONS } from '../slidesData';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const StatusBar: React.FC<Props> = ({ state, dispatch }) => {
  const { currentSlideIndex, sidebarOpen, notesOpen } = state;
  const currentSlide = ALL_SLIDES[currentSlideIndex] || ALL_SLIDES[0];
  const currentSection = LECTURE_SECTIONS.find((s) => s.id === currentSlide.lectureId);

  return (
    <footer className="h-6 bg-[#000e14] border-t border-slate-800/80 px-3 flex items-center justify-between text-[11px] font-mono select-none text-slate-400 z-30">
      {/* Left side items */}
      <div className="flex items-center gap-3">
        {/* Git branch item */}
        <div className="flex items-center gap-1.5 text-cyan-400 font-bold hover:text-white cursor-pointer">
          <i className="fa-solid fa-code-branch text-[10px]"></i>
          <span>harness/masterclass*</span>
        </div>

        {/* Sync status */}
        <div className="hidden sm:flex items-center gap-1 text-slate-500 hover:text-slate-300 cursor-pointer">
          <i className="fa-solid fa-arrows-rotate text-[9px]"></i>
          <span>0&#8595; 1&#8593;</span>
        </div>

        {/* Current slide file indicator */}
        <div className="hidden md:flex items-center gap-1.5 text-slate-300">
          <i className="fa-solid fa-file-code text-emerald-400 text-[10px]"></i>
          <span className="font-semibold text-white">{currentSlide?.fileName}</span>
        </div>

        {/* Category Badge */}
        {currentSection && (
          <span className="hidden lg:inline-block px-1.5 py-0.2 rounded bg-slate-900 border border-slate-700 text-[9px] text-cyan-300">
            {currentSection.category} &bull; {currentSlide.code}
          </span>
        )}
      </div>

      {/* Right side items */}
      <div className="flex items-center gap-4">
        {/* Quick shortcut reminders */}
        <div className="hidden xl:flex items-center gap-3 text-slate-500 text-[10px]">
          <span>
            <kbd className="text-cyan-400 bg-black px-1 border border-slate-800 rounded">←/→</kbd> Nav
          </span>
          <span onClick={() => dispatch({ type: 'TOGGLE_SIDEBAR' })} className="cursor-pointer hover:text-slate-300">
            <kbd className="text-cyan-400 bg-black px-1 border border-slate-800 rounded">B</kbd> {sidebarOpen ? 'Ocultar' : 'Índice'}
          </span>
          <span onClick={() => dispatch({ type: 'TOGGLE_NOTES' })} className="cursor-pointer hover:text-slate-300">
            <kbd className="text-emerald-400 bg-black px-1 border border-slate-800 rounded">N</kbd> {notesOpen ? 'Cerrar' : 'Guión'}
          </span>
          <span>
            <kbd className="text-cyan-400 bg-black px-1 border border-slate-800 rounded">F</kbd> Full
          </span>
        </div>

        {/* Slide Counter */}
        <div className="flex items-center gap-1 text-slate-300 font-bold">
          <span className="text-cyan-400 font-mono">
            {String(currentSlideIndex + 1).padStart(2, '0')}
          </span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400 font-mono">
            {String(ALL_SLIDES.length).padStart(2, '0')}
          </span>
        </div>

        {/* Engine status indicator */}
        <div className="flex items-center gap-1.5 text-emerald-400 font-semibold">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="hidden sm:inline">ONLINE</span>
        </div>
      </div>
    </footer>
  );
};
