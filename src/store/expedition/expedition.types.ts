export type Phase = "idle" | "journey" | "campfire";
export type Weather = "clear" | "rain";
export type DayTime = "day" | "night";

export type ExpeditionState = {
  phase: Phase;
  timeLeft: number;
  weather: Weather;
  dayTime: DayTime;

  startJourney: () => void;
  startCampfire: () => void;
  stopExpedition: () => void;
  tick: () => void;
  reset: () => void;
};
