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

  const avaliableDailyQuests = useMemo(() => {
    return quests?.filter(
      (quest) => quest.type === "daily" && quest.status === "open"
    );
  }, [quests]);

  const avaliableWeeklyQuests = useMemo(() => {
    return quests?.filter(
      (quest) => quest.type === "weekly" && quest.status === "open"
    );
  }, [quests]);

  return (
    <div className="quests-wrapper">
      <RenderIf condition={isMobile}>
        <QuestListMobile editingMode={editingMode} quests={quests} />
      </RenderIf>
      <RenderIf condition={!isMobile}>
        <QuestListDesktop
          editingMode={editingMode}
          quests={avaliableDailyQuests}
          questType={"daily"}
        />
        <QuestListDesktop
          editingMode={editingMode}
          quests={avaliableWeeklyQuests}
          questType={"weekly"}
        />
      </RenderIf>
    </div>
  );
}
