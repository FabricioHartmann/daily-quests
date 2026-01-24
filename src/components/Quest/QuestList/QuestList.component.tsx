import useIsMobile from "../../../hooks/useIsMobile/useIsMobile";
import { RenderIf } from "../../GenericComponents";
import { QuestListDesktop } from "./QuestListDesktop/QuestListDesktop.component";
import { QuestListMobile } from "./QuestListMobile/QuestListMobile.component";
import { useQuestStore } from "../../../store/quests/quests.store";
import type { QuestListProps } from "./QuestListTypes";

export function QuestList({ editingMode }: QuestListProps) {
  const isMobile = useIsMobile();
  const quests = useQuestStore(s => s.quests);

  const getQuestsByType = (type: "daily" | "weekly") => {
    const questList = quests.filter((quest) => quest.type === type);
    if (editingMode) return questList;
    return questList.filter((quest) => quest.status === "open");
  };

  return (
    <div className="quests-wrapper">
      <RenderIf condition={isMobile}>
        <QuestListMobile editingMode={editingMode} quests={quests} />
      </RenderIf>
      <RenderIf condition={!isMobile}>
        <QuestListDesktop
          editingMode={editingMode}
          quests={getQuestsByType("daily")}
          questType={"daily"}
        />
        <QuestListDesktop
          editingMode={editingMode}
          quests={getQuestsByType("weekly")}
          questType={"weekly"}
        />
      </RenderIf>
    </div>
  );
}
