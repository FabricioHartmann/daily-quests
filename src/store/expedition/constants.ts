import type { Phase } from "./expedition.types";

export const JOURNEY_TIME = 25 * 1;
export const CAMPFIRE_TIME = 5 * 1;

export const phaseLabel: Record<Phase, string> = {
  idle: "Não iniciada",
  journey: "Jornada",
  campfire: "Descanso",
};

export const PHASE_TOTAL_TIME: Record<Phase, number> = {
  idle: 0,
  journey: JOURNEY_TIME,
  campfire: CAMPFIRE_TIME,
};
