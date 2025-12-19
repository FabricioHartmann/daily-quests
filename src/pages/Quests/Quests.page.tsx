import { Flex } from "../../components/Generic";
import {  QuestList, QuestProgressCard } from "../../components/Quest";
import "./Quests.style.css";

export function Quests() {
  return (
    <Flex justify="center" align="center" direction="column" gap="16px">
      <div className="quests-page-header">
        <QuestProgressCard />
      </div>
      <QuestList editingMode/>
    </Flex>
  );
}
