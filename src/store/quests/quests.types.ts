import type { QUEST_BASE_XP } from "../../domain/quest/questExperience.calculator";

export type QuestType = keyof typeof QUEST_BASE_XP;

export type QuestProps = {
  id: number;
  title: string;
  description: string;
  status: "open" | "completed" | "canceled" | "failed";
  points: number;
  category: "Estudo" | "Saúde" | "Casa" | "Trabalho" | "Outro" | null ;
  createdAt: Date;
  completedAt: Date | null;
  type: QuestType;
};

export type QuestState = {
  totalQuestsCompleted: number
  quests: QuestProps[];
  addQuest: (quest: QuestProps) => void;
  completeQuest: (id: number) => void;
  updateQuest: (quest: QuestProps) => void;
  openQuest: (id: number) => void;
  cancelQuest: (id: number) => void;
  removeQuest: (id: number) => void;
};
