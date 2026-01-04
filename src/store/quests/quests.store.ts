import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { QuestState } from "./quests.types";
import { MOCKED_QUESTS } from "./quests.constants";
import { calculateQuestXP } from "../../domain/quest/questExperience.calculator";
import { useInventoryStore } from "../inventory/inventory.store";
import { useProfileStore } from "../profile/profile.store";

export const useQuestStore = create(
  persist<QuestState>(
    (set) => ({
      totalQuestsCompleted: 0,
      quests: MOCKED_QUESTS,
      addQuest: (quest) =>
        set((state) => ({ quests: [...state.quests, quest] })),

      completeQuest: (id) => {
        const inventory = useInventoryStore.getState().items;
        const addExp = useProfileStore.getState().addExp;

        set((state) => {
          const quest = state.quests.find((q) => q.id === id);
          if (!quest || quest.status !== "open") return state;

          const xpGained = calculateQuestXP(quest.type, inventory);
          addExp(xpGained);

          return {
            quests: state.quests.map((q) =>
              q.id === id
                ? {
                    ...q,
                    status: "completed",
                    completedAt: new Date(),
                    points: xpGained,
                  }
                : q
            ),
            totalQuestsCompleted: state.totalQuestsCompleted + 1,
          };
        });
      },

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
