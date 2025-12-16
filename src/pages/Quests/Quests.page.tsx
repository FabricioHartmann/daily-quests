import { Text, Flex } from "../../components/Generic";
import { QuestCardList } from "../../components/Quest";

export function Quests() {
  return (
    <Flex justify="center" align="center" direction="column" gap="16px">
      <div className="header">
        
      </div>
      <div className="quests-wrapper">
        <QuestCardList questType={"daily"} />
        <QuestCardList questType={"weekly"} />
      </div>
    </Flex>
  );
}
