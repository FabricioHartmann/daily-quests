import { useAchievementStore } from "../../store/achievements/achievements.store";
import { ACHIEVEMENTS_CATALOG } from "../../data/achievementsCatalog";
import type { AchievementId } from "../../store/achievements/achievements.types";
import type { TitleId } from "../../store/profile/profile.types";
import { TITLES_CATALOG } from "../../data/titlesCatalog";
import { toast } from "sonner";
import { useInventoryStore } from "../../store/inventory/inventory.store";
import { useProfileStore } from "../../store/profile/profile.store";

export const unlockAchievement = (id: AchievementId) => {
  const achievementStore = useAchievementStore.getState();
  if (achievementStore.isUnlocked(id)) return;
  achievementStore.unlockAchievement(id);

  let achievementText = ``;

  const achievement = ACHIEVEMENTS_CATALOG.find((a) => a.id === id);
  if (achievement?.reward?.type === "item") {
    useInventoryStore.getState().addItem(achievement?.reward?.id);
    achievementText = 'Novo item adquirido';
  }
  if (achievement?.reward?.type === "title") {
    useProfileStore.getState().unlockTitle(achievement?.reward?.id);
    achievementText = 'Novo título adquirido';
  }
  toast(`Conquista: ${achievement?.label}`, {
    description: achievementText || 'Nova conquista desbloqueada',
  });
};

export const unlockTitle = (id: TitleId) => {
  useProfileStore.getState().unlockTitle(id);
  let title = TITLES_CATALOG[id];

  toast("Novo título desbloqueado", {
    description: title.label,
  });
};
