import type { QuestType } from "../../../../store/quests/quests.types";
import { Text, Flex } from "../../../GenericComponents";

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
      <Text align="center" color="#a8a8a8" size="lg">
        {`Você não tem quests ${
          questType === "daily" ? "diárias" : "semanais"
        } disponíveis no momento`}
      </Text>
    </Flex>
  );
}
