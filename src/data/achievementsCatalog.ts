import type { AchievementCatalog } from "../store/achievements/achievements.types";

export const ACHIEVEMENTS_CATALOG: AchievementCatalog[] = [
  // ===== LEVEL =====
  {
    id: "level-5-reached",
    label: "Aventureiro",
    requirements: "Alcançar o nível 5",
    reward: {
      id: "aventureiro",
      type: "title",
    },
  },
  {
    id: "level-10-reached",
    label: "Aventureiro II",
    requirements: "Alcançar o nível 10",
  },
  {
    id: "level-15-reached",
    label: "Aventureiro III",
    requirements: "Alcançar o nível 15",
  },
  {
    id: "level-20-reached",
    label: "Veterano",
    requirements: "Alcançar o nível 20",
    reward: {
      id: "veterano",
      type: "title",
    },
  },
  {
    id: "level-30-reached",
    label: "Veterano II",
    requirements: "Alcançar o nível 30",
  },
  {
    id: "level-40-reached",
    label: "Veterano III",
    requirements: "Alcançar o nível 40",
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
    id: "level-60-reached",
    label: "Herói II",
    requirements: "Alcançar o nível 60",
  },
  {
    id: "level-75-reached",
    label: "Herói III",
    requirements: "Alcançar o nível 75",
  },
  {
    id: "level-100-reached",
    label: "Lendário",
    requirements: "Alcançar o nível 100",
  },
  // ===== QUESTS =====
  {
    id: "10-quests-completed",
    label: "Cumpridor de Tarefas",
    requirements: "Completar 10 quests",
  },
  {
    id: "50-quests-completed",
    label: "Executor Confiável",
    requirements: "Completar 50 quests",
  },
  {
    id: "100-quests-completed",
    label: "Resolvedor de Problemas",
    requirements: "Completar 100 quests",
  },
  {
    id: "250-quests-completed",
    label: "Imparável",
    requirements: "Completar 250 quests",
  },
  {
    id: "500-quests-completed",
    label: "Máquina de Resultados",
    requirements: "Completar 500 quests",
  },

  // ===== EXPEDIÇÕES =====
  {
    id: "1-expedition-started",
    label: "Partida Inicial",
    requirements: "Iniciar sua primeira expedição",
  },
  {
    id: "10-expeditions-completed",
    label: "Explorador",
    requirements: "Completar 10 expedições",
  },
  {
    id: "25-expeditions-completed",
    label: "Viajante Experiente",
    requirements: "Completar 25 expedições",
  },
  {
    id: "50-expeditions-completed",
    label: "Desbravador",
    requirements: "Completar 50 expedições",
  },
  {
    id: "100-expeditions-completed",
    label: "Explorador Incansável",
    requirements: "Completar 100 expedições",
  },
  {
    id: "250-expeditions-completed",
    label: "Cartógrafo Lendário",
    requirements: "Completar 250 expedições",
  },
  {
    id: "500-expeditions-completed",
    label: "Eterno Viajante",
    requirements: "Completar 500 expedições",
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
