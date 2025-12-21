import { ProfileCard } from "../../components/Profile";
import { AchievementsCard } from "../../components/Profile/AchievementsCard";
import { Inventory } from "../../components/Profile/Inventory/Inventory.component";
import "./MyProfile.css";

export function MyProfile() {
  return (
    <div className="profile-page-container">
      <div className="profile-page-header">
        <ProfileCard canEdit />
        <AchievementsCard achievementsAcquired={0} totalAchievements={30} />
      </div>
      <div className="profile-page-content">
        <Inventory />
      </div>
    </div>
  );
}
