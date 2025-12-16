import type { QuestCardProps } from "./QuestCard.types";
import { Text } from "../../Generic";
import { Checkbox } from "@joacod/pixel-ui";
import "./QuestCard.styles.css";
import { useQuestStore } from "../../../store/quests/quests.store";
import { useProfileStore } from "../../../store/profile/profile.store";
import { useQuestMarkSound } from "../../../hooks/sounds/questMarkSound/useQuestMarkSound";
import { BsPencilSquare } from "react-icons/bs";
export function QuestCard({
  quest,
  editingMode = false,
  onToggleQuest,
}: QuestCardProps) {
  const { completeQuest, openQuest } = useQuestStore();
  const { addExp, removeExp } = useProfileStore();
  const { playQuestMarkSound } = useQuestMarkSound();

  const handleCheckboxChange = () => {
    if (!quest) return;
    let isCompleting = quest.status === "open";

    onToggleQuest?.({
      points: quest.points,
      variant: isCompleting ? "gain" : "loss",
    });

    if (isCompleting) {
      playQuestMarkSound();
      completeQuest(quest.id);
      addExp(quest.points);
    } else {
      removeExp(quest.points);
      openQuest(quest.id);
    }
  };

  return (
    <div className={`quest-card status-${quest?.status}`}>
      <div className="quest-card-content">
        <div className="card-header">
          <Text weight={600} color="var(--card-title)">
            {quest.title}
          </Text>
        </div>
        <Text className="card-description" color="#4b4b4b">
          {quest.description}
        </Text>
        <div className="card-footer">
          <Text color="var(--card-title)" italic>
            {quest.category}
          </Text>
          <Text weight={"bold"} color="#888">
            {quest.points} pts
          </Text>
        </div>
      </div>
      <div className="checkbox-area">
        {editingMode ? (
          <div className="quest-card-edit-button">
            <BsPencilSquare size={24} color="black" />
          </div>
        ) : (
          <Checkbox.Root
            onCheckedChange={handleCheckboxChange}
            size="xs"
            variant="primary"
            checked={quest?.status === "completed"}
          >
            <Checkbox.Indicator />
          </Checkbox.Root>
        )}
      </div>
    </div>
  );
}
