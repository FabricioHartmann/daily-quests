import type { ExperienceTypes } from "./experience.types";

export function expForNextLevel(level: number): number {
  return Math.floor((80 + level * 15) * 1.15);
}

export function calculateExperience({
  changedExp,
  currentExp,
  currentLevel,
}: ExperienceTypes) {
  let level = currentLevel;
  let experience = currentExp + changedExp;
  let leveledUp = false;

  if (experience < 0) experience = 0;

  if (changedExp > 0) {
    while (experience >= expForNextLevel(level)) {
      experience -= expForNextLevel(level);
      level++;
      leveledUp = true;
    }
  }

  return {
    level,
    experience,
    leveledUp,
  };
}
