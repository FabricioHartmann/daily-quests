import React from "react";
import "./Chip.styles.css";

interface ChipProps {
  label: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  color?: string;
  bg?: string;
  weight?: "normal" | "medium" | "bold";
  className?: string;
  style?: React.CSSProperties;
}

export function Chip({
  label,
  size = "md",
  color = "#fff",
  bg = "#3498db",
  weight = "medium",
  className = "",
  style,
}: ChipProps) {
  return (
    <div
      className={`chip chip-${size} ${className}`}
      style={{
        "--chip-color": color,
        "--chip-bg": bg,
        "--chip-weight": weight === "bold" ? 700 : weight === "medium" ? 500 : 400,
        ...style,
      } as React.CSSProperties}
    >
      {label}
    </div>
  );
}
