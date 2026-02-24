
import { AnalysisStep } from './bildanalyse/freiheitfuehrtvolk';
import * as FreiheitData from './bildanalyse/freiheitfuehrtvolk';
import * as NapoleonData from './bildanalyse/napoleon';
import { NAPALM_STEPS, AMPEL_FEEDBACK as NAPALM_FEEDBACK, SENSITIVITY as NAPALM_SENSITIVITY } from './bildanalyse/napalm1972';
import { CHE_STEPS, AMPEL_FEEDBACK as CHE_FEEDBACK } from './bildanalyse/che';
import { BIGFOOT_STEPS, AMPEL_FEEDBACK as BIGFOOT_FEEDBACK } from './bildanalyse/pattersonGimlin';

/**
 * Registry für Bildanalysen.
 * Hier werden alle Bilder registriert, damit sie das Ampel-Feedback korrekt laden.
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
  "napoleon-1801": {
    steps: NapoleonData.NAPOLEON_STEPS,
    ampelFeedback: NapoleonData.AMPEL_FEEDBACK
  },
  "che-portraet-1960": {
    steps: CHE_STEPS,
    ampelFeedback: CHE_FEEDBACK
  },
  "patterson-gimlin-1967": {
    steps: BIGFOOT_STEPS,
    ampelFeedback: BIGFOOT_FEEDBACK
  },
  "napalm-1972": {
    steps: NAPALM_STEPS,
    ampelFeedback: NAPALM_FEEDBACK,
    sensitivity: NAPALM_SENSITIVITY
  },
  "freiheit-1830": {
    steps: FreiheitData.STEPS,
    ampelFeedback: FreiheitData.AMPEL_FEEDBACK
  }
};
