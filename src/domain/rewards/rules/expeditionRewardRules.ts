import { useExpeditionStore } from "../../../store/expedition/expedition.store";
import { unlockAchievement } from "../rewardRules.helper";
import type { RewardRule } from "../rewardRules.types";

export const expeditionRewardRules: RewardRule[] = [
  {
    id: "1-expedition-completed",
    condition: () => useExpeditionStore.getState().totalExpeditions >= 1,
    effect: () => {
      unlockAchievement("1-expedition-completed");
    },
  },
  {
    id: "10-expedition-completed",
    condition: () => useExpeditionStore.getState().totalExpeditions >= 10,
    effect: () => {
      unlockAchievement("10-expeditions-completed");
    },
  },
  {
    id: "25-expedition-completed",
    condition: () => useExpeditionStore.getState().totalExpeditions >= 25,
    effect: () => {
      unlockAchievement("25-expeditions-completed");
    },
  },
  {
    id: "50-expedition-completed",
    condition: () => useExpeditionStore.getState().totalExpeditions >= 50,
    effect: () => {
      unlockAchievement("50-expeditions-completed");
    },
  },
  {
    id: "100-expedition-completed",
    condition: () => useExpeditionStore.getState().totalExpeditions >= 100,
    effect: () => {
      unlockAchievement("100-expeditions-completed");
    },
  },
  {
    id: "250-expedition-completed",
    condition: () => useExpeditionStore.getState().totalExpeditions >= 250,
    effect: () => {
      unlockAchievement("250-expeditions-completed");
    },
  },
  {
    id: "500-expedition-completed",
    condition: () => useExpeditionStore.getState().totalExpeditions >= 500,
    effect: () => {
      unlockAchievement("500-expeditions-completed");
    },
  },
];
