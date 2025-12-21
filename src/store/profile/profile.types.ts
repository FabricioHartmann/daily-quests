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
  value: string;
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
  | "forjador-de-habitos";

export type CatalogTitle = {
  value: TitleId;
  label: string;
  disabled: boolean;
};
