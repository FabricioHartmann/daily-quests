import { Modal } from "../..";
import type { QuestCreationModalProps } from "./QuestCreatingModal.types";
import { useLevelUpSound } from "../../../../hooks/sounds/levelUpSound/useLevelUpSound";

export function QuestCreatingModal({ onCreate }: QuestCreationModalProps) {

  return (
    <Modal title="Criacão de quest">
      <div>.</div>
    </Modal>
  );
}
