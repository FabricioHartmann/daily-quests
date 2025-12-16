import { Text } from "../../Generic";
import { useQuestStore } from "../../../store/quests/quests.store";
import "./NewQuestCard.styles.css";
import { useModalStore } from "../../../store/modal/modalStore";
import { WelcomeModal } from "../../Modal/variants/WelcomeModal";

export function NewQuestCard() {
  const {} = useQuestStore();
  const { openModal } = useModalStore();

  const openNewCardModal = () => {
    openModal(<WelcomeModal />);
  };

  return (
    <div onClick={openNewCardModal} className={`new-quest-card`}>
      <Text weight={600} color="var(--card-title)">
        ADICIONAR NOVA QUEST
      </Text>
    </div>
  );
}
