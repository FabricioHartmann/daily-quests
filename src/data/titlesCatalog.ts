import type { TitleCatalog, TitleId } from "../store/profile/profile.types";

export const TITLES_CATALOG: Record<TitleId, TitleCatalog> = {
  empty: {
    value: "empty",
    label: "",
    disabled: false,
  },
  iniciante: {
    value: "iniciante",
    label: "Iniciante",
    disabled: true,
  },
  aventureiro: {
    value: "aventureiro",
    label: "Aventureiro",
    disabled: true,
  },
  veterano: {
    value: "veterano",
    label: "Veterano",
    disabled: true,
  },
  heroi: {
    value: "heroi",
    label: "Herói",
    disabled: true,
  },
  lendario: {
    value: "lendario",
    label: "Lendário",
    disabled: true,
  },
  locked: {
    value: "locked",
    label: "???",
    disabled: true,
  },
};
