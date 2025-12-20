import { ProfileCard } from "../../components/Profile";
import { AchievementsCard } from "../../components/Profile/AchievementsCard/AchievementsCard.component";
import './MyProfile.css'

export function MyProfile() {
  return (
      <div className="profile-page-container">
        <div className="profile-page-header">
          <ProfileCard canEdit/>
          <AchievementsCard />
        </div>
      </div>
    );
}
