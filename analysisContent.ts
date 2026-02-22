import { AnalysisStep } from './bildanalyse/freiheitfuehrtvolk';
import { NAPALM_STEPS, AMPEL_FEEDBACK as NAPALM_FEEDBACK, SENSITIVITY as NAPALM_SENSITIVITY } from './bildanalyse/napalm1972';
import { CHE_STEPS, AMPEL_FEEDBACK as CHE_FEEDBACK, SENSITIVITY as CHE_SENSITIVITY } from './bildanalyse/che';

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
  }
};
