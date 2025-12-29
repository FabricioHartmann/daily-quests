import { useEffect, useState } from "react";
import { PHASE_TOTAL_TIME } from "../../store/expedition/constants";
import { useExpeditionStore } from "../../store/expedition/expedition.store";

export function useExpeditionTimer() {
  const phase = useExpeditionStore((s) => s.phase);
  const endsAt = useExpeditionStore((s) => s.endsAt);
  const checkPhaseTransition = useExpeditionStore((s) => s.checkPhaseTransition);

  const [, forceRender] = useState(0);

  const now = Date.now();

  const totalTime = PHASE_TOTAL_TIME[phase] ?? 0;

  const timeLeft =
    endsAt && totalTime > 0
      ? Math.max(0, Math.ceil((endsAt - now) / 1000))
      : 0;

  const progress =
    totalTime > 0
      ? Math.min(100, ((totalTime - timeLeft) / totalTime) * 100)
      : 0;

  useEffect(() => {
    if (!endsAt || phase === "idle") return;

    const id = setInterval(() => {
      checkPhaseTransition();
      forceRender((n) => n + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [endsAt, phase]);

  return {
    phase,
    timeLeft,
    progress,
  };
}
