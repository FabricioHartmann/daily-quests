import { ProfileCard } from "../../components/Profile";
import { AchievementsCard } from "../../components/Profile/AchievementsCard";
import { Inventory } from "../../components/Profile/Inventory/Inventory.component";
import { ACHIEVEMENTS_CATALOG } from "../../data/achievementsCatalog";
import { useAchievementStore } from "../../store/achievements/achievements.store";
import { Text } from "../../components/GenericComponents";
import "./MyProfile.styles.css";

export default function MyProfile() {
  const achievements = useAchievementStore((s) => s.achievements);

  const unlockedAchievements = ACHIEVEMENTS_CATALOG.filter(
    (a) => achievements[a.id]?.unlocked,
  ).length;

  return (
    <div className="profile-page-container">
      <Text size="lg">Perfil</Text>
      <div className="profile-page-header">
        <ProfileCard canEdit />
        <AchievementsCard
          achievementsAcquired={unlockedAchievements}
          totalAchievements={ACHIEVEMENTS_CATALOG.length}
        />
      </div>
      <Inventory />
    </div>
  );
}
