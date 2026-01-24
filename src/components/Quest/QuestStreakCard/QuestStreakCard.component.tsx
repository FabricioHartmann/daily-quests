import { Text } from "../../GenericComponents";
import "./QuestStreakCard.styles.css";

export function QuestStreakCard() {

  return (
    <div className="quests-streak-card">
      <div className="quests-streak-header">
        <Text  color="#666666">Streaks</Text>
      </div>
      <Text size="sm" color="#666666">Em breve</Text>
    </div>
  );
}
