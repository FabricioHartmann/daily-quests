import { useState } from "react";
import type { QuestListMobileProps } from "../QuestListTypes";
import { Tabs } from "../../../Generic/Tabs";
import { QUEST_TABS } from "../constants";
import { QuestListBase } from "../QuestListBase/QuestListBase.component";
import "../QuestList.styles.css";

export function QuestListMobile({
  quests,
  editingMode = false,
}: QuestListMobileProps) {
  const [selectedQuestType, setSelectedQuestType] = useState<
    "daily" | "weekly"
  >("daily");

  const filteredQuests = quests.filter(
    (quest) => quest.type === selectedQuestType && quest.status === "open"
  );

  return (
    <div className="list-wrapper">
      <Tabs
        options={QUEST_TABS}
        value={selectedQuestType}
        onChange={setSelectedQuestType}
        activeColor="var(--list-bg-color)"
      />

      <QuestListBase
        quests={filteredQuests}
        questType={selectedQuestType}
        editingMode={editingMode}
      />
    </div>
  );
}
