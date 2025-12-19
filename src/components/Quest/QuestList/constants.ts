import type { TabOption } from "../../Generic/Tabs/Tabs.types";

export const QUEST_TABS: TabOption<"daily" | "weekly">[] = [
  { value: "daily", label: "Diárias" },
  { value: "weekly", label: "Semanais" },
];
