import { Text, Flex, Button } from "../../../Generic";

type QuestListEmptyStateProps = {
  questType: "daily" | "weekly";
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
      <Text align="center" color="#c5c5c5ff" size="lg">
        {`Você completou todas as quests ${
          questType === "daily" ? "do dia" : "da semana"
        }`}
      </Text>
    </Flex>
  );
}
