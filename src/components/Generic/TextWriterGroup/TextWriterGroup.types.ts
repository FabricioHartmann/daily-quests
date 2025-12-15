import type { ReactElement, ReactNode } from "react";

export type TextWriterGroupChild = {
  children: ReactNode;
};

export type TextWriterGroupProps = {
  children:
    | ReactElement<TextWriterGroupChild>
    | ReactElement<TextWriterGroupChild>[];
  onComplete?: () => void;
  className?: string;
};
