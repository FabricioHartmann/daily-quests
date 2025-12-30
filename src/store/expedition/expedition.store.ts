import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { DayTime, ExpeditionState, Weather } from "./expedition.types";
import { JOURNEY_TIME, CAMPFIRE_TIME } from "./constants";
import { getRandomBiome } from "../../utils/expeditionImage";

const getRandomWeather = (): Weather =>
  Math.random() < 0.3 ? "rain" : "clear";

export const getDayTimeByLocalTime = (): DayTime => {
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 18) return "day";
  return "night";
};

export const useExpeditionStore = create<ExpeditionState>()(
  persist(
    (set, get) => ({
      phase: "idle",
      biome: null,
      endsAt: null,
      weather: "clear",
      dayTime: getDayTimeByLocalTime(),
      totalExpeditions: 0,

      startJourney: () => {
        let duration = JOURNEY_TIME * 1000;
        let endsAt = Date.now() + duration;
        set({
          phase: "journey",
          biome: getRandomBiome(),
          endsAt,
          weather: getRandomWeather(),
        });
      },
      startCampfire: () => {
        let duration = CAMPFIRE_TIME * 1000;
        set({
          phase: "campfire",
          biome: get().biome,
          endsAt: Date.now() + duration,
          weather: "clear",
        });
      },
      cancelExpedition: () => {
        set({
          phase: "idle",
          biome: null,
          endsAt: null,
        });
      },
      finishExpedition: () => {
        set({
          phase: "idle",
          biome: null,
          totalExpeditions: get().totalExpeditions + 1,
        });
      },
      checkPhaseTransition: () => {
        const { phase, endsAt } = get();
        if (!endsAt) return;

        if (Date.now() >= endsAt) {
          if (phase === "journey") get().startCampfire();
          else if (phase === "campfire") {
            set({
              phase: "finished",
            });
          }
        }
      },
      getTimeLeft: () => {
        let { endsAt } = get();
        if (!endsAt) return 0;
        return Math.max(Math.ceil((endsAt - Date.now()) / 1000), 0);
      },
    }),
    {
      name: "expedition",
      storage: createJSONStorage(() => sessionStorage),

      partialize: (state) => ({
        phase: state.phase,
        biome: state.biome,
        endsAt: state.endsAt,
        weather: state.weather,
        dayTime: state.dayTime,
        totalExpeditions: state.totalExpeditions,
      }),
    }
  )
);
