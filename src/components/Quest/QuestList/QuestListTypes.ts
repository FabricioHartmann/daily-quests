import type { QuestProps } from "../../../store/quests/quests.types";

type QuestType = "daily" | "weekly";
type BaseQuestListProps = {
  quests: QuestProps[];
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
  quests: QuestProps[];
  questType: "daily" | "weekly";
  editingMode?: boolean;
  title?: string;
};
