export function generateRitualExp({
  cooldownInMinutes,
  xpPerHour,
}: {
  cooldownInMinutes: number;
  xpPerHour: number;
}) {
  const hours = cooldownInMinutes / 60;

  const expGained = Math.floor(hours * xpPerHour);

  return {
    expGained,
  };
}