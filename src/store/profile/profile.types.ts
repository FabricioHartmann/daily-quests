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
  | "veterano"
  | "heroi"
  | "lendario"
  | "locked";

export type TitleCatalog = {
  value: TitleId;
  label: string;
  disabled: boolean;
};
