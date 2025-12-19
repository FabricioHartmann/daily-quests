export type QuestProps = {
  id: number;
  title: string;
  description: string;
  status: "open" | "completed" | "canceled" | "failed";
  points: number | null;
  category: "Estudo" | "Saúde" | "Casa" | "Trabalho" | "Outro" | null ;
  createdAt: Date;
  completedAt: Date | null;
  type: "daily" | "weekly";
};

export type QuestState = {
  quests: QuestProps[];
  addQuest: (quest: QuestProps) => void;
  completeQuest: (id: number) => void;
  updateQuest: (quest: QuestProps) => void;
  openQuest: (id: number) => void;
  cancelQuest: (id: number) => void;
  removeQuest: (id: number) => void;
};
