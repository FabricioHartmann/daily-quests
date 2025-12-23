import { useProfileStore } from "../../store/profile/profile.store";
import { useInventoryStore } from "../../store/inventory/inventory.store";
import { useQuestStore } from "../../store/quests/quests.store";
import { toast } from "sonner";

export const rewardRules = [
  {
    id: "1-quest-completed",
    condition: () =>
      useQuestStore
        .getState()
        .quests.filter((quest) => quest.status === "completed").length === 1,
    effect: () => {
      useProfileStore.getState().unlockTitle("iniciante");
      toast("Completou sua primeira quest!", {
        description: "Novo título desbloqueado: 'Iniciante'",
      });
    },
  },
  {
    id: "level2-item-reward",
    condition: () => useProfileStore.getState().profile.level === 2,
    effect: () => {
      useInventoryStore.getState().addItem("initial-iron-sword");
      useInventoryStore.getState().addItem("initial-light-armor");
      setTimeout(() => {
        toast("Novos itens recebidos!", {
          description: "Verifique o inventário no seu Perfil",
        });
      }, 500);
    },
  },
  {
    id: "level3-item-reward",
    condition: () => useProfileStore.getState().profile.level === 3,
    effect: () => {
      useInventoryStore.getState().addItem("initial-ring");
      setTimeout(() => {
        toast.success("Novo item recebido!", {
          description: "Verifique o inventário no seu Perfil",
        });
      }, 500);
    },
  },
  {
    id: "level5-achievement-reward",
    condition: () => useProfileStore.getState().profile.level >= 3,
    effect: () => {
      setTimeout(() => {
        toast.success("Nova conquista desbloqueada!", {
          description: "'High Five'",
        });
      }, 500);
    },
  },
];
