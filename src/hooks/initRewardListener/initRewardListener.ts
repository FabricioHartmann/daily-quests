import { useProfileStore } from "../../store/profile/profile.store";
import { rewardRules } from "./rewardRules";

let listenerInitialized = false;

export const initRewardListener = () => {
  if (listenerInitialized) return;
  listenerInitialized = true;

  const triggeredRules = new Set<string>();
  // TODO: testar subscribeWithSelector para melhorar a perfomance
  useProfileStore.subscribe(() => {
    rewardRules.forEach((rule) => {
      if (!triggeredRules.has(rule.id) && rule.condition()) {
        triggeredRules.add(rule.id);
        rule.effect();
      }
    });
  });
};
