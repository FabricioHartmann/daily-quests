import { toast } from "sonner";
import { useExpeditionStore } from "../../store/expedition/expedition.store";
import {
  playExpeditionCampfireSound,
  playExpeditionFinishedSound,
} from "../soundPlayer/soundPlayer";

let listenerInitialized = false;

export const initExpeditionListener = () => {
  if (listenerInitialized) return;
  listenerInitialized = true;

  let previousPhase = useExpeditionStore.getState().phase;

  useExpeditionStore.subscribe((state) => {
    const { phase } = state;

    if (previousPhase === "journey" && phase === "campfire") {
      playExpeditionCampfireSound();
      toast("Expedição atualizada", {
        description: "Hora de descansar"
      });
    }
    if (previousPhase === "campfire" && phase === "finished") {
      playExpeditionFinishedSound();
      toast("Expedição encerrada", {
        description: "Resgate sua recompensa."
      });
    }

    previousPhase = phase;
  });
};
