import type { QuestProps, QuestType } from "../../../../store/quests/quests.types";

export type QuestFormModalProps = {
  questType: QuestType;
  quest?: QuestProps
};

export type QuestFormInputs = {
  title: string;
  description: string;
  category: "Estudo" | "Saúde" | "Casa" | "Trabalho" | "Outro" | null;
};
