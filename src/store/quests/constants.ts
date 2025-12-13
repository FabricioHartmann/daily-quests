import type { QuestProps } from "./quests.types";

export const MOCKED_QUESTS: QuestProps[] = [
  {
    id: 1,
    title: "Ir à academia",
    description:
      "Treino de 1 hora na academia para ficar grandão igual o the rockkkk",
    status: "open",
    points: 10,
    category: "Saúde",
    createdAt: new Date().toISOString(),
    type: "daily",
  },
  {
    id: 2,
    title: "Projeto React",
    description: "Fazer a feature programada do dia",
    status: "open",
    points: 10,
    category: "Saúde",
    createdAt: new Date().toISOString(),
    type: "daily",
  },
  {
    id: 3,
    title: "Preparar a comida",
    description:
      "Cozinhar e separar a comida da semanaaaaaaaaaaaaa aaaaaaaa aaa",
    status: "open",
    points: 10,
    category: "Casa",
    createdAt: new Date().toISOString(),
    type: "weekly",
  },
  {
    id: 4,
    title: "Lavar roupa",
    description: "Separar, lavar e secar roupas",
    status: "open",
    points: 5,
    category: "Casa",
    createdAt: new Date().toISOString(),
    type: "weekly",
  },
  {
    id: 5,
    title: "Ler um livro",
    description: "Meia hora antes de dormir, ler X páginas de um livro.",
    status: "open",
    points: 14,
    category: "Saúde",
    createdAt: new Date().toISOString(),
    type: "daily",
  },
  {
    id: 6,
    title: "Estudos",
    description:
      "Praticar 1 hora de TypeScript, Next ou alguma outra tecnologia atual",
    status: "open",
    points: 14,
    category: "Estudo",
    createdAt: new Date().toISOString(),
    type: "daily",
  },
];
