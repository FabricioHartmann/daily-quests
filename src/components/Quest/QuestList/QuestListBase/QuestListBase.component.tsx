import { useState } from "react";
import type { QuestProps } from "../../../../store/quests/quests.types";
import { Text, Flex, RenderIf } from "../../../Generic";
import { FloatingPoints } from "../../FloatingPoints/FloatingPoints.component";
import { NewQuestCard } from "../../NewQuestCard/NewQuestCard.component";
import { QuestCard } from "../../QuestCard/QuestCard.component";
import type { QuestTogglePayload } from "../../QuestCard/QuestCard.types";
import "../QuestList.styles.css";

type QuestListBaseProps = {
  quests: QuestProps[];
  questType: "daily" | "weekly";
  editingMode?: boolean;
  title?: string;
};

export function QuestListBase({
  quests,
  questType,
  editingMode = false,
  title,
}: QuestListBaseProps) {
  const [floatingEffect, setFloatingEffect] =
    useState<QuestTogglePayload | null>(null);

  const handleToggleQuest = (payload: QuestTogglePayload) => {
    setFloatingEffect(payload);
    setTimeout(() => setFloatingEffect(null), 1000);
  };

  return (
    <div className="list-wrapper">
      <RenderIf condition={!!title}>
        <div className="list-title">
          <Text size="lg">{title}</Text>
        </div>
      </RenderIf>

      <div className="quest-board list-bg-color">
        <div className="effects-layer">
          {floatingEffect && <FloatingPoints {...floatingEffect} />}
        </div>

        <div className="list">
          <RenderIf condition={editingMode}>
            <NewQuestCard questType={questType} />
          </RenderIf>

          {quests.map((quest) => (
            <QuestCard
              key={quest.title}
              quest={quest}
              editingMode={editingMode}
              onToggleQuest={handleToggleQuest}
            />
          ))}

          {!quests.length && !editingMode && (
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
          )}
        </div>
      </div>
    </div>
  );
}
