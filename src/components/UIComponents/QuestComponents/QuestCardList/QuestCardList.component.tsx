import { useQuestStore } from "../../../../store/quests/quests.store";
import { QuestCard, Text } from "../..";
import type { QuestCardListProps } from "./QuestCardList.types";
import "./QuestCardList.styles.css";
import useIsMobile from "../../../../hooks/useIsMobile/useIsMobile";

export function QuestCardList({ questType }: QuestCardListProps) {
  const { quests } = useQuestStore();
  const isMobile = useIsMobile();

  return (
    <>
      <div>
        <Text size="lg">{questType === "daily" ? "Diárias" : "Semanais"}</Text>
        <div className="quest-list">
          {quests
            ?.filter((quest) => quest.type === questType)
            .map((quest) => (
              <QuestCard key={quest.title} quest={quest} />
            ))}
        </div>
      </div>
    </>
  );
}
