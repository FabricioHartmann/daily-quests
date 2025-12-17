import type { ReactNode } from "react";

export type ModalProps = {
  title: string;
  children: ReactNode;
  hasCutomFooter?: boolean
  primaryButtonLabel?: string
  primaryButtonAction?: () => void
};