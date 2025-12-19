import type { QuestCardProps } from "./QuestCard.types";
import { Button, Text } from "../../Generic";
import "./QuestCard.styles.css";
import { useQuestStore } from "../../../store/quests/quests.store";
import { useProfileStore } from "../../../store/profile/profile.store";
import { useQuestMarkSound } from "../../../hooks/sounds/questMarkSound/useQuestMarkSound";
import { GiScrollQuill, GiSwordWound, GiCancel } from "react-icons/gi";
import { QuestFormModal } from "../../Modal/variants/QuestFormModal";
import { useModalStore } from "../../../store/modal/modal.store";
import { DeleteQuestModal } from "../../Modal/variants/DeleteQuestModal";

export function QuestCard({
  quest,
  editingMode = false,
  onToggleQuest,
}: QuestCardProps) {
  const { completeQuest } = useQuestStore();
  const { addExp } = useProfileStore();
  const { openModal } = useModalStore();
  const { playQuestMarkSound } = useQuestMarkSound();

  const handleCompleteQuest = () => {
    if (!quest || !quest.points) return;

    onToggleQuest?.({
      points: quest.points,
      variant: "gain",
    });

    playQuestMarkSound();
    completeQuest(quest.id);
    addExp(quest.points);
  };

  const openEditCardModal = () => {
    openModal(<QuestFormModal questType={quest.type} quest={quest} />);
  };

  const openDeleteCardModal = () => {
    openModal(<DeleteQuestModal questId={quest.id}/>);
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
          <div className="quest-edit-buttons">
            <Button onClick={openEditCardModal} size="xs">
              <GiScrollQuill size={24} color="white" />
            </Button>
            <Button onClick={openDeleteCardModal} size="xs">
              <GiCancel size={24} color="red" />
            </Button>
          </div>
        ) : (
          <Button onClick={handleCompleteQuest} size="xs" variant="primary">
            <GiSwordWound size={24} color="white" />
          </Button>
        )}
      </div>
    </div>
  );
}
