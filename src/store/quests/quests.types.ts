type QuestProps = {
  title: string;
  description: string;
  status: "open" | "completed" | "canceled";
  points: number
  category: "Estudo" | 'Saúde' | "Casa" | "Trabalho"
  createdAt: string
};

export type QuestState = {
  quests: QuestProps[];
  addQuest: (quest: QuestProps) => void;
  completeQuest: (title: string) => void;
  cancelQuest: (title: string) => void;
  removeQuest: (title: string) => void;
}