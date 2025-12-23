export type Achievement = {
  acquireDate: string;
  name: string;
};

export type Profile = {
  name: string;
  level: number;
  experience: number;
  photo: string;
  achievments: Achievement[];
  firstAccess: boolean;
  selectedTitle: TitleId;
};

export type TitleOption = {
  label: string;
  value: TitleId;
  disabled: boolean;
};

export type ProfileState = {
  profile: Profile;
  leveledUp: boolean;
  titleOptions: TitleOption[];
  setTitle: (title: TitleId) => void;
  unlockTitle: (title: TitleId) => void;
  clearLevelUp: () => void;
  setProfile: (profile: Profile) => void;
  addExp: (points: number) => void;
};

export type TitleId =
  | "empty"
  | "iniciante"
  | "aventureiro"
  | "amante-da-rotina"
  | "forjador-de-habitos"
  | "locked";

export type AchievementId =
  | "level-5-reached"
  | "level-10-reached"
  | "level-20-reached"
  | "level-30-reached"
  | "level-50-reached"
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
  | "quest-at-midnight"

export type TitleCatalog = {
  value: TitleId;
  label: string;
  disabled: boolean;
};

export type AchievementCatalog = {
  id: AchievementId;
  label: string;
  description: string
  requirements: string;
  reward?: string;
  disabled?: boolean;
};
