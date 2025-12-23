export type RewardStore = {
  claimed: string[];
  claimReward: (id: string) => void;
  isClaimed: (id: string) => boolean;
};
