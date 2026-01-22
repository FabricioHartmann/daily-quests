import { useQuestStore } from "../../../store/quests/quests.store";
import { unlockAchievement } from "../rewardRules.helper";
import type { RewardRule } from "../rewardRules.types";

export const questRewardRules: RewardRule[] = [
  {
    id: "1-quest-created",
    condition: () =>
      useQuestStore
        .getState()
        .quests.filter((quest) => quest.status === "open").length >= 1,
    effect: () => {
      unlockAchievement("1-quest-created");
    },
  },
  {
    id: "10-quest-completed",
    condition: () =>
      useQuestStore
        .getState()
        .quests.filter((quest) => quest.status === "completed").length >= 10,
    effect: () => {
      unlockAchievement("10-quests-completed");
    },
  },
  {
    id: "25-quest-completed",
    condition: () =>
      useQuestStore
        .getState()
        .quests.filter((quest) => quest.status === "completed").length >= 25,
    effect: () => {
      unlockAchievement("25-quests-completed");
    },
  },
  {
    id: "50-quest-completed",
    condition: () =>
      useQuestStore
        .getState()
        .quests.filter((quest) => quest.status === "completed").length >= 50,
    effect: () => {
      unlockAchievement("50-quests-completed");
    },
  },
  {
    id: "100-quest-completed",
    condition: () =>
      useQuestStore
        .getState()
        .quests.filter((quest) => quest.status === "completed").length >= 100,
    effect: () => {
      unlockAchievement("100-quests-completed");
    },
  },
  {
    id: "250-quest-completed",
    condition: () =>
      useQuestStore
        .getState()
        .quests.filter((quest) => quest.status === "completed").length >= 250,
    effect: () => {
      unlockAchievement("250-quests-completed");
    },
  },
  {
    id: "350-quest-completed",
    condition: () =>
      useQuestStore
        .getState()
        .quests.filter((quest) => quest.status === "completed").length >= 350,
    effect: () => {
      unlockAchievement("350-quests-completed");
    },
  },
  {
    id: "500-quest-completed",
    condition: () =>
      useQuestStore
        .getState()
        .quests.filter((quest) => quest.status === "completed").length >= 500,
    effect: () => {
      unlockAchievement("500-quests-completed");
    },
  },
  {
    id: "750-quest-completed",
    condition: () =>
      useQuestStore
        .getState()
        .quests.filter((quest) => quest.status === "completed").length >= 750,
    effect: () => {
      unlockAchievement("750-quests-completed");
    },
  },
  {
    id: "1000-quest-completed",
    condition: () =>
      useQuestStore
        .getState()
        .quests.filter((quest) => quest.status === "completed").length >= 1000,
    effect: () => {
      unlockAchievement("1000-quests-completed");
    },
  },
];
