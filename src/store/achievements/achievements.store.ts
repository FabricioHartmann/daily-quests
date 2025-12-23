import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { AchievementState } from "./achievements.types";

export const useAchievementStore = create<AchievementState>()(
  persist(
    (set, get) => ({
      achievements: {},
      unlockAchievement: (id) =>
        set((state) => ({
          achievements: {
            ...state.achievements,
            [id]: {
              id,
              unlocked: true,
              unlockedAt: new Date().toISOString(),
            },
          },
        })),

      isUnlocked: (id) => !!get().achievements[id]?.unlocked,
    }),
    {
      name: "rpg-achievements", // chave no sessionStorage
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
