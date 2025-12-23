import type { AchievementsCardProps } from "./AchievementsCard.types";
import { GiLaurelsTrophy } from "react-icons/gi";
import { Text } from "../../Generic";
import "./AchievementsCard.styles.css";
import { useModalStore } from "../../../store/modal/modal.store";
import { AchievementsModal } from "../../Modal/variants/AchievementsModal/AchievementsModal.components";

export function AchievementsCard({
  totalAchievements,
  achievementsAcquired,
}: AchievementsCardProps) {
  const { openModal } = useModalStore();

  const openAchievementsModal = () => {
    openModal(<AchievementsModal />);
  };

  return (
    <div className="achievements-card" onClick={openAchievementsModal}>
      <Text color="var(--black)">Conquistas</Text>
      <GiLaurelsTrophy size={36} />
      <Text size="lg" color="var(--black)">
        {achievementsAcquired}/{totalAchievements}
      </Text>
    </div>
  );
}
