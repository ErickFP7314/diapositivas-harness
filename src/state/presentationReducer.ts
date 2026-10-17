import { PresentationState, PresentationAction } from '../types';
import { ALL_SLIDES } from '../slidesData';

export const INITIAL_STATE: PresentationState = {
  currentSlideIndex: 0,
  previousSlideIndex: 0,
  sidebarOpen: true,
  notesOpen: false,
  activeActivityTab: 'explorer',
  expandedLectures: {
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
  },
  slide0Path: 'sdk',
  slide0Step: 0,
  slide1CostRatio: 5,
  slide2Subsystems: {
    instructions: true,
    tools: true,
    environment: true,
    state: true,
    feedback: true,
  },
  slide3AcidState: 'IDLE',
  slide4RuleCount: 75,
  slide5TokenLength: 128000,
  slide6Phase: 1,
  slide7WipCount: 1,
  slide8FeatureState: 'IN_PROGRESS',
  slide9Checklist: { l1: true, l2: true, l3: false },
  slide10Layer: 'integration',
  slide11TraceStep: 2,
  slide12Checklist: {
    gitClean: true,
    testsPass: true,
    progressWritten: true,
    noZombies: false,
    idempotentClean: true,
  },
};

export const TOTAL_SLIDES = ALL_SLIDES.length;

export function presentationReducer(
  state: PresentationState,
  action: PresentationAction
): PresentationState {
  switch (action.type) {
    case 'NEXT_SLIDE': {
      const nextIdx = Math.min(state.currentSlideIndex + 1, TOTAL_SLIDES - 1);
      const nextSlide = ALL_SLIDES[nextIdx];
      return {
        ...state,
        previousSlideIndex: state.currentSlideIndex,
        currentSlideIndex: nextIdx,
        expandedLectures: {
          ...state.expandedLectures,
          [nextSlide.lectureId]: true,
        },
      };
    }

    case 'PREV_SLIDE': {
      const prevIdx = Math.max(state.currentSlideIndex - 1, 0);
      const prevSlide = ALL_SLIDES[prevIdx];
      return {
        ...state,
        previousSlideIndex: state.currentSlideIndex,
        currentSlideIndex: prevIdx,
        expandedLectures: {
          ...state.expandedLectures,
          [prevSlide.lectureId]: true,
        },
      };
    }

    case 'GO_TO_SLIDE': {
      const targetIdx = Math.max(0, Math.min(action.index, TOTAL_SLIDES - 1));
      const targetSlide = ALL_SLIDES[targetIdx];
      return {
        ...state,
        previousSlideIndex: state.currentSlideIndex,
        currentSlideIndex: targetIdx,
        expandedLectures: {
          ...state.expandedLectures,
          [targetSlide.lectureId]: true,
        },
      };
    }

    case 'TOGGLE_SIDEBAR':
      return { ...state, sidebarOpen: !state.sidebarOpen };

    case 'SET_SIDEBAR':
      return { ...state, sidebarOpen: action.open };

    case 'TOGGLE_NOTES':
      return { ...state, notesOpen: !state.notesOpen };

    case 'SET_NOTES':
      return { ...state, notesOpen: action.open };

    case 'SET_ACTIVITY_TAB':
      return {
        ...state,
        activeActivityTab: action.tab,
        sidebarOpen: action.tab === 'explorer' ? true : state.sidebarOpen,
        notesOpen: action.tab === 'notes' ? true : state.notesOpen,
      };

    case 'TOGGLE_LECTURE_EXPAND':
      return {
        ...state,
        expandedLectures: {
          ...state.expandedLectures,
          [action.lectureId]: !state.expandedLectures[action.lectureId],
        },
      };

    case 'EXPAND_ALL_LECTURES': {
      const allExp: Record<number, boolean> = {};
      for (let i = 0; i <= 12; i++) allExp[i] = true;
      return { ...state, expandedLectures: allExp };
    }

    case 'COLLAPSE_ALL_LECTURES':
      return { ...state, expandedLectures: {} };

    case 'SET_SLIDE_0_PATH':
      return { ...state, slide0Path: action.path };

    case 'STEP_SLIDE_0':
      return { ...state, slide0Step: action.step };

    case 'SET_SLIDE_1_RATIO':
      return { ...state, slide1CostRatio: action.ratio };

    case 'TOGGLE_SLIDE_2_SUBSYSTEM':
      return {
        ...state,
        slide2Subsystems: {
          ...state.slide2Subsystems,
          [action.subsystem]: !state.slide2Subsystems[action.subsystem],
        },
      };

    case 'SET_SLIDE_3_ACID':
      return { ...state, slide3AcidState: action.state };

    case 'SET_SLIDE_4_RULES':
      return { ...state, slide4RuleCount: action.count };

    case 'SET_SLIDE_5_TOKENS':
      return { ...state, slide5TokenLength: action.tokens };

    case 'SET_SLIDE_6_PHASE':
      return { ...state, slide6Phase: action.phase };

    case 'SET_SLIDE_7_WIP':
      return { ...state, slide7WipCount: action.count };

    case 'SET_SLIDE_8_STATE':
      return { ...state, slide8FeatureState: action.state };

    case 'TOGGLE_SLIDE_9_CHECK':
      return {
        ...state,
        slide9Checklist: {
          ...state.slide9Checklist,
          [action.layer]: !state.slide9Checklist[action.layer],
        },
      };

    case 'SET_SLIDE_10_LAYER':
      return { ...state, slide10Layer: action.layer };

    case 'STEP_SLIDE_11':
      return { ...state, slide11TraceStep: action.step };

    case 'TOGGLE_SLIDE_12_CHECK':
      return {
        ...state,
        slide12Checklist: {
          ...state.slide12Checklist,
          [action.check]: !state.slide12Checklist[action.check],
        },
      };

    default:
      return state;
  }
}
