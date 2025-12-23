import { useProfileStore } from "../../store/profile/profile.store";
import { useQuestStore } from "../../store/quests/quests.store";
import {
  unlockAchievement,
  unlockItems,
  unlockTitle,
} from "./rewardRules.helper";
import type { RewardRule } from "./rewardRules.types";

const levelRewards: RewardRule[] = [
  {
    id: "level2-item-reward",
    condition: () => useProfileStore.getState().profile.level >= 2,
    effect: () => {
      unlockItems(["initial-iron-sword", "initial-light-armor"]);
    },
  },
  {
    id: "level3-item-reward",
    condition: () => useProfileStore.getState().profile.level >= 3,
    effect: () => {
      unlockItems(["initial-ring"]);
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
    id: "level-30-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 30,
    effect: () => {
      unlockAchievement("level-30-reached");
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
    id: "level-50-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 50,
    effect: () => {
      unlockAchievement("level-50-reached");
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
    id: "level-75-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 75,
    effect: () => {
      unlockAchievement("level-75-reached");
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

const questRewards = [
  {
    id: "1-quest-completed",
    condition: () =>
      useQuestStore
        .getState()
        .quests.filter((quest) => quest.status === "completed").length >= 1,
    effect: () => {
      unlockTitle("iniciante");
    },
  },
];

export const rewardRules = [...levelRewards, ...questRewards];
