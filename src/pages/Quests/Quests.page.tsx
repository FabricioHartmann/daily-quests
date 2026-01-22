import { QuestList, QuestProgressCard } from "../../components/Quest";
import { Text } from "../../components/Generic";
import "./Quests.style.css";

export function Quests() {
  return (
    <div className="quests-page-container">
      <div className="quests-page-header">
        <Text size="lg">Quests</Text>
        <QuestProgressCard />
      </div>
      <QuestList editingMode />
    </div>
  );
}
