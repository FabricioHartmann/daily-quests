import { Button, RenderIf } from "../../Generic";
import { useExpeditionStore } from "../../../store/expedition/expedition.store";
import { CentralHUD } from "../CentralHUD/CentralHUD.component";
import "./ExpeditionCard.styles.css";
import { ExpeditionLabels } from "../ExpeditionLabels/ExpeditionLabels.component";
import { useProfileStore } from "../../../store/profile/profile.store";
import { generateExpeditionExp } from "../../../domain/expedition/expeditionExp";
import { toast } from "sonner";
import useIsMobile from "../../../hooks/useIsMobile/useIsMobile";
import { getBackgroundImage } from "../../../utils/expeditionImage";

export function ExpeditionCard() {
  const isMobile = useIsMobile(568);
  const { phase, biome, dayTime, startJourney, finishExpedition } =
    useExpeditionStore();
  const { level } = useProfileStore((s) => s.profile);
  const addExp = useProfileStore((s) => s.addExp);
  const { expGained, maxExp, minExp } = generateExpeditionExp(level);

  const claimReward = () => {
    addExp(expGained);
    finishExpedition();
    toast("Recompensa resgatada!", {
      description: `Adquiriu ${expGained} XP`,
    });
  };

  return (
    <div className="expedition-card">
      <img
        src={getBackgroundImage(biome, phase, dayTime)}
        className="expedition-bg"
      />
      <div className="expedition-hud">
        <ExpeditionLabels minExp={minExp} maxExp={maxExp} />
        <CentralHUD />
        <div className="expedition-card-footer">
          <RenderIf condition={phase === "idle"}>
            <Button
              onClick={startJourney}
              variant="primary"
              fullWidth={isMobile}
            >
              Iniciar expedição
            </Button>
          </RenderIf>
          <RenderIf condition={phase !== "idle"}>
            <Button
              onClick={claimReward}
              variant="primary"
              fullWidth={isMobile}
              disabled={phase !== "finished"}
            >
              Resgatar recompensa
            </Button>
          </RenderIf>
        </div>
      </div>
    </div>
  );
}
