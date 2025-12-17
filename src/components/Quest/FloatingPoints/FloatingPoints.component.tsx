import { useMemo } from "react";
import { Text } from "../../Generic";
import type { FloatingPointsProps } from "./FloatingPoints.types";
import "./FloatingPoints.styles.css";

export function FloatingPoints({ points, variant }: FloatingPointsProps) {
  const pointsLabel = useMemo(() => {
    let operator = variant === "gain" ? "+" : "-";
    return `${operator} ${points} xp`;
  }, [points]);

  return (
    <div className={`floating-points ${variant}`}>
      <Text
        size="lg"
        weight={"bold"}
        italic
        color={
          variant === "gain" ? "var(--success-color)" : "var(--fail-color)"
        }
      >
        {pointsLabel}
      </Text>
    </div>
  );
}
