import "./CircularProgress.styles.css";
import type { CircularProgressProps } from "./CircularProgress.types";

export function CircularProgress({
  value,
  phase,
  size = 100,
  strokeWidth = 8,
}: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (value / 100) * circumference;

  return (
    <svg width={size} height={size} className="circular-progress">
      <circle
        stroke="var(--progress-empty)"
        fill="transparent"
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />

      <circle
        stroke="var(--fill-progress-color)"
        fill="transparent"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
    </svg>
  );
}
