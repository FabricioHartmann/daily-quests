import { Modal } from "../..";
import { NewQuestForm } from "../../../Quest/NewQuestForm/NewQuestForm.component";
import type { QuestCreationModalProps } from "./QuestCreatingModal.types";

export function QuestCreatingModal({ onCreate }: QuestCreationModalProps) {

  return (
    <Modal title="Nova quest">
      <NewQuestForm />
    </Modal>
  );
}
