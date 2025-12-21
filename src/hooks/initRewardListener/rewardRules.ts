import { useProfileStore } from "../../store/profile/profile.store";
import { useInventoryStore } from "../../store/inventory/inventory.store";

export const rewardRules = [
  {
    id: "level2-item-reward",
    condition: () => useProfileStore.getState().profile.level >= 2,
    effect: () => {
      useInventoryStore.getState().addItem("initial-iron-sword");
      useInventoryStore.getState().addItem("initial-light-armor");
      useInventoryStore.getState().addItem("initial-ring");
    },
  },
  {
    id: "level3-title-reward",
    condition: () => useProfileStore.getState().profile.level >= 3,
    effect: () => {
      useProfileStore.getState().unlockTitle("iniciante");
    },
  },
];
