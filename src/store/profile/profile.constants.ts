import type { Profile, TitleOption } from "./profile.types";
import profileImage from "../../assets/images/profile-test-image-2.svg";

export const MOCKED_ACHIEVMENTS_LIST = [];

export const MOCKED_PROFILE_DATA: Profile = {
  name: "Fabrício Hartmann",
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
    label: "Mestre da Consistência",
    value: "mestre-da-consistencia",
    disabled: true,
  },
  { label: "Senhor do Tempo", value: "senhor-do-tempo", disabled: true },
  {
    label: "Campeão da Disciplina",
    value: "campeao-da-disciplina",
    disabled: true,
  },
];
