import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { RewardStore } from "./rewards.types";

export const useRewardStore = create<RewardStore>()(
  persist(
    (set, get) => ({
      claimed: [],
      claimReward: (id: string) => set({ claimed: [...get().claimed, id] }),
      isClaimed: (id: string) => get().claimed.includes(id),
    }),
    {
      name: "rewards",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
