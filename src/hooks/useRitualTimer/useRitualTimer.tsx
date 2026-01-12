import { useEffect, useState } from "react";
import { useRitualsStore } from "../../store/rituals/rituals.store";

export function useRitualTimer() {
  const phase = useRitualsStore((s) => s.phase);
  const endsAt = useRitualsStore((s) => s.endsAt);
  const cooldownInMinutes = useRitualsStore((s) => s.cooldownInMinutes);
  const [, forceRender] = useState(0);

  useEffect(() => {
    if (phase === "idle") return;

    const id = setInterval(() => {
      forceRender((n) => n + 1);
    }, 1000);

    return () => clearInterval(id);
  }, [phase]);

  const minutes = cooldownInMinutes;
  const totalTime = minutes * 60;

  const now = Date.now();
  const timeLeft =
    endsAt && totalTime > 0 ? Math.max(0, Math.ceil((endsAt - now) / 1000)) : 0;

  const progress =
    totalTime > 0
      ? Math.min(100, ((totalTime - timeLeft) / totalTime) * 100)
      : 0;

  return {
    phase,
    timeLeft,
    progress,
    totalMinutes: minutes,
  };
}
