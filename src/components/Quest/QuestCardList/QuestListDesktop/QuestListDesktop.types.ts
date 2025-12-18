import type { QuestProps } from "../../../../store/quests/quests.types";

export type QuestListDesktopProps = {
  quests: QuestProps[];
  editingMode?: boolean;
  questType: "daily" | "weekly";
};
