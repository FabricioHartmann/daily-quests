import type { Ritual } from "./rituals.types";

export const MOCKED_RITUALS: Ritual[] = [
  {
    id: "water_ritual",
    name: "Hidratar",
    icon: "GiPotionBall",
    description:
      "Normalmente o ideal é beber aproximadamente 3L por dia, dependendo do peso, idade e atividade.",
    category: "maintenance",
    isActive: true,
  },
  {
    id: "stretch_ritual",
    name: "Alongar",
    icon: "GiStrong",
    description:
      "Fique de pé e se alongue por 30 ~ 60 segundos, ou caminhe um pouco.",
    category: "maintenance",
    isActive: false,
  },
  {
    id: "breath_ritual",
    name: "Respirar",
    icon: "GiAura",
    description:
      "Pare um minuto para respirar de forma consciente. Assim como o corpo, a mente também precisa descansar.",
    category: "maintenance",
    isActive: false,
  },
];

export const RITUAL_COOLDOWN_MINUTES = [60, 90, 120, 180] as const;

export const RITUAL_COOLDOWN_OPTIONS = RITUAL_COOLDOWN_MINUTES.map(
  (minutes) => ({
    value: String(minutes),
    label:
      minutes < 60
        ? `${minutes} min`
        : minutes % 60 === 0
        ? `${minutes / 60} hora${minutes / 60 > 1 ? "s" : ""}`
        : `${Math.floor(minutes / 60)}h ${minutes % 60}min`,
  })
);
