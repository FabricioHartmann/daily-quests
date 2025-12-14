import "./ExperienceBar.styles.css";
import { Text } from "../..";
import { getExpProgress } from "../../../domain/experience/getExpProgress";
import type { ExperienceBarProps } from "./ExperienceBar.types";

export function ExperienceBar({ experience, level }: ExperienceBarProps) {
  const { percentage, maxExperience } = getExpProgress(level, experience);

  return (
    <div className="experience-wrapper">
      <div className="experience-bar"></div>
      <Text weight={"bold"} size="sm" color="var(--black)">
        {experience}/{maxExperience} xp
      </Text>
    </div>
  );
}
