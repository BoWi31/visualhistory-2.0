import { AnalysisStep } from './freiheitfuehrtvolk';
import { NAPALM_STEPS, AMPEL_FEEDBACK as NAPALM_FEEDBACK, SENSITIVITY as NAPALM_SENSITIVITY } from './napalm1972';
import { CHE_STEPS, AMPEL_FEEDBACK as CHE_FEEDBACK, SENSITIVITY as CHE_SENSITIVITY } from './che';
import { HITLER_1939_STEPS, AMPEL_FEEDBACK as HITLER_FEEDBACK, SENSITIVITY as HITLER_SENSITIVITY } from './hitler1939';
import { STEPS as EPSTEIN_STEPS, AMPEL_FEEDBACK as EPSTEIN_FEEDBACK } from './epstein-trump-1997';

/**
 * Registry für Bildanalysen.
 */
export const CONTENT_REGISTRY: Record<string, { 
  steps: AnalysisStep[], 
  ampelFeedback: any, 
  sensitivity?: {
    warning: string;
    classroomOption: {
      defaultPreview: string;
      revealButtonText: string;
      alternativeTask: string;
    }
  }
}> = {
  "napalm-1972": {
    steps: NAPALM_STEPS,
    ampelFeedback: NAPALM_FEEDBACK,
    sensitivity: NAPALM_SENSITIVITY
  },
  "che-portraet-1960": {
    steps: CHE_STEPS,
    ampelFeedback: CHE_FEEDBACK,
    sensitivity: CHE_SENSITIVITY
  },
  "hitler-kaernten-1939": {
    steps: HITLER_1939_STEPS,
    ampelFeedback: HITLER_FEEDBACK,
    sensitivity: HITLER_SENSITIVITY
  },
  "epstein-trump-1997": {
    steps: EPSTEIN_STEPS,
    ampelFeedback: EPSTEIN_FEEDBACK
  }
};
