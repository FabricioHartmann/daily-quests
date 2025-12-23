import { ProfileCard } from "../../components/Profile";
import { AchievementsCard } from "../../components/Profile/AchievementsCard";
import { Inventory } from "../../components/Profile/Inventory/Inventory.component";
import { ACHIEVEMENTS_CATALOG } from "../../data/achievementsCatalog";
import { useAchievementStore } from "../../store/achievements/achievements.store";
import "./MyProfile.css";

export function MyProfile() {
  const { achievements } = useAchievementStore();

  const unlockedAchievements = ACHIEVEMENTS_CATALOG.filter(
    (a) => achievements[a.id]?.unlocked
  ).length;


  return (
    <div className="profile-page-container">
      <div className="profile-page-header">
        <ProfileCard canEdit />
        <AchievementsCard
          achievementsAcquired={unlockedAchievements}
          totalAchievements={ACHIEVEMENTS_CATALOG.length}
        />
      </div>
      <div className="profile-page-content">
        <Inventory />
      </div>
    </div>
  );
}
