import { useInventoryStore } from "../../../store/inventory/inventory.store";
import { unlockAchievement } from "../rewardRules.helper";
import type { RewardRule } from "../rewardRules.types";

export const genericRewardRules: RewardRule[] = [
  {
    id: "5-items-acquired",
    condition: () => useInventoryStore.getState().items.length >= 5,
    effect: () => {
      unlockAchievement("5-items-acquired");
    },
  },
  {
    id: "10-items-acquired",
    condition: () => useInventoryStore.getState().items.length >= 10,
    effect: () => {
      unlockAchievement("10-items-acquired");
    },
  },
  {
    id: "10-items-acquired",
    condition: () => useInventoryStore.getState().items.length >= 20,
    effect: () => {
      unlockAchievement("20-items-acquired");
    },
  },
  {
    id: "3-items-equipped",
    condition: () =>
      useInventoryStore.getState().items.filter((i) => i.equipped).length === 3,
    effect: () => {
      unlockAchievement("3-items-equipped");
    },
  },
];
