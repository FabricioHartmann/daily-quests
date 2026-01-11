import type { Ritual } from "./rituals.types";

export const MOCKED_RITUALS: Ritual[] = [
  {
    id: "water_ritual",
    name: "Hidratar",
    icon: "GiPotionBall",
    description: "Normalmente o ideal é beber aproximadamente 3L por dia, dependendo do peso, idade e atividade.",
    cooldownMinutes: 60,
    xp: 20,
    category: "maintenance",
  },
  {
    id: "stretch_ritual",
    name: "Alongar",
    icon: "GiStrong",
    description:
      "Fique de pé e se alongue por 30 ~ 60 segundos, ou caminhe um pouco.",
    cooldownMinutes: 60,
    xp: 20,
    category: "maintenance",
  },
  {
    id: "breath_ritual",
    name: "Meditar",
    icon: "GiAura",
    description: "Pare um minuto para respirar de forma consciente. Assim omo o corpo, a mente também precisa descansar.",
    cooldownMinutes: 60,
    xp: 20,
    category: "maintenance",
  },
];
