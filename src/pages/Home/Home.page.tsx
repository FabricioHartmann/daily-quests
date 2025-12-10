import { Flex, QuestCard, Text } from "../../components/UIComponents";
import { useQuestStore } from "../../store/quests/quests.store";

export function Home() {
  const { quests } = useQuestStore();
  return (
    <>
      <Flex justify="center" align="center" direction="column">
        <Text size="lg">Home PAGE</Text>
        <QuestCard quest={quests[0]} />
      </Flex>
    </>
  );
}
