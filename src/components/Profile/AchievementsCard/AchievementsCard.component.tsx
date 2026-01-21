import type { AchievementsCardProps } from "./AchievementsCard.types";
import { GiLaurelsTrophy } from "react-icons/gi";
import { Text } from "../../Generic";
import "./AchievementsCard.styles.css";
import { useModalStore } from "../../../store/modal/modal.store";
import { AchievementsModal } from "../../Modal/variants/AchievementsModal/AchievementsModal.components";
import useIsMobile from "../../../hooks/useIsMobile/useIsMobile";

export function AchievementsCard({
  totalAchievements,
  achievementsAcquired,
}: AchievementsCardProps) {
  const { openModal } = useModalStore();
  const isMobile = useIsMobile();

  const openAchievementsModal = () => {
    openModal(<AchievementsModal />);
  };

  return (
    <div className="achievements-card" onClick={openAchievementsModal}>
      <GiLaurelsTrophy size={32} />
      <Text size={isMobile ? "md" : "lg"} color="var(--black)">
        {achievementsAcquired}/{totalAchievements}
      </Text>
    </div>
  );
}
