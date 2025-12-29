export type Phase = "idle" | "journey" | "campfire";
export type Weather = "clear" | "rain";
export type DayTime = "day" | "night";

export type ExpeditionState = {
  phase: Phase;
  endsAt: number | null;
  weather: Weather;
  dayTime: DayTime;

  startJourney: () => void;
  startCampfire: () => void;
  stopExpedition: () => void;
  getTimeLeft: () => number;
  checkPhaseTransition: () => void
};
