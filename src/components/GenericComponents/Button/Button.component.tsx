import type { CSSProperties } from "react";
import type { ButtonProps } from "./Button.types";
import "./Button.styles.css";

export function Button({
  children,
  variant = "default",
  fullWidth = false,
  className = "",
  size = "md",
  style,
  "aria-label": ariaLabel,
  ...props
}: ButtonProps & { "aria-label"?: string }) {
  return (
    <button
      className={`button ${className}`}
      data-variant={variant}
      data-size={size}
      data-fullwidth={fullWidth || undefined}
      style={
        {
          "--btn-bg":
            variant !== "ghost" ? `var(--btn-bg-${variant})` : undefined,
          ...style,
        } as CSSProperties
      }
      aria-label={ariaLabel}
      {...props}
    >
      {children}
    </button>
  );
}
