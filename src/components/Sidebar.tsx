import React, { useState, useMemo, useCallback } from 'react';
import { PresentationState, PresentationAction } from '../types';
import { LECTURE_SECTIONS, ALL_SLIDES } from '../slidesData';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Sidebar: React.FC<Props> = ({ state, dispatch }) => {
  const { currentSlideIndex, sidebarOpen, expandedLectures } = state;
  const [filterQuery, setFilterQuery] = useState('');

  const currentSlide = ALL_SLIDES[currentSlideIndex] || ALL_SLIDES[0];

  const goToSlide = useCallback(
    (index: number) => {
      dispatch({ type: 'GO_TO_SLIDE', index });
    },
    [dispatch]
  );

  const toggleSidebar = useCallback(() => {
    dispatch({ type: 'TOGGLE_SIDEBAR' });
  }, [dispatch]);

  const toggleExpand = useCallback(
    (lectureId: number, e: React.MouseEvent) => {
      e.stopPropagation();
      dispatch({ type: 'TOGGLE_LECTURE_EXPAND', lectureId });
    },
    [dispatch]
  );

  const expandAll = useCallback(() => {
    dispatch({ type: 'EXPAND_ALL_LECTURES' });
  }, [dispatch]);

  const collapseAll = useCallback(() => {
    dispatch({ type: 'COLLAPSE_ALL_LECTURES' });
  }, [dispatch]);

  const filteredSections = useMemo(() => {
    if (!filterQuery.trim()) return LECTURE_SECTIONS;
    const q = filterQuery.toLowerCase();
    return LECTURE_SECTIONS.map((sec) => {
      const matchSection =
        sec.title.toLowerCase().includes(q) ||
        sec.shortTitle.toLowerCase().includes(q);
      const matchingSlides = sec.slides.filter(
        (sl) =>
          sl.title.toLowerCase().includes(q) ||
          sl.code.toLowerCase().includes(q) ||
          sl.tagline.toLowerCase().includes(q)
      );
      if (matchSection || matchingSlides.length > 0) {
        return {
          ...sec,
          slides: matchSection ? sec.slides : matchingSlides,
        };
      }
      return null;
    }).filter(Boolean) as typeof LECTURE_SECTIONS;
  }, [filterQuery]);

  const progressPct = useMemo(() => {
    return Math.round(((currentSlideIndex + 1) / ALL_SLIDES.length) * 100);
  }, [currentSlideIndex]);

  if (!sidebarOpen) return null;

  return (
    <aside className="w-80 bg-[#05080c] border-r border-slate-800/80 flex flex-col justify-between h-full select-none z-20 flex-shrink-0">
      {/* Sidebar Header */}
      <div className="flex flex-col flex-1 min-h-0">
        <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-slate-800/80 bg-black/70">
          <span className="text-[11px] font-mono font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
            <i className="fa-solid fa-folder-tree text-cyan-400"></i>
            <span>EXPLORADOR AGÉNTICO</span>
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={expandAll}
              title="Expandir todas las carpetas"
              className="text-slate-500 hover:text-cyan-400 p-1 rounded hover:bg-slate-800 text-[10px]"
            >
              <i className="fa-solid fa-angles-down"></i>
            </button>
            <button
              onClick={collapseAll}
              title="Colapsar todas las carpetas"
              className="text-slate-500 hover:text-cyan-400 p-1 rounded hover:bg-slate-800 text-[10px]"
            >
              <i className="fa-solid fa-angles-up"></i>
            </button>
            <button
              onClick={toggleSidebar}
              title="Ocultar Barra Lateral (B)"
              className="text-slate-500 hover:text-white p-1 rounded hover:bg-slate-800 text-xs ml-1"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="px-3.5 py-2 bg-black/40 border-b border-slate-800/60">
          <div className="flex justify-between text-[10px] font-mono mb-1">
            <span className="text-slate-400">
              SLIDE <span className="text-cyan-400 font-bold">{currentSlideIndex + 1}</span> / {ALL_SLIDES.length}
            </span>
            <span className="text-emerald-400 font-bold">{progressPct}%</span>
          </div>
          <div className="h-1.5 w-full bg-slate-900 rounded-full overflow-hidden">
            <div
              style={{ width: `${progressPct}%` }}
              className="h-full bg-gradient-to-r from-cyan-400 to-emerald-400 glow-green transition-all duration-300"
            />
          </div>
        </div>

        {/* Search / Filter Input */}
        <div className="p-2 border-b border-slate-800/60">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar subslides o conceptos..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full bg-[#0a0e17] border border-slate-800 rounded px-2.5 py-1 text-xs font-mono text-slate-300 placeholder-slate-600 focus:outline-none focus:border-cyan-400"
            />
            {filterQuery && (
              <button
                onClick={() => setFilterQuery('')}
                className="absolute right-2 top-1.5 text-slate-500 hover:text-white text-xs"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
        </div>

        {/* Tree List of Lectures and Sub-slides */}
        <div className="p-2 overflow-y-auto flex-1 space-y-1 text-xs font-mono">
          {filteredSections.map((sec) => {
            const isExpanded = filterQuery.trim() ? true : !!expandedLectures[sec.id];
            const hasActiveSlide = currentSlide.lectureId === sec.id;
            const completedInSec = sec.slides.filter((sl) => sl.globalIndex < currentSlideIndex).length;
            const isSecDone = completedInSec === sec.slides.length;

            return (
              <div key={sec.id} className="rounded-lg overflow-hidden">
                {/* Folder Row */}
                <div
                  onClick={(e) => toggleExpand(sec.id, e)}
                  className={`px-2 py-1.5 rounded cursor-pointer transition-all flex items-center justify-between border ${
                    hasActiveSlide
                      ? 'bg-cyan-950/30 border-cyan-500/40 text-cyan-200'
                      : 'bg-black/40 border-transparent text-slate-400 hover:border-slate-800 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2 truncate">
                    <i
                      className={`text-[10px] fa-solid transition-transform duration-200 ${
                        isExpanded ? 'fa-chevron-down text-cyan-400' : 'fa-chevron-right text-slate-600'
                      }`}
                    />
                    <i className={`text-xs fa-solid ${sec.icon} ${hasActiveSlide ? 'text-cyan-400' : 'text-slate-500'}`} />
                    <span className="truncate font-bold tracking-tight text-[11px]">{sec.shortTitle}</span>
                  </div>

                  <div className="flex items-center gap-1.5 flex-shrink-0 text-[10px]">
                    <span className="text-slate-600 font-mono">
                      {completedInSec}/{sec.slides.length}
                    </span>
                    {isSecDone && <i className="fa-solid fa-check text-emerald-400 text-[10px]" />}
                  </div>
                </div>

                {/* Subitems Tree */}
                {isExpanded && (
                  <div className="ml-3 pl-2 border-l border-slate-800/80 my-1 space-y-1">
                    {sec.slides.map((sub) => {
                      const isActive = currentSlideIndex === sub.globalIndex;
                      const isDone = sub.globalIndex < currentSlideIndex;

                      return (
                        <div
                          key={sub.globalIndex}
                          onClick={() => goToSlide(sub.globalIndex)}
                          className={`group px-2 py-1 rounded cursor-pointer transition-all flex items-center justify-between text-[11px] font-mono border ${
                            isActive
                              ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300 glow-border-cyan'
                              : isDone
                              ? 'bg-black/30 border-transparent text-slate-400 hover:border-slate-800 hover:text-slate-200'
                              : 'bg-transparent border-transparent text-slate-500 hover:border-slate-800 hover:text-slate-300'
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span
                              className={`text-[9px] px-1 py-0.5 rounded font-mono font-bold ${
                                isActive
                                  ? 'bg-cyan-900/80 text-cyan-200'
                                  : 'bg-slate-900 text-slate-500'
                              }`}
                            >
                              {sub.code}
                            </span>
                            <span className="truncate">{sub.title}</span>
                          </div>

                          <div className="flex items-center gap-1 flex-shrink-0">
                            {isActive && <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />}
                            {isDone && <i className="fa-solid fa-check text-[9px] text-emerald-500" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom Shortcuts Info */}
      <div className="p-3 bg-black/70 border-t border-slate-800/80 font-mono text-[10px] text-slate-500">
        <div className="flex justify-between mb-1">
          <span>Navegación:</span>
          <span className="text-cyan-400">[←] / [→]</span>
        </div>
        <div className="flex justify-between mb-1">
          <span>Notas Orador:</span>
          <span className="text-yellow-400">[N]</span>
        </div>
        <div className="flex justify-between">
          <span>Ocultar Barra:</span>
          <span className="text-emerald-400">[B]</span>
        </div>
      </div>
    </aside>
  );
};
