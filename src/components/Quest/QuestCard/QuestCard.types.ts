import type { Quest } from "../../../store/quests/quests.types";

export type QuestTogglePayload = {
  points: number;
};

export type QuestCardProps = {
  quest: Quest;
  editingMode?: boolean;
  onToggleQuest?: (payload: QuestTogglePayload) => void;
};
