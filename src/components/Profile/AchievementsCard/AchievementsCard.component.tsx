import type { AchievementsCardProps } from "./AchievementsCard.types";
import { GiLaurelsTrophy } from "react-icons/gi";
import { Text } from "../../Generic";
import "./AchievementsCard.styles.css";

export function AchievementsCard({
  totalAchievements,
  achievementsAcquired,
}: AchievementsCardProps) {
  return (
    <div className={`achievements-card`}>
      <div>
        <Text color="var(--black)">Conquistas</Text>
      </div>
      <GiLaurelsTrophy size={36} />
      <Text size="lg" color="var(--black)">
        {achievementsAcquired}/{totalAchievements}
      </Text>
    </div>
  );
}
