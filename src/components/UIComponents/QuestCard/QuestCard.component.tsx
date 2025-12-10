import "./QuestCard.styles.css";
import type { QuestCardProps } from "./QuestCard.types";
import { Chip, Flex, Text } from "..";

export function QuestCard({ quest }: QuestCardProps) {
  return (
    <div className="quest-card">
      <Flex justify="space-between" align="center" mb="8px">
        <Text color="black">{quest.title}</Text>
        <Chip size="sm" label={quest.status} />
      </Flex>
      <Flex mb="8px">
        <Text color="#4b4b4b">{quest.description}</Text>
      </Flex>
      <Flex justify="space-between">
        <Text color="#888" italic>
          {quest.category}
        </Text>
        <Text weight={"bold"} color="#888">
          {quest.points} pts
        </Text>
      </Flex>
    </div>
  );
}
