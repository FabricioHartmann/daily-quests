import type { CSSProperties } from "react";
import type { TextProps } from "./Text.types";
import "./Text.styles.css";

export function Text({
  children,
  renderAs: Component = "p",
  size = "md",
  color = "",
  weight = "normal",
  underline = false,
  italic = false,
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
          "--italic": italic ? "italic" : "normal",
          "--underline": underline ? "underline" : "none",
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </Component>
  );
}
