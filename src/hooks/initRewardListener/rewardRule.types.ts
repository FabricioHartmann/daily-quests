export type RewardRule = {
  id: string;
  condition: () => boolean;
  effect: () => void;
}
