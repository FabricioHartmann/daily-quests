import { useModalStore } from "../../store/modal/modal.store";
import { Button, RenderIf, Text } from "../Generic";
import type { ModalProps } from "./Modal.types";
import "./Modal.styles.css";
import { useCallback, useMemo } from "react";
import useIsMobile from "../../hooks/useIsMobile/useIsMobile";

export function Modal({
  title,
  hasCustomFooter = false,
  primaryButtonLabel,
  primaryButtonAction,
  primaryButtonVariant,
  children,
}: ModalProps) {
  const closeModal = useModalStore((action) => action.closeModal);
  const isMobile = useIsMobile();

  const handlePrimaryAction = useCallback(() => {
    primaryButtonAction?.();
  }, [primaryButtonAction]);

  return (
    <div className="modal">
      <header className="modal-header">
        <Text>{title}</Text>
        <Button className="close-button" variant="ghost" onClick={closeModal}>
          <Text size="lg">x</Text>
        </Button>
      </header>
      <main className="modal-content">{children}</main>
      <RenderIf condition={!hasCustomFooter}>
        <footer className="modal-footer">
          <Button fullWidth={isMobile} variant="primary" onClick={closeModal}>
            Fechar
          </Button>
        </footer>
      </RenderIf>
      <RenderIf condition={hasCustomFooter}>
        <footer className="modal-footer">
          <Button
            fullWidth={isMobile}
            variant={primaryButtonVariant ?? "primary"}
            onClick={handlePrimaryAction}
          >
            {primaryButtonLabel ?? "OK"}
          </Button>
        </footer>
      </RenderIf>
    </div>
  );
}
