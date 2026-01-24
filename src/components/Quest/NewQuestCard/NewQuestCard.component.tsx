import { Button, Text } from "../../GenericComponents";
import { useQuestStore } from "../../../store/quests/quests.store";
import "./NewQuestCard.styles.css";
import { useModalStore } from "../../../store/modal/modal.store";
import { QuestFormModal } from "../../Modal/variants/QuestFormModal";
import type { NewQuestCardProps } from "./NewQuestCard.types";

export function NewQuestCard({ questType }: NewQuestCardProps) {
  const {} = useQuestStore();
  const { openModal } = useModalStore();

  const openNewCardModal = () => {
    openModal(<QuestFormModal questType={questType} />);
  };

  return (
    <div onClick={openNewCardModal}>
      <Button variant="primary" size="lg" fullWidth>
        <Text size="sm">
          INICIAR QUEST {questType === "daily" ? "DIÁRIA" : "SEMANAL"}
        </Text>
      </Button>
    </div>
  );
}
