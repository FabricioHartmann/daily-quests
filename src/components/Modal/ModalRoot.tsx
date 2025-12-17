import { useEffect } from "react";
import { useModalStore } from "../../store/modal/modal.store";
import "./Modal.styles.css";

export function ModalRoot() {
  const { isOpen, content, closeModal } = useModalStore();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        {content}
      </div>
    </div>
  );
}
