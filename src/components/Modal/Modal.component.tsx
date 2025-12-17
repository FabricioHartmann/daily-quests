import { type ReactNode } from "react";
import { useModalStore } from "../../store/modal/modal.store";
import "./Modal.styles.css";
import { Button, Text } from "../Generic";

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
        <Button className="close-button" variant="ghost" onClick={closeModal}>
          <Text size="lg">x</Text>
        </Button>
      </header>
      <main className="modal-content">{children}</main>
      <footer className="modal-footer">
        <Button variant="primary" onClick={closeModal}>Fechar</Button>
      </footer>
    </div>
  );
}
