import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type { QuestState } from "./quests.types";

export const useQuestStore = create(
  persist<QuestState>(
    (set) => ({
      quests: [
        {
          title: "Ir à academia",
          description: "Treino de 1 hora na academia",
          status: "open",
          points: 10,
          category: "Saúde",
          createdAt: new Date().toISOString(),
        },
        {
          title: "Lavar roupa",
          description: "Separar, lavar e secar roupas",
          status: "open",
          points: 5,
          category: "Casa",
          createdAt: new Date().toISOString(),
        },
        {
          title: "Estudar TypeScript",
          description: "Praticar 1 hora de TypeScript",
          status: "open",
          points: 14,
          category: "Estudo",
          createdAt: new Date().toISOString(),
        },
      ],

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
