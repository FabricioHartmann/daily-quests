import type { Biome } from "../../data/biomesCatalog";

export type Phase = "idle" | "journey" | "campfire" | "finished";
export type Weather = "clear" | "rain";
export type DayTime = "day" | "night";

export type ExpeditionState = {
  phase: Phase;
  biome: Biome | null;
  endsAt: number | null;
  weather: Weather;
  dayTime: DayTime;
  totalExpeditions: number;

  startJourney: () => void;
  startCampfire: () => void;
  cancelExpedition: () => void;
  finishExpedition: () => void;
  getTimeLeft: () => number;
  checkPhaseTransition: () => void;
};
