import { useAchievementStore } from "../../store/achievements/achievements.store";
import { ACHIEVEMENTS_CATALOG } from "../../data/achievementsCatalog";
import type { AchievementId } from "../../store/achievements/achievements.types";
import type { ItemId } from "../../store/inventory/inventory.types";
import type { TitleId } from "../../store/profile/profile.types";
import { TITLES_CATALOG } from "../../data/titlesCatalog";
import { toast } from "sonner";
import { useInventoryStore } from "../../store/inventory/inventory.store";
import { useProfileStore } from "../../store/profile/profile.store";

export const unlockAchievement = (id: AchievementId) => {
  const achievementStore = useAchievementStore.getState();
  if (achievementStore.isUnlocked(id)) return;

  achievementStore.unlockAchievement(id);
  const achievement = ACHIEVEMENTS_CATALOG.find((a) => a.id === id);
  toast("Conquista desbloqueada!", {
    description: achievement?.label,
  });

  if (achievement?.reward?.type === "item") {
    useInventoryStore.getState().addItem(achievement?.reward?.id);
  }
  if (achievement?.reward?.type === "title") {
    useProfileStore.getState().unlockTitle(achievement?.reward?.id);
  }
};

export const unlockItems = (ids: ItemId[]) => {
  ids.map((id) => useInventoryStore.getState().addItem(id));
  toast(
    `${
      ids.length > 1 ? "Novos itens desbloqueados" : "Novo item desbloqueado"
    }`,
    {
      description: "Verifique o inventário no seu Perfil",
    }
  );
};

export const unlockTitle = (id: TitleId) => {
  useProfileStore.getState().unlockTitle(id);
  let title = TITLES_CATALOG[id];

  toast("Novo título desbloqueado", {
    description: title.label,
  });
};
