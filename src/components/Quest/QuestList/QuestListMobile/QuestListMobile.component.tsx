import { useState } from "react";
import type { QuestListMobileProps } from "../QuestListTypes";
import { QUEST_TABS } from "../constants";
import { QuestListBase } from "../QuestListBase/QuestListBase.component";
import "../QuestList.styles.css";
import type { QuestType } from "../../../../store/quests/quests.types";
import { Tabs } from "../../../GenericComponents";

export function QuestListMobile({
  quests,
  editingMode = false,
}: QuestListMobileProps) {
  const [selectedQuestType, setSelectedQuestType] =
    useState<QuestType>("daily");

  const filteredQuests = quests.filter(
    (quest) => quest.type === selectedQuestType
  );
  const filteredOpenQuests = filteredQuests.filter(
    (quest) => quest.status === "open"
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
        quests={editingMode ? filteredQuests : filteredOpenQuests}
        questType={selectedQuestType}
        editingMode={editingMode}
      />
    </div>
  );
}
