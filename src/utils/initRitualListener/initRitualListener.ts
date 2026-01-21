import { useRitualsStore } from "../../store/rituals/rituals.store";
import { toast } from "sonner";
import { playRitualSound } from "../soundPlayer";

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
      playRitualSound()
      toast("Lembrete de ritual", {
        description: "Conclua o ritual e resgate a XP",
      });
    }
  }, 1000);
}
