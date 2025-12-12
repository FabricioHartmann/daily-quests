import type { QuestCardProps } from "./QuestCard.types";
import { Chip, Text } from "../..";
import { Checkbox } from "@joacod/pixel-ui";
import "./QuestCard.styles.css";

export function QuestCard({ quest }: QuestCardProps) {
  return (
    <div className="quest-card">
      <div className="checkbox-area">
        <Checkbox.Root size="xs" variant="primary">
          <Checkbox.Indicator />
        </Checkbox.Root>
      </div>
      <div className="card-content">
        <div className="card-header">
          <Text weight={600} color="#3b3b3bff">
            {quest.title}
          </Text>
          <Chip size="sm" label={quest.status} />
        </div>
        <Text className="card-description" color="#4b4b4b">
          {quest.description}
        </Text>
        <div className="card-footer">
          <Text color="#888" italic>
            {quest.category}
          </Text>
          <Text weight={"bold"} color="#888">
            {quest.points} pts
          </Text>
        </div>
      </div>
    </div>
  );
}
