import { Button, RenderIf } from "../../Generic";
import { useExpeditionStore } from "../../../store/expedition/expedition.store";
import { getBackgroundImage } from "../../../pages/Expedition/getBackgroundImage";
import { CentralHUD } from "../CentralHUD/CentralHUD.component";
import "./ExpeditionCard.styles.css";
import { ExpeditionLabels } from "../ExpeditionLabels/ExpeditionLabels.component";
import { useProfileStore } from "../../../store/profile/profile.store";
import { generateExpeditionExp } from "../../../domain/expedition/expeditionExp";
import { toast } from "sonner";

export function ExpeditionCard() {
  const { phase, dayTime, startJourney, cancelExpedition, finishExpedition } =
    useExpeditionStore();
  const { level } = useProfileStore((s) => s.profile);
  const addExp = useProfileStore((s) => s.addExp);

  const { expGained, maxExp, minExp } = generateExpeditionExp(level);

  const background = getBackgroundImage(phase, dayTime);

  const claimReward = () => {
    addExp(expGained);
    finishExpedition();
    toast("Recompensa resgatada!", {
      description: `Adquiriu ${expGained} XP`,
    });
  };

  return (
    <div className="expedition-card">
      <img src={background} className="expedition-bg" />
      <div className="expedition-hud">
        <ExpeditionLabels minExp={minExp} maxExp={maxExp} />
        <CentralHUD />
        <RenderIf condition={phase === "idle"}>
          <Button onClick={startJourney} variant="primary" fullWidth>
            Iniciar expedição
          </Button>
        </RenderIf>
        <RenderIf condition={phase === "journey" || phase === "campfire"}>
          <Button onClick={cancelExpedition} variant="danger" fullWidth>
            Cancelar expedição
          </Button>
        </RenderIf>
        <RenderIf condition={phase === "finished"}>
          <Button onClick={claimReward} variant="success" fullWidth>
            Resgatar recompensa
          </Button>
        </RenderIf>
      </div>
    </div>
  );
}
