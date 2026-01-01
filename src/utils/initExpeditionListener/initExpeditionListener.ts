import { toast } from "sonner";
import { useExpeditionStore } from "../../store/expedition/expedition.store";
import {
  playExpeditionCampfireSound,
  playExpeditionFinishedSound,
} from "../sounds/soundPlayer";

let listenerInitialized = false;

export const initExpeditionListener = () => {
  if (listenerInitialized) return;
  listenerInitialized = true;

  let previousPhase = useExpeditionStore.getState().phase;

  useExpeditionStore.subscribe((state) => {
    const { phase } = state;

    if (previousPhase === "journey" && phase === "campfire") {
      playExpeditionCampfireSound();
      toast("Expedição", {
        description: "Jornada encerrada, hora de descansar"
      });
    }
    if (previousPhase === "campfire" && phase === "finished") {
      playExpeditionFinishedSound();
      toast("Expedição", {
        description: "Descanso encerrado, resgate seu prêmio."
      });
    }

    previousPhase = phase;
  });
};
