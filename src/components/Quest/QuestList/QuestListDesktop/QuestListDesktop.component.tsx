import { QuestListBase } from "../QuestListBase/QuestListBase.component";
import type { QuestListDesktopProps } from "../QuestListTypes";

export function QuestListDesktop({
  questType,
  quests,
  editingMode = false,
}: QuestListDesktopProps) {
  return (
    <QuestListBase
      quests={quests}
      questType={questType}
      editingMode={editingMode}
      title={questType === "daily" ? "Diárias" : "Semanais"}
    />
  );
}
