import { useProfileStore } from "../../store/profile/profile.store";
import { useRewardStore } from "../../store/rewards/rewards.store";
import { useQuestStore } from "../../store/quests/quests.store";
import { useExpeditionStore } from "../../store/expedition/expedition.store";
import { useRitualsStore } from "../../store/rituals/rituals.store";
import { useInventoryStore } from "../../store/inventory/inventory.store";
import { rewardRules } from "../../domain/rewards";

let listenerInitialized = false;

function evaluateRewards() {
  const rewardStore = useRewardStore.getState();

  rewardRules.forEach((rule) => {
    if (!rewardStore.isClaimed(rule.id) && rule.condition()) {
      rewardStore.claimReward(rule.id);
      rule.effect();
    }
  });
}

export const initRewardListener = () => {
  if (listenerInitialized) return;
  listenerInitialized = true;

  useProfileStore.subscribe(evaluateRewards);
  useQuestStore.subscribe(evaluateRewards);
  useExpeditionStore.subscribe(evaluateRewards);
  useRitualsStore.subscribe(evaluateRewards);
  useInventoryStore.subscribe(evaluateRewards);
};
