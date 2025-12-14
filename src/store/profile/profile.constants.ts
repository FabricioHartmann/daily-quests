import type { Profile } from "./profile.types";
import profileImage from "../../assets/images/profile-test-image-2.svg";

export const MOCKED_ACHIEVMENTS_LIST = [];

export const MOCKED_PROFILE_DATA: Profile = {
  name: "Fabrício",
  experience: 0,
  level: 1,
  title: "Iniciante",
  photo: profileImage,
  achievments: MOCKED_ACHIEVMENTS_LIST,
};
