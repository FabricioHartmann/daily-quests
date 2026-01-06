import { useExpeditionStore } from "../../../store/expedition/expedition.store";
import { formatTime } from "../../../utils/formatTime";
import { Button, RenderIf, Text } from "../../Generic";
import { CircularProgress } from "../index";
import "./CentralHUD.styles.css";
import { phaseLabel } from "../../../store/expedition/constants";
import { useExpeditionTimer } from "../../../hooks/useExpeditionTimer/useExpeditionTimer";
import { GiInfo, GiLockedChest } from "react-icons/gi";
import useIsMobile from "../../../hooks/useIsMobile/useIsMobile";
import { useModalStore } from "../../../store/modal/modal.store";
import { ExpeditionInformationModal } from "../../Modal/variants/ExpeditionInformationModal/ExpeditionInformationModal.component";

export function CentralHUD() {
  const { timeLeft, progress } = useExpeditionTimer();
  const isMobile = useIsMobile();
  const phase = useExpeditionStore((s) => s.phase);
  const { openModal } = useModalStore();

  const openInformationModal = () => {
    openModal(<ExpeditionInformationModal />);
  };

  return (
    <div className="expedition-hud-card">
      <div className="expedition-hud-title">
        <Text>{phaseLabel[phase]}</Text>
      </div>

      <div className="expedition-hud-timer">
        {phase === "finished" ? (
          <GiLockedChest size={80} color="var(--white)" />
        ) : (
          <div className="expedition-circular">
            <CircularProgress phase={phase} value={progress} />
            <div className="expedition-circular-label">
              <Text>{formatTime(timeLeft)}</Text>
            </div>
          </div>
        )}
      </div>
      <Text size="sm">Recompensas disponíveis: ∞</Text>
      <RenderIf condition={isMobile}>
        <Button
          onClick={openInformationModal}
          size="sm"
          variant="outlined"
          fullWidth
        >
          Como funciona?
        </Button>
      </RenderIf>
    </div>
  );
}
