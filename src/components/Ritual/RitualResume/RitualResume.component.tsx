import { useNavigate } from "react-router-dom";
import { useRitualTimer } from "../../../hooks/useRitualTimer/useRitualTimer";
import { useRitualsStore } from "../../../store/rituals/rituals.store";
import { Text } from "../../GenericComponents";
import { formatTime } from "../../../utils/formatTime";
import { GiSpellBook } from "react-icons/gi";
import "./RitualResume.styles.css";
import useIsMobile from "../../../hooks/useIsMobile/useIsMobile";
import { RITUAL_ICONS } from "../../../store/rituals/ritualIconsMapper";
import type { Ritual } from "../../../store/rituals/rituals.types";

export function RitualResume() {
  const isMobile = useIsMobile();
  const { timeLeft } = useRitualTimer();
  const navigate = useNavigate();
  const phase = useRitualsStore((store) => store.phase);
  const rituals = useRitualsStore((store) => store.rituals);

  const activeRituals = rituals.filter((ritual) => ritual.isActive);

  const goToRitualsPage = () => {
    navigate("/rituais");
  };

  const getRitualIcon = (activeRituals: Ritual[], size: number) => {
    if (activeRituals.length === 2)
      return <GiSpellBook size={size} color="white" />;

    if (activeRituals.length === 1) {
      const Icon = RITUAL_ICONS[activeRituals[0].icon];
      return <Icon size={size} color="white" />;
    }

    return null;
  };

  return (
    <div onClick={goToRitualsPage} className={`ritual-resume-item ${phase}`}>
      <div
        className={`ritual-resume-icon ${activeRituals.length === 2 ? "both" : ""}`}
      >
        {getRitualIcon(activeRituals, isMobile ? 18 : 22)}
      </div>

      <div className="ritual-resume-timer">
        <Text size="xs">{formatTime(timeLeft)}</Text>
      </div>
    </div>
  );
}
