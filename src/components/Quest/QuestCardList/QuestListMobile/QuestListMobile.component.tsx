import { FloatingPoints, NewQuestCard, QuestCard } from "../..";
import { Flex, RenderIf, Text } from "../../../Generic";
import "../QuestCardList.styles.css";
import { useState } from "react";
import type { QuestTogglePayload } from "../../QuestCard/QuestCard.types";
import { Tabs } from "../../../Generic/Tabs";
import { QUEST_TABS } from "../constants";
import type { QuestListMobileProps } from "../QuestListTypes";

export function QuestListMobile({
  quests,
  editingMode = false,
}: QuestListMobileProps) {
  const [selectedQuestType, setSelectedQuestType] = useState<
    "daily" | "weekly"
  >("daily");
  const [floatingEffect, setFloatingEffect] =
    useState<QuestTogglePayload | null>(null);

  const filteredQuests = quests?.filter(
    (quest) => quest.type === selectedQuestType && quest.status === "open"
  );

  const handleToggleQuest = (payload: {
    points: number;
    variant: "gain" | "loss";
  }) => {
    setFloatingEffect(payload);
    setTimeout(() => setFloatingEffect(null), 1000);
  };

  return (
    <div className="list-wrapper">
      <Tabs
        options={QUEST_TABS}
        value={selectedQuestType}
        onChange={(value) => setSelectedQuestType(value)}
        activeColor="var(--list-bg-color)"
      />
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
            <NewQuestCard questType={selectedQuestType} />
          </RenderIf>
          {filteredQuests?.map((quest) => (
            <QuestCard
              key={quest.title}
              quest={quest}
              editingMode={editingMode}
              onToggleQuest={handleToggleQuest}
            />
          ))}
          <RenderIf condition={!filteredQuests?.length && !editingMode}>
            <Flex
              direction="column"
              align="center"
              justify="center"
              height="100%"
              padding="16px"
            >
              <Text align="center" color="#c4c1c1ff" size="lg">
                {`Você completou todas as quests ${
                  selectedQuestType === "daily" ? "do dia" : "da semana"
                }`}
              </Text>
            </Flex>
          </RenderIf>
        </div>
      </div>
    </div>
  );
}
