import { Button } from "../../Generic";
import { useExpeditionStore } from "../../../store/expedition/expedition.store";
import { getBackgroundImage } from "../../../pages/Expedition/Expedition.helper";
import { CentralHud } from "../CentralHud/CentralHud.component";
import "./ExpeditionCard.styles.css";
import { ExpeditionLabels } from "../ExpeditionLabels/ExpeditionLabels.component";

export function ExpeditionCard() {
  const { phase, dayTime, weather, timeLeft, expeditionStage } =
    useExpeditionStore();

  const background = getBackgroundImage(phase, dayTime);

  return (
    <div className="expedition-card">
      <img src={background} className="expedition-bg" />
      <div className="expedition-hud">
        <ExpeditionLabels />
        <CentralHud />
        <div>
          <Button variant="primary" fullWidth>
            Iniciar expedição
          </Button>
        </div>
      </div>
    </div>
  );
}
