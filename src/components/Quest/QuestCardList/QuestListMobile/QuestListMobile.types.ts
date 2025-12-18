import type { QuestProps } from "../../../../store/quests/quests.types";

export type QuestListMobileProps = {
  allQuests: QuestProps[];
  editingMode?: boolean;
};
