import React, { useEffect, useCallback, useMemo, useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { PresentationState, PresentationAction } from '../types';
import { ALL_SLIDES, LECTURE_SECTIONS } from '../slidesData';
import { ActivityBar } from './ActivityBar';
import { Sidebar } from './Sidebar';
import { StatusBar } from './StatusBar';
import { NotesDrawer } from './NotesDrawer';

// Lecture 00
import { Slide00_1_Equation } from './slides/lecture0/Slide00_1_Equation';
import { Slide00_2_ThreePaths } from './slides/lecture0/Slide00_2_ThreePaths';
import { Slide00_3_ReactLoop } from './slides/lecture0/Slide00_3_ReactLoop';
import { Slide00_4_PiAgent } from './slides/lecture0/Slide00_4_PiAgent';

// Lecture 01
import { Slide01_1_FiveTraps } from './slides/lecture1/Slide01_1_FiveTraps';
import { Slide01_2_RoiMatrix } from './slides/lecture1/Slide01_2_RoiMatrix';
import { Slide01_3_ClearDoD } from './slides/lecture1/Slide01_3_ClearDoD';

// Lecture 02
import { Slide02_1_Subsystems } from './slides/lecture2/Slide02_1_Subsystems';
import { Slide02_2_AblationLab } from './slides/lecture2/Slide02_2_AblationLab';
import { Slide02_3_FeedbackRoi } from './slides/lecture2/Slide02_3_FeedbackRoi';

// Lecture 03
import { Slide03_1_RepoAsSpec } from './slides/lecture3/Slide03_1_RepoAsSpec';
import { Slide03_2_ProximityRule } from './slides/lecture3/Slide03_2_ProximityRule';
import { Slide03_3_AcidGovernance } from './slides/lecture3/Slide03_3_AcidGovernance';

// Lecture 04
import { Slide04_1_ScarAccumulation } from './slides/lecture4/Slide04_1_ScarAccumulation';
import { Slide04_2_LostInMiddle } from './slides/lecture4/Slide04_2_LostInMiddle';
import { Slide04_3_ProgressiveDisclosure } from './slides/lecture4/Slide04_3_ProgressiveDisclosure';

// Lecture 05
import { Slide05_1_ContextLimits } from './slides/lecture5/Slide05_1_ContextLimits';
import { Slide05_2_ContextAnxiety } from './slides/lecture5/Slide05_2_ContextAnxiety';
import { Slide05_3_SessionHandoff } from './slides/lecture5/Slide05_3_SessionHandoff';

// Lecture 06
import { Slide06_1_CombinedSessionHazard } from './slides/lecture6/Slide06_1_CombinedSessionHazard';
import { Slide06_2_TwoPhaseProtocol } from './slides/lecture6/Slide06_2_TwoPhaseProtocol';
import { Slide06_3_ReadinessChecklist } from './slides/lecture6/Slide06_3_ReadinessChecklist';

// Lecture 07
import { Slide07_1_ContextDilution } from './slides/lecture7/Slide07_1_ContextDilution';
import { Slide07_2_OverreachUnderfinish } from './slides/lecture7/Slide07_2_OverreachUnderfinish';
import { Slide07_3_WipOnePressure } from './slides/lecture7/Slide07_3_WipOnePressure';

// Lecture 08
import { Slide08_1_FeatureListContract } from './slides/lecture8/Slide08_1_FeatureListContract';
import { Slide08_2_FiniteStateMachine } from './slides/lecture8/Slide08_2_FiniteStateMachine';
import { Slide08_3_AtomicFeatureCard } from './slides/lecture8/Slide08_3_AtomicFeatureCard';

// Lecture 09
import { Slide09_1_PrematureVictory } from './slides/lecture9/Slide09_1_PrematureVictory';
import { Slide09_2_ExternalArbiter } from './slides/lecture9/Slide09_2_ExternalArbiter';
import { Slide09_3_ThreeLayerEngine } from './slides/lecture9/Slide09_3_ThreeLayerEngine';

// Lecture 10
import { Slide10_1_BoundaryDefects } from './slides/lecture10/Slide10_1_BoundaryDefects';
import { Slide10_2_VerificationHierarchy } from './slides/lecture10/Slide10_2_VerificationHierarchy';
import { Slide10_3_ExecutableRules } from './slides/lecture10/Slide10_3_ExecutableRules';

// Lecture 11
import { Slide11_1_DualObservability } from './slides/lecture11/Slide11_1_DualObservability';
import { Slide11_2_OpenTelemetryTraces } from './slides/lecture11/Slide11_2_OpenTelemetryTraces';
import { Slide11_3_ThreeAgentArchitecture } from './slides/lecture11/Slide11_3_ThreeAgentArchitecture';

// Lecture 12
import { Slide12_1_CleanStateAxiom } from './slides/lecture12/Slide12_1_CleanStateAxiom';
import { Slide12_2_SessionExitChecklist } from './slides/lecture12/Slide12_2_SessionExitChecklist';
import { Slide12_3_IdempotenceQualityDoc } from './slides/lecture12/Slide12_3_IdempotenceQualityDoc';

interface Props {
  state: PresentationState;
  dispatch: React.Dispatch<PresentationAction>;
}

export const Layout: React.FC<Props> = ({ state, dispatch }) => {
  const { currentSlideIndex, previousSlideIndex } = state;
  const currentSlide = ALL_SLIDES[currentSlideIndex] || ALL_SLIDES[0];
  const previousSlide = ALL_SLIDES[previousSlideIndex] || ALL_SLIDES[0];

  const currentSection = useMemo(
    () => LECTURE_SECTIONS.find((s) => s.id === currentSlide.lectureId) || LECTURE_SECTIONS[0],
    [currentSlide.lectureId]
  );

  const [isFullscreen, setIsFullscreen] = useState(false);
  const [sectionNotification, setSectionNotification] = useState<string | null>(null);

  // Detect lecture boundary crossings
  useEffect(() => {
    if (previousSlide && currentSlide.lectureId !== previousSlide.lectureId) {
      setSectionNotification(currentSection.shortTitle);
      const timer = setTimeout(() => {
        setSectionNotification(null);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide.lectureId, previousSlide, currentSection.shortTitle]);

  const nextSlide = useCallback(() => {
    dispatch({ type: 'NEXT_SLIDE' });
  }, [dispatch]);

  const prevSlide = useCallback(() => {
    dispatch({ type: 'PREV_SLIDE' });
  }, [dispatch]);

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  }, []);

  // Keyboard navigation handler with useCallback
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'INPUT' || (e.target as HTMLElement).tagName === 'TEXTAREA') {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case 'PageDown':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          prevSlide();
          break;
        case 'b':
        case 'B':
          e.preventDefault();
          dispatch({ type: 'TOGGLE_SIDEBAR' });
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          dispatch({ type: 'TOGGLE_NOTES' });
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'Home':
          e.preventDefault();
          dispatch({ type: 'GO_TO_SLIDE', index: 0 });
          break;
        case 'End':
          e.preventDefault();
          dispatch({ type: 'GO_TO_SLIDE', index: ALL_SLIDES.length - 1 });
          break;
        default:
          break;
      }
    },
    [nextSlide, prevSlide, dispatch, toggleFullscreen]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Current Slide Component Resolver mapping 40 slides
  const ActiveSlideComponent = useMemo(() => {
    switch (currentSlideIndex) {
      // Lecture 00
      case 0:
        return <Slide00_1_Equation state={state} dispatch={dispatch} />;
      case 1:
        return <Slide00_2_ThreePaths state={state} dispatch={dispatch} />;
      case 2:
        return <Slide00_3_ReactLoop state={state} dispatch={dispatch} />;
      case 3:
        return <Slide00_4_PiAgent state={state} dispatch={dispatch} />;

      // Lecture 01
      case 4:
        return <Slide01_1_FiveTraps state={state} dispatch={dispatch} />;
      case 5:
        return <Slide01_2_RoiMatrix state={state} dispatch={dispatch} />;
      case 6:
        return <Slide01_3_ClearDoD state={state} dispatch={dispatch} />;

      // Lecture 02
      case 7:
        return <Slide02_1_Subsystems state={state} dispatch={dispatch} />;
      case 8:
        return <Slide02_2_AblationLab state={state} dispatch={dispatch} />;
      case 9:
        return <Slide02_3_FeedbackRoi state={state} dispatch={dispatch} />;

      // Lecture 03
      case 10:
        return <Slide03_1_RepoAsSpec state={state} dispatch={dispatch} />;
      case 11:
        return <Slide03_2_ProximityRule state={state} dispatch={dispatch} />;
      case 12:
        return <Slide03_3_AcidGovernance state={state} dispatch={dispatch} />;

      // Lecture 04
      case 13:
        return <Slide04_1_ScarAccumulation state={state} dispatch={dispatch} />;
      case 14:
        return <Slide04_2_LostInMiddle state={state} dispatch={dispatch} />;
      case 15:
        return <Slide04_3_ProgressiveDisclosure state={state} dispatch={dispatch} />;

      // Lecture 05
      case 16:
        return <Slide05_1_ContextLimits state={state} dispatch={dispatch} />;
      case 17:
        return <Slide05_2_ContextAnxiety state={state} dispatch={dispatch} />;
      case 18:
        return <Slide05_3_SessionHandoff state={state} dispatch={dispatch} />;

      // Lecture 06
      case 19:
        return <Slide06_1_CombinedSessionHazard state={state} dispatch={dispatch} />;
      case 20:
        return <Slide06_2_TwoPhaseProtocol state={state} dispatch={dispatch} />;
      case 21:
        return <Slide06_3_ReadinessChecklist state={state} dispatch={dispatch} />;

      // Lecture 07
      case 22:
        return <Slide07_1_ContextDilution state={state} dispatch={dispatch} />;
      case 23:
        return <Slide07_2_OverreachUnderfinish state={state} dispatch={dispatch} />;
      case 24:
        return <Slide07_3_WipOnePressure state={state} dispatch={dispatch} />;

      // Lecture 08
      case 25:
        return <Slide08_1_FeatureListContract state={state} dispatch={dispatch} />;
      case 26:
        return <Slide08_2_FiniteStateMachine state={state} dispatch={dispatch} />;
      case 27:
        return <Slide08_3_AtomicFeatureCard state={state} dispatch={dispatch} />;

      // Lecture 09
      case 28:
        return <Slide09_1_PrematureVictory state={state} dispatch={dispatch} />;
      case 29:
        return <Slide09_2_ExternalArbiter state={state} dispatch={dispatch} />;
      case 30:
        return <Slide09_3_ThreeLayerEngine state={state} dispatch={dispatch} />;

      // Lecture 10
      case 31:
        return <Slide10_1_BoundaryDefects state={state} dispatch={dispatch} />;
      case 32:
        return <Slide10_2_VerificationHierarchy state={state} dispatch={dispatch} />;
      case 33:
        return <Slide10_3_ExecutableRules state={state} dispatch={dispatch} />;

      // Lecture 11
      case 34:
        return <Slide11_1_DualObservability state={state} dispatch={dispatch} />;
      case 35:
        return <Slide11_2_OpenTelemetryTraces state={state} dispatch={dispatch} />;
      case 36:
        return <Slide11_3_ThreeAgentArchitecture state={state} dispatch={dispatch} />;

      // Lecture 12
      case 37:
        return <Slide12_1_CleanStateAxiom state={state} dispatch={dispatch} />;
      case 38:
        return <Slide12_2_SessionExitChecklist state={state} dispatch={dispatch} />;
      case 39:
        return <Slide12_3_IdempotenceQualityDoc state={state} dispatch={dispatch} />;

      default:
        return <Slide00_1_Equation state={state} dispatch={dispatch} />;
    }
  }, [currentSlideIndex, state, dispatch]);

  const isSameLecture = previousSlide && currentSlide.lectureId === previousSlide.lectureId;

  return (
    <div className="flex flex-col h-screen w-screen bg-black text-slate-100 font-mono overflow-hidden select-none">
      {/* Top VS Code Window Bar & Breadcrumbs */}
      <header className="h-10 bg-[#05080c] border-b border-slate-800/80 px-4 flex items-center justify-between z-20">
        {/* Breadcrumb Path */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-cyan-400 font-bold flex items-center gap-1.5">
            <i className="fa-solid fa-microchip"></i>
            <span>HARNESS-ENGINEERING</span>
          </span>
          <span className="text-slate-600">/</span>
          <span className="text-slate-400">{currentSection.shortTitle}</span>
          <span className="text-slate-600">/</span>
          <span className="text-emerald-400 font-semibold bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
            {currentSlide.fileName}
          </span>
        </div>

        {/* Slide Title Center display */}
        <div className="hidden md:flex items-center gap-2 text-xs font-bold text-white tracking-wider">
          <span className="text-cyan-400 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800 font-mono">
            {currentSlide.code}
          </span>
          <span className="truncate max-w-md">{currentSlide.title}</span>
        </div>

        {/* Quick Slide Navigation controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            disabled={currentSlideIndex === 0}
            className="p-1.5 rounded bg-black/60 border border-slate-800 text-slate-300 hover:border-cyan-400 hover:text-cyan-400 disabled:opacity-30 disabled:pointer-events-none text-xs transition-all"
            title="Anterior (←)"
          >
            <i className="fa-solid fa-chevron-left"></i>
          </button>

          <span className="text-xs font-bold font-mono px-2 text-cyan-400">
            {String(currentSlideIndex + 1).padStart(2, '0')} / {String(ALL_SLIDES.length).padStart(2, '0')}
          </span>

          <button
            onClick={nextSlide}
            disabled={currentSlideIndex === ALL_SLIDES.length - 1}
            className="p-1.5 rounded bg-black/60 border border-slate-800 text-slate-300 hover:border-emerald-400 hover:text-emerald-400 disabled:opacity-30 disabled:pointer-events-none text-xs transition-all"
            title="Siguiente (→)"
          >
            <i className="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </header>

      {/* Main Middle Row (Activity Bar + Sidebar + Slide Area) */}
      <div className="flex flex-1 overflow-hidden relative">
        <ActivityBar
          state={state}
          dispatch={dispatch}
          toggleFullscreen={toggleFullscreen}
          isFullscreen={isFullscreen}
        />
        <Sidebar state={state} dispatch={dispatch} />

        {/* Slide Canvas with Morph & Section Shutter Transitions */}
        <main className="flex-1 bg-[#020408] overflow-y-auto relative flex flex-col justify-between">
          {/* Section Change Splash Overlay */}
          <AnimatePresence>
            {sectionNotification && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -20 }}
                transition={{ duration: 0.3 }}
                className="absolute top-6 left-1/2 -translate-x-1/2 z-40 bg-black/90 border border-cyan-400/80 rounded-2xl px-6 py-3 shadow-2xl backdrop-blur-xl flex items-center gap-3 pointer-events-none glow-border-cyan"
              >
                <div className="p-2 bg-cyan-950 rounded-xl text-cyan-400">
                  <i className={`fa-solid ${currentSection.icon} text-lg`}></i>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-mono font-bold tracking-widest text-emerald-400">
                    NUEVO PANEL DE SECCIÓN &bull; {currentSection.category}
                  </div>
                  <div className="text-sm font-black text-white font-mono">
                    {currentSection.shortTitle}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Morphing Group for Intra-Lecture Subslides */}
          <LayoutGroup id={`section-${currentSlide.lectureId}`}>
            <motion.div
              key={currentSlide.code}
              initial={
                isSameLecture
                  ? { opacity: 0, y: 8 }
                  : { opacity: 0, scale: 0.98, x: 24 }
              }
              animate={{ opacity: 1, y: 0, scale: 1, x: 0 }}
              exit={
                isSameLecture
                  ? { opacity: 0, y: -8 }
                  : { opacity: 0, scale: 0.98, x: -24 }
              }
              transition={{ duration: 0.28, ease: 'easeInOut' }}
              className="h-full w-full"
            >
              {ActiveSlideComponent}
            </motion.div>
          </LayoutGroup>
        </main>

        {/* Presenter Notes Drawer */}
        <NotesDrawer state={state} dispatch={dispatch} />
      </div>

      {/* Bottom Status Bar */}
      <StatusBar state={state} dispatch={dispatch} />
    </div>
  );
};
