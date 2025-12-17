import type { QuestProps } from "../../../store/quests/quests.types";

export type QuestCardListProps = {
  quests: QuestProps[];
  editingMode?: boolean;
  questType: "daily" | "weekly";
};
