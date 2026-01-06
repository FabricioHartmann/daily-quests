import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { RitualsState } from "./rituals.types";
import { MOCKED_RITUALS } from "./constants";

export const useRitualsStore = create(
  persist<RitualsState>(
    (set) => ({
      totalRitualsCompleted: 0,
      rituals: MOCKED_RITUALS,
      updateRitual: (updateRitual) =>
        set((state) => ({
          rituals: state.rituals.map((ritual) =>
            ritual.id === updateRitual.id ? updateRitual : ritual
          ),
        })),
    }),
    {
      name: "rituals",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
