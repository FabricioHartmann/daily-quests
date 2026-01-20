import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { RitualsState } from "./rituals.types";
import { MOCKED_RITUALS } from "./constants";

export const useRitualsStore = create<RitualsState>()(
  persist(
    (set, get) => ({
      rituals: MOCKED_RITUALS,
      totalRitualsCompleted: 0,
      xpPerHour: 30,
      phase: "idle",
      endsAt: null,
      cooldownInMinutes: 60,

      toggleRitualActive: (id) =>
        set((state) => ({
          rituals: state.rituals.map((ritual) =>
            ritual.id === id
              ? { ...ritual, isActive: !ritual.isActive }
              : ritual
          ),
        })),

      startRitual: () => {
        const minutes = get().cooldownInMinutes;
        const duration = minutes * 60 * 1000;

        set({
          phase: "started",
          endsAt: Date.now() + duration,
        });
      },

      cancelRitual: () => {
        set({
          phase: "idle",
          endsAt: null,
        });
      },

      finishRitual: () => {
        set((state) => ({
          phase: "idle",
          endsAt: null,
          totalRitualsCompleted: state.totalRitualsCompleted + 1,
        }));
      },
      setCooldownInMinutes: (minutes) => set({ cooldownInMinutes: minutes }),
      checkRitualTransitions: () => {
        const { phase, endsAt } = get();
        if (phase !== "started" || !endsAt) return;

        if (Date.now() >= endsAt) {
          set({ phase: "finished" });
        }
      },
    }),
    {
      name: "rituals",
      storage: createJSONStorage(() => sessionStorage),

      partialize: (state) => ({
        rituals: state.rituals,
        totalRitualsCompleted: state.totalRitualsCompleted,
        phase: state.phase,
        endsAt: state.endsAt,
        cooldownInMinutes: state.cooldownInMinutes,
      }),
    }
  )
);
