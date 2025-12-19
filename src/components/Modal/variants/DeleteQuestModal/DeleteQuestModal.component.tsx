import { Modal } from "../..";
import { useModalStore } from "../../../../store/modal/modal.store";
import { useQuestStore } from "../../../../store/quests/quests.store";
import { Flex, Text } from "../../../Generic";
import type { DeleteQuestModalProps } from "./DeleteQuestModal.types";

export function DeleteQuestModal({ questId }: DeleteQuestModalProps) {
  const { removeQuest } = useQuestStore();
  const { closeModal } = useModalStore();
  const handleRemoveQuest = () => {
    removeQuest(questId);
    closeModal()
  };

  return (
    <Modal
      hasCustomFooter
      primaryButtonLabel="Deletar"
      primaryButtonAction={handleRemoveQuest}
      primaryButtonVariant="danger"
      hideSecondaryButton
      title="Deletar quest"
    >
      <Flex direction="column" align="start" gap="8px">
        <Text>Deseja mesmo deletar essa quest?</Text>
        <Text>(Você poderá adicionar novas quests depois)</Text>
      </Flex>
    </Modal>
  );
}
