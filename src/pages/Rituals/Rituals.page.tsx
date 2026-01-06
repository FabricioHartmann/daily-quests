import { Button, RenderIf, Text } from "../../components/Generic";
import { RitualTipsModal } from "../../components/Modal/variants/RitualTipsModal/RitualTipsModal.component";
import { RitualCard } from "../../components/Ritual/RitualCard/RitualCard.component";
import { RitualTips } from "../../components/Ritual/RitualTips/RitualTips.component";
import useIsMobile from "../../hooks/useIsMobile/useIsMobile";
import { useModalStore } from "../../store/modal/modal.store";
import { MOCKED_RITUALS } from "../../store/rituals/constants";
import "./Rituals.style.css";

export function Rituals() {
  const isMobile = useIsMobile();
  const { openModal } = useModalStore();

  const openInformationModal = () => {
    openModal(<RitualTipsModal />);
  };

  return (
    <div className="rituals-page">
      <div className="rituals-page-header">
        <Text size="lg">Rituais</Text>
      </div>
      <div className="ritual-page-content">
        <div className="ritual-cards-wrapper">
          {MOCKED_RITUALS.map((ritual) => (
            <RitualCard key={ritual.id} ritual={ritual} />
          ))}
        </div>
        <RenderIf condition={isMobile}>
          <Button onClick={openInformationModal} size="sm" variant="outlined">
            Como funciona?
          </Button>
        </RenderIf>
        <RenderIf condition={!isMobile}>
          <RitualTips />
        </RenderIf>
      </div>
    </div>
  );
}
