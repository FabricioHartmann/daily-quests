import "./ExperienceBar.styles.css";
import { Text } from "../..";
import { getExpProgress } from "../../../domain/experience/getExpProgress";
import type { ExperienceBarProps } from "./ExperienceBar.types";
import { useEffect, useState } from "react";
import { useProfileStore } from "../../../store/profile/profile.store";
import { useLevelUpSound } from "../../../hooks/sounds/levelUpSound/useLevelUpSound";

export function ExperienceBar({
  experience,
  level,
  leveledUp,
}: ExperienceBarProps) {
  const { percentage, maxExperience } = getExpProgress(level, experience);
  const { clearLevelUp } = useProfileStore();
  const { playLevelUpSound } = useLevelUpSound();
  const [fill, setFill] = useState(0);
  const [reseting, setReseting] = useState(false);

  useEffect(() => {
    if (leveledUp) {
      setFill(100);
      const timeout = setTimeout(() => {
        setReseting(true);
        setFill(0);
        playLevelUpSound();

        requestAnimationFrame(() => {
          setReseting(false);
          setFill(percentage);
        });
        clearLevelUp();
      }, 600);

      return () => clearTimeout(timeout);
    } else {
      setFill(percentage);
    }
  }, [leveledUp, percentage]);

  return (
    <div className="exp-wrapper">
      <div className={`exp-bar ${reseting ? "no-transition" : ""}`}>
        <div className="exp-bar__fill" style={{ width: `${fill}%` }} />
      </div>
      <Text weight={"bold"} size="sm" color="var(--black)">
        {experience}/{maxExperience} xp
      </Text>
    </div>
  );
}
