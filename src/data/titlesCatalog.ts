import type { TitleCatalog, TitleId } from "../store/profile/profile.types";

export const TITLES_CATALOG: Record<TitleId, TitleCatalog> = {
  // ===== LEVEL =====
  empty: {
    value: "empty",
    label: "",
    disabled: false,
  },
  aprendiz: {
    value: "aprendiz",
    label: "Aprendiz",
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

  // ===== EXPEDIÇÕES =====
  andarilho: {
    value: "andarilho",
    label: "Andarilho",
    disabled: true,
  },
  explorador: {
    value: "explorador",
    label: "Explorador",
    disabled: true,
  },
  expedicionario: {
    value: "expedicionario",
    label: "Expedicionário",
    disabled: true,
  },
  // ===== QUESTS =====
  determinado: {
    value: "determinado",
    label: "Determinado",
    disabled: true,
  },
  disciplinado: {
    value: "disciplinado",
    label: "Disciplinado",
    disabled: true,
  },
  juramentado: {
    value: "juramentado",
    label: "Juramentado",
    disabled: true,
  },

  locked: {
    value: "locked",
    label: "???",
    disabled: true,
  },
};
