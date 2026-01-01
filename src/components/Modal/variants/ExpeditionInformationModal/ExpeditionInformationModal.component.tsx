import { InformationContent as ExpeditionInformationContent } from "../../../Expedition";
import { Modal } from "../../Modal.component";

export function ExpeditionInformationModal() {
  return (
    <Modal title="Como funciona?">
      <ExpeditionInformationContent />
    </Modal>
  );
}
