import type { QuestCardProps } from "./QuestCard.types";
import { Text } from "../..";
import { Checkbox } from "@joacod/pixel-ui";
import "./QuestCard.styles.css";
import { useQuestStore } from "../../../store/quests/quests.store";


export function QuestCard({ quest, onToggleQuest }: QuestCardProps) {
  const { completeQuest, openQuest } = useQuestStore();

  const handleCheckboxChange = () => {
    let isCompleting = quest?.status === "open";

    onToggleQuest({
      points: quest.points,
      variant: isCompleting ? "gain" : "loss",
    });

    if (isCompleting) completeQuest(quest?.id);
    else openQuest(quest?.id);
  };

  return (
    <div className={`quest-card status-${quest?.status}`}>
      <div className="card-content">
        <div className="card-header">
          <Text weight={600} color="#3b3b3bff">
            {quest.title}
          </Text>
        </div>
        <Text className="card-description" color="#4b4b4b">
          {quest.description}
        </Text>
        <div className="card-footer">
          <Text color="#3b3b3bff" italic>
            {quest.category}
          </Text>
          <Text weight={"bold"} color="#888">
            {quest.points} pts
          </Text>
        </div>
      </div>
      <div className="checkbox-area">
        <Checkbox.Root
          onCheckedChange={handleCheckboxChange}
          size="xs"
          variant="primary"
          checked={quest?.status === "completed"}
        >
          <Checkbox.Indicator />
        </Checkbox.Root>
      </div>
    </div>
  );
}
