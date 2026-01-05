import { useProfileStore } from "../../store/profile/profile.store";
import { unlockAchievement, unlockItems } from "./rewardRules.helper";
import type { RewardRule } from "./rewardRules.types";

export const levelRewardRules: RewardRule[] = [
  {
    id: "level2-item-reward",
    condition: () => useProfileStore.getState().profile.level >= 2,
    effect: () => {
      unlockItems([
        "iron-sword",
        "cape-armor",
        "runed-blade",
        "antique-poncho",
        "lantern",
        "sun-goggles",
        "initial-ring",
        "chest-armor",
        "croc-sword",
        "leather-armor",
        "heart-armor",
        "relic-blade",
        "two-handed-sword",
      ]);
    },
  },
  {
    id: "level-5-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 5,
    effect: () => {
      unlockAchievement("level-5-reached");
    },
  },
  {
    id: "level-10-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 10,
    effect: () => {
      unlockAchievement("level-10-reached");
    },
  },
  {
    id: "level-15-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 15,
    effect: () => {
      unlockAchievement("level-15-reached");
    },
  },
  {
    id: "level-20-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 20,
    effect: () => {
      unlockAchievement("level-20-reached");
    },
  },
  {
    id: "level-25-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 25,
    effect: () => {
      unlockAchievement("level-25-reached");
    },
  },
  {
    id: "level-30-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 30,
    effect: () => {
      unlockAchievement("level-30-reached");
    },
  },
  {
    id: "level-35-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 35,
    effect: () => {
      unlockAchievement("level-35-reached");
    },
  },
  {
    id: "level-40-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 40,
    effect: () => {
      unlockAchievement("level-40-reached");
    },
  },
  {
    id: "level-45-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 45,
    effect: () => {
      unlockAchievement("level-45-reached");
    },
  },
  {
    id: "level-50-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 50,
    effect: () => {
      unlockAchievement("level-50-reached");
    },
  },
  {
    id: "level-55-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 55,
    effect: () => {
      unlockAchievement("level-55-reached");
    },
  },
  {
    id: "level-60-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 60,
    effect: () => {
      unlockAchievement("level-60-reached");
    },
  },
  {
    id: "level-70-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 70,
    effect: () => {
      unlockAchievement("level-70-reached");
    },
  },
  {
    id: "level-80-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 80,
    effect: () => {
      unlockAchievement("level-80-reached");
    },
  },
  {
    id: "level-100-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 100,
    effect: () => {
      unlockAchievement("level-100-reached");
    },
  },
];
