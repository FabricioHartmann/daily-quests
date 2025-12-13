import { BASE_EXP, EXPONENT } from "./experience.constants";
import type { ExperienceTypes } from "./experience.types";

export function getExpForNextLevel(level: number): number {
  return Math.floor(BASE_EXP * Math.pow(level, EXPONENT));
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
    while (experience >= getExpForNextLevel(level)) {
      experience -= getExpForNextLevel(level);
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
