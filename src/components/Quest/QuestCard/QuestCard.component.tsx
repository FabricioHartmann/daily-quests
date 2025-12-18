import type { QuestCardProps } from "./QuestCard.types";
import { Button, Text } from "../../Generic";
import "./QuestCard.styles.css";
import { useQuestStore } from "../../../store/quests/quests.store";
import { useProfileStore } from "../../../store/profile/profile.store";
import { useQuestMarkSound } from "../../../hooks/sounds/questMarkSound/useQuestMarkSound";
import { GiScrollQuill } from "react-icons/gi";
import { GiSwordWound } from "react-icons/gi";

export function QuestCard({
  quest,
  editingMode = false,
  onToggleQuest,
}: QuestCardProps) {
  const { completeQuest } = useQuestStore();
  const { addExp } = useProfileStore();
  const { playQuestMarkSound } = useQuestMarkSound();

  const handleCompleteQuest = () => {
    if (!quest) return;

    onToggleQuest?.({
      points: quest.points,
      variant: "gain",
    });

    playQuestMarkSound();
    completeQuest(quest.id);
    addExp(quest.points);
  };

  return (
    <div className={`quest-card status-${quest?.status}`}>
      <div className="quest-card-content">
        <div className="card-header">
          <Text weight={600} color="var(--card-title)">
            {quest.title}
          </Text>
        </div>
        <Text className="card-description" color="var(--black)">
          {quest.description}
        </Text>
        <div className="card-footer">
          <Text color="var(--card-title)" italic>
            {quest.category}
          </Text>
          <Text weight={"bold"} color="#888">
            {quest.points} xp
          </Text>
        </div>
      </div>
      <div className="button-area">
        {editingMode ? (
          <Button size="xs">
            <GiScrollQuill size={24} color="white" />
          </Button>
        ) : (
          <Button onClick={handleCompleteQuest} size="xs" variant="primary">
            <GiSwordWound size={24} color="white" />
          </Button>
        )}
      </div>
    </div>
  );
}
