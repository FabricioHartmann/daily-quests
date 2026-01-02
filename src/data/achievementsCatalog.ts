import type { AchievementCatalog } from "../store/achievements/achievements.types";

export const ACHIEVEMENTS_CATALOG: AchievementCatalog[] = [
  // ===== LEVEL =====
  {
    id: "level-5-reached",
    label: "Aprendiz",
    requirements: "Alcançar o nível 5",
    reward: {
      id: "aprendiz",
      type: "title",
    },
  },
  {
    id: "level-10-reached",
    label: "Aprendiz II",
    requirements: "Alcançar o nível 10",
  },
  {
    id: "level-15-reached",
    label: "Aprendiz III",
    requirements: "Alcançar o nível 15",
    // reward: {
    //   id: "novice-sword",
    //   type: "item",
    // },
  },
  {
    id: "level-20-reached",
    label: "Aventureiro",
    requirements: "Alcançar o nível 20",
    reward: {
      id: "aventureiro",
      type: "title",
    },
  },
  {
    id: "level-25-reached",
    label: "Aventureiro II",
    requirements: "Alcançar o nível 25",
  },
  {
    id: "level-30-reached",
    label: "Aventureiro III",
    requirements: "Alcançar o nível 30",
    // reward: {
    //   id: "adventurer-sword",
    //   type: "item",
    // },
  },
  {
    id: "level-35-reached",
    label: "Veterano",
    requirements: "Alcançar o nível 35",
    reward: {
      id: "veterano",
      type: "title",
    },
  },
  {
    id: "level-40-reached",
    label: "Veterano II",
    requirements: "Alcançar o nível 40",
  },
  {
    id: "level-45-reached",
    label: "Veterano III",
    requirements: "Alcançar o nível 45",
    // reward: {
    //   id: "black-iron-sword",
    //   type: "item",
    // },
  },
  {
    id: "level-50-reached",
    label: "Herói",
    requirements: "Alcançar o nível 50",
    reward: {
      id: "heroi",
      type: "title",
    },
  },
  {
    id: "level-55-reached",
    label: "Herói II",
    requirements: "Alcançar o nível 55",
  },
  {
    id: "level-60-reached",
    label: "Herói III",
    requirements: "Alcançar o nível 60",
    // reward: {
    //   id: "silver-sword",
    //   type: "item",
    // },
  },
  {
    id: "level-70-reached",
    label: "Lendário",
    requirements: "Alcançar o nível 70",
    reward: {
      id: "lendario",
      type: "title",
    },
  },
  {
    id: "level-80-reached",
    label: "Lendário II",
    requirements: "Alcançar o nível 80",
  },
  {
    id: "level-100-reached",
    label: "Lendário III",
    requirements: "Alcançar o nível 100",
    // reward: {
    //   id: "arcane-sword",
    //   type: "item",
    // },
  },
  // ===== QUESTS =====
  {
    id: "10-quests-completed",
    label: "Mais que obrigação",
    requirements: "Completar 10 quests",
  },
  {
    id: "50-quests-completed",
    label: "Aplicado",
    requirements: "Completar 50 quests",
  },
  {
    id: "100-quests-completed",
    label: "Dedicado",
    requirements: "Completar 100 quests",
  },
  {
    id: "250-quests-completed",
    label: "Determinado",
    requirements: "Completar 250 quests",
    reward: {
      id: "determinado",
      type: "title",
    },
  },
  {
    id: "350-quests-completed",
    label: "Comprometido",
    requirements: "Completar 350 quests",
  },
  {
    id: "500-quests-completed",
    label: "Disciplinado",
    requirements: "Completar 500 quests",
    reward: {
      id: "disciplinado",
      type: "title",
    },
  },
  {
    id: "1000-quests-completed",
    label: "Juramentado",
    requirements: "Completar 1000 quests",
    reward: {
      id: "juramentado",
      type: "title",
    },
  },

  // ===== EXPEDIÇÕES =====
  {
    id: "1-expedition-started",
    label: "Partida Inicial",
    requirements: "Iniciar sua primeira expedição",
  },
  {
    id: "10-expeditions-completed",
    label: "Andarilho",
    requirements: "Completar 10 expedições",
  },
  {
    id: "25-expeditions-completed",
    label: "Viajante",
    requirements: "Completar 25 expedições",
    reward: {
      type: "title",
      id: "andarilho",
    },
  },
  {
    id: "50-expeditions-completed",
    label: "Explorador",
    requirements: "Completar 50 expedições",
  },
  {
    id: "100-expeditions-completed",
    label: "Nômade",
    requirements: "Completar 100 expedições",
    reward: {
      type: "title",
      id: "explorador",
    },
  },
  {
    id: "250-expeditions-completed",
    label: "Intrépido",
    requirements: "Completar 250 expedições",
  },
  {
    id: "500-expeditions-completed",
    label: "Expedicionário",
    requirements: "Completar 500 expedições",
    reward: {
      type: "title",
      id: "expedicionario",
    },
  },

  // ===== ITENS =====
  {
    id: "5-items-acquired",
    label: "Colecionador",
    requirements: "Adquirir 5 itens",
  },
  {
    id: "10-items-acquired",
    label: "Acumulador",
    requirements: "Adquirir 10 itens",
  },
  {
    id: "20-items-acquired",
    label: "Arsenal Básico",
    requirements: "Adquirir 20 itens",
  },
  {
    id: "30-items-acquired",
    label: "Mestre do Inventário",
    requirements: "Adquirir 30 itens",
  },
  {
    id: "3-items-equipped",
    label: "Totalmente Equipado",
    requirements: "Equipar 3 itens",
  },
  {
    id: "3-epic-items-equipped",
    label: "Equipamento Épico",
    requirements: "Equipar 3 itens épicos",
  },
];
