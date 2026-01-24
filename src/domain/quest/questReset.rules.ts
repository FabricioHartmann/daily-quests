import type { Quest } from "../../store/quests/quests.types";
import { isNewDay } from "../../utils/date/isNewDay";
import { isNewWeek } from "../../utils/date/isNewWeek";

export const applyQuestResets = (
  quests: Quest[],
): { updated: Quest[]; hasChanges: boolean } => {
  let hasChanges = false;

  const updated: Quest[] = quests.map((quest) => {
    if (quest.type === "daily" && isNewDay(quest.completedAt)) {
      if (quest.status !== "open") {
        hasChanges = true;
        return { ...quest, status: "open" };
      }
    }

    if (quest.type === "weekly" && isNewWeek(quest.completedAt)) {
      if (quest.status !== "open") {
        hasChanges = true;
        return { ...quest, status: "open" };
      }
    }

    return quest;
  });
  return { updated, hasChanges };
};
