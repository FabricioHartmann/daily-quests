import type { Phase } from "./expedition.types";

export const JOURNEY_TIME = 20;
export const CAMPFIRE_TIME = 5;

export const phaseLabel: Record<Phase, string> = {
  idle: "Não iniciada",
  journey: "Em jornada",
  campfire: "Descansando",
  finished: 'Finalizada'
};

export const PHASE_TOTAL_TIME: Record<Phase, number> = {
  idle: 0,
  journey: JOURNEY_TIME,
  campfire: CAMPFIRE_TIME,
  finished: 0
};
