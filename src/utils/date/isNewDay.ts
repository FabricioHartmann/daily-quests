const toDateKey = (date: Date) =>
  `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

export const isNewDay = (completedAt: Date | null) => {
  if (!completedAt) return true;

  const now = new Date();

  return toDateKey(completedAt) !== toDateKey(now);
};
