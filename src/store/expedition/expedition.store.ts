import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type Phase = 'idle' | 'journey' | 'campfire';
type Weather = 'clear' | 'rain';
type DayTime = 'day' | 'night';

interface ExpeditionState {
  phase: Phase;
  timeLeft: number;
  expeditionStage: number;
  weather: Weather;
  dayTime: DayTime;

  startJourney: () => void;
  startCampfire: () => void;
  tick: () => void;
  reset: () => void;
}

const JOURNEY_TIME = 25 * 60;
const CAMPFIRE_TIME = 5 * 60;

const getRandomWeather = (): Weather =>
  Math.random() < 0.3 ? 'rain' : 'clear';

const getDayTimeByStage = (stage: number): DayTime =>
  stage % 2 === 0 ? 'night' : 'day';

export const useExpeditionStore = create<ExpeditionState>()(
  persist(
    (set, get) => ({
      phase: 'idle',
      timeLeft: 0,
      expeditionStage: 0,
      weather: 'clear',
      dayTime: 'day',

      startJourney: () => {
        const nextStage = get().expeditionStage + 1;
        set({
          phase: 'journey',
          expeditionStage: nextStage,
          timeLeft: JOURNEY_TIME,
          weather: getRandomWeather(),
          dayTime: getDayTimeByStage(nextStage),
        });
      },

      startCampfire: () => {
        set({
          phase: 'campfire',
          timeLeft: CAMPFIRE_TIME,
          weather: 'clear',
          dayTime: 'night',
        });
      },

      tick: () => {
        const { timeLeft, phase } = get();
        if (timeLeft <= 1) {
          if (phase === 'journey') get().startCampfire();
          else if (phase === 'campfire') get().startJourney();
          return;
        }

        set({ timeLeft: timeLeft - 1 });
      },

      reset: () => {
        set({
          phase: 'idle',
          timeLeft: 0,
          expeditionStage: 0,
          weather: 'clear',
          dayTime: 'day',
        });
      },
    }),
    {
      name: 'expedition',
      storage: createJSONStorage(() => sessionStorage),

      partialize: (state) => ({
        phase: state.phase,
        timeLeft: state.timeLeft,
        expeditionStage: state.expeditionStage,
        weather: state.weather,
        dayTime: state.dayTime,
      }),
    }
  )
);
