import type { ReactNode } from "react";

export type ModalProps = {
  title: string;
  children: ReactNode;
  hasCustomFooter?: boolean;
  primaryButtonLabel?: string;
  primaryButtonVariant?: "default" | "primary" | "success" | "danger" | "ghost";
  primaryButtonAction?: () => void;
};
