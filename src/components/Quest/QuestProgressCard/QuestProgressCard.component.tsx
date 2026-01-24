import { useMemo } from "react";
import { useQuestStore } from "../../../store/quests/quests.store";
import { Text } from "../../GenericComponents";
import "./QuestProgressCard.styles.css";

export function QuestProgressCard() {
  const quests = useQuestStore(s => s.quests);
  const totalQuestsCompleted = useQuestStore(s => s.totalQuestsCompleted);

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
    <div className="quests-progress-card">
      <div className="quests-progress-header">
        <Text size="sm" color="var(--black)">Progresso</Text>
      </div>
      <div className="quests-progress-content">
        <div className="quests-progress-label">
          <Text size="sm" color="var(--black)">
            Última quest:
          </Text>
          {!!lastCompletedQuest?.id ? (
            <div className="quests-progress-data">
              <Text size="sm" color="var(--card-title)">
                {lastCompletedQuest?.title}
              </Text>
            </div>
          ) : (
            "-"
          )}
        </div>
        <div className="quests-progress-label">
          <Text size="sm" color="var(--black)">
            Quests concluídas: {totalQuestsCompleted}
          </Text>
        </div>
      </div>
    </div>
  );
}
