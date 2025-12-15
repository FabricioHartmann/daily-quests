import { useQuestStore } from "../../../store/quests/quests.store";
import { FloatingPoints, QuestCard } from "../../Quest";
import { Text } from "../../Generic";
import type { QuestCardListProps } from "./QuestCardList.types";
import "./QuestCardList.styles.css";
import { useState } from "react";
import type { QuestTogglePayload } from "../QuestCard/QuestCard.types";

export function QuestCardList({ questType }: QuestCardListProps) {
  const { quests } = useQuestStore();
  const [floatingEffect, setFloatingEffect] =
    useState<QuestTogglePayload | null>(null);

  const handleToggleQuest = (payload: {
    points: number;
    variant: "gain" | "loss";
  }) => {
    setFloatingEffect(payload);
    setTimeout(() => setFloatingEffect(null), 1000);
  };

  return (
    <div className="list-wrapper">
      <Text size="lg">{questType === "daily" ? "Diárias" : "Semanais"}</Text>
      <div className={`quest-board ${questType}-bg-color`}>
        <div className="effects-layer">
          {floatingEffect !== null && (
            <FloatingPoints
              points={floatingEffect.points}
              variant={floatingEffect.variant}
            />
          )}
        </div>
        <div className="list">
          {quests
            ?.filter((quest) => quest.type === questType)
            .map((quest) => (
              <QuestCard
                key={quest.title}
                quest={quest}
                onToggleQuest={handleToggleQuest}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
