import { useMemo } from "react";
import { useQuestStore } from "../../../store/quests/quests.store";
import { Text } from "../../Generic";
import "./QuestStreakCard.styles.css";

export function QuestStreakCard() {
  const { quests, totalQuestsCompleted } = useQuestStore();

  const lastCompletedQuest = useMemo(() => {
    if (!quests?.length) return null;
    const completedQuests = quests.filter(
      (quest) => quest.status === "completed" && quest.completedAt,
    );
    if (!completedQuests.length) return null;
    const mostRecentQuest = completedQuests.reduce((latest, quest) =>
      quest.completedAt! > latest.completedAt! ? quest : latest,
    );
    return mostRecentQuest;
  }, [quests]);

  return (
    <div className="quests-streak-card">
      <div className="quests-streak-header">
        <Text  color="#666666">Streaks</Text>
      </div>
      <Text size="sm" color="#666666">Em breve</Text>
    </div>
  );
}
