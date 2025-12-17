import { Button, Text } from "../../Generic";
import { useQuestStore } from "../../../store/quests/quests.store";
import "./NewQuestCard.styles.css";
import { useModalStore } from "../../../store/modal/modal.store";
import { NewQuestModal } from "../../Modal/variants/NewQuestModal";
import type { NewQuestCardProps } from "./NewQuestCard.types";

export function NewQuestCard({ questType }: NewQuestCardProps) {
  const {} = useQuestStore();
  const { openModal } = useModalStore();

  const openNewCardModal = () => {
    openModal(<NewQuestModal questType={questType} />);
  };

  return (
    <div onClick={openNewCardModal}>
      <Button variant="primary" size="lg" fullWidth>
        <Text>INICIAR NOVA QUEST</Text>
      </Button>
    </div>
  );
}
