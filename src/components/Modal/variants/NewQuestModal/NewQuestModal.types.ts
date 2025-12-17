export type NewQuestModalProps = {
  questType: "daily" | "weekly";
};

export type NewQuestInputs = {
  title: string;
  description: string;
  points: number;
  category: "Estudo" | "Saúde" | "Casa" | "Trabalho" | "Outro";
};
