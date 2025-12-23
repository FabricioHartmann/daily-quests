import type { ItemId } from "../inventory/inventory.types";
import type { TitleId } from "../profile/profile.types";

export type AchievementId =
  | "level-2-reached"
  | "level-5-reached"
  | "level-10-reached"
  | "level-15-reached"
  | "level-20-reached"
  | "level-30-reached"
  | "level-40-reached"
  | "level-50-reached"
  | "level-60-reached"
  | "level-75-reached"
  | "level-100-reached"
  | "3-days-streak"
  | "7-days-streak"
  | "15-days-streak"
  | "30-days-streak"
  | "60-days-streak"
  | "90-days-streak"
  | "1-quest-created"
  | "10-quests-completed"
  | "50-quests-completed"
  | "100-quests-completed"
  | "250-quests-completed"
  | "500-quests-completed"
  | "1000-quests-completed"
  | "1-expedition-started"
  | "10-expeditions-completed"
  | "25-expeditions-completed"
  | "50-expeditions-completed"
  | "100-expeditions-completed"
  | "250-expeditions-completed"
  | "500-expeditions-completed"
  | "5-expeditions-in-a-day"
  | "5-items-acquired"
  | "10-items-acquired"
  | "20-items-acquired"
  | "30-items-acquired"
  | "3-items-equipped"
  | "3-epic-items-equipped"
  | "quest-at-midnight";

export type AchievementReward =
  | {
      type: "title";
      id: TitleId;
      text?: string;
    }
  | {
      type: "item";
      id: ItemId;
      text?: string;
    };

export type AchievementCatalog = {
  id: AchievementId;
  label: string;
  requirements: string;
  reward?: AchievementReward;
  disabled?: boolean;
};

export type AchievementProgress = {
  id: AchievementId;
  unlocked: boolean;
  unlockedAt?: string;
};

export type AchievementState = {
  achievements: Partial<Record<AchievementId, AchievementProgress>>;
  unlockAchievement: (id: AchievementId) => void;
  isUnlocked: (id: AchievementId) => boolean;
};
