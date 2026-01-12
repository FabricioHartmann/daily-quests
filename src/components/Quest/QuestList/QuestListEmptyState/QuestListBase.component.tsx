import type { QuestType } from "../../../../store/quests/quests.types";
import { Text, Flex } from "../../../Generic";

type QuestListEmptyStateProps = {
  questType: QuestType;
};

export function QuestListEmptyState({ questType }: QuestListEmptyStateProps) {
  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      height="100%"
      padding="16px"
    >
      <Text align="center" color="rgb(151, 151, 151)" size="lg">
        {`Você completou todas as quests ${
          questType === "daily" ? "do dia" : "da semana"
        }`}
      </Text>
    </Flex>
  );
}
