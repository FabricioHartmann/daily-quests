import { Text } from "../../Generic";
import type { FloatingPointsProps } from "./FloatingPoints.types";
import "./FloatingPoints.styles.css";

export function FloatingPoints({ points }: FloatingPointsProps) {
  return (
    <div className="floating-points">
      <Text size="lg" weight={"bold"} italic color="var(--success-color)">
        {`+ ${points} xp`}
      </Text>
    </div>
  );
}
