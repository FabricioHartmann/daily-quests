import { QuestList, QuestProgressCard } from "../../components/Quest";
import { Text } from "../../components/GenericComponents";
import "./Quests.style.css";
import { QuestStreakCard } from "../../components/Quest/QuestStreakCard/QuestStreakCard.component";

export default function Quests() {
  return (
    <div className="quests-page-container">
      <Text size="lg">Quests</Text>
      <div className="quests-page-header">
        <QuestProgressCard />
        <QuestStreakCard />
      </div>
      <QuestList editingMode />
    </div>
  );
}
