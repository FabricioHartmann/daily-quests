import { useMemo } from "react";
import useIsMobile from "../../../hooks/useIsMobile/useIsMobile";
import { RenderIf } from "../../Generic";
import { QuestListDesktop } from "./QuestListDesktop/QuestListDesktop.component";
import { QuestListMobile } from "./QuestListMobile/QuestListMobile.component";
import { useQuestStore } from "../../../store/quests/quests.store";

export function QuestCardList() {
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
        <QuestListMobile allQuests={quests} />
      </RenderIf>
      <RenderIf condition={!isMobile}>
        <QuestListDesktop quests={avaliableDailyQuests} questType={"daily"} />
        <QuestListDesktop quests={avaliableWeeklyQuests} questType={"weekly"} />
      </RenderIf>
    </div>
  );
}
