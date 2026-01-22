import type { QuestCardProps } from "./QuestCard.types";
import { Button, Text } from "../../Generic";
import "./QuestCard.styles.css";
import { useQuestStore } from "../../../store/quests/quests.store";
import { GiScrollQuill, GiSwordWound, GiCancel } from "react-icons/gi";
import { QuestFormModal } from "../../Modal/variants/QuestFormModal";
import { useModalStore } from "../../../store/modal/modal.store";
import { DeleteQuestModal } from "../../Modal/variants/DeleteQuestModal";
import { playQuestMarkSound } from "../../../utils/soundPlayer";
import { useMemo } from "react";
import { calculateQuestXP } from "../../../domain/quest/questExperience.calculator";
import { useInventoryStore } from "../../../store/inventory/inventory.store";

export function QuestCard({
  quest,
  editingMode = false,
  onToggleQuest,
}: QuestCardProps) {
  const { completeQuest } = useQuestStore();
  const items = useInventoryStore((state) => state.items);
  const { openModal } = useModalStore();

  const questExpPoints = useMemo(() => {
    return calculateQuestXP(quest.type, items);
  }, [quest.type, items]);

  const handleCompleteQuest = () => {
    if (!quest || !quest.points) return;

    onToggleQuest?.({
      points: questExpPoints,
    });

    playQuestMarkSound();
    completeQuest(quest.id);
  };

  const openEditCardModal = () => {
    openModal(<QuestFormModal questType={quest.type} quest={quest} />);
  };

  const openDeleteCardModal = () => {
    openModal(<DeleteQuestModal questId={quest.id} />);
  };

  return (
    <div className={`quest-card status-${quest?.status}`}>
      <div className="quest-card-content">
        <div className="card-header">
          <Text size="sm" weight={600} color="var(--card-title)">
            {quest.title}
          </Text>
        </div>
        <Text size="sm" className="card-description" color="var(--black)">
          {quest.description}
        </Text>
        <div className="card-footer">
          <Text size="sm" color="var(--black)" italic>
            {quest.category}
          </Text>
          <Text size="sm" weight={"bold"} color="#888">
            {questExpPoints} xp
          </Text>
        </div>
      </div>
      <div className="button-area">
        {editingMode ? (
          <div className="quest-edit-buttons">
            <Button onClick={openEditCardModal} size="xs">
              <GiScrollQuill size={20} color="white" />
            </Button>
            <Button onClick={openDeleteCardModal} size="xs">
              <GiCancel size={20} color="red" />
            </Button>
          </div>
        ) : (
          <Button onClick={handleCompleteQuest} size="xs" variant="primary">
            <GiSwordWound size={20} color="white" />
          </Button>
        )}
      </div>
    </div>
  );
}
