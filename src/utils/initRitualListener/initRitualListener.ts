import { useRitualsStore } from "../../store/rituals/rituals.store";
import { toast } from "sonner";
// import { playRitualFinishedSound } from "../sounds/ritualSounds";

let ritualInterval: number | null = null;

export function initRitualListener() {
  if (ritualInterval) return;

  ritualInterval = window.setInterval(() => {
    const store = useRitualsStore.getState();

    const previousPhase = store.phase;

    if (previousPhase === "idle") return;

    store.checkRitualTransitions();

    const { phase } = useRitualsStore.getState();

    if (previousPhase === "started" && phase === "finished") {
      // import { playRitualFinishedSound } from "../sounds/ritualSounds";

      toast("Rituais concluídos", {
        description: "Você completou seus rituais ativos.",
      });
    }
  }, 1000);
}
