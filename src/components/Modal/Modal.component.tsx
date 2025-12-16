import { type ReactNode } from "react";
import { useModalStore } from "../../store/modal/modal.store";
import "./Modal.styles.css";
import { Text } from "../../components/Generic";

type ModalProps = {
  title: string;
  children: ReactNode;
};

export function Modal({ title, children }: ModalProps) {
  const closeModal = useModalStore((action) => action.closeModal);

  return (
    <div className="modal">
      <header className="modal-header">
        <Text>{title}</Text>
        <button className="modal-close-btn" onClick={closeModal}>
          X
        </button>
      </header>
      <main className="modal-content">{children}</main>
      <footer className="modal-footer">
        <button onClick={closeModal}>Fechar</button>
      </footer>
    </div>
  );
}
