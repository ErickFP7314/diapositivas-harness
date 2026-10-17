export interface SpeakerNotes {
  duration: string;
  objective: string;
  visualGuide: string;
  script: string;
  keyPoints: string[];
  qaHints: string;
}

export interface LectureSubSlide {
  globalIndex: number;
  lectureId: number;
  subIndex: number;
  code: string;
  fileName: string;
  title: string;
  tagline: string;
  speakerNotes: SpeakerNotes;
}

export interface LectureSection {
  id: number;
  number: number;
  title: string;
  shortTitle: string;
  category: 'FOUNDATION' | 'ARCHITECTURE' | 'EXECUTION' | 'VERIFICATION' | 'OBSERVABILITY';
  icon: string;
  slides: LectureSubSlide[];
}

export type SubsystemType = 'instructions' | 'tools' | 'environment' | 'state' | 'feedback';

export interface PresentationState {
  currentSlideIndex: number;
  previousSlideIndex: number;
  sidebarOpen: boolean;
  notesOpen: boolean;
  activeActivityTab: 'explorer' | 'notes' | 'shortcuts' | 'matrix';
  expandedLectures: Record<number, boolean>;
  // Interactive slide simulation states
  slide0Path: 'api' | 'sdk' | 'local';
  slide0Step: number;
  slide1CostRatio: number;
  slide2Subsystems: Record<SubsystemType, boolean>;
  slide3AcidState: 'IDLE' | 'TRANSACTING' | 'CONSISTENCY_CHECK' | 'COMMITTED' | 'ROLLBACK';
  slide4RuleCount: number;
  slide5TokenLength: number;
  slide6Phase: 1 | 2;
  slide7WipCount: number;
  slide8FeatureState: 'TODO' | 'IN_PROGRESS' | 'VERIFYING' | 'DONE';
  slide9Checklist: { l1: boolean; l2: boolean; l3: boolean };
  slide10Layer: 'unit' | 'integration' | 'arch' | 'e2e';
  slide11TraceStep: number;
  slide12Checklist: {
    gitClean: boolean;
    testsPass: boolean;
    progressWritten: boolean;
    noZombies: boolean;
    idempotentClean: boolean;
  };
}

export type PresentationAction =
  | { type: 'NEXT_SLIDE' }
  | { type: 'PREV_SLIDE' }
  | { type: 'GO_TO_SLIDE'; index: number }
  | { type: 'TOGGLE_SIDEBAR' }
  | { type: 'SET_SIDEBAR'; open: boolean }
  | { type: 'TOGGLE_NOTES' }
  | { type: 'SET_NOTES'; open: boolean }
  | { type: 'SET_ACTIVITY_TAB'; tab: 'explorer' | 'notes' | 'shortcuts' | 'matrix' }
  | { type: 'TOGGLE_LECTURE_EXPAND'; lectureId: number }
  | { type: 'EXPAND_ALL_LECTURES' }
  | { type: 'COLLAPSE_ALL_LECTURES' }
  | { type: 'SET_SLIDE_0_PATH'; path: 'api' | 'sdk' | 'local' }
  | { type: 'STEP_SLIDE_0'; step: number }
  | { type: 'SET_SLIDE_1_RATIO'; ratio: number }
  | { type: 'TOGGLE_SLIDE_2_SUBSYSTEM'; subsystem: SubsystemType }
  | { type: 'SET_SLIDE_3_ACID'; state: 'IDLE' | 'TRANSACTING' | 'CONSISTENCY_CHECK' | 'COMMITTED' | 'ROLLBACK' }
  | { type: 'SET_SLIDE_4_RULES'; count: number }
  | { type: 'SET_SLIDE_5_TOKENS'; tokens: number }
  | { type: 'SET_SLIDE_6_PHASE'; phase: 1 | 2 }
  | { type: 'SET_SLIDE_7_WIP'; count: number }
  | { type: 'SET_SLIDE_8_STATE'; state: 'TODO' | 'IN_PROGRESS' | 'VERIFYING' | 'DONE' }
  | { type: 'TOGGLE_SLIDE_9_CHECK'; layer: 'l1' | 'l2' | 'l3' }
  | { type: 'SET_SLIDE_10_LAYER'; layer: 'unit' | 'integration' | 'arch' | 'e2e' }
  | { type: 'STEP_SLIDE_11'; step: number }
  | { type: 'TOGGLE_SLIDE_12_CHECK'; check: 'gitClean' | 'testsPass' | 'progressWritten' | 'noZombies' | 'idempotentClean' };
