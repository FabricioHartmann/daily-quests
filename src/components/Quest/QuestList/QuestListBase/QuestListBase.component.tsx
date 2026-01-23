import { Text, RenderIf } from "../../../Generic";
import { NewQuestCard } from "../../NewQuestCard/NewQuestCard.component";
import { QuestCard } from "../../QuestCard/QuestCard.component";
import type { QuestTogglePayload } from "../../QuestCard/QuestCard.types";
import "../QuestList.styles.css";
import type { QuestListBaseProps } from "../QuestListTypes";
import { QuestListEmptyState } from "../QuestListEmptyState/QuestListBase.component";
import { toast } from "sonner";

export function QuestListBase({
  quests,
  questType,
  editingMode = false,
  title,
}: QuestListBaseProps) {
  const handleToggleQuest = (payload: QuestTogglePayload) => {
    toast("Quest completada!", {
      description: `Adquiriu ${payload.points} XP`,
      duration: 2000,
      position: "bottom-right"
    });
  };

  return (
    <div className="list-wrapper">
      <RenderIf condition={!!title}>
        <div className="list-title">
          <Text>{title}</Text>
        </div>
      </RenderIf>

      <div className="quest-board list-bg-color">
        <div className="list">
          <RenderIf condition={editingMode}>
            <NewQuestCard questType={questType} />
          </RenderIf>

          {quests.map((quest) => (
            <QuestCard
              key={quest.title}
              quest={quest}
              editingMode={editingMode}
              onToggleQuest={handleToggleQuest}
            />
          ))}

          {!quests.length && !editingMode && (
            <QuestListEmptyState questType={questType} />
          )}
        </div>
      </div>
    </div>
  );
}
