import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { ProfileState } from "./profile.types";
import { MOCKED_PROFILE_DATA } from "./profile.constants";
import { calculateExperience } from "../../domain/experience";

export const useProfileStore = create(
  persist<ProfileState>(
    (set) => ({
      profile: MOCKED_PROFILE_DATA,
      setProfile: (profile) => set({ profile }),
      addExp: (points) =>
        set((state) => {
          console.log("ADD EXP CALLED", points);
          console.log("STATE BEFORE", state.profile);
          const { level, experience } = calculateExperience({
            currentLevel: state.profile.level,
            currentExp: state.profile.experience,
            changedExp: points,
          });

          return {
            profile: {
              ...state.profile,
              level,
              experience,
            },
          };
        }),
      removeExp: (points) =>
        set((state) => {
          const { level, experience } = calculateExperience({
            currentLevel: state.profile.level,
            currentExp: state.profile.experience,
            changedExp: -points,
          });

          return {
            profile: {
              ...state.profile,
              level,
              experience,
            },
          };
        }),
    }),
    {
      name: "profile-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
