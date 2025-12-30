import type { Phase } from "./expedition.types";

export const JOURNEY_TIME = 4 * 1;
export const CAMPFIRE_TIME = 2 * 1;

export const phaseLabel: Record<Phase, string> = {
  idle: "Expedição não iniciada",
  journey: "Em jornada",
  campfire: "Descansando",
  finished: 'Expedição finalizada'
};

export const PHASE_TOTAL_TIME: Record<Phase, number> = {
  idle: 0,
  journey: JOURNEY_TIME,
  campfire: CAMPFIRE_TIME,
  finished: 0
};
