import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { ProfileState, TitleId } from "./profile.types";
import { MOCKED_PROFILE_DATA, TITLE_OPTIONS } from "./profile.constants";
import { calculateExperience } from "../../domain/experience";

export const useProfileStore = create<ProfileState>()(
  persist(
    (set) => ({
      profile: MOCKED_PROFILE_DATA,
      leveledUp: false,

      setProfile: (profile) => set({ profile }),

      addExp: (points) =>
        set((state) => {
          const { level, experience, leveledUp } = calculateExperience({
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
            leveledUp,
          };
        }),
      clearLevelUp: () => set({ leveledUp: false }),
      titleOptions: TITLE_OPTIONS,
      setTitle: (title) =>
        set((state) => ({
          profile: {
            ...state.profile,
            title,
          },
        })),
      unlockTitle: (titleId: TitleId) =>
        set((state) => ({
          titleOptions: state.titleOptions.map((t) =>
            t.value === titleId ? { ...t, disabled: false } : t
          ),
        })),
    }),
    {
      name: "profile-store",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) => ({ profile: state.profile }),
    }
  )
);
