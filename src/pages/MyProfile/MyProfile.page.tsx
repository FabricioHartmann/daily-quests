import { ProfileCard } from "../../components/Profile";
import { AchievementsCard } from "../../components/Profile/AchievementsCard";
import { Inventory } from "../../components/Profile/Inventory/Inventory.component";
import { Loader, Text } from "../../components/GenericComponents";
import "./MyProfile.styles.css";
import { useAchievementsCatalog } from "../../queries/useAchievementsCatalog";

export default function MyProfile() {
  const {
    data: achievements,
    isLoading,
  } = useAchievementsCatalog();

  if (isLoading) return <Loader />;

  const achievementsList = achievements ?? [];

  const unlockedAchievements = 0;

  return (
    <div className="profile-page-container">
      <Text size="lg">Perfil</Text>
      <div className="profile-page-header">
        <ProfileCard canEdit />
        <AchievementsCard
          achievementsAcquired={unlockedAchievements}
          totalAchievements={achievementsList.length}
        />
      </div>
      <Inventory />
    </div>
  );
}
