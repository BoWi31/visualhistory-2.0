import { AnalysisStep } from './bildanalyse/freiheitfuehrtvolk';
import { NAPALM_STEPS, AMPEL_FEEDBACK as NAPALM_FEEDBACK, SENSITIVITY as NAPALM_SENSITIVITY } from './bildanalyse/napalm1972';
import { CHE_STEPS, AMPEL_FEEDBACK as CHE_FEEDBACK, SENSITIVITY as CHE_SENSITIVITY } from './bildanalyse/che';
import { HITLER_1939_STEPS, AMPEL_FEEDBACK as HITLER_FEEDBACK, SENSITIVITY as HITLER_SENSITIVITY } from './bildanalyse/hitler1939';
import { EPSTEIN_TRUMP_STEPS, AMPEL_FEEDBACK as EPSTEIN_TRUMP_FEEDBACK } from './bildanalyse/epsteinTrump1997';

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
    steps: EPSTEIN_TRUMP_STEPS,
    ampelFeedback: EPSTEIN_TRUMP_FEEDBACK
  }
};
