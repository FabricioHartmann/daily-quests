export type QuestProps = {
  id: number;
  title: string;
  description: string;
  status: "open" | "completed" | "canceled" | "failed";
  points: number;
  category: "Estudo" | "Saúde" | "Casa" | "Trabalho";
  createdAt: string;
  type: "daily" | "weekly";
};

export type QuestState = {
  quests: QuestProps[];
  addQuest: (quest: QuestProps) => void;
  completeQuest: (id: number) => void;
  openQuest: (id: number) => void;
  cancelQuest: (id: number) => void;
  removeQuest: (id: number) => void;
};
