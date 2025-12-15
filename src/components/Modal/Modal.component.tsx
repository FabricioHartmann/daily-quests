import { type ReactNode } from "react";
import { useModalStore } from "../../store/modal/modalStore";
import "./Modal.styles.css";
import { Button } from "@joacod/pixel-ui";
import { Text } from "../../components";

type ModalProps = {
  title: string;
  children: ReactNode;
};

export function Modal({ title, children }: ModalProps) {
  const closeModal = useModalStore((action) => action.closeModal);

  return (
    <div className="modal">
      <header className="header">
        <Text>{title}</Text>
        <button className="close-btn" onClick={closeModal}>
          X
        </button>
      </header>
      <main className="modal-content">{children}</main>
      <footer className="footer">
        <Button size="sm" onClick={closeModal}>Fechar</Button>
      </footer>
    </div>
  );
}
