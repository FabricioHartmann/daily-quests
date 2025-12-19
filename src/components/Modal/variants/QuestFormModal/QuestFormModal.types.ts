import type { QuestProps } from "../../../../store/quests/quests.types";

export type QuestFormModalProps = {
  questType: "daily" | "weekly";
  quest?: QuestProps
};

export type QuestFormInputs = {
  title: string;
  description: string;
  points: number | null;
  category: "Estudo" | "Saúde" | "Casa" | "Trabalho" | "Outro" | null;
};
