import type { ReactNode, JSX, CSSProperties } from "react";

export type TextProps = {
  children: ReactNode;
  renderAs?: keyof JSX.IntrinsicElements;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: string;
  weight?: CSSProperties["fontWeight"];
  underline?: boolean;
  italic?: boolean;
  align?: CSSProperties["textAlign"];
  className?: string;
  style?: CSSProperties;
}