import type { QuestType } from "../../../store/quests/quests.types";
import type { TabOption } from "../../Generic/Tabs/Tabs.types";

export const QUEST_TABS: TabOption<QuestType>[] = [
  { value: "daily", label: "Diárias" },
  { value: "weekly", label: "Semanais" },
];
