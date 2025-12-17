import { Button, Text } from "../../Generic";
import { useQuestStore } from "../../../store/quests/quests.store";
import "./NewQuestCard.styles.css";
import { useModalStore } from "../../../store/modal/modal.store";
import { QuestCreatingModal } from "../../Modal/variants/QuestCreatingModal";

export function NewQuestCard() {
  const {} = useQuestStore();
  const { openModal, closeModal } = useModalStore();

  const openNewCardModal = () => {
    openModal(<QuestCreatingModal onCreate={closeModal} />);
  };

  return (
    <div onClick={openNewCardModal}>
      <Button variant="primary" size="lg" fullWidth>
        <Text>INICIAR NOVA QUEST</Text>
      </Button>
    </div>
  );
}
