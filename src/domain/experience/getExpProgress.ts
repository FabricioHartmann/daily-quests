import { expForNextLevel } from "./experience.calculator";

export function getExpProgress(level: number, experience: number) {
  const maxExperience = expForNextLevel(level);
  const percentage = Math.min((experience / maxExperience) * 100, 100);

  return {
    experience,
    maxExperience,
    percentage,
  };
}
