import { Button, RenderIf } from "../../Generic";
import { useExpeditionStore } from "../../../store/expedition/expedition.store";
import { getBackgroundImage } from "../../../pages/Expedition/Expedition.helper";
import { CentralHUD } from "../CentralHUD/CentralHUD.component";
import "./ExpeditionCard.styles.css";
import { ExpeditionLabels } from "../ExpeditionLabels/ExpeditionLabels.component";

export function ExpeditionCard() {
  const { phase, dayTime, startJourney, stopExpedition } = useExpeditionStore();

  const background = getBackgroundImage(phase, dayTime);

  return (
    <div className="expedition-card">
      <img src={background} className="expedition-bg" />
      <div className="expedition-hud">
        <ExpeditionLabels />
        <CentralHUD />
        <RenderIf condition={phase === "idle"}>
          <Button onClick={startJourney} variant="primary" fullWidth>
            Iniciar expedição
          </Button>
        </RenderIf>
        <RenderIf condition={phase === "journey" || phase === "campfire"}>
          <Button onClick={stopExpedition} variant="danger" fullWidth>
            Cancelar expedição
          </Button>
        </RenderIf>
        <RenderIf condition={phase === "finished"}>
          <Button onClick={startJourney} variant="primary" fullWidth>
            Resgatar recompensa
          </Button>
        </RenderIf>
      </div>
    </div>
  );
}
