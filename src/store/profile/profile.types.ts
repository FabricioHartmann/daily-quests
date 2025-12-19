export type Achievement = {
  acquireDate: string;
  name: string;
};

export type Profile = {
  name: string;
  level: number;
  experience: number;
  title: string;
  photo: string;
  achievments: Achievement[];
  firstAccess: boolean;
  selectedTitle: string;
};

export type TitleOption = {
  label: string;
  value: string;
  disabled: boolean
}

export type ProfileState = {
  profile: Profile;
  leveledUp: boolean;
  titleOptions: TitleOption[];
  setTitle: (title: string) => void;
  clearLevelUp: () => void;
  setProfile: (profile: Profile) => void;
  addExp: (points: number) => void;
  removeExp: (points: number) => void;
  
};
