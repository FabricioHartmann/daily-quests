import { useMemo } from "react";
import { useQuestStore } from "../../../store/quests/quests.store";
import { Text } from "../../Generic";
import "./QuestProgressCard.styles.css";

export function QuestProgressCard() {
  const { quests } = useQuestStore();

  const dailyQuests = useMemo(() => {
    if (!quests?.length) return null;
    return quests.filter((quest) => quest.type === "daily");
  }, [quests]);

  const weeklyQuests = useMemo(() => {
    if (!quests?.length) return null;
    return quests.filter((quest) => quest.type === "weekly");
  }, [quests]);

  const lastCompletedQuest = useMemo(() => {
    if (!quests?.length) return null;
    const completedQuests = quests.filter(
      (quest) => quest.status === "completed" && quest.completedAt
    );
    if (!completedQuests.length) return null;
    const mostRecentQuest = completedQuests.reduce((latest, quest) =>
      quest.completedAt! > latest.completedAt! ? quest : latest
    );
    return mostRecentQuest;
  }, [quests]);

  return (
    <div className="quests-progress-card">
      <div className="quests-progress-header">
        <Text size="lg" color="var(--black)">
          Progresso
        </Text>
      </div>
      <div className="quests-progress-content">
        <div className="quests-progress-label">
          <Text italic color="var(--black)">Quests registradas:</Text>
          <div className="quests-progress-data">
            <Text weight={600} color="var(--card-title)">
              Diárias: {dailyQuests?.length} (máx: X)
            </Text>
            <Text weight={600} color="var(--card-title)">
              Semanais: {weeklyQuests?.length} (máx: Y)
            </Text>
          </div>
        </div>
        <div className="quests-progress-label">
          <Text italic color="var(--black)">Última quest concluída:</Text>
          {!!lastCompletedQuest?.id ? (
            <div className="quests-progress-data">
              <Text weight={600} color="var(--card-title)">
                {lastCompletedQuest?.title} (+{lastCompletedQuest?.points} xp)
              </Text>
            </div>
          ) : (
            "-"
          )}
        </div>
      </div>
    </div>
  );
}
