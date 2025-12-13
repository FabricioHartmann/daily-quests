export type Achievement = {
  acquireDate: string
  name: string
}

export type Profile = {
  name: string;
  level: number;
  experience: number;
  title: string;
  photo: string;
  achievments: Achievement[]
};

export type ProfileState = {
  profile: Profile;
  setProfile: (profile: Profile) => void;
  addExp: (points: number) => void;
  removeExp: (points: number) => void;
};
