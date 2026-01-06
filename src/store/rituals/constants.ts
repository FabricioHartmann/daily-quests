import type { Ritual } from "../../pages/Rituals/Rituals.types";

export const MOCKED_RITUALS: Ritual[] = [
  {
    id: "water_ritual",
    name: "Beber água",
    icon: "GiPotionBall",
    description: "Mantenha-se hidratado durante o dia.",
    cooldownMinutes: 60,
    xp: 20,
    category: "maintenance",
  },
  {
    id: "stretch_ritual",
    name: "Alongar-se",
    icon: "GiStretching",
    description:
      "Fique de pé de 30 a 60 segundos e se alongue ou caminhe um pouco.",
    cooldownMinutes: 90,
    xp: 20,
    category: "maintenance",
  },
  {
    id: "breath_ritual",
    name: "Rito do Fôlego",
    icon: "GiWindyStripes",
    description: "Pare um minuto para respirar de forma consciente.",
    cooldownMinutes: 45,
    xp: 20,
    category: "maintenance",
  },
];
