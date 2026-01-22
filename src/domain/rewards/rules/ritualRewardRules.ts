import { useRitualsStore } from "../../../store/rituals/rituals.store";
import { unlockAchievement } from "../rewardRules.helper";
import type { RewardRule } from "../rewardRules.types";

export const ritualRewardRules: RewardRule[] = [
  {
    id: "1-ritual-completed",
    condition: () => useRitualsStore.getState().totalRitualsCompleted >= 1,
    effect: () => {
      unlockAchievement("1-ritual-completed");
    },
  },
  {
    id: "5-ritual-completed",
    condition: () => useRitualsStore.getState().totalRitualsCompleted >= 5,
    effect: () => {
      unlockAchievement("5-rituals-completed");
    },
  },
  {
    id: "10-ritual-completed",
    condition: () => useRitualsStore.getState().totalRitualsCompleted >= 10,
    effect: () => {
      unlockAchievement("10-rituals-completed");
    },
  },
  {
    id: "20-ritual-completed",
    condition: () => useRitualsStore.getState().totalRitualsCompleted >= 20,
    effect: () => {
      unlockAchievement("20-rituals-completed");
    },
  },
  {
    id: "30-ritual-completed",
    condition: () => useRitualsStore.getState().totalRitualsCompleted >= 30,
    effect: () => {
      unlockAchievement("30-rituals-completed");
    },
  },
  {
    id: "50-ritual-completed",
    condition: () => useRitualsStore.getState().totalRitualsCompleted >= 50,
    effect: () => {
      unlockAchievement("50-rituals-completed");
    },
  },
  {
    id: "100-ritual-completed",
    condition: () => useRitualsStore.getState().totalRitualsCompleted >= 100,
    effect: () => {
      unlockAchievement("100-rituals-completed");
    },
  },
    {
    id: "200-ritual-completed",
    condition: () => useRitualsStore.getState().totalRitualsCompleted >= 200,
    effect: () => {
      unlockAchievement("200-rituals-completed");
    },
  },
    {
    id: "300-ritual-completed",
    condition: () => useRitualsStore.getState().totalRitualsCompleted >= 300,
    effect: () => {
      unlockAchievement("300-rituals-completed");
    },
  },
];
