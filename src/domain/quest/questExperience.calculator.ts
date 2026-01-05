import type { InventoryItem } from "../../store/inventory/inventory.types";

export const QUEST_BASE_XP = {
  daily: 20,
  weekly: 75,
} as const;

export const calculateQuestXP = (
  questType: "daily" | "weekly",
  inventory: InventoryItem[]
) => {
  const baseXP = QUEST_BASE_XP[questType];

  const equippedItems = inventory.filter((item) => item.equipped);

  let bonusXP = 0;
  let multiplier = 1;

  for (const item of equippedItems) {
    for (const effect of item.effects) {
      if (!effect.active) continue;

      if (effect.appliesTo !== questType) {
        continue;
      }

      switch (effect.kind) {
        case "xp_bonus":
          bonusXP += effect.amount;
          break;

        case "xp_multiplier":
          multiplier *= effect.multiplier;
          break;
      }
    }
  }

  return Math.floor((baseXP + bonusXP) * multiplier);
};
