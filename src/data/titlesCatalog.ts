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
  "amante-da-rotina": {
    value: "amante-da-rotina",
    label: "Amante da rotina",
    disabled: true,
  },
  "forjador-de-habitos": {
    value: "forjador-de-habitos",
    label: "Forjador de Hábitos",
    disabled: true,
  },
  locked: {
    value: "locked",
    label: "???",
    disabled: true,
  },
};
