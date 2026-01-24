import { Button, RenderIf, Text } from "../../components/GenericComponents";
import { RitualTipsModal } from "../../components/Modal/variants/RitualTipsModal/RitualTipsModal.component";
import { RitualCard } from "../../components/Ritual";
import { RitualConfig } from "../../components/Ritual";
import { RitualTips } from "../../components/Ritual";
import useIsMobile from "../../hooks/useIsMobile/useIsMobile";
import { useModalStore } from "../../store/modal/modal.store";
import "./Rituals.style.css";
import { useRitualsStore } from "../../store/rituals/rituals.store";

export function Rituals() {
  const isMobile = useIsMobile();
  const openModal = useModalStore((s) => s.openModal);
  const rituals = useRitualsStore((s) => s.rituals);
  const totalRitualsCompleted = useRitualsStore((s) => s.totalRitualsCompleted);

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
          {rituals.map((ritual) => (
            <RitualCard key={ritual.id} ritual={ritual} />
          ))}
          <Text size="sm">Rituais concluídos: {totalRitualsCompleted}</Text>
          <RitualConfig />
        </div>
        <RenderIf condition={isMobile}>
          <div>
            <Button onClick={openInformationModal} size="sm" variant="outlined">
              Como funciona?
            </Button>
          </div>
        </RenderIf>
        <RenderIf condition={!isMobile}>
          <RitualTips />
        </RenderIf>
      </div>
    </div>
  );
}
