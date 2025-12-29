import { Button } from "../../Generic";
import { useExpeditionStore } from "../../../store/expedition/expedition.store";
import { getBackgroundImage } from "../../../pages/Expedition/Expedition.helper";
import { CentralHUD } from "../CentralHUD/CentralHUD.component";
import "./ExpeditionCard.styles.css";
import { ExpeditionLabels } from "../ExpeditionLabels/ExpeditionLabels.component";

export function ExpeditionCard() {
  const { phase, dayTime, startJourney, stopExpedition } =
    useExpeditionStore();

  const background = getBackgroundImage(phase, dayTime);

  return (
    <div className="expedition-card">
      <img src={background} className="expedition-bg" />
      <div className="expedition-hud">
        <ExpeditionLabels />
        <CentralHUD />
        <div>
          {phase === "idle" ? (
            <Button onClick={startJourney} variant="primary" fullWidth>
              Iniciar expedição
            </Button>
          ) : (
            <Button onClick={stopExpedition} variant="danger" fullWidth>
              Cancelar expedição
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
