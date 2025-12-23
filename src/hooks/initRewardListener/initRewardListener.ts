import { useProfileStore } from "../../store/profile/profile.store";
import { useRewardStore } from "../../store/rewards/rewards.store";
import { rewardRules } from "./rewardRules";

let listenerInitialized = false;

export const initRewardListener = () => {
  if (listenerInitialized) return;
  listenerInitialized = true;

  useProfileStore.subscribe(() => {
    const rewardStore = useRewardStore.getState();

    rewardRules.forEach((rule) => {
      if (!rewardStore.isClaimed(rule.id) && rule.condition()) {
        rewardStore.claimReward(rule.id);
        rule.effect();
      }
    });
  });
};
