import "./ExperienceBar.styles.css";
import { Text } from "../..";
import { getExpProgress } from "../../../domain/experience/getExpProgress";
import type { ExperienceBarProps } from "./ExperienceBar.types";

export function ExperienceBar({ experience, level }: ExperienceBarProps) {
  const { percentage, maxExperience } = getExpProgress(level, experience);

  return (
    <div className="exp-wrapper">
      <div className="exp-bar">
        <div
          className="exp-bar__fill"
          style={
            {
              "--exp-progress": `${percentage}%`,
            } as React.CSSProperties
          }
        />
      </div>
      <Text weight={"bold"} size="sm" color="var(--black)">
        {experience}/{maxExperience} xp
      </Text>
    </div>
  );
}
