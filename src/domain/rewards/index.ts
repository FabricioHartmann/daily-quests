import { levelRewardRules } from "./rules/levelRewardRules";
import { questRewardRules } from "./rules/questRewardRules";
import { expeditionRewardRules } from "./rules/expeditionRewardRules";
import { ritualRewardRules } from "./rules/ritualRewardRules";

export const rewardRules = [
  ...levelRewardRules,
  ...questRewardRules,
  ...expeditionRewardRules,
  ...ritualRewardRules,
];
