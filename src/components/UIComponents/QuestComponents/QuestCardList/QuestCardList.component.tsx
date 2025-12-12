import { useQuestStore } from "../../../../store/quests/quests.store";
import { QuestCard, Text } from "../..";
import type { QuestCardListProps } from "./QuestCardList.types";
import "./QuestCardList.styles.css";

export function QuestCardList({ questType }: QuestCardListProps) {
  const { quests } = useQuestStore();

  return (
    <>
      <div>
        <Text size="lg">{questType === "daily" ? "Diárias" : "Semanais"}</Text>
        <div className={`quest-list ${questType}-bg-color`}>
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
