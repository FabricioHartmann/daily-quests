import {  QuestList, QuestProgressCard } from "../../components/Quest";
import "./Quests.style.css";

export function Quests() {
  return (
    <div className="quests-page">
      <div className="quests-page-header">
        <QuestProgressCard />
      </div>
      <QuestList editingMode/>
    </div>
  );
}
