import type { Profile, TitleOption } from "./profile.types";
import profileImage from "../../assets/images/profile-test-image-2.svg";
import { TITLES_CATALOG } from "../../data/titlesCatalog";

export const MOCKED_ACHIEVMENTS_LIST = [];

export const MOCKED_PROFILE_DATA: Profile = {
  name: "Fabrício Hartmann",
  experience: 0,
  level: 1,
  photo: profileImage,
  achievments: MOCKED_ACHIEVMENTS_LIST,
  firstAccess: true,
  selectedTitle: "empty",
};

export const TITLE_OPTIONS: TitleOption[] = (() => {
  const unlockedTitles: TitleOption[] = Object.values(TITLES_CATALOG).map(
    (title) => ({
      label: title.label,
      value: title.value,
      disabled: title.disabled,
    })
  );

  const TOTAL_SLOTS = 12;
  const lockedCount = TOTAL_SLOTS - unlockedTitles.length;
  const lockedTitles: TitleOption[] = Array.from({ length: lockedCount }, (_, i) => ({
    label: "???",
    value: "locked",
    disabled: true,
  }));

  return [...unlockedTitles, ...lockedTitles];
})();