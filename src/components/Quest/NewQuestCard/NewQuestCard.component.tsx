import { Text } from "../../Generic";
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
    <div onClick={openNewCardModal} className={`new-quest-card`}>
      <Text weight={600} color="var(--card-title)">
        ADICIONAR NOVA QUEST
      </Text>
    </div>
  );
}
