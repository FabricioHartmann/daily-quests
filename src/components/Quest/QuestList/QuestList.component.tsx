import { useMemo } from "react";
import useIsMobile from "../../../hooks/useIsMobile/useIsMobile";
import { RenderIf } from "../../Generic";
import { QuestListDesktop } from "./QuestListDesktop/QuestListDesktop.component";
import { QuestListMobile } from "./QuestListMobile/QuestListMobile.component";
import { useQuestStore } from "../../../store/quests/quests.store";
import type { QuestListProps } from "./QuestListTypes";

export function QuestList({ editingMode }: QuestListProps) {
  const isMobile = useIsMobile();
  const { quests } = useQuestStore();

  const getQuestsByType = (type: "daily" | "weekly") => {
    return quests.filter(
      (quest) =>
        quest.type === type && (!editingMode || quest.status === "open")
    );
  };

  const dailyQuests = getQuestsByType("daily");
  const weeklyQuests = getQuestsByType("weekly");

  return (
    <div className="quests-wrapper">
      <RenderIf condition={isMobile}>
        <QuestListMobile editingMode={editingMode} quests={quests} />
      </RenderIf>
      <RenderIf condition={!isMobile}>
        <QuestListDesktop
          editingMode={editingMode}
          quests={dailyQuests}
          questType={"daily"}
        />
        <QuestListDesktop
          editingMode={editingMode}
          quests={weeklyQuests}
          questType={"weekly"}
        />
      </RenderIf>
    </div>
  );
}
