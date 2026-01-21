import { toast } from "sonner";
import { useExpeditionStore } from "../../store/expedition/expedition.store";
import {
  playExpeditionCampfireSound,
  playExpeditionFinishedSound,
} from "../soundPlayer";

let expeditionInterval: number | null = null;

export function initExpeditionListener() {
  if (expeditionInterval) return;

  expeditionInterval = window.setInterval(() => {
    const store = useExpeditionStore.getState();
    const previousPhase = store.phase;
    store.checkPhaseTransition();

    const { phase } = useExpeditionStore.getState();
    if (previousPhase === "idle" && phase === "journey") {
      playExpeditionCampfireSound();
    }

    if (previousPhase === "journey" && phase === "campfire") {
      playExpeditionCampfireSound();
      toast("Expedição atualizada", {
        description: "Hora de descansar",
      });
    }

    if (previousPhase === "campfire" && phase === "finished") {
      playExpeditionFinishedSound();
      toast("Expedição encerrada", {
        description: "Resgate sua recompensa.",
      });
    }
  }, 1000);
}
