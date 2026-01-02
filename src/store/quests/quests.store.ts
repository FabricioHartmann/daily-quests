import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { QuestState } from "./quests.types";
import { MOCKED_QUESTS } from "./quests.constants";

export const useQuestStore = create(
  persist<QuestState>(
    (set) => ({
      totalQuestsCompleted: 0,
      quests: MOCKED_QUESTS,
      addQuest: (quest) =>
        set((state) => ({ quests: [...state.quests, quest] })),

      completeQuest: (id) =>
        set((state) => ({
          quests: state.quests.map((quest) =>
            quest.id === id
              ? { ...quest, status: "completed", completedAt: new Date() }
              : quest
          ),
          totalQuestsCompleted: state.totalQuestsCompleted + 1,
        })),
      updateQuest: (updatedQuest) =>
        set((state) => ({
          quests: state.quests.map((quest) =>
            quest.id === updatedQuest.id ? updatedQuest : quest
          ),
        })),
      openQuest: (id) =>
        set((state) => ({
          quests: state.quests.map((quest) =>
            quest.id === id ? { ...quest, status: "open" } : quest
          ),
        })),

      cancelQuest: (id) =>
        set((state) => ({
          quests: state.quests.map((quest) =>
            quest.id === id ? { ...quest, status: "canceled" } : quest
          ),
        })),

      removeQuest: (id) =>
        set((state) => ({
          quests: state.quests.filter((quest) => quest.id !== id),
        })),
    }),
    {
      name: "quests",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
);
