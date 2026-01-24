import React, { Suspense } from "react";
import type { AchievementsCardProps } from "./AchievementsCard.types";
import { GiLaurelsTrophy } from "react-icons/gi";
import { Text } from "../../GenericComponents";
import "./AchievementsCard.styles.css";
import { useModalStore } from "../../../store/modal/modal.store";
import useIsMobile from "../../../hooks/useIsMobile/useIsMobile";

const AchievementsModal = React.lazy(
  () =>
    import("../../Modal/variants/AchievementsModal/AchievementsModal.component"),
);

export function AchievementsCard({
  totalAchievements,
  achievementsAcquired,
}: AchievementsCardProps) {
  const openModal = useModalStore((s) => s.openModal);
  const isMobile = useIsMobile();

  const openAchievementsModal = () => {
    openModal(
      <Suspense fallback={<Text>Carregando conquistas...</Text>}>
        <AchievementsModal />
      </Suspense>,
    );
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
