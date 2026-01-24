import { getWeekNumber } from "./getWeekNumber";

export const isNewWeek = (completedAt: Date | null) => {
  if (!completedAt) return true;
  const now = new Date();
  return (
    getWeekNumber(completedAt) !== getWeekNumber(now) ||
    completedAt.getFullYear() !== now.getFullYear()
  );
};