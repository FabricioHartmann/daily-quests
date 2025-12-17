import type { QuestProps } from "../../../store/quests/quests.types";

export type QuestTogglePayload = {
  points: number;
  variant: "gain" | "loss";
};

export type QuestCardProps = {
  quest: QuestProps;
  editingMode?: boolean
  onToggleQuest?: (payload: QuestTogglePayload) => void;
};
