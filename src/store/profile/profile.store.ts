import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { ProfileState } from "./profile.types";
import { MOCKED_PROFILE_DATA } from "./constants";

export const useQuestStore = create(
  persist<ProfileState>(
    (set) => ({
      profile: MOCKED_PROFILE_DATA,
    }),
    {
      name: "quest-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
