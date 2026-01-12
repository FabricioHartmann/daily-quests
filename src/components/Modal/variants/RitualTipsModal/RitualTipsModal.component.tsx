import { RitualTipsContent } from "../../../Ritual/RitualTipsContent/RitualTipsContent.component";
import { Modal } from "../../Modal.component";

export function RitualTipsModal() {
  return (
    <Modal title="Como funciona?">
      <RitualTipsContent />
    </Modal>
  );
}
