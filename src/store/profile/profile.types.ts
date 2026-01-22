export type Profile = {
  name: string;
  level: number;
  experience: number;
  photo: string;
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
  // level
  | "aprendiz"
  | "aventureiro"
  | "veterano"
  | "heroi"
  | "lendario"
  // expedicoes
  | "andarilho"
  | "explorador"
  | "expedicionario"
  // rituais
  | "ritualista"
  | "ritualista-mestre"
  // quests
  | "determinado"
  | "disciplinado"
  | "juramentado"
  //
  | "locked";

export type TitleCatalog = {
  value: TitleId;
  label: string;
  disabled: boolean;
};
