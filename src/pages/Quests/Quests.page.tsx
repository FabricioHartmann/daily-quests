import { useMemo } from "react";
import { Text, Flex } from "../../components/Generic";
import { QuestCardList, QuestProgressCard } from "../../components/Quest";
import { useQuestStore } from "../../store/quests/quests.store";
import "./Quests.style.css";

export function Quests() {
  const { quests } = useQuestStore();

  const dailyQuests = useMemo(() => {
    return quests?.filter((quest) => quest.type === "daily")?.reverse();
  }, [quests]);

  const weeklyQuests = useMemo(() => {
    return quests?.filter((quest) => quest.type === "weekly")?.reverse();
  }, [quests]);

  return (
    <Flex justify="center" align="center" direction="column" gap="16px">
      <div className="quests-page-header">
        <QuestProgressCard />
      </div>
      <div className="quests-wrapper">
        <QuestCardList editingMode quests={dailyQuests} questType="daily" />
        <QuestCardList editingMode quests={weeklyQuests} questType="weekly" />
      </div>
    </Flex>
  );
}
