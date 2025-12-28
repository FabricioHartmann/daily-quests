export type Phase = "idle" | "journey" | "campfire";
export type Weather = "clear" | "rain";
export type DayTime = "day" | "night";

export type ExpeditionState = {
  phase: Phase;
  timeLeft: number;
  expeditionStage: number;
  weather: Weather;
  dayTime: DayTime;
};
