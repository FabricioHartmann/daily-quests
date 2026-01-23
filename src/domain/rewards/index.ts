import { levelRewardRules } from "./rules/levelRewardRules";
import { questRewardRules } from "./rules/questRewardRules";
import { expeditionRewardRules } from "./rules/expeditionRewardRules";
import { ritualRewardRules } from "./rules/ritualRewardRules";
import { genericRewardRules } from "./rules/genericRewardRules";

export const rewardRules = [
  ...levelRewardRules,
  ...questRewardRules,
  ...expeditionRewardRules,
  ...ritualRewardRules,
  ...genericRewardRules,
];
