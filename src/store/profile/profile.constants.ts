import type { Profile, TitleOption } from "./profile.types";
import profileImage from "../../assets/images/profile-test-image-2.svg";

export const MOCKED_ACHIEVMENTS_LIST = [];

export const MOCKED_PROFILE_DATA: Profile = {
  name: "HartGOD",
  experience: 0,
  level: 1,
  title: "Iniciante",
  photo: profileImage,
  achievments: MOCKED_ACHIEVMENTS_LIST,
  firstAccess: true,
  selectedTitle: "",
};

export const TITLE_OPTIONS: TitleOption[] = [
  { label: "", value: "", disabled: false },
  { label: "Iniciante", value: "iniciante", disabled: false },
  { label: "Aventureiro", value: "aventureiro", disabled: true },
  { label: "Amante da rotina", value: "amante-da-rotina", disabled: true },
  {
    label: "Forjador de Hábitos",
    value: "forjador-de-habitos",
    disabled: true,
  },
  {
    label: "???",
    value: "locked-1",
    disabled: true,
  },
    {
    label: "???",
    value: "locked-2",
    disabled: true,
  },
    {
    label: "???",
    value: "locked-3",
    disabled: true,
  },
    {
    label: "???",
    value: "locked-4",
    disabled: true,
  },
    {
    label: "???",
    value: "locked-5",
    disabled: true,
  },
  {
    label: "???",
    value: "locked-6",
    disabled: true,
  },
    {
    label: "???",
    value: "locked-7",
    disabled: true,
  },
    {
    label: "???",
    value: "locked-8",
    disabled: true,
  },
    {
    label: "???",
    value: "locked-9",
    disabled: true,
  },
    {
    label: "???",
    value: "locked-10",
    disabled: true,
  },
  

  
];
