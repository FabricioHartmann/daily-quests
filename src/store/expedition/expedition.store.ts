import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { DayTime, ExpeditionState, Weather } from "./expedition.types";
import { JOURNEY_TIME, CAMPFIRE_TIME } from "./constants";

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
      endsAt: null,
      weather: "clear",
      dayTime: getDayTimeByLocalTime(),

      startJourney: () => {
        let duration = JOURNEY_TIME * 1000;
        let endsAt = Date.now() + duration;
        set({
          phase: "journey",
          endsAt,
          weather: getRandomWeather(),
        });
      },
      startCampfire: () => {
        let duration = CAMPFIRE_TIME * 1000;
        set({
          phase: "campfire",
          endsAt: Date.now() + duration,
          weather: "clear",
        });
      },
      stopExpedition: () => {
        set({
          phase: "idle",
          endsAt: null,
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
        endsAt: state.endsAt,
        weather: state.weather,
        dayTime: state.dayTime,
      }),
    }
  )
);
