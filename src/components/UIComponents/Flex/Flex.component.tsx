import type { CSSProperties } from "react";
import type { FlexProps } from "./Flex.types";
import "./Flex.styles.css";

export function Flex({
  children,
  direction = "row",
  justify = "flex-start",
  align = "center",
  wrap = "nowrap",
  gap = "4px",
  padding = "0",
  margin = "0",
  mt = "0",
  mb = "0",
  width = "auto",
  height = "auto",
  className = "",
  style,
}: FlexProps) {
  return (
    <div
      className={`flex-ui ${className}`}
      style={
        {
          "--direction": direction,
          "--justify": justify,
          "--align": align,
          "--wrap": wrap,
          "--gap": gap,
          "--padding": padding,
          "--margin": margin,
          "--mt": mt,
          "--mb": mb,
          "--width": width,
          "--height": height,
          ...style,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}
