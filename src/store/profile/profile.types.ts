export type ProfileProps = {
  name: string;
  level: number;
  experience: number;
  title: string;
  photo: string;
};

export type ProfileState = {
  profile: ProfileProps;
};
