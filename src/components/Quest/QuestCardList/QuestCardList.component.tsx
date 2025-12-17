import { FloatingPoints, NewQuestCard, QuestCard } from "../../Quest";
import { Flex, RenderIf, Text } from "../../Generic";
import type { QuestCardListProps } from "./QuestCardList.types";
import "./QuestCardList.styles.css";
import { useState } from "react";
import type { QuestTogglePayload } from "../QuestCard/QuestCard.types";
import { useNavigate } from "react-router-dom";

export function QuestCardList({
  questType,
  quests,
  editingMode = false,
}: QuestCardListProps) {
  const navigate = useNavigate();
  const [floatingEffect, setFloatingEffect] =
    useState<QuestTogglePayload | null>(null);

  const handleToggleQuest = (payload: {
    points: number;
    variant: "gain" | "loss";
  }) => {
    setFloatingEffect(payload);
    setTimeout(() => setFloatingEffect(null), 1000);
  };

  const goToQuestsPage = () => {
    navigate("/quests");
  };

  return (
    <div className="list-wrapper">
      <Text size="lg">{questType === "daily" ? "Diárias" : "Semanais"}</Text>
      <div className={`quest-board list-bg-color`}>
        <div className="effects-layer">
          {floatingEffect !== null && (
            <FloatingPoints
              points={floatingEffect.points}
              variant={floatingEffect.variant}
            />
          )}
        </div>
        <div className="list">
          <RenderIf condition={editingMode}>
            <NewQuestCard />
          </RenderIf>
          {quests?.map((quest) => (
            <QuestCard
              key={quest.title}
              quest={quest}
              editingMode={editingMode}
              onToggleQuest={handleToggleQuest}
            />
          ))}
          <RenderIf condition={!quests?.length && !editingMode}>
            <Flex
              direction="column"
              align="center"
              justify="center"
              height="100%"
              padding="16px"
            >
              <Text align="center" color="#c4c1c1ff" size="lg">
                {`Você completou todas as quests ${
                  questType === "daily" ? "do dia" : "da semana"
                }`}
              </Text>
            </Flex>
          </RenderIf>
        </div>
      </div>
    </div>
  );
}
