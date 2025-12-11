import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { QuestState } from "./quests.types";
import { MOCKED_QUESTS } from "./constants";

export const useQuestStore = create(
  persist<QuestState>(
    (set) => ({
      quests: MOCKED_QUESTS,
      addQuest: (quest) =>
        set((state) => ({ quests: [...state.quests, quest] })),

      completeQuest: (title) =>
        set((state) => ({
          quests: state.quests.map((quest) =>
            quest.title === title ? { ...quest, status: "completed" } : quest
          ),
        })),

      cancelQuest: (title) =>
        set((state) => ({
          quests: state.quests.map((quest) =>
            quest.title === title ? { ...quest, status: "canceled" } : quest
          ),
        })),

      removeQuest: (title) =>
        set((state) => ({
          quests: state.quests.filter((quest) => quest.title !== title),
        })),
    }),
    {
      name: "quest-store",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
