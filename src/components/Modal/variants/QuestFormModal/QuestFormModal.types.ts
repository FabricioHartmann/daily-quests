import type { Quest, QuestCategory, QuestType } from "../../../../store/quests/quests.types";

export type QuestFormModalProps = {
  questType: QuestType;
  quest?: Quest
};

export type QuestFormInputs = {
  title: string;
  description: string;
  category: QuestCategory;
};
