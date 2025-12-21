import type { CSSProperties } from "react";

export type ButtonProps = {
  children: React.ReactNode | string;
  variant?: "default" | "primary" | "success" | "danger" | "ghost" | "outlined";
  fullWidth?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  disabled?: boolean;
  className?: string;
  style?: CSSProperties;
  onClick?: () => void;
};
