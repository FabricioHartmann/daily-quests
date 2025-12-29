import type { Phase } from "../../../store/expedition/expedition.types";

export type CircularProgressProps = {
  value: number;
  phase: Phase;
  size?: number;
  strokeWidth?: number;
};
