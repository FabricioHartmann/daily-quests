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
      timeLeft: JOURNEY_TIME,
      weather: "clear",
      dayTime: "day",

      startJourney: () => {
        set({
          phase: "journey",
          timeLeft: JOURNEY_TIME,
          weather: getRandomWeather(),
          dayTime: getDayTimeByLocalTime(),
        });
      },

      startCampfire: () => {
        set({
          phase: "campfire",
          timeLeft: CAMPFIRE_TIME,
          weather: "clear",
          dayTime: "night",
        });
      },

      stopExpedition: () => {
        set({
          phase: "idle",
          timeLeft: JOURNEY_TIME,
          weather: "clear",
          dayTime: getDayTimeByLocalTime(),
        });
      },

      tick: () => {
        const { timeLeft, phase } = get();
        if (timeLeft < 1) {
          if (phase === "journey") get().startCampfire();
          else if (phase === "campfire") get().stopExpedition();
          return;
        }
        set({ timeLeft: timeLeft - 1 });
      },

      reset: () => {
        set({
          phase: "idle",
          timeLeft: 0,
          weather: "clear",
          dayTime: "day",
        });
      },
    }),
    {
      name: "expedition",
      storage: createJSONStorage(() => sessionStorage),

      partialize: (state) => ({
        phase: state.phase,
        timeLeft: state.timeLeft,
        weather: state.weather,
        dayTime: state.dayTime,
      }),
    }
  )
);
