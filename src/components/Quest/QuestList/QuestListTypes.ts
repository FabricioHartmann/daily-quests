import type { Quest, QuestType } from "../../../store/quests/quests.types";

type BaseQuestListProps = {
  quests: Quest[];
  editingMode?: boolean;
};

export type QuestListMobileProps = BaseQuestListProps;
export type QuestListDesktopProps = BaseQuestListProps & {
  questType: QuestType;
};

export type QuestListProps = {
  editingMode?: boolean;
};

export type QuestListBaseProps = {
  quests: Quest[];
  questType: "daily" | "weekly";
  editingMode?: boolean;
  title?: string;
};
