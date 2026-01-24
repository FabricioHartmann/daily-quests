import type { Quest } from "../../store/quests/quests.types";
import { normalizeQuestDates } from "./questNormalize";
import { applyQuestResets } from "./questReset.rules";

export const normalizeAndResetQuests = (quests: Quest[]) => {
  const normalized = normalizeQuestDates(quests);
  return applyQuestResets(normalized);
};
