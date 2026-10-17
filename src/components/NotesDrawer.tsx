import React from 'react';
import { PresentationState, PresentationAction } from '../types';
import { ALL_SLIDES, LECTURE_SECTIONS } from '../slidesData';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const NotesDrawer: React.FC<Props> = ({ state, dispatch }) => {
  const { notesOpen, currentSlideIndex } = state;
  const slide = ALL_SLIDES[currentSlideIndex] || ALL_SLIDES[0];
  const section = LECTURE_SECTIONS.find((s) => s.id === slide.lectureId);

  if (!notesOpen) return null;

  return (
    <div className="fixed inset-y-0 right-0 w-full sm:w-[560px] bg-[#05080c]/95 backdrop-blur-md border-l border-cyan-500/40 p-6 z-50 flex flex-col justify-between overflow-hidden shadow-2xl font-mono text-slate-200">
      {/* Header */}
      <div>
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <i className="fa-solid fa-file-lines text-emerald-400"></i>
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
              GUIÓN DEL PRESENTADOR &bull; NOTAS MAESTRAS
            </span>
          </div>
          <button
            onClick={() => dispatch({ type: 'TOGGLE_NOTES' })}
            className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 text-sm"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>

        {/* Slide Title & Duration */}
        <div className="my-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800">
              {slide.code}
            </span>
            <span className="text-xs text-slate-400 font-bold">{section?.shortTitle}</span>
          </div>
          <div className="text-sm font-bold text-white mt-1">{slide.title}</div>
          <div className="flex items-center gap-3 mt-1.5 text-[11px] text-slate-400">
            <span>
              <i className="fa-solid fa-clock text-cyan-400 mr-1"></i>
              Tiempo: {slide.speakerNotes.duration}
            </span>
            <span>&bull;</span>
            <span className="text-emerald-400 font-semibold">{section?.category}</span>
            <span>&bull;</span>
            <span className="text-slate-500">{slide.fileName}</span>
          </div>
        </div>
      </div>

      {/* Scrollable Content Body */}
      <div className="flex-1 overflow-y-auto space-y-4 my-2 pr-2 text-xs leading-relaxed">
        {/* Objective */}
        <div className="p-3 rounded-lg bg-black/60 border border-slate-800">
          <div className="text-[10px] text-cyan-400 uppercase font-bold tracking-wider mb-1">
            <i className="fa-solid fa-bullseye mr-1"></i>Objetivo Pedagógico:
          </div>
          <div className="text-slate-300">{slide.speakerNotes.objective}</div>
        </div>

        {/* Visual Guide */}
        <div className="p-3 rounded-lg bg-cyan-950/20 border border-cyan-500/30">
          <div className="text-[10px] text-cyan-300 uppercase font-bold tracking-wider mb-1">
            <i className="fa-solid fa-eye mr-1"></i>Qué Mostrar en Pantalla (Artefactos Interactivos):
          </div>
          <div className="text-slate-300">{slide.speakerNotes.visualGuide}</div>
        </div>

        {/* Word-by-Word Script */}
        <div className="p-3.5 rounded-lg bg-black/80 border border-emerald-500/40 glow-border-green">
          <div className="text-[10px] text-emerald-400 uppercase font-bold tracking-wider mb-2 flex items-center justify-between">
            <span>
              <i className="fa-solid fa-microphone-lines mr-1"></i>Discurso del Presentador (Guión):
            </span>
            <span className="text-[9px] text-slate-400 bg-emerald-950 px-1.5 py-0.5 rounded">IDEAS-FUERZA</span>
          </div>
          <div className="text-slate-200 whitespace-pre-line leading-relaxed text-[11px]">
            {slide.speakerNotes.script}
          </div>
        </div>

        {/* Key Takeaways */}
        <div className="p-3 rounded-lg bg-black/60 border border-slate-800">
          <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider mb-2">
            <i className="fa-solid fa-list-check mr-1 text-cyan-400"></i>Puntos Clave para la Audiencia:
          </div>
          <ul className="space-y-1.5 text-[11px] text-slate-300">
            {slide.speakerNotes.keyPoints.map((pt, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <i className="fa-solid fa-angle-right text-cyan-400 mt-1 flex-shrink-0"></i>
                <span>{pt}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Q&A Hints */}
        <div className="p-3 rounded-lg bg-yellow-950/20 border border-yellow-500/30">
          <div className="text-[10px] text-yellow-400 uppercase font-bold tracking-wider mb-1">
            <i className="fa-solid fa-circle-question mr-1"></i>Manejo de Preguntas Difíciles (Q&A):
          </div>
          <div className="text-slate-300 text-[11px]">{slide.speakerNotes.qaHints}</div>
        </div>
      </div>

      {/* Footer / Shortcuts */}
      <div className="pt-3 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-500">
        <span>
          Presiona <kbd className="text-cyan-400 bg-black px-1 border border-slate-800 rounded">N</kbd> para cerrar
        </span>
        <span className="text-emerald-400 font-bold">
          SLIDE {slide.globalIndex + 1} / {ALL_SLIDES.length}
        </span>
      </div>
    </div>
  );
};
