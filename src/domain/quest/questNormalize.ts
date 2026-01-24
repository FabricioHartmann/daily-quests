import type { Quest } from "../../store/quests/quests.types";

const toLocalDate = (date: string | Date) => {
  const d = new Date(date);
  return new Date(
    d.getFullYear(),
    d.getMonth(),
    d.getDate(),
    d.getHours(),
    d.getMinutes(),
    d.getSeconds(),
    d.getMilliseconds()
  );
};

export const normalizeQuestDates = (quests: Quest[]) => {
  return quests.map((quest) => ({
    ...quest,
    createdAt: toLocalDate(quest.createdAt),
    completedAt: quest.completedAt
      ? toLocalDate(quest.completedAt)
      : null,
  }));
};