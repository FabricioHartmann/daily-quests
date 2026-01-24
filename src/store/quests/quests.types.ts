import type { QUEST_BASE_XP } from "../../domain/quest/questExperience.calculator";

export type QuestType = keyof typeof QUEST_BASE_XP;
export type QuestStatus = "open" | "completed" | "canceled" | "failed";
export type QuestCategory =
  | "Estudo"
  | "Saúde"
  | "Casa"
  | "Trabalho"
  | "Outro"
  | null;

export type Quest = {
  id: number;
  title: string;
  description: string;
  status: QuestStatus;
  points: number;
  category: QuestCategory
  createdAt: Date;
  completedAt: Date | null;
  type: QuestType;
};

export type QuestState = {
  totalQuestsCompleted: number;
  quests: Quest[];
  addQuest: (quest: Quest) => void;
  completeQuest: (id: number) => void;
  updateQuest: (quest: Quest) => void;
  openQuest: (id: number) => void;
  cancelQuest: (id: number) => void;
  removeQuest: (id: number) => void;
  resetQuestsIfNeeded: () => void;
};
