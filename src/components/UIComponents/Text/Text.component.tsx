import type { CSSProperties } from "react";
import "./Text.styles.css";
import type { TextProps } from "./Text.types";

export function Text({
  children,
  renderAs: Component = "p",
  size = "md",
  color = "",
  weight = "normal",
  underline = false,
  align = "left",
  className = "",
  style,
}: TextProps) {
  return (
    <Component
      className={`text-ui ${className}`}
      style={
        {
          "--text-size": `var(--text-${size})`,
          "--color": color,
          "--weight": weight,
          "--align": align,
          "--underline": underline ? "underline" : "none",
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </Component>
  );
}
