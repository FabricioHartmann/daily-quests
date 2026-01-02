export const generateExpeditionExp = (playerLevel: number) => {
  const baseMin = 57;
  const baseMax = 89;

  const FIXED_PER_LEVEL = 500;
  const PERCENT_PER_LEVEL = 0.01;

  const fixedBonus = playerLevel * FIXED_PER_LEVEL;

  const minExp = Math.floor(
    baseMin + fixedBonus + baseMin * (playerLevel * PERCENT_PER_LEVEL)
  );

  const maxExp = Math.floor(
    baseMax + fixedBonus + baseMax * (playerLevel * PERCENT_PER_LEVEL)
  );

  const expGained = Math.floor(Math.random() * (maxExp - minExp + 1)) + minExp;

  return {
    expGained,
    minExp,
    maxExp,
  };
};
